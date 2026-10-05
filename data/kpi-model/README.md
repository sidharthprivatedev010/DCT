# KPI model: every KPI on the screens, bottom up (Plant → Entity → Group)

This model supersedes `data/plant-model/export_to_prototype.py`. The plant model is still the plant data source: its 40 base measures are unchanged in the source workbook.

## Source and outputs

| File | What it is |
|---|---|
| `data/kpi-model/Group-KPI-Model.xlsx` | Source workbook: plant inputs, entity-only inputs (finance, cash, treasury, capex, programmes, contracts, controls, governance, data trust, workflow), Group building blocks and 149 Group KPI formulas |
| `build_kpi_model.py` | Builds the full model and evaluates every formula |
| `xleval.py` | Small Excel formula evaluator. It matches the workbook's cached results on all 149 Group KPIs |
| `KPI-Model.xlsx` | The workbook with live formulas. Sheets are described below |
| `kpi_values.csv` | Every KPI × scope × month (P01–P06), 5,580 values |
| `kpi_catalogue.csv` | KPI, measure, unit, time basis, formula, inputs, alias, whether it is plant-level, whether it was added by this model |
| `kpi_model.json` | The same data plus P06 inputs per scope, roll-up rules and "without this child" values (read by the exporter) |
| `ui_kpis.json` | The 170 KPI IDs found on the screens, with their scopes and pages |
| `export_to_prototype.py` | Writes everything into `js/data/base-data.js` and regenerates `data/HARDCODED-VALUES.md` |

### Sheets in `KPI-Model.xlsx`

- **UI KPI Map:** every KPI on the screens, with its Group, A1 and A2 values and its source (source model, alias or added).
- **Group KPIs:** the source's 149 rows, plus 12 added KPIs and 9 alias rows (green).
- **A1 KPIs, A2 KPIs, Plant01–06 KPIs:** the same formulas pointing at that scope's inputs. Plant sheets list only the 70 KPIs whose inputs all exist at plant level.
- **A1 Inputs, A2 Inputs, Plant01–06 Inputs:** the same column layout as *Group Inputs*.
  - Inputs link to *Entity Inputs* or *Plant Inputs*.
  - The blue building blocks (EBITDA, EBIT, NWC, FCF, net debt, DSO/DPO/DIO …) use the Group formulas. Opening NWC comes from *Parameters* B5 (A1) and B6 (A2).
- **Group Inputs, Entity Inputs, Plant Inputs, Parameters, About:** from the source. New input columns are green.

## Rules

1. **Recompute KPIs, never average them.** A KPI is always recalculated from its scope's inputs and never averaged across children. Group inputs are the SUM of A1 and A2, except:
   - MIN for days to permit expiry, days to breach and the disclosure clock;
   - the same value for an external index;
   - √Σσ² for forecast uncertainty.
2. **Entity inputs:** entity plant-type inputs are the sum (or MIN) of the entity's three plants. Entity-only inputs exist only at entity level, so those KPIs stop at the entity.
3. **Same formula at every level:** one formula per KPI, applied to Group, A1, A2 and, where possible, plants.
4. **Time basis:** taken from the source (Month, Month end, Year to date, Forecast, Next 30/90 days …). YTD formulas sum P01…Pn.
5. **"Without this child":**
   - For an entity, the KPI is recalculated from the other two plants' inputs.
   - For the Group, it is the other entity's value.

## The 12 KPIs added (UI showed them; source had no formula)

| KPI | Formula |
|---|---|
| CST-005 Fixed cost YTD (₹ m) | Σ fixed_cost_k since April ÷ 1000 |
| PRD-008 Projected FCF gap, FY (₹ m) | (Σ FCF YTD + forecast FCF rest of year − FY FCF plan) ÷ 1000 |
| PRD-009 ROCE at P12 (%) | (Σ EBIT YTD + forecast EBIT rest of year) ÷ forecast capital employed P12 × 100 |
| PRD-010 Revenue per FTE YTD (₹ m) | Σ revenue YTD ÷ FTE ÷ 1000 |
| PRD-011 Tonnes per FTE (t) | good output ÷ FTE |
| PRD-012 Probability of EBITDA plan miss, FY (%) | NORM.DIST(FY plan; EBITDA YTD + forecast rest; σ) × 100 |
| REG-011 Disclosure clock (h) | hours to nearest open disclosure deadline (999 = none) |
| SIG-010 Single-source supply risk | single-source suppliers with cover below lead time |
| SIG-014 Commodity-price movement (% MoM) | RM-1 index ÷ last month − 1 |
| SIG-016 Freight exposure | lanes with a disruption flag |
| SIG-017 Fuel exposure (% MoM) | (fuel cost ÷ good output) ÷ last month's − 1 |
| SIG-018 Power-cost exposure (% MoM) | (power cost ÷ good output) ÷ last month's − 1 |

The synthetic inputs behind them, and all aliases, are listed in `data/HARDCODED-VALUES.md`.

## In the prototype

- **Cards, KPI tables and tiles:** show the model value for their scope (Group on Owner and Core Group screens, A1 on Entity screens; A2 or a plant when the label names it).
- **Display units and targets:** set in `SPEC` in `export_to_prototype.py`.
  - Plant KPIs keep the units and targets agreed earlier.
  - ₹ thousand is shown as ₹ m, t as kt, m³ as '000 m³.
  - The business status rule is the same as in `data/plant-model/Data-Model-Methodology.md` §5.2.
- **Trust state:**
  - Plant-level KPIs are certified P06 actuals.
  - Entity-level KPIs keep the trust state the screens already had, because certification is a governance state, not a number.
- **Roll-up tab:** every Entity, Core Group and Owner page has a "Roll-up · P06" tab. It shows each KPI on the page for the plants, the entity (Σ) and the Group (Σ). "—" means the KPI has no value at that level.
- **Click-through:** every value links to that lens's KPI detail page (S-03e, S-03 or S-03o), which shows:
  - the roll-up chain
  - the calculation from inputs upward
  - each child's effect
  - monthly values, definition, lineage and trust

## Rebuild

```
python3 data/kpi-model/build_kpi_model.py
python3 data/kpi-model/export_to_prototype.py
node tools/regen.js
```

If the plant data changes, rebuild `data/plant-model` first and paste `plant_base.csv` into the source workbook's *Plant Inputs* (first 40 columns).
