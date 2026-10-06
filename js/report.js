/* Download report: builds a PDF for the signed-in persona (Owner, Core Group, Entity) from the same data the pages show.
   Loaded on first click of the header "Download report" button (TplA–TplF). Uses jsPDF + autoTable from js/vendor/.
   Owner: a two-page portrait brief, chart-led (MANIFEST04 §7.1). Core Group: a three-page brief in the same design with
   entity comparison and an insight box per section (review 2026-10-06). Both are drawn by buildBrief. Entity, for now:
   the lens home page (strip, headline KPIs, forecast, actions, resolved through DCTResolve) and a scorecard from
   DCTData (js/data/base-data.js): Owner = Group, Core Group = Group vs Entity A1 / A2, Entity = Entity A1 and its plants. */
var DCTReport = (function () {
  "use strict";
  var LENS = {
    "Owner": {home: "P2-O01-EnterpriseHealth", label: "Owner", file: "Owner", scope: "Group", screens: /^P2-(O|G08o|S\d\do|R01o)/,
      intro: "Group summary for the Owner: enterprise health, headline measures, decisions required and the full Group scorecard."},
    "Core Group": {home: "P2-G01-Portfolio", label: "Core Group", file: "Core-Group", scope: "Group", screens: /^P2-(G(?!08o)|S\d\d[a-z]?-|S\d\dc|R01-)/,
      intro: "Comparative view for the Core Group: portfolio status, escalations and every measure compared across Entity A1 and Entity A2."},
    "Entity": {home: "P2-E01-EntityHome", label: "Entity A1", file: "Entity-A1", scope: "A1", screens: /^P2-(E|S\d\de|R01e)/,
      intro: "Working view for Entity A1: own alerts and actions, the entity scorecard and plant-by-plant comparison (Plant 01-03)."}
  };
  var NAVY = [14, 27, 51], INK = [18, 26, 43], MUTED = [92, 102, 120], LINE = [214, 219, 227], BAND = [244, 246, 249];
  var BIZ = {"On track": [21, 128, 61], "Improving": [29, 78, 216], "Declining": [180, 83, 9], "Intervention required": [185, 28, 28], "Breached": [185, 28, 28], "Forecast breach": [124, 58, 237]};
  var BAD = /^(Declining|Intervention required|Breached|Forecast breach)$/;

  // Standard PDF fonts only cover Latin-1: spell out the symbols the pages use.
  var SUB = {"₹": "INR ", "−": "-", "–": "-", "—": "-", "≤": "<=", "≥": ">=", "▲": "up", "▼": "down", "→": "->", "←": "<-", "≈": "~", "’": "'", "‘": "'", "“": "\"", "”": "\"", "…": "...", "•": "·", "✓": "", "◆": "", "◇": "", "⊘": "", "■": "", "□": ""};
  function clean(s) {
    if (s == null) return "";
    if (typeof s === "object") s = s.t != null ? s.t : (s.v != null ? s.v : "");
    return String(s).replace(/[^\x00-\xFF]/g, function (c) { return SUB[c] != null ? SUB[c] : ""; }).replace(/INR  +/g, "INR ").replace(/\s+/g, " ").trim();
  }

  function load(src) {
    return new Promise(function (ok, fail) {
      var s = document.createElement("script");
      s.src = src; s.onload = ok; s.onerror = function () { fail(new Error("Could not load " + src)); };
      document.head.appendChild(s);
    });
  }
  function libs() {
    if (window.jspdf && window.jspdf.jsPDF && window.jspdf.jsPDF.API.autoTable && window.DCTReportFonts) return Promise.resolve();
    return load("js/vendor/jspdf.umd.min.js").then(function () { return load("js/vendor/jspdf.plugin.autotable.min.js"); })
      .then(function () { return window.DCTReportFonts ? null : load("js/vendor/report-fonts.js").catch(function () { return null; }); });   // optional: Helvetica fallback
  }
  // Loads the lens home page data file and returns its page JSON, resolved from base-data like the page itself.
  function homePage(name) {
    var reg = DCLite.register, got = null;
    DCLite.register = function (n, m, f) { if (n === name) got = f; return reg.apply(this, arguments); };
    return load("js/c/" + name + ".js").then(function () {
      DCLite.register = reg;
      if (!got) throw new Error("No data for " + name);
      var L = function (p) { this.props = p || {}; this.state = {}; };
      L.prototype.setState = L.prototype.forceUpdate = function () {};
      var page = new (got(L))({}).renderVals().page;
      return typeof DCTResolve === "function" ? DCTResolve(page) : page;
    }, function (e) { DCLite.register = reg; throw e; });
  }

  function kpiIds(cfg) {
    var P = DCTData.plant;
    var ids = Object.keys(DCTData.kpi).filter(function (id) {
      var k = P.kpi[id];
      return k && (k.screens || []).some(function (s) { return cfg.screens.test(s); }) && DCTData.kpi[id][cfg.scope];
    });
    return ids.sort(function (a, b) { var ta = P.kpi[a].theme || "T9", tb = P.kpi[b].theme || "T9"; return ta < tb ? -1 : ta > tb ? 1 : a < b ? -1 : 1; });
  }
  function rec(id, scope) { var e = DCTData.kpi[id]; return (e && e[scope]) || null; }
  function val(r) { if (!r) return "-"; if (r.val != null) return clean(r.val); return r.v == null ? "-" : clean(r.v + (r.u ? " " + r.u : "")); }
  function nameOf(id) { var k = DCTData.plant.kpi[id]; return clean(k ? k.name : id); }
  function themeOf(id) { var k = DCTData.plant.kpi[id], T = DCTData.plant.themes || {}; return clean((k && T[k.theme]) || "Other measures"); }

  function build(cfg, page, lens) {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF({orientation: "landscape", unit: "pt", format: "a4"});
    var W = doc.internal.pageSize.getWidth(), H = doc.internal.pageSize.getHeight(), M = 36, y;
    var now = new Date(), stamp = now.toLocaleString(undefined, {year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"});
    var period = clean(DCTData.plant.periodL || DCTData.plant.period || "");

    function head(t, sub) {
      if (y > H - 110) { doc.addPage(); y = 48; }
      doc.setFont("helvetica", "bold"); doc.setFontSize(13); doc.setTextColor.apply(doc, INK);
      doc.text(clean(t), M, y); y += 6;
      doc.setDrawColor.apply(doc, LINE); doc.setLineWidth(0.8); doc.line(M, y, W - M, y); y += 12;
      if (sub) { doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor.apply(doc, MUTED); var ls = doc.splitTextToSize(clean(sub), W - 2 * M); doc.text(ls, M, y); y += ls.length * 11 + 2; }
    }
    function table(o) {
      doc.autoTable(Object.assign({
        startY: y, margin: {left: M, right: M, top: 48, bottom: 40}, theme: "grid",
        styles: {font: "helvetica", fontSize: 8, cellPadding: 4, textColor: INK, lineColor: LINE, lineWidth: 0.5, overflow: "linebreak", valign: "top"},
        headStyles: {fillColor: NAVY, textColor: 255, fontStyle: "bold", fontSize: 8},
        alternateRowStyles: {fillColor: BAND},
        didParseCell: function (d) {
          if (d.section !== "body") return;
          var t = String(d.cell.raw == null ? "" : d.cell.raw);
          if (BIZ[t]) { d.cell.styles.textColor = BIZ[t]; d.cell.styles.fontStyle = "bold"; }
          else if (/^(Critical)$/.test(t)) { d.cell.styles.textColor = BIZ["Intervention required"]; d.cell.styles.fontStyle = "bold"; }
          else if (d.column.dataKey === "trust" || (o.trustCol != null && d.column.index === o.trustCol)) {
            d.cell.styles.textColor = /^Certified$/.test(t) ? BIZ["On track"] : BIZ["Declining"];
          }
        }
      }, o));
      y = doc.lastAutoTable.finalY + 22;
    }

    // Cover band
    doc.setFillColor.apply(doc, NAVY); doc.rect(0, 0, W, 92, "F");
    doc.setTextColor(255); doc.setFont("helvetica", "bold"); doc.setFontSize(20);
    doc.text("Control Tower - " + cfg.label + " report", M, 40);
    doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(210, 218, 232);
    doc.text(clean("Persona: " + lens + "   ·   Scope: " + (page.scope || cfg.scope) + "   ·   Period: " + period + "   ·   Generated " + stamp), M, 62);
    doc.setFont("courier", "bold"); doc.setFontSize(9); doc.setTextColor(255);
    doc.text("SYNTHETIC DATA", W - M, 40, {align: "right"});
    y = 120;

    // 1. Summary
    var ids = kpiIds(cfg);
    var recs = ids.map(function (id) { return rec(id, cfg.scope); });
    var count = function (f) { return recs.filter(f).length; };
    head("1. Summary", cfg.intro);
    doc.setFont("helvetica", "bold"); doc.setFontSize(11); doc.setTextColor.apply(doc, INK);
    var qs = doc.splitTextToSize(clean((page.title || "") + (page.q ? " - " + page.q : "")), W - 2 * M);
    doc.text(qs, M, y); y += qs.length * 14;
    doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor.apply(doc, MUTED);
    if (page.trust) { doc.text(clean("Trust: " + page.trust), M, y); y += 13; }
    if (page.banner && page.banner.t) { doc.setTextColor.apply(doc, BIZ["Intervention required"]); var bl = doc.splitTextToSize(clean(page.banner.t), W - 2 * M); doc.text(bl, M, y); y += bl.length * 11 + 2; }
    y += 6;
    var tiles = [
      ["Measures in report", String(ids.length), INK],
      ["On track", String(count(function (r) { return r.bs === "On track"; })), BIZ["On track"]],
      ["Improving", String(count(function (r) { return r.bs === "Improving"; })), BIZ["Improving"]],
      ["Declining", String(count(function (r) { return r.bs === "Declining"; })), BIZ["Declining"]],
      ["Intervention required", String(count(function (r) { return /Intervention|Breach/.test(r.bs || ""); })), BIZ["Intervention required"]],
      ["Certified", count(function (r) { return /^Certified/.test(r.ts || ""); }) + " / " + ids.length, INK]
    ];
    var tw = (W - 2 * M - 5 * 8) / 6;
    tiles.forEach(function (t, i) {
      var x = M + i * (tw + 8);
      doc.setDrawColor.apply(doc, LINE); doc.setFillColor(255, 255, 255); doc.roundedRect(x, y, tw, 48, 3, 3, "FD");
      doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor.apply(doc, MUTED); doc.text(t[0].toUpperCase(), x + 8, y + 15);
      doc.setFont("helvetica", "bold"); doc.setFontSize(16); doc.setTextColor.apply(doc, t[2]); doc.text(t[1], x + 8, y + 38);
    });
    y += 70;

    // 2. Status by area
    if ((page.strip || []).length) {
      head("2. Status by area");
      table({head: [["Area", "Status"]], body: page.strip.map(function (s) { return [clean(s.a), clean(s.s)]; }), columnStyles: {0: {cellWidth: 320}}, tableWidth: 520});
    }

    // 3. Headline measures (the home page cards)
    var cards = (page.kpis || []).filter(function (k) { return k.id; });
    if (cards.length) {
      head("3. Headline measures", "The KPI cards on the " + cfg.label + " home page, with values from the certified data set.");
      table({
        head: [["KPI", "Measure", "Value", "Plan", "Variance", "Trend", "Forecast", "Status", "Trust"]],
        body: cards.map(function (k) { return [k.id, clean(k.name), clean(k.v == null ? "-" : k.v + (k.u ? " " + k.u : "")), clean(k.plan || "-"), clean(k.var || "-"), clean(k.tr || "-"), clean(k.fc || "-"), clean(k.bs || "-"), clean(k.ts || "-")]; }),
        columnStyles: {0: {cellWidth: 52, fontStyle: "bold"}, 1: {cellWidth: 150}}, trustCol: 8
      });
    }

    // 4. Forecast and leading signals
    var fItems = [];
    (Array.isArray(page.forecast) ? page.forecast : [page.forecast]).forEach(function (b) { if (b && b.items) fItems = fItems.concat(b.items.filter(function (t) { return t && clean(t.l); })); });
    if (fItems.length) {
      head("4. Forecast and leading signals");
      table({head: [["Signal", "Value", "Basis"]], body: fItems.map(function (t) { return [clean(t.l), clean(t.v), clean(t.n)]; }), columnStyles: {0: {cellWidth: 340}, 1: {cellWidth: 140}}});
    }

    // 5. Actions, decisions, escalations
    var acts = page.actions && page.actions.rows ? page.actions : null;
    if (acts) {
      head("5. " + (acts.title || "Actions"));
      var rows = acts.rows.map(function (r) { return (Array.isArray(r) ? r : r.c || []).map(clean); });
      if (!rows.length) rows = [[clean(acts.empty || "No open items.")]];
      table({head: [(acts.cols || []).map(clean)], body: rows, columnStyles: {0: {cellWidth: 150}}});
    }

    // 6. Exceptions in scope
    var exc = ids.filter(function (id) { var r = rec(id, cfg.scope); return BAD.test(r.bs || "") || !/^Certified/.test(r.ts || ""); });
    head("6. Exceptions · " + clean(DCTData.plant.scopes[cfg.scope] || cfg.scope), "Measures that are declining, need intervention or are not yet certified.");
    table({
      head: [["KPI", "Measure", "Theme", "Value", "Plan", "Variance", "Status", "Trust", "Owner"]],
      body: exc.length ? exc.map(function (id) { var r = rec(id, cfg.scope); return [id, nameOf(id), themeOf(id), val(r), clean(r.plan || "-"), clean(r.var || "-"), clean(r.bs || "-"), clean(r.ts || "-"), clean(r.own || "-")]; }) : [["", "No exceptions", "", "", "", "", "", "", ""]],
      columnStyles: {0: {cellWidth: 52, fontStyle: "bold"}, 1: {cellWidth: 160}}, trustCol: 7
    });

    // 7. Persona scorecard
    var S = DCTData.plant.scopes, cols, row;
    if (lens === "Core Group") {
      head("7. Entity comparison", "Every measure on Core Group screens, Group against each entity. Status is per entity, never only the Group average.");
      cols = ["KPI", "Measure", "Group", "Entity A1", "A1 status", "Entity A2", "A2 status", "Trust (Group)"];
      row = function (id) { var g = rec(id, "Group"), a = rec(id, "A1"), b = rec(id, "A2"); return [id, nameOf(id), val(g), val(a), clean(a ? a.bs : "-"), val(b), clean(b ? b.bs : "-"), clean(g.ts || "-")]; };
    } else if (lens === "Entity") {
      head("7. Plant comparison · Entity A1", "Measures with plant-level data, Entity A1 against Plant 01, Plant 02 and Plant 03.");
      var pl = DCTData.plant.children.A1 || ["Plant01", "Plant02", "Plant03"];
      var pIds = ids.filter(function (id) { return pl.some(function (p) { return rec(id, p); }); });
      table({
        head: [["KPI", "Measure", "Entity A1"].concat(pl.map(function (p) { return clean(S[p] || p); })).concat(["A1 status"])],
        body: pIds.map(function (id) { var a = rec(id, "A1"); return [id, nameOf(id), val(a)].concat(pl.map(function (p) { var r = rec(id, p); return r ? val(r) + (BAD.test(r.bs || "") ? " (" + clean(r.bs) + ")" : "") : "-"; })).concat([clean(a.bs || "-")]); }),
        columnStyles: {0: {cellWidth: 52, fontStyle: "bold"}, 1: {cellWidth: 170}}
      });
      head("8. Entity A1 scorecard by theme");
      cols = ["KPI", "Measure", "Value", "Plan", "Variance", "Trend", "Status", "Trust"];
      row = function (id) { var r = rec(id, "A1"); return [id, nameOf(id), val(r), clean(r.plan || "-"), clean(r.var || "-"), clean(r.tr || "-"), clean(r.bs || "-"), clean(r.ts || "-")]; };
    } else {
      head("7. Group scorecard by theme", "Every measure on Owner screens at Group level.");
      cols = ["KPI", "Measure", "Value", "Plan", "Variance", "Trend", "Status", "Trust"];
      row = function (id) { var r = rec(id, "Group"); return [id, nameOf(id), val(r), clean(r.plan || "-"), clean(r.var || "-"), clean(r.tr || "-"), clean(r.bs || "-"), clean(r.ts || "-")]; };
    }
    // One block per theme, with a theme row heading it
    var body = [], last = null;
    ids.forEach(function (id) {
      var t = themeOf(id);
      if (t !== last) { body.push([{content: t, colSpan: cols.length, styles: {fillColor: [226, 231, 239], fontStyle: "bold", textColor: INK}}]); last = t; }
      body.push(row(id));
    });
    table({head: [cols], body: body, columnStyles: {0: {cellWidth: 52, fontStyle: "bold"}, 1: {cellWidth: 190}}, trustCol: cols.length - 1});

    // Footer on every page
    var n = doc.getNumberOfPages();
    for (var i = 1; i <= n; i++) {
      doc.setPage(i);
      doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor.apply(doc, MUTED);
      doc.text(clean("Control Tower · " + cfg.label + " report · " + period + " · Synthetic data, prototype only"), M, H - 18);
      doc.text("Page " + i + " of " + n, W - M, H - 18, {align: "right"});
    }
    var d = now.getFullYear() + "-" + ("0" + (now.getMonth() + 1)).slice(-2) + "-" + ("0" + now.getDate()).slice(-2);
    doc.save("Control-Tower-" + cfg.file + "-Report-" + d + ".pdf");
  }


  /* ---------- Owner brief (MANIFEST04 §6, §7.1): A4 portrait, chart-led, entity level only ---------- */
  var HEX = function (h) { return [parseInt(h.substr(1, 2), 16), parseInt(h.substr(3, 2), 16), parseInt(h.substr(5, 2), 16)]; };
  var SC = {A1: HEX("#2a78d6"), A2: HEX("#eb6834"), Group: HEX("#52514e")};
  var ST = {"On track": HEX("#15803d"), "Improving": HEX("#1d63c4"), "Declining": HEX("#c2700e"), "Intervention required": HEX("#be2020"), "Breached": HEX("#be2020"), "Forecast breach": HEX("#7c3aed")};
  var TGT = HEX("#898781"), GRID = [230, 232, 236], PANEL = [221, 225, 231], SOFT = [244, 245, 248], SUBT = [110, 116, 128];
  var OWNER = [
    {t: "Enterprise health and data assurance", s: "Health and data assurance", k: ["TRU-001", "TRU-007", "TRU-006", "FIN-003", "FIN-001", "FIN-005"]},
    {t: "Early warning", s: "Early warning", k: ["PRD-003", "PRD-002"]},
    {t: "Cash and liquidity", s: "Cash and liquidity", k: ["FIN-004", "FIN-008", "FIN-006", "LIQ-002", "LIQ-001"], page: true},
    {t: "Operational performance", s: "Operational performance", k: ["OPS-001", "OPS-002", "CST-001", "EHS-001"]}
  ];
  // Core Group brief (review 2026-10-06): same design as the Owner brief, five sections, entity comparison and an insight
  // box per section. Values come from DCTData (js/data/base-data.js), the same numbers as data/KPI-Lineage-Model.xlsx.
  var CORE = [
    {t: "Financial performance and data trust", s: "Finance and trust", k: ["TRU-001", "TRU-007", "TRU-006", "FIN-003", "FIN-001", "FIN-005", "FIN-008"]},
    {t: "Early warning", s: "Early warning", k: ["PRD-003", "PRD-002"]},
    {t: "Cash and working capital", s: "Cash and WC", k: ["FIN-004", "WCP-001", "FIN-006", "LIQ-002", "LIQ-001", "CSH-001"]},
    {t: "Operational performance", s: "Operations", k: ["OPS-001", "CST-001", "OPS-002", "PLT-002", "OPS-003"]},
    {t: "Capital projects, risk and safety", s: "Projects, risk, safety", k: ["CPX-004", "PRG-002", "PRG-003", "GOV-004", "EHS-001", "EFF-002"]}
  ];
  // Short names for the bottom line; anything else uses the model name.
  var SHORT = {"PRD-003": "Projected EBITDA gap", "PRD-002": "Plan-miss probability", "TRU-001": "Numbers certified", "FIN-005": "ROCE", "FIN-008": "FCF conversion", "LIQ-002": "Covenant headroom", "OPS-001": "Production vs plan", "OPS-002": "Sales vs plan", "CST-001": "Cost per tonne", "EHS-001": "Safety (TRIR)"};

  // One builder for both briefs: lens "Owner" (OWNER sections) or "Core Group" (CORE sections, coreBody below).
  function buildBrief(cfg, page, lens) {
    var isCore = lens === "Core Group", SECS = isCore ? CORE : OWNER, TITLE = isCore ? "Core Group brief" : "Owner brief";
    var jsPDF = window.jspdf.jsPDF, doc = new jsPDF({orientation: "portrait", unit: "pt", format: "a4"});
    var F = "helvetica", rich = false;
    if (window.DCTReportFonts && DCTReportFonts.regular) {
      try {
        doc.addFileToVFS("Plex-R.ttf", DCTReportFonts.regular); doc.addFont("Plex-R.ttf", "Plex", "normal");
        doc.addFileToVFS("Plex-B.ttf", DCTReportFonts.bold); doc.addFont("Plex-B.ttf", "Plex", "bold");
        F = "Plex"; rich = true;
      } catch (e) { F = "helvetica"; rich = false; }
    }
    // With the Plex subset ₹ − ≤ ≥ ↑ ↓ print as they are; with Helvetica they fall back to clean().
    var tx = function (s) { s = String(s == null ? "" : s).replace(/▲/g, "↑").replace(/▼/g, "↓").replace(/\s+/g, " ").trim(); return rich ? s.replace(/[^\x00-\xFF₹−–—≤≥←↑→↓‘’“”•…×÷≈]/g, "") : clean(s.replace(/↑/g, "up").replace(/↓/g, "down")); };
    var W = doc.internal.pageSize.getWidth(), H = doc.internal.pageSize.getHeight(), M = 32, CW = W - 2 * M, y;
    var now = new Date(), P = DCTData.plant, S = P.scopes;
    var per = String(P.periodL || "").replace(/\s*\((?:SYN,\s*)?([^)]*)\)/, " · $1");
    var scopeL = ["Group", "A1", "A2"].map(function (s) { return S[s] || s; }).join(" · ");
    var gen = "Generated " + now.getDate() + " " + now.toLocaleString("en-GB", {month: "short"}) + " " + now.getFullYear() + ", " + ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2);
    var font = function (b, sz, c) { doc.setFont(F, b ? "bold" : "normal"); doc.setFontSize(sz); doc.setTextColor.apply(doc, c || INK); };
    var R = function (id, s) { return rec(id, s || "Group"); };
    var bad = function (r) { return !!r && BAD.test(r.bs || ""); };
    var col = function (r) { return (r && ST[r.bs]) || MUTED; };
    var K = function (id) { return P.kpi[id] || {}; };

    // Value text from a record: "₹13,811.3 m", "−₹48.5 m", "82.1%", "₹2,853", "16.7 months"; split into [big, unit].
    function parts(r) {
      if (!r) return ["—", ""];
      var v = String(r.v == null ? r.val : r.v), u = r.u || "", neg = /^[-−]/.test(v); v = v.replace(/^[-−]/, "");
      var sg = neg ? "−" : "";
      if (/^₹\/t$/.test(u)) return [sg + "₹" + v, ""];
      if (/^₹ ?/.test(u)) return [sg + "₹" + v, u.replace(/^₹ ?/, "")];
      if (/^%/.test(u)) return [sg + v + "%", u.replace(/^%\s*/, "")];
      return [sg + v, u];
    }
    var vtxt = function (r) { var p = parts(r); return p[0] + (p[1] ? " " + p[1] : ""); };
    // Every status carries its number: variance to target where a target exists (zero ₹ targets count as none), else the change since P05.
    function why(r) {
      if (!r) return "";
      var tgt = r.plan && r.plan !== "—" && !/^[≥≤]\s*0(\.0+)?\s*₹/.test(r.plan);
      return tgt && r["var"] && r["var"] !== "—" ? r["var"] + " vs target" : (r.tr && r.tr !== "—" && r.tr !== "flat" ? r.tr : "");
    }
    var statL = function (r) { return r ? (r.bs || "") + (why(r) ? " · " + why(r) : "") : ""; };
    function tally(sec) { var n = sec.k.filter(function (id) { return bad(R(id)); }).length; return {n: n, m: sec.k.length, c: sec.k.some(function (id) { return /Interv|Breach/.test((R(id) || {}).bs || ""); }) ? ST["Intervention required"] : n ? ST["Declining"] : ST["On track"]}; }

    function band(first) {
      doc.setFillColor.apply(doc, NAVY);
      if (first) {
        doc.rect(0, 0, W, 74, "F");
        font(false, 8, [196, 205, 222]); doc.setCharSpace(1.2); doc.text("CONTROL TOWER", M, 22); doc.setCharSpace(0);
        font(true, 20, [255, 255, 255]); doc.text(TITLE, M, 46);
        font(false, 9.5, [226, 232, 242]); doc.text(tx(scopeL + " · " + per), M, 62);
        font(true, 7.5, [255, 255, 255]); doc.setCharSpace(0.8); doc.text("SYNTHETIC DATA", W - M, 22, {align: "right"}); doc.setCharSpace(0);
        font(false, 8, [196, 205, 222]); doc.text(gen, W - M, 62, {align: "right"});
        y = 92;
      } else {
        doc.rect(0, 0, W, 30, "F");
        font(true, 9.5, [255, 255, 255]); doc.text(TITLE, M, 19);
        font(false, 8, [210, 218, 232]); doc.text(tx(scopeL + " · " + per), W - M, 19, {align: "right"});
        y = 50;
      }
    }
    function newPage() { doc.addPage(); band(false); }
    function need(h) { if (y + h > H - 44) newPage(); }
    function caps(t, x, yy) { font(true, 7.5, [72, 80, 96]); doc.setCharSpace(0.9); doc.text(tx(t.toUpperCase()), x, yy); doc.setCharSpace(0); }
    function tallyT(t) { return t.n ? t.n + " of " + t.m + " need attention" : "All " + t.m + " on target or improving"; }

    function scorecard() {
      caps("Scorecard · measures off target or declining", M, y); y += 9;
      var n = SECS.length, g = 8, w = (CW - g * (n - 1)) / n;
      SECS.forEach(function (sec, i) {
        var x = M + i * (w + g), t = tally(sec);
        doc.setDrawColor.apply(doc, PANEL); doc.setLineWidth(0.6); doc.setFillColor(255, 255, 255); doc.roundedRect(x, y, w, 40, 2, 2, "FD");
        doc.setFillColor.apply(doc, t.c); doc.rect(x, y, 2.5, 40, "F");
        font(false, 7.5, SUBT); doc.text(tx(sec.s), x + 10, y + 13);
        font(true, 13, t.c); var a = t.n + " of " + t.m; doc.text(a, x + 10, y + 31);
        font(false, 7, SUBT); doc.text(w < 120 ? "off target" : "need attention", x + 14 + doc.getStringUnitWidth(a) * 13 / doc.internal.scaleFactor, y + 30.5);
      });
      y += 52;
    }
    function section(i, sec) {
      need(90);
      var t = tally(sec);
      doc.setFillColor.apply(doc, NAVY); doc.circle(M + 9, y + 2, 9, "F");
      font(true, 9, [255, 255, 255]); doc.text(String(i + 1), M + 9, y + 5.2, {align: "center"});
      font(true, 14, INK); doc.text(tx(sec.t), M + 26, y + 7);
      font(true, 8, t.c); doc.text(tallyT(t), W - M, y + 6, {align: "right"});
      doc.setDrawColor.apply(doc, PANEL); doc.setLineWidth(0.6); doc.line(M, y + 15, W - M, y + 15);
      y += 30;
    }
    function panel(x, yy, w, h, title, sub) {
      doc.setDrawColor.apply(doc, PANEL); doc.setLineWidth(0.6); doc.setFillColor(255, 255, 255); doc.roundedRect(x, yy, w, h, 3, 3, "FD");
      font(true, 9, INK); doc.text(tx(title), x + 10, yy + 16);
      if (sub) { font(false, 7, SUBT); doc.text(tx(sub), x + 10, yy + 27); }
    }
    function legend(x, yy, items) {
      items.forEach(function (it) {
        if (it.sq) { doc.setFillColor.apply(doc, it.c); doc.roundedRect(x + 2, yy - 6.5, 8, 7, 1, 1, "F"); } else { doc.setDrawColor.apply(doc, it.c); doc.setLineWidth(it.dash ? 0.8 : 2);
        if (it.dash) doc.setLineDashPattern([2.5, 2], 0); doc.line(x, yy - 2.5, x + 12, yy - 2.5); doc.setLineDashPattern([], 0); }
        font(false, 7, SUBT); doc.text(tx(it.l), x + 16, yy); x += 22 + doc.getStringUnitWidth(tx(it.l)) * 7 / doc.internal.scaleFactor + 10;
      });
    }
    function ticks(lo, hi) {
      var span = hi - lo || Math.abs(hi) || 1, raw = span / 4, mag = Math.pow(10, Math.floor(Math.log10(raw))), st = [1, 2, 2.5, 5, 10].map(function (m) { return m * mag; }).filter(function (s) { return s >= raw; })[0];
      var a = Math.floor(lo / st) * st, b = Math.ceil(hi / st) * st, out = []; for (var v = a; v <= b + st / 2; v += st) out.push(+v.toFixed(6)); return out;
    }
    var MON = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"], xl = function (l) { var m = /^P0([1-6])$/.exec(l); return isCore && m ? MON[m[1] - 1] : l; };   // Core Group: months on the x axis
    var tickL = function (v) { return (v < 0 ? "−" : "") + Math.abs(v).toLocaleString("en-US", {maximumFractionDigits: 2}); };
    // Line chart: one y-axis, recessive grid, 1.5 pt lines, end dot + direct label (nudged ≥ 9 pt apart), dashed target.
    function lineChart(x, yy, w, h, series, target, fmt) {
      var all = []; series.forEach(function (s) { all = all.concat(s.v); }); if (target != null) all.push(target);
      var tk = ticks(Math.min.apply(null, all), Math.max.apply(null, all)), lo = tk[0], hi = tk[tk.length - 1];
      var px = x + 24, pw = w - 24 - 52, n = series[0].v.length;
      var X = function (i) { return px + pw * i / (n - 1); }, Y = function (v) { return yy + h - h * (v - lo) / (hi - lo); };
      tk.forEach(function (t) { doc.setDrawColor.apply(doc, GRID); doc.setLineWidth(0.4); doc.line(px, Y(t), px + pw, Y(t)); font(false, 6.5, SUBT); doc.text(tickL(t), px - 5, Y(t) + 2.2, {align: "right"}); });
      P.x.forEach(function (l, i) { font(false, 6.5, SUBT); doc.text(xl(l), X(i), yy + h + 10, {align: "center"}); });
      if (target != null) { doc.setDrawColor.apply(doc, TGT); doc.setLineWidth(0.7); doc.setLineDashPattern([3, 2], 0); doc.line(px, Y(target), px + pw, Y(target)); doc.setLineDashPattern([], 0); }
      var ends = series.map(function (s) {
        doc.setDrawColor.apply(doc, s.c); doc.setLineWidth(1.5);
        for (var i = 1; i < n; i++) doc.line(X(i - 1), Y(s.v[i - 1]), X(i), Y(s.v[i]));
        doc.setFillColor.apply(doc, s.c); doc.circle(X(n - 1), Y(s.v[n - 1]), 2.3, "F");
        return {y: Y(s.v[n - 1]), t: fmt(s.v[n - 1])};
      });
      ends.sort(function (a, b) { return a.y - b.y; });
      for (var j = 1; j < ends.length; j++) if (ends[j].y - ends[j - 1].y < 9) ends[j].y = ends[j - 1].y + 9;
      ends.forEach(function (e) { font(true, 7.5, INK); doc.text(tx(e.t), px + pw + 7, e.y + 2.5); });
    }
    // Stacked monthly bars (YTD series differenced), segments in series order with a surface gap, total on the last bar.
    function stackChart(x, yy, w, h, series, fmt) {
      var n = series[0].v.length, tot = []; for (var i = 0; i < n; i++) tot.push(series.reduce(function (a, s) { return a + s.v[i]; }, 0));
      var tk = ticks(0, Math.max.apply(null, tot)), hi = tk[tk.length - 1], px = x + 24, pw = w - 34, bw = pw / n * 0.62;
      var Y = function (v) { return yy + h - h * v / hi; };
      tk.forEach(function (t) { doc.setDrawColor.apply(doc, GRID); doc.setLineWidth(0.4); doc.line(px, Y(t), px + pw, Y(t)); font(false, 6.5, SUBT); doc.text(tickL(t), px - 5, Y(t) + 2.2, {align: "right"}); });
      for (i = 0; i < n; i++) {
        var cx = px + pw * (i + 0.5) / n, base = 0;
        series.forEach(function (s, si) {
          var v = Math.max(0, s.v[i]), y0 = Y(base), y1 = Y(base + v); doc.setFillColor.apply(doc, s.c);
          if (si === series.length - 1) doc.roundedRect(cx - bw / 2, y1, bw, Math.max(0.5, y0 - y1 - 0.8), 1.5, 1.5, "F"); else doc.rect(cx - bw / 2, y1 + 0.8, bw, Math.max(0.5, y0 - y1 - 0.8), "F");
          base += v;
        });
        font(false, 6.5, SUBT); doc.text(xl(P.x[i]), cx, yy + h + 10, {align: "center"});
      }
      font(true, 7.5, INK); doc.text(tx(fmt(tot[n - 1])), px + pw * (n - 0.5) / n, Y(tot[n - 1]) - 4, {align: "center"});
    }
    // Horizontal bars, one per scope from zero; value at the bar end; optional dashed target.
    function hbars(x, yy, w, ids, id, target, targetL, rh0) {   // rh0: row height (default 20 pt)
      var rows = ids.map(function (s) { var r = R(id, s); return {s: s, r: r, v: parseFloat(String(r.v).replace(/,/g, "").replace("−", "-"))}; });
      var vals = rows.map(function (r) { return r.v; }).concat(target != null ? [target] : []);
      var mx = Math.max(0, Math.max.apply(null, vals)), mn = Math.min(0, Math.min.apply(null, vals)), lx = x + 62 + (mn < 0 ? 40 : 0), lw = w - 62 - 46 - (mn < 0 ? 40 : 0);
      var X = function (v) { return lx + lw * (v - mn) / ((mx - mn) || 1); }, z = X(0), rh = rh0 || 20, bh = rh0 ? Math.min(10, rh0 - 5) : 10;
      if (target != null) { font(false, 6.5, SUBT); doc.text(tx(targetL), X(target), yy - 2, {align: "center"}); }
      rows.forEach(function (r, i) {
        var cy = yy + 6 + i * rh, a = X(Math.min(0, r.v)), b = X(Math.max(0, r.v));
        font(false, 7.5, INK); doc.text(tx(S[r.s] || r.s), x, cy + 7);
        doc.setFillColor.apply(doc, SC[r.s]); doc.roundedRect(a, cy, Math.max(1, b - a), bh, 1.5, 1.5, "F");
        font(true, 7.5, INK); var t = tx(isCore && /%$/.test(parts(r.r)[0]) ? parts(r.r)[0] : vtxt(r.r));   // Core Group: "59.0%", not "59.0% weighted"
        if (r.v < 0) doc.text(t, a - 4, cy + 7.5, {align: "right"}); else doc.text(t, b + 4, cy + 7.5);
      });
      doc.setDrawColor.apply(doc, [190, 194, 202]); doc.setLineWidth(0.6); doc.line(z, yy + 2, z, yy + 8 + ids.length * rh - 6);
      if (target != null) { doc.setDrawColor.apply(doc, TGT); doc.setLineWidth(0.7); doc.setLineDashPattern([2.5, 2], 0); doc.line(X(target), yy + 1, X(target), yy + 4 + ids.length * rh); doc.setLineDashPattern([], 0); }
      return ids.length * rh + 10;
    }
    // Key figure: label, big value + unit, child values with status dots, status · number line.
    function keyFig(x, yy, w, id, label) {
      var r = R(id), p = parts(r);
      font(false, 7.5, SUBT); doc.text(tx(label), x, yy);
      font(true, 15, INK); doc.text(tx(p[0]), x, yy + 18);
      if (p[1]) { var bw = doc.getStringUnitWidth(tx(p[0])) * 15 / doc.internal.scaleFactor; font(false, 8.5, SUBT); doc.text(tx(p[1]), x + bw + 3, yy + 18); }
      var cx = x;
      // Core Group: a line wider than its column drops the units (child values) or "vs target" (status), as in the reference brief
      var tw = function (t) { return doc.getStringUnitWidth(t) * 7 / doc.internal.scaleFactor; }, ct = function (s, u) { var c = R(id, s); return tx(s + " " + (u ? vtxt(c) : parts(c)[0])); };
      font(false, 7, INK); var units = !isCore || ["A1", "A2"].reduce(function (a, s) { return a + 12 + tw(ct(s, true)); }, 0) <= w;
      ["A1", "A2"].forEach(function (s) { var c = R(id, s); doc.setFillColor.apply(doc, col(c)); doc.circle(cx + 2, yy + 28.5, 1.8, "F"); font(false, 7, INK); var t = ct(s, units); doc.text(t, cx + 6, yy + 31); cx += 12 + tw(t); });
      var st = tx(statL(r)); if (isCore && tw(st) > w) st = st.replace(/ vs target$/, "");
      font(false, 7, col(r)); doc.text(st, x, yy + 43);
    }
    function keyRow(items) {
      need(56); var n = items.length, w = CW / n;
      items.forEach(function (it, i) { var x = M + i * w; if (i) { doc.setDrawColor.apply(doc, PANEL); doc.setLineWidth(0.6); doc.line(x - 8, y - 6, x - 8, y + 44); } keyFig(x, y, w - 16, it[0], it[1]); });
      y += 58;
    }
    var ser = function (id, s) { return (K(id).val || {})[s] || []; };
    var diff = function (a) { return a.map(function (v, i) { return i ? v - a[i - 1] : v; }); };
    var dp = function (id) { return K(id).dp == null ? 1 : K(id).dp; };
    var num = function (v, d) { return (v < 0 ? "−" : "") + Math.abs(v).toLocaleString("en-US", {minimumFractionDigits: d, maximumFractionDigits: d}); };
    var gw = (CW - 14) / 2, gx2 = M + gw + 14, Gs = function (id) { return "Group " + vtxt(R(id)); };

    // ---------- Core Group body: five sections, entity comparison, an insight box per section ----------
    // Every sentence is built from the records below (DCTData, same values as data/KPI-Lineage-Model.xlsx); no hand-set numbers.
    function coreBody() {
    var INS = [238, 242, 247];
    var E = function (s) { return S[s] || s; };
    var nv = function (r) { return r ? parseFloat(String(r.v == null ? r.val : r.v).replace(/,/g, "").replace("−", "-")) : NaN; };
    var last = function (id, s) { var a = ser(id, s); return a.length ? a[a.length - 1] : nv(R(id, s)); };
    var meets = function (id, s) { var k = K(id), v = last(id, s); if (k.target == null || isNaN(v)) return null; return k.better === "down" ? v <= k.target : v >= k.target; };
    var tgtT = function (id) { return String((R(id) || {}).plan || "").replace(/^([≥≤])\s*/, "$1 "); };
    // value as a sentence reads it: "82.1%", "52.0 days", "₹3,017 per t"
    var iv = function (id, s) { var r = R(id, s); if (!r) return "—"; return /^₹\/t$/.test(r.u || "") ? "₹" + String(r.v).replace(/^[-−]/, "") + " per t" : vtxt(r); };
    var both = function (id) { return ["A1", "A2"].map(function (s) { return E(s) + " (" + iv(id, s) + ")"; }).join(", "); };
    // "X: Entity A1 (91.3% of plan) misses the ≥ 100.0% target; Entity A2 (100.3% of plan) meets it."
    function vsTarget(label, id) {
      var miss = ["A1", "A2"].filter(function (s) { return meets(id, s) === false; }), hit = ["A1", "A2"].filter(function (s) { return meets(id, s) === true; });
      if (miss.length === 2) return label + ": neither meets the " + tgtT(id) + " target — " + both(id) + ".";
      if (hit.length === 2) return label + ": both meet the " + tgtT(id) + " target — " + both(id) + ".";
      if (!miss.length || !hit.length) return label + ": " + both(id) + ".";
      return label + ": " + E(miss[0]) + " (" + iv(id, miss[0]) + ") misses the " + tgtT(id) + " target; " + E(hit[0]) + " (" + iv(id, hit[0]) + ") meets it.";
    }
    // "delayed projects: Entity A2 1; open audit findings: Entity A1 2, Entity A2 5" — entities with a non-zero count
    function counts(items) {
      return items.map(function (it, i) {
        var nz = ["A1", "A2"].filter(function (s) { return nv(R(it[1], s)) !== 0; });
        var l = i ? it[0].charAt(0).toLowerCase() + it[0].slice(1) : it[0];
        return l + ": " + (nz.length ? nz.map(function (s) { return E(s) + " " + vtxt(R(it[1], s)); }).join(", ") : "none");
      }).join("; ");
    }
    // "Entity A1 accounts for 51% of Group EBITDA year to date (₹890.6 m of ₹1,760.1 m)."
    function share(id, what) {
      var g = nv(R(id)), e = ["A1", "A2"].slice().sort(function (a, b) { return Math.abs(nv(R(id, b))) - Math.abs(nv(R(id, a))); })[0];
      return E(e) + " accounts for " + Math.round(100 * nv(R(id, e)) / g) + "% of " + what + " (" + vtxt(R(id, e)) + " of " + vtxt(R(id)) + ").";
    }
    function monthsOff(id) {
      var k = K(id), off = function (s) { return ser(id, s).filter(function (v) { return k.better === "down" ? v > k.target : v < k.target; }).length; }, n = P.x.length;
      return K(id).name.split(",")[0] + " was off its " + tgtT(id) + " target in " + off("A1") + " of " + n + " months at " + E("A1") + " and " + off("A2") + " of " + n + " months at " + E("A2") + ".";
    }
    function insight(lines) {
      var b = rich ? "• " : "- ";
      font(false, 8, INK);
      var wr = lines.filter(Boolean).map(function (t) { return doc.splitTextToSize(tx(b + t), CW - 30); });
      var nl = wr.reduce(function (a, w) { return a + w.length; }, 0), h = 24 + nl * 9.8;
      need(h + 4);
      doc.setFillColor.apply(doc, INS); doc.rect(M, y, CW, h, "F"); doc.setFillColor.apply(doc, NAVY); doc.rect(M, y, 3, h, "F");
      caps("Insight", M + 14, y + 13);
      var yy = y + 25; wr.forEach(function (w) { font(false, 8, INK); doc.text(w, M + 14, yy); yy += w.length * 9.8; });
      y += h + 13;
    }
    var hp = function (title, sub, x) { return [title, sub, x]; };
    function pair(h, left, right) {   // two panels side by side, h high; left/right draw into (x, top)
      need(h + 4);
      panel(M, y, gw, h, left[0], left[1]); left[2](M, y);
      panel(gx2, y, gw, h, right[0], right[1]); right[2](gx2, y);
      y += h + 14;
    }
    var bars3 = function (id, target, targetL, h) { return function (x, top) {
      legend(x + 10, top + 38, ["A1", "A2", "Group"].map(function (s) { return {l: S[s] || s, c: SC[s], sq: true}; }).concat(target != null ? [{l: targetL, c: TGT, dash: true}] : []));
      hbars(x + 10, top + 46, gw - 20, ["A1", "A2", "Group"], id, target, target != null ? "" : targetL, h > 100 ? 17 : 14.5); }; };
    var leg2 = function (x, top, extra) { legend(x + 10, top + 38, [{l: S.A1, c: SC.A1}, {l: S.A2, c: SC.A2}].concat(extra || [])); };
    var pct = function (id) { return function (v) { return num(v, dp(id)) + "%"; }; };

    // 1 · Financial performance and data trust
    section(0, SECS[0]);
    pair(104, hp("Numbers certified", "% of leadership KPIs · Group " + why(R("TRU-001")), bars3("TRU-001", K("TRU-001").target, "Target " + K("TRU-001").target + "%", 104)),
      hp("Open trust issues", "Count · target 0", function (x, top) {
        [["TRU-007", "Reconciliation breaks"], ["TRU-006", "Overdue certifications"]].forEach(function (it, i) { var xx = x + 10 + i * (gw - 20) / 2; if (i) { doc.setDrawColor.apply(doc, PANEL); doc.setLineWidth(0.6); doc.line(xx - 8, top + 34, xx - 8, top + 84); } keyFig(xx, top + 40, (gw - 20) / 2 - 12, it[0], it[1]); });
      }));
    keyRow([["FIN-003", "Revenue YTD"], ["FIN-001", "EBITDA YTD"], ["FIN-005", "ROCE (annualised)"], ["FIN-008", "FCF conversion"]]);
    y -= 6;
    pair(112, hp("EBITDA by month", "₹ m · certified · entities stack to Group", function (x, top) {
        legend(x + 10, top + 38, [{l: S.A1, c: SC.A1, sq: true}, {l: S.A2, c: SC.A2, sq: true}]); stackChart(x + 10, top + 50, gw - 20, 46, [{v: diff(ser("FIN-001", "A1")), c: SC.A1}, {v: diff(ser("FIN-001", "A2")), c: SC.A2}], function (v) { return "₹" + num(v, 1) + " m"; });
      }),
      hp("ROCE, annualised", "% · " + Gs("FIN-005") + " · " + why(R("FIN-005")), function (x, top) {
        leg2(x, top, [{l: "Target " + K("FIN-005").target + "%", c: TGT, dash: true}]);
        lineChart(x + 10, top + 52, gw - 20, 44, [{v: ser("FIN-005", "A1"), c: SC.A1}, {v: ser("FIN-005", "A2"), c: SC.A2}], K("FIN-005").target, pct("FIN-005"));
      }));
    insight([
      vsTarget("Numbers certified", "TRU-001") + " Open trust issues — " + counts([["Reconciliation breaks", "TRU-007"], ["Overdue certifications", "TRU-006"]]).replace(/^R/, "r") + ".",
      share("FIN-001", "Group EBITDA year to date"),
      monthsOff("FIN-005"),
      vsTarget("FCF conversion", "FIN-008")
    ]);

    // 2 · Early warning
    section(1, SECS[1]);
    pair(104, hp("Projected EBITDA gap, rest of year", "₹ m forecast · Group " + (R("PRD-003").tr || ""), bars3("PRD-003", null, "", 104)),
      hp("Chance of missing next month's plan", "% · model prediction · Group " + (R("PRD-002").tr || ""), bars3("PRD-002", null, "", 104)));
    var hiE = ["A1", "A2"].sort(function (a, b) { return nv(R("PRD-002", b)) - nv(R("PRD-002", a)); });
    insight([
      share("PRD-003", "the projected EBITDA gap for the rest of the year"),
      "Plan-miss risk is higher at " + E(hiE[0]) + " (" + vtxt(R("PRD-002", hiE[0])) + ") than at " + E(hiE[1]) + " (" + vtxt(R("PRD-002", hiE[1])) + "); the Group figure is " + vtxt(R("PRD-002")) + (R("PRD-002").tr ? " (" + R("PRD-002").tr + ")" : "") + "."
    ]);

    // 3 · Cash and working capital (new page)
    newPage(); section(2, SECS[2]);
    pair(112, hp("Free cash flow, year to date", "₹ m · " + Gs("FIN-004") + " · " + why(R("FIN-004")), function (x, top) {
        leg2(x, top); lineChart(x + 10, top + 52, gw - 20, 44, [{v: ser("FIN-004", "A1"), c: SC.A1}, {v: ser("FIN-004", "A2"), c: SC.A2}], null, function (v) { return "₹" + num(v, 1) + " m"; });
      }),
      hp("Days sales outstanding", "days · Group " + why(R("WCP-001")), bars3("WCP-001", K("WCP-001").target, "Target " + K("WCP-001").target + " days", 112)));
    keyRow([["FIN-006", "Net debt"], ["LIQ-002", "Covenant headroom"], ["LIQ-001", "Liquidity runway"], ["CSH-001", "Cash position"]]);
    var dso = ["A1", "A2"].sort(function (a, b) { return nv(R("WCP-001", b)) - nv(R("WCP-001", a)); });
    insight([
      "Days sales outstanding: " + E(dso[0]) + " " + vtxt(R("WCP-001", dso[0])) + " against " + E(dso[1]) + " " + vtxt(R("WCP-001", dso[1])) + ", a gap of " + num(nv(R("WCP-001", dso[0])) - nv(R("WCP-001", dso[1])), dp("WCP-001")) + " " + (R("WCP-001").u || "") + ".",
      vsTarget("Covenant headroom", "LIQ-002"),
      vsTarget("Liquidity runway", "LIQ-001")
    ]);

    // 4 · Operational performance
    section(3, SECS[3]);
    pair(112, hp("Production vs plan", "% of plan · " + Gs("OPS-001") + " · " + why(R("OPS-001")), function (x, top) {
        leg2(x, top, [{l: "Plan " + K("OPS-001").target + "%", c: TGT, dash: true}]);
        lineChart(x + 10, top + 52, gw - 20, 44, [{v: ser("OPS-001", "A1"), c: SC.A1}, {v: ser("OPS-001", "A2"), c: SC.A2}], K("OPS-001").target, pct("OPS-001"));
      }),
      hp("Cost per tonne", "₹ per tonne · Group " + why(R("CST-001")), bars3("CST-001", K("CST-001").target, "Target ₹" + num(K("CST-001").target, 0), 112)));
    keyRow([["OPS-002", "Sales vs plan"], ["PLT-002", "OEE"], ["OPS-003", "Capacity utilisation"]]);
    insight([vsTarget("Production vs plan", "OPS-001"), vsTarget("Cost per tonne", "CST-001"), vsTarget("Capacity utilisation", "OPS-003")]);

    // 5 · Capital projects, risk and safety (new page)
    newPage(); section(4, SECS[4]);
    pair(104, hp("Capex physical progress", "% weighted · " + Gs("CPX-004") + " · " + why(R("CPX-004")), bars3("CPX-004", null, "", 104)),
      hp("Benefits realisation", "% of plan · Group " + why(R("PRG-002")), bars3("PRG-002", K("PRG-002").target, "Plan " + K("PRG-002").target + "%", 104)));
    keyRow([["PRG-003", "Delayed projects"], ["GOV-004", "Open audit findings"], ["EHS-001", "Safety (TRIR)"], ["EFF-002", "Open critical alerts"]]);
    var cl = counts([["Delayed projects", "PRG-003"], ["Open audit findings", "GOV-004"], ["Open critical alerts", "EFF-002"]]);
    insight([vsTarget("Benefits realisation", "PRG-002"), cl + ".", vsTarget("Safety (TRIR)", "EHS-001")]);
    y += 8;
  }

    band(true);
    scorecard();
    if (isCore) { font(false, 7, SUBT); doc.text(tx("How to read: P01–P06 are the months Apr–Sep 2026 (P05 = Aug, P06 = Sep, the latest certified month). Entity A1 = Plants 01–03, Entity A2 = Plants 04–06."), M, y + 2); y += 18; }

    if (isCore) coreBody(); else {   // Owner body (Core Group: coreBody)
    // 1 · Enterprise health and data assurance
    section(0, OWNER[0]);
    caps("Data assurance · can we rely on the numbers?", M, y); y += 9;
    var r1 = R("TRU-001");
    panel(M, y, gw, 112, "Numbers certified", "% of leadership KPIs · " + statL(r1));
    hbars(M + 10, y + 46, gw - 20, ["A1", "A2", "Group"], "TRU-001", K("TRU-001").target, "Target " + K("TRU-001").target + "%");
    panel(gx2, y, gw, 112, "Open trust issues", "Count · target 0");
    [["TRU-007", "Reconciliation breaks"], ["TRU-006", "Overdue certifications"]].forEach(function (it, i) { var x = gx2 + 10 + i * (gw - 20) / 2; if (i) { doc.setDrawColor.apply(doc, PANEL); doc.line(x - 8, y + 40, x - 8, y + 100); } keyFig(x, y + 48, (gw - 20) / 2 - 12, it[0], it[1]); });
    y += 124;
    caps("Enterprise health · profit and returns", M, y); y += 14;
    keyRow([["FIN-003", "Revenue YTD"], ["FIN-001", "EBITDA YTD"], ["FIN-005", "ROCE (annualised)"]]);
    need(150);
    panel(M, y, gw, 140, "EBITDA by month", "₹ m · certified · entities stack to Group"); legend(M + 10, y + 38, [{l: S.A1, c: SC.A1}, {l: S.A2, c: SC.A2}]);
    stackChart(M + 10, y + 50, gw - 20, 68, [{v: diff(ser("FIN-001", "A1")), c: SC.A1}, {v: diff(ser("FIN-001", "A2")), c: SC.A2}], function (v) { return "₹" + num(v, 1) + " m"; });
    var r5 = R("FIN-005");
    panel(gx2, y, gw, 140, "ROCE, annualised", "% · " + Gs("FIN-005") + " · " + why(r5)); legend(gx2 + 10, y + 38, [{l: S.A1, c: SC.A1}, {l: S.A2, c: SC.A2}, {l: "Target " + K("FIN-005").target + "%", c: TGT, dash: true}]);
    lineChart(gx2 + 10, y + 52, gw - 20, 66, [{v: ser("FIN-005", "A1"), c: SC.A1}, {v: ser("FIN-005", "A2"), c: SC.A2}], K("FIN-005").target, function (v) { return num(v, dp("FIN-005")) + "%"; });
    y += 156;

    // 2 · Early warning
    section(1, OWNER[1]); need(100);
    panel(M, y, gw, 100, "Projected EBITDA gap, rest of year", "₹ m forecast · Group " + (R("PRD-003").tr || ""));
    hbars(M + 10, y + 34, gw - 20, ["A1", "A2", "Group"], "PRD-003", null, "");
    panel(gx2, y, gw, 100, "Chance of missing next month's plan", "% · model prediction · Group " + (R("PRD-002").tr || ""));
    hbars(gx2 + 10, y + 34, gw - 20, ["A1", "A2", "Group"], "PRD-002", null, "");
    y += 112;

    // 3 · Cash and liquidity (starts a new page)
    newPage(); section(2, OWNER[2]);
    panel(M, y, gw, 128, "Free cash flow, year to date", "₹ m · " + Gs("FIN-004") + " · " + why(R("FIN-004"))); legend(M + 10, y + 38, [{l: S.A1, c: SC.A1}, {l: S.A2, c: SC.A2}]);
    lineChart(M + 10, y + 50, gw - 20, 56, [{v: ser("FIN-004", "A1"), c: SC.A1}, {v: ser("FIN-004", "A2"), c: SC.A2}], null, function (v) { return "₹" + num(v, 1) + " m"; });
    panel(gx2, y, gw, 128, "Covenant headroom", "% · " + Gs("LIQ-002") + " · " + why(R("LIQ-002"))); legend(gx2 + 10, y + 38, [{l: S.A1, c: SC.A1}, {l: S.A2, c: SC.A2}, {l: "Target " + K("LIQ-002").target + "%", c: TGT, dash: true}]);
    lineChart(gx2 + 10, y + 50, gw - 20, 56, [{v: ser("LIQ-002", "A1"), c: SC.A1}, {v: ser("LIQ-002", "A2"), c: SC.A2}], K("LIQ-002").target, function (v) { return num(v, 1) + "%"; });
    y += 146;
    keyRow([["FIN-008", "FCF conversion"], ["FIN-006", "Net debt"], ["LIQ-001", "Liquidity runway"]]);
    font(false, 7.5, SUBT); doc.text(tx("Forecast: liquidity gap in the next 90 days — " + vtxt(R("PRD-004")) + " · covenant breach — " + vtxt(R("PRD-005")) + "."), M, y); y += 20;

    // 4 · Operational performance
    section(3, OWNER[3]); need(140);
    panel(M, y, gw, 124, "Production vs plan", "% of plan · " + Gs("OPS-001") + " · " + why(R("OPS-001"))); legend(M + 10, y + 38, [{l: S.A1, c: SC.A1}, {l: S.A2, c: SC.A2}, {l: "Plan " + K("OPS-001").target + "%", c: TGT, dash: true}]);
    lineChart(M + 10, y + 50, gw - 20, 52, [{v: ser("OPS-001", "A1"), c: SC.A1}, {v: ser("OPS-001", "A2"), c: SC.A2}], K("OPS-001").target, function (v) { return num(v, 1) + "%"; });
    panel(gx2, y, gw, 124, "Cost per tonne", "₹ per tonne · Group " + why(R("CST-001")));
    hbars(gx2 + 10, y + 52, gw - 20, ["A1", "A2", "Group"], "CST-001", K("CST-001").target, "Target ₹" + num(K("CST-001").target, 0));
    y += 140;
    var half = CW / 2; need(56);
    keyFig(M, y, half - 16, "OPS-002", "Sales vs plan"); doc.setDrawColor.apply(doc, PANEL); doc.line(M + half - 8, y - 6, M + half - 8, y + 44);
    keyFig(M + half, y, half - 16, "EHS-001", "Safety (TRIR)"); y += 60;
    }

    // Bottom line: counts, the most material items per entity with their numbers, then the home-page banner (if any).
    var ids = []; SECS.forEach(function (s) { ids = ids.concat(s.k); });
    var ok = ids.filter(function (id) { return !bad(R(id)); }).length;
    var off = function (s) { return ids.filter(function (id) { return bad(R(id, s)); }); };
    var lines = [{t: "Group: " + ok + " of " + ids.length + " headline measures are on target or improving. " + S.A1 + " is off target on " + off("A1").length + ", " + S.A2 + " on " + off("A2").length + "."}];
    ["A1", "A2"].forEach(function (s) {
      var o = off(s); if (!o.length) return;
      var items = o.slice(0, 4).map(function (id) { var r = R(id, s); return (SHORT[id] || clean(K(id).name || id)) + " " + vtxt(r) + (why(r) ? " (" + why(r) + ")" : ""); });
      lines.push({t: S[s] + ": " + items.join(" · ") + (o.length > 4 ? " · and " + (o.length - 4) + " more." : ".")});
    });
    if (!isCore && page.banner && page.banner.t) lines.push({t: page.banner.t, red: true});
    font(false, 9, INK);
    var wrapped = lines.map(function (l) { return {l: doc.splitTextToSize(tx(l.t), CW - 30), red: l.red}; });
    var bh = 30 + wrapped.reduce(function (a, w) { return a + w.l.length * 12 + (w.red ? 10 : 0); }, 0);
    need(bh + 6);
    doc.setFillColor.apply(doc, SOFT); doc.rect(M, y, CW, bh, "F"); doc.setFillColor.apply(doc, NAVY); doc.rect(M, y, 3, bh, "F");
    caps("Bottom line", M + 16, y + 16); var yy = y + 30;
    wrapped.forEach(function (w) { if (w.red) yy += 10; font(!!w.red, 9, w.red ? ST["Intervention required"] : INK); doc.text(w.l, M + 16, yy); yy += w.l.length * 12; });
    y += bh + 10;

    var n = doc.getNumberOfPages();
    for (var i = 1; i <= n; i++) {
      doc.setPage(i); font(false, 7, SUBT);
      doc.text(tx("Control Tower · " + TITLE + " · " + per + " · Values from the certified data set · Synthetic data, prototype only"), M, H - 18);
      doc.text("Page " + i + " of " + n, W - M, H - 18, {align: "right"});
    }
    var d = now.getFullYear() + "-" + ("0" + (now.getMonth() + 1)).slice(-2) + "-" + ("0" + now.getDate()).slice(-2);
    doc.save("Control-Tower-" + cfg.file + "-Report-" + d + ".pdf");
    return doc;
  }

  var busy = false;
  function run(btn) {
    if (busy) return;
    var lens = (btn && btn.getAttribute("data-report-lens")) || (function () { try { return localStorage.getItem("dct-persona"); } catch (e) { return null; } })();
    var cfg = LENS[lens];
    if (!cfg) { alert("Sign in with a persona to download a report."); return; }
    busy = true;
    var label = btn && btn.querySelector("[data-report-label]"), was = label && label.textContent;
    if (label) label.textContent = "Preparing…";
    if (btn) btn.setAttribute("aria-busy", "true");
    libs().then(function () { return homePage(cfg.home); }).then(function (page) { if (lens === "Owner" || lens === "Core Group") buildBrief(cfg, page, lens); else build(cfg, page, lens); })
      .catch(function (e) { console.error(e); alert("The report could not be created: " + e.message); })
      .then(function () { busy = false; if (label) label.textContent = was; if (btn) btn.removeAttribute("aria-busy"); });
  }
  return {run: run, brief: buildBrief};
})();
