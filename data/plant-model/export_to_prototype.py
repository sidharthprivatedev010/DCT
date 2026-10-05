"""Pushes the plant model into the prototype's single source of truth.

Reads the CSVs written by build_plant_model.py and updates js/data/base-data.js:
  * kpi[ID]["A1" | "Plant01" | "Plant02" | "Plant03"]: card values for the latest
    period (P06 = 2026-09): v, u, plan, var, tr, bs, sp, spp, spx. Trust fields
    (ts, prov, own, cf, fb) are left as they were.
  * DCTData.plant: monthly series, formulas, and the input values each KPI is
    calculated from, used by the "Plant KPIs" tab on Entity screens and by the
    KPI detail page (P2-S03e-KPIDetail.html?kpi=ID&scope=A1).
Run after build_plant_model.py, then `node tools/regen.js`.
"""
import csv, json, os, re
from build_plant_model import KPI, BASE

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
BD = os.path.join(ROOT, "js", "data", "base-data.js")

# Full hierarchy: Group -> Entity A1 (Plants 01-03), Entity A2 (Plants 04-06)
ENTITIES = {"Entity A1": ["Plant 01", "Plant 02", "Plant 03"], "Entity A2": ["Plant 04", "Plant 05", "Plant 06"]}
PLANTS = [p for ps in ENTITIES.values() for p in ps]
KEY = {"Group": "Group", "Entity A1": "A1", "Entity A2": "A2", **{p: p.replace(" ", "") for p in PLANTS}}
CHILDREN = {"Group": ["A1", "A2"], **{KEY[e]: [KEY[p] for p in ps] for e, ps in ENTITIES.items()}}
PER = ["2026-04", "2026-05", "2026-06", "2026-07", "2026-08", "2026-09"]
PL = ["P01", "P02", "P03", "P04", "P05", "P06"]
ALIAS = {"SIG-001": "REL-003", "SIG-002": "PLT-005", "SIG-003": "PLT-004",
         # prototype-only IDs that show the same measure as a catalogue plant KPI
         "OPS-005": "OPS-003", "OPS-006": "PLT-002"}
# Hardcoded (non-derivable) values kept in line with the model. Listed in data/HARDCODED-VALUES.md.
ALIGN = {("PRD-006", "Group"): {"val": "26.0 kt", "plan": "—"}}   # P07 downtime-loss forecast vs P06 actual 27.2 kt (REL-004)
# Card footers (fb) that state a fact derived from the model, P06
FB = {("OPS-001", "Group"): "Plant 02: −26.2 kt of the −29.4 kt gap",
      ("OPS-001", "A1"): "Plant 02 at 78.4% of plan",
      ("OPS-001", "Plant02"): "−26.2 kt vs plan · P06"}

# id: (display divisor, display unit, decimals, better direction, target or None)
# Targets are only set where one target works for plant and entity alike (ratios, or zero-tolerance counts).
FMT = {
    "OPS-001": (1, "% of plan", 1, "up", 100), "OPS-003": (1, "%", 1, "up", 85),
    "PLT-001": (1, "%", 1, "up", 90), "PLT-002": (1, "%", 1, "up", 80),
    "PLT-004": (1, "%", 1, "up", 88), "PLT-005": (1, "%", 1, "up", 92),
    "REL-001": (1, "h", 0, "up", 200), "REL-002": (1, "h", 1, "down", 6),
    "REL-003": (1, "h", 0, "down", None), "REL-004": (1000, "kt", 1, "down", None),
    "REL-005": (1, "%", 1, "up", 95), "CST-001": (1, "₹/t", 0, "down", 2900),
    "CST-002": (1000, "₹ m", 1, "down", None), "CST-003": (1000, "₹ m", 1, "down", None),
    "SUS-001": (1000, "'000 m³", 1, "down", None), "SUS-002": (1000, "kt CO2e", 1, "down", None),
    "SUS-003": (1, "GJ/t", 2, "down", 3.5), "SIG-007": (1000, "kt", 1, "down", None),
    "SIG-008": (1, "alerts", 0, "down", 0), "SIG-009": (1, "materials", 0, "down", 0),
    "SIG-012": (1, "% late", 1, "down", 5), "SIG-021": (1, "", 0, "down", 0),
    "EHS-001": (1, "per 200k h", 2, "down", 0.5), "EHS-002": (1, "", 0, "down", 0),
    "EHS-003": (1, "", 0, None, None), "EHS-004": (1, "", 0, "down", 0),
    "EHS-005": (1, "", 0, "down", 0), "EHS-006": (1, "", 0, "down", None),
    "EHS-007": (1, "", 0, "down", 0), "EHS-009": (1, "%", 0, "up", 100),
    "REG-006": (1, "days", 0, "up", 90),
}
PCT = lambda u: u.startswith("%")


def load(name, key):
    out = {}
    for r in csv.DictReader(open(os.path.join(HERE, name))):
        if key(r) in KEY: out[(KEY[key(r)], r["period"])] = r
    return out


def fmt(x, dp): return f"{x:,.{dp}f}"


def card(kid, series):
    div, unit, dp, better, tgt = FMT[kid]
    s = [round(v / div, dp + 1) for v in series]
    cur, prev = s[-1], s[-2]
    d = cur - prev
    worse = better and ((d < 0) if better == "up" else (d > 0))
    tr = "flat" if abs(d) < 10 ** -dp / 2 else ("▲" if d > 0 else "▼") + f" {fmt(abs(d), dp)} vs P05"
    out = {"v": fmt(cur, dp), "u": unit, "tr": tr, "fc": "—", "spx": ["P01", "P06"],
           "sp": [round(100 * v / s[0], 1) if s[0] else 0 for v in s]}
    if tgt is None:
        out.update(plan="—", var="—", bs="Deteriorating" if worse else ("Improving" if better and d else "On track"))
    else:
        ok = cur >= tgt if better == "up" else cur <= tgt
        gap = cur - tgt
        out.update(plan=("≥ " if better == "up" else "≤ ") + fmt(tgt, dp) + (" " + unit if not PCT(unit) and unit else "%" if PCT(unit) else ""),
                   var=("+" if gap >= 0 else "−") + fmt(abs(gap), dp) + (" pts" if PCT(unit) else (" " + unit if unit else "")),
                   bs="On track" if ok else ("Deteriorating" if worse else "Intervention required"))
        if s[0]: out["spp"] = [round(100 * tgt / s[0], 1)] * len(s)
    return out


def main():
    pk = load("plant_kpi.csv", lambda r: r["plant"]); ek = load("entity_kpi.csv", lambda r: r["entity"])
    gk = load("group_kpi.csv", lambda r: r["group"])
    pb = load("plant_base.csv", lambda r: r["plant"]); eb = load("entity_base.csv", lambda r: r["entity"])
    gb = load("group_base.csv", lambda r: r["group"])
    kpi_rows, base_rows = {**pk, **ek, **gk}, {**pb, **eb, **gb}
    rule = {b[0]: b[2] for b in BASE}

    src = open(BD, encoding="utf-8").read()
    a, b = src.index("var DCTData = ") + len("var DCTData = "), src.rindex("};") + 1
    data = json.loads(src[a:b])

    scopes = {v: k for k, v in KEY.items()}
    plant = {"period": "P06", "periodL": "P06 · Sep 2026 (SYN, certified month)", "x": PL,
             "entity": "A1", "root": "Group", "scopes": scopes, "children": CHILDREN, "alias": ALIAS,
             "src": "data/plant-model (build_plant_model.py → export_to_prototype.py)", "kpi": {}}
    last = PER[-1]
    for kid, name, unit, fn, xl, text in KPI:
        div, du, dp, better, tgt = FMT[kid]
        fields = list(dict.fromkeys(re.findall(r"\{(\w+)\}", xl)))
        ent = {"name": name, "unit": du, "dp": dp, "div": div, "formula": text, "better": better,
               "target": tgt, "fields": fields, "rules": {f: rule[f] for f in fields}, "val": {}, "inp": {}, "excl": {}}
        for sc in scopes:
            series = [float(kpi_rows[(sc, p)][kid]) for p in PER]
            ent["val"][sc] = [round(v / div, dp + 1) for v in series]
            ent["inp"][sc] = {f: float(base_rows[(sc, last)][f]) for f in fields}
            rec = data["kpi"].setdefault(kid, {}).setdefault(sc, {})
            rec.pop("val", None)
            rec.update(card(kid, series))
            # Every model value is a certified P06 actual, so trust follows the model.
            rec.update(ts="Certified", prov="CERT P06")
            rec.pop("fb", None)
            if (kid, sc) in FB: rec["fb"] = FB[(kid, sc)]
            for al, canon in ALIAS.items():
                if canon == kid:
                    data["kpi"].setdefault(al, {})[sc] = dict(rec)
        # point-in-time variants (e.g. "Group#t7") show the same model value; only their trust state differs
        for key in list(data["kpi"].get(kid, {})):
            if "#" in key and key.split("#")[0] in scopes:
                var = data["kpi"][kid][key]; base = data["kpi"][kid][key.split("#")[0]]
                keep = {f: var[f] for f in ("ts", "prov") if f in var}
                var.clear(); var.update({f: v for f, v in base.items() if f not in ("ts", "prov")}); var.update(keep)
        # Parent value with each child left out: how far that child moves its parent
        for parent, kids in CHILDREN.items():
            for c in kids:
                rest = [base_rows[(o, last)] for o in kids if o != c]
                agg = {f: (min if rule[f] == "MIN" else sum)(float(r[f]) for r in rest) for f in rule}
                ent["excl"][c] = round(fn(agg) / div, dp + 1)
        plant["kpi"][kid] = ent
    data["plant"] = plant
    for (kid, sc), v in ALIGN.items(): data["kpi"].setdefault(kid, {}).setdefault(sc, {}).update(v)

    body = json.dumps(data, ensure_ascii=False, indent=1)
    open(BD, "w", encoding="utf-8").write(src[:a] + body + ";" + src[b + 1:])
    write_register(data)
    print(f"base-data.js updated: {len(KPI)} KPIs × {len(scopes)} scopes (+{len(ALIAS)} aliases)")


def write_register(data):
    """data/HARDCODED-VALUES.md: every KPI value in base-data.js that is NOT derived from plant data."""
    derived = set(FMT) | set(ALIAS)
    rows = []
    for kid in sorted(data["kpi"]):
        if kid in derived: continue
        for sc, r in data["kpi"][kid].items():
            v = r.get("val", r.get("v", ""))
            u = r.get("u", "") if "val" not in r else ""
            rows.append(f"| {kid} | {sc} | {str(v).replace('|', '/')} {u} | {r.get('plan', '—')} | {r.get('ts', '')} |")
    head = open(os.path.join(HERE, "hardcoded_header.md"), encoding="utf-8").read()
    out = head + "\n## Hardcoded KPI values in js/data/base-data.js (generated)\n\n" + \
        f"{len(rows)} values. Generated by `export_to_prototype.py`; do not edit this table by hand.\n\n" + \
        "| KPI | Scope | Value | Plan | Trust |\n|---|---|---|---|---|\n" + "\n".join(rows) + "\n"
    open(os.path.join(ROOT, "data", "HARDCODED-VALUES.md"), "w", encoding="utf-8").write(out)


if __name__ == "__main__":
    main()
