  // [KPI, scope, justification, verdict] → shown as subtext under the verdict on cards and in table Status cells
  var BY = {};
  LIST.forEach(function (e) { BY[e[0] + "@" + e[1]] = e; });
  var VERD = /^(?:[✓▲▼■◇] )?(On track|Improving|Declining|Intervention required|Breached|Forecast breach|Critical)$/;
  function txt(c) { return c == null ? "" : typeof c === "object" ? (c.t || "") : String(c); }
  function ent(s) {
    var P = typeof DCTData !== "undefined" && DCTData.plant; if (!P) return null;
    var kids = (P.children || {}).Group || [];
    for (var i = 0; i < kids.length; i++) if (String(s || "").indexOf(P.scopes[kids[i]]) >= 0) return kids[i];
    return null;
  }
  function find(id, scope, shownV) {
    var e = BY[id + "@" + scope]; if (!e) return null;
    var m = VERD.exec(String(shownV || "").trim()), v = m ? (m[1] === "Critical" ? "Intervention required" : m[1]) : "";
    return v === e[3] ? e[2] : null;   // never show a justification written for a different verdict
  }
  function attach(p) {
    (p.kpis || []).forEach(function (k) { var w = find(k.id, k.scope || ent(k.name) || "Group", k.bs); if (w) k.why = w; });
    var walk = function (o) {
      if (Array.isArray(o)) { o.forEach(walk); return; }
      if (!o || typeof o !== "object") return;
      if (o.type === "kpis" && Array.isArray(o.items)) o.items.forEach(function (k) { var w = find(k.id, k.scope || ent(k.name) || "Group", k.bs); if (w) k.why = w; });
      if (o.type === "table" && o.cols && o.rows) {
        var si = -1; o.cols.forEach(function (c, i) { if (/^(Status|Business status)$/.test(c)) si = i; });
        if (si > 0) o.rows.forEach(function (r) {
          var a = Array.isArray(r) ? r : r && r.c; if (!a || !VERD.test(txt(a[si]).trim())) return;
          var id = (txt(a[0]).match(/[A-Z]{3}-\d{3}/g) || []).pop(); if (!id) return;
          var w = find(id, ent(txt(a[1]) + " " + (o.title || "")) || "Group", txt(a[si])); if (!w) return;
          a[si] = Object.assign(typeof a[si] === "object" ? a[si] : {t: txt(a[si])}, {sub: w});
        });
      }
      Object.keys(o).forEach(function (k) { if (k !== "kpis" && o[k] && typeof o[k] === "object") walk(o[k]); });
    };
    Object.keys(p).forEach(function (k) { if (k !== "kpis" && k !== "equiv" && k !== "access") walk(p[k]); });
    return p;
  }
  return {list: LIST, attach: attach, find: find};
