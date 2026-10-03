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

## 6. Docs

- `docs/Control Tower Screen Reference.docx`: per-screen table (Content | What it shows | Why it matters), updated for the new sidebar order and names, the themed home sections and the collapsed Status overview.

## Parked

- Option to go the other way from mockup_v2: keep only headline cards and the main chart visible, and move other blocks into tabs named after the mockup sub-areas. Open questions: should home-page sections become tabs, and should the tab panel start closed in every lens?
