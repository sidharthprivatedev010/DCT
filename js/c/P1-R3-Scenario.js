DCLite.register("P1-R3-Scenario", "\n\n<div class=\"pg\">\n  <a class=\"back\" href=\"Main.dc.html\">← Pack index</a>\n  <div class=\"top\">\n    <div>\n      <div class=\"eyebrow\">Phase 1 · Master reference R3</div>\n      <h1>Scenario bible, materiality model and glossary</h1>\n      <p class=\"q\">The single source for every synthetic fact, ID, time and value used in any later phase, plus the placeholder materiality model and the controlled vocabulary. If a screen needs a fact that is not here, add it here first and label it.</p>\n    </div>\n    <div class=\"chips\">\n      <span class=\"chip nav\">DRAFT v0.1 · FOR APPROVAL</span>\n      <span class=\"chip syn\">EVERYTHING ON THIS BOARD IS SYNTHETIC OR PLACEHOLDER</span>\n    </div>\n  </div>\n\n  <div class=\"sec two\">\n    <div>\n      <h2>Synthetic hierarchy</h2>\n      <p class=\"sub\">Neutral labels only. No industry, geography or client branding is invented.</p>\n      <div class=\"tree\">Group (SYNTHETIC)\n├─ Business A\n│  ├─ Entity A1  ← scenario entity\n│  │  ├─ Plant 01\n│  │  ├─ Plant 02  ← affected plant\n│  │  │  ├─ Line L1\n│  │  │  ├─ Line L2  ← most affected line\n│  │  │  └─ Line L3\n│  │  └─ Plant 03  ← Option B donor plant\n│  └─ Entity A2\n├─ Business B\n│  ├─ Entity B1\n│  └─ Entity B2\n└─ Business C\n   ├─ Entity C1\n   └─ Entity C2</div>\n    </div>\n    <div>\n      <h2>Scenario facts (SYNTHETIC)</h2>\n      <p class=\"sub\">Currency: CU m = synthetic currency units, millions. Times are relative to D0 = the Owner's morning.</p>\n      <div class=\"tbl\">\n        <div class=\"tr th\" style=\"grid-template-columns:230px 1fr;min-width:0\"><div>Fact</div><div>Value</div></div>\n        <sc-for list=\"{{facts}}\" as=\"f\" hint-placeholder-count=\"14\">\n          <div class=\"tr\" style=\"grid-template-columns:230px 1fr;min-width:0\"><div class=\"muted\">{{f.k}}</div><div style=\"font-weight:500\">{{f.v}}</div></div>\n        </sc-for>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>Timeline (SYNTHETIC)</h2>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:120px 1fr 260px 160px\"><div>Time</div><div>Event</div><div>Object / ID</div><div>Visible to</div></div>\n      <sc-for list=\"{{timeline}}\" as=\"r\" hint-placeholder-count=\"14\">\n        <div class=\"tr\" style=\"grid-template-columns:120px 1fr 260px 160px\"><div class=\"id\">{{r.t}}</div><div>{{r.e}}</div><div class=\"id\" style=\"font-weight:500\">{{r.o}}</div><div>{{r.v}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>ID registry</h2>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:150px 140px 1fr\"><div>Pattern</div><div>Example</div><div>Meaning</div></div>\n      <sc-for list=\"{{ids}}\" as=\"r\" hint-placeholder-count=\"12\">\n        <div class=\"tr\" style=\"grid-template-columns:150px 140px 1fr\"><div class=\"id\">{{r.p}}</div><div class=\"id\" style=\"font-weight:500\">{{r.e}}</div><div>{{r.m}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>Materiality model (PLACEHOLDER: pending D-03)</h2>\n    <p class=\"sub\">Dimensions were reconstructed from a garbled section of the brief (C-10). Scoring logic, weights and thresholds are placeholders and must show a 'Placeholder, pending approval' label wherever they appear. The UI always shows which dimensions drove the level.</p>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:240px 1fr 200px 180px\"><div>Dimension</div><div>Measures used (from R1)</div><div>Scenario rating (SYN)</div><div>Source of dimension</div></div>\n      <sc-for list=\"{{dims}}\" as=\"r\" hint-placeholder-count=\"7\">\n        <div class=\"tr\" style=\"grid-template-columns:240px 1fr 200px 180px\"><div style=\"font-weight:600;color:#0F1E3A\">{{r.d}}</div><div>{{r.m}}</div><div class=\"id\" style=\"font-weight:500\">{{r.s}}</div><div class=\"muted\">{{r.o}}</div></div>\n      </sc-for>\n    </div>\n    <div class=\"tbl\" style=\"margin-top:14px\">\n      <div class=\"tr th\" style=\"grid-template-columns:140px 1fr 1fr\"><div>Level</div><div>Rule (placeholder)</div><div>Visibility consequence</div></div>\n      <sc-for list=\"{{levels}}\" as=\"r\" hint-placeholder-count=\"4\">\n        <div class=\"tr\" style=\"grid-template-columns:140px 1fr 1fr\"><div class=\"id\">{{r.l}}</div><div>{{r.r}}</div><div>{{r.v}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>Labelling rules</h2>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:220px 1fr\"><div>Label</div><div>Use</div></div>\n      <sc-for list=\"{{labels}}\" as=\"r\" hint-placeholder-count=\"4\">\n        <div class=\"tr\" style=\"grid-template-columns:220px 1fr\"><div class=\"id\">{{r.l}}</div><div>{{r.u}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>Glossary (controlled vocabulary)</h2>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:220px 1fr\"><div>Term</div><div>Definition in this product</div></div>\n      <sc-for list=\"{{glossary}}\" as=\"r\" hint-placeholder-count=\"24\">\n        <div class=\"tr\" style=\"grid-template-columns:220px 1fr\"><div style=\"font-weight:600;color:#0F1E3A\">{{r.t}}</div><div>{{r.d}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n</div>\n", function (DCLogic) {

class Component extends DCLogic {
  renderVals() {
    return {
      facts: [
        {k:"Supplier", v:"Supplier S-07 (single source for RM-1)"},
        {k:"Material", v:"Raw material RM-1 (critical)"},
        {k:"Delivery slip", v:"6 days"},
        {k:"Plant 02 material cover", v:"9.0 d → 3.5 d"},
        {k:"Replenishment lead time", v:"9 d"},
        {k:"Days to breach (PRD-001)", v:"4"},
        {k:"Projected production shortfall", v:"18.4 kt"},
        {k:"Dispatch delay", v:"2–4 days"},
        {k:"Billing deferral", v:"CU 31 m"},
        {k:"Cash-upstream exposure", v:"CU 26 m"},
        {k:"Projected EBITDA gap (PRD-003)", v:"CU 9.2 m"},
        {k:"Probability of plan miss (PRD-002)", v:"64%"},
        {k:"Entity A1 share of projected gap", v:"82%"},
        {k:"Confidence", v:"Medium (inventory figure preliminary)"},
        {k:"Options (SCN-SYN-0031)", v:"A alternate supplier S-12 at a premium · B reallocate RM-1 from Plant 03 · C accept the shortfall"},
        {k:"Decision (DEC-SYN-0219)", v:"A + B approved by Owner role (Critical, above [DoA LIMIT — PH])"}
      ],
      timeline: [
        {t:"D-2", e:"Administrator role changes mapping M-SYN-L2 (Line L2 meter); KPI goes to Pending certification", o:"M-SYN-L2", v:"Entity, Assurance"},
        {t:"D-1 21:40", e:"Supplier delivery notice slips; shortage-risk signal elevated", o:"SIG-009, SIG-010", v:"Entity"},
        {t:"D-1 22:05", e:"Alert created and validated", o:"ALT-SYN-2041", v:"Entity; Core Group watcher"},
        {t:"D-1 22:30", e:"AI routing draft; acceptance clock starts", o:"ALT-SYN-2041", v:"Entity"},
        {t:"D-1 23:15", e:"Entity Executive accepts ownership; case opens", o:"CASE-SYN-0388", v:"Entity; Core Group watcher"},
        {t:"D0 05:10", e:"Forecast refresh; materiality crosses Owner threshold [PH] → Critical", o:"INC-SYN-0142", v:"Entity, Core Group, Owner"},
        {t:"D0 06:00", e:"War room opened by Core Group Executive (moved from 08:00 in Phase 2 so the Owner sees it at 06:30)", o:"WR-SYN-0142", v:"Members, Owner (view)"},
        {t:"D0 06:30", e:"Daily Executive Brief released", o:"O-07", v:"Owner"},
        {t:"D0 06:30–06:41", e:"Owner primary journey B1–B8", o:"—", v:"Owner"},
        {t:"D0 10:20", e:"Break resolved; OPS-001 certified with exception (trust journey)", o:"BRK-SYN-0071", v:"All in scope"},
        {t:"D0 11:00", e:"Owner decision on alternate sourcing", o:"DEC-SYN-0219", v:"All in scope"},
        {t:"D+1", e:"Logistics expedite blocked → escalated L1; cleared D+2", o:"ACT-SYN-1108", v:"Entity, Core Group"},
        {t:"D+6", e:"Recovery monitoring begins", o:"INC-SYN-0142", v:"All in scope"},
        {t:"D+9", e:"Closure requested and approved; preventive dual-sourcing initiative proposed", o:"ACT-SYN-1107..1110 · INC-SYN-0142", v:"All in scope; Owner informed"}
      ],
      ids: [
        {p:"KPI domain-nnn", e:"OPS-001", m:"Governed KPI (R1)"},
        {p:"SIG-nnn / PRD-nnn", e:"SIG-009", m:"Leading signal / prediction output"},
        {p:"ALT-SYN-nnnn", e:"ALT-SYN-2041", m:"Alert"},
        {p:"CASE-SYN-nnnn", e:"CASE-SYN-0388", m:"Case (after ownership acceptance)"},
        {p:"INC-SYN-nnnn", e:"INC-SYN-0142", m:"Incident (case ≥ High with commander)"},
        {p:"WR-SYN-nnnn", e:"WR-SYN-0142", m:"War room of an incident"},
        {p:"ACT-SYN-nnnn", e:"ACT-SYN-1107", m:"Action"},
        {p:"DEC-SYN-nnnn", e:"DEC-SYN-0219", m:"Decision record"},
        {p:"SCN-SYN-nnnn", e:"SCN-SYN-0031", m:"Scenario"},
        {p:"BRK-SYN-nnnn", e:"BRK-SYN-0071", m:"Reconciliation break"},
        {p:"EVD-SYN-nnnn", e:"EVD-SYN-0510", m:"Evidence item"},
        {p:"M-SYN-xx", e:"M-SYN-L2", m:"Approved mapping"}
      ],
      dims: [
        {d:"Financial impact", m:"FIN-001, PRD-003", s:"Medium", o:"Brief (partial)"},
        {d:"Liquidity / cash impact", m:"CSH-006, PRD-004, WCP-001", s:"High", o:"Brief ('Liquidity…', garbled)"},
        {d:"Production exposure", m:"OPS-001, SIG-007, PRD-001", s:"High", o:"Brief"},
        {d:"Regulatory impact", m:"REG-005, REG-009", s:"Low", o:"Brief"},
        {d:"Reputation impact", m:"Qualitative [PH]", s:"Low", o:"Brief ('Reputatior', garbled)"},
        {d:"EHS impact", m:"EHS-004, EHS-005", s:"None", o:"Design assumption"},
        {d:"Time-to-breach modifier", m:"PRD-001", s:"Raises by one level ≤ [PH] d", o:"Design assumption"}
      ],
      levels: [
        {l:"Critical", r:"Any dimension ≥ [CRIT THRESHOLD — PH], or composite ≥ [PH]", v:"Pushed to Owner (O-01 banner, O-02, O-07); war room eligible; Core Group approves closure"},
        {l:"High", r:"Composite ≥ [HIGH THRESHOLD — PH]", v:"Core Group pushed; Owner pull only (D-04); incident eligible"},
        {l:"Medium", r:"Composite ≥ [MED THRESHOLD — PH]", v:"Entity owns; Core Group sees in comparisons; Entity Executive approves closure"},
        {l:"Low", r:"Below Medium", v:"Entity work queue only"}
      ],
      labels: [
        {l:"SYNTHETIC", u:"Every demonstration name, date, time, value, forecast and ID."},
        {l:"PLACEHOLDER / [PH]", u:"Thresholds, authority limits, source systems, schedules, covenant terms, legal rules: anything that needs a client decision."},
        {l:"Design assumption", u:"Any detail the brief does not support (A-xx), shown where it affects a screen."},
        {l:"AI-generated · not approved", u:"Every AI-produced text, recommendation or draft until a human accepts it."}
      ],
      glossary: [
        {t:"Lens", d:"A depth of view (Owner, Core Group, Entity). It never grants scope."},
        {t:"Scope", d:"The hierarchy nodes and domains a user is entitled to see."},
        {t:"Business status", d:"How a measure performs: On track, Improving, Deteriorating, Breached, Forecast breach."},
        {t:"Trust status", d:"Whether a number is defensible: Certified, Certified with exception, Pending certification, Reconciliation break, Stale, Missing, Restricted."},
        {t:"Provenance", d:"Class of a value: certified actual, preliminary actual, forecast, scenario, external signal, AI-generated."},
        {t:"Leading signal", d:"An early indicator that may predict an outcome; not itself an outcome."},
        {t:"Prediction output", d:"A modelled forward value (days to breach, probability, projected gap). Always shown in forecast style."},
        {t:"Alert", d:"A system-detected, validated deviation or forecast breach."},
        {t:"Case", d:"An alert with an accepted human owner, holding actions and evidence."},
        {t:"Incident", d:"A case at materiality ≥ High with an Incident Commander."},
        {t:"War room", d:"Collaboration mode of an incident."},
        {t:"Materiality", d:"Placeholder-scored significance (Critical, High, Medium, Low) with visible drivers."},
        {t:"Owner threshold", d:"The materiality level at which an issue is pushed to the Owner [PH]."},
        {t:"Accountability strip", d:"Severity, exposure, owner role, due date, escalation clock, evidence state, next action."},
        {t:"Escalation clock", d:"Rule-based time remaining before automatic escalation to the next level."},
        {t:"Disclosure clock", d:"Time and state of disclosure review, where applicable [PH]; no legal rule is modelled."},
        {t:"Certification", d:"A human Certifier's decision that a KPI value for a period is defensible."},
        {t:"Certified with exception", d:"Certified, with a recorded limitation and a due date for its resolution."},
        {t:"Reconciliation break", d:"A variance between two reconciled points that exceeds tolerance [PH]."},
        {t:"Lineage", d:"The path from source placeholder to KPI to leadership views."},
        {t:"Evidence", d:"An immutable file, link or attestation supporting a fact, action or closure."},
        {t:"Closure", d:"Human-approved end of a case once its criteria are met; reopenable under control."},
        {t:"Decision", d:"A recorded human choice with authority role, rationale and options considered."},
        {t:"Scenario", d:"A labelled what-if with explicit assumptions; never the base forecast."}
      ]
    };
  }
}

return Component;
});
