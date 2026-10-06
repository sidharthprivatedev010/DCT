// Applies the same edit to all six templates (TplA–TplF). Each edit: [part, from, to]; part is "html" (the markup string) or "js".
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..") + "/";
function patch(edits) {
  for (const t of "ABCDEF") {
    const f = root + "js/c/Tpl" + t + ".js"; let s = fs.readFileSync(f, "utf8");
    const a = s.indexOf(", \"") + 2, b = s.indexOf(", function (DCLogic)");
    let html = JSON.parse(s.slice(a, b)), js = s.slice(b);
    for (const [part, from, to] of edits) {
      const src = part === "html" ? html : js, n = src.split(from).length - 1;
      if (n !== 1) throw new Error("Tpl" + t + ": expected 1 match, got " + n + " for " + from.slice(0, 80));
      if (part === "html") html = html.replace(from, () => to); else js = js.replace(from, () => to);
    }
    fs.writeFileSync(f, s.slice(0, a) + JSON.stringify(html) + js);
  }
}
module.exports = patch;
