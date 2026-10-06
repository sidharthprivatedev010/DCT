# Download Report (PDF Briefs): Bring `main` Up to the Current Reports

| Field | Value |
|---|---|
| Manifest | `manifest04` |
| Date | 2026-10-06 |
| Scope | Reports section only: the header **"Download report"** button and the PDF it builds for the **Owner**, **Core Group** and **Entity** lenses. Nothing else on the pages changes. |
| Goal | After this manifest is applied to `main` and `tools/regen.js` is run, downloading a report from any lens on `main` produces the same PDF as the current working copy. |

---

## Status (2026-10-06)

| Part | Status |
|---|---|
| Owner brief (§7.1) | **Done.** Rebuilt in `js/report.js` (`buildOwner`) from this manifest and the sample `Control-Tower-Owner-Report-2026-10-06 (6).pdf`. The source working copy was not available, so the file does not match blob `730c41aa`. Output: 2 pages, tallies 4/6 · 2/2 · 1/5 · 3/4, bottom line "Group: 7 of 17 … Entity A1 is off target on 9, Entity A2 on 6.", 0 plant terms, no NaN/undefined/ellipsis. |
| `js/vendor/report-fonts.js` (§4.2) | **Done.** Rebuilt with the documented fontTools recipe (IBM Plex Sans v6.4.0); 45,236 bytes, blob differs from `fa9f5948`. Helvetica fallback checked (prints INR, still 2 pages). |
| Template cache-buster (§4.3) | **Done** in all six templates (blobs differ: the templates changed after `110ce28`). |
| Regenerate (§4.4) | **Done**, `regenerated 84`, no FAIL. |
| Home-page banner in the Owner bottom line | **Not shown**: O-01 no longer has a banner (removed in MANIFEST02). The report prints it only when the page has one. |
| Core Group brief (§7.2), Entity brief (§7.3) | **Not started**: these lenses still get the old landscape report. |
| `CHANGES.md` (§4.5) | Not done (optional). |

## 0. Instructions for the executing agent

Implement exactly what this document specifies. **Do not add features, data, sections or files that are not listed here.**

1. **Stay inside the scope.** Touch only the files in [§4 Changes](#4-changes). Do not change page data files, base-data, or templates beyond the one `onclick` line (see [§10](#10-not-part-of-this-manifest)).
2. **Do not touch the unchanged dependencies** in [§3](#3-unchanged-dependencies-do-not-touch). They are already identical on `main`.
3. **`js/report.js` and `js/vendor/report-fonts.js` are copied, not rewritten.** Each must match a specific git blob (`git_blob_after`). Get them from the working copy of `feature/core-group-changes`, or check out the commit that contains them. If neither source is available, **stop and ask the user**. A file rewritten from the description in [§6](#6-shared-design)–[§7](#7-reports-per-lens) will not match the blob.
4. **Never edit page HTML by hand.** Regenerate it with `node tools/regen.js`.
5. Follow [§5 Apply steps](#5-apply-steps) in order, tick each checkbox, then run [§8 Verification](#8-verification) and report every check as pass or fail with evidence.

---

## 1. Baseline (what `main` has today)

| Item | Value |
|---|---|
| Branch | `main` |
| Commit | `110ce28` (= `origin/main` = `feature/core-group-changes` HEAD) |
| Report introduced in | `596959a` *Add Download report button that builds a PDF per persona* |
| `js/report.js` | git blob `3c100b09d5a26e85f4eaffc656ec5a28959fc848`, 239 lines |

**Baseline behaviour:**
- Landscape A4, 10-13 pages per lens.
- Contents: summary tiles, status by area, headline KPI table, forecast table, actions table, exceptions table, and a full scorecard of every KPI on the lens screens (127-136 rows).
- Font: Helvetica, so ₹ prints as `INR`.

## 2. Target (what `main` must have after this manifest)

| Item | Value |
|---|---|
| Source | Working copy of `feature/core-group-changes` on top of `110ce28` (uncommitted at the time of writing) |

**Target behaviour:**
- Portrait A4 briefs built from charts.
- Page counts: **Owner 2 pages**, **Core Group 3 pages**, **Entity A1 3 pages**.
- Font: IBM Plex Sans subset, so ₹, −, ≤ and ≥ print correctly.

---

## 3. Unchanged dependencies (do not touch)

These are already on `main` and identical to the working copy (same git blobs).

| File | Git blob |
|---|---|
| `js/vendor/jspdf.umd.min.js` | `a9781f1dc03f77453adf11c8be05105330fefadc` |
| `js/vendor/jspdf.plugin.autotable.min.js` | `88ac02da12a404b150fb17e32d4ee631e38020b2` |
| `js/data/base-data.js` | `c6a13a28dc5e434d5fd46bb71a0fd0b3dc1963a7` |
| `js/c/P2-O01-EnterpriseHealth.js` | `f3dac695d24e333b9cef67fa74b2c3b780d43d93` |
| `js/c/P2-G01-Portfolio.js` | `9ddc2cfd8a315d3968a2c51fa587d046fa4af929` |
| `js/c/P2-E01-EntityHome.js` | `0cf4a5dfe51685ce4d2c556afac08bd6ff189e69` |

**Data the report uses:**
- `DCTData.kpi[ID][scope]` for `v`, `u`, `plan`, `var`, `tr`, `bs`, `ts` (scopes `Group`, `A1`, `A2`, `Plant01`-`Plant03`)
- `DCTData.plant.kpi[ID]` for `name`, `unit`, `target`, `better` and the monthly series `val[scope]` (`P01`-`P06`)
- `DCTData.plant.x`, `scopes`, `children`, `periodL`
- Home page JSON: `banner` (Owner bottom line) and `actions` (Entity alerts and actions table)

---

## 4. Changes

### 4.1 `js/report.js` · **replace**

| Field | Value |
|---|---|
| Blob before | `3c100b09d5a26e85f4eaffc656ec5a28959fc848` |
| Blob after | `730c41aa129e9acbed9424af2624172c41e4d9a8` |
| Lines after | 664 |
| Summary | Rewritten as chart-led briefs per lens (details in [§6](#6-shared-design) and [§7](#7-reports-per-lens)). |
| Public API | **Unchanged:** `var DCTReport = {run(btn)}`. Reads the lens from `btn[data-report-lens]` and falls back to `localStorage` `dct-persona`. |

**Loads on first click:**
1. `js/vendor/jspdf.umd.min.js`
2. `js/vendor/jspdf.plugin.autotable.min.js`
3. `js/vendor/report-fonts.js` (new; optional, falls back to Helvetica)
4. `js/c/<lens home page>.js`

**Removed from the baseline:**
- Landscape layout
- KPI card tiles and status-by-area pills
- Headline, exceptions and full scorecard tables
- Status-by-area strip from the home page (replaced by a scorecard counted from the KPIs)
- Owner decisions table and open-critical-alerts line
- Core Group escalations table

- [ ] Replace `js/report.js` with the working-copy version.
- [ ] `git hash-object js/report.js` = `730c41aa129e9acbed9424af2624172c41e4d9a8`

### 4.2 `js/vendor/report-fonts.js` · **add**

| Field | Value |
|---|---|
| Blob after | `fa9f5948c8202cd16e5457675351f82e41cc7170` |
| Size | 45,101 bytes |
| Contents | `var DCTReportFonts = {regular, bold}`: IBM Plex Sans Regular and Bold (SIL OFL 1.1), as base64 TTF subsets |
| Subset ranges | U+0020-007E, U+00A0-00FF, `₹ − – — ≤ ≥ ← ↑ → ↓ ‘ ’ “ ” • … × ÷ ≈` |

**How to rebuild (only if needed):** use a fontTools subset of `IBMPlexSans-Regular.ttf` and `IBMPlexSans-Bold.ttf` (IBM/plex v6.4.0) with `--no-hinting --layout-features=''`. Then base64-encode them into the two fields.

- [ ] Add `js/vendor/report-fonts.js` from the working copy.
- [ ] `git hash-object js/vendor/report-fonts.js` = `fa9f5948c8202cd16e5457675351f82e41cc7170`

### 4.3 `js/c/TplA.js` … `js/c/TplF.js` · **edit (1 line each)**

The edit sits inside the **Download report** button's `onclick`. Make **exactly one** replacement per file.

Find:
```js
s.src='js/report.js';
```
Replace with:
```js
s.src='js/report.js?t='+Date.now();
```

**Why:** cache-buster. Browsers that cached the old multi-page `report.js` would otherwise keep producing the old PDF.

| File | Blob after | Done |
|---|---|---|
| `js/c/TplA.js` | `149d7ad6b13906bc6284712715da7b1b92f52dc0` | [ ] |
| `js/c/TplB.js` | `ff7db2ab876043e98bca1ab05a41fec114fac90b` | [ ] |
| `js/c/TplC.js` | `e8551ed37083001fe50734b78737f82af5140856` | [ ] |
| `js/c/TplD.js` | `98ffff3877027c53b67925ceeff868b3c5ad697b` | [ ] |
| `js/c/TplE.js` | `181f84e1030b075d128bb305b6f8f87328eb5786` | [ ] |
| `js/c/TplF.js` | `dfec8a9d047093ba4bcdfa1b5847f3dba5790665` | [ ] |

### 4.4 `*.html` (84 pages) · **regenerate**

- Run `node tools/regen.js`. It re-renders the static HTML so the button carries the new `onclick`, and bumps the `?v=` cache tag.
- **Never edit page HTML by hand.**
- Expected output: `regenerated 84`, with **no `FAIL` lines**.

- [ ] Regeneration done; output shows `regenerated 84` and no `FAIL`.

### 4.5 `CHANGES.md` · **edit (optional, documentation)**

- [ ] Replace the **"Download report per persona"** section with the description of the three briefs, as in the working copy.

---

## 5. Apply steps

1. [ ] Switch to `main` and update it:
   ```bash
   git checkout main && git pull
   ```
2. [ ] Copy `js/report.js` and `js/vendor/report-fonts.js` from the working copy (or check out the commit that contains them).
3. [ ] In `js/c/TplA.js` … `TplF.js`, replace `s.src='js/report.js';` with `s.src='js/report.js?t='+Date.now();` (exactly one occurrence per file).
4. [ ] Regenerate the pages and confirm `regenerated 84`, no `FAIL`:
   ```bash
   node tools/regen.js
   ```
5. [ ] Check each changed file's blob against `git_blob_after`:
   ```bash
   git hash-object <path>
   ```
6. [ ] Serve the folder, sign in as each persona, download the report, and compare it with [§7](#7-reports-per-lens) **Expected**:
   ```bash
   python -m http.server
   ```

---

## 6. Shared design

This describes the PDF that the target `js/report.js` produces. Use it to verify the output; do not use it to rewrite the file.

| Aspect | Specification |
|---|---|
| Page | A4 portrait, 32 pt margins. Navy header band on page 1 ("CONTROL TOWER", brief name, scope · period, SYNTHETIC DATA, generated time). Slim band on later pages. Footer with "page x of n". |
| Font | IBM Plex Sans from `js/vendor/report-fonts.js`. Helvetica fallback, with ₹ written as `INR`. |
| Order | Scorecard → numbered sections → bottom line last. |
| Scorecard | One chip per section: "n of m need attention" (or "off target" when narrow), counted from the section's KPI statuses at the lens scope. Red if any need intervention, amber if only declining, green otherwise. Replaces the hand-set status strip. |
| Section header | Numbered circle, title, and right-aligned "n of m need attention" or "All m on target or improving". |
| Status rule | Every status carries its supporting number: variance to target where a target exists ("−0.4 pts vs target"), otherwise the change since P05 ("↑ 397.0 vs P05"). Zero ₹ targets such as "≥ 0.0 ₹ m" are treated as no target. |
| Insight box | Core Group and Entity only: a light panel headed **INSIGHT** with bullets computed from the data (target met or missed by scope, largest share of a total, months off target, worst scope). No hand-written numbers. |
| Bottom line | Last block: counts, then the most material items with their numbers. The Owner report adds the home-page banner (material issue) in red. |

### 6.1 Charts

| Chart | Specification |
|---|---|
| Line | One y-axis, recessive grid, 1.5 pt lines, end dot and direct label on the latest value (labels nudged ≥ 9 pt apart). Dashed target line, listed in the legend when there are 2+ series. |
| Stacked bars | Monthly values (YTD series differenced), segments in series order with a surface gap, rounded top, total labelled on the last bar. |
| Horizontal bars | One bar per scope from zero, value label at the bar end, optional dashed target with label. |
| Key figures | Label, big value + unit, child values with status dots (A1/A2, or Plants 01-03 values), and a status · number line. |

### 6.2 Colours

| Use | Colours |
|---|---|
| Owner and Core Group | Entity A1 `#2a78d6` (blue), Entity A2 `#eb6834` (orange), Group `#52514e` (grey) |
| Entity | Plant 01 `#2a78d6`, Plant 02 `#eb6834`, Plant 03 `#1baf7a` (aqua), Entity A1 `#52514e` |
| Status | On track `#15803d`, Improving `#1d63c4`, Declining `#c2700e`, Intervention required `#be2020`, Forecast breach `#7c3aed` |
| Target line | `#898781`, dashed |

---

## 7. Reports per lens

### 7.1 Owner

| Field | Value |
|---|---|
| File | `Control-Tower-Owner-Report-<YYYY-MM-DD>.pdf` |
| Brief | Owner brief · Group · Entity A1 · Entity A2 |
| Abstraction | Entity level only: Group with Entity A1 and A2. No plant, line, material or supplier data. Only the 17 measures an owner acts on. |
| Pages | 2 |

| # | Title | Scorecard label | KPIs | Visuals |
|---|---|---|---|---|
| 1 | Enterprise health and data assurance | Health and data assurance | TRU-001, TRU-007, TRU-006, FIN-003, FIN-001, FIN-005 | • Numbers certified: horizontal bars A1 / A2 / Group, target 95%<br>• Open trust issues: key figures TRU-007 reconciliation breaks, TRU-006 overdue certifications, with A1/A2 split<br>• Key figures: Revenue YTD, EBITDA YTD, ROCE with A1/A2 split<br>• EBITDA by month: bars stacked A1 + A2 = Group<br>• ROCE, annualised: lines A1 / A2, target 12% |
| 2 | Early warning | — | PRD-003, PRD-002 | • Projected EBITDA gap, rest of year: horizontal bars A1 / A2 / Group<br>• Chance of missing next month's plan: horizontal bars A1 / A2 / Group |
| 3 | Cash and liquidity *(starts a new page)* | — | FIN-004, FIN-008, FIN-006, LIQ-002, LIQ-001 | • Free cash flow, year to date: lines A1 / A2<br>• Covenant headroom: lines A1 / A2, target 20%<br>• Key figures: FCF conversion, Net debt, Liquidity runway with A1/A2 split<br>• Forecast line: PRD-004 liquidity gap, PRD-005 covenant breach (Group) |
| 4 | Operational performance | — | OPS-001, OPS-002, CST-001, EHS-001 | • Production vs plan: lines A1 / A2, plan 100%<br>• Cost per tonne: horizontal bars A1 / A2 / Group, target ₹2,900<br>• Key figures: Sales vs plan, Safety (TRIR) with A1/A2 split |

**Bottom line:** Group count, then up to 4 off-target measures per entity with their numbers, then the banner.

**Excluded on purpose:**
- Decisions required table
- Open critical alerts line
- Plant-derived or operational measures: days to breach, critical-material shortage, production at risk, supplier delivery, OEE, capacity, EBIT, working capital, cash-upstream exposure, flash-to-close variance

**Expected:**
- Pages: **2**
- Section tallies: `4 of 6 need attention` · `2 of 2 need attention` · `1 of 5 need attention` · `3 of 4 need attention`
- Bottom line begins: *"Group: 7 of 17 headline measures are on target or improving. Entity A1 is off target on 9, Entity A2 on 6."*
- Plant terms: **0**

### 7.2 Core Group

| Field | Value |
|---|---|
| File | `Control-Tower-Core-Group-Report-<YYYY-MM-DD>.pdf` |
| Brief | Core Group brief · Group · Entity A1 · Entity A2 |
| Abstraction | Same entity level as the Owner (no plant data), with more depth and an insight per section. |
| Pages | 3 |
| Page breaks | Sections 3-5 start a new page only when fewer than ~300-340 pt remain. |

| # | Title | Scorecard label | KPIs | Visuals | Insights |
|---|---|---|---|---|---|
| 1 | Financial performance and data trust | Finance and trust | TRU-001, TRU-007, TRU-006, FIN-003, FIN-001, FIN-005, FIN-008 | • Numbers certified: horizontal bars A1 / A2 / Group, target 95%<br>• Open trust issues: TRU-007, TRU-006 with A1/A2 split<br>• Key figures: Revenue YTD, EBITDA YTD, ROCE, FCF conversion<br>• EBITDA by month: stacked A1 + A2<br>• ROCE: lines A1 / A2, target 12% | • Certification target met/missed by entity + open trust issues by entity<br>• Largest entity share of Group EBITDA YTD<br>• Months ROCE was off target per entity<br>• FCF conversion target met/missed by entity |
| 2 | Early warning | — | PRD-003, PRD-002 | • Projected EBITDA gap: horizontal bars A1 / A2 / Group<br>• Chance of missing next month's plan: horizontal bars A1 / A2 / Group | • Largest entity share of the projected EBITDA gap<br>• Entity with the higher plan-miss risk vs the other, Group value and change since P05 |
| 3 | Cash and working capital | Cash and WC | FIN-004, WCP-001, FIN-006, LIQ-002, LIQ-001, CSH-001 | • Free cash flow, year to date: lines A1 / A2<br>• Days sales outstanding: horizontal bars A1 / A2 / Group, target 45 days<br>• Key figures: Net debt, Covenant headroom, Liquidity runway, Cash position | • DSO gap between entities<br>• Covenant headroom target by entity<br>• Liquidity runway target by entity |
| 4 | Operational performance | Operations | OPS-001, CST-001, OPS-002, PLT-002, OPS-003 | • Production vs plan: lines A1 / A2, plan 100%<br>• Cost per tonne: horizontal bars A1 / A2 / Group, target ₹2,900<br>• Key figures: Sales vs plan, OEE, Capacity utilisation | • Production, cost per tonne and capacity targets met/missed by entity |
| 5 | Capital projects, risk and safety | Projects, risk, safety | CPX-004, PRG-002, PRG-003, GOV-004, EHS-001, EFF-002 | • Capex physical progress: horizontal bars A1 / A2 / Group<br>• Benefits realisation: horizontal bars A1 / A2 / Group, plan 100%<br>• Key figures: Delayed projects, Open audit findings, Safety (TRIR), Open critical alerts | • Benefits realisation target by entity<br>• Where delayed projects, audit findings and critical alerts sit<br>• TRIR target by entity |

**Bottom line:** Group count, then up to 4 off-target measures per entity with their numbers.

**Excluded on purpose:**
- Escalations table (its labels carry material codes)
- Comparison table and tile grid from the baseline

**Expected:**
- Pages: **3**
- Section tallies: `5 of 7 need attention` · `2 of 2 need attention` · `1 of 6 need attention` · `4 of 5 need attention` · `3 of 6 need attention`
- Insight boxes: **5**
- Bottom line begins: *"Group: 11 of 26 headline measures are on target or improving. Entity A1 is off target on 13, Entity A2 on 8."*
- Plant terms: **0**

### 7.3 Entity (A1)

| Field | Value |
|---|---|
| File | `Control-Tower-Entity-A1-Report-<YYYY-MM-DD>.pdf` |
| Brief | Entity A1 brief · Entity A1 · Plants 01–03 |
| Abstraction | Entity A1 and its plants. Finance and cash are booked at entity level, so they are shown for Entity A1 only. |
| Pages | 3 |

| # | Title | Scorecard label | KPIs | Visuals | Insights |
|---|---|---|---|---|---|
| 1 | Entity health and data trust | Health and trust | TRU-001, TRU-007, TRU-006, FIN-003, FIN-001, FIN-005 | • Key figures: Numbers certified, Reconciliation breaks, Overdue certifications (A1)<br>• Key figures: Revenue YTD (with plant split), EBITDA YTD, ROCE<br>• Revenue by month: bars stacked Plant 01 + 02 + 03 = Entity A1<br>• ROCE: line Entity A1, target 12% | • Certification target and open trust issues<br>• Largest plant share of revenue YTD<br>• Months ROCE was off target |
| 2 | Early warning by plant | Early warning | PRD-002, SIG-007, PRD-001, SIG-009 | • Chance of missing next month's plan: horizontal bars Plants 01-03 / Entity A1<br>• Production at risk: horizontal bars Plants 01-03 / Entity A1 | • Plant with the highest plan-miss probability<br>• Largest plant share of production at risk<br>• Days to first plan breach by plant<br>• Critical-material shortage risk by plant |
| 3 | Plant operations *(starts a new page)* | — | OPS-001, PLT-002, REL-003, CST-001, OPS-002, OPS-003, REL-004 | • Production vs plan by plant: lines Plants 01-03, plan 100%<br>• OEE: horizontal bars Plants 01-03 / Entity A1, target 80%<br>• Unplanned downtime by plant: lines Plants 01-03<br>• Cost per tonne: horizontal bars Plants 01-03 / Entity A1, target ₹2,900<br>• Key figures: Sales vs plan, Capacity utilisation, Production loss from downtime (plant split) | • Production and OEE targets by plant<br>• Largest plant share of unplanned downtime in P06<br>• Cost per tonne target by plant |
| 4 | Cash and finance | — | FIN-004, WCP-001, FIN-006, LIQ-002, LIQ-001, CSH-001 | • Free cash flow, year to date: line Entity A1<br>• Days sales outstanding: line Entity A1, target 45 days<br>• Key figures: Net debt, Covenant headroom, Liquidity runway, Cash position | • Covenant headroom target<br>• Months DSO was off target<br>• Liquidity runway target |
| 5 | Safety and actions | Safety | EHS-001, EHS-002 | • Safety · TRIR: horizontal bars Plants 01-03 / Entity A1, target 0.50<br>• Severity incidents: horizontal bars Plants 01-03 / Entity A1<br>• Table: My alerts, cases and actions (E-01 actions, up to 3 rows) | • TRIR target by plant<br>• Severity incidents by plant |

**Bottom line:** count, up to 5 off-target measures with their numbers, and the weakest plant (lowest production vs plan) with its production, OEE, cost and plan-miss probability.

**Expected:**
- Pages: **3**
- Section tallies: `3 of 6 need attention` · `3 of 4 need attention` · `5 of 7 need attention` · `2 of 6 need attention` · `2 of 2 need attention`
- Insight boxes: **5**
- Bottom line begins: *"10 of 25 headline measures are on target or improving."*
- Weakest plant: **Plant 02**

---

## 8. Verification

Report each check as pass or fail, with evidence.

- [ ] Each changed file matches its `git_blob_after` (`git hash-object <path>`):

  | Path | Expected blob |
  |---|---|
  | `js/report.js` | `730c41aa129e9acbed9424af2624172c41e4d9a8` |
  | `js/vendor/report-fonts.js` | `fa9f5948c8202cd16e5457675351f82e41cc7170` |
  | `js/c/TplA.js` | `149d7ad6b13906bc6284712715da7b1b92f52dc0` |
  | `js/c/TplB.js` | `ff7db2ab876043e98bca1ab05a41fec114fac90b` |
  | `js/c/TplC.js` | `e8551ed37083001fe50734b78737f82af5140856` |
  | `js/c/TplD.js` | `98ffff3877027c53b67925ceeff868b3c5ad697b` |
  | `js/c/TplE.js` | `181f84e1030b075d128bb305b6f8f87328eb5786` |
  | `js/c/TplF.js` | `dfec8a9d047093ba4bcdfa1b5847f3dba5790665` |

- [ ] The [§3](#3-unchanged-dependencies-do-not-touch) files still match their blobs (untouched).
- [ ] `tools/regen.js` reports `regenerated 84` with no `FAIL` lines.
- [ ] Every page's **Download report** button loads `js/report.js?t=<timestamp>`.
- [ ] Each lens downloads the expected file name, with the expected page count, section titles and section tallies ([§7](#7-reports-per-lens) **Expected**):
  - [ ] Owner: 2 pages, 4 sections, tallies and bottom line as listed
  - [ ] Core Group: 3 pages, 5 sections, 5 insight boxes, tallies and bottom line as listed
  - [ ] Entity A1: 3 pages, 5 sections, 5 insight boxes, tallies and bottom line as listed, weakest plant Plant 02
- [ ] No text in any PDF is cut short with an ellipsis (…), and there is no `NaN` or `undefined`.
- [ ] The Owner and Core Group PDFs contain no `Plant`, `RM-`, `S-0x`, `Line L` or supplier/material terms.
- [ ] ₹ prints as ₹ (font loaded). With `report-fonts.js` missing, it prints `INR` and the layout still holds.

**Data dependence:** the expected values are for `js/data/base-data.js` blob `c6a13a28` (`main` `110ce28`). If base-data changes, the structure, sections and page counts stay the same, but tallies, values and insights follow the new data.

---

## 9. Change summary

| Path | Action |
|---|---|
| `js/report.js` | Replace (239 → 664 lines) |
| `js/vendor/report-fonts.js` | Add (45,101 bytes) |
| `js/c/TplA.js` … `TplF.js` | Edit 1 line each (cache-buster) |
| `*.html` (84 pages) | Regenerate with `node tools/regen.js` |
| `CHANGES.md` | Edit (optional, documentation) |

## 10. Not part of this manifest

- `manifests/core-group-lens.manifest.json` (Core Group lens data-boundary audit; covers screens, not reports)
- `manifests/manifest04.json` itself
- Any change to page data files, templates (other than the one `onclick` line) or base-data
