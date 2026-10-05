"""Builds the full KPI model: every KPI shown in the prototype, for Group, Entity A1/A2 and
(where the inputs exist at plant level) Plants 01-06, P01-P06 (Apr-Sep 2026).

Source: data/kpi-model/Group-KPI-Model.xlsx (plant inputs, entity-only inputs, Group building blocks,
149 Group KPI formulas). This script:
  1. appends the synthetic entity inputs needed by KPIs the workbook did not cover;
  2. adds per-scope input sheets ("A1 Inputs", "A2 Inputs", "Plant01 Inputs" ...) laid out exactly
     like "Group Inputs", so every KPI formula is reused unchanged with only the sheet name swapped;
  3. adds the missing KPIs and the alias rows to "Group KPIs" and writes one KPI sheet per scope;
  4. evaluates every formula (xleval.py) and writes kpi_values.csv and kpi_catalogue.csv.
Output: KPI-Model.xlsx (live formulas), kpi_values.csv, kpi_catalogue.csv, ui_kpi_map.csv.
Run: python3 build_kpi_model.py
"""
import csv, json, os, re, copy
import openpyxl
from openpyxl.styles import PatternFill, Font
from openpyxl.utils import get_column_letter as L
from xleval import Book, col2n

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
SRC = os.path.join(HERE, "Group-KPI-Model.xlsx")
OUT = os.path.join(HERE, "KPI-Model.xlsx")
PER = ["2026-04", "2026-05", "2026-06", "2026-07", "2026-08", "2026-09"]
ROWS = range(4, 10)                       # P01..P06 rows on every *Inputs sheet
ENT = {"A1": ("Entity A1", 4, "$B$5"), "A2": ("Entity A2", 10, "$B$6")}   # name, first row in Entity Inputs, opening NWC
PLANTS = {f"Plant0{i}": (f"Plant 0{i}", 4 + 6 * (i - 1)) for i in range(1, 7)}
PARENT = {**{p: ("A1" if i <= 3 else "A2") for i, p in enumerate(PLANTS, 1)}, "A1": "Group", "A2": "Group"}
NEWFILL = PatternFill("solid", fgColor="E8F5E9")   # green = added by this script

# ---------------------------------------------------------------- new KPIs (UI KPIs the workbook lacked)
# {f} = this month, {ytd:f} = Apr..this month range, {prev:f} = previous month (P01 uses itself)
NEW_KPIS = [
    ("CST-005", "Fixed cost YTD", "₹ m", "Year to date", "Sum of monthly fixed cost since April ÷ 1000",
     "ROUND(SUM({ytd:fixed_cost_k})/1000,2)"),
    ("PRD-008", "Projected FCF gap, full year", "₹ m", "Forecast", "(FCF YTD + forecast FCF rest of year − FY FCF plan) ÷ 1000",
     "ROUND((SUM({ytd:fcf_k})+{forecast_fcf_rest_k}-{fcf_plan_fy_k})/1000,2)"),
    ("PRD-009", "ROCE at P12 (forecast)", "%", "Forecast", "(EBIT YTD + forecast EBIT rest of year) ÷ forecast capital employed at P12 × 100",
     "ROUND(IF({capital_employed_p12_k}=0,0,100*(SUM({ytd:ebit_k})+{ebit_fcst_rest_k})/{capital_employed_p12_k}),2)"),
    ("PRD-010", "Revenue per FTE YTD", "₹ m", "Year to date", "Revenue since April ÷ FTE ÷ 1000",
     "ROUND(IF({fte}=0,0,SUM({ytd:revenue_k})/{fte}/1000),3)"),
    ("PRD-011", "Tonnes per FTE", "t", "Month", "Good output ÷ FTE",
     "ROUND(IF({fte}=0,0,{good_output_t}/{fte}),1)"),
    ("PRD-012", "Probability of EBITDA plan miss, full year", "%", "Forecast",
     "P(FY EBITDA < FY plan), FY EBITDA ~ Normal(EBITDA YTD + forecast rest of year, σ)",
     "ROUND(100*NORM.DIST({ebitda_plan_fy_k},SUM({ytd:ebitda_k})+{forecast_ebitda_rest_k},{ebitda_fy_sigma_k},TRUE),2)"),
    ("REG-011", "Disclosure clock, hours remaining", "h", "Month end", "Hours to the nearest open disclosure deadline (999 = none running)",
     "ROUND({disclosure_deadline_h},0)"),
    ("SIG-010", "Single-source supply risk", "count", "Month end", "Single-source suppliers with cover below lead time",
     "ROUND({single_source_elevated},0)"),
    ("SIG-014", "Commodity-price movement (RM-1 index)", "%", "Month", "RM-1 price index ÷ last month's index − 1, as %",
     "ROUND(IF({prev:rm1_price_index}=0,0,100*({rm1_price_index}/{prev:rm1_price_index}-1)),2)"),
    ("SIG-016", "Freight exposure (lanes disrupted)", "count", "Month end", "Supply lanes with a disruption flag",
     "ROUND({freight_lanes_disrupted},0)"),
    ("SIG-017", "Fuel exposure (fuel cost per tonne, MoM)", "%", "Month", "(Fuel cost ÷ good output) ÷ last month's − 1, as %",
     "ROUND(IF(OR({prev:good_output_t}=0,{prev:fuel_cost_k}=0,{good_output_t}=0),0,100*(({fuel_cost_k}/{good_output_t})/({prev:fuel_cost_k}/{prev:good_output_t})-1)),2)"),
    ("SIG-018", "Power-cost exposure (power cost per tonne, MoM)", "%", "Month", "(Power cost ÷ good output) ÷ last month's − 1, as %",
     "ROUND(IF(OR({prev:good_output_t}=0,{prev:power_cost_k}=0,{good_output_t}=0),0,100*(({power_cost_k}/{good_output_t})/({prev:power_cost_k}/{prev:good_output_t})-1)),2)"),
]
# UI IDs that the catalogue defines as aliases of another KPI (P1-R1 alias rows)
ALIASES = {"SIG-001": "REL-003", "SIG-002": "PLT-005", "SIG-003": "PLT-004", "SIG-015": "TRS-001",
           "SIG-019": "REG-002", "SIG-020": "REG-003", "RSK-001": "EFF-002", "RSK-002": "EHS-002", "STR-001": "CPX-004"}
# Aliases the source workbook already carries as their own rows (same formula as the canonical KPI)
WB_ALIASES = {"OPS-005": "OPS-003", "OPS-006": "PLT-002", "OPS-004": "OPS-002", "PRG-004": "STR-002",
              "RSK-003": "REG-010", "CMP-005": "REG-010"}

# ---------------------------------------------------------------- new synthetic entity inputs
# (field, label, Group roll-up, generator(entity, month_index, pass1) -> value)
def _ytd(p1, ent, f, m): return sum(p1[ent][f][: m + 1])
NEW_INPUTS = [
    ("fte", "Full-time employees (FTE, count)", "SUM", lambda e, m, p: {"A1": 1340, "A2": 1290}[e] + (m % 3) * {"A1": 4, "A2": -3}[e]),
    ("fcf_plan_fy_k", "FCF plan, full year (₹ thousand)", "SUM", lambda e, m, p: round(_ytd(p, e, "fcf_k", m) * 12 / (m + 1) * {"A1": 1.12, "A2": 1.04}[e], 1)),
    ("forecast_fcf_rest_k", "Forecast FCF, rest of year (₹ thousand)", "SUM", lambda e, m, p: round(_ytd(p, e, "fcf_k", m) * (11 - m) / (m + 1) * {"A1": 0.94, "A2": 1.01}[e], 1)),
    ("ebit_fcst_rest_k", "Forecast EBIT, rest of year (₹ thousand)", "SUM", lambda e, m, p: round(_ytd(p, e, "ebit_k", m) * (11 - m) / (m + 1) * {"A1": 0.95, "A2": 1.02}[e], 1)),
    ("capital_employed_p12_k", "Forecast capital employed at P12 (₹ thousand)", "SUM", lambda e, m, p: round(p[e]["capital_employed_k"][m] * {"A1": 1.03, "A2": 1.01}[e], 1)),
    ("ebitda_plan_fy_k", "EBITDA plan, full year (₹ thousand)", "SUM", lambda e, m, p: round((_ytd(p, e, "ebitda_k", m) + p[e]["forecast_ebitda_rest_k"][m]) * {"A1": 1.03, "A2": 0.995}[e], 1)),
    ("ebitda_fy_sigma_k", "EBITDA full-year forecast uncertainty, 1σ (₹ thousand)", "SQRTSUMSQ",
     lambda e, m, p: round((_ytd(p, e, "ebitda_k", m) + p[e]["forecast_ebitda_rest_k"][m]) * 0.035, 1)),
    ("disclosure_deadline_h", "Hours to nearest open disclosure deadline (999 = none)", "MIN", lambda e, m, p: 38 if (e == "A1" and m == 5) else 999),
    ("single_source_elevated", "Single-source suppliers with cover below lead time (count)", "SUM", lambda e, m, p: 1 if (e == "A1" and m >= 4) else 0),
    ("rm1_price_index", "RM-1 price index (external, same for every entity)", "FIRST", lambda e, m, p: [100.0, 101.2, 100.6, 102.3, 103.1, 105.3][m]),
    ("freight_lanes_disrupted", "Supply lanes with a disruption flag (count)", "SUM", lambda e, m, p: 1 if (e == "A1" and m == 5) else 0),
]


def load_cells(wb):
    cells = {}
    for ws in wb:
        for row in ws.iter_rows():
            for c in row:
                if c.value is not None: cells[(ws.title, c.column, c.row)] = c.value
    return cells


def main():
    wb = openpyxl.load_workbook(SRC)
    gi, ei, pi, gk = wb["Group Inputs"], wb["Entity Inputs"], wb["Plant Inputs"], wb["Group KPIs"]
    gfield = {gi.cell(2, c).value: c for c in range(1, gi.max_column + 1)}
    efield = {ei.cell(2, c).value: c for c in range(1, ei.max_column + 1)}
    pfield = {pi.cell(2, c).value: c for c in range(1, pi.max_column + 1)}
    G_LAST, E_LAST = gi.max_column, ei.max_column
    BLUE = [c for c in range(1, G_LAST + 1) if str(gi.cell(4, c).value or "").startswith("=") and not str(gi.cell(4, c).value).startswith(("=SUM('Entity", "=MIN('Entity"))]

    # ---- pass 1: entity-level building blocks needed to size the new synthetic inputs
    scope_sheets(wb, gi, ei, pi, gfield, efield, pfield, BLUE, new=False)
    b = Book(load_cells(wb), {})
    p1 = {e: {f: [b.value(f"{e} Inputs", gfield[f], r) for r in ROWS] for f in ("fcf_k", "ebit_k", "ebitda_k", "capital_employed_k", "forecast_ebitda_rest_k")} for e in ENT}
    for e in ENT: del wb[f"{e} Inputs"]
    for p in PLANTS: del wb[f"{p} Inputs"]

    # ---- 1. new synthetic inputs: Entity Inputs (values) and Group Inputs (roll-up formulas)
    for i, (f, label, rule, gen) in enumerate(NEW_INPUTS):
        ec, gc = E_LAST + 1 + i, G_LAST + 1 + i
        for ws, c in ((ei, ec), (gi, gc)):
            ws.cell(1, c, label).font = Font(bold=True); ws.cell(2, c, f)
            ws.cell(3, c, "Added (synthetic) for UI KPIs not in the source model" if ws is ei else f"{rule} of Entity A1 and Entity A2 (added)")
        for e, (name, r0, _) in ENT.items():
            for m in range(6):
                ei.cell(r0 + m, ec, gen(e, m, p1)).fill = NEWFILL
        for m, r in enumerate(ROWS):
            a1, a2 = f"'Entity Inputs'!{L(ec)}{ENT['A1'][1] + m}", f"'Entity Inputs'!{L(ec)}{ENT['A2'][1] + m}"
            fml = {"SUM": f"=SUM({a1},{a2})", "MIN": f"=MIN({a1},{a2})", "FIRST": f"={a1}",
                   "SQRTSUMSQ": f"=SQRT({a1}^2+{a2}^2)"}[rule]
            gi.cell(r, gc, fml).fill = NEWFILL
        gfield[f] = gc; efield[f] = ec

    # ---- 2. per-scope input sheets
    scope_sheets(wb, gi, ei, pi, gfield, efield, pfield, BLUE, new=True)

    # ---- 3. KPI rows: new KPIs + aliases appended to Group KPIs
    kcol = {gk.cell(r, 1).value: r for r in range(2, gk.max_row + 1)}
    def expand(t, sheet, r):
        def rep(m):
            kind, f = (m.group(1) or ""), m.group(2)
            c = L(gfield[f]); q = f"'{sheet}'!"
            if kind == "ytd:": return f"{q}{c}$4:{c}{r}"
            if kind == "prev:": return f"{q}{c}{max(4, r - 1)}"
            return f"{q}{c}{r}"
        return "=" + re.sub(r"\{(ytd:|prev:)?(\w+)\}", rep, t)
    nr = gk.max_row + 1
    for kid, name, unit, basis, how, t in NEW_KPIS:
        used = sorted(set(re.findall(r"\{(?:ytd:|prev:)?(\w+)\}", t)))
        gk.cell(nr, 1, kid); gk.cell(nr, 2, name); gk.cell(nr, 3, unit); gk.cell(nr, 4, basis); gk.cell(nr, 5, how)
        for j, r in enumerate(ROWS): gk.cell(nr, 6 + j, expand(t, "Group Inputs", r))
        gk.cell(nr, 12, "(added: UI KPI not in source model)"); gk.cell(nr, 14, ", ".join(used))
        for c in range(1, 15): gk.cell(nr, c).fill = NEWFILL
        kcol[kid] = nr; nr += 1
    for al, canon in ALIASES.items():
        cr = kcol[canon]
        gk.cell(nr, 1, al); gk.cell(nr, 2, f"{gk.cell(cr, 2).value} (same measure as {canon})")
        for c in (3, 4): gk.cell(nr, c, gk.cell(cr, c).value)
        gk.cell(nr, 5, f"Alias of {canon}: same value")
        for j in range(6): gk.cell(nr, 6 + j, f"={L(6 + j)}{cr}")
        gk.cell(nr, 12, "(added alias)"); gk.cell(nr, 14, gk.cell(cr, 14).value)
        for c in range(1, 15): gk.cell(nr, c).fill = NEWFILL
        kcol[al] = nr; nr += 1

    # ---- 4. one KPI sheet per scope (same formulas, other inputs sheet)
    pset = set(pfield)
    blue_fields = {gi.cell(2, c).value: c for c in BLUE}
    def plant_ok(fields):
        """True when every input of a KPI exists at plant level (building blocks: check what they use)."""
        need = set()
        for f in fields:
            if f in blue_fields:
                need |= {gi.cell(2, col2n(x)).value for x in re.findall(r"(?<![A-Z!])\$?([A-Z]{1,3})\$?\d+", str(gi.cell(4, blue_fields[f]).value)) if col2n(x) <= G_LAST}
            else: need.add(f)
        need -= {"group", "period", "days", "ytd_months", None}
        return need <= pset
    kpis = []
    for r in range(2, gk.max_row + 1):
        kid = gk.cell(r, 1).value
        if not kid: continue
        canon = ALIASES.get(kid) or WB_ALIASES.get(kid) or kid
        fields = [x.strip() for x in str(gk.cell(kcol[canon], 14).value or "").split(",") if x.strip()]
        kpis.append({"id": kid, "row": r, "name": gk.cell(r, 2).value, "unit": gk.cell(r, 3).value, "basis": gk.cell(r, 4).value,
                     "how": gk.cell(r, 5).value, "fields": fields, "alias_of": None if canon == kid else canon,
                     "plant": plant_ok(fields), "added": gk.cell(r, 12).value and str(gk.cell(r, 12).value).startswith("(added")})
    for sc in list(ENT) + list(PLANTS):
        ws = wb.create_sheet(f"{sc} KPIs")
        for c in range(1, 12): ws.cell(1, c, gk.cell(1, c).value).font = Font(bold=True)
        ws.cell(1, 12, "Inputs used"); ws.cell(1, 12).font = Font(bold=True)
        out = 2
        for k in kpis:
            if sc in PLANTS and not k["plant"]: continue
            for c in range(1, 6): ws.cell(out, c, gk.cell(k["row"], c).value)
            for j in range(6):
                v = gk.cell(k["row"], 6 + j).value
                if k["alias_of"] and k["id"] in ALIASES:
                    cr = next(x["row"] for x in kpis if x["id"] == k["alias_of"])
                    v = f"=INDEX_PLACEHOLDER"  # replaced below
                ws.cell(out, 6 + j, str(v).replace("'Group Inputs'!", f"'{sc} Inputs'!"))
            ws.cell(out, 12, ", ".join(k["fields"]))
            k.setdefault("srow", {})[sc] = out; out += 1
        # alias rows point at the canonical row on the same sheet
        for k in kpis:
            if k["id"] in ALIASES and sc in k.get("srow", {}):
                cr = next((x["srow"].get(sc) for x in kpis if x["id"] == k["alias_of"]), None)
                for j in range(6): ws.cell(k["srow"][sc], 6 + j, f"={L(6 + j)}{cr}" if cr else "")
        ws.freeze_panes = "F2"
        for c, w in zip("ABCDE", (10, 40, 10, 12, 60)): ws.column_dimensions[c].width = w
    for k in kpis: k.setdefault("srow", {})["Group"] = k["row"]

    # ---- 5. evaluate
    b = Book(load_cells(wb), {})
    values = []
    for k in kpis:
        for sc, r in k["srow"].items():
            sheet = "Group KPIs" if sc == "Group" else f"{sc} KPIs"
            for j, per in enumerate(PER):
                v = b.value(sheet, 6 + j, r)
                values.append({"kpi": k["id"], "scope": sc, "period": per, "value": round(v, 4) if isinstance(v, float) else v})
    # "Without this child": parent recalculated from its other children's inputs (P06), in memory only
    cells = load_cells(wb); excl = {}
    for parent, kids in {"A1": ["Plant01", "Plant02", "Plant03"], "A2": ["Plant04", "Plant05", "Plant06"]}.items():
        for kid in kids:
            rest = [k2 for k2 in kids if k2 != kid]; vs = f"X{kid} Inputs"
            for c in range(1, gi.max_column + 1):
                for r in (1, 2, 3): pass
                for r in ROWS:
                    v = cells.get((f"{rest[0]} Inputs", c, r))
                    if c <= 4 or (isinstance(v, str) and not v.startswith("='Plant Inputs'")):
                        if v is not None: cells[(vs, c, r)] = v      # labels, days, building-block formulas
                    elif v is not None:
                        f = gi.cell(2, c).value
                        vals = [b.value(f"{x} Inputs", c, r) for x in rest]
                        cells[(vs, c, r)] = min(vals) if rules_min(gi, c) else sum(vals)
            for k in kpis:
                if not k["plant"] or "Plant01" not in k["srow"]: continue
                r = k["srow"]["Plant01"]; f6 = str(cells.get(("Plant01 KPIs", 11, r), ""))
                if k["id"] in ALIASES: continue
                cells[(f"X{kid} KPIs", 11, r)] = f6.replace("'Plant01 Inputs'!", f"'{vs}'!")
    bx = Book(cells, {})
    for k in kpis:
        if not k["plant"] or k["id"] in ALIASES or "Plant01" not in k["srow"]: continue
        r = k["srow"]["Plant01"]
        excl[k["id"]] = {kid: bx.value(f"X{kid} KPIs", 11, r) for kid in PLANTS}
    for k in kpis:
        if k["id"] in ALIASES and k["alias_of"] in excl: excl[k["id"]] = excl[k["alias_of"]]
    # P06 inputs per scope (YTD-summed when the KPI formula sums a range)
    inputs = {}
    for k in kpis:
        for sc in k["srow"]:
            sheet = "Group Inputs" if sc == "Group" else f"{sc} Inputs"
            canon_row = kpis[[x["id"] for x in kpis].index(k["alias_of"] or k["id"])]["row"]
            f6 = str(gk.cell(canon_row, 11).value)
            for f in k["fields"]:
                c = gfield.get(f)
                if not c: continue
                ytd = re.search(rf"\b{L(c)}\$4:{L(c)}9\b", f6)
                v = sum(b.value(sheet, c, r) for r in ROWS) if ytd else b.value(sheet, c, 9)
                inputs.setdefault(k["id"], {}).setdefault(sc, {})[f + (" (YTD)" if ytd else "")] = round(float(v), 2) if not isinstance(v, str) else v
    rules = {}
    for f, c in gfield.items():
        v = str(gi.cell(4, c).value or "")
        rules[f] = "MIN" if v.startswith("=MIN(") else "SQRT(Σσ²)" if v.startswith("=SQRT(") else "SAME" if re.match(r"^='Entity Inputs'!\w+$", v) else \
            "SUM" if v.startswith("=SUM('Entity") else "CALC" if v.startswith("=") else "INPUT"

    # ---- 6. UI map + catalogue sheets, save
    ui = json.load(open(os.path.join(HERE, "ui_kpis.json"))) if os.path.exists(os.path.join(HERE, "ui_kpis.json")) else []
    um = wb.create_sheet("UI KPI Map", 0)
    um.append(["KPI ID", "Measure", "Scopes shown in UI", "Screens", "Group P06", "A1 P06", "A2 P06", "Plant-level?", "Source"])
    vmap = {(v["kpi"], v["scope"]): v["value"] for v in values if v["period"] == PER[-1]}
    kby = {k["id"]: k for k in kpis}
    for u in ui:
        k = kby.get(u["id"])
        src = "missing" if not k else ("alias of " + k["alias_of"]) if k["alias_of"] else ("added (synthetic inputs)" if k["added"] else "source model")
        um.append([u["id"], k["name"] if k else "", u["scopes"], u["pages"], vmap.get((u["id"], "Group")), vmap.get((u["id"], "A1")), vmap.get((u["id"], "A2")),
                   "yes" if k and k["plant"] else "no", src])
    for c, w in zip("ABCDEFGHI", (10, 46, 22, 40, 14, 14, 14, 12, 26)): um.column_dimensions[c].width = w
    um.freeze_panes = "A2"
    ab = wb["About"]
    ab.append(["KPI-Model.xlsx (data/kpi-model/build_kpi_model.py): adds per-scope input sheets (A1, A2, Plant01–06 Inputs) and KPI sheets with the same formulas, "
               "the green synthetic inputs and KPIs the UI needed, and the UI KPI Map. Plant KPI sheets only list KPIs whose inputs all exist at plant level."])
    wb.save(OUT)

    with open(os.path.join(HERE, "kpi_values.csv"), "w", newline="") as fh:
        w = csv.DictWriter(fh, fieldnames=["kpi", "scope", "period", "value"]); w.writeheader(); w.writerows(values)
    with open(os.path.join(HERE, "kpi_catalogue.csv"), "w", newline="") as fh:
        w = csv.writer(fh); w.writerow(["kpi", "measure", "unit", "time_basis", "formula", "inputs", "alias_of", "plant_level", "added_by_model"])
        for k in kpis: w.writerow([k["id"], k["name"], k["unit"], k["basis"], k["how"], ", ".join(k["fields"]), k["alias_of"] or "", k["plant"], bool(k["added"])])
    json.dump({"kpis": [{x: k[x] for x in ("id", "name", "unit", "basis", "how", "fields", "alias_of", "plant", "added")} for k in kpis],
               "values": values, "inputs": inputs, "rules": rules, "excl": excl,
               "scopes": {"Group": "Group", "A1": "Entity A1", "A2": "Entity A2", **{p: v[0] for p, v in PLANTS.items()}},
               "children": {"Group": ["A1", "A2"], "A1": ["Plant01", "Plant02", "Plant03"], "A2": ["Plant04", "Plant05", "Plant06"]}},
              open(os.path.join(HERE, "kpi_model.json"), "w"), ensure_ascii=False)
    n_ui = len(ui); miss = [u["id"] for u in ui if u["id"] not in kby]
    print(f"KPIs {len(kpis)} · values {len(values)} · UI KPIs {n_ui}, missing {miss}")


def rules_min(gi, c):
    return str(gi.cell(4, c).value or "").startswith("=MIN(")


def scope_sheets(wb, gi, ei, pi, gfield, efield, pfield, BLUE, new):
    """'<scope> Inputs' sheets with Group Inputs' exact column layout."""
    G_LAST = gi.max_column
    for sc, (name, r0, nwc) in ENT.items():
        ws = wb.create_sheet(f"{sc} Inputs")
        for r in (1, 2, 3):
            for c in range(1, G_LAST + 1): ws.cell(r, c, gi.cell(r, c).value)
        for m, r in enumerate(ROWS):
            ws.cell(r, 1, name); ws.cell(r, 2, gi.cell(r, 2).value); ws.cell(r, 3, gi.cell(r, 3).value); ws.cell(r, 4, gi.cell(r, 4).value)
            for c in range(5, G_LAST + 1):
                f = gi.cell(2, c).value
                if c in BLUE:
                    ws.cell(r, c, str(gi.cell(r, c).value).replace("Parameters!$B$7", f"Parameters!{nwc}"))
                elif f in efield:
                    ws.cell(r, c, f"='Entity Inputs'!{L(efield[f])}{r0 + m}")
        ws.cell(3, 1, f"Same layout as Group Inputs; inputs link to Entity Inputs ({name}); blue building blocks use the same formulas.")
    for sc, (name, r0) in PLANTS.items():
        ws = wb.create_sheet(f"{sc} Inputs")
        for r in (1, 2, 3):
            for c in range(1, G_LAST + 1): ws.cell(r, c, gi.cell(r, c).value)
        for m, r in enumerate(ROWS):
            ws.cell(r, 1, name); ws.cell(r, 2, gi.cell(r, 2).value); ws.cell(r, 3, gi.cell(r, 3).value); ws.cell(r, 4, gi.cell(r, 4).value)
            for c in range(5, G_LAST + 1):
                f = gi.cell(2, c).value
                if c in BLUE: ws.cell(r, c, gi.cell(r, c).value)
                elif f in pfield: ws.cell(r, c, f"='Plant Inputs'!{L(pfield[f])}{r0 + m}")
        ws.cell(3, 1, f"Same layout as Group Inputs; inputs link to Plant Inputs ({name}). Entity-only inputs are blank, so KPIs that need them are not calculated at plant level.")


if __name__ == "__main__":
    main()
