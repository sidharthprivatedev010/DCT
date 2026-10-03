DCLite.register("P1-06-Permissions", "\n\n<div class=\"pg\">\n  <a class=\"back\" href=\"Main.dc.html\">← Pack index</a>\n  <div class=\"top\">\n    <div>\n      <div class=\"eyebrow\">Phase 1 · Deliverable 06 of 10</div>\n      <h1>Role visibility and action-permission matrix</h1>\n      <p class=\"q\">Least privilege by default. Visibility answers \"what data can this role see\"; action rights answer \"what can this role do\". The lens never widens either. AI inherits the requester's scope and holds no action rights.</p>\n    </div>\n    <div class=\"chips\">\n      <span class=\"chip nav\">DRAFT v0.1 · FOR APPROVAL</span>\n      <span class=\"chip syn\">AUTHORITY LIMITS: PLACEHOLDER (DoA)</span>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>6a · Visibility (data scope)</h2>\n    <p class=\"sub\">Full = all entities. Own = own entity only. Domain = assigned function within own entity. Assigned = only items assigned to the user. Summary = aggregated, no transaction rows. Material = only items at or above the materiality threshold. — = not rendered (D-12).</p>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:210px repeat(11,minmax(0,1fr))\"><div>Information domain</div>\n        <div class=\"v\">OWN</div><div class=\"v\">CGE</div><div class=\"v\">ENX</div><div class=\"v\">FNL</div><div class=\"v\">MOC</div><div class=\"v\">ANL</div><div class=\"v\">ACO</div><div class=\"v\">INC</div><div class=\"v\">ASR</div><div class=\"v\">ADM</div><div class=\"v\">AI</div></div>\n      <sc-for list=\"{{vis}}\" as=\"r\" hint-placeholder-count=\"12\">\n        <div class=\"tr\" style=\"grid-template-columns:210px repeat(11,minmax(0,1fr))\"><div style=\"font-weight:600;color:#0F1E3A\">{{r.d}}</div>\n          <div class=\"v\">{{r.c0}}</div><div class=\"v\">{{r.c1}}</div><div class=\"v\">{{r.c2}}</div><div class=\"v\">{{r.c3}}</div><div class=\"v\">{{r.c4}}</div><div class=\"v\">{{r.c5}}</div><div class=\"v\">{{r.c6}}</div><div class=\"v\">{{r.c7}}</div><div class=\"v\">{{r.c8}}</div><div class=\"v\">{{r.c9}}</div><div class=\"v\">{{r.c10}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>6b · Action permissions</h2>\n    <div class=\"key\">\n      <div><span class=\"k\" style=\"background:#0F1E3A;color:#fff\">Yes</span>Permitted</div>\n      <div><span class=\"k\" style=\"box-shadow:inset 0 0 0 2px #0F1E3A\">Scope</span>Only within assigned scope or authority</div>\n      <div><span class=\"k\" style=\"background:#E3E7ED\">Req</span>May request or recommend only</div>\n      <div><span class=\"k\" style=\"box-shadow:inset 0 0 0 1px #6B7686\">Draft</span>AI drafts for human acceptance</div>\n      <div><span class=\"k\" style=\"color:#6B7380\">—</span>Not permitted; control not rendered</div>\n    </div>\n    <div class=\"tbl\">\n      <div class=\"tr th\" style=\"grid-template-columns:44px 1fr repeat(11,64px)\"><div>#</div><div>Action</div>\n        <div class=\"m\">OWN</div><div class=\"m\">CGE</div><div class=\"m\">ENX</div><div class=\"m\">FNL</div><div class=\"m\">MOC</div><div class=\"m\">ANL</div><div class=\"m\">ACO</div><div class=\"m\">INC</div><div class=\"m\">ASR</div><div class=\"m\">ADM</div><div class=\"m\">AI</div></div>\n      <sc-for list=\"{{acts}}\" as=\"r\" hint-placeholder-count=\"26\">\n        <div class=\"tr\" style=\"grid-template-columns:44px 1fr repeat(11,64px)\"><div class=\"id\">{{r.n}}</div><div>{{r.d}}</div>\n          <div class=\"m {{r.k0}}\">{{r.c0}}</div><div class=\"m {{r.k1}}\">{{r.c1}}</div><div class=\"m {{r.k2}}\">{{r.c2}}</div><div class=\"m {{r.k3}}\">{{r.c3}}</div><div class=\"m {{r.k4}}\">{{r.c4}}</div><div class=\"m {{r.k5}}\">{{r.c5}}</div><div class=\"m {{r.k6}}\">{{r.c6}}</div><div class=\"m {{r.k7}}\">{{r.c7}}</div><div class=\"m {{r.k8}}\">{{r.c8}}</div><div class=\"m {{r.k9}}\">{{r.c9}}</div><div class=\"m {{r.k10}}\">{{r.c10}}</div></div>\n      </sc-for>\n    </div>\n  </div>\n\n  <div class=\"sec\">\n    <h2>6c · Hard governance rules (enforced in UI and service)</h2>\n    <div style=\"display:grid;grid-template-columns:repeat(auto-fill,minmax(560px,1fr));gap:10px\">\n      <sc-for list=\"{{rules}}\" as=\"r\" hint-placeholder-count=\"10\">\n        <div class=\"rule\"><div class=\"id\">{{r.i}}</div><div><b style=\"color:#0F1E3A\">{{r.t}}</b><div class=\"muted\" style=\"font-size:13px;line-height:19px;margin-top:2px\">{{r.d}}</div></div></div>\n      </sc-for>\n    </div>\n  </div>\n</div>\n", function (DCLogic) {

class Component extends DCLogic {
  renderVals() {
    const V = (d, ...c) => { const o = {d}; c.forEach((v,k) => o["c"+k] = v); return o; };
    const map = {"Yes":"mY","Scope":"mS","Req":"mQ","Draft":"mD","Check":"mD","—":"mN"};
    const A = (i, d, ...c) => { const o = {n:String(i).padStart(2,"0"), d}; c.forEach((v,k) => { o["c"+k] = v; o["k"+k] = map[v] || "mN"; }); return o; };
    return {
      vis: [
        V("Lenses available","Owner (+ Core Group read: D-21)","Core Group + Entity (any in scope)","Entity (own)","Entity (domain)","Assurance views in scope","Scoped views","Entity (assigned)","Incident scope","Assurance views","None (admin console)","Requester's"),
        V("Group and portfolio KPIs","Full · summary","Full","—","—","Assigned KPIs","Assigned","—","Incident-linked","Review scope","—","Requester's"),
        V("Peer-entity comparison","Full","Full","— (D-16)","—","—","Assigned","—","—","Review scope","—","Requester's"),
        V("Entity and plant performance","Summary to plant","Full to plant; line on drill","Own, to line","Domain, to line","Assigned","Assigned","Assigned","Incident scope","Review scope","—","Requester's"),
        V("Transaction and reconciliation records","—","Counts only","Own","Domain","Assigned","Assigned","—","—","Review scope","Mappings metadata","Requester's"),
        V("Cash upstreaming and group treasury","Full","Full","Own obligation (C-05)","Finance domain","Assigned","Assigned","—","Incident-linked","Review scope","—","Requester's"),
        V("Alerts and cases","Material only","All material + entity summaries","Own","Domain","Linked to own KPIs","Assigned","Assigned","Incident","Review scope","—","Requester's"),
        V("Risk, compliance, EHS, audit findings","Material summary","Full","Own","Domain","—","Assigned","Assigned","Incident","Full in scope","—","Requester's"),
        V("Certification, lineage, evidence","Status only","Governance view","Own status","Domain status","Full in scope","Full in scope","Own evidence","Incident evidence","Full in scope","Mapping lineage only","Requester's"),
        V("War rooms","View all active (critical)","View and coordinate","Own entity","If member","—","If member","If member","Full","View","—","—"),
        V("Disclosure-review state","View","View","—","—","—","—","—","View","View","—","—"),
        V("AI explanations, briefs, Ask","Own scope","Own scope","Own scope","Own scope","Own scope","Own scope","Own scope","Own scope","Own scope","—","Never exceeds requester")
      ],
      acts: [
        A(1,"View and acknowledge alert (not ownership)","Yes","Yes","Scope","Scope","Scope","Scope","Scope","Scope","Yes","—","—"),
        A(2,"Accept ownership","—","Req","Scope","Scope","—","—","Scope","Scope","—","—","Draft"),
        A(3,"Assign supporting action","—","Scope","Scope","Scope","—","—","Req","Scope","—","—","Draft"),
        A(4,"Update status","—","Scope","Scope","Scope","—","Scope","Scope","Scope","—","—","—"),
        A(5,"Attach evidence","—","Scope","Scope","Scope","Scope","Scope","Scope","Scope","Scope","—","—"),
        A(6,"Run scenario","Req","Yes","Scope","Scope","—","Scope","—","Scope","—","—","Draft"),
        A(7,"Publish scenario as decision basis","—","Yes","Scope","—","—","—","—","Req","—","—","—"),
        A(8,"Escalate","Req","Yes","Req","Req","Req","Req","Req","Yes","Req","—","Draft"),
        A(9,"Open war room","Req","Yes","Req","—","—","—","—","Yes","—","—","—"),
        A(10,"Intervene in critical escalation","Yes","Req","—","—","—","—","—","—","—","—","—"),
        A(11,"Make permitted strategic decision","Scope","Scope","Scope","—","—","—","—","—","—","—","—"),
        A(12,"Request analysis","Yes","Yes","Yes","Yes","—","—","—","Yes","Yes","—","—"),
        A(13,"Draft executive update","—","Yes","Scope","Scope","—","—","—","Yes","—","—","Draft"),
        A(14,"Approve communication (Core Group / Owner update)","—","Yes","Scope","—","—","—","—","Req","—","—","—"),
        A(15,"Request closure","—","—","Req","Req","—","—","Req","Req","—","—","—"),
        A(16,"Approve or reject closure (D-06 tiers)","—","Scope","Scope","Scope","—","—","—","—","Req","—","Check"),
        A(17,"Reopen closed case","Req","Yes","Req","—","—","—","—","—","Yes","—","—"),
        A(18,"Certify KPI","—","—","—","—","Scope","—","—","—","—","—","Check"),
        A(19,"Certify with exception","—","—","—","—","Scope","—","—","—","—","—","Check"),
        A(20,"Request data correction","—","Req","Req","Req","Yes","Req","—","—","Req","—","Check"),
        A(21,"Approve KPI override (D-17)","—","—","—","—","Scope","—","—","—","Req","—","—"),
        A(22,"Maintain approved mappings / config","—","—","—","—","Req","—","—","—","—","Scope","—"),
        A(23,"Accept material risk","Scope","Scope","Req","—","—","—","—","Req","—","—","—"),
        A(24,"Approve disclosure (Disclosure Authority — PLACEHOLDER)","—","Req","—","—","—","—","—","Req","Req","—","—"),
        A(25,"Release daily Owner brief","—","Yes","—","—","—","—","—","—","—","—","Draft"),
        A(26,"Maintain live facts in war room","—","Req","Req","Req","—","Req","—","Yes","—","—","Draft"),
        A(27,"Approve permitted local action within [DoA — PH] (v0.2)","—","—","Scope","Scope","—","—","—","—","—","—","—"),
        A(28,"Add business explanation or comment (v0.2)","—","Yes","Scope","Scope","Scope","Scope","Scope","Scope","Scope","—","Draft"),
        A(29,"Document action dependency (v0.2)","—","Scope","Scope","Scope","—","—","Scope","Scope","—","—","—"),
        A(30,"Maintain decisions log and communication drafts (v0.2)","—","Scope","—","—","—","—","—","Yes","—","—","Draft"),
        A(31,"Review, sample, challenge certification / controls / evidence / overrides / closure (v0.2)","—","Req","—","—","—","—","—","—","Yes","—","Check"),
        A(32,"Certify consolidated group-scope KPI (v0.2, D-22)","—","—","—","—","Scope","—","—","—","—","—","Check")
      ],
      rules: [
        {i:"GR-01", t:"AI has no approval authority", d:"AI cannot certify a KPI, approve a financial number, accept material risk, approve disclosure, close a material case or assign accountability. AI-originated items carry an 'AI draft' tag until a human accepts them. Approval controls are never pre-filled."},
        {i:"GR-02", t:"No self-approval of closure", d:"The action owner and the closure approver must be different users unless an explicit, audited authorisation exists."},
        {i:"GR-03", t:"Certification within scope only", d:"A certifier sees certification controls only for KPIs and nodes assigned to them. For leadership KPIs, the metric owner may not also certify (D-02)."},
        {i:"GR-04", t:"Administrator has no business authority", d:"A mapping or config change moves the affected KPIs to 'Pending certification' and writes an audit entry. Admin has no certify, accept-risk or close controls."},
        {i:"GR-05", t:"Assurance is read-only on business data", d:"The Assurance Reviewer may comment, challenge, sample and reopen, but never edits values, actions or evidence."},
        {i:"GR-06", t:"Lens never widens scope", d:"Switching lens changes depth and layout only. Entitlement scope is applied before render, search, AI and notification."},
        {i:"GR-07", t:"Core Group cannot alter source facts", d:"Core Group coordinates, routes, escalates and governs. Facts change only by source correction and re-certification."},
        {i:"GR-08", t:"Owner visibility is gated by materiality", d:"Push to the Owner only at or above [OWNER THRESHOLD — PLACEHOLDER]. Pull below the threshold is labelled 'Below materiality threshold' (D-04)."},
        {i:"GR-09", t:"No leakage through restricted states", d:"Restricted items show no values, counts, names or titles outside parent scope. Search and Ask never confirm that they exist (D-12)."},
        {i:"GR-10", t:"Every write is audited", d:"Acceptance, decision, certification, override, escalation, evidence, communication approval, closure and reopen are recorded with role, time, rationale and prior state."}
      ]
    };
  }
}

return Component;
});
