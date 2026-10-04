/* Visual lab: showcases the DCViz block types with the same panel chrome as the page templates.
   The BLOCKS below are written exactly as they would sit in a page's renderVals() (drivers / drill blocks),
   so moving one into a page is a copy-paste. Pulse reads its values from base-data.js (DCTData). */
(function () {
  var BLOCKS = {
    owner: [
      {type: "pulse", title: "Enterprise pulse", ask: "Is the enterprise healthier than yesterday, and can I trust what I'm seeing?", scope: "Group",
        read: "Financial and Capital are healthy. Cash, Operations and Cost & supply have most KPIs behind plan, and Cash and Operations each lost one KPI overnight.",
        cap: "Each petal is a domain: its length is the share of that domain's KPIs on track (outer ring = 100%), from base-data.js at Group scope. Hover a petal for the KPIs behind plan.",
        d1: {"Cash & WC": {ok: 2, why: "CSH-001 Cash slipped (not yet certified)"}, "Operations": {ok: 2, why: "OPS-001 Production slipped; reconciliation break"}},
        domains: [
          {n: "Financial", k: [["FIN-001", 1, "EBITDA"], ["FIN-002", 1, "EBIT"], ["FIN-003", 1, "Revenue"], ["FIN-004", 1, "Free cash flow"], ["FIN-005", 1, "ROCE"]]},
          {n: "Cash & WC", k: [["CSH-001", 1, "Cash"], ["CSH-003", 1, "Operating cash"], ["CSH-004", -1, "Cash cycle days"], ["WCP-001", -1, "DSO"], ["WCP-002", 1, "DPO"], ["WCP-003", -1, "DIO"], ["WCP-004", -1, "Net working capital"]]},
          {n: "Operations", k: [["OPS-001", 1, "Production"], ["OPS-002", 1, "OTIF"], ["OPS-003", 1, "OEE"], ["OPS-005", 1, "Capacity use"], ["OPS-006", 1, "Yield"], ["PLT-002", 1, "Plant OEE"], ["REL-005", 1, "Asset availability"]]},
          {n: "Cost & supply", k: [["CST-001", -1, "Cost per tonne"], ["CST-002", -1, "Variable cost"], ["CST-003", -1, "Energy cost"], ["CST-004", -1, "Logistics cost"], ["SUP-001", 1, "Supplier OTIF"], ["SUP-007", -1, "Supply concentration"]]},
          {n: "Capital", k: [["CPX-002", 1, "Capex committed"], ["CPX-003", 1, "Capex spent"], ["CPX-004", 1, "Project progress"], ["PRG-002", 1, "Value delivered"], ["PRG-004", 1, "Transformation"], ["STR-002", 1, "Strategic milestones"]]},
          {n: "Risk & ESG", k: [["VAL-001", 1, "Value at stake"], ["VAL-002", 1, "Savings"], ["VAL-003", 1, "Growth value"], ["TRS-004", 1, "Hedge cover"], ["SUS-003", -1, "Energy intensity"], ["GOV-004", -1, "Overdue certifications"]]}
        ]},
      {type: "horizon", title: "Materiality horizon", ask: "What crossed materiality, and what is about to?",
        read: "Three items are over the line and need the Owner today. Two more are on course to cross within three days: the upstream obligation (forecast) and RM-1 cover.",
        cap: "Distance to each item's materiality threshold (100%). Threshold values are placeholders in the catalogue [PH]; trajectories are synthetic.",
        from: -6, to: 3,
        items: [
          {id: "ALT-2041", l: "Plant 02 shortfall", pts: [[-6, 20], [-5, 24], [-4, 30], [-3, 45], [-2, 62], [-1, 88], [0, 128]], ts: "Pending certification", own: "Entity Executive A1"},
          {id: "GOV-004", l: "Overdue certifications 7 vs ≤5", pts: [[-6, 60], [-5, 80], [-4, 80], [-3, 100], [-2, 120], [-1, 120], [0, 140]], ts: "Certified", own: "Assurance"},
          {id: "TRU-007", l: "Certification SLA breach", pts: [[-6, 0], [-5, 0], [-4, 20], [-3, 40], [-2, 60], [-1, 80], [0, 110]], ts: "System count", own: "Core Group"},
          {id: "CSH-006", l: "Upstream obligation CU 26 m", pts: [[-6, 48], [-4, 58], [-2, 70], [0, 82]], fc: [[0, 82], [1, 95], [2, 108], [3, 118]], ts: "Pending certification", own: "Group Treasury"},
          {id: "SIG-009", l: "RM-1 cover 3.5 d vs 9 d lead", pts: [[-6, 40], [-4, 52], [-2, 70], [0, 86]], fc: [[0, 86], [3, 104]], ts: "Pending certification", own: "Supply"},
          {id: "OPS-001", l: "Production reconciliation", pts: [[-6, 30], [-3, 34], [-1, 40], [0, 72]], ts: "Reconciliation break", own: "Metric Owner"},
          {id: "WCP-001", l: "DSO A1 52 d", pts: [[-6, 62], [-3, 70], [0, 78]], ts: "Certified"},
          {id: "TRS-004", l: "Hedge cover 68% vs ≥75%", pts: [[-6, 55], [-3, 58], [0, 62]], ts: "Certified"},
          {id: "EHS-001", l: "LTIFR 0.42", pts: [[-6, 35], [-3, 32], [0, 30]], ts: "Certified"}
        ]},
      {type: "bridge", title: "EBITDA bridge, confidence-weighted", ask: "How much of the gap to plan is real, and how much is still provisional?", unit: "CU m", axis: [354, 368],
        read: "Net +0.3 CU m looks calm, but 3.0 CU m of the movement (FX, value programme, other) is not certified yet: ten times the net.",
        cap: "YTD EBITDA plan to actual (FIN-001). Driver split is synthetic and sums to the governed totals. Axis cut on totals.",
        start: {l: "Plan YTD", v: 361.0, ts: "Certified"}, end: {l: "Actual YTD", v: 361.3, ts: "Certified"},
        steps: [{l: "Price", v: 5.6, ts: "Certified"}, {l: "Volume", v: -3.9, ts: "Certified with exception"}, {l: "Variable cost", v: -2.8, ts: "Certified"}, {l: "Energy", v: 1.6, ts: "Certified"},
          {l: "FX", v: -1.2, ts: "Pending certification"}, {l: "Value prog.", v: 1.4, ts: "Pending certification"}, {l: "Other", v: -0.4, ts: "Reconciliation break"}]}
    ],
    core: [
      {type: "flow", title: "Variance flow: entity to driver", ask: "Which entity drives the variance, and through which driver?", unit: "CU m", hi: "A1", combine: "Other 5 entities",
        read: "A1's price gain (+2.8) almost exactly cancels its volume loss (−2.4) and cost increase (−1.0), so the small net hides big moves underneath. The other five entities together move less than A1 alone.",
        cap: "YTD EBITDA variance vs plan. Entities A2–C2 are combined; hover a ribbon for its value. Entity nets match G-02 (sum +0.3 = FIN-001 Group). Driver split is synthetic.",
        entities: [{id: "A1", l: "Entity A1"}, {id: "A2", l: "Entity A2"}, {id: "B1", l: "Entity B1"}, {id: "B2", l: "Entity B2"}, {id: "C1", l: "Entity C1"}, {id: "C2", l: "Entity C2"}],
        drivers: [{id: "price", l: "Price", ts: "Certified"}, {id: "vol", l: "Volume", ts: "Certified with exception"}, {id: "cost", l: "Variable cost", ts: "Certified"}, {id: "energy", l: "Energy", ts: "Certified"},
          {id: "fx", l: "FX", ts: "Pending certification"}, {id: "val", l: "Value programme", ts: "Pending certification"}, {id: "oth", l: "Other", ts: "Reconciliation break"}],
        m: [[2.8, -2.4, -1.0, 0.5, -0.3, 1.2, -0.4], [0.5, -0.3, -0.4, 0.2, -0.2, 0.1, 0], [0.6, -0.4, -0.5, 0.2, -0.1, 0, 0], [0.7, -0.2, -0.3, 0.3, -0.2, 0, 0], [0.4, -0.3, -0.3, 0.2, -0.3, 0.1, 0], [0.6, -0.3, -0.3, 0.2, -0.1, 0, 0]]},
      {type: "fingerprints", title: "Entity fingerprints", ask: "Which entity looks different from its peers?", focus: "A1",
        read: "Entity A1's shape caves in on DSO, ROCE and certification, and its production figure is unreconciled. Only C1 is materially behind on anything (certification); B1 is slightly behind on several KPIs, and the rest hold to plan.",
        cap: "Four KPIs from the G-02 comparison set, same axes for every entity. A1 production is a flash figure under reconciliation (hatched).",
        axes: [{l: "DSO", plan: 45, pol: -1, span: 8, u: " d"}, {l: "ROCE vs plan", plan: 0, pol: 1, span: 1.5, u: " pt"}, {l: "Certified", plan: 86, pol: 1, span: 5, u: "%"}, {l: "Production", plan: 100, pol: 1, span: 5, u: "%"}],
        rows: [
          {id: "A1", l: "Entity A1", v: [52, -1.6, 82, 103.2], ts: ["Certified", "Certified", "Certified", "Reconciliation break"]},
          {id: "A2", l: "Entity A2", v: [44, 0.3, 86, 99.1]},
          {id: "B1", l: "Entity B1", v: [46, -0.6, 84, 98.4]},
          {id: "B2", l: "Entity B2", v: [43, 0.1, 86, 100.2]},
          {id: "C1", l: "Entity C1", v: [45, 0.2, 82, 97.9], ts: ["Certified", "Certified", "Certified", "Pending certification"]},
          {id: "C2", l: "Entity C2", v: [44, 0.5, 86, 99.6]}
        ]},
      {type: "tide", title: "Certification tide", ask: "Which numbers are uncertified, and is this close behind its usual pace?",
        read: "84% certified at D6 (TRU-001), behind all three previous closes. Even at the current pace the close only just reaches ~99% by D8, with no slack; Entity A1 holds 4 of the open cells.",
        cap: "Share of leadership KPIs by trust state per close day; grey lines are P04–P06 at the same day. Grid is synthetic.",
        days: 10, today: 5, target: 7,
        stack: {cert: [20, 38, 54, 64, 72, 78], exc: [2, 3, 4, 5, 6, 6], pend: [76, 57, 40, 29, 20, 14], recon: [2, 2, 2, 2, 2, 2]},
        prior: [{l: "P04", v: [24, 44, 61, 74, 84, 88, 95, 99, 100, 100]}, {l: "P05", v: [26, 48, 66, 78, 86, 91, 97, 100, 100, 100]}, {l: "P06", v: [30, 52, 70, 82, 90, 94, 98, 100, 100, 100]}],
        grid: {cols: ["Financial", "Cash", "Production", "Supply", "Reliability", "Capex", "EHS", "Regulatory"], rows: [
          {l: "Entity A1", c: ["cert", "pend", "recon", "pend", "pend", "cert", "cert", "cert"]},
          {l: "Entity A2", c: ["cert", "cert", "cert", "cert", "cert", "cert", "cert", "cert"]},
          {l: "Entity B1", c: ["cert", "cert", "cert", "pend", "cert", "exc", "cert", "cert"]},
          {l: "Entity B2", c: ["cert", "cert", "cert", "cert", "cert", "cert", "cert", "cert"]},
          {l: "Entity C1", c: ["cert", "pend", "pend", "cert", "cert", "cert", "cert", "stale"]},
          {l: "Entity C2", c: ["cert", "cert", "cert", "cert", "exc", "cert", "cert", "cert"]}]}},
      {type: "river", title: "Escalation aging river", ask: "Which escalations are stuck, and where?",
        read: "4 of 11 escalations are past their stage SLA. The two critical ones are in Entity A1: the upstream obligation has been sitting in Owned for 6 days.",
        cap: "Open escalations (EFF-009 = 11). Position across a stage = age against that stage's SLA; past-SLA items pile up at the right-hand edge.",
        stages: [{l: "Raised", sla: 1}, {l: "Triaged", sla: 1}, {l: "Owned", sla: 3}, {l: "In action", sla: 5}, {l: "Resolved"}],
        thru: [9, 8, 5, 7], resolved: {n: 14, med: 4.2},
        items: [
          {id: "ESC-418", l: "Late invoice dispute", ent: "C1", sev: "med", st: 0, age: 0.3}, {id: "ESC-419", l: "SIG-005 customer slowdown", ent: "A1", sev: "high", st: 0, age: 0.2},
          {id: "ESC-414", l: "Kiln 2 overrun", ent: "B1", sev: "med", st: 1, age: 0.8}, {id: "ESC-412", l: "Meter mapping gap", ent: "A2", sev: "med", st: 1, age: 1.6},
          {id: "ESC-405", l: "CSH-006 upstream obligation", ent: "A1", sev: "crit", st: 2, age: 6}, {id: "ESC-407", l: "ALT-2041 Plant 02 shortfall", ent: "A1", sev: "crit", st: 2, age: 1.2},
          {id: "ESC-409", l: "C1 revenue variance", ent: "C1", sev: "high", st: 2, age: 4.1}, {id: "ESC-411", l: "Hedge cover review", ent: "B2", sev: "med", st: 2, age: 1},
          {id: "ESC-398", l: "S-07 single-source supplier", ent: "A1", sev: "high", st: 3, age: 7.5}, {id: "ESC-401", l: "Kiln 2 capital phasing", ent: "B1", sev: "med", st: 3, age: 3}, {id: "ESC-403", l: "Logistics tender", ent: "C2", sev: "med", st: 3, age: 2.2}
        ]}
    ],
    entity: [
      {type: "lanes", title: "Causal driver lanes: free cash flow", ask: "What is causing the free cash flow gap, and which function has to fix it?", unit: "CU m",
        read: "Finance reports the gap, but the biggest root cause, two late-paying customers, belongs to Commercial; RM-1 buffer stock belongs to Supply and the L2 rebuild to Production. Projects offsets part of the gap.",
        cap: "FIN-004 A1 19.8 vs 24.5. Owners follow the base-data owner roles (WCP-001/002 Finance, WCP-003 Supply, CPX Projects). Children sum to their parent; contributions below the measures are synthetic.",
        lanes: [{id: "fin", l: "Finance"}, {id: "com", l: "Commercial"}, {id: "sup", l: "Supply"}, {id: "prd", l: "Production"}, {id: "prj", l: "Projects"}],
        cols: ["Result", "Driver", "Measure", "Root cause"],
        nodes: [
          {id: "fcf", lane: "fin", l: "Free cash flow YTD", v: "CU 19.8 m vs 24.5", d: -4.7, ts: "Certified"},
          {id: "ebitda", p: "fcf", lane: "fin", l: "EBITDA", v: "CU 96.2 m vs 95.8", d: 0.4, ts: "Certified"},
          {id: "wc", p: "fcf", lane: "fin", l: "Working capital", v: "+CU 9 m out vs +2", d: -7.0, ts: "Pending certification"},
          {id: "oth", p: "fcf", lane: "fin", l: "Tax and other", v: "in line", d: -0.1, ts: "Certified"},
          {id: "cpx", p: "fcf", lane: "prj", l: "Capex spend", v: "CU 118 m vs 120", d: 2.0, ts: "Certified"},
          {id: "dso", p: "wc", lane: "fin", l: "DSO", v: "52 d vs 45", d: -3.6, ts: "Certified"},
          {id: "dpo", p: "wc", lane: "fin", l: "DPO", v: "38 d vs 42", d: -1.0, ts: "Certified"},
          {id: "dio", p: "wc", lane: "sup", l: "DIO", v: "41 d vs 34", d: -2.4, ts: "Pending certification"},
          {id: "bil", p: "dso", lane: "fin", l: "Billing cut-off delay", v: "P07 invoices +2 d", d: -0.7, ts: "Certified"},
          {id: "cus", p: "dso", lane: "com", l: "2 customers late", v: "+11 d · SIG-005", d: -2.9, ts: "LEADING"},
          {id: "rm1", p: "dio", lane: "sup", l: "RM-1 buffer stock", v: "S-07 single source", d: -1.6, ts: "Pending certification"},
          {id: "fg", p: "dio", lane: "prd", l: "Finished goods L2", v: "Plant 02 rebuild", d: -0.8, ts: "Pending certification"}
        ]},
      {type: "loop", title: "Cash conversion loop", ask: "Where is cash getting stuck in the cycle?", scale: 120,
        read: "Cash conversion is 55 days against a plan of 37 (WCP-006). DSO and DIO each add 7 days and a shorter DPO adds 4, so CU 14 m more cash is tied up than planned.",
        cap: "Outer ring: days cash is out (DSO + DIO). Purple: days suppliers fund (DPO). Inner ring: what's left (CCC); red = over plan.",
        dso: {v: 52, plan: 45, ts: "Certified"}, dio: {v: 41, plan: 34, ts: "Pending certification"}, dpo: {v: 38, plan: 42, ts: "Certified"},
        tied: "CU 96 m", tiedVar: "+14 vs plan", cashPerDay: "CU 0.78 m", cashPerDayN: 0.78},
      {type: "runway", title: "14-day risk runway", ask: "What is at risk this week and next, and when does it bunch up?", days: 14,
        read: "Exposure peaks from D+4 to D+9, when RM-1 stock-out, the Plant 02 shortfall and the upstream obligation overlap. The REG-011 response (38 h) comes first.",
        cap: "Point events and windows by lane; the top band sums severity across lanes.",
        lanes: ["Regulatory", "Certification", "Supply", "Production", "Cash", "Capex"],
        ev: [
          {lane: "Regulatory", l: "REG-011 response due (38 h)", at: 1.6, sk: "bad", ts: "System count"},
          {lane: "Certification", l: "OPS-001 reconciliation fix", from: 0, to: 2, sk: "warn", ts: "Reconciliation break"},
          {lane: "Certification", l: "Close · D8", at: 2, sk: "grey", ts: "Certified"},
          {lane: "Supply", l: "RM-1 stock-out window unless expedited", from: 3.5, to: 9, sk: "bad", ts: "Pending certification"},
          {lane: "Production", l: "Plant 02 shortfall (FCST)", from: 4, to: 10, sk: "fc", ts: "Pending certification"},
          {lane: "Production", l: "L2 maintenance", from: 11, to: 12, sk: "grey", ts: "Certified"},
          {lane: "Cash", l: "Receipts due · 2 late payers", at: 3, sk: "warn", ts: "LEADING"},
          {lane: "Cash", l: "Upstream obligation CU 26 m", at: 9, sk: "fc", ts: "Pending certification"},
          {lane: "Capex", l: "Project 05 milestone (3 d late)", at: 12, sk: "warn", ts: "Certified"}
        ]}
    ],
    all: [
      {type: "zoom", title: "One map, three depths", ask: "Where does EBITDA come from, and where is it off plan, at my depth?", unit: "CU m", level: "core",
        read: "At business level everything looks green. At entity level A1 looks fine. Only at plant level does Plant 02's −6% show up: same visual, same colours, one level deeper.",
        cap: "Squarified treemap of EBITDA YTD; entity totals sum to FIN-001 Group 361.3. Lens buttons switch depth (in the app, the depth follows the lens).",
        levels: [
          {k: "owner", l: "Owner", crumb: "Group › by business", items: [{l: "Business A", v: 154.4, plan: 154.1, ts: "Certified"}, {l: "Business B", v: 97.5, plan: 97.4, ts: "Certified"}, {l: "Business C", v: 109.4, plan: 109.5, ts: "Certified"}]},
          {k: "core", l: "Core Group", crumb: "Group › Business A, B, C › by entity", items: [{l: "Entity A1", v: 96.2, plan: 95.8, ts: "Certified"}, {l: "Entity A2", v: 58.2, plan: 58.3, ts: "Certified"}, {l: "Entity B1", v: 44.9, plan: 45.1, ts: "Certified"},
            {l: "Entity B2", v: 52.6, plan: 52.3, ts: "Certified"}, {l: "Entity C1", v: 47.3, plan: 47.5, ts: "Pending certification"}, {l: "Entity C2", v: 62.1, plan: 62.0, ts: "Certified"}]},
          {k: "entity", l: "Entity", crumb: "Entity A1 › by plant", items: [{l: "Plant 01", v: 34.0, plan: 32.7, ts: "Certified"}, {l: "Plant 02", v: 31.2, plan: 33.3, ts: "Reconciliation break"}, {l: "Plant 03", v: 31.0, plan: 29.8, ts: "Certified"}]}
        ]}
    ]
  };

  if (typeof window !== "undefined") window.DCVizLabBlocks = BLOCKS;

  var LENSES = [
    {k: "owner", n: "01", l: "Owner", q: "Is the enterprise healthier than yesterday? What crossed materiality? What needs me today?"},
    {k: "core", n: "02", l: "Core Group", q: "Which entity drives the variance? Which numbers are uncertified? Which escalations are stuck?"},
    {k: "entity", n: "03", l: "Entity", q: "Are we on plan? What is at risk this week? What must I accept or approve?"},
    {k: "all", n: "04", l: "Across lenses", q: "One visual language that zooms with the lens."}
  ];

  var PANEL =
    '<section class="ct-panel" role="region" aria-label="{{b.title}}" style="background:var(--ct-surface,#FFFFFF);border:1px solid var(--ct-line,#DCE1E8);border-top:3px solid var(--ct-navy-900,#0E1B33);border-radius:4px;padding:20px 22px;display:flex;flex-direction:column;gap:14px;min-width:0">' +
      '<div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:4px 16px;align-items:flex-start">' +
        '<div style="display:flex;flex-direction:column;gap:3px;min-width:0;flex:1 1 360px">' +
          '<h2 style="margin:0;font-size:18px;line-height:1.4;font-weight:600">{{b.title}}</h2>' +
          '<p style="margin:0;font-size:13px;line-height:19px;color:var(--ct-ink-2,#3B4558)"><span style="font-family:\'IBM Plex Mono\',ui-monospace,monospace;font-size:11px;line-height:16px;font-weight:500;letter-spacing:.04em;text-transform:uppercase;color:var(--ct-ink-3,#5B6576);margin-right:6px">Answers</span>{{b.ask}}</p>' +
        '</div>' +
        '<span style="font-family:\'IBM Plex Mono\',ui-monospace,monospace;font-size:11px;line-height:16px;font-weight:500;letter-spacing:.04em;text-transform:uppercase;color:var(--ct-ink-3,#5B6576);padding-top:3px">type: {{b.type}}</span>' +
      '</div>' +
      '<sc-if value="{{b.hasLevels}}"><div role="tablist" aria-label="Depth" style="display:flex;gap:6px;flex-wrap:wrap"><sc-for list="{{b.lv}}" as="v"><button type="button" role="tab" aria-selected="{{v.on}}" class="ct-btn" onClick="{{v.pick}}" style="min-height:32px;padding:0 12px;border-radius:4px;font:500 12.5px \'IBM Plex Sans\',system-ui,sans-serif;cursor:pointer;border:1px solid {{v.bd}};background:{{v.bg}};color:{{v.fg}}">{{v.l}}</button></sc-for></div></sc-if>' +
      '<sc-if value="{{b.vz.read}}"><p style="margin:0;padding:10px 12px;background:var(--ct-surface-2,#F8F9FB);border-left:3px solid var(--ct-navy-700,#24406E);font-size:13.5px;line-height:20px;color:var(--ct-ink,#121A2B)"><b style="font-weight:600">Reading · </b>{{b.vz.read}}</p></sc-if>' +
      '<div style="overflow-x:auto">' + DCViz.snippet + '</div>' +
      '<p style="margin:0;font-size:12px;line-height:17px;color:var(--ct-ink-3,#5B6576)">{{b.cap}}</p>' +
    '</section>';

  var MARKUP =
    '<div class="ct" style="font-family:\'IBM Plex Sans\',system-ui,sans-serif;color:var(--ct-ink,#121A2B);background:var(--ct-bg,#F5F6F8);font-size:14px;line-height:20px;min-height:100vh">' +
      '<header class="ct-dark" style="display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;padding:10px 20px;background:var(--ct-navy-900,#0E1B33);color:#FFFFFF;min-height:64px;box-sizing:border-box">' +
        '<svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" fill="none" stroke="#FFFFFF" stroke-width="1.6"><rect x="3" y="3" width="16" height="16" rx="2"></rect><path d="M7 15V10M11 15V7M15 15v-3"></path></svg>' +
        '<span style="font-weight:600;letter-spacing:.02em">Control Tower</span><span style="opacity:.6">/</span><span>Visual lab</span>' +
        '<span title="All names, values, dates and sources on this page are synthetic" style="display:inline-flex;align-items:center;min-height:24px;padding:0 8px;border:1px dashed rgba(255,255,255,.55);border-radius:2px;font-family:\'IBM Plex Mono\',ui-monospace,monospace;font-size:11px;letter-spacing:.06em">SYNTHETIC DATA</span>' +
        '<span style="font-family:\'IBM Plex Mono\',ui-monospace,monospace;font-size:11px;letter-spacing:.06em;opacity:.75">NOT LINKED FROM THE APP · LAB</span>' +
        '<nav style="margin-left:auto;display:flex;gap:16px;font-size:13px"><a href="viz-simple.html" style="color:#FFFFFF">Simple versions →</a><a href="../index.html" style="color:#FFFFFF">Prototype</a></nav>' +
      '</header>' +
      '<main style="max-width:1320px;margin:0 auto;padding:28px 24px 72px;display:flex;flex-direction:column;gap:22px">' +
        '<div style="display:flex;flex-direction:column;gap:6px">' +
          '<span style="font-family:\'IBM Plex Mono\',ui-monospace,monospace;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--ct-ink-3,#5B6576)">Lab · overview visuals · 11 block types</span>' +
          '<h1 style="margin:0;font-size:28px;line-height:36px;font-weight:600;color:var(--ct-navy-900,#0E1B33)">Complex picture, one view</h1>' +
          '<p style="margin:0;max-width:900px;font-size:15px;line-height:23px;color:var(--ct-ink-2,#3B4558)">Each visual answers one lens question and shows trust in the same way as the KPI badges, so readers see how a number is doing and whether to believe it at the same time. Hover any mark for detail; hover an entity, driver or node to trace it.</p>' +
        '</div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:8px 20px;align-items:center;padding:12px 14px;background:var(--ct-surface,#FFFFFF);border:1px solid var(--ct-line,#DCE1E8);border-radius:4px">' +
          '<span style="font-family:\'IBM Plex Mono\',ui-monospace,monospace;font-size:11px;font-weight:600;letter-spacing:.06em;color:var(--ct-ink-3,#5B6576)">VISUAL LANGUAGE</span>' +
          '<sc-for list="{{lang}}" as="k"><span style="display:inline-flex;align-items:center;gap:6px;font-size:12.5px"><svg width="16" height="16" aria-hidden="true"><defs><pattern id="vzl-{{$index}}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#FFFFFF"></rect><rect width="2.4" height="6" style="fill:{{k.hc}}"></rect></pattern></defs><rect x="1" y="1" width="14" height="14" rx="2" style="fill:{{k.f}};stroke:{{k.s}};stroke-width:{{k.sw}};stroke-dasharray:{{k.da}}"></rect></svg>{{k.l}}</span></sc-for>' +
        '</div>' +
        '<nav role="tablist" aria-label="Lens" style="display:flex;gap:8px;flex-wrap:wrap;position:sticky;top:0;z-index:5;background:var(--ct-bg,#F5F6F8);padding:8px 0">' +
          '<sc-for list="{{tabs}}" as="t"><button type="button" role="tab" aria-selected="{{t.on}}" class="ct-btn" onClick="{{t.pick}}" style="min-height:40px;padding:0 16px;border-radius:4px;font:600 13px \'IBM Plex Sans\',system-ui,sans-serif;cursor:pointer;border:1px solid {{t.bd}};background:{{t.bg}};color:{{t.fg}}">{{t.l}}</button></sc-for>' +
        '</nav>' +
        '<sc-for list="{{sections}}" as="sec">' +
          '<div style="display:flex;flex-direction:column;gap:16px;margin-top:10px">' +
            '<div style="display:flex;align-items:baseline;gap:12px;border-bottom:2px solid var(--ct-navy-900,#0E1B33);padding-bottom:8px">' +
              '<span style="font-family:\'IBM Plex Mono\',ui-monospace,monospace;font-size:13px;font-weight:600;color:var(--ct-navy-700,#24406E)">{{sec.n}}</span>' +
              '<h2 style="margin:0;font-size:20px;line-height:28px;font-weight:600;color:var(--ct-navy-900,#0E1B33)">{{sec.h}}</h2>' +
              '<span style="font-size:13px;color:var(--ct-ink-3,#5B6576)">{{sec.q}}</span>' +
            '</div>' +
            '<sc-for list="{{sec.blocks}}" as="b">' + PANEL + '</sc-for>' +
          '</div>' +
        '</sc-for>' +
      '</main>' +
    '</div>';

  DCLite.register("VizLab", MARKUP, function (DCLogic) {
    class Component extends DCLogic {
      renderVals() {
        var self = this, st = this.state || {}, lens = st.lens || "all-lenses", data = typeof DCTData !== "undefined" ? DCTData : {};
        var C = DCViz.colors, btn = function (on) { return on ? {bg: "var(--ct-navy-900,#0E1B33)", fg: "#FFFFFF", bd: "var(--ct-navy-900,#0E1B33)"} : {bg: "#FFFFFF", fg: "var(--ct-ink,#121A2B)", bd: "var(--ct-line-strong,#B4BDCA)"}; };
        var tabs = [{k: "all-lenses", l: "Everything"}].concat(LENSES.map(function (x) { return {k: x.k, l: x.l}; })).map(function (t) {
          return Object.assign({l: t.l, on: String(t.k === lens), pick: function () { self.setState({lens: t.k}); }}, btn(t.k === lens));
        });
        var sections = LENSES.filter(function (x) { return lens === "all-lenses" || lens === x.k; }).map(function (x) {
          return {n: x.n, l: x.l, h: x.k === "all" ? x.l : x.l + " lens", q: x.q, blocks: BLOCKS[x.k].map(function (raw, i) {
            var b = Object.assign({}, raw), key = x.k + i;
            b.hasLevels = !!b.levels;
            var level = st["lv" + key] || b.level;
            if (b.levels) b.lv = b.levels.map(function (v) { return Object.assign({l: v.l, on: String(v.k === level), pick: function () { var u = {}; u["lv" + key] = v.k; self.setState(u); }}, btn(v.k === level)); });
            b.vz = DCViz.scene(b, {data: data, level: level});
            return b;
          })};
        });
        var lang = [
          {l: "Certified", f: C.navy7, s: "none", sw: 0, da: "none", hc: C.navy7},
          {l: "Certified with exception", f: C.navy7, s: C.warn, sw: 2, da: "none", hc: C.navy7},
          {l: "Pending certification", f: "url(#vzl-2)", s: C.navy7, sw: 1.25, da: "3 2", hc: C.navy7},
          {l: "Reconciliation break", f: "url(#vzl-3)", s: C.g6, sw: 1.25, da: "4 2", hc: C.g6},
          {l: "Stale / missing", f: "#FFFFFF", s: C.g6, sw: 1.25, da: "1.5 2", hc: C.g6},
          {l: "On track", f: C.ok, s: "none", sw: 0, da: "none", hc: C.ok},
          {l: "Deteriorating", f: C.warn, s: "none", sw: 0, da: "none", hc: C.warn},
          {l: "Breached", f: C.bad, s: "none", sw: 0, da: "none", hc: C.bad},
          {l: "Forecast", f: C.fc, s: "none", sw: 0, da: "none", hc: C.fc}
        ];
        return {tabs: tabs, sections: sections, lang: lang};
      }
    }
    return Component;
  });
})();
