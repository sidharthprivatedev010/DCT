DCLite.register("P1-09-Components", "\n\n<div class=\"pg\">\n  <a class=\"back\" href=\"Main.dc.html\">← Pack index</a>\n  <div class=\"top\">\n    <div>\n      <div class=\"eyebrow\">Phase 1 · Deliverable 09 of 10</div>\n      <h1>Component inventory and states</h1>\n      <p class=\"q\">80 components in six families, the KPI card model with all 12 required states on two independent axes, provenance encoding, the 13 incident states and the 12 required non-happy-path states. Phase 2 builds these in greyscale; Phase 3 applies the visual system.</p>\n    </div>\n    <div class=\"chips\">\n      <span class=\"chip nav\">DRAFT v0.1 · FOR APPROVAL</span>\n      <span class=\"chip syn\">COLOUR VALUES: PROPOSAL FOR PHASE 3</span>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>9a · KPI card model</h2>\n    <div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));gap:14px\">\n      <div class=\"card\"><h3>Collapsed card (on pages; at most six per page)</h3>\n        <ul class=\"f\"><li>Name and KPI ID</li><li>Primary value and unit</li><li>Target / plan</li><li>Variance (absolute and %)</li><li>Trend (sparkline, provenance-encoded)</li><li>Forecast (forecast style)</li><li>Business status badge (axis 1)</li><li>Trust status badge (axis 2)</li><li>Last refresh</li></ul></div>\n      <div class=\"card\"><h3>Expanded card / S-03 header</h3>\n        <ul class=\"f\"><li>Approved definition and version</li><li>Formula / calculation</li><li>Source placeholder</li><li>Lineage (link to graph)</li><li>Metric owner role · certifier role</li><li>Comparison values (prior period, plan, peers in scope)</li><li>Drivers</li><li>Related alert or case</li><li>Evidence · last certified · tolerance · confidence</li></ul></div>\n      <div class=\"card\"><h3>Rules</h3>\n        <ul class=\"f\"><li>Business status and trust status are separate badges, each with icon + text label + colour.</li><li>When trust is Break, Stale or Missing, the value is muted, labelled 'Unverified', and the business badge drops to outline-only.</li><li>Restricted renders no value, variance, trend or name beyond scope.</li><li>The same component and ID everywhere (R1); pages add context only.</li><li>Red is used only for Breached with material exposure.</li></ul></div>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>9b · KPI card states (12 required, on two axes)</h2>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:90px 200px 120px 170px 1fr 260px\"><div>Axis</div><div>State</div><div>Colour role</div><div>Icon (one stroke set)</div><div>Treatment</div><div>Example in scenario</div></div>\n      <sc-for list=\"{{kpiStates}}\" as=\"r\" hint-placeholder-count=\"12\">\n        <div class=\"tr\" style=\"grid-template-columns:90px 200px 120px 170px 1fr 260px\"><div class=\"id\">{{r.a}}</div><div style=\"font-weight:600;color:#0F1E3A\">{{r.s}}</div><div>{{r.c}}</div><div>{{r.i}}</div><div>{{r.t}}</div><div class=\"muted\">{{r.e}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>9c · Provenance and signal encoding</h2>\n    <p class=\"sub\">Shape and label carry the meaning; colour reinforces it. The six provenance classes come from the brief. Leading signal and prediction output are signal roles that Theme 3 must distinguish from certified actuals.</p>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:200px 120px 260px 1fr\"><div>Class</div><div>Tag text</div><div>Line / mark</div><div>Rule</div></div>\n      <sc-for list=\"{{prov}}\" as=\"r\" hint-placeholder-count=\"8\">\n        <div class=\"tr\" style=\"grid-template-columns:200px 120px 260px 1fr\"><div style=\"font-weight:600;color:#0F1E3A\">{{r.n}}</div><div class=\"id\">{{r.t}}</div><div>{{r.l}}</div><div>{{r.r}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>9d · Incident states (13 required)</h2>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:44px 190px 1fr 140px 300px\"><div>#</div><div>State</div><div>Meaning</div><div>Colour role</div><div>Primary action shown (by role)</div></div>\n      <sc-for list=\"{{inc}}\" as=\"r\" hint-placeholder-count=\"13\">\n        <div class=\"tr\" style=\"grid-template-columns:44px 190px 1fr 140px 300px\"><div class=\"id\">{{r.n}}</div><div style=\"font-weight:600;color:#0F1E3A\">{{r.s}}</div><div>{{r.m}}</div><div>{{r.c}}</div><div class=\"muted\">{{r.a}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>9e · Required non-happy-path states (12)</h2>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:44px 220px 1fr 280px 110px\"><div>#</div><div>State</div><div>Message pattern</div><div>User action</div><div>Component</div></div>\n      <sc-for list=\"{{nhp}}\" as=\"r\" hint-placeholder-count=\"12\">\n        <div class=\"tr\" style=\"grid-template-columns:44px 220px 1fr 280px 110px\"><div class=\"id\">{{r.n}}</div><div style=\"font-weight:600;color:#0F1E3A\">{{r.s}}</div><div>{{r.m}}</div><div class=\"muted\">{{r.a}}</div><div class=\"id\">{{r.c}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>9f · Component inventory (80)</h2>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:70px 230px 1fr 120px 330px\"><div>ID</div><div>Component</div><div>Purpose</div><div>Templates</div><div>States / variants</div></div>\n      <sc-for list=\"{{fams}}\" as=\"g\" hint-placeholder-count=\"6\">\n        <div class=\"tr grp\" style=\"grid-template-columns:1fr\"><div>{{g.n}}</div></div>\n        <sc-for list=\"{{g.rows}}\" as=\"r\" hint-placeholder-count=\"10\">\n          <div class=\"tr\" style=\"grid-template-columns:70px 230px 1fr 120px 330px\"><div class=\"id\">{{r.i}}</div><div style=\"font-weight:600;color:#0F1E3A\">{{r.n}}</div><div>{{r.p}}</div><div class=\"id\" style=\"font-weight:500\">{{r.t}}</div><div class=\"muted\">{{r.s}}</div></div>\n        </sc-for>\n      </sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>9g · Visual-system colour roles (proposal; Phase 3 validates contrast)</h2>\n    <div class=\"sw\">\n      <sc-for list=\"{{tokens}}\" as=\"t\" hint-placeholder-count=\"10\">\n        <div><div class=\"c\" style=\"background:{{t.h}}\"></div><div class=\"t\"><b>{{t.n}}</b><br><span class=\"id\" style=\"font-weight:500\">{{t.h}}</span><br><span class=\"muted\">{{t.u}}</span></div></div>\n      </sc-for>\n    </div>\n    <p class=\"muted\" style=\"font-size:12.5px;margin-top:10px\">Type: IBM Plex Sans (UI) + IBM Plex Mono (IDs, tags, timestamps). Proposed for Phase 3. Spacing on a 4/8 px grid; 2–4 px radii; borders, not shadows. Excluded per brief: purple gradients, glassmorphism, neon, decorative blobs, oversized pills, donut percentages, gauges, fake maps, 3D, motion without analytical purpose.</p>\n  </div>\n</div>\n", function (DCLogic) {

class Component extends DCLogic {
  renderVals() {
    const C = (i,n,p,t,s) => ({i,n,p,t,s});
    return {
      kpiStates: [
        {a:"BUSINESS", s:"On track", c:"Green", i:"Check", t:"Badge 'On track'. Value in standard ink.", e:"FIN-004 FCF at O-01"},
        {a:"BUSINESS", s:"Improving", c:"Green", i:"Trend-up arrow", t:"Badge 'Improving' with period-over-period delta.", e:"Plant 02 recovery D+5"},
        {a:"BUSINESS", s:"Deteriorating", c:"Amber", i:"Trend-down arrow", t:"Badge 'Deteriorating' with delta and trend.", e:"OPS-001 Entity A1"},
        {a:"BUSINESS", s:"Breached", c:"Red (material only)", i:"Octagon with !", t:"Badge 'Breached' with threshold reference [PH]. Red is reserved for this state and critical exposure.", e:"— (no actual breach in scenario)"},
        {a:"BUSINESS", s:"Forecast breach", c:"Purple", i:"Clock", t:"Separate marker 'Forecast breach in N d' in forecast style. Never replaces the actual status.", e:"FIN-001 EBITDA at O-01: actual On track + forecast breach"},
        {a:"TRUST", s:"Certified", c:"Navy", i:"Shield with check", t:"'Certified · P06' plus the certifier role on hover.", e:"CSH-001 Cash position"},
        {a:"TRUST", s:"Certified with exception", c:"Navy + amber mark", i:"Shield with small exception mark", t:"Label, plus exception text and due date in a tooltip and in S-03.", e:"OPS-001 after T7"},
        {a:"TRUST", s:"Pending certification", c:"Grey", i:"Hollow shield + clock", t:"'Pending certification · due [date]'. Value shown as preliminary.", e:"P07 flash KPIs"},
        {a:"TRUST", s:"Reconciliation break", c:"Grey", i:"Broken link", t:"Value muted and labelled 'Unverified'; business badge outline-only; link to the break.", e:"OPS-001 · BRK-SYN-0071"},
        {a:"TRUST", s:"Stale", c:"Grey", i:"Hourglass", t:"'Stale · as of [time]'. Value muted.", e:"Billing stage (BR-3)"},
        {a:"TRUST", s:"Missing", c:"Grey", i:"Dash in circle", t:"Value '—', label 'Missing', no variance, trend or status.", e:"TB-4"},
        {a:"TRUST", s:"Restricted", c:"Grey", i:"Lock", t:"'Restricted'. No value, variance, trend or entity name; request-access link.", e:"Entity A2 user (S-02)"}
      ],
      prov: [
        {n:"Certified actual", t:"CERT", l:"Solid navy line; solid value", r:"Only after a human certification decision."},
        {n:"Preliminary actual", t:"PRELIM", l:"Solid teal line, outlined tag", r:"Flash or uncertified actuals. Never styled as certified."},
        {n:"Forecast", t:"FCST", l:"Purple dashed line + light uncertainty band", r:"Starts where actuals end; shows the forecast date and assumptions link."},
        {n:"Scenario", t:"SCN · id", l:"Purple dotted line, scenario ID label", r:"Only in S-06 or when a published scenario is referenced; never shown as the base forecast."},
        {n:"External signal", t:"EXT", l:"Teal outlined tag, separate axis or panel", r:"Never blended into internal actual lines; source category placeholder shown."},
        {n:"AI-generated", t:"AI · NOT APPROVED", l:"Dashed grey frame around the text region", r:"Text only; never a number of record; always next to the 'Human decision required' block."},
        {n:"Leading signal (role)", t:"LEADING", l:"Signal tile, outlined teal tag", r:"Shown on S-12's left side; links to the prediction it feeds."},
        {n:"Prediction output (role)", t:"PREDICTION", l:"Dashed purple tile frame", r:"Shown on S-12's right side; carries confidence and model date; never in an actuals table."}
      ],
      inc: [
        {n:"01", s:"Detected", m:"System has detected a deviation or forecast breach", c:"Teal", a:"View · acknowledge"},
        {n:"02", s:"Validating", m:"Validation Assistant and rules are checking consistency and completeness", c:"Grey", a:"View validation result"},
        {n:"03", s:"Unowned", m:"Validated but no accepted human owner; clock running", c:"Amber", a:"Accept ownership (Entity roles) · reassign (Core Group)"},
        {n:"04", s:"Owned", m:"Named human role has accepted", c:"Navy", a:"Assign supporting action · update status"},
        {n:"05", s:"Investigating", m:"Cause and impact being established", c:"Navy", a:"Attach evidence · run scenario · ask why"},
        {n:"06", s:"Action in progress", m:"Accepted actions underway", c:"Navy", a:"Update · attach evidence · escalate"},
        {n:"07", s:"Blocked", m:"At least one critical-path action is blocked by a dependency", c:"Amber", a:"Record dependency · escalate"},
        {n:"08", s:"Escalated", m:"Raised to the next ladder level (L0–L3)", c:"Amber + level", a:"Intervene (receiving level) · draft update"},
        {n:"09", s:"War room active", m:"Incident in collaboration mode with a commander", c:"Red if Critical", a:"Maintain live facts · decisions log · approve communications"},
        {n:"10", s:"Recovery monitoring", m:"Actions done; watching that recovery holds", c:"Green outline", a:"Confirm recovery · request closure"},
        {n:"11", s:"Closure requested", m:"Awaiting human closure approval with evidence", c:"Navy outline", a:"Approve or reject closure (approver per D-06)"},
        {n:"12", s:"Closed", m:"Approved closure; root cause and preventive action recorded", c:"Grey", a:"Reopen (per D-18)"},
        {n:"13", s:"Reopened", m:"Recurrence or failed review within the reopen window", c:"Amber", a:"Re-accept ownership"}
      ],
      nhp: [
        {n:"01", s:"Loading", m:"Skeleton in the final layout; the title and business question render first; no spinners on KPI values", a:"—", c:"SY-01"},
        {n:"02", s:"No data", m:"'No [measure] recorded for [scope] in [period]' plus the reason if known", a:"Change period or scope", c:"SY-02"},
        {n:"03", s:"Partial data", m:"Banner: 'Showing [n] of [m] entities; [list] not yet loaded'. Totals marked partial", a:"View which are missing", c:"SY-03"},
        {n:"04", s:"Stale data", m:"'Stale · as of [time]' on the card and in the header refresh indicator", a:"View source status", c:"SY-04"},
        {n:"05", s:"Source unavailable", m:"'[SOURCE CATEGORY] unavailable since [time]'. Last certified value shown and labelled", a:"Notify owner role · view lineage", c:"SY-05"},
        {n:"06", s:"Reconciliation break", m:"'Unverified: reconciliation break [ID]'", a:"Open break · open S-03", c:"DS-04"},
        {n:"07", s:"Pending certification", m:"'Pending certification · due [date]'", a:"View certification status", c:"DS-04"},
        {n:"08", s:"Restricted access", m:"'You do not have access to this item in your current scope.' No item details", a:"Request access", c:"SY-07"},
        {n:"09", s:"Forecast unavailable", m:"'Forecast unavailable: [reason]. Last forecast [time]'", a:"View actuals only", c:"SY-06"},
        {n:"10", s:"Alert without owner", m:"'Unowned · escalates in [h]' with amber clock", a:"Accept ownership / reassign", c:"WK-04"},
        {n:"11", s:"Escalation overdue", m:"'Escalation overdue +[h]' on the clock and in the action table", a:"Intervene / escalate", c:"WK-14"},
        {n:"12", s:"Action awaiting closure approval", m:"'Closure requested [time] · approver: [role]'", a:"Approve or reject (approver only)", c:"WK-12"}
      ],
      fams: [
        { n:"Shell and page frame (14)", rows:[
          C("SH-01","Global header","Persistent header row","all","Default · compact · scope-change pending"),
          C("SH-02","Lens selector","Switch Owner / Core Group / Entity within entitlement","all","Single-lens (hidden) · multi-lens"),
          C("SH-03","Scope selector","Permitted hierarchy tree only","all","Group · business · entity · plant; no-permission nodes not rendered"),
          C("SH-04","Period selector","Reporting period, MTD/YTD, comparison basis","all","Open period · closed period · certified period"),
          C("SH-05","Refresh indicator","Oldest relevant refresh on page","all","Fresh · stale · source unavailable"),
          C("SH-06","Search / Ask Control Tower","Find KPIs, alerts, cases; ask a question","all","Empty · results · AI answer · restricted-safe no-result"),
          C("SH-07","Notification centre","Alerts, assignments, approvals","all","Unread · grouped · materiality-filtered"),
          C("SH-08","Help","Definitions, legend, how-to","all","Panel · contextual"),
          C("SH-09","Profile menu","Role, scope, preferences, sign-out","all","—"),
          C("SH-10","Global navigation","10 items, same in every lens","all","Expanded · collapsed · phone stacked; current item"),
          C("SH-11","Hierarchy breadcrumb","Group → Business → Entity → Plant → Line","A–D","Levels per entitlement; current level"),
          C("SH-12","Page header","Title + explicit business question","A–F","With / without actions"),
          C("SH-13","Scope and trust summary bar","Scope, period, refresh, % certified, open breaks","A–D","All certified · exceptions · breaks"),
          C("SH-14","Status strip","On track / Deteriorating / Improving / Intervention required per area","A–C","4 states with icon + label")
        ]},
        { n:"Data display (22)", rows:[
          C("DS-01","KPI card","One measure in context","A–D","12 states (9b) · hover · focus · loading"),
          C("DS-02","KPI card, expanded","Definition and trust detail","A, D","See 9a"),
          C("DS-03","Business status badge","Axis 1","all","5 states"),
          C("DS-04","Trust badge","Axis 2","all","7 states"),
          C("DS-05","Provenance tag","Class of a value","all","8 classes (9c)"),
          C("DS-06","Leading-signal tile","Early indicator with watch condition","C (S-12)","Watch · elevated · cleared · source unavailable"),
          C("DS-07","Prediction tile","Prediction output with confidence","A, C","Value · unavailable · low confidence"),
          C("DS-08","Line chart","Actual vs plan vs forecast over time","A–D","Provenance segments · threshold [PH] · scenario overlay"),
          C("DS-09","Horizontal bar comparison","Entity / plant / supplier / project / risk","B, C","Sorted · with trust per bar · drillable"),
          C("DS-10","Waterfall bridge","EBITDA, cash, cost, WC bridges","C","Plan → actual · actual → forecast"),
          C("DS-11","Lifecycle chain","Production → … → Upstreaming","A, C","Per stage: actual, plan, forecast, leakage, constraint, trust, owner"),
          C("DS-12","Progress chain","Approved → … → Benefit Realized","A, B, C","Spend and physical progress paired"),
          C("DS-13","Status matrix","Risk, certification, compliance, entity comparison","B, D","Cell = status + icon; restricted cell"),
          C("DS-14","Lineage graph","Source → KPI → views","D","Node ok · changed · break · unavailable"),
          C("DS-15","Reconciliation table","Break detail by stage","D","Within tolerance · break · resolved"),
          C("DS-16","Driver / contribution list","Ranked drivers with share","A–C","Positive · negative · unexplained remainder"),
          C("DS-17","Change-ledger row","Before → after, materiality, owner","F","New · escalated · de-escalated · trust change"),
          C("DS-18","Materiality breakdown","Dimensions that drove the level","E","Critical · High · Medium · Low; placeholder label"),
          C("DS-19","Days-to-breach clock","Countdown to threshold","A, C, E","Days · hours · unavailable"),
          C("DS-20","Sub-theme drill tabs","Hold non-landing KPIs","A, C","Tab with count of exceptions"),
          C("DS-21","Definition panel","Definition, formula, source, roles, tolerance","D","Approved · draft version · changed"),
          C("DS-22","Signal board","Leading signals → predictions by segment","C (S-12)","5 segments; empty segment")
        ]},
        { n:"Work, decision and governance (25)", rows:[
          C("WK-01","Accountability strip","Severity · exposure · owner role · due · clock · evidence · next action","all","Complete · missing owner · overdue"),
          C("WK-02","Alert card","Compact alert in lists","A, E","Per incident state"),
          C("WK-03","Incident header","ID, title, state, severity, materiality, scope, times, label, source, commander, level","E","Per incident state"),
          C("WK-04","Ownership panel","Accept / reassign; shows AI draft separately","E","Unowned · draft · accepted · reassigned"),
          C("WK-05","Live-facts panel","Certified · preliminary · missing · external · assumptions · confidence · evidence","E","Per section empty / populated"),
          C("WK-06","Impact grid","11 impact dimensions, current vs forecast","E","Known · estimated · unknown"),
          C("WK-07","Timeline","Detection → closure approval events","E","Filter by type; audit link"),
          C("WK-08","Action table","Issue, severity, exposure, owner, due, status, escalation, next action","C, E","Sortable; overdue; blocked; awaiting closure"),
          C("WK-09","Action detail","One action with dependencies and evidence","E","Recommended · accepted · blocked · done · overdue"),
          C("WK-10","Evidence item","File, link or attestation","D, E","Submitted · accepted · rejected · superseded"),
          C("WK-11","Evidence uploader","Attach evidence with required metadata","D, E","Idle · uploading · error · done"),
          C("WK-12","Closure checklist","Criteria, recovery, residual risk, root cause, preventive action, approver","E","Incomplete · requested · approved · rejected"),
          C("WK-13","Decision card","Options, exposure, cost of delay, authority","E","Open · decided · deferred"),
          C("WK-14","Escalation clock","Time remaining at current level","A, E","On time · due soon · overdue"),
          C("WK-15","Escalation ladder","L0–L3 board","E (G-09)","Per level counts"),
          C("WK-16","Disclosure clock","Disclosure-review state and time","E","Not applicable · running · under review · approved [PH]"),
          C("WK-17","Communications panel","Executive / Entity / Core Group / Owner updates with approvals","E","Draft (AI or human) · pending approval · sent"),
          C("WK-18","War-room layout","Template E war-room arrangement","E","Commander view · member view · Owner view"),
          C("WK-19","Scenario builder","Assumptions and options","C (S-06)","Draft · run · published"),
          C("WK-20","Scenario comparison","Options vs base forecast","C (S-06)","2–4 options"),
          C("WK-21","Certification decision panel","Certify / with exception / request correction","D","Hidden outside scope · rationale required"),
          C("WK-22","Comment thread","Business explanation and challenge","D, E","—"),
          C("WK-23","Audit entry","Who, role, what, when, why, prior state","D, E","—"),
          C("WK-24","Workflow counter","Queue counts on workbenches (≤4)","E","—"),
          C("WK-25","Role-gated action bar","Primary actions per role","D, E","Controls not rendered without right")
        ]},
        { n:"AI (6)", rows:[
          C("AI-01","AI explanation panel","Eight separated sections","F (S-07)","Generating · ready · insufficient data"),
          C("AI-02","AI-generated label","Marks any AI text","all","—"),
          C("AI-03","Assistant entry point","'Explain', 'Validate', 'Draft brief', 'Draft routing'","all","Available · not available in scope"),
          C("AI-04","Human-decision-required block","States the decision, authority role and due","E, F","Open · decided"),
          C("AI-05","AI recommendation card","Recommendation, rationale, confidence","E","Draft · accepted by human · dismissed"),
          C("AI-06","Validation result","Consistency and completeness check","D, E","Pass · warnings · fail; 'advisory' label")
        ]},
        { n:"Briefing (4)", rows:[
          C("BR-01","Brief section","Structured statements with provenance","F","Draft · released"),
          C("BR-02","Source citation chip","Links a statement to its KPI or record","F","Available · restricted · stale"),
          C("BR-03","Pack builder","Assemble Core Group briefing pack","F (G-10)","Draft · in review · released"),
          C("BR-04","Inquiry log row","Question → answer → status","F","Open · answered · escalated")
        ]},
        { n:"System states and feedback (9)", rows:[
          C("SY-01","Loading skeleton","Layout-faithful loading","all","—"),
          C("SY-02","Empty / no data","Explains absence","all","—"),
          C("SY-03","Partial-data banner","Lists missing scope","all","—"),
          C("SY-04","Stale indicator","Age of data","all","—"),
          C("SY-05","Source-unavailable panel","Source outage","all","—"),
          C("SY-06","Forecast-unavailable panel","Forecast outage","A, C","—"),
          C("SY-07","Restricted panel","Least-privilege message","all","—"),
          C("SY-08","Error panel","Unexpected failure with retry","all","—"),
          C("SY-09","Confirmation / toast","Confirms audited writes","all","Success · failure")
        ]}
      ],
      tokens: [
        {n:"Navy", h:"#0F1E3A", u:"Navigation, hierarchy, certified"},
        {n:"Teal", h:"#0B6E79", u:"Neutral analytics, preliminary, external"},
        {n:"Green", h:"#1E7B4B", u:"On track, improving"},
        {n:"Amber", h:"#A66300", u:"Attention, deteriorating, unowned"},
        {n:"Red", h:"#B42318", u:"Material breach, critical exposure only"},
        {n:"Purple", h:"#5B3FA0", u:"Forecast and scenario only"},
        {n:"Grey", h:"#6B7380", u:"Pending, stale, unavailable, restricted"},
        {n:"Ink", h:"#1B2433", u:"Body text"},
        {n:"Base", h:"#F7F8FA", u:"Light neutral ground"},
        {n:"Rule", h:"#CDD3DB", u:"Borders and dividers"}
      ]
    };
  }
}

return Component;
});
