# Control Tower: sections removed or fixed

2026-10-06

## Summary

Five non-KPI sections were removed from seven page files (one of them appears on all three KPI Detail variants). One table was rebuilt from the model, and two links that pointed back to their own page were redirected. Nothing is committed yet.

The review covered every lens screen (Owner O-, Core Group G-, Entity E-) and the shared S- pages. Each chart, table, tile set, alert list, action table and drill tab that is not a KPI card was checked against three questions:

1. Does it answer the page's question?
2. Do its links go somewhere useful?
3. Do its numbers agree with the KPI model (`js/data/base-data.js`) and the P06 story in `CLAUDE.md`?

Rows that carry a KPI ID get their values from the model when the page renders, so they were consistent. Every problem found was in hand-typed tables and charts.

## Removed sections

| Page | Section removed | What it showed | Why it was removed | File |
| --- | --- | --- | --- | --- |
| E-11 Entity Financial Health | "By plant" drill tab (table "Profitability by plant") | Revenue, EBITDA, margin, capital employed and ROCE for Plants 01–03 | The plant figures add up to revenue ₹404.6 m and EBITDA ₹96.2 m. The model has Entity A1 at ₹6,972.3 m and ₹890.6 m. The model has no plant-level finance inputs, so the table can't be made consistent. | `js/c/P2-E11-Financial.js` |
| E-03 Asset Reliability | "Time between breakdowns" drill tab (table "MTBF by line") | MTBF 196–230 h and MTTR 3.1–3.8 h for lines L1–L3 | Contradicts the story: Plant 02's problem is reliability, with MTTR 11.4 h and MTBF 104 h in the model. The lines also had no plant label. | `js/c/P2-E03-Reliability.js` |
| E-04 Supply | "Checks and controls" drill tab (table "Supplier controls") | One row: CTL-006 unauthorised-vendor usage | A whole tab for one KPI. It already appears in the full controls table on E-07 Regulatory and EHS. | `js/c/P2-E04-Supply.js` |
| S-03, S-03e, S-03o KPI Detail | "Drivers" drill tab (chart "Variance drivers vs plan · kt MTD") | L2 meter +9.1, L1 +0.6, L3 −0.1 kt | Says production is 9.6 kt above plan, but Entity A1 is below plan (91.3%). It also doesn't match the 12.4 kt flash-vs-MIS break (298.4 vs 286.0) on the same page's Reconciliation tab. | `js/c/P2-S03-KPIDetail.js`, `P2-S03e-KPIDetail.js`, `P2-S03o-KPIDetail.js` |
| S-09 Entity Contribution | "By business · ₹ m" chart (page drivers) | One bar: Business A (= Group) −56.2 | Repeats the total shown above it. Businesses B and C were removed from the hierarchy, so a by-business split tells you nothing. | `js/c/P2-S09-Contribution.js` |

On pages with page tabs, the tab references were renumbered so that no other section moved.

## Fixed rather than removed

| Page | Section | Problem | Change | File |
| --- | --- | --- | --- | --- |
| G-02 Entity Comparison | Drill tab "Margin and return on capital by entity": table "Profitability and capital productivity by entity" | Hand-typed: A1 EBITDA margin 23.8% (the model gives 12.8%), ROCE 11.4% (model 11.1%), FCF conversion A1 21% vs A2 38% (model: A1 37.9%, A2 30.9%, so the story was inverted) | Retitled "Return on capital and cash conversion by entity · YTD". It now takes its values from the model with `kcols` (ROCE = FIN-005, FCF conversion = FIN-008). The margin and "vs plan" columns were dropped because the model has no EBITDA-margin KPI or plan to fill them. | `js/c/P2-G02-EntityComparison.js` |
| G-02 Entity Comparison | Chart "ROCE vs 12% target by entity" | Note "Line 3 capital before benefit" refers to a story told nowhere else | Note removed; values (A1 −0.9, A2 +0.1) match the model | `js/c/P2-G02-EntityComparison.js` |
| S-03 KPI Detail (Core Group) | "Related" tab, row BRK-SYN-0071 | Linked to the same page | Now links to G-08 Certification Governance | `js/c/P2-S03-KPIDetail.js` |
| O-04 Capex | Action "MP03 · Spend ahead of physical progress" | Linked to the same page | Now links to O-06 Decisions | `js/c/P2-O04-Capex.js` |

## Checked and kept

- The cross-page totals reconcile:
  - Entity EBITDA gaps: −48.5 + −7.7 = −56.2.
  - YTD EBITDA variance by entity on G-02: A1 −116.2 = 1,006.7 plan − 890.6 actual.
  - ROCE vs target.
  - Open audit findings: 2 + 5 = 7.
  - Plant 02 line split: 24.3 kt.
  - MP03 value at risk: ₹127.2 m, which is Entity A2's SIG-011.
- Several pages repeat the Environment and Contracts tables (E-02, E-07, G-05, G-07, O-05, O-09). They were kept because each fits the page's theme, and their values come from the model.
- The Treasury ("Currency and interest") tab on E-05 Production-to-Cash was kept. It is loosely connected to that page but is the Entity lens's only treasury view.

## Open items

- G-01 Portfolio Home has a "Certification calendar" with placeholder dates only (`[DATE — PH]`). It was kept because its status column still carries information. It is the next candidate to remove.
- The event pages (S-04 alerts, S-05 cases, S-07, S-08, O-06/O-07/O-08, E-09/E-10, G-09/G-10) are laid out differently from the other pages, so they couldn't be checked block by block the same way. They hold one incident's story, and the parts that were read showed no conflicts.
- The re-render passed. The rebuilt G-02 table has not been checked visually in a browser.

## Verification and restoring

- `node tools/regen.js` reported `regenerated 84` with no `FAIL` lines.
- `node tools/check_drilldowns.js` showed only warnings that were there before the changes (index-page links to KPI Detail without `?kpi`).
- To bring anything back: `git diff -- js/c` shows every change (9 files). `git checkout -- js/c/<file>` restores a page. Then run `node tools/regen.js`.
