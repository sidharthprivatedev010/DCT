// MANIFEST01 Screen 3: Early Warning signals for the Owner heat map (category × risk level).
// Source of truth: SIGNALS below → data/owner-signals.json (1B schema + category, risk_level) and the heat block on O-02.
// Values with a kpi are filled from the model at render (resolve.js); justifications quote those same values.
// "Last 24 Hours" holds what changed in the last 24 hours (the change ledger); a signal counts in one row only.
// Usage: node tools/build_signals.js
const fs = require("fs"), path = require("path"), J = require("./pagejson.js");
const root = path.join(__dirname, "..") + "/";
const CATS = [["last_24_hours", "Last 24 Hours"], ["forecast", "Forecast"], ["operations", "Operations"], ["finance", "Finance"], ["sales_and_delivery", "Sales & Delivery"], ["outside_factors", "Outside Factors"], ["risk", "Risk"]];
const LEVELS = [["low", "Low"], ["medium", "Medium"], ["high", "High"], ["critical", "Critical"]];
const S = [
 ["last_24_hours", "critical", "ALT-SYN-2041", "Forecast production shortfall", "A1", null, "−24.3 kt · −₹56.2 m EBITDA (FCST)", "Forecast shortfall of 24.3 kt crossed the Owner threshold at 05:10; drives the −₹56.2 m EBITDA gap.", "P2-S04-Alert.html"],
 ["last_24_hours", "high", "SIG-009", "Critical-material shortage risk", "A1", "SIG-009", null, "4 materials short in [[A1]]; RM-1 cover fell from 9.0 to 3.5 days against a 9-day lead time.", null],
 ["last_24_hours", "high", "CSH-006", "Cash-upstream exposure", "A1", "CSH-006", null, "27.2 ₹ m of Nov upstream at risk as lower dispatch defers billing; runway unaffected.", "P2-S11-CashExposure.html"],
 ["last_24_hours", "medium", "OPS-001", "Production vs plan · trust change", "A1", null, "Reconciliation break BRK-SYN-0071", "L2 meter mapping change broke flash vs MIS; [[A1]] Oct flash not defensible until fixed.", null],
 ["last_24_hours", "medium", "WR-SYN-0142", "War room opened", "A1", null, "Active since 06:00", "Opened because ALT-SYN-2041 crossed Critical; coordinates the response under one commander.", "P2-O08-WarRoom.html"],
 ["forecast", "high", "PRD-001", "Days to production-plan breach", "A1", "PRD-001", null, "[[A1]] breaches its production plan in 4 days unless RM-1 cover recovers.", null],
 ["forecast", "high", "PRD-002", "Probability of production plan miss", "Group", "PRD-002", null, "69.7% chance the Group misses next month's production plan; [[A1]] at 79.4% drives it.", null],
 ["forecast", "high", "PRD-003", "Projected EBITDA gap, Oct–Mar", "Group", "PRD-003", null, "Oct–Mar EBITDA forecast -56.2 ₹ m below plan; [[A1]] accounts for -48.5 ₹ m.", null],
 ["forecast", "low", "PRD-004", "Projected liquidity gap", "Group", "PRD-004", null, "No liquidity gap forecast within 90 days; runway 16.7 months.", null],
 ["forecast", "low", "PRD-005", "Forecast covenant breach", "Group", "PRD-005", null, "No covenant breach forecast; headroom 24.4% against a 20.0% floor.", null],
 ["operations", "medium", "SIG-001", "Unplanned downtime", "Group", "SIG-001", null, "154.4 h unplanned downtime in Sep; [[A1]] accounts for 120.7 h from repeat breakdowns.", null],
 ["finance", "high", "SIG-007", "Production at risk", "Group", "SIG-007", null, "36.8 kt of planned output at risk; [[A1]] holds 30.9 kt, mostly the RM-1 incident.", null],
 ["finance", "medium", "SIG-004", "Collections slippage", "Group", "SIG-004", null, "Collections slipping 1.1 days at Group; [[A1]] at 1.9 days, [[A2]] at 0.2 days.", null],
 ["sales_and_delivery", "high", "SIG-012", "Dispatch delays", "Group", "SIG-012", null, "8.7% of dispatches late against a 5.0% limit; [[A1]] at 10.9% from RM-1 constraints.", null],
 ["outside_factors", "medium", "SIG-014", "Commodity price · RM-1 index", "Group", "SIG-014", null, "RM-1 index up 2.1% month on month; adds about ₹1.8 m cost per quarter.", null],
 ["outside_factors", "medium", "SIG-015", "FX exposure, unhedged", "Group", "SIG-015", null, "221.7 ₹ m USD exposure unhedged; a 5% USD move changes EBITDA by about 8.4 ₹ m.", null],
 ["outside_factors", "high", "SIG-016", "Freight lane disruption", "Group", "SIG-016", null, "1 freight lane disrupted (supplier S-07); RM-1 lead time up 5 days for [[A1]].", null],
 ["outside_factors", "low", "SIG-017", "Fuel cost movement", "Group", "SIG-017", null, "Fuel cost per tonne down 17.7% month on month; no exposure flagged.", null],
 ["outside_factors", "low", "SIG-018", "Power cost movement", "Group", "SIG-018", null, "Power cost per tonne down 7.1% month on month; peak-tariff exposure eased.", null],
 ["risk", "low", "SIG-019", "Regulatory deadlines, next 30 days", "Group", "SIG-019", null, "3 regulatory deadlines in 30 days, all owned and none overdue.", null],
 ["risk", "medium", "SIG-020", "Licence expirations, next 12 months", "Group", "SIG-020", null, "1 licence expires within 12 months in [[A1]]; nearest permit expiry in 65 days.", null],
 ["risk", "low", "SIG-021", "Environmental violations", "Group", "SIG-021", null, "No environmental violations in either entity (0).", null]
];
const vm = require("vm"); const ctx = vm.createContext({}); vm.runInContext(fs.readFileSync(root + "js/data/base-data.js", "utf8"), ctx);
const P = ctx.DCTData.plant, VERD = {low: ["on_track", "green"], medium: ["watch", "amber"], high: ["intervention_required", "red"], critical: ["intervention_required", "red"]};
const name = (t) => t.replace(/\[\[(\w+)\]\]/g, (m, k) => P.scopes[k] ? (k === "Group" ? P.scopes[k] : P.scopes[k] + " (" + k + ")") : m);   // 1D: "<Name> (<CODE>)"
const json = S.map(([cat, lvl, id, title, sc, kpi, v, j]) => ({persona: "owner", screen: "early_warning", section: "risk_heat_map", kpi_id: (kpi || id).toLowerCase(), signal_id: id, title,
  level: sc === "Group" ? "group" : "entity", entity_code: sc === "Group" ? null : sc, entity_name: sc === "Group" ? null : P.scopes[sc], verdict: VERD[lvl][0], status_color: VERD[lvl][1], justification: name(j), category: cat, risk_level: lvl}));
const words = (s) => s.split(/\s+/).length;
json.forEach((e) => { if (words(e.justification) > 20) console.log("CHECK >20 words", e.signal_id); if (/\bPlant/.test(e.justification)) console.log("CHECK plant", e.signal_id); });
fs.writeFileSync(root + "data/owner-signals.json", JSON.stringify(json, null, 1) + "\n");
const block = {type: "heat", title: "Early-warning risk heat map · signals by category and risk level", ask: "Where are the risks, and how serious are they?",
  cap: "Each cell counts the signals in that category at that risk level; darker = more signals. Select a cell to list its signals below. Last 24 Hours holds what changed since yesterday; those signals are not counted again in their topic row.",
  cats: CATS.map((c) => ({k: c[0], l: c[1]})), levels: LEVELS.map((l) => ({k: l[0], l: l[1]})),
  items: S.map(([cat, lvl, id, title, sc, kpi, v, j, h]) => Object.assign({cat, lvl, id, l: title, scope: sc, ent: sc === "Group" ? "[[Group]]" : "[[" + sc + "]]", why: j}, kpi ? {kpi} : {v}, h ? {h} : {}))};
const p = J.read("P2-O02-ChangeReport");
// The heat map is the only primary element: the change ledger, tiles and indicator boards are replaced by it
["meta", "counters", "summary", "body", "tabs", "strip"].forEach((k) => delete p[k]);
p.body = [block]; p.focus = "body"; p.tabs = false; delete p.heat;
p.title = "Early Warning · Risk Heat Map"; p.q = "Where are risks building, and how serious are they?";
p.trust = "Signals carry their provenance; values from the governed KPI model where one exists";
p.journey.note = "One picture of where the risks sit: rows are categories, columns are risk levels. Select a cell to see each signal with its entity, value and why it has that rating.";
J.write("P2-O02-ChangeReport", p);
console.log("signals:", S.length);
