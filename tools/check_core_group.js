// MANIFEST06 acceptance checks for the Core Group persona. Usage: node tools/check_core_group.js
const fs = require("fs"), path = require("path"), {load} = require("./owner_pages.js");
const CG = ["P2-G01-Portfolio","P2-G01b-PortfolioCertified","P2-G02-EntityComparison","P2-G03-Financial","P2-G08-CertGovernance","P2-S12-Signals","P2-G04-CashWC","P2-G05-OpsBenchmark","P2-G06-CapexPortfolio","P2-G07-Risk","P2-G09-Escalations","P2-G10-Briefing","P2-S03-KPIDetail","P2-S04c-Alert","P2-S05c-Case","P2-S06-Scenario","P2-S07c-AIExplain","P2-S08-Evidence","P2-R01-KPIReference"];
const RID = {"P2-G03-Financial":"G-02","P2-G01-Portfolio":"G-01","P2-G01b-PortfolioCertified":"G-01","P2-G02-EntityComparison":"G-02","P2-G08-CertGovernance":"G-08","P2-S12-Signals":"S-12","P2-G04-CashWC":"G-04","P2-G05-OpsBenchmark":"G-05","P2-G06-CapexPortfolio":"G-06","P2-G07-Risk":"G-07","P2-G09-Escalations":"G-09","P2-G10-Briefing":"G-10"};
// KPI register (§3): tier and target screens, read from the manifest
const REG = {};
fs.readFileSync(path.join(__dirname, "../data/MANIFEST06-core-group-persona.md"), "utf8").split("\n").forEach((l) => {
  const c = l.split("|").map((x) => x.trim()); if (!/^[A-Z]{3}-\d{3}$/.test(c[1] || "")) return;
  REG[c[1]] = {tier: c[4], target: c[6] === "—" ? [] : c[6].split(",").map((x) => x.trim())};
});
const PLANT = /\bPlants? ?0?\d\d?\b/;
let bad = 0; const fail = (m) => { bad++; console.log("FAIL", m); };
const strings = (o, out, p) => { if (typeof o === "string") out.push([p, o]); else if (Array.isArray(o)) o.forEach((x, i) => strings(x, out, p + "." + i)); else if (o && typeof o === "object") { if (o.type === "watchlist" || o.plantOk) return out; for (const k in o) { if (/^(equiv|access|_h|plRows|plN|plT|leg|kpiLeg)$/.test(k)) continue; strings(o[k], out, p + "." + k); } } return out; };
const blocks = (o, f) => { if (Array.isArray(o)) return o.forEach((x) => blocks(x, f)); if (!o || typeof o !== "object") return; if (o.type) f(o); for (const k in o) if (!/^(equiv|access)$/.test(k)) blocks(o[k], f); };
const pages = {};
for (const n of CG) pages[n] = load(n);
for (const [n, q] of [["P2-S03-KPIDetail", "?kpi=OPS-001&scope=Plant02"], ["P2-S03-KPIDetail", "?kpi=OPS-001&scope=A1"], ["P2-S03-KPIDetail", "?kpi=FIN-001&scope=Group"], ["P2-R01-KPIReference", "?scope=Plant01"]]) pages[n + q] = load(n, q);
const ids = {};
for (const n in pages) {
  const p = pages[n], vis = Object.assign({}, p, {equiv: null, access: null});
  // 1A / 1B: plant names only inside a watchlist block, a plant-variation block (plantOk) or a card's plant-variation fields (2026-10-06)
  strings(vis, [], "").forEach(([pt, s]) => { if (PLANT.test(s) && !/\.(h|href|src|infoH)$/.test(pt)) fail(n + " plant reference at " + pt + ": " + s.slice(0, 120)); });
  blocks(vis, (b) => { if (b.type !== "watchlist") return;
    if ((b.rows || []).length > 5) fail(n + " watchlist has " + b.rows.length + " rows");
    (b.rows || []).forEach((r) => { if (!REG[r.kpi] || REG[r.kpi].tier !== "W") fail(n + " watchlist row KPI " + r.kpi + " is not tier W"); if (r.h || r.href) fail(n + " watchlist row has a link"); }); });
  // 4: tier R / A IDs
  const s = JSON.stringify(vis); const found = new Set(s.match(/\b[A-Z]{3}-\d{3}\b/g) || []);
  found.forEach((id) => { if (REG[id] && /[RA]/.test(REG[id].tier) && !/R01/.test(n)) fail(n + " shows tier " + REG[id].tier + " KPI " + id); });
  if (RID[n]) found.forEach((id) => (ids[RID[n]] = ids[RID[n]] || new Set()).add(id));
  // 6: placeholders
  const m = s.match(/.{0,40}(\[(DATE|PH)|placeholder|hand-set|illustrative).{0,40}/i); if (m && !/R01/.test(n)) fail(n + " placeholder text: " + m[0]);
  // 1E: no links to Entity-lens pages
  const e = s.match(/P2-(E\d\d|S\d\de)[^"]*/); if (e) fail(n + " links to Entity-lens page " + e[0]);
}
for (const id in REG) if (/[EW]/.test(REG[id].tier)) REG[id].target.forEach((sc) => { if (!(ids[sc] && ids[sc].has(id))) fail(id + " missing from its target screen " + sc); });
// S-03 entity floor, R-01 scopes
if (/Plant/.test(JSON.stringify(pages["P2-S03-KPIDetail?kpi=OPS-001&scope=Plant02"].title || ""))) fail("S-03 at Plant02 does not fall back to the entity");
// Justifications on statuses
const txt = (c) => c == null ? "" : typeof c === "object" ? (c.t || "") : String(c);
for (const n of CG) { if (/R01|S03/.test(n)) continue; (pages[n].kpis || []).forEach((k) => { if (k.bs && k.bs !== "—" && !k.why) fail(n + " card " + k.id + " (" + k.bs + ") has no justification"); }); }
// Same value across screens (cards, Group scope)
const seen = {};
for (const n of CG) (pages[n].kpis || []).forEach((k) => { if (!/^[A-Z]{3}-\d{3}$/.test(k.id || "") || !k.v) return; const key = k.id + "@" + (k.scope || "Group"); (seen[key] = seen[key] || []).push([String(k.v), n]); });
for (const k in seen) if (new Set(seen[k].map((x) => x[0])).size > 1) fail("KPI " + k + " differs: " + seen[k].map((x) => x[0] + " (" + x[1] + ")").join(" · "));
// Tables: every KPI code carries its name and every plant its code (2026-10-06)
for (const n in pages) blocks(Object.assign({}, pages[n], {equiv: null, access: null}), (b) => {
  if (!(b.type === "table" || b.type === "watchlist") || !Array.isArray(b.rows)) return;
  const paired = /^(KPI|ID)$/i.test(String(b.cols && b.cols[0])) && /measure|name/i.test(String(b.cols && b.cols[1]));
  b.rows.forEach((r) => (Array.isArray(r) ? r : r.c || []).forEach((c, i) => { const t = txt(c);
    if (/\bPlant \d\d\b(?! \(P\d\d\))/.test(t)) fail(n + " table '" + b.title + "' plant without code: " + t.slice(0, 70));
    if (!(i === 0 && paired) && /(?<![-\w])[A-Z]{3}-\d{3}\s*$/.test(t)) fail(n + " table '" + b.title + "' bare KPI code: " + t.slice(0, 70)); }));
});
// Cards: stand-alone, no root cause (plant values per entity are checked against the workbook in check_core_group_plants.js)
for (const n of CG) (pages[n].kpis || []).forEach((k) => { if (k.href) fail(n + " card " + k.id + " still links"); if (k.noInfo) fail(n + " card " + k.id + " has no (i) link to R-01"); if (k.root) fail(n + " card " + k.id + " has a root cause"); });
module.exports = {pages, REG};
if (require.main === module) console.log(bad ? bad + " problem(s)" : "Core Group checks passed");
