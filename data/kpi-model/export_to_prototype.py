"""Writes the full KPI model (kpi_model.json, from build_kpi_model.py) into js/data/base-data.js.

For every KPI shown in the prototype (170 IDs) and every scope the model can calculate it for
(Group, A1, A2 and, for plant-level KPIs, Plant01-06) it writes the card fields for P06
(v, u, plan, var, tr, bs, sp, spp, spx) and DCTData.plant: monthly series, formula, the P06
inputs per scope, roll-up rules, children and the "without this child" values used by the
roll-up tabs and the KPI detail pages.

Trust (ts/prov) is kept as the prototype had it for entity-level KPIs (certification is a governance
state, not a number); plant-level KPIs are certified P06 actuals.
Run after build_kpi_model.py, then `node tools/regen.js`. Replaces data/plant-model/export_to_prototype.py.
"""
import json, os, re
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
BD = os.path.join(ROOT, "js", "data", "base-data.js")
PL = ["P01", "P02", "P03", "P04", "P05", "P06"]

# Display per source unit: (divisor, display unit, decimals)
UNIT = {"%": (1, "%", 1), "₹ m": (1, "₹ m", 1), "₹ thousand": (1000, "₹ m", 1), "t": (1000, "kt", 1), "kt": (1, "kt", 1),
        "h": (1, "h", 1), "days": (1, "days", 1), "count": (1, "", 0), "months": (1, "months", 1), "₹/t": (1, "₹/t", 0),
        "GJ/t": (1, "GJ/t", 2), "m3": (1000, "'000 m³", 1), "tCO2e": (1000, "kt CO2e", 1), "per 200,000 h": (1, "per 200k h", 2),
        "₹ m per day": (1, "₹ m/day", 1), "customers": (1, "customers", 0), "text": (1, "", 0), "₹ m or text": (1, "₹ m", 1)}
# id: (display unit override, decimals, better direction, target). Plant KPIs keep the units agreed earlier.
SPEC = {
    "OPS-001": ("% of plan", 1, "up", 100), "OPS-003": ("%", 1, "up", 85), "OPS-005": ("%", 1, "up", 85),
    "PLT-001": ("%", 1, "up", 90), "PLT-002": ("%", 1, "up", 80), "OPS-006": ("%", 1, "up", 80),
    "PLT-004": ("%", 1, "up", 88), "PLT-005": ("%", 1, "up", 92), "REL-001": ("h", 0, "up", 200), "REL-002": ("h", 1, "down", 6),
    "REL-003": ("h", 0, "down", None), "REL-004": ("kt", 1, "down", None), "REL-005": ("%", 1, "up", 95),
    "CST-001": ("₹/t", 0, "down", 2900), "CST-002": ("₹ m", 1, "down", None), "CST-003": ("₹ m", 1, "down", None),
    "CST-004": ("₹/t", 0, "down", 180), "CST-005": ("₹ m", 1, "down", None),
    "SUS-001": ("'000 m³", 1, "down", None), "SUS-002": ("kt CO2e", 1, "down", None), "SUS-003": ("GJ/t", 2, "down", 3.5),
    "SIG-007": ("kt", 1, "down", None), "SIG-008": ("alerts", 0, "down", 0), "SIG-009": ("materials", 0, "down", 0),
    "SIG-012": ("% late", 1, "down", 5), "SIG-021": ("", 0, "down", 0), "EHS-001": ("per 200k h", 2, "down", 0.5),
    "EHS-002": ("", 0, "down", 0), "EHS-003": ("", 0, None, None), "EHS-004": ("", 0, "down", 0), "EHS-005": ("", 0, "down", 0),
    "EHS-006": ("", 0, "down", None), "EHS-007": ("", 0, "down", 0), "EHS-009": ("%", 0, "up", 100), "EHS-010": ("%", 1, "up", 95),
    "REG-006": ("days", 0, "up", 90),
    "OPS-002": ("% of plan", 1, "up", 100), "OPS-004": ("% of plan", 1, "up", 100),
    "FIN-001": ("₹ m", 1, "up", None), "FIN-002": ("₹ m", 1, "up", None), "FIN-003": ("₹ m", 1, "up", None), "FIN-004": ("₹ m", 1, "up", None),
    "FIN-005": ("%", 1, "up", 12), "FIN-006": ("₹ m", 1, "down", None), "FIN-007": ("₹ m", 1, "up", 0), "FIN-008": ("%", 1, "up", 35),
    "CSH-001": ("₹ m", 1, "up", None), "CSH-002": ("₹ m", 1, "up", None), "CSH-003": ("₹ m/day", 1, "up", None), "CSH-004": ("days", 1, "down", 35),
    "CSH-006": ("₹ m", 1, "down", None), "WCP-001": ("days", 1, "down", 45), "WCP-002": ("days", 1, "up", 50), "WCP-003": ("days", 1, "down", 40),
    "WCP-004": ("₹ m", 1, "down", None), "WCP-005": ("₹ m", 1, "down", None), "WCP-006": ("days", 1, "down", 35),
    "LIQ-001": ("months", 1, "up", 12), "LIQ-002": ("%", 1, "up", 20), "LIQ-003": ("₹ m", 1, "down", None), "LIQ-004": ("₹ m", 1, "down", None),
    "TRS-001": ("₹ m", 1, "down", None), "SIG-015": ("₹ m", 1, "down", None), "TRS-002": ("%", 1, "up", 80), "TRS-003": ("%", 1, None, None),
    "TRS-004": ("%", 1, "up", 70), "TRS-005": ("₹ m", 1, "down", None),
    "CPX-004": ("% weighted", 1, "up", None), "STR-001": ("% weighted", 1, "up", None), "PRG-002": ("% of plan", 1, "up", 100),
    "PRG-003": ("", 0, "down", 0), "SUP-006": ("days", 1, "down", 0),
    "SUP-001": ("%", 1, "up", 95), "SUP-002": ("%", 1, "up", 98), "SUP-003": ("%", 2, "down", 1.5), "SUP-004": ("%", 1, "down", 5),
    "SUP-005": ("", 0, "down", None), "SUP-007": ("%", 1, "down", 30), "SUP-008": ("", 0, "down", 0),
    "CON-002": ("%", 1, "up", 95), "CON-003": ("", 0, "down", 0),
    "REG-005": ("", 0, "down", 0), "REG-008": ("", 0, "down", 0), "REG-010": ("", 0, "down", 0), "RSK-003": ("", 0, "down", 0), "CMP-005": ("", 0, "down", 0),
    "CTL-004": ("", 0, "down", 0), "CTL-006": ("", 0, "down", 0), "CTL-008": ("", 0, "down", 0), "CTL-009": ("", 0, "down", 0),
    "GOV-002": ("", 0, "down", 0), "GOV-005": ("", 0, "down", 0), "GOV-008": ("%", 1, "up", 95), "GOV-009": ("days", 1, "down", 30),
    "TRU-001": ("%", 1, "up", 95), "TRU-005": ("%", 1, "up", 95), "TRU-008": ("%", 1, "up", 99), "TRU-009": ("%", 1, "up", 98),
    "TRU-010": ("%", 2, "down", 0.5), "TRU-004": ("", 0, "down", 0), "TRU-006": ("", 0, "down", 0), "TRU-007": ("", 0, "down", 0),
    "EFF-002": ("", 0, "down", 0), "RSK-001": ("", 0, "down", 0), "RSK-002": ("", 0, "down", 0), "EFF-006": ("", 0, "down", 0),
    "EFF-007": ("", 0, "down", 0), "EFF-008": ("days", 1, "down", 3),
    "SIG-004": ("days", 1, "down", 0), "SIG-005": ("customers", 0, "down", 0), "SIG-010": ("suppliers", 0, "down", 0),
    "SIG-014": ("% MoM", 1, None, None), "SIG-016": ("lanes", 0, "down", 0), "SIG-017": ("% MoM", 1, None, None), "SIG-018": ("% MoM", 1, None, None),
    "PRD-001": ("days", 0, "up", None), "PRD-002": ("%", 1, "down", None), "PRD-003": ("₹ m", 1, "up", 0), "PRD-006": ("kt", 1, "down", None),
    "PRD-007": ("%", 1, "down", None), "PRD-008": ("₹ m", 1, "up", 0), "PRD-009": ("%", 1, "up", 12), "PRD-010": ("₹ m", 2, "up", None),
    "PRD-011": ("t", 0, "up", None), "PRD-012": ("%", 1, "down", None), "REG-011": ("h remaining", 0, None, None),
}
SPECIAL = {("REG-011", 999.0): "No clock running", ("PRD-001", 99.0): "Not expected"}
FB = {("OPS-001", "Group"): "Plant 02: −26.2 kt of the −29.4 kt gap", ("OPS-001", "A1"): "Plant 02 at 78.4% of plan",
      ("OPS-001", "Plant02"): "−26.2 kt vs plan · P06"}


# Catalogue themes (P1-R1): KPI ID prefix → theme
THEMES = {"T1": "Enterprise Health", "T2": "Number Assurance", "T3": "No-Surprises Intelligence", "T4": "Cash and Liquidity",
          "T5": "Operations and Assets", "T6": "Capex and Strategic Initiatives", "T7": "Risk, Compliance and EHS", "T8": "Decision, Action and Escalation"}
def theme(kid):
    pre, n = kid.split("-")[0], int(kid.split("-")[1])
    if pre == "OPS": return "T1" if n <= 3 else "T5"
    return {"FIN": "T1", "STR": "T1", "RSK": "T1", "TRU": "T2", "GOV": "T2", "SIG": "T3", "PRD": "T3", "WCP": "T4", "CSH": "T4", "LIQ": "T4", "TRS": "T4",
            "PLT": "T5", "REL": "T5", "CST": "T5", "SUS": "T5", "SUP": "T5", "CPX": "T6", "PRG": "T6", "VAL": "T6",
            "REG": "T7", "EHS": "T7", "CTL": "T7", "CON": "T7", "CMP": "T7", "EFF": "T8"}.get(pre, "T1")


def fmt(x, dp):
    """Round half up on the stored (dp+1) value, like the browser's toLocaleString, so cards and charts agree."""
    from decimal import Decimal, ROUND_HALF_UP
    q = Decimal(str(round(x, dp + 1))).quantize(Decimal(1).scaleb(-dp), rounding=ROUND_HALF_UP)
    return f"{q:,.{dp}f}"


def disp(kid, unit):
    div, du, dp = UNIT.get(unit, (1, unit or "", 1))
    if kid in SPEC:
        du2, dp, better, tgt = SPEC[kid]
        return (1 if du2 == unit else div), du2, dp, better, tgt
    return div, du, dp, None, None


def card(kid, series, unit):
    div, du, dp, better, tgt = disp(kid, unit)
    if any(isinstance(v, str) for v in series):
        return {"v": series[-1], "u": "", "plan": "—", "var": "—", "tr": "—", "fc": "—", "bs": "On track"}
    s = [v / div for v in series]
    cur, prev = s[-1], s[-2]
    if (kid, series[-1]) in SPECIAL:
        return {"v": SPECIAL[(kid, series[-1])], "u": "", "plan": "—", "var": "—", "tr": "—", "fc": "—", "bs": "On track"}
    d = cur - prev
    worse = better and ((d < 0) if better == "up" else (d > 0))
    pct = du.startswith("%")
    tr = "flat" if abs(d) < 10 ** -dp / 2 else ("▲" if d > 0 else "▼") + f" {fmt(abs(d), dp)} vs P05"
    out = {"v": fmt(cur, dp), "u": du, "tr": tr, "fc": "—", "spx": ["P01", "P06"]}
    base = s[0] if s[0] else None
    if base: out["sp"] = [round(100 * v / base, 1) for v in s]
    if tgt is None:
        out.update(plan="—", var="—", bs="Deteriorating" if worse else ("Improving" if better and abs(d) >= 10 ** -dp / 2 else "On track"))
    else:
        ok = cur >= tgt if better == "up" else cur <= tgt
        gap = cur - tgt
        out.update(plan=("≥ " if better == "up" else "≤ ") + fmt(tgt, dp) + ("%" if pct else (" " + du if du else "")),
                   var=("+" if gap >= 0 else "−") + fmt(abs(gap), dp) + (" pts" if pct else (" " + du if du else "")),
                   bs="On track" if ok else ("Deteriorating" if worse else "Intervention required"))
        if base: out["spp"] = [round(100 * tgt / base, 1)] * len(s)
    return out


def main():
    M = json.load(open(os.path.join(HERE, "kpi_model.json"), encoding="utf-8"))
    V = {}
    for v in M["values"]: V.setdefault((v["kpi"], v["scope"]), [None] * 6)[["2026-04", "2026-05", "2026-06", "2026-07", "2026-08", "2026-09"].index(v["period"])] = v["value"]
    src = open(BD, encoding="utf-8").read()
    a, b = src.index("var DCTData = ") + len("var DCTData = "), src.rindex("};") + 1
    data = json.loads(src[a:b])

    plant = {"period": "P06", "periodL": "P06 · Sep 2026 (SYN, certified month)", "x": PL, "entity": "A1", "root": "Group",
             "scopes": M["scopes"], "children": M["children"],
             "alias": {k["id"]: k["alias_of"] for k in M["kpis"] if k["alias_of"]},
             "src": "data/kpi-model (build_kpi_model.py → export_to_prototype.py)", "kpi": {}}
    plant_level = {k["id"] for k in M["kpis"] if k["plant"]}
    ui = {u["id"]: u for u in json.load(open(os.path.join(HERE, "ui_kpis.json")))}
    plant["screens"] = json.load(open(os.path.join(HERE, "ui_screens.json")))
    plant["themes"] = THEMES
    # graphs on the screens and how each gets its numbers (chart_sources.json, first title match wins)
    rules = json.load(open(os.path.join(HERE, "chart_sources.json"), encoding="utf-8"))["rules"]
    plant["charts"] = []
    for c in json.load(open(os.path.join(HERE, "ui_charts.json"), encoding="utf-8")):
        r = next((r for r in rules if r["match"] in c["title"]), None)
        csrc = "live" if c.get("kpi") else (r["source"] if r else "illustrative")
        plant["charts"].append({"screen": c["screen"], "type": c["type"], "title": c["title"], "ask": c.get("ask", ""), "source": csrc,
                                "from": (f"{c['kpi']} for the plant, entity or Group in each row label" if c.get("kpi") else (r["from"] if r else "Hand-set (SYN)")),
                                "note": (r["note"] if r else "Not yet classified in data/kpi-model/chart_sources.json.")})
    for k in M["kpis"]:
        kid = k["id"]; div, du, dp, better, tgt = disp(kid, k["unit"])
        ent = {"name": k["name"], "unit": du, "dp": dp, "div": div, "formula": k["how"], "basis": k["basis"], "better": better, "target": tgt,
               "fields": [], "rules": {}, "val": {}, "inp": {}, "excl": {}, "level": "plant" if k["plant"] else "entity",
               "theme": theme(kid), "source": "alias" if k["alias_of"] else ("added" if k["added"] else "workbook"),
               "aliasOf": k["alias_of"] or "", "screens": ui.get(kid, {}).get("screens", [])}
        for sc in M["scopes"]:
            ser = V.get((kid, sc))
            if not ser or any(x is None for x in ser): continue
            ent["val"][sc] = [x if isinstance(x, str) else round(x / div, dp + 1) for x in ser]
            # month counters (ytd_months, days) are calendar facts, not inputs that roll up
            ent["inp"][sc] = {f: x for f, x in M["inputs"].get(kid, {}).get(sc, {}).items() if f.replace(" (YTD)", "") not in ("ytd_months", "days")}
            rec = data["kpi"].setdefault(kid, {}).setdefault(sc, {})
            keep = {f: rec[f] for f in ("ts", "prov", "own", "cf", "cfWhy") if f in rec}
            rec.clear(); rec.update(card(kid, ser, k["unit"])); rec.update(keep)
            if kid in plant_level and sc not in ("Group", "A1", "A2") or not keep.get("ts"):
                rec.update(ts="Certified", prov="CERT P06")
            if kid in plant_level and sc in ("Group", "A1", "A2") and keep.get("ts") in ("Reconciliation break",):
                rec.update(ts="Certified", prov="CERT P06")      # P06 is certified; the break is on the P07 flash
            if (kid, sc) in FB: rec["fb"] = FB[(kid, sc)]
        if ent["inp"]:
            ent["fields"] = list(next(iter(ent["inp"].values())).keys())
            # building blocks (EBITDA, NWC …) are calculated from summed inputs, so they add up like a SUM
            ent["rules"] = {f: {"CALC": "SUM", "INPUT": "SUM"}.get(M["rules"].get(f.replace(" (YTD)", ""), "SUM"), M["rules"].get(f.replace(" (YTD)", ""), "SUM")) for f in ent["fields"]}
        g = ent["val"]
        if "A1" in g and "A2" in g:
            ent["excl"]["A1"], ent["excl"]["A2"] = g["A2"][-1], g["A1"][-1]
        for c, x in (M["excl"].get(kid) or {}).items():
            if not isinstance(x, str): ent["excl"][c] = round(x / div, dp + 1)
        plant["kpi"][kid] = ent
        # point-in-time variants (e.g. "Group#t7") show the same model value; only their trust state differs
        for key in list(data["kpi"].get(kid, {})):
            if "#" in key and key.split("#")[0] in g:
                var = data["kpi"][kid][key]; basev = data["kpi"][kid][key.split("#")[0]]
                keep = {f: var[f] for f in ("ts", "prov") if f in var}
                var.clear(); var.update({f: v for f, v in basev.items() if f not in ("ts", "prov")}); var.update(keep)
    data["plant"] = plant
    body = json.dumps(data, ensure_ascii=False, indent=1)
    open(BD, "w", encoding="utf-8").write(src[:a] + body + ";" + src[b + 1:])
    write_register(data, M)
    n = sum(len(e["val"]) for e in plant["kpi"].values())
    print(f"base-data.js updated: {len(plant['kpi'])} KPIs, {n} KPI×scope values")


def write_register(data, M):
    """data/HARDCODED-VALUES.md: what is still not calculated by the model."""
    model = set(data["plant"]["kpi"])
    rows = []
    for kid in sorted(data["kpi"]):
        for sc, r in data["kpi"][kid].items():
            if kid in model and sc.split("#")[0] in data["plant"]["kpi"][kid]["val"]: continue
            v = r.get("val", r.get("v", ""))
            rows.append(f"| {kid} | {sc} | {str(v).replace('|', '/')} {r.get('u', '') if 'val' not in r else ''} | {r.get('plan', '—')} | {r.get('ts', '')} |")
    head = open(os.path.join(HERE, "hardcoded_header.md"), encoding="utf-8").read()
    out = head + f"\n## KPI values in js/data/base-data.js not calculated by the model (generated)\n\n{len(rows)} values. " \
        "Generated by `data/kpi-model/export_to_prototype.py`.\n\n| KPI | Scope | Value | Plan | Trust |\n|---|---|---|---|---|\n" + "\n".join(rows) + "\n"
    open(os.path.join(ROOT, "data", "HARDCODED-VALUES.md"), "w", encoding="utf-8").write(out)


if __name__ == "__main__":
    main()
