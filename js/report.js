/* Download report: builds a PDF for the signed-in persona (Owner, Core Group, Entity) from the same data the pages show.
   Loaded on first click of the header "Download report" button (TplA–TplF). Uses jsPDF + autoTable from js/vendor/.
   Content: the lens home page (strip, headline KPIs, forecast, actions, resolved through DCTResolve) and a scorecard from
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
    if (window.jspdf && window.jspdf.jsPDF && window.jspdf.jsPDF.API.autoTable) return Promise.resolve();
    return load("js/vendor/jspdf.umd.min.js").then(function () { return load("js/vendor/jspdf.plugin.autotable.min.js"); });
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
    libs().then(function () { return homePage(cfg.home); }).then(function (page) { build(cfg, page, lens); })
      .catch(function (e) { console.error(e); alert("The report could not be created: " + e.message); })
      .then(function () { busy = false; if (label) label.textContent = was; if (btn) btn.removeAttribute("aria-busy"); });
  }
  return {run: run};
})();
