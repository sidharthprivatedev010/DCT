"""Keeps the story numbers on the pages in line with the KPI model.

Cards, KPI tables and tiles are filled from the model at render time (js/data/resolve.js).
This script fixes the rest: charts, bridges and narrative figures stored in js/c/*.js.
  * Bound: values computed from the model's monthly series (data/kpi-model/kpi_model.json).
  * Scaled: hand-set splits (bridge steps, daily curves, project budgets) rescaled so their
    totals match the model. These are listed in data/HARDCODED-VALUES.md.
Run after export_to_prototype.py, then `node tools/regen.js`. Safe to re-run: each edit
rewrites its block from the model, and text replacements are keyed on the model values.
"""
import json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
C = os.path.join(HERE, "..", "..", "js", "c")
M = json.load(open(os.path.join(HERE, "kpi_model.json"), encoding="utf-8"))
S = M["series"]
V = {(v["kpi"], v["scope"], v["period"]): v["value"] for v in M["values"]}
PER = ["2026-04", "2026-05", "2026-06", "2026-07", "2026-08", "2026-09"]
X6 = ["P01", "P02", "P03", "P04", "P05", "P06"]
X12 = X6 + ["P07", "P08", "P09", "P10", "P11", "P12"]


def m(sc, f): return [x / 1000 for x in S[sc][f]]                 # ₹ thousand → ₹ m, t → kt
def kv(k, sc, i=-1): return V[(k, sc, PER[i])]
def r1(x): return round(x, 1)
def money(x, dp=1): return f"{x:,.{dp}f}"
def cum(xs): out, t = [], 0.0; [out.append(t := t + x) for x in xs]; return out


# ---------------------------------------------------------------- page JSON helpers
def load(name):
    s = open(os.path.join(C, name + ".js"), encoding="utf-8").read()
    mm = re.search(r"(?:return \{ page: |const P0 = )\{", s)
    obj, end = json.JSONDecoder().raw_decode(s, mm.end() - 1)
    return s[:mm.end() - 1], obj, s[end:]


def save(name, pre, obj, post):
    open(os.path.join(C, name + ".js"), "w", encoding="utf-8").write(pre + json.dumps(obj, ensure_ascii=False, separators=(",", ":")) + post)


def blocks(o, pred, out=None):
    out = [] if out is None else out
    if isinstance(o, dict):
        if pred(o): out.append(o)
        for v in o.values(): blocks(v, pred, out)
    elif isinstance(o, list):
        for v in o: blocks(v, pred, out)
    return out


def titled(o, t): return blocks(o, lambda b: b.get("type") and t in str(b.get("title", "")))


def edit(name, fn):
    pre, obj, post = load(name); fn(obj); save(name, pre, obj, post)


def text(names, pairs):
    for n in names:
        p = os.path.join(C, n + ".js"); s = open(p, encoding="utf-8").read(); o = s
        for a, b in pairs:
            s = re.sub(a, b, s) if isinstance(a, re.Pattern) else s.replace(a, b)
        if s != o: open(p, "w", encoding="utf-8").write(s)


ALL = sorted(f[:-3] for f in os.listdir(C) if re.match(r"P[23]-.*\.js$", f))

# ---------------------------------------------------------------- derived figures
ebitda = {sc: m(sc, "ebitda_k") for sc in S}
ytd = {sc: kv("FIN-001", sc) for sc in S}                              # EBITDA YTD, as on the cards
rest_fc = {sc: S[sc]["forecast_ebitda_rest_k"][-1] / 1000 for sc in S}   # P07–P12, PRD-003 inputs
rest_pl = {sc: S[sc]["planned_ebitda_rest_k"][-1] / 1000 for sc in S}
fy_fc, fy_pl = ytd["Group"] + rest_fc["Group"], ytd["Group"] + rest_pl["Group"]
gap = fy_fc - fy_pl                                                      # = PRD-003 Group


def ytd_plan(sc):
    """EBITDA plan YTD implied by the model: actual + revenue shortfall × EBITDA margin, split into volume and price."""
    rev, prev = sum(m(sc, "revenue_k")), sum(m(sc, "planned_revenue_k"))
    sal, psal = sum(S[sc]["sales_t"]), sum(S[sc]["planned_sales_t"])
    margin = ytd[sc] / rev
    vol = (psal - sal) * (prev / psal) * margin
    price = (prev - rev) * margin - vol
    return ytd[sc] + vol + price, -vol, -price


# ---------------------------------------------------------------- 1. EBITDA per period (O-01, P3-L)
def ebitda_line(o):
    for b in titled(o, "EBITDA actual vs plan vs forecast"):
        a = [r1(x) for x in ebitda["Group"]]
        pl_rest, fc_rest = rest_pl["Group"] / 6, rest_fc["Group"] / 6
        b.update(x=X12, act=a, certTo=5, plan=a + [r1(pl_rest)] * 6, fc=[None] * 5 + [a[-1]] + [r1(fc_rest)] * 6,
                 th=round(min(a) * 0.8, -1), cap="P01–P06 certified (model). The plan to P06 is the actual: the model re-bases on actuals and plans the rest of the year "
                 f"(₹{money(rest_pl['Group'])} m P07–P12 against a ₹{money(rest_fc['Group'])} m forecast, gap ₹{money(gap)} m = PRD-003).")
for n in ("P2-O01-EnterpriseHealth", "P3-L-LargeDisplay", "P2-X-States"):
    try: edit(n, ebitda_line)
    except Exception: pass

# ---------------------------------------------------------------- 2. EBITDA → FCF → ROCE, indexed (O-01, G-03 Group · E-01, E-11 A1)
def diag(sc):
    """EBITDA margin, FCF conversion and ROCE in % (one unit, no index)."""
    e, rev = ebitda[sc], m(sc, "revenue_k")
    mg = [r1(100 * x / y) for x, y in zip(e, rev)]
    f8 = [r1(kv("FIN-008", sc, i)) for i in range(6)]; f5 = [r1(kv("FIN-005", sc, i)) for i in range(6)]
    # Answers the chart's question first, then one sentence per line: margin, cash conversion, return on capital
    part = "only partly" if f8[-1] < 50 else "largely" if f8[-1] < 80 else "fully"
    share = "about a third" if 28 <= f8[-1] <= 40 else "about half" if 45 <= f8[-1] <= 55 else f"{f8[-1]:.0f}%"
    read = (f"Profit is {'improving' if mg[-1] > mg[0] else 'weaker'}, but it is {part} turning into cash. "
            f"EBITDA margin {'rose' if mg[-1] > mg[0] else 'fell'} from {mg[0]:.1f}% in P01 to {mg[-1]:.1f}% in P06. "
            f"Since P01, {share} of EBITDA ({f8[-1]:.0f}%, FIN-008) has become free cash flow after tax, working capital and capex. "
            f"Return on capital employed is {f5[-1]:.1f}% annualised, {'below' if f5[-1] < 12 else 'above'} the 12% target "
            f"and {'down' if f5[-1] < f5[0] else 'up'} from {f5[0]:.1f}% in P01 (FIN-005).")
    return {"title": "EBITDA margin → FCF conversion → ROCE · " + ("Group" if sc == "Group" else "Entity A1") + " · %", "x": X6, "base": 12, "baseL": "ROCE target 12%",
            "series": [{"l": "EBITDA margin", "v": mg, "tag": "CERT"}, {"l": "FCF conversion YTD", "v": f8, "tag": "CERT"},
                       {"l": "ROCE annualised", "v": f5, "tag": "CERT", "dash": True}], "read": read, "cap": "Certified P01–P06 (model)."}
def diag_edit(sc):
    def fn(o):
        for b in blocks(o, lambda x: x.get("type") == "multi" and ("EBITDA → FCF → ROCE" in str(x.get("title", "")) or "EBITDA margin → FCF" in str(x.get("title", "")) or "Is profit turning into cash?" in str(x.get("title", "")))):
            d = diag(sc)
            if "Is profit turning into cash?" in str(b.get("title", "")): d = {"read": d["read"]}   # O-01 keeps its own title, months and caption
            b.update(d)
    return fn
for n, sc in (("P2-O01-EnterpriseHealth", "Group"), ("P2-G03-Financial", "Group"), ("P2-E01-EntityHome", "A1"), ("P2-E11-Financial", "A1"),
              ("P3-L-LargeDisplay", "Group"), ("P2-X-States", "Group")):
    try: edit(n, diag_edit(sc))
    except Exception: pass

# ---------------------------------------------------------------- 3. G-03 full-year bridge + tile
OLD_FY = [("Volume (Plant 02)", -8.6), ("Price", 1.2), ("Variable cost", -1.9), ("Fuel and power", -0.8), ("FX", 1.2)]
def g03(o):
    k = gap / sum(v for _, v in OLD_FY)
    steps = [[l, r1(v * k)] for l, v in OLD_FY]
    steps[0][1] = r1(gap - sum(v for _, v in steps[1:]))            # steps add up exactly to the gap
    for b in titled(o, "EBITDA bridge · FY plan → FY forecast"):
        b.update(steps=[{"l": "FY plan", "v": r1(fy_pl), "t": "total"}] + [{"l": l, "v": v, "d": ("+" if v >= 0 else "−") + money(abs(v))} for l, v in steps]
                 + [{"l": "FY forecast", "v": r1(fy_fc), "t": "total"}], floor=round(fy_fc - 120, -1), floorL=f"{round(fy_fc - 120, -1):,.0f} ₹ m (axis truncated)",
                 cap=f"FY = EBITDA YTD ₹{money(ytd['Group'])} m + rest of year (model). Driver split of the ₹{money(gap)} m gap is hand-set (SYN).")
    for t in blocks(o, lambda x: x.get("l") == "FY EBITDA forecast"): t["v"] = f"{money(fy_fc)} vs {money(fy_pl)}"
edit("P2-G03-Financial", g03)

# ---------------------------------------------------------------- 4. E-11: YTD bridge and revenue per period (A1)
def e11(o):
    plan, vol, price = ytd_plan("A1")
    for b in titled(o, "EBITDA bridge · YTD plan to actual"):
        b.update(steps=[{"l": "Plan", "v": r1(plan), "t": "total", "d": money(plan)}, {"l": "Volume (sales below plan)", "v": r1(vol), "d": "−" + money(abs(vol))},
                        {"l": "Price", "v": r1(price), "d": ("+" if price >= 0 else "−") + money(abs(price))}, {"l": "Actual", "v": r1(ytd["A1"]), "t": "total", "d": money(ytd["A1"])}],
                 floor=round(ytd["A1"] - 60, -1), floorL=f"{round(ytd['A1'] - 60, -1):,.0f}",
                 cap="Plan = actual + revenue below plan × EBITDA margin (model: planned revenue and sales volume). Certified to P06.")
    for b in titled(o, "Revenue per period"):
        a, p = [r1(x) for x in m("A1", "revenue_k")], [r1(x) for x in m("A1", "planned_revenue_k")]
        b.update(x=X12, act=a, plan=p + [p[-1]] * 6, certTo=5, fc=[None] * 5 + [a[-1]] + [a[-1]] * 6,
                 cap="P01–P06 certified (model) · P07–P12 plan and forecast held at the P06 run-rate (SYN).")
    for b in titled(o, "EBITDA margin → FCF"):
        b["read"] += " Levers: release ₹34–45 m of inventory and recover DSO (52 d vs 45 d)."
edit("P2-E11-Financial", e11)

# ---------------------------------------------------------------- 5. O-03 cash, debt ladder, FX
cashG = m("Group", "cash_k")[-1]
def o03(o):
    for b in titled(o, "Cash position · actual vs plan vs forecast"):
        if not b.get("_k"):                                          # scale once (old D0 = 384)
            k = cashG / b["act"][-1]
            for key in ("plan", "act", "fc"): b[key] = [None if x is None else r1(x * k) for x in b[key]]
            b["th"] = round(b["th"] * k, -1); b["_k"] = round(k, 4)
    for b in titled(o, "Cash bridge"):
        tot = [s for s in b["steps"] if s.get("t") == "total"]
        if abs(tot[-1]["v"] - cashG) > 0.5:
            k = cashG / tot[-1]["v"]
            for s in b["steps"]:
                s["v"] = r1(s["v"] * k)
                if "d" in s: s["d"] = ("+" if s["v"] >= 0 else "−") + money(abs(s["v"]), 0)
            b["steps"][-1]["v"] = r1(cashG); b["floor"] = round(cashG * 0.78, -2); b["floorL"] = f"{b['floor']:,.0f} ₹ m (axis truncated)"
    for b in titled(o, "Debt maturity ladder"):
        due12, gross = m("Group", "debt_maturing_12m_k")[-1], m("Group", "gross_debt_k")[-1]
        q = [20, 35, 65, 15]; k = due12 / sum(q)
        b["rows"] = [{"l": l, "v": r1(v * k), "d": money(v * k, 0), **({"hi": True, "note": "Term loan B"} if l == "Q+3" else {})}
                     for l, v in zip(["Next quarter", "Q+2", "Q+3", "Q+4"], q)] + [{"l": "> 12 m", "v": r1(gross - due12), "d": money(gross - due12, 0)}]
        b["cap"] = f"Gross debt ₹{money(gross, 0)} m; ₹{money(due12, 0)} m matures in the next 12 months (LIQ-003). Quarterly split is hand-set (SYN)."
    for b in titled(o, "FX exposure vs hedged amount"):
        ex, hd = m("Group", "fx_exposure_k"), m("Group", "fx_hedged_k")
        b.update(x=X6, series=[{"l": "Gross FX exposure", "v": [r1(x) for x in ex], "tag": "CERT"}, {"l": "Hedged", "v": [r1(x) for x in hd], "tag": "CERT"}],
                 read=f"Gross exposure is ₹{money(ex[-1])} m and ₹{money(hd[-1])} m is hedged, so unhedged exposure is ₹{money(ex[-1] - hd[-1])} m (TRS-001). "
                      f"Hedge cover for the next 6 months is {kv('TRS-004', 'Group'):.0f}% (TRS-004).")
    for n in blocks(o, lambda x: str(x.get("note", "")).startswith("₹384 m vs 402")):
        n["note"] = f"₹{money(cashG)} m vs {money(402 * cashG / 384)}" + n["note"][len("₹384 m vs 402"):]
edit("P2-O03-CashLiquidity", o03)

# ---------------------------------------------------------------- 6. G-04 working capital
nwcG = m("Group", "nwc_k")[-1]; KW = nwcG / 498                      # old bridge started at 498
def g04(o):
    for b in titled(o, "Net working capital bridge"):
        if abs(b["steps"][0]["v"] - nwcG) > 0.5:
            for s in b["steps"]:
                if s.get("t") != "total": s["v"] = r1(s["v"] * KW); s["d"] = ("+" if s["v"] >= 0 else "−") + money(abs(s["v"]))
            b["steps"][0]["v"] = r1(nwcG)
            b["steps"][-1]["v"] = r1(nwcG + sum(s["v"] for s in b["steps"] if s.get("t") != "total"))
            b["floor"] = round(nwcG * 0.93, -2); b["floorL"] = f"{b['floor']:,.0f} ₹ m (axis truncated)"
    for b in titled(o, "Working-capital release opportunity by entity"):
        for r in b["rows"]:
            if r["v"] in (21, 9): r["v"] = r1(r["v"] * KW); r["d"] = money(r["v"])
        b["cap"] = re.sub(r"Total ₹[\d,.]+ m", f"Total ₹{money(sum(r['v'] for r in b['rows']))} m", b.get("cap", ""))
edit("P2-G04-CashWC", g04)

def levers(o):
    for b in titled(o, "Cash levers"):
        for r in b["rows"]:
            if r["v"] in (7.4, 5.6, 3.1): r["v"] = r1(r["v"] * KW); r["d"] = "₹" + money(r["v"]) + " m"
try: edit("P2-E05-ProductionCash", levers)
except Exception: pass

# ---------------------------------------------------------------- 7. value delivered (O-04 Group, E-06 A1)
def value(sc):
    eb, cb, cs = cum(m(sc, "ebitda_benefit_k")), cum(m(sc, "cash_benefit_k")), cum(m(sc, "cost_savings_k"))
    def fn(o):
        for b in blocks(o, lambda x: x.get("type") == "multi" and "alue delivered vs plan" in str(x.get("title", ""))):
            plan = [r1(x * 1.08) for x in eb]                         # plan: hand-set 8% above delivered (SYN)
            ser = [{"l": "EBITDA benefit plan", "v": plan, "tag": "PLAN", "c": "#5F6B7A", "dash": True}, {"l": "EBITDA benefit", "v": [r1(x) for x in eb], "tag": "CERT"},
                   {"l": "Cash benefit", "v": [r1(x) for x in cb], "tag": "PRELIM", "c": "#0B6B73"}]
            if sc == "Group": ser.append({"l": "Cost savings", "v": [r1(x) for x in cs], "tag": "CERT", "c": "#7E63C7"})
            b.update(x=X6, series=ser, read=f"EBITDA benefit is ₹{money(eb[-1])} m year to date (VAL-001) against ₹{money(plan[-1])} m planned; cash benefit is "
                     f"₹{money(cb[-1])} m (VAL-002), so benefits are booking in margin before they release cash. Cost savings delivered: ₹{money(cs[-1])} m (VAL-003).")
    return fn
edit("P2-O04-Capex", value("Group")); edit("P2-E06-Capex", value("A1"))
try: edit("P2-G06-CapexPortfolio", value("Group"))
except Exception: pass

# ---------------------------------------------------------------- 8. capex projects: budgets scaled to CPX-001/002 by entity
PROJ = {"Major Project 01": "A2", "Major Project 02": "A1", "Major Project 03": "A2", "Major Project 04": "A2", "Project 05": "A1", "Project 06": "A2"}
OLD = {"A1": (400, 268), "A2": (840, 602)}                              # old approved / committed totals
def ksc(e, i):
    tgt = (kv("CPX-001", e), kv("CPX-002", e))[i]
    return tgt / OLD[e][i]
def capex(o):
    for b in blocks(o, lambda x: x.get("type") == "table" and "Approved" in (x.get("cols") or []) and "Committed" in (x.get("cols") or [])):
        ia, ic = b["cols"].index("Approved"), b["cols"].index("Committed")
        if b.get("_scaled"): continue
        for r in b["rows"]:
            a = r if isinstance(r, list) else r["c"]
            name = a[0]["t"] if isinstance(a[0], dict) else a[0]
            e = next((v for k, v in PROJ.items() if str(name).startswith(k)), None)
            if not e: continue
            for i, col in ((0, ia), (1, ic)):
                mt = re.match(r"₹([\d,.]+) m", str(a[col]))
                if mt: a[col] = f"₹{money(float(mt.group(1).replace(',', '')) * ksc(e, i), 0)} m"
        b["_scaled"] = True
for n in ("P2-O04-Capex", "P2-G06-CapexPortfolio", "P2-E06-Capex"):
    edit(n, capex)
risk_a2 = kv("SIG-011", "Group") - kv("SIG-011", "A1")
text(ALL, [("₹34 m value at risk", f"₹{money(risk_a2)} m value at risk"), ("release ₹15 m", f"release ₹{money(15 * ksc('A2', 0))} m")])

# ---------------------------------------------------------------- 9. text figures
cA1 = m("A1", "cash_k")[-1]; kC = cA1 / 62
plan_a1, _, _ = ytd_plan("A1"); pct = 100 * (ytd["A1"] / plan_a1 - 1)
up = kv("CSH-006", "Group")
text(ALL, [
    (re.compile(r"₹26 m"), f"₹{money(up)} m"),
    ("against a ₹9.2 m exposure", f"against a ₹{money(abs(gap))} m exposure"),
    ("restores the Plant 02 plan by D+6", "recovers 20.1 of the 24.3 kt by D+6 (4.2 kt needs the Plant 02 reliability fix)"),
    ("₹2.8 m · full recovery by D+6", "₹2.8 m · recovers 20.1 kt by D+6"),
    ('"₹64 m"', f'"₹{money(kv("TRS-001", "Group"))} m"'),
    ("DSO +2 d; ₹3 m timing", f"+{kv('SIG-004', 'A1'):.1f} d at Entity A1; ₹{money(3 * KW)} m timing"),
    ("Entity A1 FCF falls a further ₹3 m", f"Entity A1 FCF falls a further ₹{money(3 * kv('FIN-004', 'A1') / 19.8, 0)} m"),
    ("Actual ₹118 m\\nPlan ₹121 m", f"Actual ₹{money(m('A1', 'revenue_k')[-1])} m (P06)\\nPlan ₹{money(m('A1', 'planned_revenue_k')[-1])} m"),
    ("₹62 m\\nPlan ₹70 m\\nFcst ₹48 m at D+8", f"₹{money(cA1)} m\\nPlan ₹{money(70 * kC)} m\\nFcst ₹{money(48 * kC)} m at D+8"),
    ("Entity A1 EBITDA YTD ₹96.2 m, +0.4% vs plan (certified P06).", f"Entity A1 EBITDA YTD ₹{money(ytd['A1'])} m, {pct:+.1f}% vs plan (certified P06; revenue below plan)."),
    ("EBITDA YTD ₹96.2 m (+0.4%); EBIT ₹68.7 m; ROCE 11.4% vs 13.0% plan.", f"EBITDA YTD ₹{money(ytd['A1'])} m ({pct:+.1f}% vs plan); EBIT ₹{money(kv('FIN-002', 'A1'))} m; ROCE {kv('FIN-005', 'A1'):.1f}% vs 12.0% target."),
    ("DSO 52 d (+7), inventory 41 d (+7); daily collections ₹4.1 m vs 4.4 plan.", f"DSO {kv('WCP-001', 'A1'):.0f} d (target 45), inventory {kv('WCP-003', 'A1'):.0f} d; daily collections ₹{money(kv('CSH-003', 'A1'))} m."),
    ("Inventory to 34 d releases ~₹7.4 m; DSO to 45 d ~₹5.6 m; DPO to 42 d ~₹3.1 m.", f"Inventory to 34 d releases ~₹{money(7.4 * KW)} m; DSO to 45 d ~₹{money(5.6 * KW)} m; DPO to 42 d ~₹{money(3.1 * KW)} m."),
])

# ---------------------------------------------------------------- 10. production: S-03 default daily chart, S-10 line split
def s03(o):
    for b in blocks(o, lambda x: x.get("type") == "line" and "Plant 02 daily production" in str(x.get("title", ""))):
        if max(v for v in b["plan"] if v is not None) > 20:
            sc = lambda v: None if v is None else r1(v * 0.157)
            b["plan"] = [8.1] * len(b["plan"]); b["act"] = [sc(v) for v in b["act"]]; b["fc"] = [sc(v) for v in b["fc"]]; b["th"] = 5.5
            b["title"] = b["title"].replace("· kt", "· kt per day-pair")
    for b in titled(o, "Variance drivers vs plan"):
        for r in b["rows"]:
            if r["v"] in (12.6, 0.8, -0.2): r["v"] = r1(r["v"] * 298.4 / 412.6); r["d"] = ("+" if r["v"] >= 0 else "−") + money(abs(r["v"]))
for n in ("P2-S03-KPIDetail", "P2-S03e-KPIDetail", "P2-S03o-KPIDetail"):
    edit(n, s03)
def s10(o):
    for b in titled(o, "Forecast shortfall by line"):
        b["rows"] = [{"l": "Line L2", "v": -15.3, "d": "−15.3", "hi": True}, {"l": "Line L1", "v": -6.4, "d": "−6.4"}, {"l": "Line L3", "v": -2.6, "d": "−2.6"}]
        b["title"] = "Forecast shortfall by line (summary) · kt · total 24.3 = SIG-007 Plant 02"
edit("P2-S10-OpsImpact", s10)
# ---------------------------------------------------------------- 11. entity comparison and governance charts
def g02(o):
    for b in titled(o, "EBITDA variance vs plan YTD"):
        b["rows"] = [{"l": f"Entity {e}", "v": r1(ytd[e] - ytd_plan(e)[0]), "d": ("+" if ytd[e] >= ytd_plan(e)[0] else "−") + money(abs(ytd[e] - ytd_plan(e)[0])),
                      **({"hi": True} if e == "A1" else {})} for e in ("A1", "A2")]
        b["cap"] = "Plan YTD = actual + revenue below plan × EBITDA margin (model)."
    for b in titled(o, "ROCE vs plan by entity"):
        b["rows"] = [{"l": f"Entity {e}", "v": r1(kv("FIN-005", e) - 12), "d": ("+" if kv("FIN-005", e) >= 12 else "−") + money(abs(kv("FIN-005", e) - 12)),
                      **({"hi": True, "note": "Line 3 capital before benefit"} if e == "A1" else {})} for e in ("A1", "A2")]
        b["title"] = "ROCE vs 12% target by entity · pts"
    for b in blocks(o, lambda x: x.get("type") == "bars" and str(x.get("title", "")).startswith("DSO")): b["kpi"] = "WCP-001"
edit("P2-G02-EntityComparison", g02)
edit("P2-G04-CashWC", lambda o: [b.update(kpi="WCP-001") for b in titled(o, "DSO by entity")])
edit("P2-G07-Risk", lambda o: [b.update(kpi="GOV-004") for b in titled(o, "Open audit findings by entity")])
def g08o(o):
    for b in titled(o, "Certification coverage and reconciliation rates"):
        b.update(x=X6, series=[{"l": "Certified KPI % (TRU-001)", "v": [r1(kv("TRU-001", "Group", i)) for i in range(6)]},
                               {"l": "Source-to-Lake (TRU-008)", "v": [r1(kv("TRU-008", "Group", i)) for i in range(6)], "c": "#0B6B73"},
                               {"l": "Flash-to-MIS (TRU-009)", "v": [r1(kv("TRU-009", "Group", i)) for i in range(6)], "c": "#7E63C7", "dash": True}])
edit("P2-G08o-OwnerTrust", g08o)
def eff(o):
    def a_of(x): mt = re.match(r"(\d+) of", str(x)); return int(mt.group(1)) if mt else 0
    for b in titled(o, "Escalation effectiveness"):
        b.update(x=X6, series=[{"l": "Resolution time (d) · EFF-008", "v": [r1(kv("EFF-008", "Group", i)) for i in range(6)], "tag": "SYSTEM"},
                               {"l": "Repeat issues, last 90 d · EFF-010", "v": [kv("EFF-010", "Group", i) for i in range(6)], "tag": "SYSTEM", "c": "#C27C0E"},
                               {"l": "Root causes eliminated YTD · EFF-011", "v": [a_of(kv("EFF-011", "Group", i)) for i in range(6)], "tag": "CERT", "c": "#1E6B43", "dash": True}])
for n in ("P2-G09-Escalations", "P2-O06-Decisions"): edit(n, eff)
def leak(o):
    for b in titled(o, "Leakage by stage"):
        for r in b["rows"]:
            if r["l"] == "Upstreaming": r["v"] = -r1(up); r["d"] = "−" + money(up)
for n in ("P2-E05-ProductionCash", "P2-S11-CashExposure"): edit(n, leak)
edit("P2-G06-CapexPortfolio", lambda o: [b.update(title="Value delivered vs plan · cumulative ₹ m · Group") for b in titled(o, "Value delivered vs plan · cumulative ₹ m · Group by entity")])

print(f"synced · FY EBITDA {fy_pl:,.1f} → {fy_fc:,.1f} (gap {gap:,.1f}) · A1 YTD plan {plan_a1:,.1f} vs {ytd['A1']:,.1f} ({pct:+.1f}%) · cash {cashG:,.1f} · NWC {nwcG:,.1f}")
