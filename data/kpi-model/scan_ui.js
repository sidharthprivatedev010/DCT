// Lists every KPI ID shown on the prototype's screens, with the scopes and screens (and each screen's lens).
// Output: data/kpi-model/ui_kpis.json  ·  Run: node data/kpi-model/scan_ui.js (before build_kpi_model.py)
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..", "..");
const pages = {};
global.DCLite = {register: (n, t, f) => { class B {} B.prototype.props = {}; const C = f(B); try { pages[n] = new C().renderVals().page; } catch (e) {} }};
global.location = {search: ""};
for (const f of fs.readdirSync(path.join(root, "js/c")).filter((f) => /^P[23]-/.test(f) && !/KPIReference/.test(f))) {
  try { eval(fs.readFileSync(path.join(root, "js/c", f), "utf8")); } catch (e) {}
}
const ID = /^[A-Z]{2,4}-\d{3}$/;
const ids = {}, screens = {}, charts = [], blocks = [];
const sc = (p, label) => { const m = /Plant (\d\d)/.exec(label || ""); if (m) return "Plant" + m[1]; if (/\bA2\b/.test(label || "")) return "A2"; if (/\bA1\b/.test(label || "")) return "A1"; return p.lens === "Entity" ? "A1" : "Group"; };
const add = (id, p, n, label) => { (ids[id] = ids[id] || new Set()).add(sc(p, label) + "|" + n); };
for (const n in pages) {
  const p = pages[n]; if (!p || !p.lens) continue;
  screens[n] = {lens: p.lens, rid: p.rid || "", title: p.title || n, file: n + ".html"};
  (p.kpis || []).forEach((k) => { if (ID.test(k.id || "")) add(k.id, p, n, k.name); });
  (function w(o) {
    if (!o || typeof o !== "object") return;
    if (Array.isArray(o)) { o.forEach(w); return; }
    if (o.type === "table") (o.rows || []).forEach((r) => {
      const a = Array.isArray(r) ? r : r.c; if (!a) return;
      let t = String((a[0] && a[0].t) || a[0] || "").trim(); const lab = String((a[1] && a[1].t) || a[1] || "");
      if (!ID.test(t)) { const m = /^([A-Z]{2,4}-\d{3}) /.exec(lab) || /^([A-Z]{2,4}-\d{3}) /.exec(t); if (!m) return; t = m[1]; }
      add(t, p, n, lab + " " + (o.title || ""));
    });
    // dashboard blocks (O-03, O-09): KPI cards and their charts; a chart is live when its series are bound to a KPI
    if (o.type === "dash") {
      (o.cols || []).forEach((c) => [c.hero].concat(c.cards || []).forEach((k) => { if (k && ID.test(k.kpi || "")) add(k.kpi, p, n, (k.scope ? k.scope + " " : "") + k.l); }));
      (o.charts || []).forEach((g) => { const ks = (g.series || []).map((s) => s.kpi).filter(Boolean); charts.push({screen: n, type: g.kind === "bars" ? "bars" : "line", title: g.t, ask: g.read || "", kpi: ks.length === (g.series || []).length ? ks[0] : ""}); });
    }
    if (o.type === "heat") (o.items || []).forEach((t) => { if (ID.test(t.kpi || "")) add(t.kpi, p, n, (t.scope || "") + " " + t.l); });
    if (["line", "multi", "bars", "waterfall"].includes(o.type) && o.title)
      charts.push({screen: n, type: o.type, title: o.title, ask: o.ask || "", kpi: o.kpi || ""});
    // tables and tiles: what each shows and which KPI IDs it carries (shown on R-01 behind the (i) buttons)
    if ((o.type === "table" || o.type === "tiles") && o.title) {
      const cells = o.type === "tiles" ? (o.items || []).map((t) => t.l || "") :
        (o.rows || []).map((r) => { const a = Array.isArray(r) ? r : (r.c || []); return a.slice(0, 2).map((c) => String((c && c.t) || c || "")).join(" "); });
      const found = [...new Set(cells.join(" ").match(/[A-Z]{2,4}-\d{3}\b/g) || [])];
      blocks.push({screen: n, type: o.type, title: o.title, ask: o.ask || "", cap: o.cap || "", n: cells.length,
        cols: o.type === "table" ? (o.cols || []) : [], kcols: o.kcols || null, kpis: found,
        rowIds: cells.map((c) => c.match(/[A-Z]{2,4}-\d{3}\b/g) || [])});
    }
    if (o.type === "tiles") (o.items || []).forEach((t) => { const m = /^([A-Z]{2,4}-\d{3}) /.exec(t.l || ""); if (m) add(m[1], p, n, t.l); });
    for (const k in o) if (!["equiv", "access", "nav"].includes(k)) w(o[k]);
  })(p);
}
// Core Group and Entity screens as rendered: js/data/resolve.js adds KPI rows the page files don't hold (signal tables,
// kvar plant tables, S-13 answers). Their cards, KPI cells (columns 1–2) and tiles carry an (i) link to R-01, so R-01
// must list those screens too. Only KPIs already in the model are added.
try {
  const {load} = require(path.join(root, "tools/owner_pages.js")), vm = require("vm"), cx = vm.createContext({});
  vm.runInContext(fs.readFileSync(path.join(root, "js/data/base-data.js"), "utf8") + ";this.D=DCTData", cx);
  const K = (cx.D.plant && cx.D.plant.kpi) || {};
  for (const n in screens) {
    if (!["Core Group", "Entity"].includes(screens[n].lens) || !fs.existsSync(path.join(root, n + ".html"))) continue;
    let p; try { p = load(n, ""); } catch (e) { continue; }
    const hit = (s, lab) => { const m = (String(s || "").match(/[A-Z]{3}-\d{3}/g) || []).filter((x) => K[x])[0]; if (m) add(m, p, n, lab); };
    (function w(o, inK) {
      if (!o || typeof o !== "object") return;
      if (Array.isArray(o)) { o.forEach((x) => w(x, inK)); return; }
      if (inK && ID.test(o.id || "") && K[o.id]) add(o.id, p, n, o.name);
      if (o.type === "table") (o.rows || []).forEach((r) => { const a = Array.isArray(r) ? r : (r.c || []), lab = a.slice(0, 3).map((c) => String((c && c.t) || c || "")).join(" ");
        a.slice(0, 2).forEach((c) => hit((c && c.t) || c, lab + " " + (o.title || ""))); });
      if (o.type === "tiles") (o.items || []).forEach((t) => hit((/^[A-Z]{3}-\d{3}\b/.exec(t.l || "") || [""])[0], t.l));
      for (const k in o) if (!["equiv", "access", "nav"].includes(k)) w(o[k], k === "kpis" || inK);
    })(p, false);
  }
} catch (e) { console.log("rendered screens not read: " + e.message); }
const out =Object.keys(ids).sort().map((id) => {
  const xs = [...ids[id]];
  return {id, scopes: [...new Set(xs.map((x) => x.split("|")[0]))].sort().join(","),
    pages: [...new Set(xs.map((x) => x.split("|")[1].replace(/^P[23]-/, "").replace(/-.*/, "")))].join(" "),
    screens: [...new Set(xs.map((x) => x.split("|")[1]))].sort()};
});
fs.writeFileSync(path.join(__dirname, "ui_kpis.json"), JSON.stringify(out));
fs.writeFileSync(path.join(__dirname, "ui_screens.json"), JSON.stringify(screens));
fs.writeFileSync(path.join(__dirname, "ui_charts.json"), JSON.stringify(charts));
fs.writeFileSync(path.join(__dirname, "ui_blocks.json"), JSON.stringify(blocks));
// catalogue placement per KPI from P1-R1 (type, theme, primary screens, drill path, note); the canonical row wins over "see T1" alias rows
const cat = {};
try {
  let comp = null; const save = global.DCLite;
  global.DCLite = {register: (n, t, f) => { class B {} B.prototype.props = {}; comp = f(B); }};
  eval(fs.readFileSync(path.join(root, "js/c/P1-R1-KPICatalogue.js"), "utf8")); global.DCLite = save;
  (new comp().renderVals().themes || []).forEach((t) => (t.groups || []).forEach((g) => (g.rows || []).forEach((r) => {
    if (!ID.test(r.i) || (cat[r.i] && /^see /.test(r.p))) return;
    if (cat[r.i] && !/^see /.test(cat[r.i].placed)) return;
    cat[r.i] = {type: r.c, theme: t.k + " " + t.n, themeQ: t.q || "", group: g.n, placed: r.p, drill: r.d, note: r.a};
  })));
} catch (e) { console.log("catalogue not read: " + e.message); }
fs.writeFileSync(path.join(__dirname, "ui_catalogue.json"), JSON.stringify(cat));
console.log(out.length + " KPI IDs, " + charts.length + " graphs and " + blocks.length + " tables/tiles and " + Object.keys(cat).length + " catalogue rows on " + Object.keys(screens).length + " screens");
