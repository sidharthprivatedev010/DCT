// Read/write the page JSON inside js/c/<Page>.js (the object after `return { page: `).
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..") + "/";
function span(s) {
  const a = s.indexOf("return { page: ") + "return { page: ".length;
  let d = 0, i = a, q = false;
  for (; i < s.length; i++) { const c = s[i]; if (q) { if (c === "\\") i++; else if (c === '"') q = false; continue; } if (c === '"') q = true; else if (c === "{") d++; else if (c === "}") { d--; if (!d) { i++; break; } } }
  return [a, i];
}
function read(name) { const s = fs.readFileSync(root + "js/c/" + name + ".js", "utf8"); const [a, b] = span(s); return JSON.parse(s.slice(a, b)); }
function write(name, page) { const f = root + "js/c/" + name + ".js"; const s = fs.readFileSync(f, "utf8"); const [a, b] = span(s); fs.writeFileSync(f, s.slice(0, a) + JSON.stringify(page) + s.slice(b)); }
module.exports = {read, write};
if (require.main === module) console.log(JSON.stringify(read(process.argv[2]), null, 1));
