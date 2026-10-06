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

## Download report per persona

- **Download report** button in the header of all six templates (shown wherever the page has a lens). It downloads a PDF for the signed-in persona: `Control-Tower-Owner-Report-<date>.pdf`, `…-Core-Group-…`, `…-Entity-A1-…`.
- `js/report.js` builds the PDF in the browser (jsPDF + autoTable, bundled in `js/vendor/`, loaded on first click). Content comes from the lens home page (O-01, G-01, E-01: status by area, headline KPI cards, forecast, actions) resolved through `DCTResolve`, and from `base-data.js`: a summary count, exceptions, and the persona scorecard by theme.
  - Owner: Group scorecard.
  - Core Group: Group vs Entity A1 vs Entity A2, with status per entity.
  - Entity: Entity A1 scorecard plus plant comparison (Plant 01–03).
- The PDF uses the standard fonts, so `₹` prints as `INR` and the status symbols (▲ ◆ …) are written out or dropped.

## MANIFEST06 · Core Group persona (2026-10-06)

- Core Group capped at Entity like the Owner (`CAPL` lens policy in `resolve.js`); plants appear only in the new **plant watchlist** block (G-05, S-12, G-07), filled from the model, at most 5 rows.
- 25 tier R and 8 alias KPIs removed from Core Group screens and from the Core Group KPI Reference (112 KPIs, scopes Group / A1 / A2).
- G-05 rebuilt around entities (production by entity, Entity × KPI benchmark, reliability and supply by entity). G-01, G-02, G-03, G-04, G-06, G-07, G-08, G-09, G-10, S-03, S-04c, S-05c, S-06, S-07c, S-08 cleaned of plant, line, material and supplier codes, placeholders and hand-set charts.
- Every Core Group status has a one-line justification (`node tools/build_verdicts.js core_group`).
- New check `tools/check_core_group.js`, run from `tools/check_all.js`.

## Entity persona: plant breakdown, justifications and root causes on every KPI card (2026-10-06)

Baseline: `data/KPI-Lineage-Model.xlsx` (KPI register, lineage plant → entity → Group). Its calculated values match `base-data.js`; the "Shown on the screen" column there is the stale hand-set page JSON that `resolve.js` overwrites. Scope: Entity lens only.

- New `js/data/entity-cards.js`, loaded on all 19 Entity screens and applied by `resolve.js` to every Entity card:
  - **One-line justification** under the status (e.g. "Production vs plan: 91.3% against a ≥100% target (−8.7 pts); Plant 02 (78.4%) accounts for 7.6 of the 8.7 pts gap").
  - **By plant · Sep** block: Plant 01–03 value (red when off target), change vs Aug, and the plant's effect on Entity A1. Ratio KPIs: effect in pts/units, adding up to the entity gap; summed KPIs: share; MIN KPIs: the plant that sets the value.
  - Entity-only KPIs show their **plant driver** (EBITDA/EBIT/FCF → revenue by plant, ROCE → capacity utilisation, collections → sales vs plan, DSO → dispatch delays, upstream exposure and EBITDA gap → production at risk) or state that the model holds no plant split, with the plant link where there is one.
  - **Root cause** box when the KPI is off target or worsening, or one plant misses target (e.g. OEE on track but Plant 02 at 70.3%). Written from model numbers (downtime, breakdowns, MTTR, PM jobs, output, dispatches, order lines, lead times, permit days, EHS actions) plus case facts quoted from the screens.
- **KPI cards are stand-alone** on Entity screens: the (i) link to KPI Reference and the click-through are removed. Owner and Core Group cards are unchanged.
- Plant-scoped cards re-scoped to Entity A1 so the plant split shows inside them: E-02 "OEE · Plant 02" → OEE, S-12e "Days to breach · Plant 02" → earliest plant, E-05 "Production at risk · Plant 02" → Production at risk, E-04 "Lead-time variance · S-07" → Supplier lead-time variance, E-01 "Sales vs plan · MTD" → Sales vs plan, "Critical-material shortage risk · RM-1" → Critical materials at shortage risk.
- Card markup in all six templates: plant block, note and root-cause box; KPI rows with a plant block get a 268 px minimum card width.
- Disclosure clock (REG-011) trend shows "Started in Sep" instead of "▼ 961" (999 placeholder).
- New check `tools/check_entity.js`, run from `tools/check_all.js`.


## Entity sub-theme drill-downs (2026-10-06)

Each sub-theme now goes one level deeper than the screen above it (Entity Overview → screen → sub-theme → plant → asset, customer or record). Plant tables and trend charts are model-bound; every derived figure is calculated from `base-data.js` and reconciles to the model (totals checked when the content was written). Hand-set story detail is registered in `data/HARDCODED-VALUES.md`.

- **Early Warning (S-12e), 03–07:** signal matrices extended (SIG-001 now Elevated). Operations: signals by plant, downtime trend by plant, the 5 open plant-state alerts by asset, how the signals connect. Finance: EBITDA gap allocated by plant, predictions vs thresholds, covenant headroom maths and sensitivity, collections slippage. Sales: by plant, dispatch-delay trend, customer orders at risk. Outside factors: by plant, external watch-list with sensitivities. Risk: by plant, clocks running by plant.
- **Cash & Liquidity (E-05):** "How totals add up" removed. Deliveries: billing at risk by customer group, by plant, dispatch trend. Customer payments: receivables ageing (= DSO × revenue per day), the 2 customers > 30 days overdue, DSO trend. Cash tied up: cash levers recomputed from the model (the old ₹41.3/31.3/17.3 m bars were inconsistent), NWC bridge Aug → Sep. Cash and debt: runway build-up, debt-maturity ladder, upstream obligation. Currency: FX by currency, interest-rate exposure.
- **Operational Performance (E-02):** "How totals add up" removed. Cost: by plant, cost per tonne at actual vs at planned output (Plant 02's cost gap is lost volume, not overspend), Plant 03 → Plant 02 bridge, trend. Environment: by plant, intensity per tonne, energy-intensity trend, excursion ENV-SYN-0077.
- **Capital Projects (E-06):** "How totals add up" removed. Benefits: register that adds up to PRG-002, shortfall by plant, realisation trend. Improvement programmes: all 8 initiatives (matching PRG-005), root causes of the 3 slipping ones, milestone trend.
- **Risk, Compliance & EHS (E-07):** "How totals add up" removed. Health and safety: by plant, incidents and investigations, overdue actions by plant and age, trend. Permits: by plant, permit and licence register, regulator interactions. Controls: audit findings, control events by plant, P07 items not yet in the YTD count. Contracts: expiring, non-compliant, supplier performance by plant. Environment: compliance by plant, water use vs permit, excursion detail.
- **Actions & Escalations (E-09):** open work by plant, other open items in scope, escalation ladder, closed-issue log (shows the repeat P02-03 kiln stop), resolution-time trend. Root-cause table now agrees with EFF-011 (4 of 4 Apr–Sep; 2 opened in Oct).
- Engine: `noRollup: true` on a page drops the "How totals add up" tab; a `multi` chart with `kpi` takes each series (labelled Plant NN / Entity A1) from the model. New chart rules in `chart_sources.json`.

## Entity tables: every code carries its name (2026-10-06)

- `labelTables()` in `resolve.js`, Entity lens: plants carry a code like entities do ("Plant 02 (P02)", matching asset IDs P02-03); a KPI code with nothing after it gets the model's name ("REG-004 Regulatory obligations due, next 30 days"; in lists the name is in brackets); the roll-up column reads "Entity A1 (A1) · Σ".
- Identifying cells in the first three columns (KPI code and measure, plant, entity, Group) are semi-bold: new cell flag `b` in all six templates.
- `tools/check_entity.js` fails on a bare KPI code or an uncoded plant in any Entity table.

## AI Insights (S-13): questions on the top Overview KPIs (2026-10-06)

- Question picker "Questions on the top Overview KPIs" (a `seg` block) with 4 mocked questions on EBITDA YTD, EBIT YTD and production vs plan. Each answer is tagged by provenance (CERT, FCST, DECLINED, AI · NOT APPROVED) and has charts: EBITDA by month and the E-11 plan-to-actual bridge; EBITDA → EBIT waterfall and monthly EBITDA vs EBIT; production shortfall by plant and the plant trend (model-bound); EBITDA/EBIT upside by Plant 02 output level with its calculation.
- All figures come from the model (contribution ₹886/t; Plant 02 needs about 85.9% of plan to close the ₹48.5 m PRD-003 gap). The same 4 questions are in the Ask box.
- The Ask box answer "Where can I release cash?" now uses the E-05 cash levers from the model (it still quoted the old ₹41.3/31.3/17.3 m).

## Core Group persona: plants with a variation, named codes, sub-theme detail (2026-10-06)

Relaxes MANIFEST06 1A/1B (plants only in the watchlist): Core Group now shows plants wherever they **show a variation**, never the full plant detail (that stays in the Entity lens). No root causes in this lens.

- **Variation rule** (`DCTEntityCards.variations`, js/data/entity-cards.js): a plant misses the KPI target by more than 2% of it (any amount for a zero target); without a target, a 10%+ adverse move vs Aug or 25%+ worse than the plant median (not for size-driven totals: water, emissions, revenue, cost totals); pricing pressure Medium/High.
- **KPI cards** (all Core Group screens): stand-alone (no links); existing one-line justification kept; "Plants with a variation" rows (plant, value, gap to target or trend) and a note grouping them by entity. Entity-only KPIs use their plant driver (as in the Entity lens) or say they have no plant split.
- **Tables**: names against every KPI code, plant codes P01–P06, watchlist rows read "Plant 02 (P02) · Entity A1 (A1)", identifiers semi-bold (same rule as Entity).
- **Sub-themes** (G-01, G-02, G-03, G-04, G-05, G-06, G-07, G-08, G-09, S-12; 35 sub-themes): entity comparison (Entity A1 vs Entity A2 vs Group, model-bound), "Plants with a variation" table (new `kvar` table, filled from the model), trend by entity, and a reading computed from the model. Nothing removed.
- Engine: `kvar` tables; `plantOk` marks plant-variation content that the Core Group cap keeps. `tools/check_core_group.js` allows plants only there, in watchlists and in card variation fields, and now also checks named codes in tables and stand-alone cards without root causes.

## Sign-in page (2026-10-07)

- New `login.html`: enterprise sign-in card (username, password with show/hide, Caps Lock hint, "keep me signed in", inline errors) over the lighthouse dawn-light background (`img/login-lighthouse-dawn.svg`, copied from `data/Login Page/lighthouse/lighthouse-dawn-light-static.svg`; its palette is the app's tokens). No logo.
- Credentials are in `login.html` itself (`DCT_USERS` at the top of its script), so sign-in works when the file is opened from disk. Only a successful sign-in opens the persona screen; `?next=` deep links are carried through.
- The old persona chooser is now `personas.html` (sign-in gate, "Sign out" link, signed-in user shown). `js/persona.js` sends signed-out users to `login.html` and signed-in users without a persona to `personas.html`. The header "Sign out" chip signs out fully (back to `login.html`).
- This is a prototype gate, not security: the credentials are readable in the page source.
- Sign-in layout: split screen. Left half is the lighthouse scene (full height, stays in place while the right side scrolls), right half is the sign-in card centred on the app background; on screens narrower than 900 px the scene becomes a banner above the card. Fits a 1280 × 720 screen without scrolling.
