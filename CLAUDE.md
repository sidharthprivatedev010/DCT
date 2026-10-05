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
| UI scan | `data/kpi-model/scan_ui.js` | Lists the KPI IDs and screens in the UI (170 IDs, 57 screens). Rerun it when pages gain or lose KPIs. |
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
- **Model-bound blocks:** a table with `kcols` {header: KPI} or a bar chart with `kpi` fills each row from the model, using the scope in the row label.
- **Roll-up tab:** every E-, G-, O- and S- page (except S-03) gets a "Roll-up · P06" tab.
- **Click-through:** every model value links to `P2-S03e/S03/S03o-KPIDetail.html?kpi=ID&scope=…`, built by `DCTResolve.kpiDetail`.
- **KPI Reference (R-01):** `js/c/P2-R01-KPIReference.js` is one file for three lens pages. Lens, Scope, Theme and Period dropdowns use the `menus` block; filters are URL params.

**Watch out:**
- **Commit after each round of page edits.** Uncommitted edits in `js/c/` were lost once.
- **Use the helper for page JSON edits.** To edit page JSON programmatically, parse the object after `return { page: ` or `const P0 = ` (JSON). Pages with live hooks (S-03 variants, R-01) compute their page object in code.

## After any change to js/

Run `node tools/regen.js`. It re-renders every page's static HTML and bumps the `?v=` cache tag on the script URLs, so browsers don't keep stale templates. It must report `regenerated 84` with no `FAIL` lines.

## Personas

- `login.html` sets the persona; `js/persona.js` (in the head of each lens screen) gates pages to that lens. Templates render a hidden `[data-dct-lens]` with per-lens equivalent links that the gate uses. Add `js/persona.js` to any new lens screen.

## Sidebar

`NAV` + `MAP` in each template. The order follows `mockup_v2` (`/Users/satyajit/Desktop/DCT/mockup_v2/`): Home, Enterprise Overview, Data Assurance, Early Warning, Cash & Liquidity, Operational Performance, Capital Projects, Risk Compliance & EHS, Actions & Escalations, AI Insights.
- Display names come from `NAVL`, `HOMEL` and an Entity-lens override.
- `p.nav` on pages still uses the old keys (`"Home"`, `"Enterprise Health"` …).
- Owner lens hides Home, because it is the same page as Enterprise Overview.
- A small muted icon under the legend (`ct-refi`, `refH`) opens the lens's KPI Reference page: `P2-R01o`, `P2-R01` or `P2-R01e`.

## Layout conventions

- Home pages (O-01, G-01, E-01) use `sections: [{n, kpis:[ids], blocks:["drivers", "drivers.1", …]}]` (TplA only). The sections render as numbered theme headings; any KPI not listed falls into "Other measures".
- Status strip and four-way summary sit inside a collapsed "Status overview" `<details>`.
- Don't remove content when restructuring; move it into sections or tabs.

## Repo

- Work branch: `feature/themes-gap-priority-fixes` (remote `origin` on GitHub).
- History of changes: `CHANGES.md`. Screen-by-screen explainer: `docs/Control Tower Screen Reference.docx`.
- Commit only when asked.
