// Collects every verdict shown on an Owner screen (KPI card status chips and table Status columns),
// with the values displayed next to it. Used by tools/build_verdicts.js.
const {load} = require("./owner_pages.js");
const SCREENS = {"P2-O01-EnterpriseHealth": "enterprise_overview", "P2-G08o-OwnerTrust": "data_assurance", "P2-O02-ChangeReport": "early_warning",
  "P2-O03-CashLiquidity": "cash_and_liquidity", "P2-O09-Operations": "operational_performance", "P2-O04-Capex": "capital_projects",
  "P2-O05-Risk": "risk_compliance_ehs", "P2-O06-Decisions": "actions_and_escalations", "P2-O08-WarRoom": "actions_and_escalations",
  "P2-O07-Brief": "ai_insights", "P2-S04-Alert": "actions_and_escalations", "P2-S05-Case": "actions_and_escalations",
  "P2-S07-AIExplain": "ai_insights", "P2-S09-Contribution": "enterprise_overview", "P2-S10-OpsImpact": "operational_performance",
  "P2-S11-CashExposure": "cash_and_liquidity", "P2-S08o-Evidence": "actions_and_escalations", "P2-S03o-KPIDetail": "kpi_detail"};
const VERD = /^(?:[✓▲▼■◇] )?(On track|Improving|Declining|Intervention required|Breached|Forecast breach|Critical)$/;
const txt = (c) => c == null ? "" : typeof c === "object" ? (c.t || "") : String(c);
const slug = (s) => String(s || "").toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
const entOf = (s) => /\bEntity A1\b/.test(s) ? "A1" : /\bEntity A2\b/.test(s) ? "A2" : null;
function tabOf(p, ref) {
  for (const t of p.tabs || []) if (t.has.some((h) => h === ref || ref.indexOf(h + ".") === 0 || h === ref.split(".")[0])) return t.n;
  return p.tab0 || "summary";
}
function collect(name, page) {
  const p = page || load(name), out = [], screen = SCREENS[name];
  if (!screen) return out;
  const cardTab = (id) => { for (const t of p.tabs || []) if (t.has.some((h) => h.indexOf("kpis:") === 0 && h.slice(5).split(",").indexOf(id) >= 0)) return t.n; return p.tab0 || (p.tabs && p.tabs[0] && p.tabs[0].n) || "summary"; };
  (p.kpis || []).forEach((k) => { if (!k.bs || !/^[A-Z]{3}-\d{3}$/.test(k.id || "")) return; const sc = k.scope || entOf(k.name) || "Group";
    out.push({where: "card", screen, section: slug(cardTab(k.id)), kpi_id: k.id, scope: sc, name: k.name, verdict: k.bs, v: k.v, u: k.u, plan: k.plan, "var": k["var"], tr: k.tr}); });
  const walk = (o, ref, title) => {
    if (Array.isArray(o)) return o.forEach((x, i) => walk(x, ref + "." + i, title));
    if (!o || typeof o !== "object") return;
    if (o.type === "kpis" && Array.isArray(o.items)) o.items.forEach((k) => { if (!k.bs || !/^[A-Z]{3}-\d{3}$/.test(k.id || "")) return;
      out.push({where: "card", screen, section: slug(o.title || title), kpi_id: k.id, scope: k.scope || entOf(k.name) || "Group", name: k.name, verdict: k.bs, v: k.v, u: k.u, plan: k.plan, "var": k["var"], tr: k.tr}); });
    if (o.type === "table" && o.cols && o.rows) {
      const si = o.cols.findIndex((c) => /^(Status|Business status)$/.test(c));
      const vi = o.cols.findIndex((c) => /^Value/.test(c)), pi = o.cols.findIndex((c) => /^Plan|^Target/.test(c));
      if (si > 0) o.rows.forEach((r) => { const a = Array.isArray(r) ? r : r.c; const m = VERD.exec(txt(a[si]).trim()); if (!m) return;
        const id = (txt(a[0]).match(/[A-Z]{3}-\d{3}/g) || []).pop(); if (!id) return;
        out.push({where: "table", screen, section: slug(title), kpi_id: id, scope: entOf(txt(a[1]) + " " + (o.title || "")) || "Group", name: txt(a[1]), verdict: m[1] === "Critical" ? "Intervention required" : m[1],
          v: vi > 0 ? txt(a[vi]) : "", u: "", plan: pi > 0 ? txt(a[pi]) : "", "var": "", tr: ""}); });
    }
    for (const k in o) if (o[k] && typeof o[k] === "object") walk(o[k], ref, title);
  };
  Object.keys(p).forEach((k) => { if (["kpis", "equiv", "access"].indexOf(k) >= 0) return;
    if (k === "drill") (p.drill || []).forEach((d, i) => walk(d, "drill." + i, (p.tabs ? tabOf(p, "drill." + i) : d.n)));
    else walk(p[k], k, p.tabs ? tabOf(p, k) : (p.tab0 || "summary")); });
  return out;
}
module.exports = {collect, SCREENS};
if (require.main === module) { const all = []; Object.keys(SCREENS).forEach((n) => { try { all.push(...collect(n)); } catch (e) { console.log("ERR", n, e.message); } }); console.log(JSON.stringify(all, null, 0).replace(/\},\{/g, "},\n{")); }
