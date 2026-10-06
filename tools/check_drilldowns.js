// Checks every KPI click-through against the plant → entity → Group model.
// Usage: node tools/check_drilldowns.js [--json out.json]
//   1 Model:  inputs roll up (plant → entity → Group) and every KPI recomputes from them
//             (tools/drilldown_recalc.py on KPI-Model.xlsx) to the values in base-data.js.
//   2 Links:  every KPIDetail link on every rendered page names a model KPI, a valid scope inside
//             the lens, the lens's own detail page, and a scope that matches the card's label.
//   3 Values: the number shown on the clicked card equals the model value at that scope (P06).
//   4 Drill:  DCTResolve.kpiDetail builds the right page for each link: right KPI and scope,
//             children = the scope's children that have data, roll-up node = the parent's value.
const fs = require("fs"), vm = require("vm"), path = require("path"), cp = require("child_process");
const root = path.join(__dirname, "..") + "/";
const DC = require(root + "js/dc-lite.js");

const ctx = vm.createContext({DCLite: DC, console});
["js/data/base-data.js", "js/data/resolve.js"].forEach((s) => vm.runInContext(fs.readFileSync(root + s, "utf8"), ctx));
const D = vm.runInContext("DCTData", ctx), R = vm.runInContext("DCTResolve", ctx), P = D.plant;

const DETAIL = {"Entity": "P2-S03e-KPIDetail.html", "Core Group": "P2-S03-KPIDetail.html", "Owner": "P2-S03o-KPIDetail.html"};
const LENS_OF_DETAIL = Object.fromEntries(Object.entries(DETAIL).map(([l, f]) => [f, l]));
const ROOT = {"Entity": "A1", "Core Group": "Group", "Owner": "Group"};
const canon = (id) => (P.alias || {})[id] || id;
const parentOf = (s) => Object.keys(P.children).find((k) => P.children[k].includes(s)) || null;
const inTree = (s, rt) => { for (let x = s; x; x = parentOf(x)) if (x === rt) return true; return false; };
const last = (k, s) => (k.val[s] || []).at(-1);
const kidsWithData = (k, s) => (P.children[s] || []).filter((c) => k.val[c]);
const fails = [], warns = [], stats = {};
const bump = (n) => (stats[n] = (stats[n] || 0) + 1);
const fail = (layer, kind, o) => fails.push({layer, kind, ...o});
const warn = (layer, kind, o) => warns.push({layer, kind, ...o});

// ---------- Layer 1: model recompute ----------
const L1 = JSON.parse(cp.execFileSync("python3", [root + "tools/drilldown_recalc.py"], {maxBuffer: 1 << 26}).toString());
const SHEET = {Group: "Group", A1: "A1", A2: "A2"}; for (let i = 1; i <= 6; i++) SHEET["Plant0" + i] = "Plant0" + i;
L1.inputs.forEach((f) => fail(1, "input roll-up", f));
stats["1 input roll-ups checked"] = L1.inputsChecked;
for (const id of Object.keys(P.kpi)) {
  const k = P.kpi[id], wb = L1.kpi[id] || L1.kpi[canon(id)];
  if (!wb) { fail(1, "KPI not in workbook", {kpi: id}); continue; }
  for (const s of Object.keys(k.val)) {
    const got = k.val[s], want = wb[SHEET[s]];
    if (!want) { fail(1, "scope not in workbook", {kpi: id, scope: s}); continue; }
    got.forEach((v, i) => {
      bump("1 KPI values compared");
      const w = typeof want[i] === "number" ? want[i] / (k.div || 1) : want[i];   // display unit (e.g. t → kt)
      // base-data is rounded to the KPI's display decimals; the workbook carries 2
      const ok = typeof v === "number" && typeof w === "number" ? Math.abs(v - w) <= 0.5 * Math.pow(10, -k.dp) + 1e-6 * Math.abs(w) : String(v) === String(w);
      if (!ok) fail(1, "value ≠ recomputed", {kpi: id, scope: s, period: P.x[i], shown: v, recomputed: w});
    });
  }
  for (const s of Object.keys(wb)) if (s !== "Group" && !k.val[s] && wb[s].some((v) => typeof v === "number" && v !== 0)) warn(1, "workbook has a value the UI drops", {kpi: id, scope: s});
  // base-data P06 inputs must also roll up by the KPI's own rules
  for (const par of Object.keys(P.children)) for (const f of k.fields) {
    const kids = P.children[par].filter((c) => k.inp[c] && k.inp[c][f] != null);
    if (!kids.length || !k.inp[par] || typeof k.inp[par][f] !== "number") continue;
    const xs = kids.map((c) => k.inp[c][f]), rule = k.rules[f];
    const want = rule === "MIN" ? Math.min(...xs) : rule === "SUM" ? xs.reduce((a, b) => a + b, 0) : null;
    if (want == null || kids.length < P.children[par].length) continue;
    bump("1 P06 input roll-ups checked");
    if (Math.abs(k.inp[par][f] - want) > Math.max(0.01, 1e-6 * Math.abs(want))) fail(1, "drill page states roll-up rule " + rule + " but the input is not rolled up that way", {kpi: id, scope: par, field: f, rule, got: k.inp[par][f], want});
  }
}

// ---------- Render pages, collect links ----------
function lensOfPage(html, file) {
  if (/R01o/.test(file)) return "Owner"; if (/R01e/.test(file)) return "Entity"; if (/R01-/.test(file)) return "Core Group";
  const m = html.match(/DCLite\.mount\("dc-root", "([^"]+)"/);
  const js = m && fs.existsSync(root + "js/c/" + m[1] + ".js") ? fs.readFileSync(root + "js/c/" + m[1] + ".js", "utf8") : "";
  const l = js.match(/"lens":"([^"]+)"/); return l ? l[1] : null;
}
function render(file) {
  const html = fs.readFileSync(root + file, "utf8"), m = html.match(/DCLite\.mount\("dc-root", "([^"]+)"/);
  if (!m) return null;
  const c = vm.createContext({DCLite: DC, console});
  [...html.matchAll(/<script src="(js\/(?:data|c)\/[^"]+)"><\/script>/g)].forEach((x) => vm.runInContext(fs.readFileSync(root + x[1].split("?")[0], "utf8"), c));
  return DC.renderToString(m[1], {});
}
const dec = (s) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const strip = (s) => dec(s.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const links = [];
for (const file of fs.readdirSync(root).filter((f) => /^P2-.*\.html$/.test(f) && !/KPIDetail/.test(f))) {
  let out; try { out = render(file); } catch (e) { fail(2, "page failed to render", {page: file, error: e.message}); continue; }
  if (!out) continue;
  const lens = lensOfPage(fs.readFileSync(root + file, "utf8"), file);
  // dc-lite only rewrites "X.dc.html" or "X.dc.html#hash"; with a query string the link stays broken
  for (const m of out.matchAll(/href="([^"]*\.dc\.html[^"]*)"/g)) fail(2, "unrewritten .dc.html link (404)", {page: file, href: dec(m[1])});
  for (const m of out.matchAll(/<a\b([^>]*?)href="([^"]*KPIDetail\.html[^"]*)"([^>]*)>([\s\S]*?)<\/a>/g)) {
    const attrs = m[1] + m[3], href = dec(m[2]), aria = (attrs.match(/aria-label="([^"]*)"/) || [])[1];
    links.push({page: file, lens, href, label: aria ? dec(aria) : strip(m[4]).slice(0, 160), card: !!aria});
  }
}
stats["2 pages scanned"] = new Set(links.map((l) => l.page)).size;
stats["2 KPIDetail links found"] = links.length;

// ---------- Layer 2 + 3 ----------
const SCOPE_IN = (t) => { const p = /Plant (\d\d)/.exec(t); if (p) return "Plant" + p[1]; const e = /\b(?:Entity )?(A[12])\b/.exec(t); return e ? e[1] : null; };
const unique = new Map();
for (const L of links) {
  const [file, qs] = L.href.split("?"), q = Object.fromEntries(new URLSearchParams(qs || ""));
  const where = {page: L.page, href: L.href, label: L.label};
  if (!q.kpi) { warn(2, "link has no ?kpi (opens the static OPS-001 page)", where); continue; }
  if (!fs.existsSync(root + file)) { fail(2, "target page missing", where); continue; }
  const id = q.kpi, k = P.kpi[canon(id)], tlens = LENS_OF_DETAIL[file];
  if (!k) { fail(2, "KPI not in model (falls back to OPS-001)", {...where, kpi: id}); continue; }
  if (L.lens && tlens !== L.lens) fail(2, "wrong lens detail page", {...where, pageLens: L.lens, targetLens: tlens});
  const rt = ROOT[tlens], scope = q.scope || rt;
  if (!P.scopes[scope]) { fail(2, "unknown scope", {...where, scope}); continue; }
  if (!inTree(scope, rt)) fail(2, "scope outside the lens (silently reset to " + rt + ")", {...where, scope});
  if (!k.val[scope]) fail(2, "KPI has no value at this scope", {...where, kpi: id, scope});
  const named = SCOPE_IN(L.label.split(":")[0]);
  if (named && named !== scope && !(named === "A1" && tlens === "Entity" && scope === "A1")) warn(2, "label names a different scope", {...where, named, scope});
  bump("2 links checked");
  // Layer 3: shown value vs model
  if (L.card && k.val[scope]) {
    const m = L.label.match(/:\s*([−\-+]?[\d,]+(?:\.\d+)?)/);
    if (m) {
      bump("3 card values compared");
      const txt = m[1].replace(/,/g, "").replace("−", "-"), dp = (txt.split(".")[1] || "").length, shown = Number(txt);
      const model = last(k, scope);
      if (typeof model === "number" && Math.abs(Number(model.toFixed(dp)) - shown) > 1e-9 && Math.abs(model / (k.div || 1) - shown) > Math.pow(10, -dp) / 2 + 1e-9)
        fail(3, "card value ≠ model", {...where, kpi: id, scope, shown, model});
    }
  }
  unique.set(file + "?kpi=" + id + "&scope=" + scope, {file, id, scope, tlens});
}

// ---------- Layer 4: drill page ----------
const P0 = {};
for (const f of Object.values(DETAIL)) {
  const src = fs.readFileSync(root + "js/c/" + f.replace(".html", ".js"), "utf8");
  P0[f] = JSON.parse(src.match(/const P0 = (\{.*\});\n/)[1]);
}
for (const [key, u] of unique) {
  bump("4 drill pages built");
  const k = P.kpi[canon(u.id)], base = P0[u.file], where = {drill: key};
  let pg; try { pg = R.kpiDetail(base, "?kpi=" + encodeURIComponent(u.id) + "&scope=" + encodeURIComponent(u.scope)); }
  catch (e) { fail(4, "kpiDetail threw", {...where, error: e.message}); continue; }
  if (pg === base || pg.trust === base.trust) { fail(4, "fell back to the static OPS-001 page", where); continue; }
  if (!pg.title.includes(u.id) || !pg.title.endsWith(P.scopes[u.scope])) fail(4, "title names wrong KPI/scope", {...where, title: pg.title});
  const kids = kidsWithData(k, u.scope), isLeaf = !kids.length, par = parentOf(u.scope);
  const focus = isLeaf && par && inTree(par, ROOT[u.tlens]) && k.val[par] ? par : u.scope, fk = kidsWithData(k, focus);
  const nodes = pg.dominant.nodes;
  if (nodes.length !== fk.length + 1) fail(4, "roll-up shows wrong children", {...where, expected: fk.map((s) => P.scopes[s]), got: nodes.slice(0, -1).map((n) => n.n)});
  else fk.forEach((s, i) => { if (nodes[i].n !== P.scopes[s]) fail(4, "roll-up child mismatch", {...where, expected: P.scopes[s], got: nodes[i].n}); });
  const want = last(k, focus), top = nodes.at(-1).s, fmt = (v) => Number(v).toLocaleString("en-US", {minimumFractionDigits: k.dp, maximumFractionDigits: k.dp});
  if (typeof want === "number" && !top.startsWith(fmt(want))) fail(4, "roll-up total ≠ parent value", {...where, want: fmt(want), got: top});
  if (/^A\d$/.test(u.scope) && !kids.length) bump("4 entity-only KPI drills (stop at entity, by design)");
  // additive KPIs (value ∝ summed input at every scope): "without it" must equal parent − child
  const f0 = k.fields[0], ratios = Object.keys(k.val).filter((s) => k.inp[s] && k.inp[s][f0]).map((s) => last(k, s) / k.inp[s][f0]);
  const linear = k.fields.length === 1 && k.rules[f0] === "SUM" && ratios.length > 1 && ratios.every((r) => Math.abs(r - ratios[0]) <= 1e-3 * Math.abs(ratios[0]))
    && Object.keys(P.children).every((p) => !k.inp[p] || P.children[p].some((c) => !k.inp[c]) || Math.abs(k.inp[p][f0] - P.children[p].reduce((a, c) => a + k.inp[c][f0], 0)) <= 1e-6 * Math.abs(k.inp[p][f0]) + 0.01);
  if (linear) for (const s of fk) {
    const x = k.excl[s], exp = last(k, focus) - last(k, s);
    if (typeof x === "number" && typeof exp === "number" && Math.abs(x - exp) > Math.max(0.02, 1e-4 * Math.abs(exp))) fail(4, "'without it' ≠ parent − child", {...where, child: s, got: x, want: +exp.toFixed(3)});
  }
}

// ---------- Report ----------
const by = (arr) => arr.reduce((m, x) => ((m[x.layer + " · " + x.kind] = (m[x.layer + " · " + x.kind] || 0) + 1), m), {});
console.log("== Stats"); Object.entries(stats).forEach(([k, v]) => console.log("  " + k + ": " + v));
console.log("== Failures: " + fails.length); Object.entries(by(fails)).forEach(([k, v]) => console.log("  " + k + ": " + v));
console.log("== Warnings: " + warns.length); Object.entries(by(warns)).forEach(([k, v]) => console.log("  " + k + ": " + v));
const show = (arr, n) => { const seen = {}; arr.forEach((x) => { const t = x.layer + " · " + x.kind; if ((seen[t] = (seen[t] || 0) + 1) <= n) console.log("  [" + t + "] " + JSON.stringify(Object.fromEntries(Object.entries(x).filter(([a]) => a !== "layer" && a !== "kind")))); }); };
console.log("== Examples (first 5 per kind)"); show(fails, 5); show(warns, 3);
const j = process.argv.indexOf("--json"); if (j > 0) fs.writeFileSync(process.argv[j + 1], JSON.stringify({stats, fails, warns}, null, 1));
process.exitCode = fails.length ? 1 : 0;
