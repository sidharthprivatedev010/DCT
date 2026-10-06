# Digital Control Tower prototype

Static HTML prototype for a leadership "control tower" across three lenses: **Owner** (group summary), **Core Group** (comparative) and **Entity** (Entity A1, working depth). All data is synthetic. There is no build step or framework: open any `.html` file, or serve the folder (`python3 -m http.server`).

## How a page renders

- `P2-*.html` holds a pre-rendered snapshot, but on load `DCLite.mount("dc-root", "<Page>")` wipes `#dc-root` and redraws it from JS. **Never edit page HTML by hand**; it gets overwritten.
- `js/dc-lite.js`: a small template engine (`sc-for`, `sc-if`, `{{holes}}`). It keeps `<details>` open/closed state across re-renders.
- `js/c/TplA.js` … `TplF.js`: the six shared page templates. Each holds the header, sidebar, block renderers and helpers (`conf()`, `spark()`, `four()`, `bizStyle()`, `trustStyle()`). A change to shared UI must be applied to **all six**; they are near-identical copies.
- `js/c/<Page>.js`: one data file per page, `renderVals()` returning `{ page: {...JSON...} }`. Keys: `lens, nav, title, q, trust, strip, kpis, dominant, drivers, forecast, actions, drill[{n, blocks}], access, equiv`, plus optional `sections`, `kpiMax`, `dataAt`.
- Block types: `line, multi, bars, waterfall, table, tiles, alerts, kv, text, chain, buttons, menus, decision, ask`. Tables accept `rowsMax` (default row limit is per lens). Most blocks carry `ask` (the question the block answers) and `cap` (caption).

## Numbers: single source of truth

- `js/data/base-data.js`: every KPI value, keyed `kpi[ID][scope]`.
  - Scopes are `Group`, `A1`, `A2` and `Plant01`–`Plant06`; `scope#t7` is a point-in-time variant chosen by the page's `dataAt`.
  - KPI values and `DCTData.plant` (formulas, inputs, roll-up) are **generated** by `data/kpi-model/` (see its README). Rebuild with `build_kpi_model.py` then `export_to_prototype.py`.
- `js/data/resolve.js` (`DCTResolve`) fills KPI cards, table rows (first cell is a KPI ID) and tiles (label starts with an ID) from base-data. **To change a KPI value, change the model's inputs and rebuild.** Hand edits to model KPIs are overwritten. Values the model doesn't calculate are listed in `data/HARDCODED-VALUES.md`.
- KPI IDs must match the catalogue meaning (P1-R1-KPICatalogue). Don't reuse an ID for a different measure, and keep the margin, EBITDA and certification counts consistent across pages.

## Data model (data/)

**Hierarchy:** Group → Entity A1 (Plants 01–03) and Entity A2 (Plants 04–06). That's all of it: Entities B1–C2 and Businesses B/C were removed. "Business A" in breadcrumbs means the Group. The Entity lens sees only A1 and its plants (C-05).

**Periods:** P01–P06 = Apr–Sep 2026. P06 is the latest certified month, and cards show P06. P07 is "now" in the story (flash, forecasts), but it is outside the model.

**Where the data lives:**

| What | File | Notes |
|---|---|---|
| **Master inputs** | `data/kpi-model/Group-KPI-Model.xlsx` | Sheets: *Plant Inputs* (77 cols, plant master), *Entity Inputs* (plant-type cols = Σ of 3 plants; yellow cols are entity-only: finance, cash, treasury, capex, governance, workflow…), *Group Inputs* (Σ A1+A2, plus blue building blocks such as EBITDA, NWC, FCF, net debt), *Group KPIs* (formulas), *Parameters* (tax, WACC, covenant, opening NWC). `Owner-KPI-Model.xlsx` is the Owner-screen view of the same model. |
| Build | `data/kpi-model/build_kpi_model.py` | Adds 11 synthetic entity inputs (`NEW_INPUTS`), 12 KPIs the workbook lacked (`NEW_KPIS`) and 9 aliases (`ALIASES`). Writes `KPI-Model.xlsx` (live formulas, per-scope sheets, UI KPI Map), `kpi_values.csv`, `kpi_catalogue.csv` and `kpi_model.json`. |
| Formula engine | `data/kpi-model/xleval.py` | Evaluates the workbook formulas in Python. It matches Excel on all 149 source KPIs. There is no LibreOffice here, so use this to check formulas. |
| UI scan | `data/kpi-model/scan_ui.js` | Lists the KPI IDs, screens and graphs in the UI (170 IDs, 64 graphs, 57 screens). Rerun it when pages gain or lose KPIs. |
| Tables and tiles | `data/kpi-model/ui_blocks.json` → `DCTData.plant.blocks` | Written by `scan_ui.js`; `export_to_prototype.py` derives each block's source (live KPI rows, hand-set, or not KPI data) from what it carries. Shown on R-01 behind the (i) buttons. |
| Graph sources | `data/kpi-model/chart_sources.json` | How each graph gets its numbers: live, model, scaled, illustrative or layout, matched on the title. Shown on KPI Reference (R-01). When you add or retitle a graph, add a rule; unmatched graphs show as "Not yet classified". |
| Page figures | `data/kpi-model/sync_pages.py` | Rewrites charts and story numbers in `js/c/*.js` from the model (bound or scaled). Rerun after every rebuild. |
| To prototype | `data/kpi-model/export_to_prototype.py` | Writes `base-data.js` (cards for P06 + `DCTData.plant`). Display units, targets and better-direction are in `SPEC`. Keeps existing trust (`ts`/`prov`) for entity-level KPIs. Regenerates `data/HARDCODED-VALUES.md`. |
| Not derivable | `data/HARDCODED-VALUES.md` | The single register of what the model does not calculate: synthetic inputs, aliases, narrative numbers. Edit its narrative part in `data/kpi-model/hardcoded_header.md`. |
| Method | `data/kpi-model/README.md`, `data/plant-model/Data-Model-Methodology.md` | Roll-up rules, the formulas of the added KPIs, display/status rules |
| Old | `data/redundant/` | Superseded files, unused. **Never run `data/redundant/plant-model/export_to_prototype.py`:** it overwrites `base-data.js` with stale values. |

**Rebuild after any data change:**
```
node data/kpi-model/scan_ui.js
python3 data/kpi-model/build_kpi_model.py
python3 data/kpi-model/export_to_prototype.py
python3 data/kpi-model/sync_pages.py
node tools/regen.js
```

**Rules that keep the numbers defensible:**
- **Recalculate, never average.** A KPI is always recalculated from its own scope's inputs, not averaged across children.
- **Roll-up of inputs:** SUM, except MIN for permit days, days to breach and the disclosure clock; the same value for external indices; √Σσ² for forecast uncertainty.
- **Plant-level KPIs:** 70 KPIs go down to plants. The rest stop at the entity, because their inputs are entity-only; they show "—" at plant level.
- **Consistency:** Group = A1 + A2 for every additive value. Hardcoded entity splits must also add up (e.g. EBITDA gap A1 −48.5 + A2 −7.7 = Group −56.2 ₹ m).
- **Story (P06):**
  - Group 95.5% of plan (625.7 kt of 655.1 kt); A1 91.3%, A2 100.3%.
  - Plant 02 is the weak plant at 78.4% (−26.2 kt of the −29.4 kt gap). Its problem is reliability (MTTR 11.4 h, 78 h unplanned downtime); RM-1 supply cover is the secondary risk.
  - Finance: EBITDA YTD ₹1,760.1 m; projected EBITDA gap ₹56.2 m.
  - The P07 reconciliation break (BRK-SYN-0071) is on Entity A1's flash, not on the P06 cards.
  - If you change data, re-check narrative text that quotes these figures: render pages and grep for the old values.

**How the UI uses it (`js/data/resolve.js`):**
- **Model values everywhere:** cards, KPI tables (ID in column 1 or 2) and tiles take model values. Scope comes from the label: "Plant NN", "A1/A2", otherwise the lens default.
- **Model-bound blocks:** a table with `kcols` {header: KPI} a bar chart with `kpi` or a `multi` chart with `kpi` (series labelled Plant NN / Entity A1) fills each row or series from the model, using the scope in the row label.
- **Roll-up tab:** every E-, G-, O- and S- page (except S-03, and pages with `noRollup: true`: E-02, E-05, E-06, E-07) gets a "How totals add up · Sep 2026" tab. Entity lens: plants → A1. Owner and Core Group: entities → Group only (no plant columns).
- **Empty columns:** `pruneCols()` in resolve.js drops any table column that is blank or "—" in every row (first column always kept), on every page.
- **Click-through:** every model value links to `P2-S03e/S03/S03o-KPIDetail.html?kpi=ID&scope=…`, built by `DCTResolve.kpiDetail`.
- **(i) buttons:** KPI cards, KPI cells in tables (columns 1–2), KPI tiles and the titles of graphs, tables and tiles link to R-01 with `?kpi=ID` or `?graph=<title>&on=<screen>`. Only IDs in the model get one; none on R-01 itself.
- **KPI Reference (R-01):** `js/c/P2-R01-KPIReference.js` is one file for three lens pages. Lens, Scope, Theme and Period dropdowns use the `menus` block; filters are URL params.

**Watch out:**
- **Commit after each round of page edits.** Uncommitted edits in `js/c/` were lost once.
- **Use the helper for page JSON edits.** To edit page JSON programmatically, parse the object after `return { page: ` or `const P0 = ` (JSON). Pages with live hooks (S-03 variants, R-01) compute their page object in code.

## After any change to js/

Run `node tools/regen.js`. It re-renders every page's static HTML and bumps the `?v=` cache tag on the script URLs, so browsers don't keep stale templates. It must report `regenerated 84` with no `FAIL` lines.

## Personas

- Flow: `login.html` (sign-in over `img/login-lighthouse-dawn.svg`) checks the username and password against `DCT_USERS`, a list at the top of its script (edit it to change access), and stores `dct-auth`; then `personas.html` sets the persona (`dct-persona`). Opening `login.html` signs out. Nothing is fetched, so it works when opened straight from disk.
- `js/persona.js` (in the head of each lens screen): not signed in → `login.html?next=…`; no persona → `personas.html?next=…`; it also gates pages to the persona's lens. Templates render a hidden `[data-dct-lens]` with per-lens equivalent links that the gate uses. Add `js/persona.js` to any new lens screen.

## Entity lens KPI cards

- `js/data/entity-cards.js` (`DCTEntityCards`, loaded on every Entity page after `resolve.js`) is called by `resolve.js` for each Entity-lens card. It adds a one-line justification, a **By plant** breakdown (Plant 01–03: value, change vs Aug, effect on Entity A1) and a **Root cause** box when the KPI, or one of its plants, is off target or worsening.
- Plant effects are computed from the model inputs: for a ratio KPI they add up to the Entity A1 gap to target; for a summed KPI they are shares; for a MIN KPI the plant that sets the value is marked. Entity-only KPIs (finance, cash, governance, capex) show their plant **driver** (`DRIVER` map) or say the model holds no plant split (`LINK` gives the plant link where one exists).
- Root causes (`ROOT`) are written from model numbers; the only hand-set facts are in `CASE` (asset P02-03 / Line L2, Supplier S-07, BRK-SYN-0071, Contractor C-3), quoted from the Entity screens. Reference baseline: `data/KPI-Lineage-Model.xlsx`.
- Entity cards are stand-alone: no click-through and no (i) link (`noInfo`). Cards are re-scoped to Entity A1; don't label a card with a single plant.
- Tables (Entity lens, `labelTables()` in resolve.js): plants show as "Plant 02 (P02)", bare KPI codes get their model name, and the identifying cells in the first three columns are semi-bold (cell flag `b`).
- Check: `node tools/check_entity.js` (`--dump` prints every card's text), also run by `tools/check_all.js`.

## Core Group lens: plants with a variation

- Core Group cards and sub-themes show **only plants with a variation** (rule in `DCTEntityCards.variations`, js/data/entity-cards.js), with no root cause; full plant detail is the Entity lens. Cards use `attachGroup`; the existing justifications (core-group-verdicts.js) stay.
- A table with `kvar: [KPI IDs]` is filled with the plants that vary on those KPIs. Blocks with plant content must carry `plantOk: true`, or the Core Group cap (`capOwner`) strips plant rows and `check_core_group.js` fails.

## Sidebar

`NAV` + `MAP` in each template. The order follows `mockup_v2` (`/Users/satyajit/Desktop/DCT/mockup_v2/`): Home, Enterprise Overview, Data Assurance, Early Warning, Cash & Liquidity, Operational Performance, Capital Projects, Risk Compliance & EHS, Actions & Escalations, AI Insights.
- Display names come from `NAVL`, `HOMEL` and an Entity-lens override.
- `p.nav` on pages still uses the old keys (`"Home"`, `"Enterprise Health"` …).
- Owner lens hides Home, because it is the same page as Enterprise Overview.
- A small muted icon under the legend (`ct-refi`, `refH`) opens the lens's KPI Reference page: `P2-R01o`, `P2-R01` or `P2-R01e`.

## Layout conventions

- **Page tabs** (all six templates, `ptabs()`): a numbered tab bar at the top of the body; only the selected tab's content is shown. Opt-in per page:
  - `tabs: [{n, has:[refs]}]`. Refs: `"kpis:ID,ID"`, `"key"` (all of it), `"key.N"`, `"drill.N"`. Blocks show in `has` order.
  - or `tab0: "Overview"`: headline content in a first tab, then one tab per drill tab.
  - Anything not referenced goes to the first tab; an unreferenced drill tab becomes its own tab. Header, banner, tour and the source/lineage link row stay outside the tabs.
  - Single-case pages (S- pages, war room, closure, AI Insights) have no page tabs.
- `sections` (TplA, older form of the same idea) still works on pages without `tabs`: numbered headings, unlisted KPIs under "Other measures".
- There is no Status overview bar (status strip and four-way summary); it was removed from all six templates.
- Don't remove content when restructuring; move it into sections or tabs.

## Repo

- Work branch: `feature/themes-gap-priority-fixes` (remote `origin` on GitHub).
- History of changes: `CHANGES.md`. Screen-by-screen explainer: `docs/Control Tower Screen Reference.docx`.
- Commit only when asked.
