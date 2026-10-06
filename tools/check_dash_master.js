// Checks every number on the Owner dashboard screens (O-03 Cash & Liquidity, O-09 Operational Performance) against the
// master model output data/kpi-model/kpi_values.csv (built from Group-KPI-Model.xlsx): card values (Sep = P06), trend
// deltas (P06 − P05), chart series (P01–P06), heat-map values and the FX amounts typed on O-03 (Group Inputs ÷ 1000).
// Usage: node tools/check_dash_master.js
const fs = require("fs"), path = require("path"), {load} = require("./owner_pages.js");
const ROOT = path.join(__dirname, "..");
const csv = fs.readFileSync(path.join(ROOT, "data/kpi-model/kpi_values.csv"), "utf8").trim().split("\n").slice(1).map((l) => l.split(","));
const M = {}; // periods in the CSV are calendar months: 2026-04 = P01 … 2026-09 = P06
const PER = (ym) => { const m = /^(\d{4})-(\d\d)$/.exec(ym); if (!m) return ym; const n = (+m[2] + 8) % 12 + 1; return "P" + String(n).padStart(2, "0"); };
csv.forEach(([k, s, p, v]) => { (M[k + "|" + s] = M[k + "|" + s] || {})[PER(p)] = v; });
const num = (s) => { const m = /-?[\d,]+(?:\.\d+)?/.exec(String(s).replace(/−/g, "-")); return m ? parseFloat(m[0].replace(/,/g, "")) : NaN; };
const close = (a, b) => Math.abs(a - b) <= Math.max(0.051, Math.abs(b) * 0.0006);
let bad = 0, ok = 0; const fail = (m) => { bad++; console.log("FAIL " + m); };
const chk = (what, shown, kpi, scope, per) => { const raw = (M[kpi + "|" + scope] || {})[per]; if (raw === undefined) return fail(what + ": " + kpi + " " + scope + " " + per + " not in the model");
  const v = parseFloat(raw); if (isNaN(v)) { if (String(shown) !== raw) fail(what + ": shows " + shown + ", model " + raw); else ok++; return; }
  // compared at the shown precision; a value shown in thousands (kt from t, ₹ m from ₹ k) is scaled back
  const x = num(shown), dp = (String(shown).replace(/,/g, "").match(/\.(\d+)/) || ["", ""])[1].length, r = (y) => Math.round(y * 10 ** dp) / 10 ** dp;
  [1, 1000].some((k) => typeof shown === "number" ? close(x, v / k) : r(v / k) === x || close(x, v / k)) ? ok++ : fail(what + ": shows " + shown + ", model " + v); };
for (const pg of ["P2-O03-CashLiquidity", "P2-O09-Operations"]) {
  const p = load(pg);
  for (const d of [].concat(p.dominant || [], p.drivers || [], p.forecast || []).filter((b) => b && b.type === "dash")) {
  (d.cols || []).forEach((col) => [col.hero].concat(col.cards).forEach((c) => { if (!c || !c.kpi) return; const sc = c.scope || "Group", tag = pg.slice(3, 6) + " " + c.l;
    chk(tag + " value", c.v, c.kpi, sc, "P06");
    const m = /[▲▼]\s*([\d,.]+)/.exec(c.tr || ""); if (m) { const a = parseFloat(M[c.kpi + "|" + sc].P06), b = parseFloat(M[c.kpi + "|" + sc].P05); [1, 1000].some((k) => { const dp = (m[1].match(/\.(\d+)/) || ["", ""])[1].length; return Math.abs(Math.round(Math.abs(a - b) / k * 10 ** dp) / 10 ** dp - num(m[1])) < 1e-9 || close(num(m[1]), Math.abs(a - b) / k); }) && (/▲/.test(c.tr) === a > b) ? ok++ : fail(tag + " trend " + c.tr + " vs model " + (a - b).toFixed(2)); } }));
  (d.charts || []).forEach((g) => (g.series || []).forEach((s) => { if (s.kpi) s.v.forEach((y, i) => chk(pg.slice(3, 6) + " chart " + g.t + " " + s.l, y, s.kpi, s.scope || "Group", "P0" + (i + 1))); }));
  }
  (p.drivers || []).forEach((b) => (b.items || []).forEach((t) => t.kpi && chk(pg.slice(3, 6) + " heat " + t.l + " " + t.scope, t.v, t.kpi, t.scope, "P06")));
}
// O-03 typed FX amounts: Group Inputs fx_exposure_k / fx_hedged_k ÷ 1000 (TRS-001 = exposure − hedged)
const o3 = load("P2-O03-CashLiquidity"), fx = (o3.dominant.charts || []).find((g) => /FX/.test(g.t));
const tr1 = (M["TRS-001|Group"] || {});
fx.series[0].v.forEach((e, i) => { const h = fx.series[1].v[i], u = parseFloat(tr1["P0" + (i + 1)]); isNaN(u) ? fail("TRS-001 missing") : close(e - h, u) ? ok++ : fail("FX P0" + (i + 1) + ": exposure − hedged " + (e - h).toFixed(1) + " vs TRS-001 " + u); });
console.log((bad ? "FAILED " + bad + ", " : "") + ok + " numbers on O-03 and O-09 match data/kpi-model/kpi_values.csv");
process.exit(bad ? 1 : 0);
