// Re-renders every page's static HTML from js/c/*.js and bumps the ?v= cache tag. Usage: node tools/regen.js
const fs = require("fs"), vm = require("vm"), path = require("path");
const root = path.join(__dirname, "..") + "/";
const DC = require(root + "js/dc-lite.js");
const V = new Date().toISOString().replace(/\D/g, "").slice(0, 14);
let n = 0, fail = [];
for (const f of fs.readdirSync(root).filter((f) => f.endsWith(".html"))) {
  let html = fs.readFileSync(root + f, "utf8").replace(/\?v=\d+"/g, "?v=" + V + '"');
  const m = html.match(/DCLite\.mount\("dc-root", "([^"]+)"/);
  if (!m) continue;
  const scripts = [...html.matchAll(/<script src="(js\/(?:data|c)\/[^"]+)"><\/script>/g)].map((x) => x[1]);
  try {
    const ctx = vm.createContext({DCLite: DC, console});
    scripts.forEach((s) => vm.runInContext(fs.readFileSync(root + s.split("?")[0], "utf8"), ctx));
    const out = DC.renderToString(m[1], {});
    const a = html.indexOf('<div id="dc-root">') + '<div id="dc-root">'.length;
    const b = html.indexOf('<script src="js/dc-lite.js">');
    fs.writeFileSync(root + f, html.slice(0, a) + "\n" + out + "\n</div>\n" + html.slice(b));
    n++;
  } catch (e) { fail.push(f + ": " + e.message); }
}
console.log("regenerated", n); fail.forEach((x) => console.log("FAIL", x));
