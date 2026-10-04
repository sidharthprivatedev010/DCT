// One-off: adds the overview visuals (js/c/dc-viz.js block types) to the pages where they answer the page question.
// Every number below is taken from, or sums to, figures already on that page (see comments). Idempotent: re-running
// first removes any block whose `viz` tag it owns. Usage: node tools/place-visuals.js && node tools/regen.js
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..") + "/";
const RE = /return \{ page: (\{.*\}) \};/s;
function edit(name, fn) {
  const f = root + "js/c/" + name + ".js", s = fs.readFileSync(f, "utf8"), m = s.match(RE);
  const p = JSON.parse(m[1]);
  fn(p);
  fs.writeFileSync(f, s.replace(m[1], () => JSON.stringify(p)));
  console.log("placed", name);
}
const strip = (arr) => arr.filter((x) => !(x && typeof x === "object" && x.viz));
const asArr = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]);
const RM = "Reconciliation break";

/* ── O-01 Enterprise Health ─────────────────────────────────────────────── */
const PULSE = {viz: 1, type: "pulse", title: "Enterprise pulse · share of governed KPIs on track by domain", ask: "Is the enterprise healthier today than yesterday, and in which domain is it weakest?", scope: "Group",
  read: "Operations is the weak domain: 1 of 9 governed KPIs on track and Intervention required, driven by the Plant 02 shortfall. Cash and Liquidity has 1 of 8 on track. Financial and Risk hold 5 of 6, Capex 6 of 8. The 24-hour changes all trace back to the RM-1 supply event.",
  cap: "Petal = one status-strip domain. Length = share of its governed KPIs on track (base-data.js, Group scope); colour = the domain status in the status strip. Hover a petal for the KPIs not on track.",
  domains: [
    {n: "Financial", full: "Enterprise and Financial Health", s: "Deteriorating", k: [["FIN-001", 1, "EBITDA"], ["FIN-002", 1, "EBIT"], ["FIN-003", 1, "Revenue"], ["FIN-004", 1, "Free Cash Flow"], ["FIN-005", 1, "ROCE"], ["FIN-006", -1, "Net Debt"]]},
    {n: "Cash and liquidity", full: "Cash and Liquidity", s: "Deteriorating", k: [["CSH-001", 1, "Cash position"], ["CSH-003", 1, "Daily collections"], ["CSH-004", -1, "Cash-conversion cycle"], ["WCP-001", -1, "DSO"], ["WCP-002", 1, "DPO"], ["WCP-003", -1, "Inventory days"], ["WCP-004", -1, "Net working capital"], ["TRS-004", 1, "Hedge cover · next 6 m"]]},
    {n: "Operations and assets", full: "Operations and Assets", s: "Intervention required", k: [["OPS-001", 1, "Production vs plan"], ["OPS-002", 1, "Sales vs plan"], ["OPS-003", 1, "Capacity utilization"], ["PLT-002", 1, "OEE"], ["REL-005", 1, "Preventive-maintenance compliance"], ["CST-001", -1, "Cost per tonne"], ["CST-002", -1, "Variable cost"], ["CST-003", -1, "Fuel cost"], ["SUP-001", 1, "Supplier on-time delivery"]]},
    {n: "Capex and initiatives", full: "Capex and Initiatives", s: "Improving", k: [["CPX-002", 1, "Committed Capex"], ["CPX-003", 1, "Actual spend"], ["CPX-004", 1, "Physical progress"], ["PRG-002", 1, "Benefits realization"], ["STR-002", 1, "Transformation progress"], ["VAL-001", 1, "EBITDA benefit"], ["VAL-002", 1, "Cash benefit"], ["VAL-003", 1, "Cost savings delivered"]]},
    {n: "Risk, compliance, EHS", full: "Risk, Compliance and EHS", s: "On track", k: [["EHS-001", -1, "TRIR"], ["EHS-002", -1, "Severity incidents"], ["EHS-004", -1, "Critical safety incidents"], ["REG-005", -1, "Overdue regulatory obligations"], ["GOV-004", -1, "Open audit findings"], ["SUS-003", -1, "Energy intensity"]]}
  ],
  // the same items as the 24-hour change report (O-02 #1, #4, #3)
  changes: [
    {d: "Operations and assets", t: "ALT-SYN-2041 Plant 02 → Critical", sub: "−18.4 kt · −₹9.2 m EBITDA (FCST)", bad: true},
    {d: "Operations and assets", t: "OPS-001: Pending → Reconciliation break", sub: "L2 meter mapping · fix due D0 12:00"},
    {d: "Cash and liquidity", t: "CSH-006 ₹26 m upstream at risk", sub: "P08 upstream (FCST) · runway unaffected"}
  ]};
// G-03 EBITDA bridge FY plan 742 → FY forecast 733.1 (volume −8.6, price +1.2, variable cost −1.9, fuel and power −0.8, FX +1.2)
const BRIDGE = {viz: 1, type: "bridge", title: "EBITDA bridge, confidence-weighted · FY plan → FY forecast · ₹ m", ask: "How much of the forecast EBITDA gap rests on inputs we can defend?", unit: "₹ m", axis: [724, 746], tick: 4,
  meterL: "What the forecast movement rests on",
  read: "Of ₹13.7 m gross movement, ₹8.6 m (Volume, Plant 02) rests on a production input under reconciliation break (OPS-001, BRK-SYN-0071) and ₹3.2 m on external signals. Only the variable-cost step (−₹1.9 m) is projected from certified actuals.",
  cap: "Same drivers as the G-03 EBITDA bridge. Forecast steps are labelled by the quality of their input; totals use an axis cut.",
  start: {l: "FY plan", v: 742, ts: "Certified"}, end: {l: "FY forecast", v: 733.1, ts: "FCST"},
  steps: [{l: "Volume (Plant 02)", v: -8.6, ts: RM}, {l: "Price", v: 1.2, ts: "EXT"}, {l: "Variable cost", v: -1.9, ts: "FCST"}, {l: "Fuel and power", v: -0.8, ts: "EXT"}, {l: "FX", v: 1.2, ts: "EXT"}]};
edit("P2-O01-EnterpriseHealth", (p) => {
  p.sections.forEach((s) => { s.blocks = strip(s.blocks || []); });
  const fin = p.sections.find((s) => s.n === "Financial"), perf = p.sections.find((s) => s.n === "Performance reading");
  fin.blocks.splice(1, 0, BRIDGE);
  perf.blocks.unshift(PULSE);
});

/* ── O-05 Material Risk ──────────────────────────────────────────────────── */
// the five issues in the materiality table, placed in the composite band they hold there
const HORIZON = {viz: 1, type: "horizon", title: "Materiality horizon · distance to the Critical threshold", ask: "Which open issues are near materiality, and which crossed it?", from: -6, to: 3,
  read: "Only INC-SYN-0142 is over the materiality line, and it crossed in the last 24 hours. The other four open issues sit in the Medium and Low bands; MP03 contractor slippage is the newest and still has no accepted owner.",
  cap: "Bands (placeholders, D-03): Low < 50%, Medium 50–74%, High 75–99%, Critical ≥ 100%. Each issue sits in the band of its composite rating in the table above.",
  items: [
    {id: "INC-SYN-0142", l: "Supply continuity RM-1", pts: [[-6, 22], [-5, 24], [-4, 27], [-3, 31], [-2, 40], [-1, 62], [0, 128]], ts: "FCST", own: "Entity Executive A1"},
    {id: "ALT-SYN-2047", l: "MP03 contractor slippage · B1", pts: [[-1, 48], [0, 66]], ts: "PRELIM", own: "unowned (draft B1)"},
    {id: "REG-006", l: "Permit renewal · C1 (74 d)", pts: [[-6, 55], [-3, 56], [0, 58]], ts: "Certified", own: "Compliance"},
    {id: "TRS-004", l: "Hedge cover 68% vs 75%", pts: [[-6, 57], [-3, 59], [0, 61]], ts: "Certified", own: "Group Treasury"},
    {id: "CTL-007", l: "SoD exception · C2", pts: [[-6, 24], [-3, 24], [0, 24]], ts: "Certified", own: "Assurance"}
  ]};
edit("P2-O05-Risk", (p) => { p.drivers = [HORIZON].concat(strip(asArr(p.drivers))); });

/* ── G-01 Portfolio Home ─────────────────────────────────────────────────── */
// entity totals = the projected-gap bars on this page (A1 −7.6 … total −9.2); drivers follow G-03's driver set
const FLOW = {viz: 1, type: "flow", title: "Projected EBITDA gap · entity → driver · P07–P12 · ₹ m", ask: "Through which drivers does each entity's projected gap arise?", unit: "₹ m", hi: "A1", combine: "Other 5 entities",
  head: "Entity A1 holds −7.6 of the −9.2 ₹ m projected gap, almost all of it through volume at Plant 02",
  read: "Volume explains −8.8 of the −9.2 ₹ m gap, and −7.5 of that sits in Entity A1 (Plant 02, RM-1). The other five entities net −1.6 between them; external price and FX signals offset part of the cost drift.",
  cap: "Entity totals match the bars above (PRD-003 −9.2, FCST). Driver split is a forecast (SYN). Volume rests on the A1 production input under reconciliation (BRK-SYN-0071).",
  entities: [{id: "A1", l: "Entity A1"}, {id: "A2", l: "Entity A2"}, {id: "B1", l: "Entity B1"}, {id: "B2", l: "Entity B2"}, {id: "C1", l: "Entity C1"}, {id: "C2", l: "Entity C2"}],
  drivers: [{id: "vol", l: "Volume", ts: RM}, {id: "price", l: "Price", ts: "EXT"}, {id: "var", l: "Variable cost", ts: "FCST"}, {id: "fuel", l: "Fuel and power", ts: "EXT"}, {id: "fx", l: "FX", ts: "EXT"}],
  m: [[-7.5, 0.2, -0.4, -0.2, 0.3], [-0.2, 0.1, -0.2, -0.1, 0.2], [-0.4, 0.2, -0.3, -0.1, 0], [-0.2, 0.1, -0.2, -0.1, 0.1], [-0.3, 0.1, -0.2, -0.1, 0.1], [-0.2, 0.2, -0.1, 0, 0]]};
// size = EBITDA YTD (A1 = FIN-001 A1 96.2; entities sum to FIN-001 Group 361.3); colour = the same projected gap
const ZOOM_G = {viz: 1, type: "zoom", title: "EBITDA map · entity depth", ask: "Where does EBITDA come from, and where does the projected gap sit?", unit: "₹ m", level: "core", gapL: "projected gap P07–P12",
  read: "Entity A1 is the largest EBITDA contributor and also holds almost all of the projected gap (−7.6 of −9.2). Every other entity is within ±0.6.",
  cap: "Tile size = EBITDA YTD (sums to FIN-001 361.3). Colour = projected EBITDA gap P07–P12, as in the bars above. The same map at plant depth is on Entity A1's home.",
  levels: [{k: "core", l: "Core Group", crumb: "Group › Business A, B, C › by entity", items: [
    {l: "Entity A1", v: 96.2, gap: -7.6, ts: RM}, {l: "Entity C2", v: 62.1, gap: -0.1}, {l: "Entity A2", v: 58.2, gap: -0.2},
    {l: "Entity B2", v: 52.6, gap: -0.3}, {l: "Entity C1", v: 47.3, gap: -0.4}, {l: "Entity B1", v: 44.9, gap: -0.6}]}]};
edit("P2-G01-Portfolio", (p) => {
  p.sections.forEach((s) => { s.blocks = strip(s.blocks || []); });
  const fin = p.sections.find((s) => s.n === "Financial");
  fin.blocks.push(FLOW, ZOOM_G);
});

/* ── G-02 Entity Comparison ──────────────────────────────────────────────── */
// DSO, certified % and production from the matrix above; ROCE vs plan from the Margin and ROCE tab
const FINGER = {viz: 1, type: "fingerprints", title: "Entity fingerprints · four KPIs, same axes", ask: "Which entity looks different from its peers?", focus: "A1",
  read: "Entity A1's shape caves in on DSO, ROCE and certification, and its production figure is unverified. Only C1 is materially behind on anything (certification); the others hold to plan.",
  cap: "Same values as the matrix and the ROCE tab. Dashed ring = plan; outside is better. A1 production is a flash figure under reconciliation (hatched); C1 production is pending.",
  axes: [{l: "DSO", plan: 45, pol: -1, span: 8, u: " d"}, {l: "ROCE vs plan", plan: 0, pol: 1, span: 1.5, u: " pt"}, {l: "Certified", plan: 86, pol: 1, span: 5, u: "%"}, {l: "Production", plan: 100, pol: 1, span: 5, u: "%"}],
  rows: [
    {id: "A1", l: "Entity A1", v: [52, -1.6, 82, 103.2], ts: ["Certified", "Certified", "Certified", RM]},
    {id: "A2", l: "Entity A2", v: [44, 0.3, 86, 99.1]}, {id: "B1", l: "Entity B1", v: [46, -0.6, 84, 98.4]},
    {id: "B2", l: "Entity B2", v: [43, 0.1, 86, 100.2]}, {id: "C1", l: "Entity C1", v: [45, 0.2, 82, 97.9], ts: ["Certified", "Certified", "Certified", "Pending certification"]},
    {id: "C2", l: "Entity C2", v: [44, 0.5, 86, 99.6]}]};
edit("P2-G02-EntityComparison", (p) => { p.drivers = [FINGER].concat(strip(asArr(p.drivers))); });

/* ── G-08 Certification Governance ───────────────────────────────────────── */
// TRU-001 84% today; TRU-002 9, TRU-006 2, TRU-007 1 as in the KPI cards
const TIDE = {viz: 1, type: "tide", title: "Certification pace · this close vs the last three", ask: "Will the leadership KPIs be certified by close, and what is blocking the rest?",
  days: 10, today: 5, target: 7, dayL: "WD", targetL: "CLOSE CERT · [DATE — PH]",
  read: "84% of leadership KPIs are certified at working day 6, behind the last three closes (88–94%). At the current pace close certification reaches about 98%; the last 2% is OPS-001 at Entity A1, which cannot be certified until BRK-SYN-0071 is fixed.",
  cap: "Share of leadership KPIs by trust state per working day of the P07 close (SYN). Grey lines: P04–P06 at the same working day. Close date is a placeholder.",
  stack: {cert: [20, 38, 54, 64, 74, 84], exc: [0, 0, 0, 0, 0, 0], pend: [78, 60, 44, 34, 24, 14], recon: [2, 2, 2, 2, 2, 2]},
  prior: [{l: "P04", v: [24, 44, 61, 74, 84, 88, 95, 99, 100, 100]}, {l: "P05", v: [26, 48, 66, 78, 86, 91, 97, 100, 100, 100]}, {l: "P06", v: [30, 52, 70, 82, 90, 94, 98, 100, 100, 100]}],
  side: {head: "Still open", rows: [
    {k: "pend", v: "9", l: "uncertified KPIs · TRU-002", n: "target 0 at close"},
    {k: "stale", v: "2", l: "overdue certifications · TRU-006", n: "EHS-001 at Entity B1 and C1"},
    {k: "recon", v: "1", l: "material break · TRU-007", n: "BRK-SYN-0071 · OPS-001 · Entity A1"}]}};
edit("P2-G08-CertGovernance", (p) => { p.dominant = strip(asArr(p.dominant)).concat([TIDE]); });

/* ── G-09 Escalation Center ──────────────────────────────────────────────── */
// the six open items on the ladder (L0 3 · L1 1 · L2 1 · L3 1); EFF-009 11 closed in 30 d, EFF-008 2.4 d
const RIVER = {viz: 1, type: "river", title: "Escalation clocks · open items by stage", ask: "Which open escalations are running out of clock?", clockL: "CLOCK",
  head: "1 of 6 open escalations is past its clock: ALT-SYN-2047 still has no accepted owner",
  read: "Six escalations are open. Only ALT-SYN-2047 (MP03, Entity B1) is past its clock, because no owner has accepted it (EFF-006). INC-SYN-0142 is owned and in the war room, and the Owner decision DEC-SYN-0219 is due at 11:00.",
  cap: "Position across a column = share of that stage's clock used. Clock durations are placeholders (D-08). Same items as the ladder above.",
  stages: [{l: "Awaiting owner", sla: 1, slaL: "clock [PH]"}, {l: "Owned · in action", sla: 1, slaL: "clock [PH]"}, {l: "Awaiting decision", sla: 1, slaL: "due D0 11:00"}, {l: "Closed"}],
  thru: [], resolved: {n: 11, l: "11 in 30 d · avg 2.4 d"},
  items: [
    {id: "ALT-SYN-2047", l: "MP03 contractor slippage", ent: "B1", sev: "med", st: 0, age: 1.3, ageL: "overdue +2 h"},
    {id: "INC-SYN-0142", l: "Supply continuity RM-1 · war room (L2)", ent: "A1", sev: "crit", st: 1, age: 0.6, ageL: "war room"},
    {id: "ACT-SYN-1108", l: "Expedite logistics", ent: "A1", sev: "med", st: 1, age: 0.45},
    {id: "ACT-SYN-1109", l: "Re-sequence Line L2", ent: "A1", sev: "med", st: 1, age: 0.35},
    {id: "ACT-SYN-1110", l: "Reprioritise dispatch to protect billing", ent: "A1", sev: "med", st: 1, age: 0.25},
    {id: "DEC-SYN-0219", l: "Owner decision · alternate sourcing", ent: "A1", sev: "crit", st: 2, age: 0.7, ageL: "due 11:00"}]};
edit("P2-G09-Escalations", (p) => { const b = strip(p.body); b.splice(1, 0, RIVER); p.body = b; });

/* ── E-01 Entity Home ────────────────────────────────────────────────────── */
// plant EBITDA YTD from E-11 (42.1 + 29.8 + 24.3 = 96.2); gap sums to the entity's −7.6
const ZOOM_E = {viz: 1, type: "zoom", title: "EBITDA map · plant depth", ask: "Which plant earns the EBITDA, and which holds the projected gap?", unit: "₹ m", level: "entity", gapL: "projected gap P07–P12",
  read: "Plant 02 holds the whole projected gap (−7.9 ₹ m) although it is only the second-largest contributor. Plants 01 and 03 are slightly ahead of plan.",
  cap: "Tile size = EBITDA YTD by plant (E-11, sums to 96.2). Colour = projected EBITDA gap P07–P12 (entity total −7.6, FCST). The same map at entity depth is on the Group Portfolio home.",
  levels: [{k: "entity", l: "Entity", crumb: "Entity A1 › by plant", items: [
    {l: "Plant 01", v: 42.1, gap: 0.2}, {l: "Plant 02", v: 29.8, gap: -7.9, ts: RM}, {l: "Plant 03", v: 24.3, gap: 0.1}]}]};
// dates from the change report (O-02), the alert, E-02 (shortfall D+4 to D+10), S-07 (no alternate RM-1 before D+9) and E-06 (M3 D+13)
const RUNWAY = {viz: 1, type: "runway", title: "Next 14 days · what lands when", ask: "What is due or at risk over the next two weeks, and when does it bunch up?", days: 14, head: "",
  read: "Exposure is high twice: today to D+2, when DEC-SYN-0219 (11:00), the OPS-001 mapping fix (12:00) and the REG-011 disclosure clock (38 h) land; and D+5 to D+9, while the RM-1 stock-out and the Plant 02 shortfall overlap.",
  cap: "Dates from the change report, the alert, E-02 and E-06 (SYN). The top band sums severity across lanes.",
  lanes: ["Decisions", "Certification", "Regulatory", "Supply", "Production", "Cash", "Capex"],
  ev: [
    {lane: "Decisions", l: "DEC-SYN-0219 alternate sourcing · 11:00", at: 0.46, sk: "bad", ts: "System count"},
    {lane: "Certification", l: "OPS-001 mapping fix · 12:00", at: 0.5, sk: "warn", ts: RM},
    {lane: "Regulatory", l: "REG-011 disclosure clock (38 h)", at: 1.6, sk: "bad", ts: "System count"},
    {lane: "Supply", l: "Qualify S-12", at: 1, sk: "warn", ts: "PRELIM"},
    {lane: "Supply", l: "RM-1 stock-out unless S-12 or expedite", from: 4, to: 9, sk: "bad", ts: "LEADING"},
    {lane: "Production", l: "Plant 02 shortfall −18.4 kt (FCST)", from: 4, to: 10, sk: "fc", ts: "FCST"},
    {lane: "Cash", l: "Re-phase ₹26 m upstream", at: 2, sk: "fc", ts: "FCST"},
    {lane: "Capex", l: "Project 05 M3 civil works (+3 d)", at: 13, sk: "warn", ts: "Certified"}]};
edit("P2-E01-EntityHome", (p) => {
  p.sections.forEach((s) => { s.blocks = strip(s.blocks || []); });
  p.sections.find((s) => s.n === "Financial").blocks.push(ZOOM_E);
  p.sections.find((s) => s.n === "Risk and actions").blocks.push(RUNWAY);
});

/* ── E-05 Production-to-Cash ─────────────────────────────────────────────── */
// days from the Working capital tab; cash per lever from the Cash levers chart (7.4 + 5.6 + 3.1 = 16.1)
const LOOP = {viz: 1, type: "loop", title: "Cash conversion loop · Entity A1", ask: "Where in the cycle is cash getting stuck?", scale: 120, cur: "₹",
  read: "The cycle is 55 days against 37 planned (WCP-006). Inventory and DSO each add 7 days and a shorter DPO adds 4; bringing each back to plan would release ₹16.1 m.",
  cap: "Days from WCP-001/002/003; cash per lever from the Cash levers chart in the Working capital tab.",
  dso: {v: 52, plan: 45, ts: "Certified", cash: 5.6}, dio: {v: 41, plan: 34, ts: "Pending certification", cash: 7.4}, dpo: {v: 38, plan: 42, ts: "Certified", cash: 3.1},
  headL: "₹16.1 m of cash released if all three return to plan", sub: "Days vs plan, and the cash each lever releases"};
edit("P2-E05-ProductionCash", (p) => { p.drivers = strip(asArr(p.drivers)).concat([LOOP]); });

/* ── E-11 Entity Financial ───────────────────────────────────────────────── */
// same three levers as E-05; owners follow the base-data owner roles (WCP-001/002 Finance, WCP-003 Supply)
const LANES = {viz: 1, type: "lanes", title: "Working-capital lanes · who owns the cash release", ask: "Where is cash stuck in working capital, and which function owns the fix?", unit: "₹ m",
  head: "₹16.1 m is stuck in working capital, and ₹14.7 m of the fix sits outside Finance",
  read: "Finance owns the measures, but most of the cash sits with other functions: RM-1 safety stock with Supply (−6.2), late-paying customers with Commercial (−4.2) and shorter supplier terms with Procurement (−3.1).",
  cap: "Cash per lever from E-05 (inventory 7.4, DSO 5.6, DPO 3.1 = 16.1). The split below the measures is SYN. A ring marks a handoff to another function.",
  lanes: [{id: "fin", l: "Finance"}, {id: "com", l: "Commercial"}, {id: "sup", l: "Supply"}, {id: "pro", l: "Procurement"}],
  cols: ["Result", "Measure", "Root cause"],
  nodes: [
    {id: "wc", lane: "fin", l: "Cash to release", v: "at plan days", d: -16.1, ts: "Pending certification"},
    {id: "dso", p: "wc", lane: "fin", l: "DSO", v: "52 d vs 45", d: -5.6, ts: "Certified"},
    {id: "dpo", p: "wc", lane: "fin", l: "DPO", v: "38 d vs 42", d: -3.1, ts: "Certified"},
    {id: "dio", p: "wc", lane: "sup", l: "Inventory days", v: "41 d vs 34", d: -7.4, ts: "Pending certification"},
    {id: "bil", p: "dso", lane: "fin", l: "Billing cut-off delay", v: "P07 billing", d: -1.4, ts: "PRELIM"},
    {id: "cus", p: "dso", lane: "com", l: "2 customers paying late", v: "Group 2 · SIG-005", d: -4.2, ts: "LEADING"},
    {id: "fg", p: "dio", lane: "com", l: "Finished goods held", v: "re-timed dispatch", d: -1.2, ts: "PRELIM"},
    {id: "rm1", p: "dio", lane: "sup", l: "RM-1 safety stock", v: "S-07 single source", d: -6.2, ts: "LEADING"},
    {id: "terms", p: "dpo", lane: "pro", l: "Shorter supplier terms", v: "supplier terms", d: -3.1, ts: "Certified"}]};
edit("P2-E11-Financial", (p) => { p.drivers = [LANES].concat(strip(asArr(p.drivers))); });
