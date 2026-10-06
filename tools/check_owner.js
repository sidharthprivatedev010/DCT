// MANIFEST01 acceptance checks for the Owner persona. Usage: node tools/check_owner.js
const {OWNER, load} = require("./owner_pages.js");
const PLANT = /\bPlants? ?0?\d\d?\b|\bPlants? 0\d/;
let bad = 0;
const fail = (m) => { bad++; console.log("FAIL", m); };
const strings = (o, out, path) => { if (typeof o === "string") out.push([path, o]); else if (Array.isArray(o)) o.forEach((x, i) => strings(x, out, path + "." + i)); else if (o && typeof o === "object") for (const k in o) { if (k === "equiv" || k === "access" || k === "_h") continue; strings(o[k], out, path + "." + k); } return out; };
const pages = {};
const extra = [["P2-S03o-KPIDetail", "?kpi=OPS-001&scope=Plant02"], ["P2-S03o-KPIDetail", "?kpi=OPS-001&scope=A1"], ["P2-S03o-KPIDetail", "?kpi=FIN-001&scope=Group"], ["P2-R01o-KPIReference", "?scope=A1"]];
for (const n of OWNER) pages[n] = load(n);
for (const [n, q] of extra) pages[n + q] = load(n, q);
for (const n in pages) {
  const p = pages[n];
  // 1A: no plant names or plant values (exception: the plant in brackets after the entity in the O-02 heat-map signal list)
  strings(p, [], "").forEach(([path, s]) => { if (PLANT.test(s) && !/\.(h|href|src)$/.test(path) && !(/O02/.test(n) && /\.items\.\d+\.ent$/.test(path))) fail(n + " plant reference at " + path + ": " + s.slice(0, 140)); });
  // no "How totals add up"
  if (JSON.stringify(p).indexOf("How totals add up") >= 0) fail(n + " still has a How totals add up tab");
}
// 1A: a KPI shown on several screens shows the same value (cards and KPI table rows, per scope)
const seen = {};
const txt = (c) => c == null ? "" : typeof c === "object" ? (c.t || "") : String(c);
const norm = (v) => ((String(v).replace(/,/g, "").replace("−", "-").match(/-?\d+(\.\d+)?/) || [String(v)])[0]);
const note = (id, scope, v, where) => { if (!v || v === "—") return; const k = id + "@" + scope; (seen[k] = seen[k] || []).push([norm(v), v, where]); };
const ent = (s) => /\bEntity A1\b|· A1\b/.test(s) ? "A1" : /\bEntity A2\b|· A2\b/.test(s) ? "A2" : "Group";
for (const n of OWNER) {
  const p = pages[n]; if (/R01o/.test(n)) continue;
  (p.kpis || []).forEach((k) => /^[A-Z]{3}-\d{3}$/.test(k.id || "") && note(k.id, k.scope || ent(k.name), k.v, n + " card"));
  const walk = (o) => { if (Array.isArray(o)) return o.forEach(walk); if (!o || typeof o !== "object") return;
    if (o.type === "table" && o.cols && o.rows) { const vi = o.cols.findIndex((c) => /^Value/.test(c)); if (vi > 0) o.rows.forEach((r) => { const a = Array.isArray(r) ? r : r.c; const id = (txt(a[0]).match(/[A-Z]{3}-\d{3}/g) || []).pop(); if (id) note(id, ent(txt(a[1]) + " " + (o.title || "")), txt(a[vi]), n + " table"); }); }
    for (const k in o) if (k !== "equiv" && k !== "access") walk(o[k]); };
  for (const k in p) if (k !== "kpis") walk(p[k]);
}
for (const k in seen) { const vals = [...new Set(seen[k].map((x) => x[0]))]; if (vals.length > 1) fail("KPI " + k + " differs across screens: " + seen[k].map((x) => x[1] + " (" + x[2] + ")").join(" · ")); }

// 1B: every verdict shown has its justification (card subtext, table Status-cell subtext)
const VERD = /^(?:[✓▲▼■◇] )?(On track|Improving|Declining|Intervention required|Breached|Forecast breach|Critical)$/;
for (const n of OWNER) {
  if (/R01o/.test(n)) continue;
  const p = pages[n];
  (p.kpis || []).forEach((k) => { if (k.bs && !k.why) fail(n + " card " + k.id + " (" + k.bs + ") has no justification"); });
  const walk = (o) => { if (Array.isArray(o)) return o.forEach(walk); if (!o || typeof o !== "object") return;
    if (o.type === "table" && o.cols && o.rows) { const si = o.cols.findIndex((c) => /^(Status|Business status)$/.test(c));
      if (si > 0) o.rows.forEach((r) => { const a = Array.isArray(r) ? r : r.c; if (VERD.test(txt(a[si]).trim()) && !(a[si] && a[si].sub)) fail(n + " table '" + o.title + "' row " + txt(a[0]) + " has no justification"); }); }
    for (const k in o) if (k !== "kpis" && k !== "equiv" && k !== "access") walk(o[k]); };
  walk(p);
}

// Screen 1: calendar months only, no critical banner, no Financial health measures table
{ const p = pages["P2-O01-EnterpriseHealth"], s = JSON.stringify(Object.assign({}, p, {equiv: null, access: null, period: null}));
  (s.match(/[^"]{0,30}\bP(0[1-9]|1[0-2])\b[^"]{0,30}/g) || []).forEach((m) => fail("O-01 period label: " + m));
  if (p.banner) fail("O-01 still has the critical alert banner");
  if (s.indexOf("Financial health measures") >= 0) fail("O-01 still has the Financial health measures table"); }

// Screen 3: the heat map is the only primary element; counts reconcile to the signal register; values match justifications
{ const p = pages["P2-O02-ChangeReport"], reg = require("../data/owner-signals.json");
  const blocks = (p.body || []); const h = blocks.filter((b) => b.type === "heat")[0];
  if (!h || blocks.length !== 1 || p.meta || p.counters || p.summary || p.tabs) fail("O-02: heat map must be the only primary element");
  else {
    if (h.items.length !== reg.length) fail("O-02 heat map has " + h.items.length + " signals, register has " + reg.length);
    reg.forEach((e) => { const n = h.items.filter((x) => x.id === e.signal_id && x.cat === e.category && x.lvl === e.risk_level).length; if (n !== 1) fail("O-02 signal " + e.signal_id + " not counted exactly once in " + e.category + "/" + e.risk_level); });
    h.items.forEach((x) => { const num = String(x.v || "").replace(/,/g, "").match(/\d+(\.\d+)?/); if (x.kpi && num && x.why.replace(/,/g, "").indexOf(num[0]) < 0) fail("O-02 " + x.id + " justification does not quote its value " + x.v); });
  } }

// MANIFEST02
const fs2 = require("fs");
for (const n in pages) {
  const p = pages[n];
  if (p.banner) fail(n + " still has a critical notification banner (1C)");
  // 1D: every entity reads by name; a bare code ("A1") is not allowed, and the code is not repeated after a name that holds it ("Entity A1 (A1)")
  const bare = /(?<!Entity |\()\bA[12]\b(?!\))(?! \()|\bEntity A[12] \(A[12]\)/;
  const SK = /\.(h|href|infoH|scope|kpi|kcols\.[^.]+|id|cat|lvl|k|tag|lens|rid|nav|equiv\..*|access\..*)$/;
  strings(p, [], "").forEach(([path, s]) => { if (!SK.test(path) && !/^\.(equiv|access)/.test(path) && bare.test(s)) fail(n + " entity without code/name at " + path + ": " + s.slice(0, 120)); });
  // Screen 8: nothing links to Actions & Escalations
  if (!/G08o/.test(n) && /P2-(O0[68]|G08o)-/.test(JSON.stringify(Object.assign({}, p, {equiv: null})))) fail(n + " still links to Actions & Escalations or Data Assurance");
}
for (const f of fs2.readdirSync(__dirname + "/..").filter((f) => /^P2-(O|G08o|S0[3-9]o?-|S1[01]|R01o)/.test(f) && f.endsWith(".html"))) {
  const h = fs2.readFileSync(__dirname + "/../" + f, "utf8"); const lens = (h.match(/data-dct-lens="([^"]+)"/) || [])[1];
  if (lens === "Owner" && !/^P2-(O0[68]|G08o)-/.test(f) && /href="P2-(O0[68]|G08o)-[^"]*"(?![^<]*hidden)/.test(h.replace(/<span hidden data-dct-lens[\s\S]*?<\/span>/, ""))) fail(f + " (Owner) renders a link to Actions & Escalations");
}
// Screen 1.3: every Data Assurance KPI is a card on Enterprise Overview, value as on Data Assurance
{ const p = pages["P2-O01-EnterpriseHealth"], da = pages["P2-G08o-OwnerTrust"];
  const daIds = new Set(); (da.kpis || []).forEach((k) => daIds.add(k.id));
  JSON.stringify(da.drill || []).replace(/"([A-Z]{3}-\d{3})"/g, (m, id) => daIds.add(id));
  daIds.delete("TRU-001");   // MANIFEST03 S1: the Summary block (TRU-001) is dropped with its filter
  const cards = []; const w = (o) => { if (Array.isArray(o)) return o.forEach(w); if (!o || typeof o !== "object") return; if (o.type === "kpis" && o.grp) cards.push(...o.items.map((k) => [o.grp, k])); for (const k in o) w(o[k]); }; w(p.drill);
  if (cards.length !== daIds.size) fail("O-01 has " + cards.length + " Data Assurance cards; Data Assurance has " + daIds.size + " KPIs");
  daIds.forEach((id) => { if (!cards.some(([g, k]) => k.id === id)) fail("O-01 is missing Data Assurance KPI " + id); });
  cards.forEach(([g, k]) => { const s = (da.kpis || []).find((x) => x.id === k.id); if (s && s.v !== k.v) fail("O-01 " + k.id + " " + k.v + " differs from Data Assurance " + s.v); if (!k.noProv || !k.noFoot || k.card !== "trend") fail("O-01 card " + k.id + " shows plan/forecast, refreshed or period tags"); });
  (p.kpis || []).forEach((k) => { if (!k.noProv || !k.noFoot) fail("O-01 card " + k.id + " shows a refreshed or period/status tag"); }); }
// Screen 9: only "Ask about this brief"
{ const p = pages["P2-O07-Brief"]; if (p.meta || (p.body || []).length !== 1 || p.body[0].type !== "ask") fail("O-07 must show only Ask about this brief"); }

// MANIFEST03
{ const p = pages["P2-O01-EnterpriseHealth"], d = (p.drill || []).find((x) => x.n === "Data assurance");
  const seg = d && d.blocks.find((b) => b.type === "seg"), grps = d ? d.blocks.filter((b) => b.grp).map((b) => b.grp) : [];
  if (!seg || seg.opts.map((o) => o.k).join() !== "reliability,ownership" || seg.def !== "reliability") fail("O-01 Data assurance filters must be Data Reliability (default) and Data Ownership & Rules only");
  if (grps.indexOf("ownership") < grps.lastIndexOf("reliability")) fail("O-01 Data Reliability must come before Data Ownership & Rules");
  if (JSON.stringify(d).indexOf("Numbers on your pages") >= 0) fail("O-01 still has the trust table"); }
{ const p = pages["P2-O05-Risk"];
  if ((p.tabs || []).map((t) => t.n).join() !== "Material Risk,Compliance,EHS") fail("O-05 must have exactly Material Risk, Compliance, EHS");
  if (/Biggest risks/i.test(JSON.stringify(p))) fail("O-05 still has Biggest Risks");
  const walk = (o) => { if (Array.isArray(o)) return o.forEach(walk); if (!o || typeof o !== "object") return;
    if (o.type === "table" && /Materiality|materiality|Named actions/.test(o.title || "")) o.rows.forEach((r) => { const a = Array.isArray(r) ? r : r.c; const st = a.filter((c) => c && typeof c === "object" && (c.dark || c.mid || c.sub)); if (/Composite|Rating|Status/.test(o.cols.join()) && !a.some((c) => c && c.sub)) fail("O-05 row without justification: " + txt(a[0])); });
    for (const k in o) walk(o[k]); }; walk([p.dominant, p.drivers, p.actions]); }
{ const p = pages["P2-O04-Capex"], names = (p.drill || []).map((d) => d.n);
  if (names.includes("Projects") || names.includes("Benefits delivered")) fail("O-04 still has the Projects / Benefits delivered sub-themes");
  const t = JSON.stringify(p.drill).indexOf('"type":"timeline"') >= 0; if (!t) fail("O-04 has no timeline"); }
{ const a = pages["P2-O07-Brief"].body[0]; if (!a.hist || a.hist.length < 3 || a.hist.length > 5) fail("O-07 needs 3–5 seeded questions"); }

module.exports = {pages, fail};
if (require.main === module) console.log(bad ? bad + " problem(s)" : "Owner checks passed");
