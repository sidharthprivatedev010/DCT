// Loads each Owner page's resolved JSON (what the template receives). Used by tools/check_owner.js.
const fs = require("fs"), vm = require("vm"), path = require("path");
const root = path.join(__dirname, "..") + "/";
const OWNER = ["P2-O01-EnterpriseHealth","P2-G08o-OwnerTrust","P2-O02-ChangeReport","P2-O03-CashLiquidity","P2-O09-Operations","P2-O04-Capex","P2-O05-Risk","P2-O07-Brief","P2-S03o-KPIDetail","P2-S08o-Evidence","P2-R01o-KPIReference","P2-S04-Alert","P2-S05-Case","P2-S07-AIExplain","P2-S09-Contribution","P2-S10-OpsImpact","P2-S11-CashExposure"];
function load(name, search) {
  const html = fs.readFileSync(root + name + ".html", "utf8");
  const scripts = [...html.matchAll(/<script src="(js\/(?:data|c)\/[^"]+)"><\/script>/g)].map((x) => x[1].split("?")[0]);
  let cap = null;
  const DC = {register: function (n, t, f) { if (n !== name) return; const C = f(class { constructor() { this.props = {}; this.state = {}; } }); cap = C; }};
  const ctx = vm.createContext({DCLite: DC, console, location: {search: search || "", pathname: "/" + name + ".html", hash: ""}, window: undefined});
  scripts.filter((s) => !/Tpl[A-F]\.js$/.test(s)).forEach((s) => vm.runInContext(fs.readFileSync(root + s, "utf8"), ctx));
  const page = new cap().renderVals().page;
  return ctx.DCTResolve ? ctx.DCTResolve(page) : page;
}
module.exports = {OWNER, load};
