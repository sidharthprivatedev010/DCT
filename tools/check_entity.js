// Entity persona checks (js/data/entity-cards.js): every KPI card on an Entity screen is stand-alone (no link, no (i)),
// carries a one-line justification, shows its plant breakdown or says why it has none, and gives a root cause when off
// target or worsening. Plant effects on a ratio KPI must add up to the Entity A1 gap to target.
// Usage: node tools/check_entity.js [--dump]   (--dump prints every card's text for review)
const fs = require("fs"), vm = require("vm"), path = require("path"), {load} = require("./owner_pages.js");
const root = path.join(__dirname, "..") + "/";
const ctx = vm.createContext({}); vm.runInContext(fs.readFileSync(root + "js/data/base-data.js", "utf8") + ";this.D=DCTData", ctx);
const D = ctx.D;
const ENTITY = fs.readdirSync(root).filter((f) => /^P2-.*\.html$/.test(f) && /js\/data\/entity-cards\.js/.test(fs.readFileSync(root + f, "utf8"))).map((f) => f.replace(/\.html$/, ""));
const dump = process.argv.includes("--dump");
let bad = 0, n = 0; const fail = (m) => { bad++; console.log("FAIL", m); };
const num = (s) => +String(s).replace(/[−–]/g, "-").replace(/[^\d.-]/g, "");
for (const name of ENTITY) {
  let p; try { p = load(name, ""); } catch (e) { fail(name + " did not load: " + e.message); continue; }
  if (p.lens !== "Entity") continue;
  const cards = [];
  (function nest(o, isK) { if (Array.isArray(o)) return o.forEach((x) => nest(x, isK)); if (!o || typeof o !== "object") return; if (isK) cards.push(o); Object.keys(o).forEach((k) => { if (k !== "equiv" && k !== "access") nest(o[k], k === "kpis" || (k === "items" && o.type === "kpis")); }); })(p, false);
  if (dump && cards.length) console.log("\n#### " + name + " · " + p.title);
  for (const c of cards) {
    if (!c || typeof c !== "object" || !("v" in c || "id" in c)) continue;
    n++;
    const id = c.id || "";
    if (c.href || c.h) fail(name + " " + id + " card still links to " + (c.href || c.h));
    if (!c.noInfo) fail(name + " " + id + " card keeps its (i) link");
    if (!/^[A-Z]{3}-\d{3}$/.test(id) || c.pending) continue;
    if (!c.why) fail(name + " " + id + " has no justification");
    if (!c.hasPl && !c.plN) fail(name + " " + id + " has no plant breakdown and no note");
    if (/Declining|Intervention/.test(c.bs || "") && !c.root) fail(name + " " + id + " is " + c.bs + " but has no root cause");
    if (c.hasPl && c.plH === "Effect on A1") {
      const r = D.kpi[id] && D.kpi[id].A1, tot = c.plRows.reduce((a, x) => a + num(x.c), 0), gap = num(r.var);
      if (Math.abs(tot - gap) > 0.15 + 0.01 * Math.abs(gap)) fail(name + " " + id + " plant effects add to " + tot.toFixed(2) + ", entity gap is " + r.var);
    }
    if (dump) {
      console.log("\n  " + id + " · " + c.name + " = " + c.v + " " + (c.u || "") + " [" + c.bs + "]");
      console.log("    why:  " + c.why);
      if (c.hasPl) { console.log("    " + c.plT + (c.plH ? "  (" + c.plH + ")" : "")); c.plRows.forEach((x) => console.log("      " + [x.pl, x.v, x.tr, x.c].join(" | "))); }
      if (c.plN) console.log("    note: " + c.plN);
      if (c.root) console.log("    root: " + c.root);
    }
  }
}
// Tables: no bare KPI code (a code at the end of a cell or before a list separator without its name) and no plant without its code
for (const name of ENTITY) {
  let p; try { p = load(name, ""); } catch (e) { continue; }
  if (p.lens !== "Entity") continue;
  (function walk(o, where) {
    if (Array.isArray(o)) return o.forEach((x, i) => walk(x, where));
    if (!o || typeof o !== "object") return;
    if ((o.type === "table" || o.type === "watchlist") && Array.isArray(o.rows)) {
      const paired = /^(KPI|ID)$/i.test(String(o.cols && o.cols[0])) && /measure|name/i.test(String(o.cols && o.cols[1]));
      o.rows.forEach((r) => (Array.isArray(r) ? r : r.c || []).forEach((c, i) => {
        const t = c && typeof c === "object" ? String(c.t || "") : String(c == null ? "" : c);
        if (/\bPlant \d\d\b(?! \(P\d\d\))/.test(t)) fail(name + " table '" + o.title + "' plant without code: " + t.slice(0, 80));
        if (!(i === 0 && paired) && /(?<![-\w])[A-Z]{3}-\d{3}\s*$/.test(t)) fail(name + " table '" + o.title + "' bare KPI code: " + t.slice(0, 80));
      }));
    }
    Object.keys(o).forEach((k) => { if (k !== "equiv" && k !== "access") walk(o[k], where); });
  })(p, name);
}
console.log(bad ? bad + " Entity problem(s)" : "Entity checks passed (" + n + " cards on " + ENTITY.length + " screens)");
process.exitCode = bad ? 1 : 0;
