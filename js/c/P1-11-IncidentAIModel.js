DCLite.register("P1-11-IncidentAIModel", "\n\n<div class=\"pg\">\n  <a class=\"back\" href=\"Main.dc.html\">← Pack index</a>\n  <div class=\"top\">\n    <div>\n      <div class=\"eyebrow\">Phase 1 · Deliverable 11 (added in v0.2, CX-04 / CX-08)</div>\n      <h1>Incident, case, war-room and AI specification</h1>\n      <p class=\"q\">Every field the brief requires for alerts, cases, incidents and war rooms, enumerated and mapped to a component, an editing role and the AI boundary. Also the operating specification of the four AI assistants and the eight-section explanation model.</p>\n    </div>\n    <div class=\"chips\">\n      <span class=\"chip nav\">DRAFT v0.2 · FOR APPROVAL</span>\n      <span class=\"chip syn\">CLOCKS, CADENCES, THRESHOLDS: PLACEHOLDER</span>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>11a · Alert and case information model (22 fields)</h2>\n    <p class=\"sub\">Shown on S-04 and carried into S-05 when ownership is accepted. One ID lineage (D-01).</p>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:44px 210px 1fr 140px 200px 220px\"><div>#</div><div>Field</div><div>Definition / treatment</div><div>Component</div><div>Set or edited by</div><div>AI role</div></div>\n      <sc-for list=\"{{alert}}\" as=\"r\" hint-placeholder-count=\"22\">\n        <div class=\"tr\" style=\"grid-template-columns:44px 210px 1fr 140px 200px 220px\"><div class=\"id\">{{r.n}}</div><div style=\"font-weight:600;color:#0F1E3A\">{{r.f}}</div><div>{{r.d}}</div><div class=\"id\" style=\"font-weight:500\">{{r.c}}</div><div>{{r.e}}</div><div class=\"muted\">{{r.a}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>11b · Incident experience: all blocks and fields</h2>\n    <p class=\"sub\">Template E. Field counts match the brief: header 12, live facts 7, impact 11, timeline 10, ownership and governance 10, actions 8, communications 6, closure 9, primary actions 10.</p>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:44px 230px 1fr 130px 220px\"><div>#</div><div>Field</div><div>Treatment</div><div>Component</div><div>Edited by</div></div>\n      <sc-for list=\"{{blocks}}\" as=\"b\" hint-placeholder-count=\"9\">\n        <div class=\"tr grp\" style=\"grid-template-columns:1fr\"><div>{{b.n}}</div></div>\n        <sc-for list=\"{{b.rows}}\" as=\"r\" hint-placeholder-count=\"10\">\n          <div class=\"tr\" style=\"grid-template-columns:44px 230px 1fr 130px 220px\"><div class=\"id\">{{r.n}}</div><div style=\"font-weight:600;color:#0F1E3A\">{{r.f}}</div><div>{{r.t}}</div><div class=\"id\" style=\"font-weight:500\">{{r.c}}</div><div class=\"muted\">{{r.e}}</div></div>\n        </sc-for>\n      </sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>11c · War-room mode</h2>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:200px 1fr\"><div>Aspect</div><div>Specification</div></div>\n      <sc-for list=\"{{war}}\" as=\"r\" hint-placeholder-count=\"8\">\n        <div class=\"tr\" style=\"grid-template-columns:200px 1fr\"><div style=\"font-weight:600;color:#0F1E3A\">{{r.a}}</div><div>{{r.s}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>11d · AI assistant specification</h2>\n    <p class=\"sub\">All four assistants inherit the requester's scope (GR-06). Every output carries the AI-generated label (AI-02) until a human accepts it.</p>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:170px 180px 1fr 1fr 150px 200px 220px\"><div>Assistant</div><div>Trigger</div><div>Inputs</div><div>Outputs</div><div>Surfaces</div><div>Human gate</div><div>Never</div></div>\n      <sc-for list=\"{{ai}}\" as=\"r\" hint-placeholder-count=\"4\">\n        <div class=\"tr\" style=\"grid-template-columns:170px 180px 1fr 1fr 150px 200px 220px\"><div style=\"font-weight:600;color:#0F1E3A\">{{r.n}}</div><div>{{r.t}}</div><div>{{r.i}}</div><div>{{r.o}}</div><div class=\"id\" style=\"font-weight:500\">{{r.s}}</div><div>{{r.g}}</div><div>{{r.x}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>11e · AI explanation model (S-07, S-13, O-02 summaries)</h2>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:44px 230px 160px 1fr\"><div>#</div><div>Section</div><div>Provenance tag</div><div>Content rule</div></div>\n      <sc-for list=\"{{expl}}\" as=\"r\" hint-placeholder-count=\"8\">\n        <div class=\"tr\" style=\"grid-template-columns:44px 230px 160px 1fr\"><div class=\"id\">{{r.n}}</div><div style=\"font-weight:600;color:#0F1E3A\">{{r.s}}</div><div class=\"id\" style=\"font-weight:500\">{{r.p}}</div><div>{{r.r}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n</div>\n", function (DCLogic) {

class Component extends DCLogic {
  renderVals() {
    const num = (arr) => arr.map((r, i) => Object.assign({ n: String(i + 1).padStart(2, "0") }, r));
    const F = (f,t,c,e) => ({f,t,c,e});
    return {
      alert: num([
        {f:"Alert ID", d:"ALT-SYN-nnnn; persists as the parent of the case and incident IDs", c:"WK-03", e:"System", a:"—"},
        {f:"Title", d:"Plain-language issue statement: scope + effect + cause", c:"WK-03", e:"System draft; owner may edit", a:"Drafts title"},
        {f:"State", d:"Incident states 01–13 (09 · 9d)", c:"WK-03", e:"Rules + permitted roles", a:"—"},
        {f:"Severity", d:"Intrinsic seriousness of the event (A-16)", c:"WK-03", e:"Rule; owner adjusts with reason", a:"—"},
        {f:"Materiality", d:"Critical / High / Medium / Low with driving dimensions (placeholder model)", c:"DS-18", e:"Materiality engine (rule)", a:"—"},
        {f:"Detected time", d:"Timestamp of detection", c:"WK-03", e:"System", a:"—"},
        {f:"Source type", d:"Category placeholder, e.g. 'Supplier signal [PH]'", c:"DS-05", e:"System", a:"—"},
        {f:"Fact / forecast / scenario label", d:"Whether the trigger is an actual, a forecast or a scenario", c:"DS-05", e:"System", a:"—"},
        {f:"Affected scope", d:"Hierarchy nodes affected; restricted nodes not rendered", c:"SH-11", e:"System; owner may extend", a:"—"},
        {f:"Current impact", d:"Impact grid, current column", c:"WK-06", e:"Owner / Functional Leader validate", a:"Drafts estimate"},
        {f:"Forecast impact", d:"Impact grid, forecast column; days to breach", c:"WK-06, DS-19", e:"Forecast service; owner of assumptions", a:"Drafts estimate"},
        {f:"Confidence", d:"High / Medium / Low with the reason", c:"WK-05", e:"Validation rules; owner", a:"Validation Assistant suggests"},
        {f:"Evidence", d:"Evidence register and completeness", c:"WK-10", e:"Owner, action owners, analyst", a:"Checks completeness"},
        {f:"Linked KPIs", d:"Governed KPI IDs with trust state", c:"DS-01", e:"System; owner may add", a:"Suggests links"},
        {f:"Named human owner role", d:"Accepted owner; shown as 'Unowned' until accepted", c:"WK-04", e:"Human acceptance only", a:"Recommends a role (draft)"},
        {f:"Due date", d:"Response due", c:"WK-01", e:"Owner / Core Group", a:"Drafts a due date"},
        {f:"Escalation clock", d:"Time to the next ladder level", c:"WK-14", e:"Rule only (D-08)", a:"Never sets"},
        {f:"Recommended actions", d:"Candidate actions awaiting acceptance", c:"AI-05, WK-09", e:"Owner accepts / rejects", a:"Drafts"},
        {f:"Decision required", d:"Decision, authority role, due, options", c:"AI-04, WK-13", e:"Decision authority", a:"Drafts framing; never decides"},
        {f:"Updates", d:"Chronological updates", c:"WK-07", e:"Owner, commander, action owners", a:"Drafts summaries"},
        {f:"Audit trail", d:"Append-only record", c:"WK-23, S-08", e:"System", a:"—"},
        {f:"Closure criteria", d:"Measurable conditions to close", c:"WK-12", e:"Owner proposes; approver accepts", a:"Drafts; checks if met"}
      ]),
      blocks: [
        { n:"Incident header (12)", rows: num([
          F("Incident ID","INC-SYN-nnnn, linked to ALT and CASE","WK-03","System"),
          F("Title","Inherited from the alert","WK-03","Commander"),
          F("State","13 states","WK-03","Rules + roles"),
          F("Severity","See A-16","WK-03","Rule; commander with reason"),
          F("Materiality","With driver dimensions","DS-18","Rule"),
          F("Affected scope","Hierarchy nodes","SH-11","System / commander"),
          F("Detected time","Timestamp","WK-03","System"),
          F("Last update","Timestamp + who (role)","WK-03","System"),
          F("Fact / forecast / scenario label","Trigger basis","DS-05","System"),
          F("Source category","Placeholder category","DS-05","System"),
          F("Incident commander role","Governance assignment","WK-04","Core Group / Entity Executive (D-23)"),
          F("Escalation level","L0–L3 placeholder ladder","WK-15","Rule; escalate action")
        ])},
        { n:"Live facts (7)", rows: num([
          F("Certified facts","CERT tag; source and certification time","WK-05","System"),
          F("Preliminary facts","PRELIM tag","WK-05","System / commander"),
          F("Missing facts","What is unknown, who is finding out, by when","WK-05","Commander"),
          F("External signals","EXT tag; source category","WK-05","System"),
          F("Assumptions","Forecast and scenario assumptions with owner role","WK-05","Assumption owner"),
          F("Confidence","Overall + per fact","WK-05","Commander (AI suggests)"),
          F("Supporting evidence","Links to the evidence register","WK-10","Contributors")
        ])},
        { n:"Impact (11): current and forecast columns, known / estimated / unknown", rows: num([
          F("Production impact","kt / units vs plan","WK-06","Functional Leader"),F("Dispatch impact","Volume and days delayed","WK-06","Functional Leader"),F("Quality impact","Rejections, rework","WK-06","Functional Leader"),F("Financial impact","EBITDA effect (₹)","WK-06","Finance (FNL)"),F("Billing impact","Deferred billing (₹)","WK-06","Finance (FNL)"),F("Cash impact","Collections / cash effect","WK-06","Finance (FNL)"),F("Working-capital impact","DSO / inventory effect","WK-06","Finance (FNL)"),F("EHS impact","Safety / environment","WK-06","EHS (FNL)"),F("Regulatory impact","Obligations affected","WK-06","Compliance (FNL)"),F("Reputation impact","Qualitative [PH]","WK-06","Commander"),F("Forecast impact","Change in period-end forecast","WK-06, DS-08","Forecast owner")
        ])},
        { n:"Timeline (10 event types)", rows: num([
          F("Detection","Auto","WK-07","System"),F("Validation","Validation result","WK-07","System / AI-06"),F("Ownership acceptance","Who (role), when","WK-07","System"),F("Key updates","Human updates","WK-07","Contributors"),F("Decisions","Linked to the decision record","WK-07","Decision authority"),F("Escalations","Level change + reason","WK-07","Rule / roles"),F("Recovery milestones","Planned vs actual","WK-07","Commander"),F("Evidence submissions","Linked evidence","WK-07","Contributors"),F("Closure request","Requester + criteria status","WK-07","Owner"),F("Closure approval","Approver + rationale","WK-07","Approver")
        ])},
        { n:"Ownership and governance (10)", rows: num([
          F("Named human owner role","Accepted owner","WK-04","Human acceptance"),F("Incident commander","Assignment","WK-04","D-23"),F("Action owners","Per action","WK-08","Owner / commander"),F("Due dates","Per item","WK-01","Owner"),F("Dependencies","Per action","WK-09","Action owner"),F("Escalation clock","Rule-based","WK-14","Rule"),F("Disclosure clock","Where applicable [PH]","WK-16","Rule / Disclosure Authority [PH]"),F("Decision authority","Per decision","WK-13","Rule from DoA [PH]"),F("Watchers","View-only participants","WK-04","Owner / Core Group"),F("Role-based visibility","Who can see what (06)","WK-25","Entitlement service")
        ])},
        { n:"Actions (8)", rows: num([
          F("Recommended actions","AI or human proposals","AI-05","Draft → owner accepts"),F("Accepted actions","Committed actions","WK-08","Owner"),F("Milestones","Per action","WK-09","Action owner"),F("Blocked actions","With dependency","WK-08","Action owner"),F("Overdue actions","Auto from due date","WK-08","Rule"),F("Evidence required","Per action","WK-09","Owner sets"),F("Action completion","% and done criteria","WK-09","Action owner"),F("Next action","Single most important next step","WK-01","Owner / commander")
        ])},
        { n:"Communications (6)", rows: num([
          F("Executive update","Cross-lens summary","WK-17","Commander drafts; Core Group approves"),F("Entity update","Entity audience","WK-17","Entity Executive approves"),F("Core Group update","Core Group audience","WK-17","Core Group approves"),F("Owner update","Owner audience","WK-17","Core Group approves"),F("Disclosure-review state","Not applicable / under review / approved [PH]","WK-16","Disclosure Authority [PH]"),F("Communication approvals","Approval log","WK-17","Approvers")
        ])},
        { n:"Closure (9)", rows: num([
          F("Closure criteria","Measurable conditions","WK-12","Owner proposes"),F("Recovery confirmation","Evidence that recovery held","WK-12","Commander"),F("Residual risk","Stated and owned","WK-12","Owner"),F("Evidence completeness","% with gaps listed","WK-12","System (AI-06 checks)"),F("Lessons learned","Text","WK-12","Owner"),F("Root-cause record","Cause + category","WK-12","Owner / analyst"),F("Preventive action","Linked initiative or action","WK-12","Owner"),F("Human closure approver","Per D-06; never self","WK-12","Approver"),F("Reopen control","Who, window [PH]","WK-12","D-18")
        ])},
        { n:"Primary actions (10, role-gated per 06)", rows: num([
          F("Accept ownership","06 row 2","WK-25","Entity roles"),F("Assign supporting action","06 row 3","WK-25","Owner / commander / Core Group"),F("Update status","06 row 4","WK-25","Scope"),F("Attach evidence","06 row 5","WK-25","Scope"),F("Run scenario","06 row 6","WK-25","Scope"),F("Escalate","06 row 8","WK-25","Scope"),F("Open war room","06 row 9","WK-25","Core Group / commander"),F("Draft executive update","06 row 13","WK-25","Commander / Core Group"),F("Request closure","06 row 15","WK-25","Owner roles"),F("Approve or reject closure","06 row 16","WK-25","Approver per D-06")
        ])}
      ],
      war: [
        {a:"Entry criteria", s:"Materiality Critical, or High at the commander's request. Opened by the Core Group Executive or the Incident Commander (06 row 9)."},
        {a:"Participants", s:"Commander (edit), action owners (edit own actions), Core Group (coordinate), Entity Executive, watchers (view), Owner (view, intervene, request analysis)."},
        {a:"Layout", s:"Template E war-room arrangement (WK-18): header + accountability strip; live facts | impact grid; timeline | actions; decisions log; communications with approvals."},
        {a:"Cadence", s:"Update interval [UPDATE CADENCE — PH]; the board shows 'Update overdue' when it is missed."},
        {a:"Decisions log", s:"Every decision with authority role, options, rationale and evidence (06 row 30)."},
        {a:"Owner view", s:"No edit of facts or actions; intervene and request-analysis controls only."},
        {a:"Exit", s:"Commander moves to Recovery monitoring; the war room closes and its record is kept in S-08."},
        {a:"Visibility", s:"Members and scope-entitled roles only; restricted nodes are hidden (GR-09)."}
      ],
      ai: [
        {n:"Validation Assistant", t:"New alert; KPI refresh; evidence submitted; closure requested", i:"Governed sources in scope; tolerances [PH]; evidence register", o:"Consistency result, trust-state warning, completeness %, gaps", s:"S-03, S-04, E-08, E-10, S-05", g:"Certifier certifies; approver closes", x:"Certify; set a trust state to Certified; close; approve a number"},
        {n:"Explanation Assistant", t:"'Why?' on any KPI or alert; Ask Control Tower", i:"Governed data in scope; drivers; forecast assumptions; external signals", o:"Eight-section explanation (11e)", s:"S-07, S-13, O-02", g:"Reader judges; business explanation added by a human", x:"Present interpretation as fact; reveal out-of-scope data"},
        {n:"Executive Briefing Assistant", t:"Schedule [BRIEF TIME — PH]; pack request", i:"Material changes, alerts, decisions, war rooms in scope", o:"Owner Brief draft; pack sections with source chips", s:"O-07, G-10, O-02", g:"Core Group releases (brief releaser)", x:"Release a brief; include unsourced statements; push sub-threshold items to the Owner"},
        {n:"Escalation Routing Assistant", t:"Validated alert; blocked action; clock nearing expiry", i:"Alert, scope, role directory (roles only), ladder", o:"Draft issue, recommended owner role, due date, escalation path, decision required", s:"S-04, E-09, G-09, S-05", g:"Human acceptance or reassignment", x:"Assign accountability; start or stop clocks; escalate silently"}
      ],
      expl: [
        {n:"01", s:"Certified facts used", p:"CERT", r:"Only certified values, with period and certification time."},
        {n:"02", s:"Preliminary facts", p:"PRELIM", r:"Flagged as subject to change."},
        {n:"03", s:"Forecast assumptions", p:"FCST", r:"Each assumption with its owner role and date."},
        {n:"04", s:"External signals", p:"EXT", r:"Source category placeholder; never merged with internal facts."},
        {n:"05", s:"Scenario assumptions", p:"SCN", r:"Only when a scenario is referenced, with its ID."},
        {n:"06", s:"AI interpretation", p:"AI · NOT APPROVED", r:"Reasoning that links the facts; confidence stated; written as an interpretation, not as fact."},
        {n:"07", s:"Recommended next questions", p:"AI", r:"Questions that would reduce uncertainty, each linked to a drill-down."},
        {n:"08", s:"Human decision required", p:"HUMAN", r:"The decision, authority role and due date. AI never fills it."}
      ]
    };
  }
}

return Component;
});
