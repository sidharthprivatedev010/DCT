/* Fills KPI cards, table rows and tiles on every page from DCTData (js/data/base-data.js),
   so a KPI's value, plan, status and trust come from one place. Runs in the browser and in Node. */
var DCTResolve = (function () {
  "use strict";
  var ID = /^[A-Z]{2,4}-\d{3}$/;
  var BIZ = {"On track": "✓ On track", "Improving": "▲ Improving", "Deteriorating": "▼ Deteriorating", "Intervention required": "■ Intervention required", "Breached": "■ Breached", "Forecast breach": "◇ Forecast breach", "—": "—"};
  var TRUST = {"Certified": ["◆ Certified", "◆"], "Certified with exception": ["◆ Certified · exception", "◆"], "Pending certification": ["◇ Pending certification", "◇"], "Reconciliation break": ["⊘ Reconciliation break", "⊘"], "System count": ["# System count", "#"], "Stale": ["◇ Stale", "◇"], "Missing": ["— Missing", "—"], "Restricted": ["Restricted", "—"]};
  var CARD = ["v", "u", "plan", "var", "tr", "fc", "bs", "ts", "prov", "cf", "cfWhy", "sp", "spp", "spx", "fb", "own"];

  function baseScope(p) { return p.lens === "Entity" || /Entity A1/.test(p.scope || "") ? "A1" : "Group"; }
  function plantOf(s) { var m = /Plant (\d\d)/.exec(s || ""); return m ? "Plant" + m[1] : null; }
  function entOf(s) { var m = /(?:Entity |· |\b)(A[12])\b/.exec(s || ""); return m ? m[1] : null; }
  function cardScope(p, k) { return k.scope || plantOf(k.name) || entOf(k.name) || baseScope(p); }
  function rowScope(p, b, measure) { return b.scope || plantOf(measure) || entOf(measure) || entOf(b.title) || baseScope(p); }
  function tileScope(p, label) { return plantOf(label) || entOf(label) || baseScope(p); }
  function txt(c) { return c == null ? "" : (typeof c === "object" ? (c.t || "") : String(c)); }
  function look(D, id, scope, at) { var e = D[id]; if (!e) return null; return (at && e[scope + "#" + at]) || e[scope] || null; }
  function display(r) { return r.val != null ? r.val : (r.v == null ? null : r.v + (r.u ? " " + r.u : "")); }

  /* Plant model (DCTData.plant, written by data/plant-model/export_to_prototype.py).
     Hierarchy Group → Entity A1/A2 → Plants 01–06. Every plant KPI on a page links to that lens's
     KPI detail page (S-03e Entity, S-03 Core Group, S-03o Owner), which shows the roll-up. */
  var DETAIL = {"Entity": "P2-S03e-KPIDetail.html", "Core Group": "P2-S03-KPIDetail.html", "Owner": "P2-S03o-KPIDetail.html"};
  function PM() { return (typeof DCTData !== "undefined" && DCTData.plant) || null; }
  function canon(id) { var P = PM(); return P && ((P.alias || {})[id] || id); }
  function isPlantKpi(id) { var P = PM(); return !!(P && P.kpi[canon(id)]); }
  function rootOf(lens) { return lens === "Entity" ? "A1" : "Group"; }
  function detailHref(id, scope, lens) { return (DETAIL[lens] || DETAIL.Entity) + "?kpi=" + encodeURIComponent(id) + "&scope=" + encodeURIComponent(scope || rootOf(lens)); }
  // CURK: the KPI being laid out. Its children are only those the model has a value for
  // (entity-only KPIs such as EBITDA stop at the entity; plant KPIs go down to plants).
  var CURK = null;
  function kidsAll(s) { var P = PM(); return (P.children || {})[s] || []; }
  function kidsOf(s) { return kidsAll(s).filter(function (c) { return !CURK || (CURK.val && CURK.val[c]); }); }
  function parentOf(s) { var P = PM(), c = P.children || {}; for (var k in c) if (c[k].indexOf(s) >= 0) return k; return null; }
  // Scope order for tables: each entity's plants, then the entity; the root last.
  function layout(root) { var out = []; kidsOf(root).forEach(function (c) { if (kidsOf(c).length) out = out.concat(layout(c)); else out.push(c); }); out.push(root); return out; }
  function lastVal(k, s) { var v = k.val[s]; return v ? v[v.length - 1] : null; }
  function fmtV(k, v) { if (v == null) return "—"; if (typeof v === "string") return v; return Number(v).toLocaleString("en-US", {minimumFractionDigits: k.dp, maximumFractionDigits: k.dp}); }
  function plantTab(p, ids) {
    var P = PM(), root = rootOf(p.lens); CURK = null; var sc = layout(root), sn = function (s) { return P.scopes[s]; };
    var cols = ["KPI", "Measure"].concat(sc.map(function (s) { return kidsOf(s).length ? sn(s) + " (Σ)" : sn(s); })).concat(["Unit", "How rolled up"]);
    var rows = ids.map(function (id) {
      var k = P.kpi[canon(id)];
      var how = (k.level === "entity" ? "Entity inputs → " : "") + (k.fields.length > 1 || /÷|\/|×/.test(k.formula || "") ? "recomputed from summed inputs" : (k.rules[k.fields[0]] === "MIN" ? "lowest of children" : "sum of children"));
      how = how.charAt(0).toUpperCase() + how.slice(1);
      return {c: [{t: id, h: detailHref(id, root, p.lens)}, k.name].concat(sc.map(function (s) { if (!k.val[s]) return "—"; return kidsAll(s).length ? {t: fmtV(k, lastVal(k, s)), h: detailHref(id, s, p.lens), b: true} : {t: fmtV(k, lastVal(k, s)), h: detailHref(id, s, p.lens)}; }))
        .concat([k.unit || "count", how])};
    });
    var title = root === "Group" ? "Plant → entity → Group" : sn(root) + " by plant";
    // "—" = the KPI has no value at that level (entity-only inputs such as finance or governance)
    return {n: "Roll-up · " + P.period, blocks: [{type: "table", title: title + " · " + P.periodL, cols: cols, rows: rows, minW: 300 + 90 * sc.length,
      ask: root === "Group" ? "Which entity and which plant drive each Group number?" : "Which plant is driving each entity number?",
      cap: "Parent values (Σ) are recalculated from their children's summed inputs, never averaged. Click any value for its calculation."}]};
  }

  function fillTable(p, b, D, at) {
    var cols = b.cols || [];
    (b.rows || []).forEach(function (row) {
      var a = Array.isArray(row) ? row : row.c; if (!a || !a.length) return;
      var id = txt(a[0]).trim();
      if (!ID.test(id)) { var m2 = /^([A-Z]{3}-\d{3}) /.exec(txt(a[1])); if (!m2 || !isPlantKpi(m2[1])) return; id = m2[1]; if (typeof a[1] !== "object") a[1] = {t: txt(a[1]), h: detailHref(id, rowScope(p, b, ""), p.lens)}; }
      var sc0 = rowScope(p, b, txt(a[1]));
      if (isPlantKpi(id) && typeof a[0] !== "object" && txt(a[0]).trim() === id) a[0] = {t: id, h: detailHref(id, sc0, p.lens)};
      var r = look(D, id, sc0, at); if (!r) return;
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
  /* Model-bound blocks: a table with kcols {"Column header": "KPI-ID"} or a bars block with kpi "KPI-ID"
     takes each row's scope from its label (Plant NN, Entity A1/A2, Group/Business A) and its value from the model. */
  function labelScope(t) { return /^(Group|Business A)\b/.test(t || "") ? "Group" : (plantOf(t) || entOf(t)); }
  function modelCell(id, scope) {
    var P = PM(); if (!P || !scope) return null; var k = P.kpi[canon(id)]; if (!k || !k.val[scope]) return null;
    var D = (typeof DCTData !== "undefined" && DCTData.kpi[id] && DCTData.kpi[id][scope]) || {};
    var mark = {"On track": "✓ ", "Improving": "▲ ", "Deteriorating": "▼ ", "Intervention required": "▼ "}[D.bs] || "";
    if (typeof lastVal(k, scope) === "string") return {v: 0, t: lastVal(k, scope), raw: lastVal(k, scope)};
    return {v: lastVal(k, scope), t: mark + fmtV(k, lastVal(k, scope)) + (k.unit && !/^%/.test(k.unit) ? " " + k.unit : (/^%/.test(k.unit) ? "%" : "")), raw: fmtV(k, lastVal(k, scope)) + (k.unit ? " " + k.unit : "")};
  }
  function fillModel(p, b) {
    if (b.type === "table" && b.kcols) {
      var cols = b.cols || [];
      (b.rows || []).forEach(function (row) {
        var a = Array.isArray(row) ? row : row.c; if (!a) return;
        var sc = labelScope(txt(a[0]));
        cols.forEach(function (h, i) {
          var id = b.kcols[h]; if (!id) return; var m = modelCell(id, sc); if (!m) return;
          var cell = {t: m.t, h: detailHref(id, sc, p.lens)};
          if (a[i] && typeof a[i] === "object") cell = Object.assign({}, a[i], cell);
          a[i] = cell;
        });
      });
    }
    if (b.type === "bars" && b.kpi) {
      (b.rows || []).forEach(function (r) { var m = modelCell(b.kpi, labelScope(txt(r.l))); if (m) { r.v = m.v; r.d = m.raw; } });
    }
  }
  function fillTiles(p, b, D, at) {
    (b.items || []).forEach(function (t) {
      var m = /^([A-Z]{2,4}-\d{3}) /.exec(txt(t.l)); if (!m) return;
      var r = look(D, m[1], tileScope(p, t.l), at); if (!r) return;
      if (isPlantKpi(m[1]) || t.v == null || t.v === "" || /\d/.test(String(t.v))) { var d = display(r); if (d != null) t.v = d; }
    });
  }
  function walk(p, o, D, at) {
    if (!o || typeof o !== "object") return;
    if (Array.isArray(o)) { o.forEach(function (x) { walk(p, x, D, at); }); return; }
    fillModel(p, o);
    if (o.type === "table") fillTable(p, o, D, at);
    if (o.type === "tiles") fillTiles(p, o, D, at);
    Object.keys(o).forEach(function (k) { if (o[k] && typeof o[k] === "object") walk(p, o[k], D, at); });
  }

  /* KPI detail (S-03e / S-03 / S-03o) built from the plant model: ?kpi=ID&scope=Group|A1|A2|PlantNN.
     Shows the selected scope with its children (or, for a plant, with its parent), the roll-up chain,
     the calculation from plant inputs upward, each child's effect, monthly trend, definition, lineage, trust. */
  function kpiDetail(page, search) {
    var P = PM(); if (!P || !page) return page;
    var q = {}; String(search || "").replace(/^\?/, "").split("&").forEach(function (x) { var kv = x.split("="); if (kv[0]) q[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || ""); });
    var id = q.kpi, cid = canon(id), k = id && P.kpi[cid]; if (!k) return page;
    var lens = page.lens || "Entity", root = rootOf(lens); CURK = k;
    var inTree = function (s) { for (var x = s; x; x = parentOf(x)) if (x === root) return true; return false; };
    var scope = P.scopes[q.scope] && inTree(q.scope) ? q.scope : root;      // Entity lens stays inside Entity A1
    var kids = kidsOf(scope), isLeaf = !kids.length, par = parentOf(scope);
    var focus = isLeaf && par && inTree(par) && k.val[par] ? par : scope, fk = kidsOf(focus);   // the parent whose roll-up is shown
    var sn = function (s) { return P.scopes[s]; }, H = function (s) { return detailHref(id, s, lens); };
    var nf = function (v, dp) { return Number(v).toLocaleString("en-US", {minimumFractionDigits: dp, maximumFractionDigits: dp}); };
    var raw = function (v) { return typeof v !== "number" ? String(v == null ? "—" : v) : nf(v, Math.round(v) === v ? 0 : 1); };
    var last = function (s) { return lastVal(k, s); }, unit = k.unit || "count", U = function (v) { return v == null ? "—" : typeof v === "string" ? v : nf(v, k.dp) + (k.unit ? " " + k.unit : ""); };
    var meets = function (v) { return k.target == null || typeof v !== "number" ? null : (k.better === "up" ? v >= k.target : v <= k.target); };
    var D = (typeof DCTData !== "undefined" && DCTData.kpi[id]) || {};
    var roll = k.fields.map(function (f) { return k.rules[f]; }).filter(function (x, i, a) { return a.indexOf(x) === i; }).join("/");
    var ratio = k.fields.length > 1 || /÷|\//.test(k.formula);
    var level = function (s) { return s === "Group" ? "Group" : (kidsAll(s).length ? "Entity" : "Plant"); };
    var inpNote = function (s) { return k.fields.map(function (f) { return f + " " + raw((k.inp[s] || {})[f]); }).join("\n"); };
    var alias = cid !== id ? " (alias of " + cid + ")" : "";
    var p = JSON.parse(JSON.stringify(page));
    p.title = "KPI Detail and Lineage · " + id + " " + k.name + " · " + sn(scope);
    p.trust = "Built bottom-up from plant data · " + P.periodL;
    var path = []; for (var x = scope; x && inTree(x); x = parentOf(x)) path.unshift(x);
    p.crumbs = path.map(function (s) { return {l: sn(s), h: H(s)}; }).concat([{l: id}]);
    var own = (page.kpis && page.kpis[0] && page.kpis[0].own) || "Metric Owner (role)";
    p.kpis = [scope].concat(isLeaf ? [par] : kids).filter(function (s) { return s && inTree(s); }).slice(0, 6)
      .map(function (s) { return {id: id, name: k.name + " · " + sn(s), scope: s, href: H(s), own: own}; });
    p.trustbox = {type: "tiles", title: "How this number is built", tileW: 200, items: [
      {l: "Formula", v: k.formula}, {l: "Level", v: level(scope) + (kids.length ? " · rolled up from " + kids.map(sn).join(" + ") : " (atomic input level)")},
      {l: "Roll-up", v: k.fields.map(function (f) { return f + " = " + k.rules[f]; }).join(" · ")},
      {l: "Target", v: k.target == null ? "None set" : (k.better === "up" ? "≥ " : "≤ ") + nf(k.target, k.dp) + " " + (k.unit || "")},
      {l: "Period", v: P.periodL}, {l: "Source", v: P.src}]};
    // Dominant: the roll-up of the focus parent (children → parent)
    p.dominant = {type: "chain", kl: level(focus).toUpperCase() + " ROLL-UP", title: id + " " + k.name + " · " + fk.map(sn).join(" + ") + " → " + sn(focus) + " · " + P.periodL,
      ask: "Which " + (level(focus) === "Group" ? "entities" : "plants") + " make up this number, and which one is pulling it?",
      cap: ratio ? "Not an average: inputs are " + (roll === "SUM" ? "summed" : roll) + " and the formula is applied once to the totals." : "The parent value is the " + (roll === "MIN" ? "lowest" : "sum") + " of its children.",
      nodes: fk.map(function (s) {
        var v = last(s), m = meets(v), tr = (D[s] || {}).tr || "";
        return {n: sn(s), s: U(v), note: inpNote(s) + "\n" + (m == null ? "" : (m ? "Meets target" : "Misses target")) + (tr ? " · " + tr : ""), k: s === scope || m === false ? "hi" : ""};
      }).concat([{n: fk.length ? sn(focus) + " (" + roll + " of " + (level(focus) === "Group" ? "entities" : "plants") + ")" : sn(focus) + " (entity-level inputs)", s: U(last(focus)), note: inpNote(focus) + "\n" + ((D[focus] || {}).bs || ""), k: focus === scope ? "hi" : ""}])};
    // Every plant under the focus, grouped by entity
    var leaves = layout(focus === "Group" ? "Group" : focus).filter(function (s) { return !kidsOf(s).length; });
    var bars = leaves.map(function (s) { return {l: sn(s) + (focus === "Group" && level(s) === "Plant" ? " · " + sn(parentOf(s)) : ""), v: last(s), d: U(last(s)), hi: meets(last(s)) === false || s === scope, note: meets(last(s)) == null ? "" : (meets(last(s)) ? "meets target" : "misses target")}; })
      .concat(layout(focus).filter(function (s) { return kidsOf(s).length; }).map(function (s) { return {l: sn(s) + " (rolled up)", v: last(s), d: U(last(s)), note: level(s).toLowerCase()}; }));
    // Calculation: plant inputs, entity sums, Group sum — the whole chain
    var cols = ["Scope", "Level"].concat(k.fields).concat([id + " (" + unit + ")"]);
    var rows = layout(focus).map(function (s) {
      var parent = kidsOf(s).length;
      return {c: [{t: parent ? sn(s) + " = " + roll + " of " + kidsOf(s).map(sn).join(" + ") : sn(s), h: H(s)}, level(s)].concat(k.fields.map(function (f) { return raw((k.inp[s] || {})[f]); })).concat([fmtV(k, last(s))]), hi: s === scope || !!parent};
    });
    var share = [level(fk[0] || scope)].concat(k.fields.filter(function (f) { return k.rules[f] === "SUM"; }).map(function (f) { return "Share of " + f; }))
      .concat([id, sn(focus) + " without it", "Effect on " + sn(focus)]);
    var srows = fk.map(function (s) {
      var xv = k.excl[s], ok = typeof xv === "number" && typeof last(focus) === "number", eff = ok ? last(focus) - xv : 0;
      return {c: [{t: sn(s), h: H(s)}].concat(k.fields.filter(function (f) { return k.rules[f] === "SUM"; }).map(function (f) { var t = k.inp[focus][f]; return t ? nf(100 * k.inp[s][f] / t, 1) + "%" : "—"; }))
        .concat([U(last(s)), ok ? U(xv) : "—", ok ? (eff >= 0 ? "+" : "−") + nf(Math.abs(eff), k.dp) + (k.unit ? " " + k.unit : "") : "—"]), hi: s === scope};
    });
    var trendS = [focus].concat(fk).map(function (s, i) { return {l: sn(s), v: k.val[s], tag: "CERT", dash: i > 0}; });
    var trend = {type: "multi", title: id + " " + k.name + " · monthly · " + sn(focus) + " vs " + (level(focus) === "Group" ? "entities" : "plants") + " · " + unit, x: P.x, series: trendS,
      ask: "How has each child moved, and how has that moved " + sn(focus) + "?", cap: "Solid: " + sn(focus) + ", recalculated each month from its children's inputs. Dashed: children."};
    if (k.target != null) { trend.base = k.target; trend.baseL = "Target " + nf(k.target, k.dp); }
    var mrows = layout(focus).map(function (s) { return [sn(s)].concat(k.val[s].map(function (v) { return fmtV(k, v); })); });
    var tr = function (s) { var r = D[s] || {}; return [sn(s), level(s), r.ts || "—", r.prov || "—"]; };
    p.drill = [
      {n: fk.length ? (level(focus) === "Group" ? "By entity and plant" : "By plant") : "Calculation", blocks: [{type: "bars", title: id + " " + k.name + " by plant" + (focus === "Group" ? " and entity" : "") + " · " + P.periodL, rows: bars, ask: "Which plant is furthest from target?"},
        {type: "table", title: "Calculation · plant inputs → " + (focus === "Group" ? "entity → Group" : sn(focus)) + " · " + P.periodL, cols: cols, rows: rows, minW: 640,
          ask: "How is each level calculated from the one below?", cap: "Plant rows are raw inputs. Each parent row " + (roll === "MIN" ? "takes the lowest of" : "sums") + " its children's inputs, then applies the same formula. Full trace: data/plant-model/kpi_calculations.csv"}]},
      {n: (level(fk[0] || scope) === "Entity" ? "Entity" : "Plant") + " contribution", blocks: [{type: "table", title: "How much each " + level(fk[0] || scope).toLowerCase() + " moves " + sn(focus) + " · " + P.periodL, cols: share, rows: srows,
        ask: "If this one performed like the others, where would " + sn(focus) + " be?", cap: "'Without it' recalculates " + sn(focus) + " from the other children's inputs. The effect column is how far this child moves the parent."}]},
      {n: "Monthly", blocks: [trend, {type: "table", title: id + " by scope and month · " + unit, cols: ["Scope"].concat(P.x), rows: mrows}]},
      {n: "Definition", blocks: [{type: "kv", title: "Definition (working assumption; catalogue definition pending approval)", rows: [["KPI", id + " " + k.name + alias], ["Formula", k.formula],
        ["Display unit", unit + (k.div !== 1 ? " (base value ÷ " + k.div + ")" : "")], ["Roll-up", k.fields.map(function (f) { return (k.rules[f] === "MIN" ? "lowest " : "Σ ") + f; }).join(", ") + " · plant → entity → Group, then the formula at each level"],
        ["Better direction", k.better === "up" ? "Higher is better" : k.better === "down" ? "Lower is better" : "Context only"], ["Methodology", "data/plant-model/Data-Model-Methodology.md"]]}]},
      {n: "Lineage", blocks: [{type: "chain", kl: "LINEAGE", title: "Plant source → plant inputs → entity → Group → screens", ask: "Where does this number come from?",
        nodes: [{n: "Plant sources", s: "[PLANT SYSTEMS — PH]", note: "Plants 01–06"}, {n: "Plant inputs", s: k.fields.length + " base measure(s)", note: k.fields.join("\n")},
          {n: "Plant " + id, s: "Formula per plant", note: k.formula}, {n: "Entity A1 · A2", s: roll + " of plant inputs", note: "Same formula on totals", k: scope.indexOf("A") === 0 ? "hi" : ""},
          {n: "Group", s: roll + " of entity inputs", note: "Same formula on totals", k: scope === "Group" ? "hi" : ""}, {n: "Screens", s: "Cards · roll-up tabs", note: "Click any value to return here"}]}]},
      {n: "Trust", blocks: [{type: "table", title: "Trust status by scope", cols: ["Scope", "Level", "Trust", "Provenance"], rows: layout(focus).map(tr)}]}
    ];
    var isText = typeof last(scope) === "string";
    p.drill = p.drill.filter(function (t) { return !(t.n.indexOf("contribution") > 0 && !fk.length); });
    if (isText) p.drill.forEach(function (t) { t.blocks = t.blocks.filter(function (b) { return b.type !== "bars" && b.type !== "multi"; }); });
    if (!fk.length) p.dominant.cap = level(focus) + "-level inputs: this KPI is not built from " + (level(focus) === "Entity" ? "plant" : "lower-level") + " data, so " + sn(focus) + " is its lowest level.";
    CURK = null;
    if (typeof document !== "undefined") document.title = (page.rid || "S-03") + " " + p.title;
    p.dataAt = ""; p.period = P.period + " (SYN)";
    if (cid !== "OPS-001") { delete p.actions; delete p.forecast; delete p.drivers; }  // the base page's actions and signals are about OPS-001 only
    return p;
  }

  var R = function (page) {
    var D = (typeof DCTData !== "undefined" && DCTData.kpi) || null;
    if (!page || !D) return page;
    var p = JSON.parse(JSON.stringify(page));
    var at = p.dataAt || "";
    (p.kpis || []).forEach(function (k) {
      if (!ID.test(k.id || "")) return;
      var cs = cardScope(p, k);
      if (isPlantKpi(k.id) && !k.href && DETAIL[p.lens]) k.href = detailHref(k.id, cs, p.lens);
      var r = look(D, k.id, cs, at); if (!r) return;
      CARD.forEach(function (f) { if (r[f] != null) k[f] = r[f]; });
      if (r.v == null && r.val != null) { k.v = r.val; k.u = ""; }
      if (isPlantKpi(k.id)) k.fb = r.fb || "";
    });
    // Trust header "N of M cards certified …" is recomputed from the cards actually shown
    if (/^\d+ of \d+ cards certified/.test(p.trust || "") && (p.kpis || []).length) {
      var ks = p.kpis.filter(function (k) { return ID.test(k.id || ""); }), cert = ks.filter(function (k) { return /^Certified/.test(k.ts || ""); });
      var other = ks.filter(function (k) { return !/^Certified/.test(k.ts || ""); }).map(function (k) { return k.id + " " + String(k.ts || "").toLowerCase(); });
      p.trust = cert.length + " of " + ks.length + " cards certified" + (other.length ? " · " + other.join(" · ") : "");
    }
    if (DETAIL[p.lens] && /^([EGO]-|S-(?!03))/.test(p.rid || "") && PM()) {
      var ids = [], add = function (id) { if (isPlantKpi(id) && ids.indexOf(id) < 0) ids.push(id); };
      (p.kpis || []).forEach(function (k) { add(k.id); });
      JSON.stringify(Object.assign({}, p, {access: null, equiv: null, kpis: null})).replace(/"(?:l":")?([A-Z]{3}-\d{3})[" ]/g, function (_, id) { add(id); });
      if (ids.length) { p.drill = (p.drill || []).slice(); p.drill.unshift(plantTab(p, ids)); }
    }
    Object.keys(p).forEach(function (k) { if (k !== "kpis" && p[k] && typeof p[k] === "object") walk(p, p[k], D, at); });
    return p;
  };
  R.kpiDetail = kpiDetail;
  return R;
})();
if (typeof module !== "undefined" && module.exports) module.exports = DCTResolve;
