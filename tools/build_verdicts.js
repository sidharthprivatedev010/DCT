// MANIFEST01 1B: one-line justification for every verdict shown on an Owner screen.
// Reads the verdicts the Owner screens display (tools/verdicts_collect.js) and the model (js/data/base-data.js),
// and writes data/owner-verdicts.json (the register) and js/data/owner-verdicts.js (what the pages read).
// Every number in a justification is the value the screen displays for that KPI and scope.
// Usage: node tools/build_verdicts.js   (rerun after a model rebuild or when Owner screens change)
const fs = require("fs"), vm = require("vm"), path = require("path");
const root = path.join(__dirname, "..") + "/";
const ctx = vm.createContext({}); vm.runInContext(fs.readFileSync(root + "js/data/base-data.js", "utf8"), ctx);
const P = ctx.DCTData.plant, D = ctx.DCTData.kpi;
const ENTS = P.children.Group;                       // entity ids from the data layer (A1, A2)
// 1D: entity name with its code, "<Name> (<CODE>)", as the screens show it
const codes = (t) => { const re = new RegExp("\\b(" + ENTS.map((c) => P.scopes[c]).concat(ENTS.map((c) => "(?<!" + P.scopes[c].replace(c, "") + ")" + c + "(?!\\))")).join("|") + ")\\b(?! \\()", "g"); const code = {}; ENTS.forEach((c) => { code[c] = c; code[P.scopes[c]] = c; }); return t.replace(re, (m) => P.scopes[code[m]] + " (" + code[m] + ")"); };
const MON = {P01: "Apr", P02: "May", P03: "Jun", P04: "Jul", P05: "Aug", P06: "Sep", P07: "Oct", P08: "Nov", P09: "Dec", P10: "Jan", P11: "Feb", P12: "Mar"};

// The cause behind a KPI when its main driver is known from the case record (entity level only).
const CAUSE = {
  "OPS-001": "reliability losses and RM-1 cover", "OPS-002": "dispatch delays", "OPS-004": "dispatch delays",
  "OPS-003": "unplanned downtime", "OPS-005": "unplanned downtime", "REL-002": "repeat breakdowns", "REL-003": "repeat breakdowns",
  "SIG-009": "RM-1 single-source supply", "SIG-007": "RM-1 cover and breakdowns", "PRD-001": "RM-1 cover",
  "SUP-001": "supplier S-07 delays", "SUP-007": "RM-1 single sourcing", "WCP-001": "slower collections", "WCP-006": "slower collections",
  "TRU-001": "the open reconciliation break", "TRU-007": "flash break BRK-SYN-0071",
  "EFF-002": "ALT-SYN-2041", "PRG-003": "MP03 milestone slip", "PRG-002": "MP03 slippage", "REG-006": "a permit renewal due",
  "FIN-005": "capital employed outpacing EBIT", "FIN-007": "returns below the cost of capital"
};

const kOf = (id) => P.kpi[(P.alias || {})[id] || id];
const name = (id) => { const k = kOf(id); return k.name.replace(/\s*\(.*?\)\s*/g, " ").replace(/\s*[·,].*$/, "").replace(/\s+/g, " ").trim(); };
const shown = (id, s) => { const r = (D[id] || {})[s]; if (!r) return null; if (r.v == null) return r.val != null ? String(r.val) : null; return r.v + (r.u ? (/^%/.test(r.u) ? r.u.replace(/^% ?/, "% ").trim() : " " + r.u) : ""); };
const tidy = (s) => s.replace(/% of plan/g, "% of plan").replace(/\s+/g, " ").replace(/ ([,;.])/g, "$1").trim();
const words = (s) => s.split(/\s+/).filter(Boolean).length;
const last = (k, s) => { const v = (k.val || {})[s]; return v ? v[v.length - 1] : null; };
const prev = (k, s) => { const v = (k.val || {})[s]; return v && v.length > 1 ? v[v.length - 2] : null; };
const meets = (k, v) => k.target == null || typeof v !== "number" ? null : (k.better === "up" ? v >= k.target : v <= k.target);
const sn = (s) => P.scopes[s];

function verdictOf(bs) {
  if (/On track/.test(bs)) return ["on_track", "green"];
  if (/Improving/.test(bs)) return ["improving", "green"];
  if (/Declining/.test(bs)) return ["watch", "amber"];
  return ["intervention_required", "red"];
}

// One sentence, ≤ 20 words: the movement, then the driver.
function justify(id, scope, bs) {
  const k = kOf(id), r = (D[id] || {})[scope] || {}, v = last(k, scope), nm = name(id), val = shown(id, scope);
  if (val == null) return null;
  const bad = /Declining|Intervention|Breach|Critical/.test(bs);
  // movement
  let mv;
  if (typeof v === "string") mv = nm + " " + val.toLowerCase();
  else if (k.target != null && r.plan && r.plan !== "—") mv = nm + " " + val + " against a " + r.plan.replace(/^([≥≤]) /, "$1") + " target";
  else if (r.tr && /vs P\d\d/.test(r.tr)) mv = nm + " " + val + ", " + (/^▲/.test(r.tr) ? "up " : /^▼/.test(r.tr) ? "down " : "") + r.tr.replace(/^[▲▼] /, "").replace(/vs (P\d\d)/, (m, p) => "vs " + MON[p]);
  else mv = nm + " " + val + (r.tr && r.tr !== "—" ? ", " + r.tr : "");
  // driver
  let dr = "";
  if (scope === "Group") {
    const e = ENTS.map((s) => ({s, v: last(k, s), t: shown(id, s), m: meets(k, last(k, s))}));
    if (e.some((x) => x.t == null)) dr = "";
    else if (typeof v === "string") dr = e.every((x) => x.t === e[0].t) ? "same in both entities" : e.map((x) => sn(x.s) + " " + x.t.toLowerCase()).join(", ");
    else if (k.target != null && e.every((x) => x.m != null)) {
      const miss = e.filter((x) => !x.m);
      if (!miss.length) dr = "both entities meet it (" + e.map((x) => sn(x.s).replace("Entity ", "") + " " + x.t).join(", ") + ")";
      else if (miss.length === e.length) dr = "both entities miss it (" + e.map((x) => sn(x.s).replace("Entity ", "") + " " + x.t).join(", ") + ")";
      else { const w = miss[0]; dr = meets(k, v) ? sn(w.s) + " at " + w.t + " misses it" : sn(w.s) + " at " + w.t + (CAUSE[id] && bad ? " (" + CAUSE[id] + ")" : "") + " drives the gap"; }
    } else {
      // no target: the entity that moved the Group most this month
      const eps = Math.pow(10, -k.dp) / 2;
      const mvE = e.map((x) => { const d = typeof x.v === "number" && typeof prev(k, x.s) === "number" ? x.v - prev(k, x.s) : 0; return {...x, d: Math.abs(d) < eps ? 0 : d}; });
      const big = mvE.slice().sort((a, b) => Math.abs(b.d) - Math.abs(a.d))[0];
      const dd = (d) => (d > 0 ? "up " : "down ") + Math.abs(d).toLocaleString("en-US", {minimumFractionDigits: k.dp, maximumFractionDigits: k.dp});
      dr = mvE.every((x) => x.d === 0) ? "unchanged in both entities" : "largest move " + sn(big.s) + ", " + dd(big.d) + (CAUSE[id] && bad ? " (" + CAUSE[id] + ")" : "");
    }
  } else {
    const g = shown(id, "Group");
    dr = (CAUSE[id] && bad ? "driven by " + CAUSE[id] + "; " : "") + "Group at " + g;
  }
  // longest version that fits in 20 words: full, without the bracketed detail, cause only, movement only
  const short = mv.replace(" against a ", " vs ").replace(/ target$/, "");
  const cands = [mv + (dr ? "; " + dr : ""), mv + (dr ? "; " + dr.replace(/ \(.*?\)/, "") : ""), short + (dr ? "; " + dr.replace(/ \(.*?\)/, "") : ""),
    short + (dr ? "; " + dr.replace(/; Group at .*$/, "") : ""), short + (CAUSE[id] && bad ? "; driven by " + CAUSE[id] : ""), short].map((x) => tidy(codes(x) + "."));
  return cands.filter((x) => words(x) <= 20)[0];
}

const {collect, SCREENS} = require("./verdicts_collect.js");

const out = [], key = {};
const push = (e) => { const kk = [e.screen, e.section, e.kpi_id, e.level, e.entity_code].join("|"); if (key[kk]) return; key[kk] = 1; out.push(e); };
const entry = (screen, section, id, scope, bs) => {
  const j = justify(id, scope, bs); if (!j) return;
  const [verdict, color] = verdictOf(bs);
  push({persona: "owner", screen, section, kpi_id: id.toLowerCase(), level: scope === "Group" ? "group" : "entity", entity_code: scope === "Group" ? null : scope, entity_name: scope === "Group" ? null : sn(scope),
    verdict, status_color: color, display_verdict: bs, justification: codes(j)});
};
Object.keys(SCREENS).forEach((n) => collect(n).forEach((x) => entry(x.screen, x.section, x.kpi_id, x.scope, x.verdict)));
// KPI detail (S-03o) can open any model KPI at Group or entity level: one entry per KPI × level
Object.keys(P.kpi).forEach((id) => ["Group"].concat(ENTS).forEach((s) => { const r = (D[id] || {})[s]; if (r && r.bs) entry("kpi_detail", "kpi_detail", id, s, r.bs); }));

// Checks: ≤ 20 words, no plant names, colour agrees with the verdict
const bad = out.filter((e) => words(e.justification) > 20 || /\bPlant/.test(e.justification));
bad.forEach((e) => console.log("CHECK", e.kpi_id, e.justification));
fs.writeFileSync(root + "data/owner-verdicts.json", JSON.stringify(out, null, 1) + "\n");
fs.writeFileSync(root + "js/data/owner-verdicts.js", "/* Generated by tools/build_verdicts.js from data/owner-verdicts.json. Do not edit by hand.\n" +
  "   MANIFEST01 1B: one-line justification under every verdict on an Owner screen (cards and table Status cells). */\n" +
  "var DCTVerdicts = (function () {\n  \"use strict\";\n  var LIST = " + JSON.stringify(out.map((e) => [e.kpi_id.toUpperCase(), e.entity_code || "Group", e.justification, e.display_verdict])) + ";\n" +
  fs.readFileSync(root + "tools/owner-verdicts.runtime.js", "utf8") + "})();\nif (typeof module !== \"undefined\" && module.exports) module.exports = DCTVerdicts;\n");
console.log("verdicts:", out.length, "entries ·", out.filter((e) => e.screen !== "kpi_detail").length, "on Owner screens ·", bad.length, "need attention");
