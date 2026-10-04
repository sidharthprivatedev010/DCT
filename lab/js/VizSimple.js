/* Simpler overview visuals: one message per visual, fewer marks, a headline on top.
   Same block format and DCViz library as the detailed lab (VizLab.js); each block names the pattern it uses
   and what it leaves out compared with the detailed version. */
(function () {
  var L = (typeof window !== "undefined" && window.DCVizLabBlocks) || {owner: [{}], core: [{}, {}, {}, {}], entity: [{}, {}, {}], all: [{}]};
  var river = L.core[3] || {};

  var BLOCKS = {
    owner: [
      {type: "scorecard", title: "Domain scorecard", ask: "Is the enterprise on track, domain by domain?", scope: "Group", domains: L.owner[0].domains,
        pattern: "Unit chart (one dot per KPI)", from: "Enterprise pulse",
        drop: "% distance from plan, yesterday's outline, the 37 KPI labels. Hover a dot for its value.",
        cap: "Status and trust from base-data.js (Group scope)."},
      {type: "bullets", title: "Closest to materiality", ask: "What crossed materiality, and what is about to?",
        pattern: "Bullet graph (Stephen Few)", from: "Materiality horizon",
        drop: "The 7-day trajectories and the four quiet items. The note on the right keeps the trend in words.",
        cap: "Distance to each item's materiality threshold. Threshold values are placeholders in the catalogue [PH].",
        items: [
          {id: "GOV-004", l: "Overdue certifications", v: 140, ts: "Certified", own: "Assurance", note: "crossed D-3"},
          {id: "ALT-2041", l: "Plant 02 shortfall", v: 128, ts: "Pending certification", own: "Entity A1", note: "+108 pts in 7 d"},
          {id: "TRU-007", l: "Certification SLA breach", v: 110, ts: "System count", own: "Core Group", note: "crossed today"},
          {id: "SIG-009", l: "RM-1 cover vs lead time", v: 86, proj: true, ts: "Pending certification", own: "Supply", note: "crosses ≈ D+3 (forecast)"},
          {id: "CSH-006", l: "Upstream obligation CU 26 m", v: 82, proj: true, ts: "Pending certification", own: "Group Treasury", note: "crosses ≈ D+1.5 (forecast)"}
        ]},
      {type: "split", title: "How much of the movement is certified", ask: "Is the EBITDA result real, or still provisional?", unit: "CU m",
        pattern: "Bars on one shared scale", from: "Confidence-weighted bridge",
        drop: "The seven individual drivers. They are one click away in the detailed bridge.",
        head: "Net +0.3 CU m vs plan, but 3.0 CU m of the movement is still provisional", sub: "Same scale for all three bars, so the provisional part is visibly ten times the net.",
        cap: "YTD EBITDA vs plan (FIN-001). Gross movement split by trust state; driver split is synthetic.",
        rows: [
          {l: "Net change vs plan", sub: "Actual 361.3 vs plan 361.0", v: 0.3, ts: "Certified", ck: "ok", sign: true},
          {l: "Certified movement", sub: "Price, volume, variable cost, energy", v: 13.9, ts: "Certified"},
          {l: "Not yet certified", sub: "FX, value programme, other", v: 3.0, ts: "Pending certification"}
        ]}
    ],
    core: [
      {type: "diverge", title: "Net hides the churn", ask: "Which entity drives the variance?", unit: "CU m", hi: "A1", max: 5,
        pattern: "Diverging bars + net dot (IBCS-style)", from: "Variance flow",
        drop: "The split by driver. Entity A1 is emphasised; peers are muted.",
        head: "Entity A1 nets +0.4 but moves 8.6 CU m, half of the group's gross movement",
        cap: "YTD EBITDA variance vs plan by entity (nets match G-02; split into favourable/adverse is synthetic).",
        rows: [{id: "A1", l: "Entity A1", fav: 4.5, adv: 4.1}, {id: "A2", l: "Entity A2", fav: 0.8, adv: 0.9}, {id: "B1", l: "Entity B1", fav: 0.8, adv: 1.0},
          {id: "B2", l: "Entity B2", fav: 1.0, adv: 0.7}, {id: "C1", l: "Entity C1", fav: 0.7, adv: 0.9}, {id: "C2", l: "Entity C2", fav: 0.8, adv: 0.7}]},
      {type: "strip", title: "One entity against its peers", ask: "Which entity looks different from its peers?",
        pattern: "Dot strip with emphasis", from: "Entity fingerprints",
        drop: "Two of the six KPIs (revenue and alerts) and the per-entity shapes. Peers become grey dots.",
        head: "Entity A1 trails its peers on DSO, ROCE and certification",
        cap: "G-02 comparison set. Production for A1 is a flash figure under reconciliation.",
        ents: ["Entity A1", "Entity A2", "Entity B1", "Entity B2", "Entity C1", "Entity C2"], hiIdx: 0,
        kpis: [
          {l: "DSO", v: [52, 44, 46, 43, 45, 44], plan: 45, pol: -1, u: " d", ts: "Certified"},
          {l: "ROCE vs plan", v: [-1.6, 0.3, -0.6, 0.1, 0.2, 0.5], plan: 0, pol: 1, u: " pt", ts: "Certified"},
          {l: "Certified KPIs", v: [82, 86, 84, 86, 82, 86], plan: 86, pol: 1, u: "%", ts: "Certified"},
          {l: "Production", v: [103.2, 99.1, 98.4, 100.2, 97.9, 99.6], plan: 100, pol: 1, u: "%", ts: "Reconciliation break"}
        ]},
      {type: "waffle", title: "Certification so far", ask: "Which numbers are uncertified, and is this close behind?",
        pattern: "Waffle chart + sparkline against a range", from: "Certification tide",
        drop: "The entity × domain grid and the stacked trust layers over time.",
        cap: "Leadership KPIs (TRU-001 = 84%). The grey band is the range of P04–P06 on the same close day.",
        counts: {cert: 39, exc: 3, pend: 7, recon: 1}, today: 5, target: 7, days: 10, usual: "44–47 of 50 (88–94%)",
        now: [22, 41, 58, 69, 78, 84],
        prior: [[24, 44, 61, 74, 84, 88, 95, 99, 100, 100], [26, 48, 66, 78, 86, 91, 97, 100, 100, 100], [30, 52, 70, 82, 90, 94, 98, 100, 100, 100]]},
      {type: "late", title: "Stuck escalations", ask: "Which escalations are stuck, and where?",
        pattern: "Stage chips + bullet bars against SLA", from: "Escalation aging river",
        drop: "On-time escalations as individual marks, and the throughput bands.",
        cap: "Open escalations (EFF-009 = 11). Bar = age as a multiple of the stage SLA (capped at 3×).",
        stages: river.stages, items: river.items}
    ],
    entity: [
      {type: "path", title: "Why free cash flow is short", ask: "What is actually causing the free cash flow gap?", unit: "CU m",
        pattern: "Drill path (critical path only)", from: "Causal driver tree",
        drop: "Off-path branches. They appear as one line of context under each bar.",
        head: "The FCF gap is a working-capital problem: follow it to two late-paying customers",
        cap: "FIN-004 A1 19.8 vs 24.5; WCP-001 DSO. Contributions below DSO are synthetic.",
        steps: [
          {l: "Free cash flow gap", v: "CU 19.8 m vs 24.5", d: -4.7, ts: "Certified", why: "after capex +2.0 and EBITDA +0.4 offsets"},
          {l: "Working capital", v: "+CU 9 m out vs +2", d: -7.0, ts: "Pending certification", why: "DIO −2.4 and DPO −1.0 also add to it"},
          {l: "DSO 52 d vs 45", v: "days sales outstanding", d: -3.6, ts: "Certified", why: "billing cut-off delay adds −0.7"},
          {l: "2 customers paying late", v: "+11 d average · SIG-005", d: -2.9, ts: "LEADING", why: "leading signal, not yet certified"}
        ]},
      {type: "ccc", title: "Cash conversion cycle", ask: "Where is cash getting stuck in the cycle?",
        pattern: "Hero number + dumbbells", from: "Cash conversion loop",
        drop: "The ring. The equation is written out instead.",
        cap: "WCP-001/002/003 and WCP-006 for Entity A1. Cash effect at ≈ CU 0.78 m per day.",
        dso: {v: 52, plan: 45, ts: "Certified"}, dio: {v: 41, plan: 34, ts: "Pending certification"}, dpo: {v: 38, plan: 42, ts: "Certified"},
        tied: "CU 96 m tied up · +14 vs plan", cashPerDayN: 0.78},
      {type: "days", title: "Next 14 days", ask: "When does risk bunch up, and what comes first?",
        pattern: "Calendar strip (single-hue heat)", from: "14-day risk runway",
        drop: "The six lanes and the event windows. Only four key events are called out.",
        head: "Exposure peaks D+4 to D+9; the first deadline is REG-011 in 38 h",
        cap: "Daily exposure = severity-weighted count of overlapping risks (same events as the detailed runway).",
        exp: [3, 4, 3, 4, 6, 8, 9, 9, 9, 9, 6, 3, 3, 2],
        ev: [
          {at: 1, l: "REG-011 response due", sub: "38 h · Regulatory", sk: "bad", ts: "System count"},
          {at: 3.5, l: "RM-1 stock-out window opens", sub: "unless expedited · Supply", sk: "bad", ts: "Pending certification"},
          {at: 9, l: "Upstream obligation CU 26 m", sub: "forecast breach · Cash", sk: "fc", ts: "Pending certification"},
          {at: 12, l: "Project 05 milestone", sub: "3 d late · Capex", sk: "warn", ts: "Certified"}
        ]}
    ],
    all: [Object.assign({}, L.all[0], {pattern: "Treemap at the lens's depth", from: "(unchanged, already simple)", drop: "Nothing. Only 3 to 6 tiles show at any one depth."})]
  };

  var LENSES = [
    {k: "owner", n: "01", h: "Owner lens", q: "Is the enterprise healthier than yesterday? What crossed materiality?"},
    {k: "core", n: "02", h: "Core Group lens", q: "Which entity drives the variance? What's uncertified? What's stuck?"},
    {k: "entity", n: "03", h: "Entity lens", q: "Why are we off plan? What is at risk this week?"},
    {k: "all", n: "04", h: "Across lenses", q: "One map that zooms with the lens."}
  ];

  var PRINCIPLES = [
    {t: "One message per visual", d: "The headline sentence is the answer; the chart is the evidence.", s: "Few: a dashboard should tell you at a glance whether to act"},
    {t: "Seven rows or fewer", d: "Pick the few items that need attention; the rest stay one click away.", s: "FT Visual Vocabulary: rank, then show the top"},
    {t: "Bars against a target, not gauges", d: "Bullet graphs show value, target and good/bad ranges in a line.", s: "Few, bullet graph specification"},
    {t: "Plan, actual and variance in one mark", d: "Integrated variance, with the same colours for good and bad everywhere.", s: "IBCS integrated variance charts"},
    {t: "Emphasise one, grey the rest", d: "Comparisons use muted peers and one highlighted entity.", s: "Tufte: data-ink and small multiples"}
  ];

  var SOURCES = [
    {l: "Stephen Few, Information Dashboard Design", u: "https://www.goodreads.com/book/show/336258.Information_Dashboard_Design"},
    {l: "Perceptual Edge: best practices for sparklines", u: "https://www.perceptualedge.com/articles/visual_business_intelligence/best_practices_for_scaling_sparklines.pdf"},
    {l: "Financial Times Visual Vocabulary (via Tableau)", u: "https://www.tableau.com/blog/what-i-learned-recreating-financial-times-visual-vocabulary-tableau-94516"},
    {l: "IBCS: integrated variance charts (Inforiver guide)", u: "https://inforiver.com/ebooks/building-ibcs-compliant-reports-power-bi/"},
    {l: "Data Viz Project: waffle chart", u: "https://datavizproject.com/data-type/percentage-grid/"},
    {l: "Dumbbell charts: when to use them (Domo)", u: "https://www.domo.com/learn/charts/dumbbell-plot-chart"},
    {l: "Calendar charts (Domo)", u: "https://www.domo.com/learn/charts/calendar-chart"},
    {l: "Tufte's data-ink principles", u: "https://jtr13.github.io/cc19/tuftes-principles-of-data-ink.html"},
    {l: "Dataviz Inspiration gallery", u: "https://www.dataviz-inspiration.com/"}
  ];

  var MONO = "font-family:'IBM Plex Mono',ui-monospace,monospace;";
  var PANEL =
    '<section class="ct-panel" role="region" aria-label="{{b.title}}" style="background:var(--ct-surface,#FFFFFF);border:1px solid var(--ct-line,#DCE1E8);border-top:3px solid var(--ct-navy-900,#0E1B33);border-radius:4px;padding:20px 22px;display:flex;flex-direction:column;gap:14px;min-width:0">' +
      '<div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:6px 16px;align-items:flex-start">' +
        '<div style="display:flex;flex-direction:column;gap:3px;min-width:0;flex:1 1 360px">' +
          '<h2 style="margin:0;font-size:18px;line-height:1.4;font-weight:600">{{b.title}}</h2>' +
          '<p style="margin:0;font-size:13px;line-height:19px;color:var(--ct-ink-2,#3B4558)"><span style="' + MONO + 'font-size:11px;font-weight:500;letter-spacing:.04em;text-transform:uppercase;color:var(--ct-ink-3,#5B6576);margin-right:6px">Answers</span>{{b.ask}}</p>' +
        '</div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:flex-end">' +
          '<span style="' + MONO + 'font-size:11px;line-height:16px;padding:3px 8px;border:1px solid var(--ct-navy-700,#24406E);border-radius:2px;color:var(--ct-navy-700,#24406E)">{{b.pattern}}</span>' +
          '<span style="' + MONO + 'font-size:11px;line-height:16px;padding:3px 8px;border:1px dashed var(--ct-line-strong,#B4BDCA);border-radius:2px;color:var(--ct-ink-3,#5B6576)">type: {{b.type}}</span>' +
        '</div>' +
      '</div>' +
      '<sc-if value="{{b.hasLevels}}"><div role="tablist" aria-label="Depth" style="display:flex;gap:6px;flex-wrap:wrap"><sc-for list="{{b.lv}}" as="v"><button type="button" role="tab" aria-selected="{{v.on}}" class="ct-btn" onClick="{{v.pick}}" style="min-height:32px;padding:0 12px;border-radius:4px;font:500 12.5px \'IBM Plex Sans\',system-ui,sans-serif;cursor:pointer;border:1px solid {{v.bd}};background:{{v.bg}};color:{{v.fg}}">{{v.l}}</button></sc-for></div></sc-if>' +
      '<div style="overflow-x:auto">' + DCViz.snippet + '</div>' +
      '<div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:8px 24px;padding-top:10px;border-top:1px solid var(--ct-line,#DCE1E8);font-size:12px;line-height:17px;color:var(--ct-ink-3,#5B6576)">' +
        '<p style="margin:0"><b style="color:var(--ct-ink-2,#3B4558);font-weight:600">Simplifies</b> {{b.from}} · <b style="color:var(--ct-ink-2,#3B4558);font-weight:600">Left out:</b> {{b.drop}}</p>' +
        '<p style="margin:0">{{b.cap}}</p>' +
      '</div>' +
    '</section>';

  var MARKUP =
    '<div class="ct" style="font-family:\'IBM Plex Sans\',system-ui,sans-serif;color:var(--ct-ink,#121A2B);background:var(--ct-bg,#F5F6F8);font-size:14px;line-height:20px;min-height:100vh">' +
      '<header class="ct-dark" style="display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;padding:10px 20px;background:var(--ct-navy-900,#0E1B33);color:#FFFFFF;min-height:64px;box-sizing:border-box">' +
        '<svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" fill="none" stroke="#FFFFFF" stroke-width="1.6"><rect x="3" y="3" width="16" height="16" rx="2"></rect><path d="M7 15V10M11 15V7M15 15v-3"></path></svg>' +
        '<span style="font-weight:600;letter-spacing:.02em">Control Tower</span><span style="opacity:.6">/</span><span>Visual lab</span><span style="opacity:.6">/</span><span>Simple</span>' +
        '<span title="All names, values, dates and sources on this page are synthetic" style="display:inline-flex;align-items:center;min-height:24px;padding:0 8px;border:1px dashed rgba(255,255,255,.55);border-radius:2px;' + MONO + 'font-size:11px;letter-spacing:.06em">SYNTHETIC DATA</span>' +
        '<nav style="margin-left:auto;display:flex;gap:16px;font-size:13px"><a href="viz-lab.html" style="color:#FFFFFF">Detailed versions →</a><a href="../index.html" style="color:#FFFFFF">Prototype</a></nav>' +
      '</header>' +
      '<main style="max-width:1320px;margin:0 auto;padding:28px 24px 72px;display:flex;flex-direction:column;gap:22px">' +
        '<div style="display:flex;flex-direction:column;gap:6px">' +
          '<span style="' + MONO + 'font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--ct-ink-3,#5B6576)">Lab · simpler overview visuals · 11 block types</span>' +
          '<h1 style="margin:0;font-size:28px;line-height:36px;font-weight:600;color:var(--ct-navy-900,#0E1B33)">Less on screen, the same answer</h1>' +
          '<p style="margin:0;max-width:920px;font-size:15px;line-height:23px;color:var(--ct-ink-2,#3B4558)">Each detailed visual from the first lab, cut down to one message: a headline sentence, at most seven rows, and a chart pattern a leadership reader already knows. Each panel says what was left out. That detail belongs one click deeper, in the detailed version or the drill tabs.</p>' +
        '</div>' +
        '<section aria-label="Design principles" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px">' +
          '<sc-for list="{{principles}}" as="p"><div style="background:var(--ct-surface,#FFFFFF);border:1px solid var(--ct-line,#DCE1E8);border-radius:4px;padding:14px 16px;display:flex;flex-direction:column;gap:6px">' +
            '<span style="' + MONO + 'font-size:11px;font-weight:600;color:var(--ct-navy-700,#24406E)">0{{p.i}}</span>' +
            '<b style="font-size:14px;font-weight:600;color:var(--ct-ink,#121A2B)">{{p.t}}</b>' +
            '<span style="font-size:12.5px;line-height:18px;color:var(--ct-ink-2,#3B4558)">{{p.d}}</span>' +
            '<span style="font-size:11.5px;line-height:16px;color:var(--ct-ink-3,#5B6576);margin-top:auto">{{p.s}}</span>' +
          '</div></sc-for>' +
        '</section>' +
        '<nav role="tablist" aria-label="Lens" style="display:flex;gap:8px;flex-wrap:wrap;position:sticky;top:0;z-index:5;background:var(--ct-bg,#F5F6F8);padding:8px 0">' +
          '<sc-for list="{{tabs}}" as="t"><button type="button" role="tab" aria-selected="{{t.on}}" class="ct-btn" onClick="{{t.pick}}" style="min-height:40px;padding:0 16px;border-radius:4px;font:600 13px \'IBM Plex Sans\',system-ui,sans-serif;cursor:pointer;border:1px solid {{t.bd}};background:{{t.bg}};color:{{t.fg}}">{{t.l}}</button></sc-for>' +
        '</nav>' +
        '<sc-for list="{{sections}}" as="sec">' +
          '<div style="display:flex;flex-direction:column;gap:16px;margin-top:10px">' +
            '<div style="display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 12px;border-bottom:2px solid var(--ct-navy-900,#0E1B33);padding-bottom:8px">' +
              '<span style="' + MONO + 'font-size:13px;font-weight:600;color:var(--ct-navy-700,#24406E)">{{sec.n}}</span>' +
              '<h2 style="margin:0;font-size:20px;line-height:28px;font-weight:600;color:var(--ct-navy-900,#0E1B33)">{{sec.h}}</h2>' +
              '<span style="font-size:13px;color:var(--ct-ink-3,#5B6576)">{{sec.q}}</span>' +
            '</div>' +
            '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,900px),1fr));gap:16px">' +
              '<sc-for list="{{sec.blocks}}" as="b">' + PANEL + '</sc-for>' +
            '</div>' +
          '</div>' +
        '</sc-for>' +
        '<section aria-label="Sources" style="margin-top:20px;padding:16px 18px;background:var(--ct-surface,#FFFFFF);border:1px solid var(--ct-line,#DCE1E8);border-radius:4px">' +
          '<h2 style="margin:0 0 8px;font-size:15px;font-weight:600">Sources and further inspiration</h2>' +
          '<ul style="margin:0;padding-left:18px;columns:2 320px;font-size:13px;line-height:22px">' +
            '<sc-for list="{{sources}}" as="s"><li><a href="{{s.u}}" target="_blank" rel="noopener" style="color:var(--ct-navy-700,#24406E)">{{s.l}}</a></li></sc-for>' +
          '</ul>' +
        '</section>' +
      '</main>' +
    '</div>';

  DCLite.register("VizSimple", MARKUP, function (DCLogic) {
    class Component extends DCLogic {
      renderVals() {
        var self = this, st = this.state || {}, lens = st.lens || "all-lenses", data = typeof DCTData !== "undefined" ? DCTData : {};
        var btn = function (on) { return on ? {bg: "var(--ct-navy-900,#0E1B33)", fg: "#FFFFFF", bd: "var(--ct-navy-900,#0E1B33)"} : {bg: "#FFFFFF", fg: "var(--ct-ink,#121A2B)", bd: "var(--ct-line-strong,#B4BDCA)"}; };
        var tabs = [{k: "all-lenses", l: "Everything"}].concat(LENSES.map(function (x) { return {k: x.k, l: x.k === "all" ? "Across lenses" : x.h.replace(" lens", "")}; })).map(function (t) {
          return Object.assign({l: t.l, on: String(t.k === lens), pick: function () { self.setState({lens: t.k}); }}, btn(t.k === lens));
        });
        var sections = LENSES.filter(function (x) { return lens === "all-lenses" || lens === x.k; }).map(function (x) {
          return {n: x.n, h: x.h, q: x.q, blocks: BLOCKS[x.k].map(function (raw, i) {
            var b = Object.assign({}, raw), key = x.k + i, level = st["lv" + key] || b.level;
            b.hasLevels = !!b.levels;
            if (b.levels) b.lv = b.levels.map(function (v) { return Object.assign({l: v.l, on: String(v.k === level), pick: function () { var u = {}; u["lv" + key] = v.k; self.setState(u); }}, btn(v.k === level)); });
            b.vz = DCViz.scene(b, {data: data, level: level});
            return b;
          })};
        });
        return {tabs: tabs, sections: sections, principles: PRINCIPLES.map(function (p, i) { return Object.assign({i: i + 1}, p); }), sources: SOURCES};
      }
    }
    return Component;
  });
})();
