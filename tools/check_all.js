// MANIFEST03 all-persona checks: G1 entity name with code, G2 no KPI click-throughs. Usage: node tools/check_all.js
const fs = require("fs"), path = require("path"), {load} = require("./owner_pages.js");
const root = path.join(__dirname, "..") + "/";
let bad = 0; const fail = (m) => { bad++; console.log("FAIL", m); };
const files = fs.readdirSync(root).filter((f) => /^P2-.*\.html$/.test(f) && /data-dct-lens=/.test(fs.readFileSync(root + f, "utf8")) && /js\/data\/resolve\.js/.test(fs.readFileSync(root + f, "utf8")));
const SK = /\.(h|href|infoH|scope|kpi|kcols\.[^.]+|id|cat|lvl|k|tag|lens|rid|nav|src)$/;
const BARE = /\b(Entity A[12]|(?<!Entity )A[12](?!\)))\b(?! \()/;
const KID = /^\s*[A-Z]{2,4}-\d{3}\b/;
const walk = (o, p, f) => { if (typeof o === "string") return f(p, o, null); if (Array.isArray(o)) return o.forEach((x, i) => walk(x, p + "." + i, f)); if (o && typeof o === "object") { f(p, null, o); for (const k in o) { if (/^(equiv|access|_h)$/.test(k)) continue; walk(o[k], p + "." + k, f); } } };
const extra = {"P2-S03-KPIDetail": ["?kpi=OPS-001&scope=A1"], "P2-S03e-KPIDetail": ["?kpi=OPS-001&scope=Plant02"], "P2-R01-KPIReference": ["?scope=A2"]};
for (const f of files) {
  const n = f.replace(/\.html$/, "");
  for (const q of [""].concat(extra[n] || [])) {
    let p; try { p = load(n, q); } catch (e) { fail(n + q + " did not load: " + e.message); continue; }
    walk(p, "", (pt, s, o) => {
      if (s != null && !SK.test(pt) && BARE.test(s)) fail(n + q + " bare entity at " + pt + ": " + s.slice(0, 110));
      if (o && ["h", "href"].some((k) => typeof o[k] === "string" && (/KPIDetail|KPIReference/.test(o[k]) || KID.test(o.t || o.l || "")))) fail(n + q + " KPI link at " + pt + ": " + (o.t || o.l || "").slice(0, 60) + " → " + (o.h || o.href));
    });
  }
}
console.log(bad ? bad + " problem(s)" : "All-persona checks passed (" + files.length + " screens)");
// Entity persona: stand-alone cards, plant breakdown, justification, root causes
console.log(require("child_process").execFileSync("node", [path.join(__dirname, "check_entity.js")], {encoding: "utf8"}).trim());
// MANIFEST06: Core Group acceptance checks
console.log(require("child_process").execFileSync("node", [path.join(__dirname, "check_core_group.js")], {encoding: "utf8"}).trim());
