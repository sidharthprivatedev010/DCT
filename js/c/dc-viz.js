/* DCViz: overview visuals for the Control Tower (lab, not yet wired into the templates).
   Each visual is a block type, like "line" or "waterfall". DCViz.scene(block, ctx) turns the block JSON into a
   flat SVG scene { w, h, aria, shapes[], labels[], legend[], read } that DCViz.snippet renders with plain
   {{holes}} + sc-for, so it works in dc-lite in the browser and in tools/regen.js (Node) with no engine change.
   Shared visual language (same as the KPI trust badges):
     solid fill = Certified · solid + amber outline = Certified with exception · hatched + dashed edge = Pending
     grey hatch + dashed edge = Reconciliation break · hollow dotted = Stale / Missing
     green = On track / Improving · amber = Deteriorating · red = Breached / Intervention · purple = Forecast */
(function (root) {
  "use strict";

  var C = {
    ok: "var(--ct-green-700,#1E6B43)", okL: "var(--ct-green-100,#E3F2E9)",
    warn: "var(--ct-amber-500,#C27C0E)", warnD: "var(--ct-amber-700,#8A5300)", warnL: "var(--ct-amber-100,#FBF0DB)",
    bad: "var(--ct-red-700,#A4231C)", badL: "var(--ct-red-100,#FBE6E4)",
    fc: "var(--ct-purple-500,#7E63C7)", fcD: "var(--ct-purple-700,#5A3E9E)", fcL: "var(--ct-purple-100,#EFEAF9)",
    navy: "var(--ct-navy-900,#0E1B33)", navy7: "var(--ct-navy-700,#24406E)", navy1: "var(--ct-navy-100,#E8EDF6)",
    teal: "var(--ct-teal-700,#0B6B73)", tealL: "var(--ct-teal-100,#E1F1F2)",
    ink: "var(--ct-ink,#121A2B)", ink2: "var(--ct-ink-2,#3B4558)", ink3: "var(--ct-ink-3,#5B6576)",
    line: "var(--ct-line,#DCE1E8)", lineS: "var(--ct-line-strong,#B4BDCA)",
    g2: "var(--ct-grey-200,#E4E8ED)", g6: "var(--ct-grey-600,#5F6B7A)",
    surf: "#FFFFFF", surf2: "var(--ct-surface-2,#F8F9FB)"
  };
  var MONO = "'IBM Plex Mono',ui-monospace,monospace", SANS = "'IBM Plex Sans',system-ui,sans-serif";

  /* ---------- helpers ---------- */
  function f1(n) { return Math.round(n * 10) / 10; }
  function sg(n, d) { d = d == null ? 1 : d; var a = Math.abs(n).toFixed(d); return Number(a) === 0 ? "±" + a : (n > 0 ? "+" : "−") + a; }
  function num(s) { if (typeof s === "number") return s; var m = String(s == null ? "" : s).replace(/,/g, "").replace(/−/g, "-").match(/-?\d+(\.\d+)?/); return m ? parseFloat(m[0]) : NaN; }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function pt(cx, cy, r, deg) { var a = deg * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; }
  function circ(x, y, r) { return "M" + f1(x - r) + " " + f1(y) + "a" + r + " " + r + " 0 1 0 " + (2 * r) + " 0a" + r + " " + r + " 0 1 0 " + (-2 * r) + " 0Z"; }
  function rect(x, y, w, h, r) {
    r = Math.min(r || 0, w / 2, h / 2);
    if (!r) return "M" + f1(x) + " " + f1(y) + "h" + f1(w) + "v" + f1(h) + "h" + f1(-w) + "Z";
    return "M" + f1(x + r) + " " + f1(y) + "h" + f1(w - 2 * r) + "a" + r + " " + r + " 0 0 1 " + r + " " + r + "v" + f1(h - 2 * r) + "a" + r + " " + r + " 0 0 1 " + (-r) + " " + r + "h" + f1(-(w - 2 * r)) + "a" + r + " " + r + " 0 0 1 " + (-r) + " " + (-r) + "v" + f1(-(h - 2 * r)) + "a" + r + " " + r + " 0 0 1 " + r + " " + (-r) + "Z";
  }
  function diamond(x, y, r) { return "M" + f1(x) + " " + f1(y - r) + "L" + f1(x + r) + " " + f1(y) + "L" + f1(x) + " " + f1(y + r) + "L" + f1(x - r) + " " + f1(y) + "Z"; }
  function arc(cx, cy, r, a0, a1) {
    var p0 = pt(cx, cy, r, a0), p1 = pt(cx, cy, r, a1), large = Math.abs(a1 - a0) > 180 ? 1 : 0, sw = a1 > a0 ? 1 : 0;
    return "M" + f1(p0[0]) + " " + f1(p0[1]) + "A" + r + " " + r + " 0 " + large + " " + sw + " " + f1(p1[0]) + " " + f1(p1[1]);
  }
  function wedge(cx, cy, r0, r1, a0, a1) {
    var a = pt(cx, cy, r1, a0), b = pt(cx, cy, r1, a1), c = pt(cx, cy, r0, a1), d = pt(cx, cy, r0, a0), lg = a1 - a0 > 180 ? 1 : 0;
    return "M" + f1(a[0]) + " " + f1(a[1]) + "A" + r1 + " " + r1 + " 0 " + lg + " 1 " + f1(b[0]) + " " + f1(b[1]) + "L" + f1(c[0]) + " " + f1(c[1]) + "A" + r0 + " " + r0 + " 0 " + lg + " 0 " + f1(d[0]) + " " + f1(d[1]) + "Z";
  }
  function poly(pts, close) { return pts.map(function (p, i) { return (i ? "L" : "M") + f1(p[0]) + " " + f1(p[1]); }).join("") + (close ? "Z" : ""); }
  function tw(t, fs) { return String(t).length * fs * 0.56; }
  function trunc(t, fs, w) { t = String(t); var n = Math.floor(w / (fs * 0.56)); return t.length > n ? t.slice(0, Math.max(1, n - 1)) + "…" : t; }

  function statusKey(bs) {
    if (bs === "On track" || bs === "Improving") return "ok";
    if (bs === "Deteriorating") return "warn";
    if (bs === "Breached" || bs === "Intervention required" || bs === "Critical") return "bad";
    if (bs === "Forecast breach" || bs === "Forecast") return "fc";
    return "grey";
  }
  function trustKey(ts) {
    var t = String(ts || "");
    if (/^Certified with exception/.test(t)) return "exc";
    if (/^Certified/.test(t) || /^System count/.test(t)) return "cert";
    if (/Reconciliation/.test(t)) return "recon";
    if (/Stale|Missing|overdue/i.test(t)) return "stale";
    if (/^EXT|External/.test(t)) return "ext";
    if (/^(FCST|Forecast)$/.test(t)) return "fcst";
    if (/Pending|LEADING|FCST|PRELIM|Forecast/.test(t)) return "pend";
    return "cert";
  }
  var COL = {ok: C.ok, warn: C.warn, bad: C.bad, fc: C.fc, grey: C.g6, navy: C.navy7, teal: C.teal};
  /* fill + edge for a mark of colour key `ck` in trust state `tk` */
  function paint(ck, tk) {
    var c = COL[ck] || ck;
    if (tk === "exc") return {f: c, s: C.warn, sw: 2, da: "none"};
    if (tk === "pend") return {f: "url(#vzh-" + (COL[ck] ? ck : "grey") + ")", s: c, sw: 1.25, da: "3 2"};
    if (tk === "recon") return {f: "url(#vzh-grey)", s: C.g6, sw: 1.25, da: "4 2"};
    if (tk === "stale") return {f: C.surf, s: C.g6, sw: 1.25, da: "1.5 2"};
    if (tk === "ext") return {f: "url(#vzh-" + (COL[ck] && ck !== "navy" ? ck : "teal") + ")", s: C.teal, sw: 1.5, da: "3 2"};
    if (tk === "fcst") return {f: c, s: C.fc, sw: 2, da: "2 2"};
    return {f: c, s: "none", sw: 0, da: "none"};
  }
  function trustWord(tk) { return {cert: "Certified", exc: "Certified with exception", pend: "Pending certification", recon: "Reconciliation break", stale: "Stale / overdue", ext: "External signal", fcst: "Forecast"}[tk] || "Certified"; }

  /* scene builder */
  function Scene(w, h, aria) {
    var sh = [], lb = [];
    return {
      w: w, h: h, aria: aria || "", shapes: sh, labels: lb, legend: [], read: "",
      P: function (d, o) {
        o = o || {};
        sh.push({d: d, f: o.f || "none", s: o.s || "none", sw: o.sw == null ? 0 : o.sw, da: o.da || "none", o: o.o == null ? 1 : o.o,
          tip: o.tip || "", g: o.g || "", cls: o.cls || "", lc: o.lc || "butt"});
      },
      T: function (x, y, t, o) {
        o = o || {};
        lb.push({x: f1(x), y: f1(y), t: t, a: o.a || "start", fs: o.fs || 11, fw: o.fw || 400, c: o.c || C.ink2, ff: o.mono ? MONO : SANS, tr: o.tr || "", g: o.g || ""});
      }
    };
  }
  var LEG = {
    cert: {l: "Certified", f: C.navy7, s: "none", da: "none"},
    exc: {l: "Certified with exception", f: C.navy7, s: C.warn, da: "none"},
    pend: {l: "Pending certification", f: "url(#vzh-navy)", s: C.navy7, da: "3 2"},
    recon: {l: "Reconciliation break", f: "url(#vzh-grey)", s: C.g6, da: "4 2"},
    stale: {l: "Overdue / stale", f: C.surf, s: C.g6, da: "1.5 2"},
    ext: {l: "External signal", f: "url(#vzh-teal)", s: C.teal, da: "3 2"},
    fcst: {l: "Forecast (dotted purple edge)", f: C.navy7, s: C.fc, da: "2 2"},
    ok: {l: "On track / improving", f: C.ok, s: "none", da: "none"},
    warn: {l: "Deteriorating", f: C.warn, s: "none", da: "none"},
    bad: {l: "Breached / intervention", f: C.bad, s: "none", da: "none"},
    fc: {l: "Forecast", f: C.fc, s: "none", da: "none"}
  };
  function legend(keys, extra) { return keys.map(function (k) { return LEG[k]; }).concat(extra || []); }

  /* ======================================================================
     OWNER · pulseKpi (detailed, kept for reference): every governed KPI as a spoke; ring = plan; outline = enterprise shape; ghost = D-1
     block: {domains:[{n, k:[[id, pol, label]]}], scope, prev:{id: devPct}, clampPct}
     ====================================================================== */
  function pulseKpi(b, ctx) {
    var K = (ctx.data && ctx.data.kpi) || {}, scope = b.scope || "Group";
    var S = Scene(1080, 700), cx = 420, cy = 350, R0 = 150, kpx = 7, CL = b.clampPct || 12, rIn = R0 - CL * kpx, rOut = R0 + CL * kpx;
    var spokes = [], slots = 1;
    b.domains.forEach(function (d) { d.k.forEach(function () { slots++; }); slots++; });
    var step = 360 / slots, slot = 1;
    var sec = [];
    b.domains.forEach(function (d, di) {
      var a0 = -90 + slot * step - step / 2;
      d.k.forEach(function (q) {
        var e = (K[q[0]] || {})[scope] || {}, v = num(e.v != null ? e.v : e.val), p = num(e.plan);
        var dev = isFinite(v) && isFinite(p) && p !== 0 ? (v - p) / Math.abs(p) * 100 * q[1] : NaN;
        var prev = b.prev && b.prev[q[0]] != null ? b.prev[q[0]] : dev;
        spokes.push({id: q[0], l: q[2], a: -90 + slot * step, dev: dev, prev: prev, e: e, d: d.n,
          raw: (e.v != null ? e.v : e.val) + (e.u ? " " + e.u : ""), plan: e.plan, sk: statusKey(e.bs), tk: trustKey(e.ts)});
        slot++;
      });
      sec.push({n: d.n, a0: a0, a1: -90 + slot * step - step / 2, i: di});
      slot++;
    });
    var R = function (dev) { return R0 + clamp(isFinite(dev) ? dev : 0, -CL, CL) * kpx; };
    // sectors, domain names
    sec.forEach(function (s) {
      S.P(wedge(cx, cy, rIn - 14, rOut + 58, s.a0 + 0.6, s.a1 - 0.6), {f: s.i % 2 ? C.surf : C.surf2, s: C.line, sw: 0.75});
      var am = (s.a0 + s.a1) / 2, p = pt(cx, cy, rOut + 72, am), c = Math.cos(am * Math.PI / 180);
      S.T(p[0], p[1] + 4, s.n, {a: c > 0.2 ? "start" : c < -0.2 ? "end" : "middle", fs: 12, fw: 600, c: C.ink});
    });
    // rings
    [[-5, "−5%"], [5, "+5%"]].forEach(function (g) { S.P(circ(cx, cy, R0 + g[0] * kpx), {s: C.lineS, sw: 0.75, da: "2 3"}); });
    S.P(circ(cx, cy, R0), {s: C.navy, sw: 1.5, da: "5 3"});
    S.T(cx + 4, cy - R0 - 4, "PLAN", {fs: 9.5, fw: 600, c: C.navy, mono: 1});
    S.T(cx + 4, cy - R0 - 5 * kpx - 4, "+5%", {fs: 9.5, c: C.ink3, mono: 1});
    S.T(cx + 4, cy - R0 + 5 * kpx + 12, "−5%", {fs: 9.5, c: C.ink3, mono: 1});
    // ghost (D-1) and today outline
    var ok = spokes.filter(function (s) { return isFinite(s.dev); });
    S.P(poly(ok.map(function (s) { return pt(cx, cy, R(s.prev), s.a); }), true), {s: C.g6, sw: 1.25, da: "4 3", o: 0.9});
    S.P(poly(ok.map(function (s) { return pt(cx, cy, R(s.dev), s.a); }), true), {f: C.navy7, o: 0.08});
    S.P(poly(ok.map(function (s) { return pt(cx, cy, R(s.dev), s.a); }), true), {s: C.navy7, sw: 1.25});
    // spokes
    spokes.forEach(function (s) {
      var g = "k-" + s.id;
      S.P(poly([pt(cx, cy, rIn - 8, s.a), pt(cx, cy, rOut + 6, s.a)]), {s: C.line, sw: 0.75});
      var lp = pt(cx, cy, rOut + 12, s.a), flip = Math.cos(s.a * Math.PI / 180) < 0;
      S.T(lp[0], lp[1] + 3, s.id, {fs: 9, c: C.ink3, mono: 1, a: flip ? "end" : "start", tr: "rotate(" + f1(flip ? s.a + 180 : s.a) + " " + f1(lp[0]) + " " + f1(lp[1]) + ")", g: g});
      if (!isFinite(s.dev)) return;
      var r = R(s.dev), p = pt(cx, cy, r, s.a), p0 = pt(cx, cy, R0, s.a), pa = paint(s.sk, s.tk), col = COL[s.sk];
      S.P(poly([p0, p]), {s: col, sw: 2.5, da: s.tk === "cert" ? "none" : "3 2", g: g});
      if (Math.abs(s.dev) > CL) { var q1 = pt(cx, cy, r + (s.dev > 0 ? 9 : -9), s.a - 1.6), q2 = pt(cx, cy, r + (s.dev > 0 ? 9 : -9), s.a + 1.6); S.P(poly([q1, pt(cx, cy, r + (s.dev > 0 ? 15 : -15), s.a), q2]), {s: col, sw: 1.5, g: g}); }
      S.P(circ(p[0], p[1], 5.5), {f: pa.f, s: pa.s === "none" ? C.surf : pa.s, sw: pa.s === "none" ? 1.5 : pa.sw, da: pa.da, g: g});
      S.P(circ(p[0], p[1], 12), {f: "transparent", g: g, cls: "vz-hit",
        tip: s.id + " " + s.l + " · " + s.raw + " vs plan " + s.plan + " · " + sg(s.dev) + "% · " + trustWord(s.tk) + " · " + (s.e.bs || "") + (Math.abs(s.prev - s.dev) >= 0.5 ? " · D-1 " + sg(s.prev) + "%" : "")});
    });
    // centre read-out
    S.P(circ(cx, cy, rIn - 6), {f: C.surf, o: 0.92});
    var within = ok.filter(function (s) { return Math.abs(s.dev) <= 2; }).length, unc = ok.filter(function (s) { return s.tk !== "cert"; }).length;
    var moved = ok.filter(function (s) { return Math.abs(s.prev - s.dev) >= 0.5; });
    S.T(cx, cy - 18, within + " / " + ok.length, {a: "middle", fs: 30, fw: 600, c: C.ink});
    S.T(cx, cy + 2, "KPIs within ±2% of plan", {a: "middle", fs: 11.5, c: C.ink2});
    S.T(cx, cy + 22, moved.length + " moved since D-1 · " + unc + " not certified", {a: "middle", fs: 11, c: C.ink3, mono: 1});
    // side panel: movers + furthest behind
    var X = 850, y = 70;
    S.T(X, y, "MOVED SINCE D-1", {fs: 10, fw: 600, c: C.ink3, mono: 1}); y += 10;
    moved.sort(function (a, c) { return Math.abs(c.prev - c.dev) - Math.abs(a.prev - a.dev); }).slice(0, 5).forEach(function (s) {
      y += 34; var pa = paint(s.sk, s.tk);
      S.P(circ(X + 5, y - 4, 5), {f: pa.f, s: pa.s === "none" ? C.surf : pa.s, sw: pa.s === "none" ? 1.5 : pa.sw, da: pa.da, g: "k-" + s.id});
      S.T(X + 18, y - 6, s.id + " " + s.l, {fs: 12, fw: 600, c: C.ink, g: "k-" + s.id});
      S.T(X + 18, y + 9, sg(s.prev) + "% → " + sg(s.dev) + "% · " + trustWord(s.tk).replace(" certification", "").replace("Reconciliation break", "Recon break"), {fs: 10.5, c: C.ink3, mono: 1});
    });
    y += 44;
    S.T(X, y, "FURTHEST BEHIND PLAN", {fs: 10, fw: 600, c: C.ink3, mono: 1}); y += 10;
    ok.slice().sort(function (a, c) { return a.dev - c.dev; }).slice(0, 5).forEach(function (s) {
      y += 34; var pa = paint(s.sk, s.tk);
      S.P(circ(X + 5, y - 4, 5), {f: pa.f, s: pa.s === "none" ? C.surf : pa.s, sw: pa.s === "none" ? 1.5 : pa.sw, da: pa.da, g: "k-" + s.id});
      S.T(X + 18, y - 6, s.id + " " + s.l, {fs: 12, fw: 600, c: C.ink, g: "k-" + s.id});
      S.T(X + 18, y + 9, sg(s.dev) + "% vs plan · " + (s.e.bs || ""), {fs: 10.5, c: C.ink3, mono: 1});
    });
    S.aria = "Enterprise pulse. " + within + " of " + ok.length + " KPIs within 2% of plan; " + moved.length + " moved since yesterday; " + unc + " not yet certified.";
    S.legend = legend(["ok", "warn", "fc"]).concat([{l: "Dot hatched or dashed = not yet certified", f: "url(#vzh-navy)", s: C.navy7, da: "3 2"}, {l: "Dashed outline = yesterday", f: C.surf, s: C.g6, da: "4 3"}]);
    return S;
  }

  /* ======================================================================
     OWNER · pulse (simple): one petal per domain; petal length = share of KPIs on track; dashed arc = D-1
     block: {domains:[{n, k:[[id, pol, label]]}], scope, d1:{domainName: {ok, why}}}
     ====================================================================== */
  function pulse(b, ctx) {
    var K = (ctx.data && ctx.data.kpi) || {}, scope = b.scope || "Group", S = Scene(960, 500), cx = 330, cy = 250, r0 = 62, R = 190;
    var doms = b.domains.map(function (d) {
      var ks = d.k.map(function (q) { var e = (K[q[0]] || {})[scope] || {}; return {id: q[0], l: q[2], e: e, sk: statusKey(e.bs), tk: trustKey(e.ts)}; });
      var ok = ks.filter(function (k) { return k.sk === "ok"; }).length, unc = ks.filter(function (k) { return k.tk !== "cert"; }).length;
      var prev = b.d1 && b.d1[d.n] ? b.d1[d.n].ok : ok;
      return {n: d.n, full: d.full || d.n, st: d.s || "", ks: ks, ok: ok, n0: ks.length, unc: unc, prev: prev, why: b.d1 && b.d1[d.n] ? b.d1[d.n].why : ""};
    });
    var n = doms.length, step = 360 / n, gap = 5, all = 0, okAll = 0, uncAll = 0;
    var Rr = function (share) { return r0 + share * (R - r0); };
    [0.5, 1].forEach(function (t) { S.P(circ(cx, cy, Rr(t)), {s: C.line, sw: 0.75, da: t === 1 ? "none" : "2 3"}); });
    doms.forEach(function (d, i) {
      all += d.n0; okAll += d.ok; uncAll += d.unc;
      var a0 = -90 + i * step + gap / 2, a1 = -90 + (i + 1) * step - gap / 2, am = (a0 + a1) / 2, sh = d.ok / d.n0, g = "p-" + i;
      // colour = the page's official domain status when given, else share on track
      var ck = d.st ? statusKey(d.st === "Intervention required" ? "Breached" : d.st) : (sh >= 0.8 ? "ok" : sh >= 0.5 ? "warn" : "bad");
      S.P(wedge(cx, cy, r0, R, a0, a1), {f: C.surf2, s: C.line, sw: 0.75, g: g});
      S.P(wedge(cx, cy, r0, Math.max(r0 + 3, Rr(sh)), a0, a1), {f: COL[ck], o: 0.9, g: g});
      if (d.prev !== d.ok) S.P(arc(cx, cy, Rr(d.prev / d.n0), a0 + 2, a1 - 2), {s: C.ink, sw: 2, da: "4 3", g: g});
      var behind = d.ks.filter(function (k) { return k.sk !== "ok"; }).map(function (k) { return k.id + " " + k.l; });
      S.P(wedge(cx, cy, r0, R + 4, a0, a1), {f: "transparent", cls: "vz-hit", g: g,
        tip: d.full + (d.st ? " · " + d.st : "") + " · " + d.ok + " of " + d.n0 + " on track" + (d.prev !== d.ok ? " (D-1: " + d.prev + ")" : "") + " · " + d.unc + " not certified" + (behind.length ? " · Not on track: " + behind.join(", ") : "")});
      var p = pt(cx, cy, R + 22, am), c = Math.cos(am * Math.PI / 180), an = c > 0.25 ? "start" : c < -0.25 ? "end" : "middle", up = Math.sin(am * Math.PI / 180) < -0.5;
      var y0 = p[1] + (up ? -10 : 4);
      S.T(p[0], y0, d.n, {a: an, fs: 13, fw: 600, c: C.ink, g: g});
      S.T(p[0], y0 + 16, d.ok + " of " + d.n0 + " on track", {a: an, fs: 11, c: ck === "ok" ? C.ink3 : C.ink2, mono: 1});
      if (d.st) S.T(p[0], y0 + 31, d.st, {a: an, fs: 10.5, fw: 600, c: COL[ck] === C.warn ? C.warnD : COL[ck], g: g});
    });
    S.T(cx, cy - 4, okAll + "/" + all, {a: "middle", fs: 26, fw: 600, c: C.ink});
    S.T(cx, cy + 14, "on track", {a: "middle", fs: 11.5, c: C.ink2});
    S.T(cx, cy + 30, uncAll + " not certified", {a: "middle", fs: 10.5, c: C.ink3, mono: 1});
    // side panel: what changed + where to look
    var X = 660, y = 90, moved = doms.filter(function (d) { return d.prev !== d.ok; });
    if (b.changes) {
      // the page's own 24-hour change ledger, so the pulse tells the same story as the screen
      S.T(X, y, "LAST 24 HOURS", {fs: 10, fw: 600, c: C.ink3, mono: 1});
      b.changes.forEach(function (c, i) {
        var yy = y + 30 + i * 44, di = doms.findIndex(function (d) { return d.n === c.d; });
        S.T(X, yy, trunc(c.t, 13, 960 - X), {fs: 13, fw: 600, c: c.bad ? C.bad : C.ink, g: di >= 0 ? "p-" + di : ""});
        S.T(X, yy + 17, trunc(c.sub, 11.5, 960 - X), {fs: 11.5, c: C.ink3});
      });
      y = y + 50 + b.changes.length * 44;
    } else {
      S.T(X, y, "SINCE YESTERDAY", {fs: 10, fw: 600, c: C.ink3, mono: 1});
      if (!moved.length) S.T(X, y + 28, "No domain changed", {fs: 13, c: C.ink2});
      moved.forEach(function (d, i) {
        var yy = y + 30 + i * 44, worse = d.ok < d.prev;
        S.T(X, yy, d.n + "  " + d.prev + " → " + d.ok + " on track", {fs: 13, fw: 600, c: worse ? C.bad : C.ok, g: "p-" + doms.indexOf(d)});
        S.T(X, yy + 17, d.why, {fs: 11.5, c: C.ink3});
      });
      y = y + 50 + Math.max(1, moved.length) * 44;
    }
    S.T(X, y, "LOWEST SHARE ON TRACK", {fs: 10, fw: 600, c: C.ink3, mono: 1});
    doms.slice().sort(function (a, z) { return a.ok / a.n0 - z.ok / z.n0; }).slice(0, b.changes ? 2 : 3).forEach(function (d, i) {
      var yy = y + 30 + i * 44, first = d.ks.filter(function (k) { return k.sk !== "ok"; })[0];
      S.T(X, yy, d.n + " · " + Math.round(d.ok / d.n0 * 100) + "% on track", {fs: 13, fw: 600, c: C.ink, g: "p-" + doms.indexOf(d)});
      if (first) S.T(X, yy + 17, "e.g. " + first.id + " " + first.l + " (" + (first.e.bs || "") + ")", {fs: 11.5, c: C.ink3});
    });
    S.aria = "Enterprise pulse. " + okAll + " of " + all + " KPIs on track across " + n + " domains. " + doms.map(function (d) { return d.full + " " + d.ok + " of " + d.n0 + (d.st ? ", " + d.st : ""); }).join("; ") + "." + (b.changes ? " Last 24 hours: " + b.changes.map(function (c) { return c.t; }).join("; ") + "." : " " + moved.length + " domains changed since yesterday.");
    S.legend = doms.some(function (d) { return d.st; })
      ? [{l: "On track / improving", f: C.ok, s: "none", da: "none"}, {l: "Deteriorating", f: C.warn, s: "none", da: "none"}, {l: "Intervention required", f: C.bad, s: "none", da: "none"}, {l: "Petal length = share of KPIs on track", f: C.surf2, s: C.line, da: "none"}]
      : [{l: "≥ 80% on track", f: C.ok, s: "none", da: "none"}, {l: "50–79%", f: C.warn, s: "none", da: "none"}, {l: "< 50%", f: C.bad, s: "none", da: "none"}, {l: "Dashed arc = yesterday", f: C.surf, s: C.ink, da: "4 3"}];
    return S;
  }

  /* ======================================================================
     OWNER · horizon: trajectories toward the materiality threshold (100%), last 7 days + forecast
     block: {from:-6, to:3, items:[{id, l, pts:[[day, pctOfThreshold]], fc:[[day,pct]], ts, own}]}
     ====================================================================== */
  function horizon(b) {
    var S = Scene(960, 400), x0 = 60, x1 = 660, yt = 60, yb = 360, d0 = b.from, d1 = b.to, vmax = 160;
    var X = function (d) { return x0 + (d - d0) / (d1 - d0) * (x1 - x0); }, Y = function (v) { return yb - clamp(v, 0, vmax) / vmax * (yb - yt); };
    S.P(rect(X(0), yt, x1 - X(0), yb - yt), {f: C.surf2});
    S.T(X(0) + 8, yt + 14, "FORECAST", {fs: 9.5, fw: 600, c: C.ink3, mono: 1});
    S.P(rect(x0, yt, x1 - x0, Y(100) - yt), {f: C.badL, o: 0.55});
    [0, 50, 100, 150].forEach(function (v) { S.P(poly([[x0, Y(v)], [x1, Y(v)]]), {s: v === 100 ? C.bad : C.line, sw: v === 100 ? 1.5 : 0.75}); S.T(x0 - 8, Y(v) + 4, v + "%", {a: "end", fs: 10, c: C.ink3, mono: 1}); });
    S.T(x0 + 6, Y(100) - 6, "MATERIALITY THRESHOLD", {fs: 9.5, fw: 600, c: C.bad, mono: 1});
    for (var d = d0; d <= d1; d++) S.T(X(d), yb + 18, d === 0 ? "Today" : (d < 0 ? "D" + d : "D+" + d), {a: "middle", fs: 10, c: d === 0 ? C.ink : C.ink3, fw: d === 0 ? 600 : 400, mono: 1});
    S.P(poly([[X(0), yt - 6], [X(0), yb]]), {s: C.navy, sw: 1.25});
    var ends = [], nCross = 0, nNear = 0, nProj = 0;
    b.items.forEach(function (it) {
      var last = it.pts[it.pts.length - 1], v = last[1], tk = trustKey(it.ts), g = "h-" + it.id;
      var crossed = v >= 100, near = !crossed && v >= 75;
      var proj = it.fc && it.fc.some(function (q) { return q[1] >= 100; }) && !crossed;
      if (crossed) nCross++; else if (proj) nProj++; else if (near) nNear++;
      var ck = crossed ? "bad" : proj ? "fc" : near ? "warn" : "grey";
      S.P(poly(it.pts.map(function (q) { return [X(q[0]), Y(q[1])]; })), {s: COL[ck], sw: crossed ? 2.25 : 1.5, o: crossed || near || proj ? 1 : 0.6, g: g, lc: "round"});
      if (it.fc) S.P(poly(it.fc.map(function (q) { return [X(q[0]), Y(q[1])]; })), {s: C.fc, sw: 1.5, da: "4 3", g: g});
      for (var i = 1; i < it.pts.length; i++) {
        var a = it.pts[i - 1], c = it.pts[i];
        if (a[1] < 100 && c[1] >= 100) { var t = (100 - a[1]) / (c[1] - a[1]), xd = a[0] + t * (c[0] - a[0]); S.P(circ(X(xd), Y(100), 3), {f: C.surf, s: C.bad, sw: 1.5, g: g}); it.cx = xd; }
      }
      var pa = paint(ck, tk);
      S.P(circ(X(last[0]), Y(v), 6), {f: pa.f, s: pa.s === "none" ? C.surf : pa.s, sw: pa.s === "none" ? 1.5 : pa.sw, da: pa.da, g: g});
      var tip = it.id + " " + it.l + " · " + v + "% of threshold · " + trustWord(tk) + (it.own ? " · " + it.own : "") + (it.cx != null ? " · crossed " + (it.cx < 0 ? "D" + f1(it.cx) : "today") : "");
      S.P(circ(X(last[0]), Y(v), 13), {f: "transparent", tip: tip, g: g, cls: "vz-hit"});
      ends.push({y: Y(it.fc ? it.fc[it.fc.length - 1][1] : v), it: it, ck: ck, tk: tk, g: g, v: v, crossed: crossed, proj: proj});
    });
    ends.sort(function (a, c) { return a.y - c.y; });
    var lastY = -99;
    var prevC = false;
    ends.forEach(function (e) { e.ly = Math.max(e.y, lastY + (prevC ? 30 : 17)); lastY = e.ly; prevC = e.crossed; });
    var over = lastY - (yb + 4); if (over > 0) ends.forEach(function (e) { e.ly -= over; });
    ends.forEach(function (e) {
      var lx = x1 + 18;
      S.P(poly([[x1 + 2, e.y], [lx - 4, e.ly - 4]]), {s: C.lineS, sw: 0.75});
      S.T(lx, e.ly, trunc(e.it.id + " · " + e.it.l, 11.5, 960 - lx), {fs: 11.5, fw: e.crossed || e.proj ? 600 : 400, c: e.crossed || e.proj ? C.ink : C.ink3, g: e.g});
      if (e.crossed) S.T(lx, e.ly + 13, (e.it.cx != null && e.it.cx < 0 ? "crossed D" + f1(e.it.cx) : "crossed today") + (e.it.own ? " · " + e.it.own : ""), {fs: 10, c: C.bad, mono: 1});
    });
    S.T(x0, 22, nCross + " crossed · " + nProj + " projected to cross · " + nNear + " approaching (≥75%)", {fs: 13, fw: 600, c: C.ink});
    S.T(x0, 40, "Each line is a KPI or signal's distance to its materiality threshold, D-6 to today, with forecast continuation.", {fs: 11, c: C.ink3});
    S.aria = "Materiality horizon. " + nCross + (nCross === 1 ? " item" : " items") + " crossed the threshold, " + nProj + " projected to cross, " + nNear + " approaching.";
    S.legend = [{l: "Crossed", f: C.bad, s: "none", da: "none"}, {l: "Projected to cross", f: C.fc, s: "none", da: "none"}, {l: "Approaching", f: C.warn, s: "none", da: "none"}, {l: "Below 75%", f: C.g6, s: "none", da: "none"}, LEG.pend, LEG.recon];
    return S;
  }

  /* ======================================================================
     OWNER · bridge: plan → actual waterfall where each step shows how much of it is certified
     block: {unit, axis:[lo,hi], start:{l,v,ts}, end:{l,v,ts}, steps:[{l, v, ts}]}
     ====================================================================== */
  function bridge(b) {
    var S = Scene(960, 420), x0 = 70, x1 = 940, yt = 110, yb = 340, lo = b.axis[0], hi = b.axis[1];
    var Y = function (v) { return yb - (v - lo) / (hi - lo) * (yb - yt); };
    var cols = [b.start].concat(b.steps, [b.end]), n = cols.length, bw = (x1 - x0) / n, w = Math.min(64, bw * 0.62);
    // certainty meter
    var gross = 0, by = {cert: 0, exc: 0, fcst: 0, pend: 0, ext: 0, recon: 0, stale: 0};
    b.steps.forEach(function (s) { gross += Math.abs(s.v); by[trustKey(s.ts)] += Math.abs(s.v); });
    var mx = x0, mw = x1 - x0;
    S.T(x0, 22, b.meterL || "How much of the movement is certified", {fs: 12, fw: 600, c: C.ink});
    S.T(x1, 22, "gross movement " + gross.toFixed(1) + " " + b.unit + " · net " + sg(b.end.v - b.start.v) + " " + b.unit, {a: "end", fs: 11, c: C.ink3, mono: 1});
    ["cert", "exc", "fcst", "pend", "ext", "recon"].forEach(function (k) {
      if (!by[k]) return; var ww = by[k] / gross * mw, pa = paint(k === "recon" ? "grey" : "navy", k);
      S.P(rect(mx, 32, ww - 2, 16, 2), {f: pa.f, s: pa.s, sw: pa.sw, da: pa.da, tip: trustWord(k) + " · " + by[k].toFixed(1) + " " + b.unit + " (" + Math.round(by[k] / gross * 100) + "%)", cls: "vz-hit"});
      if (ww > 70) S.T(mx, 64, Math.round(by[k] / gross * 100) + "% " + trustWord(k).replace(" certification", "").toLowerCase(), {fs: 10.5, c: C.ink2, mono: 1});
      mx += ww;
    });
    // axis
    for (var v = Math.ceil(lo); v <= hi; v += (b.tick || 2)) { S.P(poly([[x0, Y(v)], [x1, Y(v)]]), {s: C.line, sw: 0.75}); S.T(x0 - 8, Y(v) + 4, String(v), {a: "end", fs: 10, c: C.ink3, mono: 1}); }
    var run = b.start.v, prevTop = null;
    cols.forEach(function (c, i) {
      var cx = x0 + bw * i + (bw - w) / 2, total = i === 0 || i === n - 1, a, z, ck, tk = trustKey(c.ts);
      if (total) { a = lo; z = c.v; ck = "navy"; } else { a = run; z = run + c.v; run = z; ck = c.v >= 0 ? "ok" : "bad"; }
      var top = Y(Math.max(a, z)), bot = Y(Math.min(a, z)), pa = paint(ck, tk);
      S.P(rect(cx, top, w, Math.max(2, bot - top), 2), {f: pa.f, s: pa.s, sw: pa.sw, da: pa.da, cls: "vz-hit",
        tip: c.l + " · " + (total ? c.v.toFixed(1) : sg(c.v)) + " " + b.unit + " · " + trustWord(tk)});
      if (total) { S.P(poly([[cx - 3, yb - 8], [cx + w + 3, yb - 14]]), {s: C.surf, sw: 4}); S.P(poly([[cx - 3, yb - 4], [cx + w + 3, yb - 10]]), {s: C.surf, sw: 2}); }
      if (prevTop != null) S.P(poly([[prevTop[0], prevTop[1]], [cx, prevTop[1]]]), {s: C.lineS, sw: 1, da: "2 2"});
      prevTop = [cx + w, Y(total ? c.v : z)];
      S.T(cx + w / 2, (total || c.v >= 0 ? top : bot + 14) - (total || c.v >= 0 ? 6 : 0), total ? c.v.toFixed(1) : sg(c.v), {a: "middle", fs: 11.5, fw: 600, c: C.ink, mono: 1});
      S.T(cx + w / 2, yb + 18, c.l, {a: "middle", fs: 11, fw: total ? 600 : 400, c: C.ink});
      S.T(cx + w / 2, yb + 33, trustWord(tk).replace(" certification", "").replace("Certified with exception", "Cert · exception"), {a: "middle", fs: 9.5, c: tk === "cert" ? C.ink3 : C.warnD, mono: 1});
    });
    S.aria = "Confidence-weighted bridge from " + b.start.l + " " + b.start.v + " to " + b.end.l + " " + b.end.v + " " + b.unit + ". Gross movement " + gross.toFixed(1) + ": " + Object.keys(by).filter(function (k) { return by[k]; }).map(function (k) { return trustWord(k) + " " + by[k].toFixed(1); }).join(", ") + ".";
    var used = {}; b.steps.forEach(function (st) { used[trustKey(st.ts)] = 1; });
    S.legend = legend(["ok", "bad"].concat(["cert", "exc", "fcst", "pend", "ext", "recon"].filter(function (k) { return used[k]; }))).concat([{l: "Totals (axis cut)", f: C.navy7, s: "none", da: "none"}]);
    return S;
  }

  /* ======================================================================
     CORE GROUP · flow: entity → driver variance ribbons; width = |CU m|; left node height = gross movement
     block: {unit, entities:[{id,l}], drivers:[{id,l,ts}], m:[[entity×driver signed values]], hi:"A1"}
     ====================================================================== */
  function flow(b) {
    var H = b.combine ? 470 : 500, S = Scene(960, H), xl = 210, xr = 660, nw = 14, yt = b.combine ? 110 : 50, gap = b.combine ? 26 : 10;
    var E = b.entities, D = b.drivers, M = b.m;
    if (b.combine) {
      // keep the highlighted entity, fold the rest into one node so only 2 × drivers ribbons remain
      var hiI = E.findIndex(function (e) { return e.id === b.hi; }), rest = D.map(function (d, j) { return M.reduce(function (a, r, i) { return a + (i === hiI ? 0 : r[j]); }, 0); });
      E = [E[hiI], {id: "rest", l: b.combine}]; M = [M[hiI], rest.map(function (v) { return Math.round(v * 10) / 10; })];
    }
    var eg = E.map(function (e, i) { return M[i].reduce(function (a, v) { return a + Math.abs(v); }, 0); });
    var en = E.map(function (e, i) { return M[i].reduce(function (a, v) { return a + v; }, 0); });
    var dn = D.map(function (d, j) { return M.reduce(function (a, r) { return a + r[j]; }, 0); });
    var gross = eg.reduce(function (a, v) { return a + v; }, 0), net = en.reduce(function (a, v) { return a + v; }, 0);
    var k = (H - yt - 20 - Math.max(gap * (E.length - 1), (b.combine ? 12 : gap) * (D.length - 1) + 26)) / gross;
    // node positions
    var ey = [], y = yt;
    E.forEach(function (e, i) { ey.push(y); y += eg[i] * k + gap; });
    var fav = D.map(function (d, j) { return j; }).filter(function (j) { return dn[j] >= 0; }), adv = D.map(function (d, j) { return j; }).filter(function (j) { return dn[j] < 0; });
    var dy = [], y2 = yt;
    var dgap = b.combine ? 12 : gap;
    fav.concat(adv).forEach(function (j, n) { if (n === fav.length) y2 += 26; dy[j] = y2; y2 += Math.abs(dn[j]) * k + dgap; });
    // ribbons
    var eo = ey.slice(), dof = dy.slice();
    E.forEach(function (e, i) {
      fav.concat(adv).forEach(function (j) {
        var v = M[i][j]; if (!v) return;
        var h = Math.abs(v) * k, a0 = eo[i], b0 = dof[j], mxx = (xl + nw + xr) / 2, hi = e.id === b.hi;
        eo[i] += h; dof[j] += h;
        var d = "M" + (xl + nw) + " " + f1(a0) + "C" + mxx + " " + f1(a0) + " " + mxx + " " + f1(b0) + " " + xr + " " + f1(b0) +
          "L" + xr + " " + f1(b0 + h) + "C" + mxx + " " + f1(b0 + h) + " " + mxx + " " + f1(a0 + h) + " " + (xl + nw) + " " + f1(a0 + h) + "Z";
        S.P(d, {f: v >= 0 ? C.ok : C.bad, o: hi ? 0.42 : 0.2, g: "e-" + e.id + " d-" + D[j].id, cls: "vz-hit",
          tip: e.l + " → " + D[j].l + " · " + sg(v) + " " + b.unit + " · " + trustWord(trustKey(D[j].ts))});
      });
    });
    // nodes + labels
    E.forEach(function (e, i) {
      var h = eg[i] * k, hi = e.id === b.hi, g = "e-" + e.id;
      S.P(rect(xl, ey[i], nw, h, 2), {f: hi ? C.navy : C.navy7, g: g});
      S.T(xl - 12, ey[i] + h / 2 - 2, e.l, {a: "end", fs: 12.5, fw: 600, c: C.ink, g: g});
      S.T(xl - 12, ey[i] + h / 2 + 13, "net " + sg(en[i]) + " · gross " + eg[i].toFixed(1), {a: "end", fs: 10.5, c: C.ink3, mono: 1});
      S.P(rect(0, ey[i], xl + nw, h, 0), {f: "transparent", g: g, cls: "vz-hit", tip: e.l + " · net " + sg(en[i]) + " " + b.unit + " · gross movement " + eg[i].toFixed(1) + " (" + Math.round(eg[i] / gross * 100) + "% of group)"});
    });
    D.forEach(function (d, j) {
      var h = Math.max(2, Math.abs(dn[j]) * k), tk = trustKey(d.ts), pa = paint(dn[j] >= 0 ? "ok" : "bad", tk), g = "d-" + d.id;
      S.P(rect(xr, dy[j], nw, h, 2), {f: pa.f, s: pa.s, sw: pa.sw, da: pa.da, g: g});
      var share = b.combine ? M[0][j] : null, two = b.combine && h >= 6;
      S.T(xr + nw + 10, dy[j] + h / 2 + (two ? -2 : 4), d.l + "  " + sg(dn[j]), {fs: 12, fw: 600, c: C.ink, g: g});
      if (b.combine) S.T(xr + nw + 10, dy[j] + h / 2 + (two ? 12 : 18), E[0].l.replace("Entity ", "") + " " + sg(share) + " · others " + sg(M[1][j]), {fs: 10.5, c: C.ink3, mono: 1});
      if (tk !== "cert") S.T(xr + nw + 10 + tw(d.l + "  " + sg(dn[j]), 12) + 8, dy[j] + h / 2 + (two ? -2 : 4), trustWord(tk).replace(" certification", ""), {fs: 9.5, c: C.warnD, mono: 1});
      S.P(rect(xr, dy[j], 240, h, 0), {f: "transparent", g: g, cls: "vz-hit", tip: d.l + " · net " + sg(dn[j]) + " " + b.unit + " · " + trustWord(tk)});
    });
    S.T(xr + nw + 10, yt - 14, "FAVOURABLE", {fs: 9.5, fw: 600, c: C.ok, mono: 1});
    S.T(xr + nw + 10, dy[adv[0]] - 10, "ADVERSE", {fs: 9.5, fw: 600, c: C.bad, mono: 1});
    S.T(xl - 12, yt - 14, "ENTITY · NET · GROSS (" + b.unit + ")", {a: "end", fs: 9.5, fw: 600, c: C.ink3, mono: 1});
    var hi = E.findIndex(function (e) { return e.id === b.hi; });
    if (b.combine) {
      S.T(0, 22, b.head || (E[0].l + " nets " + sg(en[0]) + " " + b.unit + " but moves " + eg[0].toFixed(1) + " of " + gross.toFixed(1) + " " + b.unit + ": " + Math.round(eg[0] / gross * 100) + "% of the group's movement"), {fs: 15, fw: 600, c: C.ink});
      S.T(0, 42, "How to read: each ribbon is money moving from an entity (left) to a driver (right). Ribbon width = " + b.unit + ". Green helps, red hurts.", {fs: 11.5, c: C.ink3});
    }
    S.aria = "Variance flow. Group net " + sg(net) + " " + b.unit + " from gross movement " + gross.toFixed(1) + "." + (hi >= 0 ? " " + E[hi].l + " carries " + Math.round(eg[hi] / gross * 100) + "% of gross movement." : "");
    var usedF = {}; D.forEach(function (d) { usedF[trustKey(d.ts)] = 1; });
    S.legend = [{l: "Favourable", f: C.ok, s: "none", da: "none", o: 0.4}, {l: "Adverse", f: C.bad, s: "none", da: "none"}].concat(["exc", "fcst", "pend", "ext", "recon"].filter(function (k) { return usedF[k]; }).map(function (k) { return LEG[k]; })).concat([{l: "Hover an entity or driver to trace it", f: C.surf, s: C.lineS, da: "none"}]);
    return S;
  }

  /* ======================================================================
     CORE GROUP · fingerprints: one identical glyph per entity; ring = plan; outward = better
     block: {axes:[{l, plan, pol, span, u}], rows:[{id, l, v:[...], ts:[...]}]}
     ====================================================================== */
  /* fingerprints with b.focus: one entity large with labelled axes, peers small; plain-words "behind on" notes */
  function fingerFocus(b) {
    var A = b.axes, n = A.length, S = Scene(960, 440);
    var score = function (ax, v) { return clamp((v - ax.plan) / ax.span * ax.pol, -1, 1); };
    var fi = b.rows.findIndex(function (r) { return r.id === b.focus; }), F = b.rows[fi], peers = b.rows.filter(function (r, i) { return i !== fi; });
    var behind = function (r) { return A.filter(function (ax, i) { return score(ax, r.v[i]) <= -0.5; }).map(function (ax) { return ax.l; }); };
    function glyph(cx, cy, R0, Rm, r, big, g) {
      for (var i = 0; i < n; i++) S.P(poly([pt(cx, cy, 0, -90 + i * 360 / n), pt(cx, cy, R0 + Rm + 4, -90 + i * 360 / n)]), {s: C.line, sw: 0.75});
      S.P(circ(cx, cy, R0), {s: C.navy, sw: big ? 1.5 : 1, da: "4 3"});
      var sc = r.v.map(function (v, i) { return score(A[i], v); }), pts = sc.map(function (s, i) { return pt(cx, cy, R0 + s * Rm, -90 + i * 360 / n); });
      var bad = behind(r).length > 0, col = bad ? C.bad : C.navy7;
      S.P(poly(pts, true), {f: col, o: bad ? 0.16 : 0.1, g: g});
      S.P(poly(pts, true), {s: col, sw: big ? 2 : 1.25, g: g});
      pts.forEach(function (p, i) {
        var s = sc[i], ck = s <= -0.5 ? "bad" : s < 0 ? "warn" : "ok", tk = trustKey(r.ts && r.ts[i]), pa = paint(ck, tk), rr = big ? 6 : 3.5;
        S.P(circ(p[0], p[1], rr), {f: pa.f, s: pa.s === "none" ? C.surf : pa.s, sw: pa.s === "none" ? 1.25 : pa.sw, da: pa.da, g: g});
        S.P(circ(p[0], p[1], rr + 6), {f: "transparent", cls: "vz-hit", g: g, tip: r.l + " · " + A[i].l + " " + r.v[i] + A[i].u + " vs plan " + A[i].plan + A[i].u + " · " + trustWord(tk)});
      });
    }
    var bf = behind(F);
    S.T(0, 22, F.l + " is behind plan on " + bf.length + " of " + n + " KPIs; its peers sit on or near plan", {fs: 15, fw: 600, c: C.ink});
    S.T(0, 42, "How to read: the dashed ring is plan. A point outside the ring is better than plan, inside is worse. Same axes for every entity.", {fs: 11.5, c: C.ink3});
    // focus glyph with labelled axes
    var cx = 250, cy = 225, R0 = 70, Rm = 46;
    glyph(cx, cy, R0, Rm, F, true, "f-" + F.id);
    A.forEach(function (ax, i) {
      var a = -90 + i * 360 / n, p = pt(cx, cy, R0 + Rm + 20, a), c = Math.cos(a * Math.PI / 180), s = Math.sin(a * Math.PI / 180);
      var an = Math.abs(c) < 0.2 ? "middle" : c > 0 ? "start" : "end", y = p[1] + (s < -0.5 ? -14 : s > 0.5 ? 14 : 0), sc = score(ax, F.v[i]);
      S.T(p[0], y, ax.l, {a: an, fs: 12.5, fw: 600, c: C.ink});
      S.T(p[0], y + 15, F.v[i] + ax.u + " vs " + ax.plan + ax.u, {a: an, fs: 11, c: sc <= -0.5 ? C.bad : C.ink3, fw: sc <= -0.5 ? 600 : 400, mono: 1});
    });
    S.T(cx, 430, F.l, {a: "middle", fs: 14, fw: 600, c: C.ink});
    // peers
    S.T(530, 86, "PEERS · SAME AXES", {fs: 10, fw: 600, c: C.ink3, mono: 1});
    S.P(poly([[500, 80], [500, 400]]), {s: C.line, sw: 1});
    peers.forEach(function (r, i) {
      var px = 570 + i * 86, py = 200, bh = behind(r);
      glyph(px, py, 26, 17, r, false, "f-" + r.id);
      S.T(px, py + 66, r.l, {a: "middle", fs: 12, fw: 600, c: C.ink});
      S.T(px, py + 82, bh.length ? "Behind: " + bh.join(", ") : "Near plan", {a: "middle", fs: 10, c: bh.length ? C.bad : C.ink3, mono: 1});
    });
    S.aria = F.l + " behind plan on " + bf.join(", ") + ". Peers: " + peers.map(function (r) { return r.l + (behind(r).length ? " behind on " + behind(r).join(", ") : " on plan"); }).join("; ") + ".";
    S.legend = [{l: "Better than plan", f: C.ok, s: "none", da: "none"}, {l: "Slightly behind", f: C.warn, s: "none", da: "none"}, {l: "Materially behind", f: C.bad, s: "none", da: "none"}, LEG.pend, LEG.recon];
    return S;
  }

  function fingerprints(b) {
    if (b.focus) return fingerFocus(b);
    var A = b.axes, n = A.length, cw = 130, kw = 250, W = kw + cw * b.rows.length + 10, S = Scene(W, 300), R0 = 32, Rm = 22;
    function score(ax, v) { return clamp((v - ax.plan) / ax.span * ax.pol, -1, 1); }
    function glyph(cx, cy, vals, tss, key, g) {
      for (var i = 0; i < n; i++) { var a = -90 + i * 360 / n; S.P(poly([pt(cx, cy, 6, a), pt(cx, cy, R0 + Rm + 4, a)]), {s: C.line, sw: 0.75}); }
      S.P(circ(cx, cy, R0), {s: C.navy, sw: 1, da: "3 2"});
      if (key) return;
      var sc = vals.map(function (v, i) { return score(A[i], v); }), pts = sc.map(function (s, i) { return pt(cx, cy, R0 + s * Rm, -90 + i * 360 / n); });
      var bad = Math.sqrt(sc.reduce(function (a, s) { return a + (s < 0 ? s * s : 0); }, 0) / n);
      S.P(poly(pts, true), {f: bad > 0.35 ? C.bad : C.navy7, o: bad > 0.35 ? 0.14 : 0.08, g: g});
      S.P(poly(pts, true), {s: bad > 0.35 ? C.bad : C.navy7, sw: 1.25, g: g});
      pts.forEach(function (p, i) {
        var s = sc[i], ck = s <= -0.3 ? "bad" : s < 0 ? "warn" : "ok", pa = paint(ck, trustKey(tss && tss[i]));
        S.P(circ(p[0], p[1], 3.5), {f: pa.f, s: pa.s === "none" ? C.surf : pa.s, sw: pa.s === "none" ? 1 : pa.sw, da: pa.da, g: g});
        S.P(circ(p[0], p[1], 9), {f: "transparent", cls: "vz-hit", g: g, tip: A[i].l + " · " + vals[i] + (A[i].u || "") + " vs plan " + A[i].plan + (A[i].u || "") + " · " + trustWord(trustKey(tss && tss[i]))});
      });
      return bad;
    }
    // key glyph
    var kx = kw / 2, cy = 130;
    glyph(kx, cy, null, null, true);
    A.forEach(function (ax, i) {
      var a = -90 + i * 360 / n, p = pt(kx, cy, R0 + Rm + 10, a), c = Math.cos(a * Math.PI / 180);
      S.T(p[0], p[1] + 4, ax.l, {a: Math.abs(c) < 0.2 ? "middle" : c > 0 ? "start" : "end", fs: 9.5, c: C.ink2, mono: 1});
    });
    S.T(kx, 238, "KEY", {a: "middle", fs: 10, fw: 600, c: C.ink3, mono: 1});
    S.T(kx, 254, "ring = plan · out = better", {a: "middle", fs: 9.5, c: C.ink3});
    var scores = [];
    b.rows.forEach(function (r, i) {
      var cx = kw + cw * i + cw / 2, g = "f-" + r.id, bad = glyph(cx, cy, r.v, r.ts, false, g);
      scores.push({r: r, s: bad, cx: cx});
    });
    var worst = scores.slice().sort(function (a, c) { return c.s - a.s; })[0];
    scores.forEach(function (q) {
      var top = q === worst;
      if (top) S.P(rect(q.cx - cw / 2 + 6, 28, cw - 12, 250, 4), {s: C.navy, sw: 1.5});
      S.T(q.cx, 238, q.r.l, {a: "middle", fs: 12.5, fw: 600, c: C.ink, g: "f-" + q.r.id});
      S.T(q.cx, 254, "shortfall index " + q.s.toFixed(2), {a: "middle", fs: 9.5, c: top ? C.bad : C.ink3, mono: 1});
      if (top) S.T(q.cx, 46, "OUTLIER", {a: "middle", fs: 9.5, fw: 600, c: C.navy, mono: 1});
    });
    S.aria = "Entity fingerprints across " + n + " KPIs. Largest shortfall: " + worst.r.l + ".";
    S.legend = [{l: "Better than plan", f: C.ok, s: "none", da: "none"}, {l: "Slightly behind", f: C.warn, s: "none", da: "none"}, {l: "Materially behind", f: C.bad, s: "none", da: "none"}, LEG.pend, LEG.recon];
    return S;
  }

  /* ======================================================================
     CORE GROUP · tide: certification progress through close vs last three closes, plus entity × domain grid
     block: {days:n, today:i, target:day, stack:{cert:[], exc:[], pend:[], recon:[]}, prior:[{l, v:[]}],
             grid:{cols:[], rows:[{l, c:["cert"|"exc"|"pend"|"recon"|"stale"]}]}}
     ====================================================================== */
  function tide(b) {
    var S = Scene(1000, 400), x0 = 50, x1 = 520, yt = 50, yb = 320, n = b.days;
    var X = function (i) { return x0 + i / (n - 1) * (x1 - x0); }, Y = function (v) { return yb - v / 100 * (yb - yt); };
    [0, 25, 50, 75, 100].forEach(function (v) { S.P(poly([[x0, Y(v)], [x1, Y(v)]]), {s: C.line, sw: 0.75}); S.T(x0 - 8, Y(v) + 4, v + "%", {a: "end", fs: 10, c: C.ink3, mono: 1}); });
    var dl = b.dayL || "D";
    for (var i = 0; i < n; i++) S.T(X(i), yb + 18, dl + (i + 1), {a: "middle", fs: 10, c: i === b.today ? C.ink : C.ink3, fw: i === b.today ? 600 : 400, mono: 1});
    S.P(rect(X(b.target), yt, x1 - X(b.target), yb - yt), {f: C.surf2});
    S.P(poly([[X(b.target), yt - 8], [X(b.target), yb]]), {s: C.navy, sw: 1.25, da: "4 3"});
    S.T(X(b.target) + 6, yt - 2, b.targetL || ("CLOSE · D" + (b.target + 1)), {fs: 9.5, fw: 600, c: C.navy, mono: 1});
    // stacked area, bottom-up: cert, exc, pend, recon
    var keys = ["cert", "exc", "pend", "recon"], base = [];
    for (i = 0; i <= b.today; i++) base.push(0);
    keys.forEach(function (k) {
      var arr = b.stack[k], top = base.map(function (v, i) { return v + arr[i]; });
      var d = poly(top.map(function (v, i) { return [X(i), Y(v)]; })) + base.slice().reverse().map(function (v, j) { var i = base.length - 1 - j; return "L" + f1(X(i)) + " " + f1(Y(v)); }).join("") + "Z";
      var pa = paint(k === "recon" ? "grey" : "navy", k);
      S.P(d, {f: pa.f, s: pa.s, sw: pa.s === "none" ? 0 : 1, da: pa.da, o: k === "pend" ? 0.75 : 1, tip: trustWord(k) + " · " + arr[b.today] + "% at D" + (b.today + 1), cls: "vz-hit"});
      base = top;
    });
    // priors
    b.prior.forEach(function (p, j) {
      S.P(poly(p.v.map(function (v, i) { return [X(i), Y(v)]; })), {s: C.g6, sw: 1, o: 0.55 + j * 0.15, da: "none"});
    });
    var lo7 = Math.min.apply(null, b.prior.map(function (p) { return p.v[b.today + 1]; }));
    S.T(X(b.today + 1) + 4, Y(lo7) + 16, b.prior.map(function (p) { return p.l; }).join(" · ") + " (grey)", {fs: 9.5, c: C.ink3, mono: 1});
    var now = b.stack.cert[b.today] + b.stack.exc[b.today];
    var pace = (now - (b.stack.cert[b.today - 2] + b.stack.exc[b.today - 2])) / 2, proj = Math.min(100 - (b.stack.recon[b.today] || 0), now + pace * (b.target - b.today));
    S.P(poly([[X(b.today), Y(now)], [X(b.target), Y(proj)]]), {s: C.navy, sw: 2, da: "5 3"});
    S.P(circ(X(b.target), Y(proj), 4.5), {f: C.surf, s: C.navy, sw: 2, tip: "Projected at close on current pace · " + Math.round(proj) + "%", cls: "vz-hit"});
    S.T(X(b.target) + 8, Y(proj) + 4, "≈" + Math.round(proj) + "% at close", {fs: 11, fw: 600, c: C.navy});
    S.P(circ(X(b.today), Y(now), 5), {f: C.navy, s: C.surf, sw: 1.5});
    S.T(x0, 22, now + "% certified at " + dl + (b.today + 1) + " · usual " + Math.min.apply(null, b.prior.map(function (p) { return p.v[b.today]; })) + "–" + Math.max.apply(null, b.prior.map(function (p) { return p.v[b.today]; })) + "%", {fs: 13, fw: 600, c: C.ink});
    if (b.side) {
      var sx = 600, sy = 70;
      S.T(sx, 22, b.side.head, {fs: 12, fw: 600, c: C.ink});
      b.side.rows.forEach(function (r, i) {
        var yy = sy + i * 58, pa = paint(r.k === "recon" || r.k === "stale" ? "grey" : "navy", r.k);
        S.P(rect(sx, yy - 14, 22, 22, 3), {f: pa.f, s: pa.s, sw: pa.s === "none" ? 0 : 1.5, da: pa.da});
        S.T(sx + 34, yy, r.v + "  " + r.l, {fs: 13, fw: 600, c: C.ink});
        S.T(sx + 34, yy + 16, r.n, {fs: 11, c: C.ink3});
      });
    }
    if (!b.grid) {
      S.aria = "Certification tide. " + now + "% certified at " + dl + (b.today + 1) + ", projected " + Math.round(proj) + "% at close.";
      S.legend = legend(["cert", "pend", "recon", "stale"]).concat([{l: "Previous closes", f: C.g6, s: "none", da: "none"}, {l: "Projection at current pace", f: C.surf, s: C.navy, da: "5 3"}]);
      return S;
    }
    // grid
    var G = b.grid, gx = 660, gy = 120, cs = 30, gp = 4;
    S.T(gx - 8, 22, "Entity × domain · trust state of leadership KPIs", {fs: 12, fw: 600, c: C.ink});
    G.cols.forEach(function (c, j) { var x = gx + j * (cs + gp) + cs / 2; S.T(x, gy - 8, c, {a: "start", fs: 9.5, c: C.ink3, mono: 1, tr: "rotate(-40 " + f1(x) + " " + f1(gy - 8) + ")"}); });
    G.rows.forEach(function (r, i) {
      var y = gy + i * (cs + gp), okn = r.c.filter(function (k) { return k === "cert" || k === "exc"; }).length;
      S.T(gx - 10, y + cs / 2 + 4, r.l, {a: "end", fs: 11.5, fw: 600, c: C.ink});
      r.c.forEach(function (k, j) {
        var pa = paint(k === "recon" || k === "stale" ? "grey" : "navy", k);
        S.P(rect(gx + j * (cs + gp), y, cs, cs, 3), {f: pa.f, s: pa.s, sw: pa.s === "none" ? 0 : (k === "exc" ? 2.5 : 1.25), da: pa.da, cls: "vz-hit", tip: r.l + " · " + G.cols[j] + " · " + trustWord(k)});
      });
      S.T(gx + G.cols.length * (cs + gp) + 6, y + cs / 2 + 4, okn + "/" + r.c.length, {fs: 11, c: okn < r.c.length - 1 ? C.bad : C.ink3, fw: okn < r.c.length - 1 ? 600 : 400, mono: 1});
    });
    S.aria = "Certification tide. " + now + "% certified at D" + (b.today + 1) + ", projected " + Math.round(proj) + "% at close.";
    S.legend = legend(["cert", "exc", "pend", "recon"]).concat([{l: "Previous closes", f: C.g6, s: "none", da: "none"}, {l: "Projection at current pace", f: C.surf, s: C.navy, da: "5 3"}]);
    return S;
  }

  /* ======================================================================
     CORE GROUP · river: open escalations by stage; x within a stage = age vs stage SLA; past SLA piles at the edge
     block: {stages:[{l, sla}], items:[{id, l, ent, sev, st, age}], thru:[n per transition], resolved:{n, med}}
     ====================================================================== */
  function river(b) {
    var S = Scene(980, 390), st = b.stages, n = st.length, x0 = 20, cw = (960 - x0) / n, yt = 70, yb = 300;
    var SEVC = {crit: C.bad, high: C.warn, med: C.g6};
    st.forEach(function (s, i) {
      var x = x0 + i * cw, inner = cw - 24;
      S.P(rect(x + 4, yt, inner, yb - yt, 4), {f: C.surf2, s: C.line, sw: 0.75});
      var cnt = b.items.filter(function (it) { return it.st === i; }).length, late = b.items.filter(function (it) { return it.st === i && s.sla && it.age > s.sla; }).length;
      S.T(x + 4, yt - 30, s.l, {fs: 12.5, fw: 600, c: C.ink});
      S.T(x + 4, yt - 14, s.sla ? cnt + " open · " + (s.slaL || "SLA " + s.sla + " d") + (late ? " · " + late + " late" : "") : (b.resolved.l || b.resolved.n + " in last 7 d · median " + b.resolved.med + " d"), {fs: 10, c: late ? C.bad : C.ink3, fw: late ? 600 : 400, mono: 1});
      if (s.sla) { var xs = x + 4 + inner * 0.72; S.P(poly([[xs, yt + 4], [xs, yb - 4]]), {s: C.bad, sw: 1, da: "3 3", o: 0.7}); S.T(xs + 3, yb - 8, b.clockL || "SLA", {fs: 9, c: C.bad, mono: 1}); }
      if (i < n - 1 && b.thru[i] != null) {
        var h = 4 + b.thru[i] * 2.2, xa = x + cw - 20, xb = x + cw + 4, yy = yb + 34;
        S.P(rect(xa - cw * 0.35, yy - h / 2, cw * 0.35 + (xb - xa) + 30, h, h / 2), {f: C.navy7, o: 0.18, tip: b.thru[i] + " moved " + s.l + " → " + st[i + 1].l + " in the last 7 days", cls: "vz-hit"});
        S.T(xa + 2, yy + 4, b.thru[i] + " →", {a: "middle", fs: 10, c: C.ink2, mono: 1});
      }
      if (!s.sla) {
        for (var k = 0; k < b.resolved.n; k++) S.P(circ(x + 22 + (k % 6) * 18, yb - 20 - Math.floor(k / 6) * 18, 6), {f: C.ok, o: 0.3});
      }
    });
    if (b.thru && b.thru.length) S.T(x0 + 4, yb + 56, "THROUGHPUT LAST 7 DAYS", {fs: 9, c: C.ink3, mono: 1});
    var used = {};
    b.items.forEach(function (it) {
      var s = st[it.st], x = x0 + it.st * cw + 4, inner = cw - 24, r = clamp(8 + it.age * 1.3, 9, 18);
      var t = clamp(it.age / s.sla, 0, 1.5), px = x + 14 + (t <= 1 ? t * (inner * 0.72 - 28) : inner * 0.72 + (t - 1) / 0.5 * (inner * 0.28 - 16));
      var slotKey = it.st + ":" + (it.age > s.sla ? "L" : "E"), k = used[slotKey] = (used[slotKey] || 0) + 1;
      var py = yt + 34 + (k - 1) * 56, late = it.age > s.sla, g = "r-" + it.id;
      S.P(circ(px, py, r), {f: late ? (it.sev === "crit" ? C.badL : it.sev === "high" ? C.warnL : C.g2) : C.surf, s: SEVC[it.sev], sw: late ? 2.5 : 1.75, g: g});
      S.T(px, py + 3.5, it.ent, {a: "middle", fs: 10, fw: 600, c: C.ink, mono: 1, g: g});
      S.P(circ(px, py, r + 6), {f: "transparent", cls: "vz-hit", g: g, tip: it.id + " · " + it.l + " · " + it.ent + " · " + it.sev + " · " + (it.ageL || it.age + " d") + " in " + s.l + (it.ageL ? "" : " (SLA " + s.sla + " d)")});
      S.T(clamp(px, x + 56, x + inner - 56), py + r + 13, it.id + (late || it.ageL ? " · " + (it.ageL || it.age + " d") : ""), {a: "middle", fs: 10, fw: late ? 600 : 400, c: late ? C.bad : C.ink3, mono: 1});
    });
    var late = b.items.filter(function (it) { return it.age > st[it.st].sla; });
    S.T(x0 + 4, 18, b.head || (late.length + " of " + b.items.length + " open escalations are past their stage SLA"), {fs: 13, fw: 600, c: C.ink});
    if (!b.thru || !b.thru.length) S.h = yb + 14;
    S.aria = "Escalation aging river. " + late.length + " of " + b.items.length + " open escalations past stage SLA.";
    S.legend = [{l: "Critical", f: C.surf, s: C.bad, da: "none"}, {l: "High", f: C.surf, s: C.warn, da: "none"}, {l: "Medium", f: C.surf, s: C.g6, da: "none"}, {l: "Filled = past SLA · size = age", f: C.badL, s: C.bad, da: "none"}];
    return S;
  }

  /* ======================================================================
     ENTITY · tree: causal driver tree; edge width = |contribution|; worst adverse path highlighted
     block: {unit, nodes:[{id, p, l, v, d, ts}]}   (p = parent id; d = signed contribution)
     ====================================================================== */
  function tree(b) {
    var N = {}, roots = [];
    b.nodes.forEach(function (q) { N[q.id] = Object.assign({kids: []}, q); });
    b.nodes.forEach(function (q) { if (q.p) N[q.p].kids.push(N[q.id]); else roots.push(N[q.id]); });
    var leaf = 0, depth = 0, lh = 50;
    (function lay(nd, lv) { nd.lv = lv; depth = Math.max(depth, lv); if (!nd.kids.length) { nd.y = leaf++ * lh; } else { nd.kids.forEach(function (k) { lay(k, lv + 1); }); nd.y = (nd.kids[0].y + nd.kids[nd.kids.length - 1].y) / 2; } })(roots[0], 0);
    // critical path: follow the most adverse child
    var crit = {}, c = roots[0];
    while (c) { crit[c.id] = 1; var kids = c.kids.filter(function (k) { return k.d < 0; }).sort(function (a, z) { return a.d - z.d; }); c = kids[0]; }
    var nw = 220, nh = 42, gapx = (960 - 20 - nw) / depth, S = Scene(980, leaf * lh + 40), oy = 34;
    var X = function (nd) { return 10 + nd.lv * gapx; }, Yc = function (nd) { return oy + nd.y + nh / 2; };
    function anc(nd) { var a = [], q = nd; while (q) { a.push("t-" + q.id); q = q.p ? N[q.p] : null; } return a.join(" "); }
    function desc(nd) { var a = ["t-" + nd.id]; nd.kids.forEach(function (k) { a.push(desc(k)); }); return a.join(" "); }
    b.nodes.forEach(function (q) {
      var nd = N[q.id]; if (!nd.p) return;
      var pr = N[nd.p], xa = X(pr) + nw, ya = Yc(pr), xb = X(nd), yb = Yc(nd), mx = (xa + xb) / 2, cr = crit[nd.id] && crit[pr.id];
      S.P("M" + f1(xa) + " " + f1(ya) + "C" + f1(mx) + " " + f1(ya) + " " + f1(mx) + " " + f1(yb) + " " + f1(xb) + " " + f1(yb),
        {s: nd.d >= 0 ? C.ok : cr ? C.bad : C.warn, sw: Math.max(1.5, Math.abs(nd.d) * 2.4), o: cr ? 0.85 : 0.4, g: "t-" + nd.id + " " + desc(nd)});
    });
    b.nodes.forEach(function (q) {
      var nd = N[q.id], x = X(nd), y = oy + nd.y, cr = crit[nd.id], tk = trustKey(nd.ts), ck = nd.d >= 0 ? "ok" : cr ? "bad" : "warn", g = anc(nd);
      S.P(rect(x, y, nw, nh, 4), {f: C.surf, s: cr ? C.navy : C.lineS, sw: cr ? 1.75 : 1, da: tk === "cert" || tk === "exc" ? "none" : "4 2", g: g});
      var pa = paint(ck, tk);
      S.P(rect(x + 1, y + 1, 5, nh - 2, 0), {f: pa.f, g: g});
      S.T(x + 14, y + 17, trunc(nd.l, 12, nw - 76), {fs: 12, fw: 600, c: C.ink, g: g});
      S.T(x + 14, y + 33, trunc(nd.v, 10.5, nw - 76), {fs: 10.5, c: C.ink3, mono: 1});
      S.T(x + nw - 8, y + 17, sg(nd.d), {a: "end", fs: 12.5, fw: 600, c: nd.d >= 0 ? C.ok : C.bad, mono: 1});
      S.T(x + nw - 8, y + 33, tk === "cert" ? b.unit : trustWord(tk).replace(" certification", "").replace("Reconciliation break", "Recon break"), {a: "end", fs: 9.5, c: tk === "cert" ? C.ink3 : C.warnD, mono: 1});
      S.P(rect(x, y, nw, nh, 4), {f: "transparent", cls: "vz-hit", g: g, tip: nd.l + " · " + nd.v + " · contribution " + sg(nd.d) + " " + b.unit + " · " + trustWord(tk) + (cr ? " · on the critical path" : "")});
    });
    var path = Object.keys(crit).map(function (id) { return N[id].l.split(" (")[0]; });
    S.T(10, 16, "Critical path: " + path.join(" → "), {fs: 12, fw: 600, c: C.bad});
    S.aria = "Causal driver tree for " + roots[0].l + ". Critical path " + path.join(", ") + ".";
    S.legend = [{l: "Adds to the gap (critical path)", f: C.bad, s: "none", da: "none"}, {l: "Adds to the gap", f: C.warn, s: "none", da: "none"}, {l: "Offsets the gap", f: C.ok, s: "none", da: "none"}, {l: "Dashed node = not yet certified", f: C.surf, s: C.lineS, da: "4 2"}, {l: "Hover a node to trace its path", f: C.surf, s: C.navy, da: "none"}];
    return S;
  }

  /* ======================================================================
     ENTITY · lanes: causal drivers as a swimlane map. Row = function that owns the item; column = causal depth.
     Links that cross a lane are handoffs: where fixing it becomes another function's job.
     block: {unit, lanes:[{id, l}], cols:[l], nodes:[{id, p, l, v, d, ts, lane}]}   (col = depth from the root)
     ====================================================================== */
  function lanes(b) {
    var N = {}, root = null;
    b.nodes.forEach(function (q) { N[q.id] = Object.assign({kids: []}, q); });
    b.nodes.forEach(function (q) { if (q.p) N[q.p].kids.push(N[q.id]); else root = N[q.id]; });
    (function dep(nd, d) { nd.col = d; nd.kids.forEach(function (k) { dep(k, d + 1); }); })(root, 0);
    var crit = {}, c = root;
    while (c) { crit[c.id] = 1; c = c.kids.filter(function (k) { return k.d < 0; }).sort(function (a, z) { return a.d - z.d; })[0]; }
    // cell stacks → lane heights
    var cell = {}, nh = 40, ng = 8, pad = 12;
    b.nodes.forEach(function (q) { var nd = N[q.id], key = nd.lane + "|" + nd.col; (cell[key] = cell[key] || []).push(nd); nd.slot = cell[key].length - 1; });
    var laneH = {}, laneY = {}, yt = 92, y = yt;
    b.lanes.forEach(function (l) {
      var mx = 1; Object.keys(cell).forEach(function (k) { if (k.split("|")[0] === l.id) mx = Math.max(mx, cell[k].length); });
      laneH[l.id] = mx * (nh + ng) - ng + pad * 2; laneY[l.id] = y; y += laneH[l.id];
    });
    var x0 = 150, cw = b.cols.length <= 3 ? 230 : 180, nw = cw - 16, xs = x0 + b.cols.length * cw + 14, S = Scene(980, y + 16);
    var NX = function (nd) { return x0 + nd.col * cw + 10; };
    var NY = function (nd) { var n = cell[nd.lane + "|" + nd.col].length, h = n * (nh + ng) - ng; return laneY[nd.lane] + (laneH[nd.lane] - h) / 2 + nd.slot * (nh + ng); };
    // root-cause totals per lane (leaves only)
    var leafSum = {}, advAll = 0, advOut = 0;
    b.nodes.forEach(function (q) { var nd = N[q.id]; if (nd.kids.length) return; leafSum[nd.lane] = (leafSum[nd.lane] || 0) + nd.d; if (nd.d < 0) { advAll += nd.d; if (nd.lane !== root.lane) advOut += nd.d; } });
    var rootLane = b.lanes.filter(function (l) { return l.id === root.lane; })[0];
    S.T(0, 22, b.head || (rootLane.l + " reports the " + sg(root.d) + " " + b.unit + " gap, but " + sg(advOut) + " of the " + sg(advAll) + " adverse root causes sit with other functions"), {fs: 15, fw: 600, c: C.ink});
    S.T(0, 42, "How to read: each row is the function that owns the item; columns go from result to root cause. A ring marks a handoff to another function.", {fs: 11.5, c: C.ink3});
    // lanes + column heads
    b.cols.forEach(function (cl, i) { S.T(x0 + i * cw + 10, yt - 12, cl.toUpperCase(), {fs: 9.5, fw: 600, c: C.ink3, mono: 1}); });
    S.T(xs, yt - 12, "ROOT CAUSES OWNED", {fs: 9.5, fw: 600, c: C.ink3, mono: 1});
    b.lanes.forEach(function (l, i) {
      var ly = laneY[l.id], lh = laneH[l.id];
      S.P(rect(0, ly, 980, lh, 0), {f: i % 2 ? C.surf : C.surf2});
      S.P(poly([[0, ly], [980, ly]]), {s: C.line, sw: 0.75});
      S.T(12, ly + lh / 2 + 4, l.l, {fs: 12.5, fw: 600, c: C.ink});
      var ls = leafSum[l.id];
      if (ls != null) S.T(xs, ly + lh / 2 + 4, sg(ls) + " " + b.unit, {fs: 12.5, fw: 600, c: ls < 0 ? C.bad : C.ok, mono: 1});
      else S.T(xs, ly + lh / 2 + 4, "—", {fs: 12, c: C.ink3, mono: 1});
    });
    S.P(poly([[0, y], [980, y]]), {s: C.line, sw: 0.75});
    for (var i = 1; i <= b.cols.length; i++) S.P(poly([[x0 + i * cw - 4, yt - 4], [x0 + i * cw - 4, y]]), {s: C.line, sw: 0.75, da: "2 3"});
    function anc(nd) { var a = [], q = nd; while (q) { a.push("l-" + q.id); q = q.p ? N[q.p] : null; } return a.join(" "); }
    function desc(nd) { return ["l-" + nd.id].concat(nd.kids.map(desc)).join(" "); }
    // links
    b.nodes.forEach(function (q) {
      var nd = N[q.id]; if (!nd.p) return;
      var pr = N[nd.p], xa = NX(pr) + nw, ya = NY(pr) + nh / 2, xb = NX(nd), yb = NY(nd) + nh / 2, mx = (xa + xb) / 2, cr = crit[nd.id] && crit[pr.id], hand = nd.lane !== pr.lane;
      S.P("M" + f1(xa) + " " + f1(ya) + "C" + f1(mx) + " " + f1(ya) + " " + f1(mx) + " " + f1(yb) + " " + f1(xb) + " " + f1(yb),
        {s: nd.d >= 0 ? C.ok : cr ? C.bad : C.warn, sw: Math.max(1.5, Math.abs(nd.d) * 2.2), o: cr ? 0.85 : 0.45, g: "l-" + nd.id + " " + desc(nd)});
      if (hand) {
        var hy = (ya + yb) / 2, to = b.lanes.filter(function (l) { return l.id === nd.lane; })[0].l;
        S.P(circ(mx, hy, 6), {f: C.surf, s: C.navy, sw: 2, g: "l-" + nd.id + " " + desc(nd), cls: "vz-hit", tip: "Handoff: " + pr.l + " → " + nd.l + " (" + to + " owns the fix)"});
        if (cr) { var lw = tw("HANDOFF → " + to.toUpperCase(), 9) + 12; S.P(rect(mx + 10, hy - 9, lw, 18, 9), {f: C.navy}); S.T(mx + 16, hy + 3.5, "HANDOFF → " + to.toUpperCase(), {fs: 9, fw: 600, c: "#FFFFFF", mono: 1}); }
      }
    });
    // nodes
    b.nodes.forEach(function (q) {
      var nd = N[q.id], x = NX(nd), yy = NY(nd), cr = crit[nd.id], tk = trustKey(nd.ts), ck = nd.d >= 0 ? "ok" : cr ? "bad" : "warn", g = anc(nd), pa = paint(ck, tk);
      S.P(rect(x, yy, nw, nh, 4), {f: C.surf, s: cr ? C.navy : C.lineS, sw: cr ? 1.75 : 1, da: tk === "cert" || tk === "exc" ? "none" : "4 2", g: g});
      S.P(rect(x + 1, yy + 1, 4, nh - 2, 0), {f: pa.f, g: g});
      S.T(x + 11, yy + 16, trunc(nd.l, 11.5, nw - 18), {fs: 11.5, fw: 600, c: C.ink, g: g});
      S.T(x + 11, yy + 32, trunc(nd.v, 10, nw - 62), {fs: 10, c: C.ink3, mono: 1});
      S.T(x + nw - 7, yy + 32, sg(nd.d), {a: "end", fs: 11.5, fw: 600, c: nd.d >= 0 ? C.ok : C.bad, mono: 1});
      S.P(rect(x, yy, nw, nh, 4), {f: "transparent", cls: "vz-hit", g: g, tip: nd.l + " · " + nd.v + " · " + sg(nd.d) + " " + b.unit + " · owner: " + b.lanes.filter(function (l) { return l.id === nd.lane; })[0].l + " · " + trustWord(tk) + (cr ? " · critical path" : "")});
    });
    S.aria = S.labels[0].t + ".";
    S.legend = [{l: "Adds to the gap (critical path)", f: C.bad, s: "none", da: "none"}, {l: "Adds to the gap", f: C.warn, s: "none", da: "none"}, {l: "Offsets the gap", f: C.ok, s: "none", da: "none"}, {l: "Handoff to another function", f: C.surf, s: C.navy, da: "none"}, {l: "Dashed node = not yet certified", f: C.surf, s: C.lineS, da: "4 2"}];
    return S;
  }

  /* ======================================================================
     ENTITY · loop: cash conversion cycle as one ring (DSO + DIO out, DPO back, CCC = what's left)
     block: {scale:days, dso:{v,plan,ts}, dio:{...}, dpo:{...}, tied:"CU 96 m", tiedVar:"+14 vs plan", cashPerDay}
     ====================================================================== */
  function loop(b) {
    var S = Scene(960, 420), cx = 220, cy = 215, sc = 360 / b.scale, A = function (d) { return -90 + d * sc; };
    var dso = b.dso, dio = b.dio, dpo = b.dpo, ccc = dso.v + dio.v - dpo.v, cccP = dso.plan + dio.plan - dpo.plan;
    for (var d = 0; d < b.scale; d += 10) { var p0 = pt(cx, cy, 184, A(d)), p1 = pt(cx, cy, 190, A(d)), pl = pt(cx, cy, 200, A(d)); S.P(poly([p0, p1]), {s: C.lineS, sw: 1}); S.T(pl[0], pl[1] + 3, d + "", {a: "middle", fs: 9, c: C.ink3, mono: 1}); }
    function band(r, a0, a1, w, ck, tk, tip, lab) {
      var pa = paint(ck, tk);
      S.P(arc(cx, cy, r, A(a0), A(a1)), {s: pa.f, sw: w, cls: "vz-hit", tip: tip});
      if (pa.s !== "none") { S.P(arc(cx, cy, r + w / 2, A(a0), A(a1)), {s: pa.s, sw: 1, da: pa.da}); S.P(arc(cx, cy, r - w / 2, A(a0), A(a1)), {s: pa.s, sw: 1, da: pa.da}); }
      if (lab) { var m = pt(cx, cy, r, A((a0 + a1) / 2)), lw = tw(lab, 10.5) + 10; S.P(rect(m[0] - lw / 2, m[1] - 9, lw, 18, 9), {f: C.surf, s: C.lineS, sw: 0.75}); S.T(m[0], m[1] + 4, lab, {a: "middle", fs: 10.5, fw: 600, c: C.ink, mono: 1}); }
    }
    // plan ghost track
    S.P(arc(cx, cy, 168, A(0), A(dso.plan + dio.plan)), {s: C.g2, sw: 6});
    S.P(arc(cx, cy, 168, A(0), A(dso.plan)), {s: C.lineS, sw: 6});
    band(150, 0, dso.v, 22, "navy", trustKey(dso.ts), "DSO " + dso.v + " d vs plan " + dso.plan + " · " + trustWord(trustKey(dso.ts)), "DSO " + dso.v);
    band(150, dso.v, dso.v + dio.v, 22, "teal", trustKey(dio.ts), "DIO " + dio.v + " d vs plan " + dio.plan + " · " + trustWord(trustKey(dio.ts)), "DIO " + dio.v);
    band(122, ccc, dso.v + dio.v, 16, "fc", trustKey(dpo.ts), "DPO " + dpo.v + " d vs plan " + dpo.plan + " · supplier credit gives back " + dpo.v + " days · " + trustWord(trustKey(dpo.ts)), "DPO " + dpo.v);
    var ep = pt(cx, cy, 122, A(ccc)); S.P(diamond(ep[0], ep[1], 5), {f: C.fc});
    S.P(arc(cx, cy, 98, A(0), A(Math.min(ccc, cccP))), {s: C.navy, sw: 14, tip: "Cash conversion cycle · plan " + cccP + " d", cls: "vz-hit"});
    if (ccc > cccP) S.P(arc(cx, cy, 98, A(cccP), A(ccc)), {s: C.bad, sw: 14, tip: "CCC overrun · +" + (ccc - cccP) + " d vs plan", cls: "vz-hit"});
    var tp = pt(cx, cy, 86, A(cccP)), tq = pt(cx, cy, 110, A(cccP)); S.P(poly([tp, tq]), {s: C.surf, sw: 2});
    S.T(cx, cy - 8, ccc + " d", {a: "middle", fs: 30, fw: 600, c: C.ink});
    S.T(cx, cy + 12, "cash conversion cycle", {a: "middle", fs: 11, c: C.ink2});
    S.T(cx, cy + 30, sg(ccc - cccP, 0) + " d vs plan " + cccP, {a: "middle", fs: 11, fw: 600, c: ccc > cccP ? C.bad : C.ok, mono: 1});
    // dumbbells
    var gx = 520, gw = 380, lo = 25, hi = 60, XX = function (v) { return gx + (v - lo) / (hi - lo) * gw; }, y = 90;
    S.T(gx, 40, b.headL || (b.tied + " tied up in working capital · " + b.tiedVar), {fs: 13, fw: 600, c: C.ink});
    S.T(gx, 58, b.sub || ("Days vs plan and cash effect (≈ " + b.cashPerDay + " per day)"), {fs: 11, c: C.ink3});
    [25, 35, 45, 55].forEach(function (v) { S.P(poly([[XX(v), y - 10], [XX(v), y + 3 * 64 - 30]]), {s: C.line, sw: 0.75}); S.T(XX(v), y + 3 * 64 - 14, v + " d", {a: "middle", fs: 9.5, c: C.ink3, mono: 1}); });
    [["DSO · days sales outstanding", dso, -1, "navy"], ["DIO · days inventory", dio, -1, "teal"], ["DPO · days payables", dpo, 1, "fc"]].forEach(function (r, i) {
      var q = r[1], yy = y + i * 64 + 18, bad = (q.v - q.plan) * r[2] < 0, tk = trustKey(q.ts), pa = paint(r[3], tk);
      S.T(gx, yy - 16, r[0], {fs: 11.5, fw: 600, c: C.ink});
      var cash = q.cash != null ? q.cash : Math.abs(q.v - q.plan) * b.cashPerDayN;
      S.T(gx + gw, yy - 16, sg(q.v - q.plan, 0) + " d · " + (bad ? "−" : "+") + (b.cur || "CU ") + cash.toFixed(1) + " m", {a: "end", fs: 11, fw: 600, c: bad ? C.bad : C.ok, mono: 1});
      S.P(poly([[XX(q.plan), yy], [XX(q.v), yy]]), {s: bad ? C.bad : C.ok, sw: 3});
      S.P(circ(XX(q.plan), yy, 5), {f: C.surf, s: C.ink3, sw: 1.5, tip: "Plan " + q.plan + " d", cls: "vz-hit"});
      S.P(circ(XX(q.v), yy, 6.5), {f: pa.f, s: pa.s === "none" ? C.surf : pa.s, sw: pa.s === "none" ? 1.5 : pa.sw, da: pa.da, tip: r[0] + " " + q.v + " d · " + trustWord(tk), cls: "vz-hit"});
    });
    S.aria = "Cash conversion loop. DSO " + dso.v + " plus DIO " + dio.v + " minus DPO " + dpo.v + " equals " + ccc + " days against plan " + cccP + ".";
    S.legend = [{l: "DSO", f: C.navy7, s: "none", da: "none"}, {l: "DIO", f: C.teal, s: "none", da: "none"}, {l: "DPO (gives days back)", f: C.fc, s: "none", da: "none"}, {l: "CCC within plan", f: C.navy, s: "none", da: "none"}, {l: "CCC over plan", f: C.bad, s: "none", da: "none"}, {l: "Grey outer track = plan", f: C.g2, s: C.lineS, da: "none"}, LEG.pend];
    return S;
  }

  /* ======================================================================
     ENTITY · runway: next 14 days by lane, with a combined exposure band on top
     block: {days, lanes:[l], ev:[{lane, l, at|from,to, sk, ts}]}   sk = ok|warn|bad|fc|grey
     ====================================================================== */
  function runway(b) {
    var lanes = b.lanes, lh = 44, x0 = 150, x1 = 940, yt = 120, S = Scene(980, yt + lanes.length * lh + 40);
    var X = function (d) { return x0 + d / b.days * (x1 - x0); };
    var W = {bad: 3, fc: 2, warn: 2, grey: 1, ok: 0.5}, dens = [];
    for (var i = 0; i <= b.days * 4; i++) {
      var d = i / 4, s = 0;
      b.ev.forEach(function (e) { var a = e.at != null ? e.at - 0.5 : e.from, z = e.at != null ? e.at + 0.5 : e.to; if (d >= a && d <= z) s += W[e.sk] || 1; });
      dens.push([d, s]);
    }
    var sm = dens.map(function (q, i) { var a = 0, n = 0; for (var j = -3; j <= 3; j++) { var r = dens[i + j]; if (r) { a += r[1]; n++; } } return [q[0], a / n]; });
    var mx = Math.max.apply(null, sm.map(function (q) { return q[1]; })), hy = 92, hh = 54;
    var top = sm.map(function (q) { return [X(q[0]), hy - q[1] / mx * hh]; });
    S.P(poly(top) + "L" + X(b.days) + " " + hy + "L" + X(0) + " " + hy + "Z", {f: C.bad, o: 0.14});
    S.P(poly(top), {s: C.bad, sw: 1.5});
    var pk = sm.reduce(function (a, q) { return q[1] > a[1] ? q : a; });
    var segs = [], cur = null;
    sm.forEach(function (q) { if (q[1] >= mx * 0.75) { if (!cur) { cur = [q[0], q[0]]; segs.push(cur); } else cur[1] = q[0]; } else cur = null; });
    var dlab = function (d) { return Math.round(d) === 0 ? "today" : "D+" + Math.round(d); };
    segs.forEach(function (g) {
      S.P(rect(X(g[0]), hy - hh - 6, Math.max(6, X(g[1]) - X(g[0])), hh + 6, 0), {f: C.badL, o: 0.5});
      S.T(X(g[0]), hy - hh - 12, "HIGH · " + dlab(g[0]) + (Math.round(g[1]) > Math.round(g[0]) ? "–" + dlab(g[1]) : ""), {fs: 9.5, fw: 600, c: C.bad, mono: 1});
    });
    var pa0 = segs[0][0], pz = segs[segs.length - 1][1];
    S.T(x0 - 14, hy - 20, "Combined exposure", {a: "end", fs: 11, fw: 600, c: C.ink});
    S.T(x0 - 14, hy - 6, "weighted by severity", {a: "end", fs: 9.5, c: C.ink3});
    for (d = 0; d <= b.days; d++) {
      S.P(poly([[X(d), hy + 8], [X(d), yt + lanes.length * lh]]), {s: d === 0 ? C.navy : C.line, sw: d === 0 ? 1.25 : 0.75});
      S.T(X(d), yt + lanes.length * lh + 16, d === 0 ? "Today" : "D+" + d, {a: "middle", fs: 10, c: d === 0 ? C.ink : C.ink3, fw: d === 0 ? 600 : 400, mono: 1});
    }
    lanes.forEach(function (l, i) {
      var y = yt + i * lh;
      if (i % 2 === 0) S.P(rect(x0, y, x1 - x0, lh, 0), {f: C.surf2, o: 0.9});
      S.T(x0 - 14, y + lh / 2 + 4, l, {a: "end", fs: 12, fw: 600, c: C.ink});
    });
    var lanePos = {};
    b.ev.forEach(function (e) {
      var li = lanes.indexOf(e.lane), y = yt + li * lh, tk = trustKey(e.ts), pa = paint(e.sk, tk);
      var k = lanePos[li] = (lanePos[li] || 0) + 1, cy = y + lh / 2;
      var tip = e.l + " · " + (e.at != null ? "D+" + e.at : "D+" + e.from + " to D+" + e.to) + " · " + trustWord(tk);
      if (e.at != null) {
        S.P(diamond(X(e.at), cy, 7), {f: pa.f, s: pa.s === "none" ? C.surf : pa.s, sw: pa.s === "none" ? 1.5 : pa.sw, da: pa.da});
        S.P(circ(X(e.at), cy, 12), {f: "transparent", tip: tip, cls: "vz-hit"});
        var rt = X(e.at) > x1 - 200;
        S.T(X(e.at) + (rt ? -11 : 11), cy + 4, e.l, {fs: 10.5, c: C.ink2, a: rt ? "end" : "start"});
      } else {
        S.P(rect(X(e.from), cy - 8, X(e.to) - X(e.from), 16, 3), {f: pa.f, s: pa.s, sw: pa.sw, da: pa.da, o: tk === "cert" ? 0.9 : 1, tip: tip, cls: "vz-hit"});
        S.T(X(e.from), cy - 12, e.l, {fs: 10.5, c: C.ink2});
      }
    });
    if (b.head !== "") S.T(x0 - 140, 22, b.head || ("Next " + b.days + " days · Entity A1"), {fs: 13, fw: 600, c: C.ink});
    S.aria = "Risk runway for the next " + b.days + " days. High exposure: " + segs.map(function (g) { return dlab(g[0]) + " to " + dlab(g[1]); }).join("; ") + ".";
    S.legend = legend(["bad", "warn", "fc", "ok"]).concat([{l: "Grey = scheduled, low risk", f: C.g6, s: "none", da: "none"}, LEG.pend, {l: "◆ point event · bar = window", f: C.surf, s: C.ink3, da: "none"}]);
    return S;
  }

  /* ======================================================================
     ALL LENSES · zoom: one treemap, three depths (Owner = businesses, Core Group = entities, Entity = plants)
     block: {unit, levels:[{k, l, crumb, items:[{l, v, plan, ts}]}], level:k}
     ====================================================================== */
  function squarify(vals, x, y, w, h) {
    var tot = vals.reduce(function (a, b) { return a + b.v; }, 0), out = [], items = vals.map(function (o) { return Object.assign({a: o.v / tot * w * h}, o); }).sort(function (a, b) { return b.a - a.a; }), row = [];
    function worst(r, s) { var sum = 0, mx = 0, mn = Infinity; r.forEach(function (q) { sum += q.a; mx = Math.max(mx, q.a); mn = Math.min(mn, q.a); }); return Math.max(s * s * mx / (sum * sum), (sum * sum) / (s * s * mn)); }
    function place(r) {
      var sum = r.reduce(function (a, q) { return a + q.a; }, 0);
      if (w >= h) { var rw = sum / h, yy = y; r.forEach(function (q) { var rh = q.a / rw; out.push(Object.assign({}, q, {x: x, y: yy, w: rw, h: rh})); yy += rh; }); x += rw; w -= rw; }
      else { var rh = sum / w, xx = x; r.forEach(function (q) { var qw = q.a / rh; out.push(Object.assign({}, q, {x: xx, y: y, w: qw, h: rh})); xx += qw; }); y += rh; h -= rh; }
    }
    while (items.length) { var s = Math.min(w, h), it = items[0]; if (!row.length || worst(row.concat([it]), s) <= worst(row, s)) { row.push(it); items.shift(); } else { place(row); row = []; } }
    if (row.length) place(row);
    return out;
  }
  function zoom(b, ctx) {
    var key = (ctx.level || b.level), L = b.levels.filter(function (l) { return l.k === key; })[0] || b.levels[0];
    var S = Scene(960, 400), x0 = 0, y0 = 44, W = 960, H = 340;
    S.T(0, 18, L.crumb, {fs: 12.5, fw: 600, c: C.ink});
    var gapMode = L.items[0].gap != null;
    var tot = L.items.reduce(function (a, q) { return a + q.v; }, 0), totP = L.items.reduce(function (a, q) { return a + (gapMode ? q.v : q.plan); }, 0), totG = L.items.reduce(function (a, q) { return a + (q.gap || 0); }, 0);
    S.T(W, 18, gapMode ? "Size = EBITDA YTD (" + tot.toFixed(1) + " " + b.unit + ") · colour = " + (b.gapL || "projected EBITDA gap") + " (" + sg(totG) + ")" : "Size = EBITDA YTD · colour = variance vs plan · " + tot.toFixed(1) + " " + b.unit + " (" + sg(tot - totP) + ")", {a: "end", fs: 11, c: C.ink3, mono: 1});
    function tone(pct) { return pct <= -2 ? [C.bad, "#FFFFFF"] : pct < -0.3 ? [C.badL, C.ink] : pct < 0.3 ? [C.g2, C.ink] : pct < 2 ? [C.okL, C.ink] : [C.ok, "#FFFFFF"]; }
    squarify(L.items, x0, y0, W, H).forEach(function (r) {
      var pct = gapMode ? r.gap : (r.v - r.plan) / r.plan * 100, t = tone(pct), tk = trustKey(r.ts);
      S.P(rect(r.x + 2, r.y + 2, r.w - 4, r.h - 4, 4), {f: t[0], cls: "vz-hit", tip: gapMode ? r.l + " · EBITDA YTD " + r.v.toFixed(1) + " " + b.unit + " · " + (b.gapL || "projected gap") + " " + sg(r.gap) + " " + b.unit + " · " + trustWord(tk) : r.l + " · " + r.v.toFixed(1) + " " + b.unit + " vs plan " + r.plan.toFixed(1) + " · " + sg(r.v - r.plan) + " (" + sg(pct) + "%) · " + trustWord(tk)});
      if (tk !== "cert") S.P(rect(r.x + 2, r.y + 2, r.w - 4, r.h - 4, 4), {f: "url(#vzh-grey)", s: C.g6, sw: 1.5, da: "4 2", o: 0.32});
      if (r.w > 90 && r.h > 50) {
        S.T(r.x + 14, r.y + 26, trunc(r.l, 15, r.w - 24), {fs: 15, fw: 600, c: t[1]});
        var tw2 = r.w - 26, l2 = (gapMode ? "EBITDA YTD " : "") + r.v.toFixed(1) + " " + b.unit;
        if (gapMode && tw(l2, 12) > tw2) l2 = r.v.toFixed(1) + " " + b.unit;
        S.T(r.x + 14, r.y + 46, trunc(l2, 12, tw2), {fs: 12, c: t[1], mono: 1});
        S.T(r.x + 14, r.y + 64, trunc(gapMode ? "gap " + sg(r.gap) + (tk !== "cert" ? " · " + trustWord(tk).replace(" certification", "") : "") : sg(r.v - r.plan) + " · " + sg(pct) + "%" + (tk !== "cert" ? " · " + trustWord(tk).replace(" certification", "") : ""), 12, tw2), {fs: 12, fw: 600, c: t[1], mono: 1});
      }
    });
    S.aria = "EBITDA treemap at " + L.l + " level. " + L.items.map(function (q) { return q.l + " " + (gapMode ? "EBITDA " + q.v.toFixed(1) + ", gap " + sg(q.gap) : sg(q.v - q.plan)); }).join(", ") + ".";
    var u = gapMode ? " " + b.unit : "%";
    S.legend = [{l: "≤ −2" + u, f: C.bad, s: "none", da: "none"}, {l: "−2 to −0.3" + u, f: C.badL, s: "none", da: "none"}, {l: "within ±0.3" + u, f: C.g2, s: "none", da: "none"}, {l: "+0.3 to +2" + u, f: C.okL, s: "none", da: "none"}, {l: "≥ +2" + u, f: C.ok, s: "none", da: "none"}, gapMode ? LEG.recon : LEG.pend];
    return S;
  }

  /* ======================================================================
     SIMPLIFIED SET: one message per visual, ≤ 7 rows, direct labels, a headline sentence on top.
     ====================================================================== */
  function headline(S, t, sub) { S.T(0, 22, t, {fs: 15, fw: 600, c: C.ink}); if (sub) S.T(0, 42, sub, {fs: 11.5, c: C.ink3}); }
  function dot(S, x, y, r, ck, tk, o) { var pa = paint(ck, tk); S.P(circ(x, y, r), {f: pa.f, s: pa.s === "none" ? C.surf : pa.s, sw: pa.s === "none" ? 1.5 : pa.sw, da: pa.da, g: (o || {}).g || ""}); if ((o || {}).tip) S.P(circ(x, y, r + 5), {f: "transparent", cls: "vz-hit", tip: o.tip, g: o.g || ""}); }

  /* scorecard (simplifies pulse): one row per domain, one dot per KPI (unit chart) */
  function scorecard(b, ctx) {
    var K = (ctx.data && ctx.data.kpi) || {}, scope = b.scope || "Group", rows = [], all = 0, okN = 0, unc = 0;
    b.domains.forEach(function (d) {
      var ks = d.k.map(function (q) { var e = (K[q[0]] || {})[scope] || {}; return {id: q[0], l: q[2], e: e, sk: statusKey(e.bs), tk: trustKey(e.ts)}; });
      ks.forEach(function (k) { all++; if (k.sk === "ok") okN++; if (k.tk !== "cert") unc++; });
      rows.push({n: d.n, ks: ks});
    });
    var rh = 46, S = Scene(960, 70 + rows.length * rh);
    headline(S, okN + " of " + all + " KPIs on track · " + unc + " not yet certified", "One dot per governed KPI, grouped by domain. Hollow-hatched dots are not certified yet.");
    rows.forEach(function (r, i) {
      var y = 84 + i * rh, ok = r.ks.filter(function (k) { return k.sk === "ok"; }).length;
      if (i) S.P(poly([[0, y - rh / 2], [960, y - rh / 2]]), {s: C.line, sw: 0.75});
      S.T(0, y + 5, r.n, {fs: 13, fw: 600, c: C.ink});
      r.ks.forEach(function (k, j) { dot(S, 170 + j * 30, y, 10, k.sk, k.tk, {tip: k.id + " " + k.l + " · " + (k.e.v != null ? k.e.v : k.e.val) + (k.e.u ? " " + k.e.u : "") + " vs plan " + k.e.plan + " · " + (k.e.bs || "") + " · " + trustWord(k.tk)}); });
      S.T(400, y + 5, ok + " of " + r.ks.length + " on track", {fs: 12, c: ok === r.ks.length ? C.ink3 : C.ink, fw: ok === r.ks.length ? 400 : 600, mono: 1});
      var worst = r.ks.filter(function (k) { return k.sk !== "ok"; })[0];
      if (worst) S.T(560, y + 5, "Watch: " + worst.id + " " + worst.l + " (" + (worst.e.bs || "") + ")", {fs: 12, c: C.ink2});
    });
    S.aria = okN + " of " + all + " KPIs on track; " + unc + " not certified.";
    S.legend = legend(["ok", "warn", "fc"]).concat([LEG.pend, LEG.recon]);
    return S;
  }

  /* bullets (simplifies horizon): Stephen Few bullet graphs, % of materiality threshold, top items only */
  function bullets(b) {
    var rh = 50, x0 = 250, x1 = 700, vmax = 150, S = Scene(960, 70 + b.items.length * rh);
    var X = function (v) { return x0 + clamp(v, 0, vmax) / vmax * (x1 - x0); };
    var crossed = b.items.filter(function (it) { return it.v >= 100; }).length;
    headline(S, crossed + " over the materiality line · " + (b.items.length - crossed) + " closest behind", "Bar = how close each item is to its threshold. The tick is the threshold.");
    b.items.forEach(function (it, i) {
      var y = 86 + i * rh, ck = it.v >= 100 ? "bad" : it.proj ? "fc" : it.v >= 75 ? "warn" : "grey", tk = trustKey(it.ts), pa = paint(ck, tk);
      S.P(rect(x0, y - 11, X(75) - x0, 22, 0), {f: C.surf2});
      S.P(rect(X(75), y - 11, X(100) - X(75), 22, 0), {f: C.g2});
      S.P(rect(X(100), y - 11, x1 - X(100), 22, 0), {f: C.badL});
      S.P(rect(x0, y - 5, X(it.v) - x0, 10, 2), {f: pa.f, s: pa.s, sw: pa.sw, da: pa.da, cls: "vz-hit", tip: it.id + " " + it.l + " · " + it.v + "% of threshold · " + trustWord(tk)});
      S.P(poly([[X(100), y - 15], [X(100), y + 15]]), {s: C.navy, sw: 2.5});
      S.T(0, y - 2, it.l, {fs: 13, fw: 600, c: C.ink});
      S.T(0, y + 14, it.id + (it.own ? " · " + it.own : ""), {fs: 10.5, c: C.ink3, mono: 1});
      S.T(x1 + 16, y - 2, it.v + "%", {fs: 14, fw: 600, c: it.v >= 100 ? C.bad : C.ink, mono: 1});
      S.T(x1 + 16, y + 14, it.note, {fs: 10.5, c: it.proj ? C.fcD : C.ink3, mono: 1});
    });
    S.T(X(100), 64, "THRESHOLD", {a: "middle", fs: 9.5, fw: 600, c: C.navy, mono: 1});
    S.aria = crossed + " items over the materiality threshold.";
    S.legend = [{l: "Over threshold", f: C.bad, s: "none", da: "none"}, {l: "Projected to cross", f: C.fc, s: "none", da: "none"}, {l: "Approaching (≥75%)", f: C.warn, s: "none", da: "none"}, LEG.pend];
    return S;
  }

  /* split (simplifies bridge): three bars on one scale — net change vs certified vs provisional movement */
  function split(b) {
    var rh = 56, x0 = 230, x1 = 820, mx = Math.max.apply(null, b.rows.map(function (r) { return Math.abs(r.v); })), S = Scene(960, 80 + b.rows.length * rh);
    var X = function (v) { return x0 + Math.abs(v) / mx * (x1 - x0); };
    headline(S, b.head, b.sub);
    b.rows.forEach(function (r, i) {
      var y = 92 + i * rh, tk = trustKey(r.ts), pa = paint(r.ck || "navy", tk), w = Math.max(3, X(r.v) - x0);
      S.T(0, y, r.l, {fs: 13, fw: 600, c: C.ink});
      S.T(0, y + 16, r.sub || "", {fs: 10.5, c: C.ink3});
      S.P(rect(x0, y - 14, w, 26, 3), {f: pa.f, s: pa.s, sw: pa.sw, da: pa.da, cls: "vz-hit", tip: r.l + " · " + r.v.toFixed(1) + " " + b.unit + " · " + trustWord(tk)});
      S.T(x0 + w + 10, y + 4, (r.sign ? sg(r.v) : r.v.toFixed(1)) + " " + b.unit, {fs: 14, fw: 600, c: C.ink, mono: 1});
    });
    S.aria = b.head;
    S.legend = [LEG.cert, LEG.pend, {l: "Net change vs plan", f: C.ok, s: "none", da: "none"}];
    return S;
  }

  /* diverge (simplifies flow): adverse left, favourable right, net as a dot — emphasis on one entity */
  function diverge(b) {
    var rh = 44, cx = 560, half = 300, mx = b.max, S = Scene(960, 92 + b.rows.length * rh);
    var X = function (v) { return cx + v / mx * half; };
    headline(S, b.head, "Bars = gross favourable and adverse movement. Dot = net. " + b.unit + ".");
    S.T(X(-mx / 2), 70, "◀ ADVERSE", {a: "middle", fs: 9.5, fw: 600, c: C.bad, mono: 1});
    S.T(X(mx / 2), 70, "FAVOURABLE ▶", {a: "middle", fs: 9.5, fw: 600, c: C.ok, mono: 1});
    b.rows.forEach(function (r, i) {
      var y = 100 + i * rh, hi = r.id === b.hi, o = hi ? 1 : 0.35, net = r.fav - r.adv;
      S.T(0, y + 5, r.l, {fs: 13, fw: hi ? 600 : 400, c: hi ? C.ink : C.ink2});
      S.T(150, y + 5, "net " + sg(net), {fs: 11.5, fw: hi ? 600 : 400, c: hi ? C.ink : C.ink3, mono: 1});
      S.P(rect(X(-r.adv), y - 9, X(0) - X(-r.adv) - 1, 18, 2), {f: C.bad, o: o, cls: "vz-hit", tip: r.l + " · adverse −" + r.adv.toFixed(1)});
      S.P(rect(X(0) + 1, y - 9, X(r.fav) - X(0) - 1, 18, 2), {f: C.ok, o: o, cls: "vz-hit", tip: r.l + " · favourable +" + r.fav.toFixed(1)});
      S.P(circ(X(net), y, 6), {f: C.navy, s: C.surf, sw: 2, tip: r.l + " · net " + sg(net) + " " + b.unit, cls: "vz-hit"});
      if (hi) { S.T(X(-r.adv) - 8, y + 4, "−" + r.adv.toFixed(1), {a: "end", fs: 11.5, fw: 600, c: C.bad, mono: 1}); S.T(X(r.fav) + 8, y + 4, "+" + r.fav.toFixed(1), {fs: 11.5, fw: 600, c: C.ok, mono: 1}); }
    });
    S.P(poly([[cx, 80], [cx, 100 + b.rows.length * rh - rh / 2]]), {s: C.ink3, sw: 1});
    S.aria = b.head;
    S.legend = [{l: "Adverse", f: C.bad, s: "none", da: "none"}, {l: "Favourable", f: C.ok, s: "none", da: "none"}, {l: "Net", f: C.navy, s: C.surf, da: "none"}];
    return S;
  }

  /* strip (simplifies fingerprints): one dot strip per KPI; right = better; one entity highlighted, peers grey */
  function strip(b) {
    var rh = 56, x0 = 200, x1 = 820, S = Scene(960, 76 + b.kpis.length * rh);
    headline(S, b.head, "Each dot is an entity. Right is always better. Tick = plan.");
    b.kpis.forEach(function (k, i) {
      var y = 96 + i * rh, vals = k.v.concat([k.plan]), lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals), pad = (hi - lo) * 0.15 || 1;
      lo -= pad; hi += pad;
      var X = function (v) { var t = (v - lo) / (hi - lo); return x0 + (k.pol < 0 ? 1 - t : t) * (x1 - x0); };
      S.T(0, y + 5, k.l, {fs: 13, fw: 600, c: C.ink});
      S.P(poly([[x0, y], [x1, y]]), {s: C.line, sw: 1.5});
      S.P(poly([[X(k.plan), y - 12], [X(k.plan), y + 12]]), {s: C.navy, sw: 2});
      S.T(X(k.plan), y - 16, "plan " + k.plan + k.u, {a: "middle", fs: 9.5, c: C.ink3, mono: 1});
      b.ents.forEach(function (e, j) {
        if (j === b.hiIdx) return;
        S.P(circ(X(k.v[j]), y, 6), {f: C.lineS, s: C.surf, sw: 1.5, cls: "vz-hit", tip: e + " · " + k.l + " " + k.v[j] + k.u});
      });
      var v = k.v[b.hiIdx], bad = (v - k.plan) * k.pol < 0, tk = trustKey(k.ts);
      dot(S, X(v), y, 8.5, bad ? "bad" : "ok", tk, {tip: b.ents[b.hiIdx] + " · " + k.l + " " + v + k.u + " · " + trustWord(tk)});
      S.T(X(v), y + 24, b.ents[b.hiIdx].replace("Entity ", "") + " " + v + k.u, {a: "middle", fs: 11, fw: 600, c: bad ? C.bad : C.ok, mono: 1});
      S.T(x1 + 14, y + 4, "better →", {fs: 10, c: C.ink3, mono: 1});
    });
    S.aria = b.head;
    S.legend = [{l: b.ents[b.hiIdx] + " behind plan", f: C.bad, s: "none", da: "none"}, {l: b.ents[b.hiIdx] + " ahead", f: C.ok, s: "none", da: "none"}, {l: "Peers", f: C.lineS, s: "none", da: "none"}, LEG.recon];
    return S;
  }

  /* waffle (simplifies tide): 1 cell = 1 leadership KPI, plus a sparkline against the usual range */
  function waffle(b) {
    var S = Scene(960, 260), cs = 28, gp = 5, cols = 10, keys = ["cert", "exc", "pend", "recon"], cells = [];
    keys.forEach(function (k) { for (var i = 0; i < (b.counts[k] || 0); i++) cells.push(k); });
    var okN = (b.counts.cert || 0) + (b.counts.exc || 0);
    headline(S, okN + " of " + cells.length + " leadership KPIs certified at D" + (b.today + 1), "Usual at this point: " + b.usual + ". One square per KPI.");
    cells.forEach(function (k, i) {
      var x = (i % cols) * (cs + gp), y = 64 + Math.floor(i / cols) * (cs + gp), pa = paint(k === "recon" ? "grey" : "navy", k);
      S.P(rect(x, y, cs, cs, 4), {f: pa.f, s: pa.s, sw: pa.s === "none" ? 0 : (k === "exc" ? 2.5 : 1.25), da: pa.da, cls: "vz-hit", tip: trustWord(k) + " · " + b.counts[k] + " KPIs"});
    });
    var gx = 420, gw = 440, gy = 70, gh = 140, n = b.days, Xs = function (i) { return gx + i / (n - 1) * gw; }, Ys = function (v) { return gy + gh - v / 100 * gh; };
    var up = [], dn = [];
    for (var i = 0; i < n; i++) { var vs = b.prior.map(function (p) { return p[i]; }); up.push([Xs(i), Ys(Math.max.apply(null, vs))]); dn.unshift([Xs(i), Ys(Math.min.apply(null, vs))]); }
    S.P(poly(up.concat(dn), true), {f: C.g2, tip: "Range of the last three closes", cls: "vz-hit"});
    S.P(poly(b.now.map(function (v, i) { return [Xs(i), Ys(v)]; })), {s: C.navy, sw: 2.5, lc: "round"});
    var li = b.now.length - 1;
    S.P(circ(Xs(li), Ys(b.now[li]), 5), {f: C.navy, s: C.surf, sw: 1.5});
    S.T(Xs(li) + 10, Ys(b.now[li]) + 16, "now " + b.now[li] + "%", {fs: 11.5, fw: 600, c: C.navy, mono: 1});
    S.T(Xs(li) + 10, Ys(b.prior[0][li]) - 10, "usual range", {fs: 10.5, c: C.ink3});
    S.P(poly([[Xs(b.target), gy - 4], [Xs(b.target), gy + gh]]), {s: C.navy, sw: 1, da: "4 3"});
    S.T(Xs(b.target), gy - 8, "CLOSE D" + (b.target + 1), {a: "middle", fs: 9.5, fw: 600, c: C.navy, mono: 1});
    S.T(gx, gy + gh + 18, "D1", {fs: 10, c: C.ink3, mono: 1}); S.T(gx + gw, gy + gh + 18, "D" + n, {a: "end", fs: 10, c: C.ink3, mono: 1});
    S.aria = okN + " of " + cells.length + " leadership KPIs certified; behind the usual range.";
    S.legend = legend(["cert", "exc", "pend", "recon"]).concat([{l: "Usual range (last 3 closes)", f: C.g2, s: "none", da: "none"}]);
    return S;
  }

  /* late (simplifies river): stage counts as chips, then only the late items as bullet bars against SLA */
  function late(b) {
    var lateIt = b.items.filter(function (it) { return it.age > b.stages[it.st].sla; }).sort(function (a, z) { return z.age / b.stages[z.st].sla - a.age / b.stages[a.st].sla; });
    var rh = 44, S = Scene(960, 150 + lateIt.length * rh), SEVC = {crit: C.bad, high: C.warn, med: C.g6};
    headline(S, lateIt.length + " of " + b.items.length + " escalations are past their stage SLA", "Open escalations by stage, then the late ones by how far past SLA they are.");
    var cw = 180;
    b.stages.forEach(function (s, i) {
      if (!s.sla) return;
      var x = i * (cw + 12), n = b.items.filter(function (it) { return it.st === i; }).length, l = b.items.filter(function (it) { return it.st === i && it.age > s.sla; }).length;
      S.P(rect(x, 58, cw, 44, 4), {f: l ? C.badL : C.surf2, s: l ? C.bad : C.line, sw: 1});
      S.T(x + 12, 77, s.l, {fs: 12, fw: 600, c: C.ink});
      S.T(x + 12, 93, n + " open" + (l ? " · " + l + " late" : ""), {fs: 11, c: l ? C.bad : C.ink3, fw: l ? 600 : 400, mono: 1});
      if (i < b.stages.length - 2) S.T(x + cw + 6, 84, "›", {a: "middle", fs: 16, c: C.ink3});
    });
    var x0 = 300, x1 = 760, mxr = 3, X = function (r) { return x0 + Math.min(r, mxr) / mxr * (x1 - x0); };
    S.T(X(1), 132, "SLA", {a: "middle", fs: 9.5, fw: 600, c: C.navy, mono: 1});
    lateIt.forEach(function (it, i) {
      var y = 160 + i * rh, s = b.stages[it.st], r = it.age / s.sla;
      S.T(0, y, it.l, {fs: 13, fw: 600, c: C.ink});
      S.T(0, y + 15, it.id + " · " + it.ent + " · " + s.l, {fs: 10.5, c: C.ink3, mono: 1});
      S.P(rect(x0, y - 8, X(r) - x0, 14, 2), {f: SEVC[it.sev], cls: "vz-hit", tip: it.id + " · " + it.age + " d in " + s.l + " (SLA " + s.sla + " d) · " + it.sev});
      S.P(poly([[X(1), y - 13], [X(1), y + 11]]), {s: C.navy, sw: 2.5});
      S.T(x1 + 16, y + 4, it.age + " d · " + r.toFixed(1) + "× SLA", {fs: 12, fw: 600, c: it.sev === "crit" ? C.bad : C.ink, mono: 1});
    });
    S.aria = lateIt.length + " escalations past SLA.";
    S.legend = [{l: "Critical", f: C.bad, s: "none", da: "none"}, {l: "High", f: C.warn, s: "none", da: "none"}, {l: "Medium", f: C.g6, s: "none", da: "none"}];
    return S;
  }

  /* path (simplifies tree): only the critical path, one step per row, bar = size of the gap at that step */
  function path(b) {
    var rh = 70, mx = Math.max.apply(null, b.steps.map(function (s) { return Math.abs(s.d); })), x0 = 330, x1 = 780, S = Scene(960, 70 + b.steps.length * rh);
    headline(S, b.head, "Follow the biggest adverse driver at each level. Bar length = " + (b.unit || "CU m") + ".");
    b.steps.forEach(function (s, i) {
      var y = 90 + i * rh, ind = i * 22, tk = trustKey(s.ts), pa = paint("bad", tk), w = Math.abs(s.d) / mx * (x1 - x0);
      if (i) S.P("M" + (ind - 16) + " " + (y - rh + 24) + "V" + (y - 4) + "H" + (ind - 4), {s: C.lineS, sw: 1.5});
      S.T(ind, y, s.l, {fs: 13.5, fw: 600, c: C.ink});
      S.T(ind, y + 16, s.v, {fs: 10.5, c: C.ink3, mono: 1});
      S.P(rect(x0, y - 12, w, 22, 3), {f: pa.f, s: pa.s, sw: pa.sw, da: pa.da, cls: "vz-hit", tip: s.l + " · " + sg(s.d) + " " + b.unit + " · " + trustWord(tk)});
      S.T(x0 + w + 10, y + 4, sg(s.d), {fs: 14, fw: 600, c: C.bad, mono: 1});
      if (s.why) S.T(x0, y + 26, s.why, {fs: 11, c: tk === "cert" ? C.ink3 : C.warnD});
    });
    S.aria = b.head;
    S.legend = [{l: "Adds to the gap", f: C.bad, s: "none", da: "none"}, {l: "Hatched = not yet certified", f: "url(#vzh-bad)", s: C.bad, da: "3 2"}];
    return S;
  }

  /* ccc (simplifies loop): hero number + three dumbbells (plan → actual), cash effect on the right */
  function ccc(b) {
    var S = Scene(960, 260), rows = [["DSO", "days sales outstanding", b.dso, -1], ["DIO", "days inventory", b.dio, -1], ["DPO", "days payables", b.dpo, 1]];
    var cc = b.dso.v + b.dio.v - b.dpo.v, ccP = b.dso.plan + b.dio.plan - b.dpo.plan;
    S.T(0, 70, cc + " d", {fs: 52, fw: 600, c: C.ink});
    S.T(0, 98, "cash conversion cycle", {fs: 13, c: C.ink2});
    S.T(0, 122, sg(cc - ccP, 0) + " d vs plan " + ccP, {fs: 14, fw: 600, c: cc > ccP ? C.bad : C.ok, mono: 1});
    S.T(0, 160, b.dso.v + " + " + b.dio.v + " − " + b.dpo.v + " = " + cc, {fs: 12, c: C.ink3, mono: 1});
    S.T(0, 178, "DSO + DIO − DPO", {fs: 10.5, c: C.ink3, mono: 1});
    S.T(0, 214, b.tied, {fs: 13, fw: 600, c: C.ink});
    var x0 = 340, x1 = 780, lo = 30, hi = 58, X = function (v) { return x0 + (v - lo) / (hi - lo) * (x1 - x0); };
    rows.forEach(function (r, i) {
      var q = r[2], y = 50 + i * 70, bad = (q.v - q.plan) * r[3] < 0, tk = trustKey(q.ts);
      S.T(x0 - 20, y + 4, r[0], {a: "end", fs: 14, fw: 600, c: C.ink});
      S.T(x0 - 20, y + 19, r[1], {a: "end", fs: 10, c: C.ink3});
      S.P(poly([[x0, y], [x1, y]]), {s: C.line, sw: 1});
      S.P(poly([[X(q.plan), y], [X(q.v), y]]), {s: bad ? C.bad : C.ok, sw: 4, lc: "round"});
      S.P(circ(X(q.plan), y, 6), {f: C.surf, s: C.ink3, sw: 2, tip: r[0] + " plan " + q.plan + " d", cls: "vz-hit"});
      dot(S, X(q.v), y, 8, bad ? "bad" : "ok", tk, {tip: r[0] + " " + q.v + " d · " + trustWord(tk)});
      S.T(X(q.plan), y - 14, q.plan, {a: "middle", fs: 10.5, c: C.ink3, mono: 1});
      S.T(X(q.v), y - 14, q.v + " d", {a: "middle", fs: 11.5, fw: 600, c: C.ink, mono: 1});
      S.T(x1 + 24, y + 4, sg(q.v - q.plan, 0) + " d · " + (bad ? "−" : "+") + (b.cur || "CU ") + (Math.abs(q.v - q.plan) * b.cashPerDayN).toFixed(1) + " m", {fs: 12, fw: 600, c: bad ? C.bad : C.ok, mono: 1});
    });
    S.T(X(lo), 250, "hollow = plan · filled = actual", {fs: 10.5, c: C.ink3});
    S.aria = "Cash conversion cycle " + cc + " days against plan " + ccP + ".";
    S.legend = [{l: "Worse than plan", f: C.bad, s: "none", da: "none"}, {l: "Better than plan", f: C.ok, s: "none", da: "none"}, {l: "Plan", f: C.surf, s: C.ink3, da: "none"}, LEG.pend];
    return S;
  }

  /* days (simplifies runway): 14 day cells shaded by exposure (one hue), four key events called out */
  function days(b) {
    var n = b.exp.length, cw = 960 / n, S = Scene(960, 250), mx = Math.max.apply(null, b.exp);
    var tone = function (v) { var t = v / mx; return t > 0.8 ? [C.bad, "#FFFFFF"] : t > 0.55 ? ["#D9776F", "#FFFFFF"] : t > 0.3 ? ["#F0B5AE", C.ink] : [C.badL, C.ink]; };
    headline(S, b.head, "Each day shaded by combined exposure (severity-weighted). Darker = more at risk.");
    b.exp.forEach(function (v, i) {
      var x = i * cw, t = tone(v);
      S.P(rect(x + 2, 60, cw - 4, 56, 4), {f: t[0], s: i === 0 ? C.navy : "none", sw: i === 0 ? 2 : 0, cls: "vz-hit", tip: (i ? "D+" + i : "Today") + " · exposure " + v + " of " + mx});
      S.T(x + cw / 2, 93, i ? "D+" + i : "Today", {a: "middle", fs: 11, fw: i ? 400 : 600, c: t[1], mono: 1});
    });
    b.ev.forEach(function (e, j) {
      var x = e.at * cw + cw / 2, y = 150 + (j % 2) * 44, tk = trustKey(e.ts), pa = paint(e.sk, tk);
      S.P(poly([[x, 118], [x, y - 12]]), {s: C.lineS, sw: 1});
      S.P(diamond(x, y - 6, 6), {f: pa.f, s: pa.s === "none" ? C.surf : pa.s, sw: pa.s === "none" ? 1.5 : pa.sw, da: pa.da, tip: e.l + " · " + trustWord(tk), cls: "vz-hit"});
      var rt = x > 760;
      S.T(x + (rt ? -12 : 12), y - 2, e.l, {a: rt ? "end" : "start", fs: 12, fw: 600, c: C.ink});
      S.T(x + (rt ? -12 : 12), y + 13, e.sub || "", {a: rt ? "end" : "start", fs: 10.5, c: C.ink3, mono: 1});
    });
    S.aria = b.head;
    S.legend = [{l: "Low exposure", f: C.badL, s: "none", da: "none"}, {l: "High exposure", f: C.bad, s: "none", da: "none"}, {l: "Breach / deadline", f: C.bad, s: "none", da: "none"}, {l: "Forecast", f: C.fc, s: "none", da: "none"}, LEG.pend];
    return S;
  }

  var TYPES = {pulse: pulse, pulseKpi: pulseKpi, horizon: horizon, bridge: bridge, flow: flow, fingerprints: fingerprints, tide: tide, river: river, tree: tree, lanes: lanes, loop: loop, runway: runway, zoom: zoom,
    scorecard: scorecard, bullets: bullets, split: split, diverge: diverge, strip: strip, waffle: waffle, late: late, path: path, ccc: ccc, days: days};

  /* The markup every template pastes once. `b.vz` comes from DCViz.scene(b, ctx). Patterns are repeated per
     SVG on purpose: identical ids resolve to identical content, and each chart stays self-contained. */
  var HATCH = [["ok", C.ok], ["warn", C.warn], ["bad", C.bad], ["fc", C.fc], ["navy", C.navy7], ["teal", C.teal], ["grey", C.g6]].map(function (h) {
    return '<pattern id="vzh-' + h[0] + '" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" style="fill:#FFFFFF"></rect><rect width="2.4" height="6" style="fill:' + h[1] + '"></rect></pattern>';
  }).join("");
  var snippet =
    '<figure class="vz" style="margin:0">' +
      '<svg class="vz-svg" viewBox="0 0 {{b.vz.w}} {{b.vz.h}}" role="img" aria-label="{{b.vz.aria}}" style="width:100%;height:auto;display:block;overflow:visible;font-variant-numeric:tabular-nums">' +
        '<defs>' + HATCH + '</defs>' +
        '<sc-for list="{{b.vz.shapes}}" as="s"><path class="vz-m {{s.cls}}" d="{{s.d}}" data-g="{{s.g}}" data-tip="{{s.tip}}" style="fill:{{s.f}};stroke:{{s.s}};stroke-width:{{s.sw}};stroke-dasharray:{{s.da}};stroke-linecap:{{s.lc}};opacity:{{s.o}}"></path></sc-for>' +
        '<sc-for list="{{b.vz.labels}}" as="l"><text class="vz-t" x="{{l.x}}" y="{{l.y}}" text-anchor="{{l.a}}" transform="{{l.tr}}" data-g="{{l.g}}" style="font-family:{{l.ff}};font-size:{{l.fs}}px;font-weight:{{l.fw}};fill:{{l.c}}">{{l.t}}</text></sc-for>' +
      '</svg>' +
      '<figcaption style="display:flex;flex-wrap:wrap;gap:6px 16px;margin-top:10px;font-size:12px;line-height:16px;color:var(--ct-ink-2,#3B4558)">' +
        '<sc-for list="{{b.vz.legend}}" as="k"><span style="display:inline-flex;align-items:center;gap:6px"><svg width="14" height="14" aria-hidden="true"><defs>' + HATCH + '</defs><rect x="1" y="1" width="12" height="12" rx="2" style="fill:{{k.f}};stroke:{{k.s}};stroke-dasharray:{{k.da}};stroke-width:1.5"></rect></svg>{{k.l}}</span></sc-for>' +
      '</figcaption>' +
    '</figure>';

  /* CSS + hover layer (browser only). Hover a mark: tooltip from data-tip; marks sharing a data-g token light up. */
  var CSS = ".vz-svg .vz-m,.vz-svg .vz-t{transition:opacity 140ms cubic-bezier(.2,0,0,1)}" +
    ".vz-svg.vz-dim .vz-m:not(.vz-on):not(.vz-hit),.vz-svg.vz-dim .vz-t[data-g]:not([data-g='']):not(.vz-on){opacity:.18!important}" +
    ".vz-svg .vz-hit{cursor:default}" +
    ".vz-tip{position:fixed;z-index:60;max-width:320px;padding:8px 10px;background:var(--ct-navy-900,#0E1B33);color:#fff;font:12px/17px 'IBM Plex Sans',system-ui,sans-serif;border-radius:4px;box-shadow:0 8px 24px rgba(14,27,51,.16);pointer-events:none;opacity:0;transition:opacity 120ms}" +
    "@media (prefers-reduced-motion:reduce){.vz-svg .vz-m,.vz-svg .vz-t,.vz-tip{transition:none}}";
  function installHover() {
    if (typeof document === "undefined" || root.__dcvizHover) return; root.__dcvizHover = true;
    var st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);
    var tip = document.createElement("div"); tip.className = "vz-tip"; tip.setAttribute("role", "status"); document.body.appendChild(tip);
    var cur = null;
    function clear() { if (!cur) return; cur.svg.classList.remove("vz-dim"); cur.on.forEach(function (n) { n.classList.remove("vz-on"); }); cur = null; }
    document.addEventListener("mouseover", function (e) {
      var t = e.target.closest ? e.target.closest(".vz-svg [data-tip],.vz-svg [data-g]") : null;
      if (!t) { clear(); tip.style.opacity = 0; return; }
      var svg = t.closest(".vz-svg"), tx = t.getAttribute("data-tip"), g = (t.getAttribute("data-g") || "").split(" ")[0];
      clear();
      if (g) {
        var on = Array.prototype.filter.call(svg.querySelectorAll("[data-g]"), function (n) { return (" " + n.getAttribute("data-g") + " ").indexOf(" " + g + " ") >= 0; });
        if (on.length > 1) { svg.classList.add("vz-dim"); on.forEach(function (n) { n.classList.add("vz-on"); }); cur = {svg: svg, on: on}; }
      }
      if (tx) { tip.textContent = tx; tip.style.opacity = 1; } else tip.style.opacity = 0;
    });
    document.addEventListener("mousemove", function (e) {
      if (tip.style.opacity === "0") return;
      var x = e.clientX + 14, y = e.clientY + 16, w = tip.offsetWidth, h = tip.offsetHeight;
      if (x + w > innerWidth - 8) x = e.clientX - w - 14; if (y + h > innerHeight - 8) y = e.clientY - h - 16;
      tip.style.left = x + "px"; tip.style.top = y + "px";
    });
  }
  if (typeof document !== "undefined") { if (document.body) installHover(); else document.addEventListener("DOMContentLoaded", installHover); }

  var api = {
    has: function (t) { return !!TYPES[t]; },
    types: Object.keys(TYPES),
    /* ctx: {data: DCTData, level} */
    scene: function (b, ctx) { var s = TYPES[b.type](b, ctx || {}); s.read = b.read || ""; delete s.P; delete s.T; return s; },
    snippet: snippet, colors: C, paint: paint, trustKey: trustKey, statusKey: statusKey
  };
  if (typeof module !== "undefined" && module.exports) module.exports = api; else root.DCViz = api;
})(typeof window !== "undefined" ? window : this);
