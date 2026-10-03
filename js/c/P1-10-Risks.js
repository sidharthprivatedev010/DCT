DCLite.register("P1-10-Risks", "\n\n<div class=\"pg\">\n  <a class=\"back\" href=\"Main.dc.html\">← Pack index</a>\n  <div class=\"top\">\n    <div>\n      <div class=\"eyebrow\">Phase 1 · Deliverable 10 of 10</div>\n      <h1>Risks of generating the application before these decisions are approved</h1>\n      <p class=\"q\">What goes wrong if Phase 2 starts on unapproved architecture, and the decision or gate that removes each risk. Likelihood and impact are design-team judgements, not measured values.</p>\n    </div>\n    <div class=\"chips\">\n      <span class=\"chip nav\">DRAFT v0.1 · FOR APPROVAL</span>\n    </div>\n  </div>\n  <div class=\"sec\">\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:64px 230px 1fr 90px 90px 320px\"><div>ID</div><div>Risk</div><div>If we build now</div><div>Likelihood</div><div>Impact</div><div>Mitigation / gate</div></div>\n      <sc-for list=\"{{risks}}\" as=\"r\" hint-placeholder-count=\"14\">\n        <div class=\"tr\" style=\"grid-template-columns:64px 230px 1fr 90px 90px 320px\"><div class=\"id\">{{r.i}}</div><div style=\"font-weight:600;color:#0F1E3A\">{{r.r}}</div><div>{{r.c}}</div><div class=\"lvl\">{{r.l}}</div><div class=\"lvl\">{{r.x}}</div><div class=\"muted\">{{r.m}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n</div>\n", function (DCLogic) {

class Component extends DCLogic {
  renderVals() {
    const R = (i,r,c,l,x,m) => ({i,r,c,l,x,m});
    return { risks: [
      R("RK-01","Materiality model unapproved","Owner visibility, red usage, escalation and the six-card status strip are all driven by a model nobody approved. Screens imply thresholds that look real.","High","Critical","Gate D-03: approve the dimension list; keep weights and thresholds as labelled placeholders"),
      R("RK-02","Object model ambiguity (alert / case / incident / war room)","Template E diverges per route; states, IDs and counts disagree (e.g., EFF-002 counted differently on O-01 and G-09).","High","High","Gate D-01"),
      R("RK-03","Authority not defined","Buttons imply authority that does not exist (who certifies, who closes, who accepts risk). This creates audit exposure and later rework of every T-D/T-E screen.","High","Critical","Gates D-02, D-06; permission matrix 06 sign-off"),
      R("RK-04","Trust and performance conflated","Executives read an untrusted number as a bad result, or a bad result as a data glitch. The core TRUST promise fails.","Medium","Critical","Approve the two-axis card model (09 · 9a/9b) before Phase 2"),
      R("RK-05","Least-privilege leakage","Restricted counts, search suggestions, AI answers, notifications or aggregates reveal other entities' data.","Medium","Critical","Gate D-12; GR-06 and GR-09 applied to search, AI and notifications"),
      R("RK-06","AI overreach in the UI","AI-generated text sits beside approval buttons and reads as an approval; recommended options look pre-selected.","Medium","High","GR-01; AI components AI-02 and AI-04 mandatory; audit check in Phase 5"),
      R("RK-07","KPI wall / catalogue creep","Without a fixed six-card selection, each page grows into a chart catalogue and the exception-led design is lost.","High","High","Approve the per-page card selections in 05 and the placement in R1"),
      R("RK-08","Duplicate KPI definitions","FCF, FX, sustainability and production show different values on different pages, which destroys trust.","Medium","High","Canonical IDs and aliases (R1, C-06, C-08)"),
      R("RK-09","Template drift","41 bespoke layouts; inconsistent navigation; higher cost; harder audit.","High","Medium","Templates A–F fixed (04); route → template map approved (05)"),
      R("RK-10","Truth and confidentiality breach","Invented names, values, sources, thresholds or legal rules are mistaken for client facts or commitments.","Medium","Critical","Synthetic or placeholder labelling rules (R3); Phase 5 truth audit"),
      R("RK-11","Misread truncated requirements","Garbled sections (materiality, 'Preventive-', Theme 2 tail) are built on guesses.","High","Medium","Confirm C-09, C-10, C-11"),
      R("RK-12","Scenario sprawl","Different screens invent different crises, so the journeys cannot be followed end to end.","Medium","Medium","Scenario bible R3 is the single source; no unrelated crises"),
      R("RK-13","Accessibility retrofitted","Status by colour alone, small targets and focus order are fixed late at high cost.","Medium","High","State model with icon + label (09); 44 px targets; focus order defined in Phase 2"),
      R("RK-14","Unapproved added routes","S-09 to S-13 are built and then removed, which breaks the primary journey (B4 to B6) and Theme 3 coverage.","Medium","High","Gate D-20")
    ]};
  }
}

return Component;
});
