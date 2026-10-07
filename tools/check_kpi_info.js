// (i) buttons on Core Group and Entity screens: every KPI shown on a card, in a table's KPI cells (columns 1–2) or on a
// tile gets an (i) link to its lens's KPI Reference (R-01 / R-01e), and that R-01 entry must exist and match the model
// in data/kpi-model (kpi_catalogue.csv, kpi_definitions.json, kpi_values.csv, ui_kpis.json).
// Usage: node tools/check_kpi_info.js [--list]
const fs = require("fs"), vm = require("vm"), path = require("path"), {load} = require("./owner_pages.js");
const root = path.join(__dirname, "..") + "/", M = root + "data/kpi-model/";
const ctx = vm.createContext({}); vm.runInContext(fs.readFileSync(root + "js/data/base-data.js", "utf8") + ";this.D=DCTData", ctx);
const P = ctx.D.plant;
const r01 = fs.readFileSync(root + "js/c/P2-R01-KPIReference.js", "utf8");
const DROP = JSON.parse(/var DROP = (\{[\s\S]*?\]\});/.exec(r01)[1].replace(/\s+/g, " "));
const SCOPE0 = {"Core Group": "Group", "Entity": "A1"};
// model files
const csv = (f) => { const L = fs.readFileSync(M + f, "utf8").trim().split(/\r?\n/), split = (l) => { const o = []; let c = "", q = false; for (const ch of l) { if (ch === '"') q = !q; else if (ch === "," && !q) { o.push(c); c = ""; } else c += ch; } o.push(c); return o; }; const h = split(L[0]); return L.slice(1).map((l) => { const v = split(l), r = {}; h.forEach((k, i) => r[k] = v[i]); return r; }); };
const CAT = {}; csv("kpi_catalogue.csv").forEach((r) => CAT[r.kpi] = r);
const DEFS = JSON.parse(fs.readFileSync(M + "kpi_definitions.json", "utf8"));
const VAL = {}; csv("kpi_values.csv").forEach((r) => { const k = Object.keys(r); VAL[r[k[0]] + "|" + r[k[1]] + "|" + r[k[2]]] = r[k[3]]; });
const UI = {}; JSON.parse(fs.readFileSync(M + "ui_kpis.json", "utf8")).forEach((u) => UI[u.id] = u);
const list = process.argv.includes("--list");
let bad = 0, warn = 0; const fail = (m) => { bad++; console.log("FAIL", m); }, w = (m) => { warn++; console.log("WARN", m); };
const ID = /^[A-Z]{3}-\d{3}$/;
const pages = fs.readdirSync(root).filter((f) => /^P2-[EGS].*\.html$/.test(f) && !/R01/.test(f)).map((f) => f.replace(/\.html$/, ""));
const seen = {};   // lens|id -> [page]
for (const name of pages) {
  let p; try { p = load(name, ""); } catch (e) { continue; }
  if (!SCOPE0[p.lens]) continue;
  const ids = new Set();
  const cards = [];
  (function walk(o, inK) {
    if (Array.isArray(o)) return o.forEach((x) => walk(x, inK));
    if (!o || typeof o !== "object") return;
    if (inK && ("v" in o || "id" in o)) cards.push(o);
    if ((o.type === "table") && Array.isArray(o.rows)) o.rows.forEach((r) => (Array.isArray(r) ? r : r.c || []).slice(0, 2).forEach((c) => { const t = c && typeof c === "object" ? String(c.t || "") : String(c == null ? "" : c); (t.match(/[A-Z]{3}-\d{3}/g) || []).filter((x) => P.kpi[x]).slice(0, 1).forEach((x) => ids.add(x)); }));
    if (o.type === "tiles" && Array.isArray(o.tiles || o.items)) (o.tiles || o.items).forEach((t) => { const m = /^[A-Z]{3}-\d{3}\b/.exec(t.l || ""); if (m && P.kpi[m[0]]) ids.add(m[0]); });
    Object.keys(o).forEach((k) => { if (k !== "equiv" && k !== "access") walk(o[k], k === "kpis" || inK); });
  })(p, false);
  for (const c of cards) {
    if (!ID.test(c.id || "") || c.ts === "Restricted") continue;
    if (c.noInfo) fail(name + " card " + c.id + " has no (i) link");
    ids.add(c.id);
  }
  ids.forEach((id) => { const k = p.lens + "|" + id; (seen[k] = seen[k] || []).push(name); });
}
for (const key of Object.keys(seen).sort()) {
  const [lens, id] = key.split("|"), k = P.kpi[id], on = seen[key].join(" "), sc = SCOPE0[lens];
  if (list) console.log(lens.padEnd(10), id, k ? k.name : "?", "·", on);
  if (!k) { fail(lens + " " + id + " (" + on + ") is not in the model: no R-01 entry"); continue; }
  if ((DROP[lens] || []).indexOf(id) >= 0) fail(lens + " " + id + " (" + on + ") is on screen but dropped from R-01");
  const cat = CAT[id];
  if (!cat) fail(lens + " " + id + " not in kpi_catalogue.csv");
  else {
    if (cat.measure !== k.name) fail(id + " name '" + k.name + "' ≠ catalogue '" + cat.measure + "'");
    if ((cat.formula || "") !== (k.formula || "")) fail(id + " formula '" + k.formula + "' ≠ catalogue '" + cat.formula + "'");
    if ((cat.time_basis || "") !== (k.basis || "")) fail(id + " basis '" + k.basis + "' ≠ catalogue '" + cat.time_basis + "'");
    if ((cat.alias_of || "") !== (k.aliasOf || "")) fail(id + " alias '" + k.aliasOf + "' ≠ catalogue '" + cat.alias_of + "'");
  }
  const def = DEFS[id] || (cat && cat.alias_of && DEFS[cat.alias_of]);
  if (!def) fail(id + " has no definition in kpi_definitions.json");
  else if ((typeof def === "string" ? def : def.def || def.definition) !== k.def) fail(id + " R-01 definition differs from kpi_definitions.json");
  if (!k.formula) fail(id + " has no formula");
  for (let i = 0; i < 6; i++) {
    const per = "2026-0" + (i + 4), csvV = VAL[id + "|" + sc + "|" + per], mv = (k.val[sc] || [])[i];
    if (csvV == null || csvV === "") { if (typeof mv === "number") fail(id + " " + sc + " " + per + " has value " + mv + " but none in kpi_values.csv"); continue; }
    if (typeof mv === "string" ? mv === csvV : typeof mv === "number" && !isNaN(+csvV) && [1, 1000].some((f) => Math.abs(mv - +csvV / f) <= 0.5 * Math.pow(10, -(k.dp || 0)) + 1e-9)) continue;
    fail(id + " " + sc + " " + per + " R-01 value " + mv + " ≠ kpi_values.csv " + csvV);
  }
  if (!(k.val[sc] || []).some((x) => x != null && x !== "")) w(lens + " " + id + " has no " + sc + " value in the model");
  seen[key].forEach((n) => { if ((k.screens || []).indexOf(n) < 0) fail(lens + " " + id + " is on " + n + " but R-01 does not list that screen (ui_kpis.json " + (UI[id] ? UI[id].pages : "missing") + ")"); });
}
console.log((bad ? "FAIL" : "OK") + " · " + Object.keys(seen).length + " lens×KPI entries · " + bad + " failures · " + warn + " warnings");
process.exit(bad ? 1 : 0);
