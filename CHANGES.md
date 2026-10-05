# Changes — branch `feature/themes-gap-priority-fixes`

Everything changed against the original prototype (`e104438 first commit`), grouped by theme. Commit hashes in brackets.

## 1. Gap closure against Themes.txt [4974c23, 83fb797]

**Priority fixes**
- ROCE and EBIT cards added to Owner home (O-01) and Entity home (E-01).
- EBITDA → FCF → ROCE diagnostic chart (new `multi` chart type: indexed lines + AI reading) on O-01 and E-01.
- New page **O-09 Operations and Assets** (Owner): production, OEE, capacity, reliability, cost, supply and sustainability, with drill tabs. Replaces the old sidebar target (S-10, a single incident page).
- New page **E-11 Entity Financial Health**: revenue/EBITDA/EBIT/FCF/ROCE, EBITDA bridge, revenue forecast, profitability by plant.
- Treasury and liquidity KPIs and charts on the cash pages; value-delivered measures on capex pages; governance KPIs on assurance pages.
- Every KPI card now shows a **confidence %** chip (defaulted from trust state) and an **actual-vs-plan sparkline**.
- **Four-way summary** (On track / Deteriorating / Improving / Requires intervention) under each status strip.
- Card limit is configurable per page (`kpiMax`) instead of a fixed 6.

**Remaining gaps**
- Risk: six-dimension materiality matrix and driver breakdown.
- No-Surprises: Cause / Impact / Action change reports.
- Actions: escalation-effectiveness KPIs.
- AI Insights: live **Ask** widget (suggested questions, typed answers, declines out-of-scope or uncertified questions) and agent activity audit log.
- Core Group: margin and ROCE by entity tab on G-02.

**Bug fixed**: the forecast band on line charts could spill outside the plot area; it now scales to the axis range.

## 2. Single source of truth for numbers [b6f8b3c]

- `js/data/base-data.js` holds every KPI value once, by KPI ID and scope (`Group`, `A1`, `Plant02`, plus `#t7` point-in-time variants).
- `js/data/resolve.js` (`DCTResolve`) overwrites KPI cards, table rows and tiles on every page from base-data at render time.
- All six templates call `DCTResolve`; all pages load both scripts in `<head>`.

## 3. Consistency audits [2240bd6, 53ba9cc]

- Wrong or invented KPI IDs corrected (FIN-010→FIN-005, REL-004→REL-005, SUP-004→SUP-007, SUP-005→SUP-008, SUS-001/2/3 order, PRD-002 duplicate → PRD-012); duplicate EHS-003 rows removed.
- Entity EBITDA margins on G-02 recalculated so they roll up to the Group's 15.0%.
- Stale "N of M cards certified" headlines recounted (E-01, O-04, E-06, O-09).
- Lens-switcher links repointed to O-09 and E-11; the S-12e signal count is now computed from its table.

## 4. Sidebar [309ec41, 811123f]

- Order and names follow mockup_v2: Enterprise Overview · Data Assurance · Early Warning · Cash & Liquidity · Operational Performance · Capital Projects · Risk, Compliance & EHS · Actions & Escalations, then AI Insights.
- Owner lens: duplicate **Home** link removed (it opened the same page as Enterprise Overview).
- Core Group: Home → **Group Portfolio**. Entity: Home → **Entity Overview**, Enterprise Overview → **Financial Health**.
- Script URLs carry `?v=<timestamp>` so browsers don't serve stale templates.

## 5. Page layout [1f752ed, 44aa5a3]

- Home pages (O-01, G-01, E-01) group KPI cards and charts under numbered theme sections like mockup_v2 01: Financial, Performance reading, Operational, Strategic / Data assurance, Risk, Last 24 hours. No content removed; drill tabs and actions unchanged.
- KPI cards stretch to fill each row.
- Status strip and four-way summary are folded into a collapsed **Status overview** bar with a one-line count; click to expand.

**Tried and reverted** [dd58d90 → 2fd5544]: showing the four-way summary only on home pages and giving O-03/O-04/O-05 topic-specific strips.

## 6. Guided tours [7c7b4a3, d34920f, 4975030]

- Tours are hidden by default. Start one from the new **Tour ▾** header menu (Primary business journey, Data Assurance journey) or from the "Start guided tour" buttons on P2-00. Tour mode is set by `#tour` in the URL and remembered per browser tab.
- **Close tour ✕** is the only way out: it ends tour mode and keeps you on the current page at the same scroll position. The old "Exit tour" link was removed.
- Content refresh:
  - "Number Assurance journey" is renamed **Data Assurance journey**.
  - Step 1 points to the production card in the new Operational section.
  - Step 5 now opens **O-09 Operations** instead of S-10, with new step text.

## 7. Currency [b90c8c4]

- The placeholder currency "CU" is replaced by **₹** (Indian rupees) everywhere: page data, base-data, the screen reference doc and the scenario glossary (₹ m = Indian rupees, millions). Values and the "m" scale are unchanged; converting to ₹ Cr was considered and not done.

## 8. Docs and tooling [6aeff56]

- `docs/Control Tower Screen Reference.docx`: per-screen table (Content | What it shows | Why it matters), updated for the new sidebar order and names, the themed home sections and the collapsed Status overview.
- `CLAUDE.md`: how pages render, the data layer and the conventions.
- `tools/regen.js`: rebuilds every page's static HTML and bumps the `?v=` cache tag. Run it after any change in `js/`.

## Repo

- Backup of the original main: branch `backup/main-2026-10-03`.
- Pull request to main: #1, open.

## Parked

- Option to go the other way from mockup_v2: keep only headline cards and the main chart visible, and move other blocks into tabs named after the mockup sub-areas. Open questions: should home-page sections become tabs, and should the tab panel start closed in every lens?

## Plant-level data model drives Entity screens

- New `data/plant-model/`: mock plant data (Plants 01–03 → Entity A1, Plants 04–06 → Entity A2 → Group), monthly P01–P06. Entity and Group values are recalculated from summed plant inputs. See `Data-Model-Methodology.md` and the calculation trace `kpi_calculations.csv`.
- `export_to_prototype.py` writes the plant KPIs (31 IDs, plus aliases SIG-001/002/003) into `base-data.js` for scopes `A1`, `Plant01`, `Plant02` and `Plant03`, and adds `DCTData.plant` (monthly series, formulas, inputs). Trust fields are left unchanged.
- `resolve.js`:
  - Plant scope is detected for any "Plant NN", not only Plant 02.
  - On Entity screens, plant-KPI cards and table IDs link to `P2-S03e-KPIDetail.html?kpi=ID&scope=…`.
  - E-pages get a **Plant KPIs · P06** tab (Plant 01/02/03 vs Entity A1).
- S-03e builds from the plant model when opened with `?kpi=`. It shows entity and plant cards, a monthly chart, a calculation table (plant inputs → entity sum → result), monthly values and the definition.
- Regenerate: `python3 data/plant-model/build_plant_model.py && python3 data/plant-model/export_to_prototype.py && node tools/regen.js`.

## Bottom-up numbers across all lenses (plant → entity → Group)

- Hierarchy is now Group → Entity A1 (Plants 01–03) and Entity A2 (Plants 04–06). Entities B1–C2 and Businesses B and C are removed; their items are reassigned to A1 or A2.
- `export_to_prototype.py` writes all 31 plant KPIs (plus aliases SIG-001/002/003, OPS-005, OPS-006) for 9 scopes into `base-data.js`. Group and entity values are recalculated from plant inputs.
- `resolve.js`:
  - Model-bound tables (`kcols`) and bar charts (`kpi`).
  - A roll-up tab on Entity, Core Group and Owner pages.
  - Click-through to the lens's own KPI detail page (S-03e, S-03 or S-03o) with `?kpi=&scope=`. The page shows the chain, calculation, contribution, monthly values, lineage and trust.
  - Trust headers are recomputed from the cards.
- Narrative rewritten to the data:
  - Group 95.5% of plan in P06.
  - Plant 02 at 78.4% (reliability-led, with RM-1 cover as a secondary risk) accounts for 26.2 kt of the 29.4 kt gap.
  - The P07 flash/BRK-SYN-0071 story is kept and scaled to Entity A1.
- Non-derivable values are listed in `data/HARDCODED-VALUES.md`. The methodology now covers display, targets, status rules, aliases and child effect (`data/plant-model/Data-Model-Methodology.md` §5–6).

## Every screen KPI calculated bottom-up (data/kpi-model)

- New `data/kpi-model/` built from `data/kpi-model/Group-KPI-Model.xlsx`. It covers all 170 KPI IDs on the screens for Group, Entity A1 and A2, and for Plants 01–06 where the inputs exist (70 KPIs), P01–P06.
  - The 12 UI KPIs the workbook lacked got formulas and synthetic entity inputs. The 9 catalogue aliases are mapped to their canonical KPI.
  - `KPI-Model.xlsx` keeps live formulas, with per-scope input and KPI sheets and a UI KPI Map.
- `base-data.js` now holds model values for every KPI and scope.
- `resolve.js`:
  - Roll-up tab and click-through cover all KPIs. Entity-only KPIs stop at the entity.
  - Text-valued KPIs are supported.
  - Fixed: the roll-up tab was skipped on G-03.
- Re-applied the page edits (hierarchy A1/A2, story, model-bound tables, detail-page hooks) that had been lost from `js/c/`.
- Narrative updated to the model's finance figures:
  - EBITDA gap −₹56.2 m (A1 −48.5, A2 −7.7)
  - EBITDA YTD ₹1,760.1 m
  - FCF ₹606.2 m
  - upstream ₹27.2 m
  - net debt ÷ EBITDA 1.89×

## KPI Reference page and data clean-up

- New **R-01 KPI Reference** page in three lens versions (`P2-R01o`, `P2-R01`, `P2-R01e`). It lists every KPI with its ID, formula, inputs and roll-up rule, value, change vs the previous month, and the screens it appears on.
  - Lens, Scope, Theme and Period are dropdowns (new `menus` block type in all six templates). Level, source and KPI-set filters are buttons.
  - Every value links to its calculation.
  - It opens from a small muted icon under the sidebar legend and from the index page.
- Tables accept `rowsMax` (all six templates).
- Moved the redundant plant-model outputs and old exporter to `data/redundant/` (see its README).
  - The source workbooks now live in `data/kpi-model/`.
  - `data/kpi-model/scan_ui.js` lists the KPIs and screens.

## Persona login (Owner, Core Group, Entity)

- New `login.html`: choose a persona (Owner, Core Group Executive, Entity Executive · A1). It is stored in `localStorage["dct-persona"]`.
- The header Lens menu is replaced (all six templates) by a persona chip with **Sign out**, which goes back to `login.html`.
- New `js/persona.js`, loaded on every lens screen (not P2-00, P2-X, P3-00/01, P1 pack). With no persona it sends you to login. A screen from another lens redirects to its closest equivalent in your lens (taken from the page's `equiv`), or to your home.

## Status overview removed

- Removed the collapsed **Status overview** bar (status strip and four-way summary) from all six templates, so it no longer appears on any page.
- `docs/Control Tower Screen Reference.docx` updated to match.
