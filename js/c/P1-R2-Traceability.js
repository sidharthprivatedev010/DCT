DCLite.register("P1-R2-Traceability", "\n\n<div class=\"pg\">\n  <a class=\"back\" href=\"Main.dc.html\">← Pack index</a>\n  <div class=\"top\">\n    <div>\n      <div class=\"eyebrow\">Phase 1 · Master reference R2 · v0.2 completeness check</div>\n      <h1>Requirement traceability matrix</h1>\n      <p class=\"q\">A pre-design completeness check against the master brief across 12 coverage areas. Each requirement is traced to its theme, personas, routes, template, implementation treatment, status and any unresolved assumption. Omissions found in the check were corrected in the architecture boards (CX-01 to CX-09).</p>\n    </div>\n    <div class=\"chips\">\n      <span class=\"chip nav\">BASELINE v0.2 · 2026-10-03</span>\n      <span class=\"chip\">NO VISUAL SCREENS · ARCHITECTURE ONLY</span>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <div class=\"cnt\">\n      <div><b>{{total}}</b>requirements traced</div>\n      <div><b>{{nCovered}}</b>Covered in v0.1</div>\n      <div><b>{{nCorrected}}</b>Corrected in v0.2</div>\n      <div><b>{{nPending}}</b>Decision accepted 2026-10-03 (recommendation adopted)</div>\n      <div><b>0</b>Not covered</div>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>Completeness findings and corrections (v0.2)</h2>\n    <p class=\"sub\">Gaps the check found in the v0.1 architecture, and where each one is now corrected. No requirement was dropped.</p>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:70px 1fr 1fr 220px\"><div>ID</div><div>Omission found</div><div>Correction</div><div>Where</div></div>\n      <sc-for list=\"{{findings}}\" as=\"r\" hint-placeholder-count=\"9\">\n        <div class=\"tr\" style=\"grid-template-columns:70px 1fr 1fr 220px\"><div class=\"id\">{{r.i}}</div><div>{{r.o}}</div><div>{{r.c}}</div><div class=\"id\" style=\"font-weight:500\">{{r.w}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>Traceability matrix</h2>\n    <p class=\"sub\">Persona codes: OWN Owner · CGE Core Group Executive · ENX Entity Executive · FNL Functional Leader · MOC Metric Owner / Certifier · ANL Analyst · ACO Action Owner · INC Incident Commander · ASR Assurance Reviewer · ADM Administrator · AI assistants. Theme X = cross-cutting shell or governance. Templates A–F per board 04.</p>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:70px 230px 50px 110px 150px 44px 1fr 112px 190px\"><div>ID</div><div>Requirement</div><div>Theme</div><div>Persona</div><div>Route</div><div>Tpl</div><div>Implementation treatment</div><div>Status</div><div>Unresolved assumption</div></div>\n      <sc-for list=\"{{groups}}\" as=\"g\" hint-placeholder-count=\"12\">\n        <div class=\"tr grp\" style=\"grid-template-columns:1fr\"><div>{{g.n}}</div></div>\n        <sc-for list=\"{{g.rows}}\" as=\"r\" hint-placeholder-count=\"8\">\n          <div class=\"tr\" style=\"grid-template-columns:70px 230px 50px 110px 150px 44px 1fr 112px 190px\"><div class=\"id\">{{r.i}}</div><div style=\"font-weight:500;color:#0F1E3A\">{{r.q}}</div><div class=\"id\">{{r.th}}</div><div class=\"id\" style=\"font-weight:500\">{{r.p}}</div><div class=\"id\" style=\"font-weight:500\">{{r.rt}}</div><div class=\"id\">{{r.tp}}</div><div>{{r.t}}</div><div><span class=\"st {{r.k}}\">{{r.s}}</span></div><div class=\"muted\">{{r.a}}</div></div>\n        </sc-for>\n      </sc-for>\n    </div>\n  </div>\n</div>\n", function (DCLogic) {

class Component extends DCLogic {
  renderVals() {
    const C = "COVERED", X = "CORRECTED v0.2";
    const R = (i,q,th,p,rt,tp,t,s,a) => ({i,q,th,p,rt,tp,t,s:s||C,a:a||"—"});
    const G = (n, rows) => ({n, rows});
    const groups = [
      G("1 · All eight themes", [
        R("TH-1","Enterprise Health: is the enterprise healthier today than yesterday?","T1","OWN CGE ENX","O-01 G-01 G-03 E-01","A C","Six cards on O-01; four drill tabs (Financial, Operational, Strategic, Risk); 15 measures placed (R1)",C,"Shareholder-value definition [PH]"),
        R("TH-2","Number Assurance: can leadership defend the number?","T2","MOC ANL ASR CGE","S-03 G-08 E-08","D","Trust badge on every KPI; KPI detail tabs; certification matrix; workbench at entity and group scope",X,"D-02, D-22, D-10"),
        R("TH-3","No-Surprises: what can materially hurt before period end?","T3","CGE ENX OWN","S-12 O-02 S-06","C F","Signal board with leading signals separated from prediction outputs and actuals; 24 h change in every lens",X,"D-20; watch conditions [PH]"),
        R("TH-4","Cash and Liquidity: can cash move where it needs to?","T4","OWN CGE ENX","O-03 G-04 E-05 S-11","A C","Cash line with liquidity floor [PH]; WC and cash bridges; lifecycle with 7 attributes per stage",C,"C-05; covenant terms [PH]"),
        R("TH-5","Operations and Assets: are assets producing what they promised?","T5","CGE ENX FNL","G-05 E-02 E-03 E-04 S-10","B C","Plant benchmark bars; actual/plan/forecast to line; reliability Pareto; supplier exposure",C,"C-07, C-09"),
        R("TH-6","Capex and Initiatives: are we spending money and creating value?","T6","OWN CGE ENX","O-04 G-06 E-06","A B C","Progress chain Approved → Benefit; spend always paired with physical progress",C,"Physical-progress method [PH]"),
        R("TH-7","Risk, Compliance and EHS: what can stop the business tomorrow?","T7","OWN CGE ENX FNL","O-05 G-07 E-07","A B C","Materiality matrix; entity × domain matrix; obligation and expiry clock list; shared governed KPIs",C,"D-07"),
        R("TH-8","Decision, Action, Escalation and AI: who owns it, what next, is it closing?","T8","All","O-06 G-09 E-09 E-10 S-04 S-05","E","Accountability strip; action tables; escalation ladder; full incident model (board 11)",X,"D-01, D-06, D-08")
      ]),
      G("2 · Every KPI category and sub-theme (measure-level detail in R1)", [
        R("K-01","T1 Financial (7): EBITDA & variance, EBIT, Revenue & variance, FCF, ROCE, Net Debt, Shareholder value [PH]","T1","OWN CGE","O-01 G-01 G-03","A C","FIN-001/004/006 cards on O-01; six cards on G-03; others in O-01 Financial tab",C,"FIN-007 definition [PH]"),
        R("K-02","T1 Operational (3): Production vs plan, Sales vs plan, Capacity utilization","T1","OWN CGE ENX","O-01 E-01 G-05 E-02","A B C","OPS-001 card O-01/E-01; OPS-002 card E-01; OPS-003 G-05/E-02",C),
        R("K-03","T1 Strategic (2): Capex progress, Transformation progress","T1","OWN CGE","O-01 O-04 G-06","A B","STR-001 alias → CPX-004 card; STR-002 in Programmes tab",C,"Capex progress = physical progress (assumed)"),
        R("K-04","T1 Risk (3): Open critical alerts, EHS severity events, Regulatory breaches","T1","OWN","O-01 O-05","A","EFF-002 card; others in O-01 Risk tab",C,"Regulatory-breach definition [PH]"),
        R("K-05","T2 Per-KPI attributes (16) incl. related break or finding","T2","All","S-03","D","DS-02 expanded card; DS-21 definition panel; tabs",C,"C-11 truncation reading"),
        R("K-06","T2 Data trust (10)","T2","CGE MOC","G-01 G-08 E-08","A D","TRU-001 card G-01; 5 cards G-08; TRU-004/008 E-08; rest Reconciliation tab",C,"D-10 Board number; 'Lake' [PH]"),
        R("K-07","T2 Governance (9)","T2","CGE ASR MOC","G-08 E-08 S-08","D","GOV-007 card G-08; GOV-002/008 E-08; rest Governance tab",C,"GOV-002 vs CTL-010 distinct (confirm)"),
        R("K-08","T3 Operations signals (3): downtime, yield, recovery","T3","CGE ENX","S-12 E-02 E-03","C","LEADING encoding; aliases of REL-003, PLT-005, PLT-004",C,"C-07"),
        R("K-09","T3 Finance and exposure (8)","T3","CGE ENX OWN","S-12 E-01 E-03 E-05 O-04 E-06","A C","SIG-007/008/009/011 cards; all on S-12",C,"Watch conditions [PH]"),
        R("K-10","T3 Commercial (2): dispatch delays, pricing pressure","T3","CGE ENX","S-12 E-05 G-03","C","SIG-012 card E-05; SIG-013 G-03 Price tab",C),
        R("K-11","T3 External (5): commodity, FX, freight, fuel, power","T3","CGE","S-12 G-03","C","EXT encoding; never blended into actuals",C,"External source categories [PH]"),
        R("K-12","T3 Risk and compliance signals (3)","T3","CGE ENX","S-12 E-07","C","Aliases of REG-002/003; SIG-021",C),
        R("K-13","T3 Prediction outputs (5)","T3","OWN CGE ENX","S-12 O-01 O-03 S-10","A C","PREDICTION encoding; S-12 cards; forecast panels",C,"Model method and confidence basis [PH]"),
        R("K-14","T4 Working capital (6)","T4","OWN CGE ENX","O-03 G-04 E-05","A C","WCP-004 card O-03; WCP-001..004 cards G-04; rest in tabs",C),
        R("K-15","T4 Cash (6)","T4","OWN CGE ENX","O-03 G-04 E-01 E-05","A C","CSH-001/006 O-03; CSH-003 E-01/E-05; CSH-005 alias → FIN-004",C,"C-05 entity upstream view"),
        R("K-16","T4 Liquidity (4)","T4","OWN CGE","O-03 G-04","A C","LIQ-001/002 cards O-03; rest in Liquidity tab",C,"Covenant terms [PH]"),
        R("K-17","T4 Treasury (2): FX exposure, hedging effectiveness","T4","OWN CGE","O-03 G-04","A C","Treasury tabs; TRS-001 canonical for SIG-015",C,"Hedge policy [PH]"),
        R("K-18","T4 Lifecycle Production → … → Upstreaming with actual, plan, forecast, leakage, constraint, trust, owner","T4","OWN CGE ENX","E-05 S-11 O-03 G-04","A C","DS-11 lifecycle chain",C,"C-05"),
        R("K-19","T5 Plant (6)","T5","CGE ENX","G-05 E-02","B C","OEE/capacity cards; recovery and yield separate",C,"C-07"),
        R("K-20","T5 Reliability (5 incl. Preventive-…)","T5","ENX FNL","E-03","C","Six cards on E-03",C,"C-09 REL-005 assumed"),
        R("K-21","T5 Cost (3)","T5","CGE ENX","G-05 E-02","B C","CST-001 card G-05; Cost tab E-02",C,"Unit per business A-14"),
        R("K-22","T5 Sustainability (3)","T5 T7","CGE ENX OWN","G-05 E-02 O-05 E-07","B C","Canonical SUS-001..003 reused in T7 context",C),
        R("K-23","T5 Supplier performance (6)","T5","ENX FNL","E-04","C","Six cards on E-04",C),
        R("K-24","T5 Drill hierarchy Group → Line where access permits","T5","All","All B/C routes","B C","SH-11 breadcrumb; per-lens depth rules (04)",C,"A-05 matrix organisation"),
        R("K-25","T6 Capex (3) + physical progress","T6","OWN CGE ENX","O-04 G-06 E-06","A B C","CPX-001..004 cards",C,"Physical-progress method [PH]"),
        R("K-26","T6 Programmes (3)","T6","OWN CGE ENX","O-04 G-06 E-06","A B C","PRG-002/003 cards; PRG-001 tab",C),
        R("K-27","T6 Value (3)","T6","OWN CGE","O-04 G-06","A B","Value tabs",C,"Benefit-attribution rules [PH]"),
        R("K-28","T6 Chain + spend never alone","T6","OWN CGE ENX","O-04 G-06 E-06","A B C","DS-12 progress chain; paired bars",C),
        R("K-29","T7 Regulatory (9)","T7","OWN CGE ENX FNL","O-05 G-07 E-07","A B C","REG-005/006/009 O-05; REG-004..006 E-07",C,"D-07; no legal rules modelled"),
        R("K-30","T7 EHS (9)","T7","OWN CGE ENX FNL","O-05 G-07 E-07 S-05","A B C","EHS-001/004 cards; EHS-006/007/009 E-07",C,"EHS severity classification [PH]"),
        R("K-31","T7 Compliance and controls (10)","T7","CGE ASR","G-07 O-05 G-08","A B","CTL-004 card; Controls tab",C),
        R("K-32","T7 Contracts (3)","T7","CGE ENX","G-07 E-04","B C","CON-001 card G-07",C),
        R("K-33","T7 Sustainability (reuse, no conflicting definition)","T7","All","O-05 G-07 E-07","A B C","Alias rows → SUS-001..003",C),
        R("K-34","T8 Operating effectiveness (8)","T8","CGE ENX OWN","G-09 E-09 O-01 E-01","A E","EFF-002/006/007/008 cards; rest G-09 drill",C)
      ]),
      G("3 · Owner, Core Group and Entity lenses", [
        R("L-01","Owner: overall health, value, material change, exposure, decisions; 8 experiences","X","OWN","O-01..O-08","A E F","Exception-led landing pages",C),
        R("L-02","Owner: no routine plant queues or dense reconciliation","X","OWN","O-01 S-10","A C","Owner-depth variants; no T-E queues",C),
        R("L-03","Every global nav item resolves to a landing page in the Owner lens","X","OWN","S-10 G-08","C D","S-10 summary mode; G-08 Owner-depth trust summary",X,"D-21"),
        R("L-04","Core Group: compare, drivers, govern certification, coordinate; 10 experiences","X","CGE","G-01..G-10","A B C D E F","Comparative depth",C,"D-14"),
        R("L-05","Core Group: no unnecessary transaction detail; contribution not hidden by averages","X","CGE","G-01 G-02 S-09","A B","Sorted contribution bars; counts only for transactions",C),
        R("L-06","Entity: diagnose and act; 10 experiences","X","ENX FNL ACO","E-01..E-10","A C D E","Operational depth to line",C,"D-15"),
        R("L-07","Entity: no unrelated entity or portfolio-confidential data","X","ENX","All E-","—","Visibility 6a; GR-06, GR-09",C,"D-16"),
        R("L-08","DETECT (24 h change) available in every lens","T3","CGE ENX","G-01 E-01 S-12","A C","Change-ledger panel DS-17; S-12 24 h filter",X),
        R("L-09","Lens never widens scope","X","All","S-01","—","GR-06; lens selector shows only permitted lenses",C,"D-21")
      ]),
      G("4 · Supporting operational roles and role-based action rights", [
        R("RL-01","Owner rights: view material issues, request analysis, strategic decisions, intervene, view war rooms; no certify","T8","OWN","O-06 O-08","E","06 rows 1, 6, 10, 11, 12",C,"D-05 DoA"),
        R("RL-02","Core Group rights: compare, coordinate, govern certification, route, escalate; cannot alter facts","T8","CGE","G-02 G-08 G-09","B D E","06 rows 3, 8, 9; GR-07",C,"D-06"),
        R("RL-03","Entity Executive: accept accountability, initiate response, approve permitted local actions, request escalation","T8","ENX","E-09 S-05","E","06 rows 2, 8, 27",X,"DoA [PH]"),
        R("RL-04","Functional Leader: investigate domain, accept and assign supporting actions, add explanation and evidence","T8","FNL","E-02..E-07 S-05","C E","06 rows 2, 3, 5, 28; domain landing E-09",X),
        R("RL-05","Metric Owner / Certifier: inspect, certify, certify with exception, request correction; scope-limited","T2","MOC","E-08 S-03","D","06 rows 18–21, 32; GR-03",X,"D-02, D-22"),
        R("RL-06","Analyst: investigate breaks and deviations, prepare evidence; no certify","T2","ANL","E-08 S-03 S-08","D E","06 rows 5, 20; investigation queue",C),
        R("RL-07","Action Owner: accept, update, document dependencies, submit evidence, request closure; no self-approval","T8","ACO","E-09 E-10","E","06 rows 4, 5, 15, 29; GR-02",X),
        R("RL-08","Incident Commander: coordinate, maintain facts, actions, decisions, communications","T8","INC","S-05 O-08","E","06 rows 9, 26, 30; war-room mode (11c)",X,"D-23"),
        R("RL-09","Assurance Reviewer: review certification, controls, evidence, overrides, closure; no data change","T2","ASR","G-08 S-08","D E","06 row 31; GR-05; Assurance variant of G-08",X,"D-18"),
        R("RL-10","Administrator: mappings and config; no automatic authority","X","ADM","Admin console","—","06 row 22; GR-04",C,"A-15 console out of scope"),
        R("RL-11","Governance assignments: commander, decision authority, closure approver, watchers, disclosure authority","T8","All","S-05","E","Assignment table (03)",X,"D-06, D-07, D-23"),
        R("RL-12","Defined landing route for every role","X","All","—","—","Home-route table (03)",X)
      ]),
      G("5 · Every required route (41 = 8 Owner + 10 Core Group + 10 Entity + 8 shared + 5 added)", [
        R("RT-O01","Enterprise Health Home","T1","OWN","O-01","A","EBITDA A/P/F line; six cards; four drill tabs",C),
        R("RT-O02","24-Hour Executive Change Report","T3","OWN","O-02","F","Change ledger ranked by materiality",C),
        R("RT-O03","Cash and Liquidity Summary","T4","OWN","O-03","A","Cash line; cash bridge; lifecycle summary",C),
        R("RT-O04","Major Capex and Strategic Initiatives","T6","OWN","O-04","A","Progress chain per major project",C),
        R("RT-O05","Material Risk, Compliance and EHS","T7","OWN","O-05","A","Materiality matrix",C),
        R("RT-O06","Decisions Required","T8","OWN","O-06","E","Decision queue + decision card",C,"D-05"),
        R("RT-O07","Daily Executive Brief","T8","OWN AI","O-07","F","Sourced brief; AI draft, human release",C,"D-11"),
        R("RT-O08","Active War Room","T8","OWN","O-08","E","Owner view of war-room mode",C),
        R("RT-G01","Portfolio Home","T1","CGE","G-01","A","Contribution bars + 24 h change panel",X),
        R("RT-G02","Entity Performance Comparison","T1","CGE","G-02","B","Entity × KPI matrix",C),
        R("RT-G03","Financial and Value Performance","T1","CGE","G-03","C","EBITDA waterfall",C),
        R("RT-G04","Cash and Working-Capital Drivers","T4","CGE","G-04","C","WC waterfall + lifecycle by entity",C),
        R("RT-G05","Operations Benchmarking","T5","CGE","G-05","B","Plant benchmark bars",C),
        R("RT-G06","Capex Portfolio","T6","CGE","G-06","B","Paired spend / progress bars",C),
        R("RT-G07","Consolidated Risk View","T7","CGE","G-07","B","Entity × risk-domain matrix",C),
        R("RT-G08","Certification Governance","T2","CGE ASR OWN","G-08","D","Certification matrix; Owner and Assurance variants",X,"D-21"),
        R("RT-G09","Executive Escalation Center","T8","CGE","G-09","E","Escalation ladder board",C,"D-08"),
        R("RT-G10","Briefing and Inquiry Pack","T8","CGE AI","G-10","F","Pack builder + inquiry log","PENDING D-14","Name merge"),
        R("RT-E01","Entity Home","T1","ENX","E-01","A","Production A/P/F by plant + 24 h change panel",X),
        R("RT-E02","Plant and Production Performance","T5","ENX FNL","E-02","C","A/P/F plant → line",C),
        R("RT-E03","Asset Reliability and Recovery","T5","ENX FNL","E-03","C","Downtime Pareto; recovery line","PENDING D-15","Split route"),
        R("RT-E04","Supply and Contractor Dependencies","T5 T3","ENX FNL","E-04","C","Cover vs lead-time bars","PENDING D-15","Split route"),
        R("RT-E05","Production-to-Cash Lifecycle","T4","ENX FNL","E-05","C","Lifecycle chain",C,"C-05"),
        R("RT-E06","Entity Capex Execution","T6","ENX FNL","E-06","C","Progress chain",C),
        R("RT-E07","Regulatory and EHS Workbench","T7","ENX FNL","E-07","C","Obligation clock list + action table",C),
        R("RT-E08","KPI Certification Workbench","T2","MOC ANL","E-08","D","Queue + reconciliation + decision panel; scope-parameterised",X,"D-22"),
        R("RT-E09","My Alerts, Cases and Actions","T8","ENX FNL ACO","E-09","E","Unified work queue",C),
        R("RT-E10","Action Closure Detail","T8","ACO ENX","E-10","E","Closure checklist",C,"D-06"),
        R("RT-S01","Application shell","X","All","S-01","—","SH-01..SH-14",C),
        R("RT-S02","Restricted-access state","X","All","S-02","all","SY-07 pattern",C,"D-12"),
        R("RT-S03","KPI detail and lineage","T2","All","S-03","D","Expanded card + tabs + lineage graph",C),
        R("RT-S04","Alert detail","T8","All","S-04","E","22-field model (11a)",X),
        R("RT-S05","Case detail (incident, war room)","T8","All","S-05","E","Full incident model (11b, 11c)",X,"D-01"),
        R("RT-S06","Scenario analysis","T3","CGE ENX INC","S-06","C","Option comparison",C,"D-09"),
        R("RT-S07","AI explanation panel","T8","All AI","S-07","F","Eight sections (11e)",C),
        R("RT-S08","Evidence and audit trail","T8 T2","All","S-08","E","Append-only timeline",C),
        R("RT-S09","Entity Contribution drill (added)","T1","OWN CGE","S-09","B","Contribution bars","PENDING D-20"),
        R("RT-S10","Operations Impact drill (added)","T5","OWN CGE","S-10","C","Plant A/P/F; Owner summary mode","PENDING D-20"),
        R("RT-S11","Cash Exposure drill (added)","T4","OWN CGE","S-11","C","Issue-scoped lifecycle","PENDING D-20"),
        R("RT-S12","No-Surprises Signal Board (added)","T3","CGE ENX","S-12","C","Signals → predictions","PENDING D-20"),
        R("RT-S13","Ask Control Tower (added)","T8","All AI","S-13","F","Scoped AI inquiry","PENDING D-20")
      ]),
      G("6 · All six reusable page templates", [
        R("TP-A","Executive Overview: full anatomy 1–10","X","OWN CGE ENX","O-01 O-03 O-04 O-05 G-01 E-01","A","Six routes",C),
        R("TP-B","Portfolio or Entity Comparison","X","OWN CGE","G-02 G-05 G-06 G-07 S-09","B","Five routes",C),
        R("TP-C","Operational Analysis","X","CGE ENX FNL","G-03 G-04 E-02..E-07 S-06 S-10..S-12","C","Twelve routes",C),
        R("TP-D","KPI Detail and Number Assurance","X","MOC ANL CGE","S-03 G-08 E-08","D","Three routes",C),
        R("TP-E","Alert, Case, Action and War Room","X","All","S-04 S-05 S-08 O-06 O-08 G-09 E-09 E-10","E","Eight routes; ≤4 counters on workbenches",C,"D-13"),
        R("TP-F","Briefing and AI Inquiry","X","OWN CGE AI","O-02 O-07 G-10 S-07 S-13","F","Five routes",C)
      ]),
      G("7 · Materiality dimensions", [
        R("MT-01","Dimensions: Financial, Liquidity, Production, Regulatory, Reputation (+ EHS, time-to-breach modifier assumed)","X","CGE","S-04 S-05","E","R3 dimension table",'PENDING D-03',"C-10 garbled source"),
        R("MT-02","Output levels Critical / High / Medium / Low","X","All","S-04 O-05 G-07","A B E","R3 levels with visibility consequences",C),
        R("MT-03","Scoring logic and thresholds labelled placeholders","X","All","All","—","[PH] labels; 'pending approval' tag on DS-18",C),
        R("MT-04","Show which dimensions drove the result","X","All","S-04 S-05 O-02","E F","DS-18 materiality breakdown",C),
        R("MT-05","Owner sees the issue only after the threshold is crossed","X","OWN","O-01 O-02","A F","GR-08",C,"D-04"),
        R("MT-06","Severity distinguished from materiality","X","All","S-04 S-05","E","A-16; separate header fields",X,"A-16")
      ]),
      G("8 · Incident, case and war-room requirements", [
        R("IN-01","Alert → Case → Incident → War Room object model","T8","All","S-04 S-05","E","Board 04 object model","PENDING D-01"),
        R("IN-02","Incident header (12 fields)","T8","All","S-05","E","11b; count corrected from 13",X),
        R("IN-03","Live facts (7)","T8","INC","S-05","E","11b; WK-05",X),
        R("IN-04","Impact (11), current + forecast","T8","INC FNL","S-05","E","11b; WK-06",X),
        R("IN-05","Timeline (10 event types)","T8","All","S-05 S-08","E","11b; WK-07",X),
        R("IN-06","Ownership and governance (10)","T8","All","S-05","E","11b; WK-04, WK-14, WK-16",X,"D-23"),
        R("IN-07","Actions (8)","T8","ACO INC","S-05 E-09","E","11b; WK-08, WK-09",X),
        R("IN-08","Communications (6) incl. disclosure review and approvals","T8","INC CGE","S-05","E","11b; WK-17",X,"D-07"),
        R("IN-09","Closure (9) incl. human approver and reopen control","T8","ACO CGE ASR","S-05 E-10","E","11b; WK-12",X,"D-06, D-18"),
        R("IN-10","Primary actions (10), role-gated","T8","All","S-05","E","11b ↔ 06",C),
        R("IN-11","13 incident states","T8","All","S-04 S-05","E","09 · 9d",C),
        R("IN-12","War-room mode: entry, participants, layout, cadence, Owner view, exit","T8","INC CGE OWN","S-05 O-08","E","11c",X,"Cadence [PH]"),
        R("IN-13","Alert / case information model (22 fields)","T8","All","S-04","E","11a",X)
      ]),
      G("9 · AI assistant responsibilities", [
        R("AI-01","Validation Assistant: cross-source consistency, trust, completeness, evidence; never certifies","T2","AI MOC","S-03 S-04 E-08 E-10","D E","11d; AI-06 validation result",X),
        R("AI-02","Explanation Assistant: why a KPI changed, with facts kept separate","T8","AI","S-07 S-13 O-02","F","11d + 11e",X),
        R("AI-03","Executive Briefing Assistant: morning Owner Brief + packs from sourced data","T8","AI CGE","O-07 G-10","F","11d; human release",X,"D-11"),
        R("AI-04","Escalation Routing Assistant: drafts issue, owner role, due, path, decision; no assignment","T8","AI","S-04 E-09 G-09","E","11d; WK-04 draft vs accepted",X,"D-19"),
        R("AI-05","Explanation model: 8 separated sections","T8","AI","S-07","F","11e",C),
        R("AI-06","AI may not certify, approve a financial number, accept risk, approve disclosure, close a material case","T8","AI","All","—","GR-01; controls not rendered for AI",C),
        R("AI-07","AI labelled and limited to the requester's scope","X","AI","All","—","AI-02 label; GR-06",C)
      ]),
      G("10 · Non-happy-path states (12)", [
        R("NH-01","Loading","X","All","All","all","SY-01 layout skeleton",C),
        R("NH-02","No data","X","All","All","all","SY-02",C),
        R("NH-03","Partial data","X","All","All","all","SY-03 banner; totals marked partial",C),
        R("NH-04","Stale data","X","All","All","all","SY-04; trust state Stale",C,"Freshness window [PH]"),
        R("NH-05","Source unavailable","X","All","All","all","SY-05; last certified value labelled",C),
        R("NH-06","Reconciliation break","T2","All","S-03 E-08 G-08","D","DS-04 Unverified treatment",C),
        R("NH-07","Pending certification","T2","All","All","all","DS-04",C),
        R("NH-08","Restricted access","X","All","S-02","all","SY-07; no leakage",C,"D-12"),
        R("NH-09","Forecast unavailable","T3","All","A and C routes","A C","SY-06",C),
        R("NH-10","Alert without owner","T8","ENX CGE","E-09 G-09","E","WK-04 Unowned + clock",C,"D-19"),
        R("NH-11","Escalation overdue","T8","CGE","G-09","E","WK-14 overdue",C,"D-08"),
        R("NH-12","Action awaiting closure approval","T8","Approver","E-10 E-09","E","WK-12 requested state",C,"D-06")
      ]),
      G("11 · Supplier-delay journey (board 07)", [
        R("J1-A","Backstage A1–A5: signal → alert → AI routing draft → human acceptance → materiality crosses threshold","T3 T8","FNL ENX CGE AI","E-04 S-04 E-09 S-05","C E","07 Part A; R3 timeline",C,"Thresholds [PH]"),
        R("J1-01","Owner Home","T1","OWN","O-01","A","Banner after threshold; forecast-breach marker",C),
        R("J1-02","24-Hour Change","T3","OWN","O-02","F","ALT-SYN-2041 ranked #1",C),
        R("J1-03","Material Alert","T8","OWN","S-04","E","Header + materiality drivers + decision required",C),
        R("J1-04","Entity Contribution","T1","OWN","S-09","B","Entity A1 82% (SYN)","PENDING D-20"),
        R("J1-05","Operations Impact","T5","OWN","S-10","C","Plant 02 / L2 forecast dip; no queues","PENDING D-20"),
        R("J1-06","Cash Exposure","T4","OWN","S-11","C","Dispatch / Billing leakage","PENDING D-20"),
        R("J1-07","Case Detail","T8","OWN INC","S-05","E","War-room mode; scenario options",C),
        R("J1-08","Accepted Human Ownership","T8","ENX OWN","S-05 O-06","E","Ownership panel; DEC-SYN-0219",C,"D-05"),
        R("J1-09","Action","T8","ACO INC","S-05 E-09","E","ACT-SYN-1107..1110; blocked → escalated",C),
        R("J1-10","Evidence-Based Closure","T8","ACO CGE ASR","E-10 S-05","E","Criteria, evidence 100%, approver ≠ owner",C,"D-06"),
        R("J1-L","Lens gating: Entity → Core Group → Owner only after threshold","X","All","—","—","07 swimlane",C,"D-04"),
        R("J1-B","Branches BR-1..BR-7 (unowned, forecast unavailable, stale, source down, overdue, rejected, reopened)","X","All","—","—","07 branches table",C)
      ]),
      G("12 · Number Assurance journey (board 08)", [
        R("J2-01","KPI Card shows Reconciliation break (not breach)","T2","CGE","G-01","A","Two-axis card; Unverified value",C),
        R("J2-02","KPI Detail","T2","CGE","S-03","D","Trust summary; Validation Assistant note",C),
        R("J2-03","Definition / Source / Calculation","T2","CGE MOC","S-03","D","DS-21",C),
        R("J2-04","Lineage","T2","ANL","S-03","D","DS-14; mapping change flagged",C),
        R("J2-05","Reconciliation Break","T2","ANL","S-03","D","DS-15; BRK-SYN-0071",C),
        R("J2-06","Number Assurance Workbench","T2","ANL ADM MOC","E-08","D","Correction via approved mapping fix",X,"D-22"),
        R("J2-07","Human Certification Decision","T2","MOC","E-08","D","Certify with exception; certifier ≠ metric owner",C,"D-02"),
        R("J2-08","Updated Leadership View","T2","All","G-01 O-01 E-01","A","Certified-with-exception badge; audit; Assurance sample",C),
        R("J2-B","Branches TB-1..TB-6","T2","All","—","—","08 branches table",C)
      ])
    ];
    let nC = 0, nX = 0, nP = 0, total = 0;
    groups.forEach(g => g.rows.forEach(r => {
      total++;
      if (r.s === C) { r.k = "sC"; nC++; }
      else if (r.s === X) { r.k = "sX"; nX++; }
      else { r.k = "sP"; nP++; r.s = r.s.replace("PENDING", "ACCEPTED"); }
    }));
    return {
      groups, total, nCovered: nC, nCorrected: nX, nPending: nP,
      findings: [
        {i:"CX-01", o:"Governance assignments in the brief (incident commander, decision authority, closure approver, watchers, disclosure authority) were not modelled separately from roles.", c:"Assignment table with eligible roles, assigning role and the decision governing each.", w:"03 · Governance assignments; D-23"},
        {i:"CX-02", o:"Supporting roles (Functional Leader, Certifier, Analyst, Commander, Assurance) had no defined landing route.", c:"Home-route table per role; Assurance variant of G-08.", w:"03 · Home route; 05 G-08"},
        {i:"CX-03", o:"Six role rights in the brief had no permission row: approve local action, add business explanation, document dependencies, maintain decisions and comms, assurance review, group-scope certification.", c:"Rows 27–32 added to the action matrix.", w:"06 · 6b"},
        {i:"CX-04", o:"Incident, case and alert field models were counted but not enumerated; the header was miscounted (13 vs 12); severity and materiality were undefined.", c:"Full field-level model with component, editor and AI role; A-16 defines severity vs materiality.", w:"11 · 11a, 11b; 02 · A-16"},
        {i:"CX-05", o:"Consolidated group KPIs had nowhere to be certified (E-08 was entity-only).", c:"E-08 is scope-parameterised; group scope opens from G-08.", w:"05 E-08, G-08; 04; D-22"},
        {i:"CX-06", o:"Owner nav items 'Operations and Assets' and 'Number Assurance' had no landing (drill-only).", c:"S-10 summary mode and G-08 Owner-depth trust summary are the landings.", w:"04 sitemap; 05 S-10, G-08; D-21"},
        {i:"CX-07", o:"DETECT (what changed in 24 h) existed only in the Owner lens.", c:"Change-ledger panel on G-01 and E-01; 24 h filter on S-12.", w:"05 G-01, E-01, S-12"},
        {i:"CX-08", o:"AI assistants had responsibilities but no operating specification (trigger, inputs, outputs, surfaces, human gate).", c:"Specification table for all four assistants plus content rules for the explanation model.", w:"11 · 11d, 11e"},
        {i:"CX-09", o:"Visibility matrix cited D-04 for Owner access to the Core Group lens (wrong reference).", c:"New decision D-21.", w:"06 · 6a; 02 · D-21"}
      ]
    };
  }
}

return Component;
});
