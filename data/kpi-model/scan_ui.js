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
const out = Object.keys(ids).sort().map((id) => {
  const xs = [...ids[id]];
  return {id, scopes: [...new Set(xs.map((x) => x.split("|")[0]))].sort().join(","),
    pages: [...new Set(xs.map((x) => x.split("|")[1].replace(/^P[23]-/, "").replace(/-.*/, "")))].join(" "),
    screens: [...new Set(xs.map((x) => x.split("|")[1]))].sort()};
});
fs.writeFileSync(path.join(__dirname, "ui_kpis.json"), JSON.stringify(out));
fs.writeFileSync(path.join(__dirname, "ui_screens.json"), JSON.stringify(screens));
fs.writeFileSync(path.join(__dirname, "ui_charts.json"), JSON.stringify(charts));
fs.writeFileSync(path.join(__dirname, "ui_blocks.json"), JSON.stringify(blocks));
console.log(out.length + " KPI IDs, " + charts.length + " graphs and " + blocks.length + " tables/tiles on " + Object.keys(screens).length + " screens");
