/* dc-lite: a small runtime for the exported Control Tower site.
   Renders the Design Component subset used by these files ({{holes}}, sc-for, sc-if, dc-import, onClick)
   and keeps component state, so tabs, disclosures, decisions and the state gallery work when hosted.
   Runs in the browser (window.DCLite) and in Node (server-side render of the initial HTML). */
(function (root) {
  "use strict";
  var comps = {};
  var handlers = [];

  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function lookup(scope, p) {
    p = p.trim();
    if (p === "true") return true; if (p === "false") return false;
    if (/^-?\d+(\.\d+)?$/.test(p)) return Number(p);
    var v = scope, ks = p.split(".");
    for (var i = 0; i < ks.length; i++) { if (v == null) return undefined; v = v[ks[i]]; }
    return v;
  }
  function holeVal(scope, s) {
    var m = /^\{\{([^}]+)\}\}$/.exec(s.trim());
    if (m) return lookup(scope, m[1]);
    return s.replace(/\{\{([^}]+)\}\}/g, function (_, q) { var v = lookup(scope, q); return v == null ? "" : v; });
  }
  function matchClose(s, name, from) {
    var open = new RegExp("<" + name + "(?=[\\s>])", "g"), close = new RegExp("</" + name + ">", "g");
    var depth = 1, i = from;
    while (depth > 0) {
      open.lastIndex = i; close.lastIndex = i;
      var o = open.exec(s), c = close.exec(s);
      if (!c) throw new Error("unclosed " + name);
      if (o && o.index < c.index) { depth++; i = o.index + 1; }
      else { depth--; i = c.index + c[0].length; if (depth === 0) return {start: c.index, end: i}; }
    }
  }
  function attrsOf(tag) { var a = {}, re = /([\w:-]+)="([^"]*)"/g, m; while ((m = re.exec(tag))) a[m[1]] = m[2]; return a; }
  function fixLinks(s) {
    return s.replace(/href="([\w./-]+)\.dc\.html(#[\w-]*)?"/g, function (_, f, h) { return 'href="' + (f === "Main" ? "index" : f) + ".html" + (h || "") + '"'; });
  }

  function register(name, markup, factory) { comps[name] = {markup: markup, factory: factory}; }

  function engine(onChange) {
    var DCLogic = function (props) { this.props = props || {}; this.state = {}; };
    DCLogic.prototype.setState = function (u) { this.state = Object.assign({}, this.state, u); onChange(); };
    DCLogic.prototype.forceUpdate = function () { onChange(); };
    var classes = {}, instances = {};
    function cls(name) {
      if (!comps[name]) throw new Error("component not loaded: " + name);
      if (!classes[name]) classes[name] = comps[name].factory(DCLogic);
      return classes[name];
    }
    function renderComp(name, props, key) {
      var inst = instances[key];
      if (!inst) { var C = cls(name); inst = new C(props); inst.state = inst.state || {}; instances[key] = inst; }
      inst.props = props;
      return render(comps[name].markup, inst.renderVals(), key, {n: 0});
    }
    function renderText(s, scope) {
      s = s.replace(/\s(on[A-Z]\w*)="\{\{([^}]+)\}\}"/g, function (_, ev, p) {
        var fn = lookup(scope, p);
        if (typeof fn !== "function") return "";
        handlers.push(fn);
        return ' data-dc-ev="' + (handlers.length - 1) + '"';
      });
      s = s.replace(/(\s[\w:-]+)="([^"]*\{\{[^"]*)"/g, function (_, k, v) {
        var r = holeVal(scope, v);
        return (r === undefined || r === null || r === false) ? "" : k + '="' + esc(r) + '"';
      });
      s = s.replace(/\{\{([^}]+)\}\}/g, function (_, p) { return esc(lookup(scope, p)); });
      return fixLinks(s);
    }
    function render(s, scope, key, ctr) {
      var out = "", i = 0, re = /<(sc-for|sc-if|dc-import)(?=[\s>])[^>]*>/g, m;
      while ((re.lastIndex = i, m = re.exec(s))) {
        out += renderText(s.slice(i, m.index), scope);
        var name = m[1], a = attrsOf(m[0]);
        var close = matchClose(s, name, m.index + m[0].length);
        var inner = s.slice(m.index + m[0].length, close.start);
        if (name === "sc-for") {
          var list = holeVal(scope, a.list);
          if (Array.isArray(list)) list.forEach(function (item, idx) { var sc = Object.create(scope); sc[a.as] = item; sc.$index = idx; out += render(inner, sc, key, ctr); });
        } else if (name === "sc-if") {
          if (holeVal(scope, a.value)) out += render(inner, scope, key, ctr);
        } else {
          var props = {};
          Object.keys(a).forEach(function (k) { if (k === "name" || /^hint-/.test(k)) return; props[k.replace(/-([a-z])/g, function (_, c) { return c.toUpperCase(); })] = holeVal(scope, a[k]); });
          out += renderComp(a.name, props, key + "/" + a.name + "#" + (ctr.n++));
        }
        i = close.end;
      }
      return out + renderText(s.slice(i), scope);
    }
    return {renderComp: renderComp};
  }

  // Node: one-shot render for the initial HTML
  function renderToString(name, props) { handlers = []; return engine(function () {}).renderComp(name, props || {}, "root"); }

  // Browser: mount and re-render on state change
  function mount(id, name, props) {
    var el = document.getElementById(id), pending = false;
    var eng = engine(function () { if (pending) return; pending = true; Promise.resolve().then(function () { pending = false; draw(); }); });
    function draw() {
      var act = document.activeElement, actEv = act && act.getAttribute ? act.getAttribute("data-dc-ev") : null;
      var fields = Array.prototype.map.call(el.querySelectorAll("textarea,input"), function (x) { return x.value; });
      var open = Array.prototype.map.call(el.querySelectorAll("details"), function (d) { return d.open; });
      handlers = [];
      el.innerHTML = eng.renderComp(name, props || {}, "root");
      Array.prototype.forEach.call(el.querySelectorAll("textarea,input"), function (x, i) { if (fields[i] != null) x.value = fields[i]; });
      Array.prototype.forEach.call(el.querySelectorAll("details"), function (d, i) { if (open[i]) d.open = true; });
      if (actEv != null) { var n = el.querySelector('[data-dc-ev="' + actEv + '"]'); if (n && n.focus) n.focus(); }
    }
    el.addEventListener("click", function (e) {
      var t = e.target.closest ? e.target.closest("[data-dc-ev]") : null;
      if (!t || !el.contains(t)) return;
      var fn = handlers[+t.getAttribute("data-dc-ev")];
      if (typeof fn === "function") { e.preventDefault(); fn(e); }
    });
    draw();
  }

  var api = {register: register, mount: mount, renderToString: renderToString};
  if (typeof module !== "undefined" && module.exports) module.exports = api; else root.DCLite = api;
})(typeof window !== "undefined" ? window : this);
