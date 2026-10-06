/* Entity lens (Entity A1): how each KPI card's value comes about, plant by plant.
   For every KPI card on an Entity screen this adds
   - a one-line justification (why the value and status are what they are),
   - a by-plant breakdown: Plant 01–03 value, change vs last month and each plant's effect on the Entity A1 value,
   - the root cause, when the KPI is off target or worsening.
   Numbers come from DCTData.plant (js/data/base-data.js, built by data/kpi-model; same values as data/KPI-Lineage-Model.xlsx).
   The only hand-set facts are case-record facts in CASE (asset, line, supplier, contractor), quoted from the Entity screens.
   Called by js/data/resolve.js for Entity-lens cards; rendered under the card value in TplA–F. */
var DCTEntityCards = (function () {
  "use strict";
  var MON = {P01: "Apr", P02: "May", P03: "Jun", P04: "Jul", P05: "Aug", P06: "Sep"};
  var BAD = /Declining|Intervention|Breach|Critical/;

  // Ratio KPIs: value = f × Σnum ÷ Σden at every level. A plant's effect on the entity gap to target is
  // f × (num_p − target/f × den_p) ÷ den_entity, and the plant effects add up to (entity value − target).
  var RATIO = {
    "OPS-001": [["good_output_t"], "planned_production_t", 100],
    "OPS-002": [["sales_t"], "planned_sales_t", 100],
    "OPS-003": [["good_output_t"], "installed_capacity_t", 100],
    "PLT-001": [["run_hours"], "calendar_hours", 100],
    "PLT-002": [["good_output_t"], "ideal_output_t", 100],
    "PLT-004": [["recovered_contained_t"], "feed_contained_t", 100],
    "PLT-005": [["good_output_t"], "feed_input_t", 100],
    "REL-001": [["run_hours"], "failures", 1],
    "REL-002": [["repair_hours"], "failures", 1],
    "REL-005": [["pm_completed"], "pm_scheduled", 100],
    "CST-001": [["variable_cost_k", "fixed_cost_k"], "good_output_t", 1000],
    "CST-004": [["power_cost_k"], "good_output_t", 1000],
    "SUS-003": [["energy_gj"], "good_output_t", 1],
    "SIG-012": [["dispatches_delayed"], "dispatches_total", 100],
    "SUP-001": [["po_lines_on_time"], "po_lines_due", 100],
    "SUP-002": [["qty_received_t"], "qty_ordered_t", 100],
    "SUP-003": [["qty_rejected_t"], "qty_received_t", 100],
    "SUP-004": [["lead_time_actual_days", "-lead_time_planned_days"], "lead_time_planned_days", 100],
    "SUP-007": [["single_source_spend_k"], "supplier_spend_k", 100],
    "EHS-001": [["recordable_injuries"], "hours_worked", 200000],
    "EHS-009": [["investigations_completed"], "investigations_due", 100]
  };

  // Facts from the case record, as the Entity screens show them (E-02, E-03, E-04, E-06, E-08)
  var CASE = {
    asset: {"Plant02": "asset P02-03 on Line L2 (29 h of downtime)"},
    supplier: "Supplier S-07 (single source of RM-1, 62% on time, delivery slipped 6 days)",
    brk: "BRK-SYN-0071: the Sep-flash production figure ran 4.3% above MIS (298.4 vs 286.0 kt) after mapping change M-SYN-L2 on the Line L2 meter at Plant 02",
    contractor: "Contractor C-3 is 3 days late on M3 civil works for Project 05 (debottleneck)"
  };

  // KPIs booked only at entity level: the plant-level KPI that drives them, shown in their plant breakdown
  var DRIVER = {
    "FIN-001": "FIN-003", "FIN-002": "FIN-003", "FIN-004": "FIN-003",
    "FIN-005": "OPS-003", "CSH-003": "OPS-002", "WCP-001": "SIG-012",
    "CSH-006": "SIG-007", "PRD-003": "SIG-007"
  };
  // Where an entity-only KPI touches a plant without a plant split in the model
  var LINK = {
    "TRU-004": "Plant 02 · Line L2 meter (BRK-SYN-0071)",
    "TRU-008": "Plant 02 · Sep-flash production feed",
    "REG-011": "Plant 02 · incident INC-SYN-0142",
    "SUP-005": "RM-1 (Supplier S-07) feeds Plant 02; RM-3 (Supplier S-04)",
    "SUP-006": "Project 05 · Contractor C-3",
    "PRG-005": "Energy efficiency Plant 02 is one of the 2 at risk"
  };

  var P, D, KIDS;
  function init() { if (P) return true; if (typeof DCTData === "undefined" || !DCTData.plant) return false; P = DCTData.plant; D = DCTData.kpi; KIDS = (P.children || {}).A1 || ["Plant01", "Plant02", "Plant03"]; return true; }
  function canon(id) { return (P.alias || {})[id] || id; }
  function K(id) { return P.kpi[canon(id)]; }
  function sn(s) { return (P.scopes || {})[s] || s; }
  function ser(id, s) { var k = K(id); return k && k.val && k.val[s]; }
  function last(id, s) { var v = ser(id, s); return v ? v[v.length - 1] : null; }
  function prev(id, s) { var v = ser(id, s); return v && v.length > 1 ? v[v.length - 2] : null; }
  function inp(id, s) { var k = K(id); return (k && k.inp && k.inp[s]) || null; }
  function card(id, s) { return (D[id] || D[canon(id)] || {})[s] || null; }
  function num(x) { return typeof x === "number" && isFinite(x); }
  function fmt(v, dp) { if (!num(v)) return String(v == null ? "—" : v); var s = Math.abs(v).toLocaleString("en-US", {minimumFractionDigits: dp, maximumFractionDigits: dp}); return (v < 0 && +s.replace(/,/g, "") !== 0 ? "−" : "") + s; }
  function sgn(v, dp) { return (v > 0 ? "+" : "") + fmt(v, dp); }
  function pct(a, b) { return b ? Math.round(100 * a / b) : 0; }
  function dpOf(id) { var k = K(id); return k && k.dp != null ? k.dp : 1; }
  function scaled(id, s) { return last(id, s); }
  function unitOf(id) { var c = card(id, "A1") || {}; return c.u != null ? c.u : ((K(id) || {}).unit || ""); }
  function isPct(id) { return /^%/.test(unitOf(id)); }
  function dUnit(id) { var u = unitOf(id); return isPct(id) ? " pts" : (u ? " " + u.replace(/^% ?/, "") : ""); }
  function show(id, s) {
    var c = card(id, s), v = scaled(id, s), u = unitOf(id);
    if (c && c.v != null && !/^-?[\d,.]+$/.test(String(c.v))) return String(c.v);
    if (!num(v)) return String(c && c.v != null ? c.v : v);
    if (v === 1 && /^[a-z]+s$/.test(u)) u = u.slice(0, -1);
    return fmt(v, dpOf(id)) + (isPct(id) ? "%" : (u ? " " + u : ""));
  }
  function shortU(id, s) { var v = scaled(id, s); if (!num(v)) return show(id, s); return fmt(v, dpOf(id)) + (isPct(id) ? "%" : ""); }
  function meets(id, v) { var k = K(id); if (!k || k.target == null || !num(v)) return null; return k.better === "down" ? v <= k.target : v >= k.target; }
  function tgtTxt(id) { var k = K(id); return (k.better === "down" ? "≤" : "≥") + fmt(k.target / 1, dpOf(id) > 1 ? dpOf(id) : (isPct(id) ? 0 : dpOf(id))) + (isPct(id) ? "%" : dUnit(id)); }
  function trendTxt(id, s) {
    var b = prev(id, s); if (b === 999) return "";            // 999 = clock not running last month
    var c = card(id, s), t = c && c.tr ? String(c.tr) : "";
    if (t && t !== "—") return t === "flat" ? "flat" : t.replace(/\s*vs P\d\d$/, "");
    var a = last(id, s), dp = dpOf(id); if (!num(a) || !num(b)) return "";          // no card for this scope: from the monthly series
    var d = a - b; return Math.abs(d) < Math.pow(10, -dp) / 2 ? "flat" : (d > 0 ? "▲ " : "▼ ") + fmt(Math.abs(d), dp);
  }
  function trendWords(id, s) { var t = trendTxt(id, s); return !t ? "" : t === "flat" ? "flat vs Aug" : (t.charAt(0) === "▲" ? "up " : "down ") + t.slice(2) + " vs Aug"; }
  function sumIn(o, fs) { var t = 0; fs.forEach(function (f) { var neg = f.charAt(0) === "-", n = neg ? f.slice(1) : f; t += (neg ? -1 : 1) * (+o[n] || 0); }); return t; }
  function hasFields(o, fs) { return o && fs.every(function (f) { return o[f.replace(/^-/, "")] != null; }); }

  // Plant rows for a plant-level KPI. kind: ratio | sum | min | values | text
  function plantRows(id) {
    var k = K(id); if (!k || !k.val || !k.val[KIDS[0]]) return null;
    var dp = dpOf(id), rows = [], ent = scaled(id, "A1"), r = RATIO[canon(id)] || RATIO[id], kind;
    var rule = k.rules ? Object.keys(k.rules).map(function (f) { return k.rules[f]; }) : [];
    var eIn = inp(id, "A1");
    if (typeof ent === "string") kind = "text";
    else if (r && hasFields(eIn, r[0].concat([r[1]])) && k.target != null) kind = "ratio";
    else if (r && hasFields(eIn, r[0].concat([r[1]]))) kind = "weight";
    else if (rule.length === 1 && rule[0] === "MIN") kind = "min";
    else if (rule.length === 1 && rule[0] === "SUM") kind = "sum";
    else kind = "values";
    var dEnt = kind === "ratio" || kind === "weight" ? +eIn[r[1]] : 0;
    KIDS.forEach(function (s) {
      var v = scaled(id, s), row = {s: s, pl: sn(s), v: show(id, s).replace(/ (% of plan|% late|% weighted)$/, "%"), raw: v, tr: trendTxt(id, s), off: meets(id, v) === false, eff: null, c: ""};
      if (!/\d/.test(row.v)) row.tr = "";                 // e.g. "Not expected": no trend to show
      var pi = inp(id, s);
      if (kind === "ratio" && pi && dEnt) { row.eff = r[2] * (sumIn(pi, r[0]) - k.target / r[2] * (+pi[r[1]] || 0)) / dEnt; row.c = sgn(row.eff, Math.max(dp, 1)) + dUnit(id); }
      else if (kind === "weight" && pi && dEnt) { row.eff = (+pi[r[1]] || 0) / dEnt; row.c = pct(+pi[r[1]] || 0, dEnt) + "%"; }
      else if (kind === "sum" && num(v) && num(ent)) { row.eff = ent ? v / ent : 0; row.c = ent ? pct(v, ent) + "%" : "—"; }
      else if (kind === "min" && num(v) && num(ent)) { row.c = v === ent ? "sets entity" : ""; row.eff = v === ent ? 1 : 0; }
      rows.push(row);
    });
    var head = {ratio: "Effect on entity", weight: "Share of base", sum: "Share", min: "", values: "", text: ""}[kind];
    // the plant that moves the entity most in the wrong direction (or, on target, the weakest plant)
    var better = k.better || "up", lead = null;
    if (kind === "ratio") lead = rows.slice().sort(function (a, b) { return better === "down" ? b.eff - a.eff : a.eff - b.eff; })[0];
    else if (kind === "sum" || kind === "weight") lead = rows.slice().sort(function (a, b) { return b.eff - a.eff; })[0];
    else if (kind === "min") lead = rows.filter(function (x) { return x.eff === 1; })[0];
    else if (kind === "values") lead = rows.filter(function (x) { return num(x.raw); }).sort(function (a, b) { return better === "down" ? b.raw - a.raw : a.raw - b.raw; })[0];
    return {kind: kind, head: head, rows: rows, lead: lead};
  }

  // ---- one-line justification -------------------------------------------------------------------------------
  function nameOf(id, c) { return String((c && c.name) || (K(id) || {}).name || id).replace(/\s*·\s*(Entity A1|A1)\b.*$/, "").replace(/\s*\[.*?\]|\s*\(.*?\)/g, "").trim(); }
  function lc(t) { return /^[A-Z][a-z]/.test(t) ? t.charAt(0).toLowerCase() + t.slice(1) : t; }
  function justify(id, c, pr, drv) {
    var k = K(id) || {}, cr = card(id, "A1") || {}, nm = nameOf(id, c), v = scaled(id, "A1"), val = show(id, "A1");
    var head, tw = trendWords(id, "A1");
    if (typeof v === "string") head = nm + ": " + v;
    else if (k.target != null) head = nm + ": " + val + " against a " + tgtTxt(id) + " target" + (cr["var"] && cr["var"] !== "—" && !/^[+−-]?0(\.0+)?( |$)/.test(cr["var"]) ? " (" + cr["var"] + ")" : "");
    else head = nm + ": " + val + (tw ? ", " + tw : "");
    var tail = "";
    if (pr && pr.lead) {
      var L = pr.lead;
      if (pr.kind === "ratio") {
        var ok = meets(id, v), offs = pr.rows.filter(function (x) { return x.off; });
        var gap = Math.abs(v - k.target), dq = Math.max(dpOf(id), 1);
        var off = pr.rows.filter(function (x) { return x !== L && Math.abs(x.eff) >= Math.pow(10, -dq) / 2 && (k.better === "down" ? x.eff < 0 : x.eff > 0); });
        if (ok === false && Math.abs(L.eff) <= gap + 1e-9) tail = L.pl + " (" + L.v + ") accounts for " + fmt(Math.abs(L.eff), dq) + " of the " + fmt(gap, dq) + dUnit(id) + " gap";
        else if (ok === false) tail = L.pl + " (" + L.v + ") moves it " + L.c + ", partly offset by " + off.map(function (x) { return x.pl; }).join(" and ");
        else tail = offs.length ? offs.map(function (x) { return x.pl; }).join(" and ") + " off target, offset by the other plants" : "all three plants meet target";
      } else if (pr.kind === "sum") tail = num(v) && v === 0 ? "nil at all three plants" : L.pl + " contributes " + L.c + " (" + L.v + ")";
      else if (pr.kind === "min") tail = "set by " + L.pl + (/earliest/.test(nm) ? "" : ", the earliest plant");
      else if (pr.kind === "weight") tail = L.pl + " carries " + L.c + " of the base at " + L.v;
      else if (pr.kind === "values") tail = L.pl + " is " + (k.better === "down" ? "highest" : "lowest") + " at " + L.v;
    } else if (drv && drv.lead) {
      tail = drv.kind === "ratio" ? "weakest plant on " + lc(nameOf(drv.id)) + " is " + drv.lead.pl + " (" + drv.lead.v + ")"
        : drv.lead.pl + " has the largest share of " + lc(nameOf(drv.id)) + " (" + drv.lead.c + ")";
    } else if (k.val && k.val.A1 && k.val.A1.every(function (x) { return x === k.val.A1[0]; })) { tail = "unchanged since Apr"; head = head.replace(/, flat vs Aug$/, ""); }
    return head + (tail ? "; " + tail : "") + ".";
  }

  // ---- root causes (only for anomalies: off target or worsening) --------------------------------------------
  function relWhy(s) {
    var i2 = inp("REL-002", s) || {}, i5 = inp("REL-005", s) || {};
    return sn(s) + ": " + fmt(+i2.failures || 0, 0) + " breakdowns took " + fmt(+i2.repair_hours || 0, 1) + " h to repair (MTTR " + show("REL-002", s) + " vs " + tgtTxt("REL-002") + ")"
      + (i5.pm_scheduled ? ", with only " + i5.pm_completed + " of " + i5.pm_scheduled + " preventive-maintenance jobs done" : "")
      + (CASE.asset[s] ? "; worst is " + CASE.asset[s] : "");
  }
  function prodWhy(s) {
    var i = inp("OPS-001", s) || {}, short = (+i.planned_production_t - +i.good_output_t) / 1000, loss = last("REL-004", s) || 0;
    return sn(s) + " made " + fmt(+i.good_output_t / 1000, 1) + " of " + fmt(+i.planned_production_t / 1000, 1) + " kt planned. " + fmt(last("REL-003", s), 1) + " h of unplanned downtime cost " + fmt(loss, 1) + " kt"
      + (short > 0 ? " (" + pct(loss, short) + "% of its " + fmt(short, 1) + " kt shortfall)" : "") + (CASE.asset[s] ? ", led by " + CASE.asset[s] : "")
      + ". RM-1 cover is the secondary risk (" + last("PRD-001", s) + " days to breach).";
  }
  function worst(id) { var pr = plantRows(id); return pr && pr.lead ? pr.lead.s : "Plant02"; }
  var ROOT = {
    "OPS-001": function () { return prodWhy(worst("OPS-001")); },
    "OPS-003": function () { return prodWhy(worst("OPS-003")); },
    "PLT-002": function () { return prodWhy(worst("PLT-002")); },
    "PLT-001": function () { var s = worst("PLT-001"), i = inp("PLT-001", s) || {}; return sn(s) + " ran " + fmt(+i.run_hours, 1) + " of " + fmt(+i.calendar_hours, 0) + " calendar hours (" + show("PLT-001", s) + "), losing " + fmt(last("REL-003", s), 1) + " h to unplanned downtime" + (CASE.asset[s] ? ", led by " + CASE.asset[s] : "") + "."; },
    "CST-001": function () { var s = worst("CST-001"), o = KIDS.filter(function (x) { return x !== s; }), i = inp("OPS-001", s) || {};
      return sn(s) + " costs " + show("CST-001", s) + " against " + o.map(function (x) { return show("CST-001", x); }).join(" and ") + " at the other plants. Its costs are spread over " + fmt(+i.good_output_t / 1000, 1) + " kt of output (" + show("OPS-001", s) + " of plan), and power costs " + show("CST-004", s) + " against " + o.map(function (x) { return show("CST-004", x); }).join(" and ") + "."; },
    "PRD-002": function () { var s = worst("PRD-002"); return sn(s) + " has a " + show("PRD-002", s) + " chance of missing next month's plan. " + prodWhy(s); },
    "SIG-007": function () { var s = worst("SIG-007"); return prodWhy(s); },
    "OPS-002": function () { var s = worst("OPS-002"), i = inp("OPS-002", s) || {}; return sn(s) + " sold " + fmt(+i.sales_t / 1000, 1) + " of " + fmt(+i.planned_sales_t / 1000, 1) + " kt planned. Sales follow output (" + show("OPS-001", s) + " of plan), and " + show("SIG-012", s) + " of its dispatches were late."; },
    "SIG-012": function () { var s = worst("SIG-012"), i = inp("SIG-012", s) || {}; return sn(s) + ": " + i.dispatches_delayed + " of " + i.dispatches_total + " dispatches late (" + show("SIG-012", s) + "), about twice the rate at the other plants, while it runs at " + show("OPS-001", s) + " of plan."; },
    "REL-001": function () { return relWhy(worst("REL-001")) + "."; },
    "REL-002": function () { return relWhy(worst("REL-002")) + "."; },
    "REL-003": function () { return relWhy(worst("REL-003")) + "."; },
    "REL-004": function () { return relWhy(worst("REL-004")) + "."; },
    "REL-005": function () { var s = worst("REL-005"), i = inp("REL-005", s) || {}; return sn(s) + " completed " + i.pm_completed + " of " + i.pm_scheduled + " scheduled preventive-maintenance jobs (" + show("REL-005", s) + "). The skipped jobs line up with its " + fmt(last("REL-003", s), 1) + " h of unplanned downtime."; },
    "SIG-008": function () { var s = worst("SIG-008"); return sn(s) + " raised " + last("SIG-008", s) + " of the " + last("SIG-008", "A1") + " critical plant-state alerts, in line with its " + fmt(last("REL-003", s), 1) + " h of unplanned downtime and MTTR of " + show("REL-002", s) + "."; },
    "PLT-004": function () { var s = worst("PLT-004"), i = inp("PLT-004", s) || {}; return sn(s) + " recovered " + fmt(+i.recovered_contained_t, 0) + " t of " + fmt(+i.feed_contained_t, 0) + " t contained in feed (" + show("PLT-004", s) + ", " + trendWords("PLT-004", s).replace(" vs", " pts vs") + "). The model records no process cause; this needs a plant process review."; },
    "PLT-005": function () { var s = worst("PLT-005"); return sn(s) + " yield is " + show("PLT-005", s) + " (" + trendWords("PLT-005", s).replace(" vs", " pts vs") + "), below the " + tgtTxt("PLT-005") + " target. The model records no process cause; this needs a plant process review."; },
    "SIG-009": function () { var s = worst("SIG-009"); return sn(s) + " holds " + last("SIG-009", s) + " of the " + last("SIG-009", "A1") + " materials at risk. The most critical is RM-1 at Plant 02 (" + last("PRD-001", "Plant02") + " days to breach), from " + CASE.supplier + "."; },
    "PRD-001": function () { return "RM-1 cover at Plant 02 runs out in " + last("PRD-001", "Plant02") + " days, because of " + CASE.supplier + "."; },
    "SUP-001": function () { var s = worst("SUP-001"), i = inp("SUP-001", s) || {}; return sn(s) + " received " + i.po_lines_on_time + " of " + i.po_lines_due + " order lines on time (" + show("SUP-001", s) + "). The main cause is " + CASE.supplier + "."; },
    "SUP-002": function () { var s = worst("SUP-002"); return "All three plants are below the " + tgtTxt("SUP-002") + " target; " + sn(s) + " is lowest at " + show("SUP-002", s) + ". There is no single supplier cause in the model."; },
    "SUP-004": function () { var s = worst("SUP-004"), i = inp("SUP-004", s) || {}; return sn(s) + " lead times ran " + show("SUP-004", s) + " over plan (" + i.lead_time_actual_days + " vs " + i.lead_time_planned_days + " supplier-days), driven by " + CASE.supplier + "."; },
    "REG-006": function () { var s = worst("REG-006"); return "The " + sn(s) + " operating permit expires in " + last("REG-006", s) + " days, inside the 90-day buffer. The renewal plan is due at D+60."; },
    "EHS-006": function () { var s = worst("EHS-006"); return sn(s) + " holds " + last("EHS-006", s) + " of the " + last("EHS-006", "A1") + " open corrective actions; the entity total rose from " + prev("EHS-006", "A1") + " to " + last("EHS-006", "A1") + " in Sep."; },
    "EHS-007": function () { var s = worst("EHS-007"); return "Overdue actions rose from " + prev("EHS-007", "A1") + " to " + last("EHS-007", "A1") + " in Sep; " + sn(s) + " holds " + last("EHS-007", s) + " of them. Closure is not keeping pace with new actions."; },
    "FIN-005": function () { return "EBIT is growing more slowly than capital employed. Plant 02 uses only " + show("OPS-003", "Plant02") + " of its capacity (Plants 01 and 03: " + show("OPS-003", "Plant01") + " and " + show("OPS-003", "Plant03") + "), so its capital earns least."; },
    "WCP-001": function () { return "Customers are paying more slowly (receivables are held at entity level). The linked plant signal is Plant 02, where " + show("SIG-012", "Plant02") + " of dispatches were late, which delays invoicing."; },
    "CSH-006": function () { return "The projected Plant 02 shortfall (" + show("SIG-007", "Plant02") + " of production at risk, case INC-SYN-0142) reduces the cash available to send upstream."; },
    "PRD-003": function () { return "Lost volume at Plant 02: " + show("SIG-007", "Plant02") + " of the " + show("SIG-007", "A1") + " of production at risk, from reliability losses and thin RM-1 cover."; },
    "TRU-004": function () { return CASE.brk + "."; },
    "TRU-008": function () { return "It fell in Sep, in the same period as " + CASE.brk + "."; },
    "GOV-008": function () { return "It has been flat at 86% since Apr. Case INC-SYN-0142 has 6 of 9 evidence items, and no completion drive is recorded."; },
    "SUP-006": function () { return CASE.contractor + "."; },
    "PRG-002": function () { return "Two initiatives are at risk: order-to-cash automation and energy efficiency at Plant 02. Cash benefit lags EBITDA benefit."; }
  };

  // ---- attach to a card ----------------------------------------------------------------------------------------
  function rowsOut(pr, id) {
    var k = K(id) || {};
    return pr.rows.map(function (x) {
      var adverse = pr.kind === "ratio" ? (k.better === "down" ? x.eff > 0 : x.eff < 0) : false;
      return {pl: x.pl, v: x.v, tr: x.tr || "", c: x.c || "", fw: pr.lead && pr.lead.s === x.s ? "600" : "400",
        vc: x.off ? "var(--ct-red-700,#A4262C)" : "var(--ct-ink,#121A2B)",
        cc: pr.kind === "ratio" ? (adverse ? "var(--ct-red-700,#A4262C)" : "var(--ct-green-700,#1E6B43)") : "var(--ct-ink-2,#3B4558)"};
    });
  }
  function attach(c, scope) {
    if (!init() || !c) return;
    c.noInfo = true;                       // Entity cards are stand-alone: no click-through, no (i) link
    delete c.href;
    var id = c.id || "";
    if (!/^[A-Z]{3}-\d{3}$/.test(id) || c.pending || (scope && scope !== "A1")) return;
    var pr = plantRows(id), drv = null;
    if (!pr && DRIVER[id]) { drv = plantRows(DRIVER[id]); if (drv) drv.id = DRIVER[id]; }
    var bs = (card(id, "A1") || {}).bs || c.bs || "", anomalous = BAD.test(bs);
    if (prev(id, "A1") === 999) c.tr = "Started in Sep";   // 999 = clock not running last month
    c.why = justify(id, c, pr, drv);
    c.hasWhy = true;
    var src = pr || drv;
    if (src) {
      c.hasPl = true;
      c.plT = pr ? "By plant · Sep" : "Plant driver · " + nameOf(drv.id) + " · Sep";
      c.plH = src.head || "";
      c.plRows = rowsOut(src, pr ? id : drv.id);
      c.plN = pr ? "" : "Booked at entity level; plants shown by its driver (" + drv.id + ").";
    } else {
      c.hasPl = false;
      c.plN = "Entity-level measure; the model holds no plant split." + (LINK[id] ? " Plant link: " + LINK[id] + "." : "");
    }
    c.hasPlN = !!c.plN;
    // anomaly: the entity is off target or worsening, or one of its plants misses the target on a ratio KPI
    if (!anomalous && pr && pr.kind === "ratio" && pr.rows.some(function (x) { return x.off; })) anomalous = true;
    if (anomalous && ROOT[id]) { try { c.root = ROOT[id](); } catch (e) { c.root = ""; } }
    c.hasRoot = !!c.root;
    c.fb = "";                             // the breakdown replaces the single-plant flag chip
  }
  // ---- Core Group lens: summarised plant detail, only plants with a variation, no root cause ------------------
  // A plant has a variation when it misses the KPI target by more than 2% of the target (any amount for a zero target);
  // for a KPI without a target, when it moved the wrong way by 10% or more vs last month, or sits 25% or more on the wrong
  // side of the plant median. Text KPIs: only pricing pressure (Medium or High) counts.
  var TOL = 0.02, MOVE = 0.10, PEER = 0.25;
  var SIZE = {"SUS-001": 1, "SUS-002": 1, "FIN-003": 1, "CST-002": 1, "CST-003": 1, "CST-005": 1};   // totals that scale with plant size: no peer test
  function plantsOf(scope) { var c = P.children || {}; if (scope && c[scope] && !/^Plant/.test(c[scope][0] || "")) return [].concat.apply([], c[scope].map(function (e) { return c[e] || []; })); return c[scope] || []; }
  function entityOf(s) { var c = P.children || {}; for (var e in c) if (c[e].indexOf(s) >= 0 && e !== "Group") return e; return ""; }
  function median(a) { a = a.slice().sort(function (x, y) { return x - y; }); var m = a.length >> 1; return a.length % 2 ? a[m] : (a[m - 1] + a[m]) / 2; }
  function varOf(id, s, peers) {
    var k = K(id); if (!k || !k.val || !k.val[s]) return null;
    var v = last(id, s), c = card(id, s), dq = Math.max(dpOf(id), 1);
    if (typeof v !== "number") return canon(id) === "SIG-013" && /^(Medium|High)/.test(String(v)) ? {c: String(v).split(" ")[0] + " pressure", sev: /^High/.test(v) ? 2 : 1} : null;
    if (c && c.v != null && !/\d/.test(String(c.v))) return null;                        // e.g. "Not expected"
    if (k.target != null) {
      var gap = v - k.target, tol = Math.abs(k.target) * TOL;
      var bad = k.better === "down" ? gap > tol : gap < -tol; if (!bad) return null;
      var du = dUnit(id); if (Math.abs(gap) === 1) du = du.replace(/([a-z])s$/, "$1");
      return {c: sgn(gap, isPct(id) ? 1 : dpOf(id)) + du + " vs target", sev: Math.abs(gap) / (Math.abs(k.target) || 1)};
    }
    if (!k.better) return null;
    var p = prev(id, s), med = median(peers), down = k.better === "down";
    if (num(p) && p !== 0) { var rel = (v - p) / Math.abs(p); if (down ? rel >= MOVE : rel <= -MOVE) return {c: (rel > 0 ? "+" : "−") + Math.round(Math.abs(rel) * 100) + "% vs Aug", sev: Math.abs(rel)}; }
    if (!SIZE[canon(id)] && num(med) && med !== 0) { var r2 = (v - med) / Math.abs(med); if (down ? r2 >= PEER : r2 <= -PEER) return {c: (down ? (v / med).toFixed(1) + "× plant median" : Math.round(Math.abs(r2) * 100) + "% below median"), sev: Math.abs(r2)}; }
    return null;
  }
  function variations(id, scope) {
    if (!init()) return null; var k = K(id); if (!k || !k.val) return null;
    var ps = plantsOf(scope || "Group").filter(function (s) { return k.val[s]; }); if (!ps.length) return null;
    var peers = ps.map(function (s) { return last(id, s); }).filter(num);
    var out = ps.map(function (s) { var x = varOf(id, s, peers); return x && {s: s, pl: sn(s), ent: entityOf(s), id: canon(id) === id ? id : id, v: show(id, s).replace(/ (% of plan|% late|% weighted)$/, "%"), tr: trendTxt(id, s), c: x.c, sev: x.sev}; }).filter(Boolean);
    out.sort(function (a, b) { return b.sev - a.sev; });
    return {rows: out, of: ps.length};
  }
  function attachGroup(c, scope) {
    if (!init() || !c) return;
    c.noInfo = true; delete c.href;                       // stand-alone cards, as in the Entity lens
    var id = c.id || "";
    if (!/^[A-Z]{3}-\d{3}$/.test(id) || c.pending) return;
    scope = /^(A\d|Group)$/.test(scope || "") ? scope : "Group";
    var vid = id, vr = variations(id, scope);
    if (!vr && DRIVER[id]) { vid = DRIVER[id]; vr = variations(vid, scope); }
    c.fb = "";
    if (!vr) { c.hasPl = false; c.plN = "Booked at entity level; no plant split."; c.hasPlN = true; return; }
    var lbl = vid === id ? "" : " · " + nameOf(vid);
    if (!vr.rows.length) { c.hasPl = false; c.plN = "No plant variation" + lbl.replace(" · ", " on ") + ": all " + vr.of + " plants within target or normal range."; c.hasPlN = true; return; }
    c.hasPl = true;
    c.plT = "Plants with a variation" + lbl + " · Sep";
    c.plH = "vs target / trend";
    c.plRows = vr.rows.map(function (x, i) { return {pl: x.pl + " (P" + x.s.slice(-2) + ")", v: x.v, tr: "", c: x.c.replace(/ vs target$/, ""), fw: i === 0 ? "600" : "400", vc: "var(--ct-red-700,#A4262C)", cc: "var(--ct-red-700,#A4262C)"}; });
    var byE = {}; vr.rows.forEach(function (x) { (byE[x.ent] = byE[x.ent] || []).push(x.pl.replace("Plant ", "")); });
    c.plN = vr.rows.length + " of " + vr.of + " plants " + (vr.rows.length === 1 ? "varies" : "vary") + (vid === id ? "" : " on the driver (" + vid + ")") + ": " +
      Object.keys(byE).sort().map(function (e) { return sn(e) + " plant" + (byE[e].length > 1 ? "s " : " ") + byE[e].join(", "); }).join(" · ") + ". Plant detail is in the Entity lens.";
    c.hasPlN = true; c.hasRoot = false;
  }
  return {attach: attach, attachGroup: attachGroup, variations: variations, plantRows: function (id) { return init() ? plantRows(id) : null; }, rootIds: function () { return Object.keys(ROOT); }};
})();
