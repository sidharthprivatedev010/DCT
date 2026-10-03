DCLite.register("P1-08-TrustJourney", "\n\n<div class=\"pg\">\n  <a class=\"back\" href=\"Main.dc.html\">← Pack index</a>\n  <div class=\"top\">\n    <div>\n      <div class=\"eyebrow\">Phase 1 · Deliverable 08 of 10</div>\n      <h1>Number-assurance journey</h1>\n      <p class=\"q\">A leadership KPI looks poor, but the real issue is that it cannot yet be defended. The journey shows how the product keeps \"untrusted\" apart from \"bad\", traces the cause through lineage, and returns a human-certified number to the leadership view. It uses the same synthetic world as 07 (Entity A1, Plant 02, Line L2).</p>\n    </div>\n    <div class=\"chips\">\n      <span class=\"chip nav\">DRAFT v0.1 · FOR APPROVAL</span>\n      <span class=\"chip syn\">KPI OPS-001 · ENTITY A1 · P07 · SYNTHETIC</span>\n      <span class=\"chip syn\">TOLERANCE: PLACEHOLDER</span>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>Fixed facts for this journey (SYNTHETIC)</h2>\n    <div class=\"facts\">\n      <sc-for list=\"{{facts}}\" as=\"f\" hint-placeholder-count=\"8\"><div><div class=\"id\" style=\"font-weight:500;color:#5A6576\">{{f.k}}</div><div style=\"font-weight:600;color:#0F1E3A\">{{f.v}}</div></div></sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>Trust journey (Phase 4 prototype path)</h2>\n    <div class=\"chain\">\n      <sc-for list=\"{{chain}}\" as=\"c\" hint-placeholder-count=\"8\"><a href=\"#{{c.a}}\">{{c.t}}</a><span>{{c.s}}</span></sc-for>\n    </div>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:52px 170px 150px 1fr 220px 200px 170px\"><div>Step</div><div>Route</div><div>Role</div><div>What they see</div><div>Human decision / action</div><div>AI involvement</div><div>Trust state</div></div>\n      <sc-for list=\"{{steps}}\" as=\"r\" hint-placeholder-count=\"8\">\n        <div class=\"tr\" id=\"{{r.i}}\" style=\"grid-template-columns:52px 170px 150px 1fr 220px 200px 170px\"><div class=\"id\">{{r.i}}</div><div><b style=\"color:#0F1E3A\">{{r.r}}</b></div><div>{{r.w}}</div><div>{{r.s}}</div><div>{{r.h}}</div><div><span class=\"ai\">{{r.a}}</span></div><div><span class=\"ts\">{{r.t}}</span></div></div>\n      </sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>Trust-state sequence on the leadership card</h2>\n    <p class=\"sub\">The business status on the card (Deteriorating) stays visible throughout, but carries an 'Unverified' qualifier while trust is broken. It is never shown in breach red because of a data issue.</p>\n    <div class=\"tl\">\n      <sc-for list=\"{{seq}}\" as=\"s\" hint-placeholder-count=\"5\"><div><div class=\"id\">{{s.t}}</div><div style=\"font-weight:600;color:#0F1E3A;margin:2px 0\">{{s.n}}</div><div class=\"muted\" style=\"font-size:12.5px;line-height:17px\">{{s.d}}</div></div></sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>Branches</h2>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:70px 260px 1fr\"><div>ID</div><div>Branch</div><div>Result</div></div>\n      <sc-for list=\"{{branches}}\" as=\"r\" hint-placeholder-count=\"6\">\n        <div class=\"tr\" style=\"grid-template-columns:70px 260px 1fr\"><div class=\"id\">{{r.i}}</div><div style=\"font-weight:600;color:#0F1E3A\">{{r.b}}</div><div>{{r.s}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n</div>\n", function (DCLogic) {

class Component extends DCLogic {
  renderVals() {
    const S = (i,r,w,s,h,a,t) => ({i,r,w,s,h,a,t});
    return {
      facts: [
        {k:"KPI", v:"OPS-001 Production vs plan · Entity A1 · P07 MTD"},
        {k:"Flash value (preliminary)", v:"412.6 kt (SYN)"},
        {k:"MIS value", v:"400.0 kt (SYN)"},
        {k:"Flash-to-MIS variance", v:"3.1% vs tolerance [PLACEHOLDER]"},
        {k:"Reconciliation break", v:"BRK-SYN-0071 · Material"},
        {k:"Cause (found in step T6)", v:"Mapping M-SYN-L2 for Line L2 output meter changed D-2 by Administrator role"},
        {k:"Corrected value", v:"401.2 kt (SYN)"},
        {k:"Roles", v:"Metric Owner (production) · Certifier (finance) · Analyst · Administrator · Assurance Reviewer"}
      ],
      chain: [
        {a:"T1", t:"KPI Card", s:"→"},{a:"T2", t:"KPI Detail", s:"→"},{a:"T3", t:"Definition / Source / Calculation", s:"→"},{a:"T4", t:"Lineage", s:"→"},{a:"T5", t:"Reconciliation Break", s:"→"},{a:"T6", t:"Number Assurance Workbench", s:"→"},{a:"T7", t:"Human Certification Decision", s:"→"},{a:"T8", t:"Updated Leadership View", s:""}
      ],
      steps: [
        S("T1","G-01 Portfolio Home (also O-01 drill, E-01)","Core Group Executive","OPS-001 card for Entity A1. Business status: Deteriorating (amber, arrow). Trust: 'Reconciliation break' (grey broken-link icon); the value is set in a muted style and labelled 'Unverified'. The red breach style is not used.","Open KPI detail","—","Reconciliation break"),
        S("T2","S-03 KPI Detail","Core Group Executive","Expanded card: value, unit, plan, variance, trend, forecast, provenance mix (P06 certified · P07 preliminary), last refresh, last certified (P06), confidence Low (break open).","Review the trust summary","Validation Assistant summary, labelled: 'Flash and MIS disagree beyond tolerance since D-2'","Reconciliation break"),
        S("T3","S-03 · Definition / Source / Calculation tabs","Core Group Executive","Approved definition v3 (SYN), formula, unit kt, period, source [PRODUCTION SOURCE — PLACEHOLDER], owner role Metric Owner (production), certifier role Certifier (finance), tolerance [PH].","—","—","—"),
        S("T4","S-03 · Lineage tab","Analyst / Investigator","Source → ingestion → Lake [PH] → transformation (mapping M-SYN-L2) → KPI → leadership views (O-01, G-01, G-02, E-01). The mapping node is flagged 'Changed D-2 · Administrator role · change ref [PH]'.","Open the break","—","—"),
        S("T5","S-03 · Reconciliation tab","Analyst / Investigator","BRK-SYN-0071: Source-to-Lake reconciled; Lake-to-KPI mismatch on Line L2; affected leadership KPIs listed (GOV-007 +1); age 2 days.","Assign the investigation to self; open the workbench","Explanation Assistant lists the likely cause as 'AI interpretation', separate from facts","Reconciliation break"),
        S("T6","E-08 KPI Certification Workbench","Analyst → Administrator → Metric Owner","Analyst attaches evidence (mapping diff, meter log extract [PH]) and requests correction. The Administrator applies the approved mapping fix (no certify control is visible to them). The KPI recomputes to 401.2 kt, and the variance is now within tolerance.","Request correction (Analyst) · execute change (Admin) · confirm definition unchanged (Metric Owner)","Validation Assistant re-checks cross-source consistency: 'Within tolerance; L2 meter calibration evidence missing'","Pending certification"),
        S("T7","E-08 · Certification decision panel","Certifier (finance), not the Metric Owner (D-02)","Options: Certify · Certify with exception · Request correction. Rationale is mandatory. Evidence checklist shows the calibration certificate as outstanding.","Certify with exception: 'L2 meter calibration evidence due D+5 (SYN)'","Cannot certify. The panel shows: 'AI checks are advisory'","Certified with exception"),
        S("T8","G-01 · O-01 · E-01 (updated)","All lenses with scope","Card trust badge: 'Certified with exception' (shield with an exception mark; tooltip gives the exception text and due date). BRK-SYN-0071 is closed. TRU-009 and TRU-001 update. Audit entry recorded. Assurance Reviewer gets a sample task.","Assurance Reviewer samples (G-08)","—","Certified with exception")
      ],
      seq: [
        {t:"P06 close", n:"Certified", d:"Prior period certified by the Certifier role."},
        {t:"P07 flash", n:"Pending certification", d:"Daily flash shown as preliminary; certification due at close."},
        {t:"D-2 → D0", n:"Reconciliation break", d:"Flash vs MIS beyond tolerance after the mapping change."},
        {t:"D0 + correction", n:"Pending certification", d:"Recomputed value within tolerance; awaiting human decision."},
        {t:"D0 decision", n:"Certified with exception", d:"Exception and due date visible on the card and in KPI detail."}
      ],
      branches: [
        {i:"TB-1", b:"Certifier chooses 'Request correction'", s:"State stays 'Reconciliation break'; the Analyst gets a task; the leadership card keeps 'Unverified'."},
        {i:"TB-2", b:"Certification overdue", s:"'Pending certification · Overdue [n] d' (grey + clock icon); TRU-006 increments; escalates to Core Group per D-08."},
        {i:"TB-3", b:"Source unavailable", s:"Card value replaced with the last certified value, labelled 'Last certified P06'. Trust 'Stale'. No silent substitution."},
        {i:"TB-4", b:"Value missing", s:"Card shows '—' and 'Missing', with no variance, trend or status colour."},
        {i:"TB-5", b:"Override requested instead of a fix", s:"Override control is visible only to the Certifier in scope (D-17); reason and evidence are mandatory; GOV-002 increments; Assurance review is required."},
        {i:"TB-6", b:"User outside scope opens the KPI link", s:"S-02 Restricted state: no value, name or entity is revealed; request-access action."}
      ]
    };
  }
}

return Component;
});
