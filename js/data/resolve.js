/* Fills KPI cards, table rows and tiles on every page from DCTData (js/data/base-data.js),
   so a KPI's value, plan, status and trust come from one place. Runs in the browser and in Node. */
var DCTResolve = (function () {
  "use strict";
  var ID = /^[A-Z]{2,4}-\d{3}$/;
  var BIZ = {"On track": "✓ On track", "Improving": "▲ Improving", "Deteriorating": "▼ Deteriorating", "Intervention required": "■ Intervention required", "Breached": "■ Breached", "Forecast breach": "◇ Forecast breach", "—": "—"};
  var TRUST = {"Certified": ["◆ Certified", "◆"], "Certified with exception": ["◆ Certified · exception", "◆"], "Pending certification": ["◇ Pending certification", "◇"], "Reconciliation break": ["⊘ Reconciliation break", "⊘"], "System count": ["# System count", "#"], "Stale": ["◇ Stale", "◇"], "Missing": ["— Missing", "—"], "Restricted": ["Restricted", "—"]};
  var CARD = ["v", "u", "plan", "var", "tr", "fc", "bs", "ts", "prov", "cf", "cfWhy", "sp", "spp", "spx", "fb", "own"];

  function txt(c) { return c == null ? "" : (typeof c === "object" ? (c.t || "") : String(c)); }
  function baseScope(p) { return p.lens === "Entity" || /Entity A1/.test(p.scope || "") ? "A1" : "Group"; }
  function cardScope(p, k) { return k.scope || (/Plant 02/.test(k.name || "") ? "Plant02" : (/· A1\b|Entity A1/.test(k.name || "") ? "A1" : baseScope(p))); }
  function rowScope(p, b, measure) { return b.scope || (/Plant 02/.test(measure) ? "Plant02" : (/\bA1\b/.test(b.title || "") ? "A1" : baseScope(p))); }
  function tileScope(p, label) { return /Plant 02/.test(label) ? "Plant02" : (/\bA1\b/.test(label) ? "A1" : baseScope(p)); }
  function look(D, id, scope, at) { var e = D[id]; if (!e) return null; return (at && e[scope + "#" + at]) || e[scope] || null; }
  function display(r) { return r.val != null ? r.val : (r.v == null ? null : r.v + (r.u ? " " + r.u : "")); }

  function fillTable(p, b, D, at) {
    var cols = b.cols || [];
    (b.rows || []).forEach(function (row) {
      var a = Array.isArray(row) ? row : row.c; if (!a || !a.length) return;
      var id = txt(a[0]).trim(); if (!ID.test(id)) return;
      var r = look(D, id, rowScope(p, b, txt(a[1])), at); if (!r) return;
      cols.forEach(function (h, i) {
        if (i === 0) return;
        var set = null;
        if (/^Value$|Value$/.test(h)) set = display(r);
        else if (/^Plan · variance$/.test(h)) set = r.plan != null ? r.plan + (r["var"] ? " · " + r["var"] : "") : null;
        else if (/^(Plan|Target)$/.test(h)) set = r.plan != null ? r.plan : null;
        else if (/^(Status|Business status)$/.test(h)) set = r.bs ? (BIZ[r.bs] || r.bs) : null;
        else if (/^Trust$/.test(h)) set = r.ts ? (TRUST[r.ts] || [r.ts, r.ts])[b.trustShort ? 1 : 0] : null;
        if (set == null) return;
        if (a[i] && typeof a[i] === "object") a[i] = Object.assign({}, a[i], {t: set}); else a[i] = set;
      });
    });
  }
  function fillTiles(p, b, D, at) {
    (b.items || []).forEach(function (t) {
      var m = /^([A-Z]{2,4}-\d{3}) /.exec(txt(t.l)); if (!m) return;
      var r = look(D, m[1], tileScope(p, t.l), at); if (!r) return;
      if (t.v == null || t.v === "" || /\d/.test(String(t.v))) { var d = display(r); if (d != null) t.v = d; }
    });
  }
  function walk(p, o, D, at) {
    if (!o || typeof o !== "object") return;
    if (Array.isArray(o)) { o.forEach(function (x) { walk(p, x, D, at); }); return; }
    if (o.type === "table") fillTable(p, o, D, at);
    if (o.type === "tiles") fillTiles(p, o, D, at);
    Object.keys(o).forEach(function (k) { if (o[k] && typeof o[k] === "object") walk(p, o[k], D, at); });
  }

  return function (page) {
    var D = (typeof DCTData !== "undefined" && DCTData.kpi) || null;
    if (!page || !D) return page;
    var p = JSON.parse(JSON.stringify(page));
    var at = p.dataAt || "";
    (p.kpis || []).forEach(function (k) {
      if (!ID.test(k.id || "")) return;
      var r = look(D, k.id, cardScope(p, k), at); if (!r) return;
      CARD.forEach(function (f) { if (r[f] != null) k[f] = r[f]; });
      if (r.v == null && r.val != null) { k.v = r.val; k.u = ""; }
    });
    Object.keys(p).forEach(function (k) { if (k !== "kpis" && p[k] && typeof p[k] === "object") walk(p, p[k], D, at); });
    return p;
  };
})();
if (typeof module !== "undefined" && module.exports) module.exports = DCTResolve;
