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
    ["scope", "period", "set", "theme", "level", "source", "screen", "kpi", "graph", "on"].forEach(function (k) { if (o[k] && o[k] !== DEF[k]) qs.push(k + "=" + encodeURIComponent(o[k])); });
    return FILE[lens] + ".html" + (qs.length ? "?" + qs.join("&") : "");
  }
  var DEF = {period: "P06", set: "lens", theme: "all", level: "all", source: "all", screen: "", kpi: "", graph: "", on: ""};
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
              set: q.set === "all" ? "all" : "lens", theme: q.theme || "all", level: q.level || "all", source: q.source || "all", screen: q.screen || "", kpi: q.kpi || "", graph: q.graph || "", on: q.on || ""};
    DEF.scope = scopes[0];
    var MON = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];
    var pi = Math.max(0, (P.x || []).indexOf(st.period));
    var lensScreens = Object.keys(P.screens || {}).filter(function (n) { return P.screens[n].lens === lens; });
    if (st.screen && lensScreens.indexOf(st.screen) < 0) st.screen = "";
    var sn = function (s) { return (P.scopes || {})[s] || s; };

    var all = Object.keys(P.kpi).sort();
    // ?graph= (with ?on=<screen>): one graph, and the KPIs it is built from
    var gSel = st.graph ? (P.charts || []).filter(function (c) { return c.title === st.graph && (!st.on || c.screen === st.on); }) : [];
    var bSel = st.graph ? (P.blocks || []).filter(function (c) { return c.title === st.graph && (!st.on || c.screen === st.on); }) : [];
    var gIds = {}; gSel.concat(bSel).forEach(function (c) { (c.kpis || []).concat((c.title + " " + c.from + " " + (c.note || "")).match(/[A-Z]{3}-\d{3}/g) || []).forEach(function (id) { if (P.kpi[id]) gIds[id] = 1; }); });
    var onLens = function (id) { return (P.kpi[id].screens || []).some(function (n) { return lensScreens.indexOf(n) >= 0; }); };
    var base = all.filter(function (id) { return st.set === "all" || onLens(id); });
    var keep = function (id, skip) {
      var k = P.kpi[id];
      return (skip === "theme" || st.theme === "all" || k.theme === st.theme) &&
             (skip === "level" || st.level === "all" || k.level === st.level) &&
             (skip === "source" || st.source === "all" || k.source === st.source) &&
             (skip === "screen" || !st.screen || (k.screens || []).indexOf(st.screen) >= 0) &&
             (!st.kpi || id === st.kpi) && (!st.graph || !!gIds[id]);
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
    if (st.graph) sel.push({type: "buttons", title: "Graph filter", btns: [btn("Only the " + (bSel.length && !gSel.length ? (bSel[0].type === "tiles" ? "tiles" : "table") : "graph") + " “" + st.graph + "” and the KPIs it is built from · show all ✕", {graph: "", on: ""}, true)]});
    if (st.kpi) sel.push({type: "buttons", title: "KPI filter", btns: [btn("Only " + st.kpi + (P.kpi[st.kpi] ? " " + P.kpi[st.kpi].name : " (not in the model)") + " · show all ✕", {kpi: ""}, true)].concat(P.kpi[st.kpi] ? [{l: "Explain " + st.kpi + " ›", h: "#kpi-" + st.kpi, k: ""}] : [])});
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
      return {c: [{t: id, h: "#kpi-" + id}, k.name + (k.aliasOf ? " (= " + k.aliasOf + ")" : ""), k.theme, (k.unit || "count") + " · " + (k.basis || ""), k.formula || "",
        inputs || "—", why ? why : {t: fmt(k, v), h: href}, chT, scr.join(" · ") || "—"],
        hi: k.source === "added"};
    });
    var table = {type: "table", title: ids.length + " KPIs · " + lens + " lens · " + sn(st.scope) + " · " + st.period + " (2026)",
      ask: "How is each KPI calculated, and what is its value here?",
      cap: "Formula and inputs are the same at every level; the value is recalculated from " + sn(st.scope) + "'s own inputs, never averaged. " +
           "Inputs show how each one rolls up (Σ = sum of children, lowest = MIN). Highlighted rows were added by the model. Click a KPI ID for what its number is saying, where the problem sits and what moves it; click a value for its full lineage.",
      cols: ["KPI", "Measure", "Theme", "Unit · basis", "Formula", "Inputs (roll-up)", "Value · " + sn(st.scope) + " · " + st.period, "vs P" + ("0" + Math.max(1, pi)).slice(-2), "Shown on"],
      gtc: "76px minmax(120px,1.1fr) 52px 100px minmax(170px,1.9fr) minmax(140px,1.4fr) 112px 70px minmax(90px,.8fr)",
      minW: 1040, rowsMax: 999, rows: rows, empty: st.graph ? "This " + (bSel.length && !gSel.length ? "block" : "graph") + " does not draw on a catalogued KPI; see its row below for what it is built from." : "No KPI matches these filters."};

    // ---- graphs on this lens's screens and where their numbers come from (DCTData.plant.charts)
    var SRC = {"live": "● Live from model", "model": "● Calculated from model", "scaled": "◐ Total from model · split hand-set",
               "illustrative": "○ Illustrative · model scale", "layout": "— Not KPI data"};
    var charts = (P.charts || []).filter(function (c) { return st.graph ? gSel.indexOf(c) >= 0 : lensScreens.indexOf(c.screen) >= 0 && (!st.screen || c.screen === st.screen); })
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
      }), empty: st.graph ? "This graph is not in data/kpi-model/chart_sources.json yet (not yet classified)." : "No graphs on this screen."};

    // ---- tables and tiles on this lens's screens (DCTData.plant.blocks, derived by scan_ui.js + export_to_prototype.py)
    var BSRC = {"live": "● Live from model", "illustrative": "○ Hand-set · names non-KPI items", "layout": "— Not KPI data"};
    var blks = (P.blocks || []).filter(function (c) { return st.graph ? bSel.indexOf(c) >= 0 : lensScreens.indexOf(c.screen) >= 0 && (!st.screen || c.screen === st.screen); })
      .sort(function (a, b) { return code(P.screens[a.screen]).localeCompare(code(P.screens[b.screen])) || a.title.localeCompare(b.title); });
    var bN = {}; blks.forEach(function (c) { bN[c.source] = (bN[c.source] || 0) + 1; });
    var tablesB = {type: "table", title: blks.length + " tables and tiles on " + lens + " screens" + (st.screen ? " · " + code(P.screens[st.screen]) : "") + " · what each shows and where its numbers come from",
      ask: "Which numbers in this table or tile set come from the model, and which are workflow or hand-set?",
      cap: Object.keys(BSRC).filter(function (k) { return bN[k]; }).map(function (k) { return BSRC[k] + " (" + bN[k] + ")"; }).join(" · ") +
           ". Live = rows or tiles whose label carries a KPI ID are filled from the model for the scope in the label (js/data/resolve.js); other cells are workflow, status or narrative (SYN).",
      cols: ["Screen", "Table / tiles", "Type", "Source", "Built from", "Note"],
      gtc: "64px minmax(170px,1.4fr) 60px 150px minmax(200px,1.8fr) minmax(140px,1.2fr)", minW: 1040, rowsMax: st.graph ? 999 : 40,
      rows: blks.map(function (c) {
        return {c: [{t: code(P.screens[c.screen]), h: c.screen + ".html"}, c.title + (c.ask ? " · " + c.ask : ""), c.type === "tiles" ? "Tiles" : "Table",
          BSRC[c.source] || c.source, c.from, c.note || "—"], hi: !!st.graph};
      }), empty: "This table is not in the scan yet: run node data/kpi-model/scan_ui.js and the rebuild."};
    var drv = [table];
    if (!st.graph || gSel.length || !bSel.length) drv.push(graphs);
    if (!st.graph || bSel.length) drv.push(tablesB);

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
      focus: "drivers", dominant: sel, drivers: drv, drill: drill,
      access: [{l: "KPI detail and lineage ↗", h: DETAIL[lens]}, {l: "Data Assurance ↗", h: lens === "Owner" ? "P2-G08o-OwnerTrust.html" : lens === "Entity" ? "P2-E08-CertWorkbench.html" : "P2-G08-CertGovernance.html"}],
      equiv: equiv, journey: null};
  }

  // ---- KPI explainer modal: opens only on request, via #kpi-ID (KPI column, or the Explain button in the KPI filter)
  var LENS = {}; Object.keys(FILE).forEach(function (L) { LENS[FILE[L]] = L; });
  function esc(x) { return String(x == null ? "" : x).replace(/[&<>"]/g, function (c) { return {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}[c]; }); }
  function num(x, dp) { return typeof x === "number" ? x.toLocaleString("en-US", {minimumFractionDigits: dp || 0, maximumFractionDigits: dp == null ? 1 : dp}) : (x == null ? "—" : String(x)); }
  function judge(k, v, pv) {  // performance against target, else direction of travel
    if (typeof v !== "number") return {l: "No value", c: "grey"};
    var up = k.better === "up", dn = k.better === "down";
    if (typeof k.target === "number" && (up || dn)) {
      var ok = up ? v >= k.target : v <= k.target, gap = v - k.target;
      return {l: ok ? "On or better than target" : "Worse than target", c: ok ? "teal" : "red", gap: gap};
    }
    if (typeof pv === "number" && (up || dn) && v !== pv) { var better = up ? v > pv : v < pv; return {l: better ? "Improving" : "Deteriorating", c: better ? "teal" : "amber"}; }
    return {l: up || dn ? "No target set" : "Context measure (no better direction)", c: "grey"};
  }
  function sparkSvg(k, ser, pi) {
    var xs = ser.filter(function (v) { return typeof v === "number"; }); if (xs.length < 2) return "";
    var vals = xs.concat(typeof k.target === "number" ? [k.target] : []), lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals), r = hi - lo || 1;
    var W = 260, H = 64, X = function (i) { return 8 + i * (W - 16) / (ser.length - 1); }, Y = function (v) { return H - 10 - (v - lo) / r * (H - 20); };
    var pts = ser.map(function (v, i) { return typeof v === "number" ? X(i).toFixed(1) + "," + Y(v).toFixed(1) : null; }).filter(Boolean).join(" ");
    var t = typeof k.target === "number" ? '<line x1="8" x2="' + (W - 8) + '" y1="' + Y(k.target).toFixed(1) + '" y2="' + Y(k.target).toFixed(1) + '" stroke="var(--ct-ink-3,#5B6576)" stroke-dasharray="3 3"/><text x="' + (W - 8) + '" y="' + (Y(k.target) - 3).toFixed(1) + '" text-anchor="end" font-size="9" fill="var(--ct-ink-3,#5B6576)">target ' + esc(num(k.target, k.dp)) + "</text>" : "";
    var dot = typeof ser[pi] === "number" ? '<circle cx="' + X(pi).toFixed(1) + '" cy="' + Y(ser[pi]).toFixed(1) + '" r="3.5" fill="var(--ct-navy-900,#0E1B33)"/>' : "";
    return '<svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Six-month trend">' + t +
      '<polyline points="' + pts + '" fill="none" stroke="var(--ct-navy-700,#24406E)" stroke-width="2"/>' + dot + "</svg>";
  }
  function explain(id) {
    var D = typeof DCTData !== "undefined" ? DCTData : null, P = D && D.plant, k = P && P.kpi[id];
    var lens = LENS[(location.pathname.split("/").pop() || "").replace(/\.(dc\.)?html$/, "")] || "Owner", q = params();
    if (!k) return null;
    var scopes = SCOPES[lens], scope = scopes.indexOf(q.scope) >= 0 ? q.scope : scopes[0];
    var X = P.x || [], pi = Math.max(0, X.indexOf(q.period || "P06")), per = X[pi] || "P06", last = X.length - 1;
    var MON = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"], sn = function (s) { return (P.scopes || {})[s] || s; };
    var ser = k.val[scope] || [], v = ser[pi], pv = pi > 0 ? ser[pi - 1] : null, J = judge(k, v, pv), H = [];
    var sec = function (n, t, body) { H.push('<section style="display:flex;flex-direction:column;gap:8px;padding:14px 0;border-top:1px solid var(--ct-line,#DCE1E8)"><h3 style="margin:0;font-size:14px;display:flex;gap:8px;align-items:baseline"><span style="font-family:\'IBM Plex Mono\',monospace;font-size:11px;color:var(--ct-navy-700,#24406E)">' + n + "</span>" + esc(t) + "</h3>" + body + "</section>"); };
    var chip = function (j) { var C = {teal: ["#E3F2F1", "#0B6B73"], red: ["#FBE6E4", "#A4231C"], amber: ["#FBF0DB", "#8A5300"], grey: ["#E4E8ED", "#5F6B7A"]}[j.c]; return '<span style="display:inline-block;padding:2px 8px;border-radius:2px;font-size:12px;font-weight:600;background:' + C[0] + ";color:" + C[1] + '">' + esc(j.l) + "</span>"; };
    var tbl = function (cols, rows) { return '<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;font-size:12.5px"><thead><tr>' + cols.map(function (c) { return '<th style="text-align:left;padding:5px 8px;background:var(--ct-surface-2,#F8F9FB);font-weight:600;white-space:nowrap">' + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      rows.map(function (r) { return '<tr style="border-top:1px solid var(--ct-line,#DCE1E8)' + (r.hi ? ";background:var(--ct-navy-100,#E8EDF6);font-weight:600" : "") + '">' + r.c.map(function (c) { return '<td style="padding:5px 8px">' + c + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>"; };

    // 1 · what the number is saying
    var nums = ser.map(function (x, i) { return {x: x, i: i}; }).filter(function (o) { return typeof o.x === "number" && o.i <= pi; });
    var good = function (a, b) { return k.better === "down" ? a < b : a > b; };
    var best = nums.reduce(function (a, b) { return !a || good(b.x, a.x) ? b : a; }, null), worst = nums.reduce(function (a, b) { return !a || good(a.x, b.x) ? b : a; }, null);
    var streak = 0; for (var i = pi; i > 0 && typeof ser[i] === "number" && typeof ser[i - 1] === "number" && k.better && ser[i] !== ser[i - 1] && !good(ser[i], ser[i - 1]); i--) streak++;
    var say = [];
    if (typeof v !== "number") say.push(k.level === "entity" && /^Plant/.test(scope) ? "Not calculated for a plant: this KPI uses entity-only inputs. Pick an entity or the Group." : "No value for " + sn(scope) + " in " + per + ".");
    else {
      say.push("<b>" + esc(sn(scope)) + " · " + per + ": " + esc(fmt(k, v)) + "</b>" + (J.gap != null ? ", " + esc(num(Math.abs(J.gap), k.dp)) + " " + esc(/%/.test(k.unit || "") ? "pts" : (k.unit || "")) + (J.gap === 0 ? " on target" : (J.gap > 0 ? " above" : " below") + " target (" + esc(num(k.target, k.dp)) + ")") : "") + ".");
      if (typeof pv === "number") say.push((v === pv ? "Flat" : (v > pv ? "Up " : "Down ") + esc(num(Math.abs(v - pv), k.dp))) + " on " + X[pi - 1] + (streak > 1 ? "; worse for " + streak + " periods in a row" : "") + ".");
      if (best && worst && k.better && nums.length > 1) say.push("Best month so far " + X[best.i] + " (" + esc(fmt(k, best.x)) + "), worst " + X[worst.i] + " (" + esc(fmt(k, worst.x)) + ").");
      if (!k.better) say.push("Context measure: the model sets no better direction, so it is read against its trend, not judged.");
    }
    sec("1", "What the number is saying", '<div style="display:flex;flex-wrap:wrap;gap:12px 20px;align-items:center"><div style="flex:1 1 260px;display:flex;flex-direction:column;gap:6px">' + chip(J) + "<p style=\"margin:0;line-height:20px\">" + say.join(" ") + "</p></div>" + sparkSvg(k, ser, pi) + "</div>" +
      '<div style="font-size:11.5px;color:var(--ct-ink-3,#5B6576)">' + X.map(function (x, i) { return x + " " + esc(typeof ser[i] === "number" ? num(ser[i], k.dp) : "—"); }).join(" · ") + " · " + esc(k.basis || "") + " basis · " + (k.better === "up" ? "higher is better" : k.better === "down" ? "lower is better" : "no better direction") + "</div>");

    // 2 · where the problem sits
    var rows2 = scopes.map(function (s) { var x = (k.val[s] || [])[pi], j = judge(k, x, pi > 0 ? (k.val[s] || [])[pi - 1] : null);
      return {c: ["<a href=\"#kpi-" + id + '" data-scope="' + s + '">' + esc(sn(s)) + "</a>", esc(typeof x === "number" ? fmt(k, x) : "—"), j.gap != null ? esc((j.gap > 0 ? "+" : "") + num(j.gap, k.dp)) : "—", chip(j)], hi: s === scope}; });
    var leaves = scopes.filter(function (s) { return typeof (k.val[s] || [])[pi] === "number" && /^Plant/.test(s); });
    var pool = leaves.length ? leaves : scopes.filter(function (s) { return /^A/.test(s) && typeof (k.val[s] || [])[pi] === "number"; });
    var lowS = k.better && typeof k.target === "number" && pool.length > 1 ? pool.reduce(function (a, b) { return good(k.val[a][pi], k.val[b][pi]) ? b : a; }) : null;
    var kids = (P.children || {})[scope] || [], ex = kids.filter(function (c) { return typeof (k.excl || {})[c] === "number"; });
    var b2 = (lowS ? "<p style=\"margin:0\">Weakest " + (leaves.length ? "plant" : "entity") + ": <b>" + esc(sn(lowS)) + "</b> at " + esc(fmt(k, k.val[lowS][pi])) + ".</p>" : "") + tbl(["Scope", "Value · " + per, "vs target", "Status"], rows2) +
      (ex.length && pi === last ? '<p style="margin:0;font-size:12.5px">Leave one out (' + per + "): " + ex.map(function (c) { return "without " + esc(sn(c)) + ", " + esc(sn(scope)) + " would be <b>" + esc(fmt(k, k.excl[c])) + "</b>"; }).join(" · ") + ". Recalculated from the remaining inputs, not averaged.</p>" : "");
    sec("2", "Where it sits across the hierarchy", b2);

    // 3 · what moves it (inputs, P06)
    var F = (k.fields || []).filter(function (f) { return !/^(ytd_months|days)$/.test(f); }), inp = (k.inp || {})[scope] || {};
    var key = function (f) { return Object.keys(inp).filter(function (x) { return x.replace(" (YTD)", "") === f; })[0]; };
    var b3;
    if (!F.length || !Object.keys(inp).length) b3 = '<p style="margin:0">' + (F.length ? "No input values at " + esc(sn(scope)) + "." : "Formula only; no stored inputs.") + "</p>";
    else {
      var cols3 = ["Input", "Roll-up", sn(scope)].concat(kids.map(sn)), rows3 = F.map(function (f) { var kk = key(f), tot = inp[kk];
        return {c: ["<code>" + esc(kk || f) + "</code>", esc(RULE[k.rules[f]] || k.rules[f] || "Σ"), "<b>" + esc(num(tot)) + "</b>"].concat(kids.map(function (c) { var cv = ((k.inp || {})[c] || {})[kk];
          return esc(num(cv)) + (k.rules[f] === "SUM" && typeof cv === "number" && typeof tot === "number" && tot ? ' <span style="color:var(--ct-ink-3,#5B6576)">(' + Math.round(cv / tot * 100) + "%)</span>" : ""); }))}; });
      rows3.push({c: ["<b>= " + esc(id) + "</b>", "", "<b>" + esc(fmt(k, (k.val[scope] || [])[last])) + "</b>"].concat(kids.map(function (c) { return esc(fmt(k, (k.val[c] || [])[last])); })), hi: true});
      b3 = '<p style="margin:0"><b>' + esc(k.formula || "") + "</b></p>" + tbl(cols3, rows3) + '<p style="margin:0;font-size:11.5px;color:var(--ct-ink-3,#5B6576)">Input values are ' + (P.period || "P06") + (/YTD/.test(Object.keys(inp).join(" ")) ? " (year to date)" : "") + ". The share in brackets is each child's part of the summed input, which shows where the gap comes from.</p>";
    }
    sec("3", "What moves it", b3);

    // 4 · related KPIs (shared inputs)
    var rel = Object.keys(P.kpi).filter(function (o) { return o !== id && (P.kpi[o].fields || []).some(function (f) { return F.indexOf(f) >= 0; }); })
      .map(function (o) { var sh = P.kpi[o].fields.filter(function (f) { return F.indexOf(f) >= 0; }); return {o: o, sh: sh}; })
      .sort(function (a, b) { return b.sh.length - a.sh.length || a.o.localeCompare(b.o); });
    sec("4", "Moves with", rel.length ? tbl(["KPI", "Measure", "Shared input", "Value · " + sn(scope)], rel.slice(0, 10).map(function (r) { var o = P.kpi[r.o], x = (o.val[scope] || [])[pi];
      return {c: ['<a href="#kpi-' + r.o + '">' + r.o + "</a>", esc(o.name), "<code>" + esc(r.sh.join(", ")) + "</code>", esc(typeof x === "number" ? fmt(o, x) : "—")]}; })) +
      (rel.length > 10 ? '<p style="margin:0;font-size:12px">+' + (rel.length - 10) + " more.</p>" : "") : '<p style="margin:0">No other KPI shares its inputs.</p>');

    // 5 · trust and ownership (card record, P06)
    var card = ((D.kpi || {})[id] || {})[scope] || ((D.kpi || {})[id] || {})[scopes[0]];
    sec("5", "Can I rely on it, and who owns it", card ? tbl(["Trust", "Provenance", "Owner", "Plan · variance", "Forecast", "Note"], [{c: [esc(card.ts || "—"), esc(card.prov || "—"), esc(card.own || "—"), esc((card.plan || "—") + " · " + (card.var || "—")), esc(card.fc || "—"), esc(card.fb || "—")]}]) +
      '<p style="margin:0;font-size:11.5px;color:var(--ct-ink-3,#5B6576)">As shown on the ' + esc(sn(card === ((D.kpi || {})[id] || {})[scope] ? scope : scopes[0])) + " card for " + (P.period || "P06") + ".</p>" : '<p style="margin:0">No card record: this KPI is shown in tables only.</p>');

    // 6 · where it is used on this lens
    var lensS = (k.screens || []).filter(function (n) { return P.screens[n] && P.screens[n].lens === lens; });
    var mention = function (c) { return (c.kpis || []).indexOf(id) >= 0 || (c.kpi === id) || ((c.title || "") + " " + (c.from || "") + " " + (c.note || "")).indexOf(id) >= 0; };
    var gr = (P.charts || []).filter(function (c) { return P.screens[c.screen] && P.screens[c.screen].lens === lens && mention(c); });
    var bl = (P.blocks || []).filter(function (c) { return P.screens[c.screen] && P.screens[c.screen].lens === lens && mention(c); });
    var used = [].concat(gr.map(function (c) { return {c: ['<a href="' + c.screen + '.html">' + esc(code(P.screens[c.screen])) + "</a>", "Graph", esc(c.title)]}; }),
      bl.map(function (c) { return {c: ['<a href="' + c.screen + '.html">' + esc(code(P.screens[c.screen])) + "</a>", c.type === "tiles" ? "Tiles" : "Table", esc(c.title)]}; }));
    sec("6", "Where it is used · " + lens + " lens", '<p style="margin:0">' + (lensS.length ? "Screens: " + lensS.map(function (n) { return '<a href="' + n + '.html">' + esc(code(P.screens[n]) + " " + P.screens[n].title) + "</a>"; }).join(" · ") : "Not on " + lens + " screens; it is in the model for the other lenses.") + "</p>" + (used.length ? tbl(["Screen", "In", "Title"], used) : ""));

    // 7 · catalogue context
    var c7 = k.cat;
    sec("7", "Catalogue", tbl(["Type", "Theme", "Placed on", "Drills to", "Level · source"], [{c: [esc(c7 ? c7.type : "—"), esc(c7 ? c7.theme + " · " + c7.group : (P.themes || {})[k.theme] || k.theme), esc(c7 ? c7.placed : "—"), esc(c7 ? c7.drill : "—"),
      esc((k.level === "plant" ? "Down to plants" : "Entity inputs only") + " · " + (k.source === "alias" ? "alias of " + k.aliasOf : k.source))]}]) +
      (c7 ? '<p style="margin:0;font-size:12.5px">Theme question: <i>' + esc(c7.themeQ) + "</i>" + (c7.note ? " · " + esc(c7.note) : "") + "</p>" : '<p style="margin:0;font-size:12.5px">Not in the P1-R1 catalogue: added by the model.</p>'));

    var head = '<div style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start"><div><div style="font-family:\'IBM Plex Mono\',monospace;font-size:11px;color:var(--ct-ink-3,#5B6576)">' + esc(id) + " · " + esc(lens) + " lens · " + esc(sn(scope)) + " · " + per + " " + (MON[pi] || "") + ' 2026</div><h2 id="ct-kx-t" style="margin:2px 0 0;font-size:19px">' + esc(k.name) + (k.unit ? ' <span style="font-weight:400;color:var(--ct-ink-3,#5B6576);font-size:14px">' + esc(k.unit) + "</span>" : "") + "</h2></div>" +
      '<button type="button" data-kx-close aria-label="Close" style="min-width:40px;min-height:40px;border:1px solid var(--ct-line,#DCE1E8);border-radius:4px;background:var(--ct-surface,#FFFFFF);font-size:18px;cursor:pointer">✕</button></div>';
    var foot = '<div style="display:flex;gap:8px;flex-wrap:wrap;padding-top:12px;border-top:1px solid var(--ct-line,#DCE1E8)"><a href="' + DETAIL[lens] + "?kpi=" + encodeURIComponent(id) + "&scope=" + encodeURIComponent(scope) + '" style="display:inline-flex;align-items:center;min-height:40px;padding:0 14px;background:var(--ct-navy-900,#0E1B33);color:#FFFFFF;border-radius:4px;text-decoration:none;font-weight:600;font-size:13.5px">Full lineage (KPI detail) ›</a></div>';
    return {html: head + H.join("") + foot, scope: scope};
  }
  function openKx(id, scope) {
    if (scope) { var q0 = params(); if (q0.scope !== scope) { var o = Object.assign({}, q0, {scope: scope}); location.href = FILE[LENS[(location.pathname.split("/").pop() || "").replace(/\.(dc\.)?html$/, "")] || "Owner"] + ".html?" + Object.keys(o).map(function (x) { return x + "=" + encodeURIComponent(o[x]); }).join("&") + "#kpi-" + id; return; } }
    var r = explain(id); if (!r) return;
    var ov = document.getElementById("ct-kx"); if (!ov) {
      ov = document.createElement("div"); ov.id = "ct-kx";
      ov.setAttribute("style", "position:fixed;inset:0;z-index:1000;background:rgba(14,27,51,.45);display:flex;justify-content:center;align-items:flex-start;padding:24px 16px;overflow-y:auto;font-family:'IBM Plex Sans',system-ui,sans-serif;color:var(--ct-ink,#121A2B);font-size:14px");
      ov.innerHTML = '<div role="dialog" aria-modal="true" aria-labelledby="ct-kx-t" tabindex="-1" style="background:var(--ct-surface,#FFFFFF);border-radius:6px;max-width:880px;width:100%;padding:18px 20px;box-shadow:0 12px 40px rgba(0,0,0,.25)"></div>';
      document.body.appendChild(ov);
      ov.addEventListener("click", function (e) {
        if (e.target === ov || e.target.closest("[data-kx-close]")) { closeKx(); return; }
        var a = e.target.closest("a[data-scope]"); if (a) { e.preventDefault(); openKx(a.getAttribute("href").slice(5), a.getAttribute("data-scope")); }
        else if ((a = e.target.closest("a[href^='#kpi-']")) && a.getAttribute("href") === location.hash) { e.preventDefault(); openKx(location.hash.slice(5)); }
      });
    }
    var dlg = ov.firstChild; dlg.innerHTML = r.html; dlg.scrollTop = 0; ov.scrollTop = 0; ov.style.display = "flex";
    document.documentElement.style.overflow = "hidden"; dlg.querySelector("[data-kx-close]").focus();
  }
  function closeKx() {
    var ov = document.getElementById("ct-kx"); if (!ov) return; ov.style.display = "none"; document.documentElement.style.overflow = "";
    if (/^#kpi-/.test(location.hash)) { try { history.replaceState(null, "", location.pathname + location.search); } catch (e) { location.hash = ""; } }
  }
  function fromUrl() { var m = /^#kpi-([A-Z]{3}-\d{3})$/.exec(location.hash || ""); if (m) openKx(m[1]); else closeKx(); }
  if (typeof window !== "undefined" && typeof document !== "undefined" && window.addEventListener && !window.__ctKx) {
    window.__ctKx = 1;
    window.addEventListener("hashchange", fromUrl);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeKx(); });
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(fromUrl, 0); }); else setTimeout(fromUrl, 0);
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
