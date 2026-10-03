DCLite.register("P1-03-Personas", "\n\n<div class=\"pg\">\n  <a class=\"back\" href=\"Main.dc.html\">← Pack index</a>\n  <div class=\"top\">\n    <div>\n      <div class=\"eyebrow\">Phase 1 · Deliverable 03 of 10</div>\n      <h1>Personas and decision matrix</h1>\n      <p class=\"q\">Ten governed roles grouped into three lenses, plus the AI assistants as a bounded non-human actor. Roles are role names only; no individuals or organisational units are invented.</p>\n    </div>\n    <div class=\"chips\">\n      <span class=\"chip nav\">DRAFT v0.1 · FOR APPROVAL</span>\n      <span class=\"chip syn\">ROLE NAMES ONLY · NO PERSONAL DATA</span>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>Role personas</h2>\n    <p class=\"sub\">\"Lens\" is the default home and depth. A role may open other lenses only if their entitlement scope allows it (06).</p>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:60px 170px 110px 220px 240px 240px 140px 1fr\"><div>Code</div><div>Role</div><div>Home lens</div><div>Primary job</div><div>Key decisions</div><div>Daily questions</div><div>Main routes</div><div>Must not</div></div>\n      <sc-for list=\"{{personas}}\" as=\"r\" hint-placeholder-count=\"11\">\n        <div class=\"tr\" style=\"grid-template-columns:60px 170px 110px 220px 240px 240px 140px 1fr\"><div class=\"id\">{{r.c}}</div><div style=\"font-weight:600;color:#0F1E3A\">{{r.n}}</div><div>{{r.l}}</div><div>{{r.j}}</div><div>{{r.d}}</div><div class=\"muted\">{{r.q}}</div><div class=\"id\" style=\"font-weight:500\">{{r.r}}</div><div>{{r.x}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>Decision matrix</h2>\n    <p class=\"sub\">Who decides what. Superscripts: * = within assigned scope only; † = only when materiality is Critical and above the [DoA LIMIT — PLACEHOLDER]. The AI column can never contain A or E.</p>\n    <div class=\"key\">\n      <div><span class=\"k\" style=\"background:#0F1E3A;color:#fff\">A</span>Approve / decide</div>\n      <div><span class=\"k\" style=\"box-shadow:inset 0 0 0 2px #0F1E3A\">E</span>Execute</div>\n      <div><span class=\"k\" style=\"background:#E3E7ED\">R</span>Recommend / request</div>\n      <div><span class=\"k\" style=\"background:#E3E7ED\">C</span>Consulted</div>\n      <div><span class=\"k\">I</span>Informed</div>\n      <div><span class=\"k\" style=\"color:#6B7380\">—</span>No right</div>\n      <div><span class=\"k\" style=\"box-shadow:inset 0 0 0 1px #6B7686\">D</span>AI drafts</div>\n      <div><span class=\"k\" style=\"box-shadow:inset 0 0 0 1px #6B7686\">V</span>AI validates (no authority)</div>\n    </div>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:44px 1fr repeat(11,70px)\"><div>#</div><div>Decision</div>\n        <div class=\"m\">OWN</div><div class=\"m\">CGE</div><div class=\"m\">ENX</div><div class=\"m\">FNL</div><div class=\"m\">MOC</div><div class=\"m\">ANL</div><div class=\"m\">ACO</div><div class=\"m\">INC</div><div class=\"m\">ASR</div><div class=\"m\">ADM</div><div class=\"m\">AI</div></div>\n      <sc-for list=\"{{matrix}}\" as=\"r\" hint-placeholder-count=\"22\">\n        <div class=\"tr\" style=\"grid-template-columns:44px 1fr repeat(11,70px)\"><div class=\"id\">{{r.n}}</div><div>{{r.d}}</div>\n          <div class=\"m {{r.k0}}\">{{r.c0}}</div><div class=\"m {{r.k1}}\">{{r.c1}}</div><div class=\"m {{r.k2}}\">{{r.c2}}</div><div class=\"m {{r.k3}}\">{{r.c3}}</div><div class=\"m {{r.k4}}\">{{r.c4}}</div><div class=\"m {{r.k5}}\">{{r.c5}}</div><div class=\"m {{r.k6}}\">{{r.c6}}</div><div class=\"m {{r.k7}}\">{{r.c7}}</div><div class=\"m {{r.k8}}\">{{r.c8}}</div><div class=\"m {{r.k9}}\">{{r.c9}}</div><div class=\"m {{r.k10}}\">{{r.c10}}</div>\n        </div>\n      </sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>Governance assignments (v0.2, CX-01)</h2>\n    <p class=\"sub\">These are not roles. They are per-item assignments that a governed role holds for a specific KPI, case or incident. Each assignment is recorded with the assigning role, the time and an audit entry.</p>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:200px 1fr 260px 260px 120px\"><div>Assignment</div><div>Responsibility</div><div>Eligible roles</div><div>Assigned by</div><div>Decision</div></div>\n      <sc-for list=\"{{assign}}\" as=\"r\" hint-placeholder-count=\"9\">\n        <div class=\"tr\" style=\"grid-template-columns:200px 1fr 260px 260px 120px\"><div style=\"font-weight:600;color:#0F1E3A\">{{r.a}}</div><div>{{r.r}}</div><div>{{r.e}}</div><div class=\"muted\">{{r.b}}</div><div class=\"id\">{{r.d}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>Home route by role (v0.2, CX-02)</h2>\n    <p class=\"sub\">Every role has a defined landing route and its main working routes, so no supporting role is left to navigate a lens built for someone else.</p>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:80px 220px 260px 1fr\"><div>Role</div><div>Landing</div><div>Working routes</div><div>Variant applied</div></div>\n      <sc-for list=\"{{homes}}\" as=\"r\" hint-placeholder-count=\"10\">\n        <div class=\"tr\" style=\"grid-template-columns:80px 220px 260px 1fr\"><div class=\"id\">{{r.c}}</div><div style=\"font-weight:600;color:#0F1E3A\">{{r.l}}</div><div class=\"id\" style=\"font-weight:500\">{{r.w}}</div><div class=\"muted\">{{r.v}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n</div>\n", function (DCLogic) {

class Component extends DCLogic {
  renderVals() {
    const P = (c,n,l,j,d,q,r,x) => ({c,n,l,j,d,q,r,x});
    const cls = (v) => v === "—" ? "mN" : "m" + v.charAt(0);
    const rows = [
      ["Accept ownership of an alert or case","—","R","A","A*","—","—","A*","A*","I","—","D"],
      ["Assign a supporting action","—","A","A","A*","—","—","R","A","I","—","D"],
      ["Alternate-sourcing decision within local authority [PLACEHOLDER]","I","C","A","R","—","C","E","R","—","—","R"],
      ["Alternate-sourcing decision above local authority [PLACEHOLDER]","A†","A","R","C","—","C","—","R","—","—","R"],
      ["Run a scenario","R","E","E","E","—","E","—","E","—","—","D"],
      ["Publish a scenario as the basis for a decision","I","A","A*","R","—","R","—","R","—","—","—"],
      ["Escalate a matter","R","A","R","R","—","—","R","A","R","—","D"],
      ["Open a war room","R","A","R","—","—","—","—","A","—","—","—"],
      ["Intervene in a critical escalation","A","C","I","—","—","—","—","C","—","—","—"],
      ["Certify a KPI","—","I","I","—","A*","R","—","—","C","—","V"],
      ["Certify a KPI with exception","—","I","I","—","A*","R","—","—","C","—","V"],
      ["Request a data correction","—","R","R","R","A","R","—","—","R","E","V"],
      ["Approve a manual KPI override","—","I","—","—","A*","R","—","—","C","—","—"],
      ["Change an approved mapping or configuration","—","I","—","—","A","C","—","—","I","E","—"],
      ["Accept a material risk","A†","A","R","C","—","—","—","R","C","—","—"],
      ["Approve disclosure (Disclosure Authority — PLACEHOLDER, D-07)","I","C","—","—","—","—","—","C","C","—","—"],
      ["Approve an executive or Owner update","I","A","A*","C","—","—","—","R","—","—","D"],
      ["Request closure","—","—","R","R","—","—","R","R","—","—","—"],
      ["Approve closure, non-material case","—","I","A","A*","—","—","—","C","C","—","V"],
      ["Approve closure, material case (D-06 tiers)","I","A","R","—","—","—","—","R","C","—","V"],
      ["Reopen a closed case","R","A","R","—","—","—","—","—","A","—","—"],
      ["Release the daily Owner brief","I","A","—","—","—","—","—","—","—","—","D"]
    ];
    const matrix = rows.map((r, i) => {
      const o = { n: String(i + 1).padStart(2, "0"), d: r[0] };
      for (let k = 0; k < 11; k++) { o["c" + k] = r[k + 1]; o["k" + k] = cls(r[k + 1]); }
      return o;
    });
    return {
      matrix,
      assign: [
        {a:"Named owner", r:"Accountable for an alert or case from acceptance to closure", e:"Entity Executive · Functional Leader · Action Owner (assigned)", b:"Self-acceptance of the AI or Core Group routing draft", d:"D-19"},
        {a:"Incident Commander", r:"Coordinates a severe incident: live facts, actions, decisions log, communications", e:"Entity Executive · Functional Leader", b:"Core Group Executive (Critical) · Entity Executive (High)", d:"D-23"},
        {a:"Action owner", r:"Delivers one action with evidence", e:"Any Entity-lens role in scope", b:"Named owner · Incident Commander · Core Group (cross-entity)", d:"—"},
        {a:"Decision authority", r:"Takes a recorded decision on a case", e:"Owner · Core Group Executive · Entity Executive, per [DoA — PH]", b:"Rule from materiality + DoA placeholder", d:"D-05"},
        {a:"Closure approver", r:"Approves or rejects closure; never the action owner", e:"Entity Executive (Medium) · Core Group Executive (High / Critical)", b:"Rule from materiality", d:"D-06"},
        {a:"Watcher", r:"Receives updates and has view access only", e:"Any role with scope", b:"Named owner · Core Group · auto for cross-functional impact", d:"—"},
        {a:"Metric owner / Certifier", r:"Owns the definition / certifies the value for a KPI × scope", e:"Metric Owner / Certifier family", b:"Core Group (governance) via the certification calendar", d:"D-02, D-22"},
        {a:"Disclosure Authority [PH]", r:"Approves disclosure where a disclosure clock applies", e:"PLACEHOLDER: not in the role model", b:"Owner office / legal (placeholder)", d:"D-07"},
        {a:"Brief releaser", r:"Releases the AI-drafted Owner Brief and briefing packs", e:"Core Group Executive", b:"Core Group", d:"D-11"}
      ],
      homes: [
        {c:"OWN", l:"O-01 Enterprise Health Home", w:"O-02 to O-08, S-09 to S-11", v:"Owner depth everywhere; S-10 summary mode; G-08 Owner trust summary"},
        {c:"CGE", l:"G-01 Portfolio Home", w:"G-02 to G-10, S-12, S-06", v:"Comparative depth"},
        {c:"ENX", l:"E-01 Entity Home", w:"E-02 to E-10, S-05", v:"Own entity, full depth"},
        {c:"FNL", l:"E-09 My Alerts, Cases and Actions (domain filter)", w:"Domain route of E-02 to E-07", v:"Domain-filtered Entity lens"},
        {c:"MOC", l:"E-08 Number Assurance Workbench (assigned scope)", w:"S-03, G-08 (status)", v:"Entity or group scope per assignment (D-22)"},
        {c:"ANL", l:"E-08 investigation queue", w:"S-03, S-06, S-08", v:"Assigned scope"},
        {c:"ACO", l:"E-09 My Alerts, Cases and Actions", w:"E-10, S-05", v:"Assigned items only"},
        {c:"INC", l:"S-05 Case Detail in war-room mode", w:"E-09, G-09, S-06, S-08", v:"Incident scope"},
        {c:"ASR", l:"G-08 Certification Governance (Assurance variant)", w:"S-08, S-03, E-08 (read)", v:"Read-only with sampling tasks; review scope"},
        {c:"ADM", l:"Admin console (out of scope, A-15)", w:"—", v:"No business lens"}
      ],
      personas: [
        P("OWN","Owner","Owner","Steward enterprise value; intervene only where it is material.","Permitted strategic decisions under [DoA — PLACEHOLDER]; intervene in critical escalations; request analysis.","Is the enterprise healthier than yesterday? What crossed materiality? What needs me today?","O-01 to O-08","Certify operational KPIs (default); work plant queues; close cases."),
        P("CGE","Core Group Executive (finance, strategy, operations, risk heads: one role family)","Core Group","Compare entities, govern certification, coordinate cross-functional response.","Route and escalate; approve material closure (D-06); publish briefing pack and scenarios; open war room.","Which entity drives the variance? Which numbers are uncertified? Which escalations are stuck?","G-01 to G-10","Alter source facts; certify unless separately assigned."),
        P("ENX","Entity Executive","Entity","Accountable for entity performance and recovery.","Accept entity accountability; initiate response; approve local actions within authority; request escalation.","Are we on plan? What is at risk this week? What must I accept or approve?","E-01, E-09, E-05, S-05","See other entities or portfolio-confidential data."),
        P("FNL","Functional Leader (supply, production, maintenance, finance, EHS, commercial)","Entity (domain)","Investigate the assigned domain; drive supporting actions.","Accept and assign supporting actions in scope; add business explanation and evidence.","What in my domain is causing this? Which actions are blocked?","E-02 to E-07, E-09","Approve closure of own actions; act outside the domain."),
        P("MOC","Metric Owner / Certifier (two assignments, one family)","Number Assurance","Own the definition; certify numbers in assigned scope.","Certify; certify with exception; request correction; approve override.","Can I sign this number? What breaks are open? What changed in lineage?","E-08, S-03, G-08","Certify outside scope; certify own leadership KPI (D-02)."),
        P("ANL","Analyst / Investigator","Any (scoped)","Investigate breaks and deviations; prepare evidence.","Recommend correction; prepare evidence; run scenarios.","Where does the number diverge? What evidence proves it?","E-08, S-03, S-06, S-08","Certify unless separately authorised."),
        P("ACO","Action Owner","Entity (assigned)","Deliver assigned actions with evidence.","Accept the action; update it; record dependencies; submit evidence; request closure.","What is due? What is blocking me? Is my evidence enough?","E-09, E-10","Self-approve closure unless explicitly authorised."),
        P("INC","Incident Commander","Incident scope","Coordinate a severe incident end to end.","Maintain live facts, actions, decisions log and communications; open war room; escalate.","Is it contained? Who is blocked? What do we tell leadership, and when?","S-05 (war-room mode), O-08","Accept material risk; approve disclosure; close a material incident alone."),
        P("ASR","Assurance Reviewer","Assurance (scoped)","Independent review of certification, controls, evidence, overrides and closure.","Sample; challenge; reopen (D-18).","Is the evidence sufficient? Are overrides justified? Do findings affect leadership KPIs?","G-08, S-08, E-08 (read)","Change business data."),
        P("ADM","Administrator","None (admin console, A-15)","Maintain approved mappings and technical configuration.","Execute approved mapping and config changes.","Which mappings changed, and what re-certification did they trigger?","Admin console (out of scope)","Certify, accept risk, close incidents; no automatic business authority."),
        P("AI","AI assistants: Validation, Explanation, Executive Briefing, Escalation Routing (not a role)","Inherits requester","Detect, summarise, explain, draft, recommend, route.","None. Outputs are drafts that a human must accept.","—","S-07, O-07, G-10, S-04, S-13","Certify a KPI; approve a financial number; accept material risk; approve disclosure; close a material case; assign accountability.")
      ]
    };
  }
}

return Component;
});
