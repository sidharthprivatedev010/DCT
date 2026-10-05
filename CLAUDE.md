# Digital Control Tower prototype

Static HTML prototype for a leadership "control tower" across three lenses: **Owner** (group summary), **Core Group** (comparative) and **Entity** (Entity A1, working depth). All data is synthetic. There is no build step or framework: open any `.html` file, or serve the folder (`python3 -m http.server`).

## How a page renders

- `P2-*.html` holds a pre-rendered snapshot, but on load `DCLite.mount("dc-root", "<Page>")` wipes `#dc-root` and redraws it from JS. **Never edit page HTML by hand**; it gets overwritten.
- `js/dc-lite.js`: a small template engine (`sc-for`, `sc-if`, `{{holes}}`). It keeps `<details>` open/closed state across re-renders.
- `js/c/TplA.js` … `TplF.js`: the six shared page templates. Each holds the header, sidebar, block renderers and helpers (`conf()`, `spark()`, `four()`, `bizStyle()`, `trustStyle()`). A change to shared UI must be applied to **all six**; they are near-identical copies.
- `js/c/<Page>.js`: one data file per page, `renderVals()` returning `{ page: {...JSON...} }`. Keys: `lens, nav, title, q, trust, strip, kpis, dominant, drivers, forecast, actions, drill[{n, blocks}], access, equiv`, plus optional `sections`, `kpiMax`, `dataAt`.
- Block types: `line, multi, bars, waterfall, table, tiles, alerts, kv, text, chain, buttons, decision, ask`. Most blocks carry `ask` (the question the block answers) and `cap` (caption).

## Numbers: single source of truth

- `js/data/base-data.js`: every KPI value, keyed `kpi[ID][scope]`.
  - Scopes are `Group`, `A1`, `A2` and `Plant01`–`Plant06`; `scope#t7` is a point-in-time variant chosen by the page's `dataAt`.
  - KPI values and `DCTData.plant` (formulas, inputs, roll-up) are **generated** by `data/kpi-model/` (see its README). Rebuild with `build_kpi_model.py` then `export_to_prototype.py`.
- `js/data/resolve.js` (`DCTResolve`) fills KPI cards, table rows (first cell is a KPI ID) and tiles (label starts with an ID) from base-data. **To change a KPI value, change the model's inputs and rebuild.** Hand edits to model KPIs are overwritten. Values the model doesn't calculate are listed in `data/HARDCODED-VALUES.md`.
- KPI IDs must match the catalogue meaning (P1-R1-KPICatalogue). Don't reuse an ID for a different measure, and keep the margin, EBITDA and certification counts consistent across pages.

## After any change to js/

Run `node tools/regen.js`. It re-renders every page's static HTML and bumps the `?v=` cache tag on the script URLs, so browsers don't keep stale templates. It must report `regenerated 84` with no `FAIL` lines.

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
