// MANIFEST03 S4: Capital Projects timeline. data/owner-capex-timeline.json → one timeline block on P2-O04, replacing
// the Projects and Benefits Delivered sub-themes. Usage: node tools/build_timeline.js
const path = require("path"), J = require("./pagejson.js");
const T = require(path.join(__dirname, "../data/owner-capex-timeline.json"));
const p = J.read("P2-O04-Capex");
const block = {type: "timeline", title: "Capital projects and benefits · plan vs actual by month", ask: "Is each project on schedule, and when do its benefits arrive?",
  cap: "Light bar = plan; solid bar = actual to date, coloured by status. Diamonds are benefits: hollow = planned, filled = delivered. Select a bar or a diamond for its details below.",
  months: T.months, now: T.now, stats: T.stats, items: T.items};
p.drill = (p.drill || []).filter((d) => !/^(Projects|Benefits delivered|Projects and benefits timeline)$/.test(d.n));
p.drill.unshift({n: "Projects and benefits timeline", blocks: [block]});
J.write("P2-O04-Capex", p);
console.log("timeline:", T.items.length, "rows,", T.items.reduce((a, x) => a + (x.benefits || []).length, 0), "benefits");
