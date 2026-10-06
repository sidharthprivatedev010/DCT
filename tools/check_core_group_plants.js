// Core Group plant values (manager review 2026-10-06): every plant value shown on a Core Group screen (card plant rows,
// table sub-lines, roll-up tab, S-03 calculation) must equal data/KPI-Lineage-Model.xlsx (sheet "KPI Register", Sep 2026),
// and every plant must sit under its own entity (Plants 01–03 → A1, 04–06 → A2).
// Usage: node tools/check_core_group_plants.js   (needs python with openpyxl to read the workbook)
const path = require("path"), {execFileSync} = require("child_process"), {load} = require("./owner_pages.js");
const {pages} = require("./check_core_group.js");
const XLSX = path.join(__dirname, "../data/KPI-Lineage-Model.xlsx");
const py = "import json,sys,openpyxl\nws=openpyxl.load_workbook(sys.argv[1],data_only=True)['KPI Register']\n" +
  "sc=['Plant01','Plant02','Plant03','Plant04','Plant05','Plant06','A1','A2','Group']\n" +
  "print(json.dumps({r[0]:dict(zip(sc,r[10:19])) for r in ws.iter_rows(min_row=2,values_only=True) if r[0]},default=str))";
let REG;
for (const exe of ["python", "python3", "py"]) { try { REG = JSON.parse(execFileSync(exe, ["-c", py, XLSX], {encoding: "utf8", env: Object.assign({}, process.env, {PYTHONIOENCODING: "utf-8"}), stdio: ["ignore", "pipe", "ignore"]})); break; } catch (e) { /* next */ } }
if (!REG) { console.log("SKIP Core Group plant values: python with openpyxl is needed to read " + XLSX); process.exit(0); }
const ENT = {"01": "A1", "02": "A1", "03": "A1", "04": "A2", "05": "A2", "06": "A2"};
let bad = 0, n = 0; const fail = (m) => { bad++; if (bad <= 40) console.log("FAIL", m); };
const missing = {}; // KPIs with plant values in the model but no row in the workbook: reported, not failed
const num = (t) => { const m = /[−-]?[\d,]+(\.\d+)?/.exec(String(t).replace(/−/g, "-")); return m ? {v: +m[0].replace(/,/g, ""), dp: (m[1] || ".").length - 1} : null; };
// The workbook keeps base units (t, ₹ k); screens may show kt or ₹ m. The model stores values at 1–2 dp before display
// rounding (e.g. CST-001 Plant 04: 3,275.49 → 3,275.5 → "3,276"), so 0.05 of slack is allowed on top of half a display unit.
// Text values must match exactly; "Not expected" is the display of the 99-day sentinel (PRD-001 days to breach).
function same(id, scope, shown, where) {
  n++;
  if (!REG[id]) { (missing[id] = missing[id] || new Set()).add(where.split(" ")[0]); return; }
  const x = REG[id][scope], s = num(shown), t = String(shown).trim();
  if (typeof x === "string" && x.trim() === t) return;
  if (x === 99 && /^Not expected$/.test(t)) return;
  if (typeof x !== "number" || !s) return fail(where + ": " + id + " " + scope + " shows '" + shown + "', workbook has '" + x + "'");
  const tol = Math.pow(10, -s.dp) / 2 + 0.05;
  if (![1, 1000].some((f) => Math.abs(x / f - s.v) <= tol)) fail(where + ": " + id + " " + scope + " shows " + shown + ", workbook " + x);
}
const txt = (c) => c == null ? "" : typeof c === "object" ? (c.t || "") : String(c);
const blocks = (o, f) => { if (Array.isArray(o)) return o.forEach((x) => blocks(x, f)); if (!o || typeof o !== "object") return; if (o.type) f(o); for (const k in o) if (!/^(equiv|access)$/.test(k)) blocks(o[k], f); };
// "Entity A1 (A1): P01 96.0% · P02 78.4% | Entity A2 (A2): P04 …" or "P01 96.0% · …" under an entity cell
function subs(id, sub, ent, where) {
  String(sub).split("|").forEach((part) => {
    const e = (/\b(A[12])\b/.exec(part) || [])[1] || ent;
    (part.match(/\bP0[1-6] [^·|]+/g) || []).forEach((t) => {
      const p = t.slice(1, 3);
      if (e && ENT[p] !== e) fail(where + ": " + id + " lists Plant " + p + " under " + e);
      same(id, "Plant" + p, t.slice(4), where);
    });
  });
}
const PAGES = Object.assign({}, pages);
for (const q of ["?kpi=OPS-001&scope=Group", "?kpi=CST-001&scope=A2", "?kpi=REL-004&scope=A1"]) PAGES["P2-S03-KPIDetail" + q] = load("P2-S03-KPIDetail", q);
for (const name in PAGES) {
  const p = PAGES[name];
  // cards (also cards nested in "kpis" blocks)
  const cards = (p.kpis || []).slice(); blocks(Object.assign({}, p, {kpis: null}), (b) => { if (b.type === "kpis" && Array.isArray(b.items)) cards.push(...b.items); });
  cards.forEach((c) => { let ent = null; (c.plRows || []).forEach((r) => {
    const e = /\((A[12])\)/.exec(r.pl), pl = /Plant (\d\d)/.exec(r.pl);
    if (e) { ent = e[1]; same(c.plK, ent, r.v, name + " card " + c.id); }
    else if (pl) { if (ENT[pl[1]] !== ent) fail(name + " card " + c.id + " lists Plant " + pl[1] + " under " + ent); same(c.plK, "Plant" + pl[1], r.v, name + " card " + c.id); }
  }); });
  blocks(Object.assign({}, p, {kpis: null}), (b) => {
    // bar charts bound to a KPI with plant bars (G-05 Production vs plan by entity and plant)
    if (b.type === "bars" && b.kpi && b.plantOk) (b.rows || []).forEach((r) => { const pl = /Plant (\d\d)/.exec(r.l), e = /\((A[12])\)/.exec(r.l);
      if (pl && !new RegExp("\\b" + ENT[pl[1]] + "\\b").test(r.note || "")) fail(name + " bars '" + b.title + "': Plant " + pl[1] + " not under " + ENT[pl[1]]);
      if (pl || e) same(b.kpi, pl ? "Plant" + pl[1] : e[1], r.d, name + " bars"); });
    if (b.type !== "table" || !Array.isArray(b.rows) || b.type === "watchlist") return;
    const cols = (b.cols || []).map(txt), vi = cols.indexOf("Value");
    b.rows.forEach((r) => { const a = Array.isArray(r) ? r : r.c || [];
      const ent = (/\b(A[12])\b/.exec(txt(a[0])) || [])[1];
      a.forEach((c, i) => { if (!c || typeof c !== "object" || !c.sub || !/\bP0[1-6] /.test(c.sub)) return;
        const id = b.kcols ? b.kcols[cols[i]] : i === vi ? ((/^([A-Z]{3}-\d{3})\b/.exec(txt(a[0])) || /^([A-Z]{3}-\d{3})\b/.exec(txt(a[1])) || [])[1]) : null;
        if (!id) return fail(name + " table '" + b.title + "': plant sub-line without a KPI: " + c.sub);
        subs(id, c.sub, b.kcols ? ent : null, name + " table '" + b.title + "'"); }); });
    // roll-up tab: plant columns, then the entity they roll into
    if (/^Plant → Entity → Group/.test(b.title || "")) b.rows.forEach((r) => { const a = r.c || r, id = txt(a[0]);
      cols.forEach((h, i) => { const pl = /^Plant (\d\d)/.exec(h), e = /\((A[12])\)/.exec(h); const t = txt(a[i]);
        if (t === "—" || !(pl || e)) return; same(id, pl ? "Plant" + pl[1] : e[1], t, name + " roll-up"); }); });
    // S-03 calculation: each plant row's result column
    if (/^Calculation · plant inputs/.test(b.title || "")) { const id = (/^([A-Z]{3}-\d{3})/.exec(cols[cols.length - 1]) || [])[1];
      b.rows.forEach((r) => { const a = r.c, pl = /^Plant (\d\d)/.exec(txt(a[0])), e = /^Entity (A[12])/.exec(txt(a[0]));
        if (pl || e) same(id, pl ? "Plant" + pl[1] : e[1], txt(a[a.length - 1]), name + " calculation"); }); }
  });
}
for (const id in missing) console.log("WARN " + id + ": plant values shown (" + [...missing[id]].join(", ") + ") but the KPI has no row in KPI-Lineage-Model.xlsx");
console.log(bad ? bad + " problem(s) in " + n + " plant values" : "Core Group plant values match KPI-Lineage-Model.xlsx (" + n + " values checked)");
if (bad) process.exitCode = 1;
