/* R-01 KPI Reference: every KPI with its ID, formula, inputs and roll-up rule, and its value for the
   selected lens, scope and period. Built at render time from DCTData.plant (data/kpi-model).
   Three lens variants share this file: P2-R01o (Owner), P2-R01 (Core Group), P2-R01e (Entity).
   Selectors are links (?scope=&period=&set=&theme=&level=&source=&screen=), so every view can be bookmarked. */
(function () {
  var FILE = {"Owner": "P2-R01o-KPIReference", "Core Group": "P2-R01-KPIReference", "Entity": "P2-R01e-KPIReference"};
  var RID = {"Owner": "R-01 · Owner view", "Core Group": "R-01", "Entity": "R-01 · Entity view"};
  var ROLE = {"Owner": "Owner", "Core Group": "Core Group Executive", "Entity": "Entity Executive · Entity A1"};
  var SCOPES = {"Owner": ["Group", "A1", "A2", "Plant01", "Plant02", "Plant03", "Plant04", "Plant05", "Plant06"],
                "Core Group": ["Group", "A1", "A2", "Plant01", "Plant02", "Plant03", "Plant04", "Plant05", "Plant06"],
                "Entity": ["A1", "Plant01", "Plant02", "Plant03"]};   // C-05: an entity sees its own scope only
  var DETAIL = {"Owner": "P2-S03o-KPIDetail.html", "Core Group": "P2-S03-KPIDetail.html", "Entity": "P2-S03e-KPIDetail.html"};
  var RULE = {"SUM": "Σ", "MIN": "lowest", "SAME": "same value", "SQRT(Σσ²)": "√Σσ²"};

  function params() {
    var q = {};
    if (typeof location === "undefined") return q;
    String(location.search || "").replace(/^\?/, "").split("&").forEach(function (x) { var kv = x.split("="); if (kv[0]) q[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || ""); });
    return q;
  }
  function link(lens, st, over) {
    var o = Object.assign({}, st, over || {}), qs = [];
    ["scope", "period", "set", "theme", "level", "source", "screen"].forEach(function (k) { if (o[k] && o[k] !== DEF[k]) qs.push(k + "=" + encodeURIComponent(o[k])); });
    return FILE[lens] + ".html" + (qs.length ? "?" + qs.join("&") : "");
  }
  var DEF = {period: "P06", set: "lens", theme: "all", level: "all", source: "all", screen: ""};
  function fmt(k, v) {
    if (v == null) return "—";
    if (typeof v === "string") return v;
    return Number(v).toLocaleString("en-US", {minimumFractionDigits: k.dp, maximumFractionDigits: k.dp}) + (k.unit ? " " + k.unit : "");
  }
  function code(s) { var m = /^P[23]-([A-Z]\d+[a-z]?)-/.exec(s.file || ""); return m ? m[1].replace(/^([A-Z])(\d)/, "$1-$2") : (s.rid || ""); }

  function build(lens) {
    var D = (typeof DCTData !== "undefined" && DCTData.plant) || null;
    var q = params(), P = D || {kpi: {}, scopes: {}, screens: {}, themes: {}, x: []};
    var scopes = SCOPES[lens];
    var st = {scope: scopes.indexOf(q.scope) >= 0 ? q.scope : scopes[0], period: (P.x || []).indexOf(q.period) >= 0 ? q.period : "P06",
              set: q.set === "all" ? "all" : "lens", theme: q.theme || "all", level: q.level || "all", source: q.source || "all", screen: q.screen || ""};
    DEF.scope = scopes[0];
    var MON = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];
    var pi = Math.max(0, (P.x || []).indexOf(st.period));
    var lensScreens = Object.keys(P.screens || {}).filter(function (n) { return P.screens[n].lens === lens; });
    if (st.screen && lensScreens.indexOf(st.screen) < 0) st.screen = "";
    var sn = function (s) { return (P.scopes || {})[s] || s; };

    var all = Object.keys(P.kpi).sort();
    var onLens = function (id) { return (P.kpi[id].screens || []).some(function (n) { return lensScreens.indexOf(n) >= 0; }); };
    var base = all.filter(function (id) { return st.set === "all" || onLens(id); });
    var keep = function (id, skip) {
      var k = P.kpi[id];
      return (skip === "theme" || st.theme === "all" || k.theme === st.theme) &&
             (skip === "level" || st.level === "all" || k.level === st.level) &&
             (skip === "source" || st.source === "all" || k.source === st.source) &&
             (skip === "screen" || !st.screen || (k.screens || []).indexOf(st.screen) >= 0);
    };
    var ids = base.filter(function (id) { return keep(id); })
      .sort(function (a, b) { return (P.kpi[a].theme + a).localeCompare(P.kpi[b].theme + b); });
    var count = function (field, val) { return base.filter(function (id) { return keep(id, field) && (val === "all" || P.kpi[id][field] === val); }).length; };
    var btn = function (label, over, on) { return {l: label, h: link(lens, st, over), k: on ? "primary" : ""}; };

    // ---- selectors
    var themeName = function (t) { return t === "all" ? "All themes" : t + " · " + P.themes[t]; };
    var sel = [
      {type: "menus", title: "Look at", menus: [
        {label: "Scope", cur: sn(st.scope), opts: scopes.map(function (s) { return {l: sn(s) + (s === "Group" ? " (Entity A1 + A2)" : /^A/.test(s) ? " (its plants + entity inputs)" : " (plant inputs)"), h: link(lens, st, {scope: s}), on: s === st.scope}; })},
        {label: "Theme", cur: themeName(st.theme), opts: [{l: "All themes (" + count("theme", "all") + ")", h: link(lens, st, {theme: "all"}), on: st.theme === "all"}].concat(
          Object.keys(P.themes || {}).map(function (t) { var n = count("theme", t); return n ? {l: themeName(t) + " (" + n + ")", h: link(lens, st, {theme: t}), on: st.theme === t} : null; }).filter(Boolean))},
        {label: "Period", cur: st.period + " · " + MON[pi] + " 2026", opts: (P.x || []).map(function (x, i) {
          return {l: x + " · " + MON[i] + " 2026" + (i === (P.x || []).length - 1 ? " (latest certified)" : ""), h: link(lens, st, {period: x}), on: x === st.period}; })}
      ], note: "Lens: " + lens + " (your sign-in). " + (lens === "Entity" ? "Entity A1 and its plants only (C-05). " : "") + "Values are recalculated for the selected scope and month from its own inputs; YTD measures run from April to the selected month."},
      {type: "buttons", title: "Filter · which KPIs, lowest level calculated, source of the formula", btns: [
        btn("On " + lens + " screens (" + all.filter(onLens).length + ")", {set: "lens", screen: ""}, st.set === "lens"),
        btn("All KPIs (" + all.length + ")", {set: "all", screen: ""}, st.set === "all"),
        btn("Any level", {level: "all"}, st.level === "all"),
        btn("Down to plants (" + count("level", "plant") + ")", {level: "plant"}, st.level === "plant"),
        btn("Entity inputs only (" + count("level", "entity") + ")", {level: "entity"}, st.level === "entity"),
        btn("Any source", {source: "all"}, st.source === "all"),
        btn("Workbook (" + count("source", "workbook") + ")", {source: "workbook"}, st.source === "workbook"),
        btn("Added (" + count("source", "added") + ")", {source: "added"}, st.source === "added"),
        btn("Alias (" + count("source", "alias") + ")", {source: "alias"}, st.source === "alias")]}
    ];
    if (st.screen) sel.push({type: "buttons", title: "Screen filter", btns: [btn("Only KPIs on " + code(P.screens[st.screen]) + " " + P.screens[st.screen].title + " · clear ✕", {screen: ""}, true)]});

    // ---- the table
    var rows = ids.map(function (id) {
      var k = P.kpi[id], ser = k.val[st.scope], v = ser ? ser[pi] : null, pv = ser && pi > 0 ? ser[pi - 1] : null;
      var ch = typeof v === "number" && typeof pv === "number" ? (v - pv) : null;
      var chT = ch == null ? "—" : (Math.abs(ch) < Math.pow(10, -k.dp) / 2 ? "flat" : (ch > 0 ? "▲ " : "▼ ") + Number(Math.abs(ch)).toLocaleString("en-US", {minimumFractionDigits: k.dp, maximumFractionDigits: k.dp}));
      var inputs = (k.fields || []).filter(function (f) { return !/^(ytd_months|days)$/.test(f); }).map(function (f) { return f + " (" + (RULE[k.rules[f]] || k.rules[f] || "Σ") + ")"; }).join(", ");
      var scr = (k.screens || []).filter(function (n) { return st.set === "all" || lensScreens.indexOf(n) >= 0; }).map(function (n) { return code(P.screens[n]); });
      var href = DETAIL[lens] + "?kpi=" + encodeURIComponent(id) + "&scope=" + encodeURIComponent(st.scope);
      var why = !ser ? (k.level === "entity" && /^Plant/.test(st.scope) ? "— entity-level KPI" : "—") : null;
      return {c: [{t: id, h: href}, k.name + (k.aliasOf ? " (= " + k.aliasOf + ")" : ""), k.theme, (k.unit || "count") + " · " + (k.basis || ""), k.formula || "",
        inputs || "—", why ? why : {t: fmt(k, v), h: href}, chT, scr.join(" · ") || "—"],
        hi: k.source === "added"};
    });
    var table = {type: "table", title: ids.length + " KPIs · " + lens + " lens · " + sn(st.scope) + " · " + st.period + " (2026)",
      ask: "How is each KPI calculated, and what is its value here?",
      cap: "Formula and inputs are the same at every level; the value is recalculated from " + sn(st.scope) + "'s own inputs, never averaged. " +
           "Inputs show how each one rolls up (Σ = sum of children, lowest = MIN). Highlighted rows were added by the model. Click a KPI or value for its calculation.",
      cols: ["KPI", "Measure", "Theme", "Unit · basis", "Formula", "Inputs (roll-up)", "Value · " + sn(st.scope) + " · " + st.period, "vs P" + ("0" + Math.max(1, pi)).slice(-2), "Shown on"],
      gtc: "76px minmax(120px,1.1fr) 52px 100px minmax(170px,1.9fr) minmax(140px,1.4fr) 112px 70px minmax(90px,.8fr)",
      minW: 1040, rowsMax: 999, rows: rows, empty: "No KPI matches these filters."};

    // ---- graphs on this lens's screens and where their numbers come from (DCTData.plant.charts)
    var SRC = {"live": "● Live from model", "model": "● Calculated from model", "scaled": "◐ Total from model · split hand-set",
               "illustrative": "○ Illustrative · model scale", "layout": "— Not KPI data"};
    var charts = (P.charts || []).filter(function (c) { return lensScreens.indexOf(c.screen) >= 0 && (!st.screen || c.screen === st.screen); })
      .sort(function (a, b) { return code(P.screens[a.screen]).localeCompare(code(P.screens[b.screen])) || a.title.localeCompare(b.title); });
    var srcN = {}; charts.forEach(function (c) { srcN[c.source] = (srcN[c.source] || 0) + 1; });
    var graphs = {type: "table", title: charts.length + " graphs on " + lens + " screens" + (st.screen ? " · " + code(P.screens[st.screen]) : "") + " · what each shows and where its numbers come from",
      ask: "Can I trust what this graph shows, and what is it built from?",
      cap: Object.keys(SRC).filter(function (k) { return srcN[k]; }).map(function (k) { return SRC[k] + " (" + srcN[k] + ")"; }).join(" · ") +
           ". Live = filled from the model when the page opens. Calculated = written from the model by data/kpi-model/sync_pages.py. Hand-set splits are listed in data/HARDCODED-VALUES.md.",
      cols: ["Screen", "Graph", "Type", "Source", "Built from", "Note"],
      gtc: "64px minmax(170px,1.4fr) 70px 150px minmax(200px,1.8fr) minmax(140px,1.2fr)", minW: 1040, rowsMax: 999,
      rows: charts.map(function (c) {
        return {c: [{t: code(P.screens[c.screen]), h: c.screen + ".html"}, c.title + (c.ask ? " · " + c.ask : ""), {"line": "Line", "multi": "Lines", "bars": "Bars", "waterfall": "Bridge"}[c.type] || c.type,
          SRC[c.source] || c.source, c.from, c.note || "—"], hi: c.source === "illustrative" || c.source === "layout"};
      }), empty: "No graphs on this screen."};

    // ---- reference tabs
    var screenRows = lensScreens.map(function (n) {
      var c = all.filter(function (id) { return (P.kpi[id].screens || []).indexOf(n) >= 0; }).length;
      return c ? {c: [{t: code(P.screens[n]), h: n + ".html"}, P.screens[n].title, String(c), {t: "Show these KPIs ›", h: link(lens, st, {screen: n, set: "lens"})}], hi: n === st.screen} : null;
    }).filter(Boolean).sort(function (a, b) { return a.c[0].t.localeCompare(b.c[0].t); });
    var aliasRows = all.filter(function (id) { return P.kpi[id].aliasOf; }).map(function (id) { return [{t: id, h: link(lens, st, {set: "all", source: "alias"})}, P.kpi[id].name, P.kpi[id].aliasOf]; });
    var addedRows = all.filter(function (id) { return P.kpi[id].source === "added"; }).map(function (id) { var k = P.kpi[id]; return [id, k.name, k.formula, (k.fields || []).join(", ")]; });
    var drill = [
      {n: "Screens in this lens", blocks: [{type: "table", title: lens + " screens and the KPIs on them", cols: ["Screen", "Title", "KPIs", "Filter"], rows: screenRows, rowsMax: 999,
        gtc: "110px minmax(0,2fr) 70px 160px", minW: 640, ask: "Which KPIs does each screen use?"}]},
      {n: "How values roll up", blocks: [{type: "kv", title: "Reading the table", rows: [
        ["Plant", "Atomic level: the plant's own inputs (production, reliability, cost, EHS, sales, supply, regulatory, forecast)."],
        ["Entity A1 / A2", "Plant-type inputs are the sum of the entity's 3 plants (lowest for permit days, days to breach). Finance, cash, treasury, capex, programmes, contracts, controls, governance, data trust and workflow inputs exist only at entity level."],
        ["Group", "Sum of Entity A1 and Entity A2 (lowest for clocks, same value for external indices, √Σσ² for forecast uncertainty)."],
        ["KPI value", "Always the KPI formula applied to that scope's inputs; never an average of the level below."],
        ["“—”", "No value at this scope: the KPI uses entity-only inputs, so it is not calculated for plants."],
        ["Source", "Workbook = data/kpi-model/Group-KPI-Model.xlsx · Added = formula and synthetic inputs added by data/kpi-model · Alias = same measure as another ID."],
        ["Files", "data/kpi-model/KPI-Model.xlsx (live formulas) · kpi_values.csv · kpi_catalogue.csv · README.md"]]}]},
      {n: "Aliases", blocks: [{type: "table", title: "IDs that show the same measure as another KPI", cols: ["Alias", "Measure", "Same as"], rows: aliasRows, rowsMax: 999, gtc: "100px minmax(0,2fr) 100px", minW: 560}]},
      {n: "Added by the model", blocks: [{type: "table", title: "KPIs on the screens that the source workbook did not cover", cols: ["KPI", "Measure", "Formula", "Inputs"], rows: addedRows, rowsMax: 999,
        gtc: "90px minmax(0,1.3fr) minmax(0,2fr) minmax(0,1.3fr)", minW: 900, cap: "Synthetic inputs and their roll-up rules: data/HARDCODED-VALUES.md."}]}
    ];

    var equiv = {};
    ["Owner", "Core Group", "Entity"].forEach(function (L) {
      var o = Object.assign({}, st, {screen: ""}); if (SCOPES[L].indexOf(o.scope) < 0) o.scope = SCOPES[L][0];
      equiv[L] = {h: link(L, o), same: L === lens, t: RID[L] + " KPI Reference"};
    });
    return {lens: lens, role: ROLE[lens], scope: lens === "Entity" ? "Entity A1 (own entity)" : "Group (all permitted)", rid: RID[lens],
      nav: "KPI Reference", title: "KPI Reference · formulas and values", period: st.period + " (SYN)",
      q: "How is each KPI calculated, and what is its value for this lens, scope and period?",
      trust: "Values from data/kpi-model · " + all.length + " KPIs · calculated bottom-up (plant → entity → Group)",
      focus: "drivers", dominant: sel, drivers: [table, graphs], drill: drill,
      access: [{l: "KPI detail and lineage ↗", h: DETAIL[lens]}, {l: "Data Assurance ↗", h: lens === "Owner" ? "P2-G08o-OwnerTrust.html" : lens === "Entity" ? "P2-E08-CertWorkbench.html" : "P2-G08-CertGovernance.html"}],
      equiv: equiv, journey: null};
  }

  Object.keys(FILE).forEach(function (lens) {
    DCLite.register(FILE[lens], "\n\n<dc-import name=\"TplC\" page=\"{{page}}\" hint-size=\"100%,3600px\"></dc-import>\n", function (DCLogic) {
      class Component extends DCLogic {
        renderVals() { return {page: build(lens)}; }
      }
      return Component;
    });
  });
})();
