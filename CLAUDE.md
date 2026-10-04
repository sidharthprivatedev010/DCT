# Digital Control Tower prototype

Static HTML prototype for a leadership "control tower" across three lenses: **Owner** (group summary), **Core Group** (comparative) and **Entity** (Entity A1, working depth). All data is synthetic. There is no build step or framework: open any `.html` file, or serve the folder (`python3 -m http.server`).

## How a page renders

- `P2-*.html` holds a pre-rendered snapshot, but on load `DCLite.mount("dc-root", "<Page>")` wipes `#dc-root` and redraws it from JS. **Never edit page HTML by hand**; it gets overwritten.
- `js/dc-lite.js`: a small template engine (`sc-for`, `sc-if`, `{{holes}}`). It keeps `<details>` open/closed state across re-renders.
- `js/c/TplA.js` … `TplF.js`: the six shared page templates. Each holds the header, sidebar, block renderers and helpers (`conf()`, `spark()`, `four()`, `bizStyle()`, `trustStyle()`). A change to shared UI must be applied to **all six**; they are near-identical copies.
- `js/c/<Page>.js`: one data file per page, `renderVals()` returning `{ page: {...JSON...} }`. Keys: `lens, nav, title, q, trust, strip, kpis, dominant, drivers, forecast, actions, drill[{n, blocks}], access, equiv`, plus optional `sections`, `kpiMax`, `dataAt`.
- Block types: `line, multi, bars, waterfall, table, tiles, alerts, kv, text, chain, buttons, decision, ask`. Most blocks carry `ask` (the question the block answers) and `cap` (caption).
- Overview visuals: `js/c/dc-viz.js` (`DCViz`) adds the block types `pulse, horizon, bridge, flow, fingerprints, tide, river, lanes, loop, runway, zoom` (and the simpler lab-only set). Each template sets `b.isViz`/`b.vz` in its normaliser and renders `DCViz.snippet`; every page loads `js/c/dc-viz.js`. The visuals on O-01, O-05, G-01, G-02, G-08, G-09, E-01, E-05 and E-11 are written by `tools/place-visuals.js` (re-runnable; edit the numbers there, then run it and `regen.js`). Their numbers must keep matching the figures already on those pages.
- `lab/viz-lab.html` and `lab/viz-simple.html` are design labs (not linked from the app, not touched by regen); they use the same `js/c/dc-viz.js`.

## Numbers: single source of truth

- `js/data/base-data.js`: every KPI value, keyed `kpi[ID][scope]`. Scope is `Group`, `A1` or `Plant02`; `scope#t7` is a point-in-time variant chosen by the page's `dataAt`.
- `js/data/resolve.js` (`DCTResolve`) fills KPI cards, table rows (first cell is a KPI ID) and tiles (label starts with an ID) from base-data. **To change a KPI value, edit base-data.js only.**
- KPI IDs must match the catalogue meaning (P1-R1-KPICatalogue). Don't reuse an ID for a different measure, and keep the margin, EBITDA and certification counts consistent across pages.

## After any change to js/

Run `node tools/regen.js`. It re-renders every page's static HTML and bumps the `?v=` cache tag on the script URLs, so browsers don't keep stale templates. It must report `regenerated 81` with no `FAIL` lines.

## Sidebar

`NAV` + `MAP` in each template. The order follows `mockup_v2` (`/Users/satyajit/Desktop/DCT/mockup_v2/`): Home, Enterprise Overview, Data Assurance, Early Warning, Cash & Liquidity, Operational Performance, Capital Projects, Risk Compliance & EHS, Actions & Escalations, AI Insights.
- Display names come from `NAVL`, `HOMEL` and an Entity-lens override.
- `p.nav` on pages still uses the old keys (`"Home"`, `"Enterprise Health"` …).
- Owner lens hides Home, because it is the same page as Enterprise Overview.

## Layout conventions

- Home pages (O-01, G-01, E-01) use `sections: [{n, kpis:[ids], blocks:["drivers", "drivers.1", …]}]` (TplA only). The sections render as numbered theme headings; any KPI not listed falls into "Other measures".
- Status strip and four-way summary sit inside a collapsed "Status overview" `<details>`.
- Don't remove content when restructuring; move it into sections or tabs.

## Repo

- Work branch: `feature/themes-gap-priority-fixes` (remote `origin` on GitHub).
- History of changes: `CHANGES.md`. Screen-by-screen explainer: `docs/Control Tower Screen Reference.docx`.
- Commit only when asked.
