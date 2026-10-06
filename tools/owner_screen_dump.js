// Prints what an Owner screen shows (element, label, KPI, value as displayed) as JSON, for tools/sync_owner_workbook.py.
// Usage: node tools/owner_screen_dump.js P2-O03-CashLiquidity
const {load} = require("./owner_pages.js");
const name = process.argv[2], p = load(name), out = [];
const shown = (c) => (c.v == null ? "—" : String(c.v)) + (c.u ? " " + c.u : "");
// every dash block on the page (O-09 keeps its charts in a second dash block under the heat map)
const dashes = [].concat(p.dominant || [], p.drivers || [], p.forecast || []).filter((b) => b && b.type === "dash");
for (const d of dashes) {
  (d.cols || []).forEach((col) => {
    if (col.hero) out.push({element: "Card", label: col.hero.l, kpi: col.hero.kpi, shown: shown(col.hero)});
    col.cards.forEach((c) => { out.push({element: "Card", label: c.l, kpi: c.kpi, shown: shown(c)}); (c.extra || []).forEach((x) => out.push({element: "Card detail", label: c.l + " · " + x.l, kpi: "", shown: x.v})); });
  });
  (d.charts || []).forEach((g) => out.push({element: "Chart", label: g.t, kpi: (g.series[0] || {}).kpi || "", shown: g.x.join("–").replace(/–.*–/, "–") + " monthly series"}));
}
console.log(JSON.stringify(out));
