DCLite.register("P1-R1-KPICatalogue", "\n\n<div class=\"pg\">\n  <a class=\"back\" href=\"Main.dc.html\">← Pack index</a>\n  <div class=\"top\">\n    <div>\n      <div class=\"eyebrow\">Phase 1 · Master reference R1</div>\n      <h1>KPI catalogue placement</h1>\n      <p class=\"q\">Every measure in the brief has one governed ID. The table shows where it is a primary card (≤6 per page) and where it lives as a drill-down, so no category is lost. An alias row points to the canonical ID, so the same measure never gets a second definition.</p>\n    </div>\n    <div class=\"chips\">\n      <span class=\"chip nav\">DRAFT v0.1 · FOR APPROVAL</span>\n      <span class=\"chip syn\">DEFINITIONS AND FORMULAS: PLACEHOLDER UNTIL APPROVED</span>\n    </div>\n  </div>\n  <div class=\"sec\" style=\"margin-top:20px\">\n    <p class=\"sub\"><b>Class:</b> ACTUAL = outcome measure (certified or preliminary) · LEADING = leading signal · PREDICTION = prediction output (always forecast style) · EXTERNAL = external signal · WORKFLOW = operating-effectiveness measure. <b>Alias</b> = same governed KPI shown under another theme.</p>\n  </div>\n  <sc-for list=\"{{themes}}\" as=\"t\" hint-placeholder-count=\"8\">\n    <div class=\"sec\">\n      <div class=\"th2\"><span class=\"id\">{{t.k}}</span><h2>{{t.n}}</h2><span class=\"muted\">Business question: {{t.q}}</span></div>\n      <div class=\"tbl\">\n        <div class=\"tr th\" style=\"grid-template-columns:96px 1fr 100px 260px 330px 220px\"><div>KPI ID</div><div>Measure</div><div>Class</div><div>Primary card on</div><div>Drill-down / diagnostic location</div><div>Alias / note</div></div>\n        <sc-for list=\"{{t.groups}}\" as=\"g\" hint-placeholder-count=\"4\">\n          <div class=\"tr grp\" style=\"grid-template-columns:1fr\"><div>{{g.n}}</div></div>\n          <sc-for list=\"{{g.rows}}\" as=\"r\" hint-placeholder-count=\"5\">\n            <div class=\"tr\" style=\"grid-template-columns:96px 1fr 100px 260px 330px 220px\"><div class=\"id\">{{r.i}}</div><div>{{r.n}}</div><div class=\"cls\">{{r.c}}</div><div>{{r.p}}</div><div class=\"muted\">{{r.d}}</div><div>{{r.a}}</div></div>\n          </sc-for>\n        </sc-for>\n      </div>\n    </div>\n  </sc-for>\n</div>\n", function (DCLogic) {

class Component extends DCLogic {
  renderVals() {
    const K = (i,n,c,p,d,a) => ({i,n,c,p:p||"—",d:d||"—",a:a||""});
    const G = (n, rows) => ({n, rows});
    return { themes: [
      { k:"T1", n:"Enterprise Health", q:"Is the enterprise healthier today than yesterday?", groups:[
        G("Financial",[
          K("FIN-001","EBITDA and variance","ACTUAL","O-01 · G-01 · G-03 · E-01 (entity)","S-03; G-03 bridge"),
          K("FIN-002","EBIT","ACTUAL","G-03","O-01 drill: Financial"),
          K("FIN-003","Revenue and variance","ACTUAL","G-01 · G-03","O-01 drill: Financial; G-02"),
          K("FIN-004","Free Cash Flow","ACTUAL","O-01 · O-03 · G-01","G-04","Canonical; aliased in T4 as CSH-005"),
          K("FIN-005","ROCE","ACTUAL","G-03","O-01 drill: Financial; G-01 drill: Financial"),
          K("FIN-006","Net Debt","ACTUAL","O-01 · G-03","O-03 drill: Liquidity"),
          K("FIN-007","Shareholder-value indicator [PLACEHOLDER]","ACTUAL","G-03","O-01 drill: Financial","Definition pending")
        ]),
        G("Operational",[
          K("OPS-001","Production vs plan","ACTUAL","O-01 · G-01 · G-05 · E-01 · E-02 · E-05","Hierarchy drill Group → Line; S-10","Canonical; reused in T5 Plant"),
          K("OPS-002","Sales vs plan","ACTUAL","E-01","O-01 drill: Operational; G-03 Volume"),
          K("OPS-003","Capacity utilization","ACTUAL","G-05 · E-02","O-01 drill: Operational","Canonical; reused in T5 Plant")
        ]),
        G("Strategic",[
          K("STR-001","Capex progress","ACTUAL","O-01 (as CPX-004)","O-04","Alias → CPX-004 Physical progress"),
          K("STR-002","Transformation progress","ACTUAL","—","O-04 drill: Programmes; G-06")
        ]),
        G("Risk",[
          K("RSK-001","Open critical alerts","WORKFLOW","O-01 (as EFF-002)","—","Alias → EFF-002"),
          K("RSK-002","EHS severity events","ACTUAL","—","O-01 drill: Risk; O-05 drill: EHS","Alias → EHS-002"),
          K("RSK-003","Regulatory breaches","ACTUAL","—","O-01 drill: Risk; O-05; G-07","Related: REG-005, SIG-021")
        ])
      ]},
      { k:"T2", n:"Number Assurance and Certification", q:"Can leadership defend the number?", groups:[
        G("Per-KPI trust attributes (on every KPI, via S-03): approved definition · source placeholder · calculation · unit · period · owner role · certifier role · certification status · variance · confidence · last refresh · last certified · lineage · tolerance · evidence · related break or finding",[]),
        G("Data trust",[
          K("TRU-001","Certified KPI percentage","ACTUAL","G-01 · G-08","Header trust summary (all lenses)"),
          K("TRU-002","Uncertified KPI count","ACTUAL","G-08","Header trust summary"),
          K("TRU-003","Variance against Board number [PLACEHOLDER]","ACTUAL","—","G-08 drill: Reconciliation","D-10"),
          K("TRU-004","Open reconciliation breaks","ACTUAL","E-08","G-08 drill: Reconciliation"),
          K("TRU-005","KPI certification coverage","ACTUAL","—","G-08 drill: Reconciliation"),
          K("TRU-006","Overdue certifications","ACTUAL","G-08 · E-08","—"),
          K("TRU-007","Material reconciliation breaks","ACTUAL","G-08","S-03 Reconciliation tab"),
          K("TRU-008","Source-to-Lake reconciliation rate","ACTUAL","E-08","G-08 drill","'Lake' = data-platform placeholder"),
          K("TRU-009","Flash-to-MIS reconciliation rate","ACTUAL","—","G-08 drill: Reconciliation; E-08"),
          K("TRU-010","Flash-to-Close variance","ACTUAL","G-08","—")
        ]),
        G("Governance",[
          K("GOV-001","Ageing certification approvals","ACTUAL","—","G-08 drill: Governance"),
          K("GOV-002","Override count (KPI overrides)","ACTUAL","E-08","G-08 drill: Governance","Distinct from CTL-010 (operational overrides)"),
          K("GOV-003","Recurring data-quality issues","ACTUAL","—","G-08 drill: Governance"),
          K("GOV-004","Open audit findings","ACTUAL","G-07","G-08 drill: Governance","Canonical; aliased in T7 as CTL-001"),
          K("GOV-005","Overdue assurance actions","ACTUAL","—","G-08 drill: Governance"),
          K("GOV-006","Repeat findings","ACTUAL","—","G-08 drill: Governance"),
          K("GOV-007","Leadership KPIs affected by findings","ACTUAL","G-08","Header trust summary (Owner)"),
          K("GOV-008","Evidence completeness rate","ACTUAL","E-08","G-08 drill; S-08"),
          K("GOV-009","Average finding-closure time","ACTUAL","—","G-08 drill: Governance")
        ])
      ]},
      { k:"T3", n:"No-Surprises Intelligence", q:"What can materially hurt the business before period end?", groups:[
        G("Leading signals: Operations",[
          K("SIG-001","Plant downtime","LEADING","—","S-12; E-03","Alias → REL-003"),
          K("SIG-002","Production yield","LEADING","—","S-12; E-02","Alias → PLT-005"),
          K("SIG-003","Recovery percentage","LEADING","—","S-12; E-02","Alias → PLT-004")
        ]),
        G("Leading signals: Finance and exposure",[
          K("SIG-004","Collections slippage","LEADING","—","S-12; E-05; G-04"),
          K("SIG-005","Payment delays","LEADING","—","S-12; E-05; G-04"),
          K("SIG-006","Cash burn","LEADING","—","S-12; O-03 drill"),
          K("SIG-007","Production at risk","LEADING","E-05 · S-10","S-12"),
          K("SIG-008","Critical plant-state alerts","LEADING","E-03","S-12"),
          K("SIG-009","Critical-material shortage risk","LEADING","E-01 · S-10","S-12; E-04","Scenario trigger"),
          K("SIG-010","Single-source supply risk","LEADING","—","S-12; E-04","Scenario trigger"),
          K("SIG-011","Capex value at risk","LEADING","O-04 · E-06","S-12; G-06")
        ]),
        G("Leading signals: Commercial",[
          K("SIG-012","Dispatch delays","LEADING","E-05 · S-11","S-12"),
          K("SIG-013","Pricing pressure","LEADING","—","S-12; G-03 drill: Price")
        ]),
        G("External signals",[
          K("SIG-014","Commodity-price movement","EXTERNAL","—","S-12; G-03 drill: External"),
          K("SIG-015","FX exposure","EXTERNAL","—","S-12; G-03 drill: External","Alias → TRS-001"),
          K("SIG-016","Freight exposure","EXTERNAL","—","S-12; G-03 drill: External"),
          K("SIG-017","Fuel exposure","EXTERNAL","—","S-12; G-03 drill: External","Related: CST-003"),
          K("SIG-018","Power-cost exposure","EXTERNAL","—","S-12; G-03 drill: External")
        ]),
        G("Leading signals: Risk and compliance",[
          K("SIG-019","Regulatory deadlines","LEADING","—","S-12; E-07","Alias → REG-002"),
          K("SIG-020","Licence expiry","LEADING","—","S-12; E-07","Alias → REG-003"),
          K("SIG-021","Environmental violations","LEADING","—","S-12; E-07; O-05 drill: EHS")
        ]),
        G("Prediction outputs (forecast style, never shown as actuals)",[
          K("PRD-001","Days to breach","PREDICTION","S-12 · S-10","O-01 forecast panel; every alert header"),
          K("PRD-002","Probability of plan miss","PREDICTION","S-12","O-01 forecast panel"),
          K("PRD-003","Projected EBITDA gap","PREDICTION","S-12","O-01 forecast panel; G-03"),
          K("PRD-004","Projected liquidity gap","PREDICTION","S-12","O-03 forecast panel"),
          K("PRD-005","Forecast covenant breach","PREDICTION","S-12","O-03; G-04 drill: Liquidity")
        ])
      ]},
      { k:"T4", n:"Cash and Liquidity Command Center", q:"Can cash move where it needs to move?", groups:[
        G("Working capital",[
          K("WCP-001","DSO","ACTUAL","G-04 · E-05 · S-11","O-03 drill: Working capital"),
          K("WCP-002","DPO","ACTUAL","G-04","O-03 drill: Working capital"),
          K("WCP-003","Inventory days","ACTUAL","G-04","O-03 drill: Working capital"),
          K("WCP-004","Net working capital","ACTUAL","O-03 · G-04","—"),
          K("WCP-005","Working-capital movement","ACTUAL","—","G-04 bridge; G-04 drill: Cash"),
          K("WCP-006","Working-capital days","ACTUAL","—","G-04 drill: Cash")
        ]),
        G("Cash",[
          K("CSH-001","Cash position","ACTUAL","O-03","G-04"),
          K("CSH-002","Cash released","ACTUAL","—","G-04 drill: Cash; O-03 drill"),
          K("CSH-003","Daily collections","ACTUAL","E-01 · E-05 · S-11","G-04 drill: Cash"),
          K("CSH-004","Cash-conversion cycle","ACTUAL","G-04","O-03 drill: Working capital"),
          K("CSH-005","Free Cash Flow","ACTUAL","—","—","Alias → FIN-004"),
          K("CSH-006","Cash-upstream exposure","ACTUAL","O-03 · G-04 · E-05 · S-11","—","Entity sees own obligation only (C-05)")
        ]),
        G("Liquidity",[
          K("LIQ-001","Liquidity runway","ACTUAL","O-03","G-04 drill: Liquidity"),
          K("LIQ-002","Covenant headroom","ACTUAL","O-03","G-04 drill: Liquidity","Covenant terms: PLACEHOLDER"),
          K("LIQ-003","Debt-maturity exposure","ACTUAL","—","O-03 drill: Liquidity; G-04"),
          K("LIQ-004","Financing exposure","ACTUAL","—","O-03 drill: Liquidity; G-04")
        ]),
        G("Treasury",[
          K("TRS-001","FX exposure","ACTUAL","—","O-03 drill: Treasury; G-04 drill","Canonical; aliased as SIG-015"),
          K("TRS-002","Hedging effectiveness","ACTUAL","—","O-03 drill: Treasury; G-04 drill")
        ]),
        G("Lifecycle (E-05, S-11, O-03 summary): Production → Dispatch → Billing → Collection → Cash → Upstreaming. Each stage shows actual, plan, forecast, leakage, constraint, trust state and owner role.",[])
      ]},
      { k:"T5", n:"Operations and Asset Performance", q:"Are assets producing what they promised?", groups:[
        G("Plant (hierarchy Group → Business → Entity → Plant → Line)",[
          K("OPS-001","Production vs plan","ACTUAL","see T1","—","Alias row, canonical in T1"),
          K("PLT-001","Asset utilization","ACTUAL","E-02","G-05 drill"),
          K("PLT-002","OEE","ACTUAL","G-05 · E-02","—"),
          K("OPS-003","Capacity utilization","ACTUAL","see T1","—","Alias row, canonical in T1"),
          K("PLT-004","Recovery percentage","ACTUAL","E-02","S-12 (as SIG-003)","C-07"),
          K("PLT-005","Yield (or recovery)","ACTUAL","E-02","S-12 (as SIG-002)","C-07")
        ]),
        G("Reliability",[
          K("REL-001","MTBF","ACTUAL","E-03","G-05 drill: Reliability"),
          K("REL-002","Mean Time to Repair","ACTUAL","E-03","G-05 drill: Reliability"),
          K("REL-003","Unplanned downtime","ACTUAL","G-05 · E-03","S-12 (as SIG-001)"),
          K("REL-004","Production loss from downtime","ACTUAL","E-03","G-05 drill"),
          K("REL-005","Preventive-maintenance compliance [ASSUMED]","ACTUAL","E-03","G-05 drill","C-09: brief truncated")
        ]),
        G("Cost",[
          K("CST-001","Cost per tonne / unit","ACTUAL","G-05","E-02 drill: Cost"),
          K("CST-002","Variable cost","ACTUAL","—","E-02 drill: Cost; G-03 drill: Cost"),
          K("CST-003","Fuel cost","ACTUAL","—","E-02 drill: Cost","Related: SIG-017")
        ]),
        G("Sustainability (canonical here; reused in T7)",[
          K("SUS-001","Water usage","ACTUAL","—","E-02 drill: Sustainability; G-05 drill; O-05 drill; E-07"),
          K("SUS-002","Emissions","ACTUAL","—","E-02 drill: Sustainability; G-05 drill; O-05 drill; E-07"),
          K("SUS-003","Energy intensity","ACTUAL","G-05","E-02 drill: Sustainability; O-05 drill; E-07")
        ]),
        G("Operational supplier performance",[
          K("SUP-001","Supplier on-time delivery","ACTUAL","E-04","—"),
          K("SUP-002","Supplier fill rate","ACTUAL","E-04","—"),
          K("SUP-003","Supplier quality-rejection rate","ACTUAL","E-04","—"),
          K("SUP-004","Supplier lead-time variance","ACTUAL","E-04","—","Scenario: S-07"),
          K("SUP-005","Critical supplier exposure","ACTUAL","E-04","G-05 drill: Supply","Scenario: S-07"),
          K("SUP-006","Contractor slippage","ACTUAL","E-04 · E-06","G-06 drill")
        ])
      ]},
      { k:"T6", n:"Capex and Strategic Initiatives", q:"Are we spending money and creating value?", groups:[
        G("Capex (chain: Approved → Committed → Spent → Physical Progress → Benefit Realized)",[
          K("CPX-001","Approved budget","ACTUAL","O-04 · G-06","—"),
          K("CPX-002","Committed Capex","ACTUAL","O-04 · G-06 · E-06","—"),
          K("CPX-003","Actual spend","ACTUAL","O-04 · G-06 · E-06","—","Never shown without CPX-004"),
          K("CPX-004","Physical progress","ACTUAL","O-01 · O-04 · G-06 · E-06","—","Canonical for STR-001")
        ]),
        G("Programmes",[
          K("PRG-001","Initiative status","ACTUAL","—","O-04 drill: Programmes; G-06 drill"),
          K("PRG-002","Benefits realization","ACTUAL","O-04 · G-06","—"),
          K("PRG-003","Delayed projects","ACTUAL","G-06 · E-06","O-04")
        ]),
        G("Value",[
          K("VAL-001","EBITDA benefit","ACTUAL","—","O-04 drill: Value; G-06 drill: Value"),
          K("VAL-002","Cash benefit","ACTUAL","—","O-04 drill: Value; G-06 drill: Value"),
          K("VAL-003","Cost savings delivered","ACTUAL","—","O-04 drill: Value; G-06 drill: Value")
        ])
      ]},
      { k:"T7", n:"Risk, Compliance and EHS", q:"What can stop the business tomorrow?", groups:[
        G("Regulatory",[
          K("REG-001","Pending filings","ACTUAL","—","E-07 drill: Regulatory; G-07 drill"),
          K("REG-002","Regulatory deadlines","ACTUAL","—","E-07; S-12 (as SIG-019)"),
          K("REG-003","Licence expirations","ACTUAL","—","E-07; S-12 (as SIG-020)"),
          K("REG-004","Regulatory obligations due","ACTUAL","E-07","G-07 drill"),
          K("REG-005","Overdue regulatory obligations","ACTUAL","O-05 · G-07 · E-07","—"),
          K("REG-006","Licence or permit expiry clock","ACTUAL","O-05 · E-07","—"),
          K("REG-007","Open regulatory actions","ACTUAL","—","E-07 drill; G-07 drill"),
          K("REG-008","Overdue compliance actions","ACTUAL","—","E-07 drill; G-07 drill"),
          K("REG-009","Disclosure-clock status","ACTUAL","O-05","S-05 header","No legal rule modelled (D-07)")
        ]),
        G("EHS",[
          K("EHS-001","TRIR","ACTUAL","O-05","G-07 drill: EHS; E-07 drill"),
          K("EHS-002","Severity incidents","ACTUAL","—","O-05 drill: EHS; G-07 drill","Canonical for RSK-002"),
          K("EHS-003","Near misses","ACTUAL","—","E-07 drill: EHS"),
          K("EHS-004","Critical safety incidents","ACTUAL","O-05 · G-07","—"),
          K("EHS-005","Environmental excursions","ACTUAL","—","E-07 drill; O-05 drill: EHS"),
          K("EHS-006","Open EHS corrective actions","ACTUAL","E-07","G-07 drill"),
          K("EHS-007","Overdue EHS actions","ACTUAL","E-07","G-07 drill; G-09"),
          K("EHS-008","EHS escalation-clock status","WORKFLOW","—","S-05; G-09; E-07 drill"),
          K("EHS-009","EHS investigation completion","ACTUAL","E-07","G-07 drill")
        ]),
        G("Compliance and controls",[
          K("CTL-001","Open audit findings","ACTUAL","—","—","Alias → GOV-004"),
          K("CTL-002","Control failures","ACTUAL","—","G-07 drill: Controls"),
          K("CTL-003","Assurance reviews","ACTUAL","—","G-08 drill: Governance; G-07 drill"),
          K("CTL-004","High-severity control failures","ACTUAL","O-05 · G-07","—"),
          K("CTL-005","Policy-exception count","ACTUAL","—","G-07 drill: Controls"),
          K("CTL-006","Unauthorized-vendor usage","ACTUAL","—","G-07 drill: Controls; E-04"),
          K("CTL-007","Segregation-of-duties exceptions","ACTUAL","—","G-07 drill: Controls"),
          K("CTL-008","Unauthorized-access events","ACTUAL","—","G-07 drill: Controls"),
          K("CTL-009","Data-sharing exceptions","ACTUAL","—","G-07 drill: Controls"),
          K("CTL-010","Manual overrides (operational / system)","ACTUAL","—","G-07 drill: Controls; G-08 drill","Distinct from GOV-002")
        ]),
        G("Contracts",[
          K("CON-001","Contracts expiring","ACTUAL","G-07","E-04"),
          K("CON-002","Contract-compliance rate","ACTUAL","—","G-07 drill: Contracts; E-04"),
          K("CON-003","Supplier EHS non-compliance","ACTUAL","—","E-04; E-07 drill: Contracts")
        ]),
        G("Sustainability: alias rows → SUS-001 Water usage, SUS-002 Emissions, SUS-003 Energy intensity (shown in O-05, G-07 and E-07 drill tabs with risk context)",[])
      ]},
      { k:"T8", n:"Decision, Action, Escalation and AI", q:"Who owns the response, what must happen next, and is the issue moving to closure?", groups:[
        G("Operating effectiveness",[
          K("EFF-001","Alert-resolution time","WORKFLOW","—","G-09 drill"),
          K("EFF-002","Open critical alerts","WORKFLOW","O-01 · G-01 · G-07 · G-09","—","Canonical for RSK-001"),
          K("EFF-003","Closed escalations","WORKFLOW","—","G-09 drill"),
          K("EFF-004","Repeat issues","WORKFLOW","—","G-09 drill"),
          K("EFF-005","Root causes eliminated","WORKFLOW","—","G-09 drill"),
          K("EFF-006","Alerts without accepted owners","WORKFLOW","G-09","E-09 counter"),
          K("EFF-007","Overdue actions","WORKFLOW","G-09 · E-01 · E-09","—"),
          K("EFF-008","Average resolution time","WORKFLOW","G-09","—")
        ]),
        G("AI assistant functions → surfaces: Validation (S-03, E-08, E-10 evidence check) · Explanation (S-07 from every KPI and alert) · Executive Briefing (O-07, G-10) · Escalation Routing (S-04 draft owner, due date, path, decision required). None of them can approve.",[])
      ]}
    ]};
  }
}

return Component;
});
