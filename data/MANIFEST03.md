# Technical Manifest — Persona Dashboard Demo (Phase 2)

**Version:** Phase 2, Draft v1 · **Status updated 2026-10-06:** implemented; all checks pass (see section 6)
**Builds on:** Technical Manifest v3. Everything in v3 still stands unless changed here.

---

## 0. Context and Scope

- **Personas:** Owner, Core Group Executive, Entity Executive.
- **Data hierarchy (lowest → highest):** Plant → Entity → Group → Owner view.
- **Default scope:** Owner persona only. Items marked **ALL PERSONAS** apply to every persona.

| # | Item | Scope |
|---|---|---|
| G1 | Entity name with entity code everywhere | ALL PERSONAS |
| G2 | Remove KPI-to-KPI hyperlinks | ALL PERSONAS |
| G3 | Fix Early Warning layout shift | ALL PERSONAS |
| S1 | Enterprise Overview → Data Assurance changes | Owner |
| S2 | Remove Data Assurance screen | Owner |
| S3a | Remove "Biggest Risks" sub-category | ALL PERSONAS |
| S3b | Restructure Risk, Compliance & EHS into 3 sections | Owner |
| S4 | Capital Projects timeline chart | Owner |
| S5 | AI Insights question history | Owner |

---

## 1. Global Changes

### G1. Entity name with entity code (ALL PERSONAS)
- [x] Wherever an entity **code** appears, show the **entity name** with it: KPI cards, KPI titles and subtitles, charts, legends, axis labels, tooltips, tables, drill-downs, filters, heat map cells, justification text, and AI responses.
- [x] Format: `<Entity Name> (<CODE>)`, e.g. `Acme Steel (E01)`.
- [x] Both values come from the backend. Nothing is hardcoded.
- [x] **Check:** no screen in any persona shows a bare entity code.

### G2. Remove KPI-to-KPI hyperlinks (ALL PERSONAS)
- [x] Clicking a KPI must **not** redirect to another KPI, screen, or section.
- [x] Remove the link wrappers, `onClick` navigation handlers, route pushes, and hover cursors or underlines that suggest a link.
- [x] **Keep** in-place interactions that open details on the same screen (Early Warning heat map drill-down, Capital Projects timeline details, verdict justifications).
- [x] **Keep** the main navigation between screens.

### G3. Fix Early Warning layout shift (ALL PERSONAS)
- [x] **Problem:** clicking on the Early Warning screen changes the screen's ratio and proportions.
- [x] Clicking a heat map cell must not resize, reflow, or rescale the heat map or the page frame.
- [x] **Fix approach:**
  - [x] Give the heat map a fixed size or aspect ratio (`aspect-ratio` or fixed height) that doesn't depend on drill-down content.
  - [x] The drill-down panel below grows downward only, with a fixed max-height and internal scroll.
  - [x] Avoid `100vh`-based sizing that recalculates on content change.
  - [x] The selected-cell highlight uses outline or box-shadow, not border-width changes.
- [x] **Check:** heat map dimensions are identical before and after every click, on desktop and mobile widths.

### G4. Status justifications (carried from v3, 1B; extended)
- [x] Every status (e.g. "Declining", "Improving", "Critical risk", "Intervention required", red/amber/green) on **KPIs and table rows** gets a **one-line justification**.
- [x] Each justification ties back to the data shown: it quotes the displayed value or movement and names the driver.
- [x] Use the v3 1B JSON schema with these fields added:
```json
{
  "section": "material_risk | compliance | ehs | ...",
  "source_type": "kpi | table_row",
  "row_id": "<for table rows>"
}
```

---

## 2. Screen-by-Screen Updates

### Screen 1 — Enterprise Overview (Owner)

**Data Assurance sub-category**
- [x] **Order:** place **Data Reliability** KPIs first (top), then Data Ownership & Rules.
- [x] **Remove the trust table:** the table listing the numbers on the page with "Yes / Yes" trust columns and a date column.
- [x] **Filters:** reduce from four to two.
  - [x] Remove **All**.
  - [x] Remove **Summary**.
  - [x] Keep **Data Reliability** (default selected) and **Data Ownership & Rules**.
- [x] Summary-block cards are removed along with the Summary filter.
- [x] Apply G1, G2, and G4.

---

### Screen 2 — Data Assurance (Owner)
- [x] **Remove the screen completely** for the Owner persona, including the nav item, route, and any links to it.
- [x] Its retained KPIs live in Enterprise Overview → Data Assurance.
- [x] Other personas keep this screen.

---

### Screen 3 — Risk, Compliance & EHS

**3a. Remove "Biggest Risks" (ALL PERSONAS)**
- [x] Remove the **Biggest Risks** sub-category from every persona.

**3b. Restructure into three sections (Owner)**
- [x] Replace the remaining sub-categories with **three sections**, in this order:
  1. **Material Risk**
  2. **Compliance**
  3. **EHS**
- [x] **Inventory first:** list every KPI card, chart, and table currently on the screen, excluding Biggest Risks.
- [x] **Classify** each item into exactly one section:

| Section | Belongs here |
|---|---|
| Material Risk | Enterprise/financial/operational/strategic risk KPIs, risk exposure, risk scores, mitigation status, and **all tables about material risks** |
| Compliance | Regulatory filings, audit findings, control effectiveness, policy breaches, open compliance actions, licence/permit status |
| EHS | Safety incidents (LTI, TRIR), near misses, environmental metrics (emissions, spills, waste), occupational health |

- [x] All tables about material risks are clubbed under **Material Risk**.
- [x] Nothing from the current screen is dropped except Biggest Risks.
- [x] Each section has its own header and a one-line description.
- [x] **Statuses:** every KPI and table-row status gets a one-line justification tied to its data (G4).
- [x] Apply G1 and G2.
- [x] **Check:** the item count before restructure (minus Biggest Risks) equals the item count after.

---

### Screen 4 — Capital Projects (Owner)

**Combine "Projects" and "Benefits Delivered" into one timeline chart**
- [x] Replace both sub-themes with a single **timeline chart**.
- [x] **X-axis:** calendar months.
- [x] **Rows:** one per project (with entity name + code, per G1).
- [x] **For each project, show:**
  - [x] **Plan:** planned start → planned end (lighter bar).
  - [x] **Actual:** actual start → actual or current end (solid bar), coloured by status (on track / delayed / at risk).
  - [x] **Benefits delivered:** milestone markers placed on the project row at the month each benefit was delivered (or planned).
- [x] Every data point from the current Projects and Benefits Delivered sub-themes appears on the chart.
- [x] Legend: Plan, Actual, Benefit planned, Benefit delivered.
- [x] **Click interaction:**
  - [x] Clicking a project bar or benefit marker shows its details in a panel **below the chart**.
  - [x] Project details: name, entity, plan vs actual dates, budget vs spend, status, one-line justification.
  - [x] Benefit details: description, planned vs delivered value, planned vs actual date, linked project, status, one-line justification.
  - [x] The selected point is highlighted. Clicking another point replaces the panel content.
- [x] Apply the G3 layout rules: the chart size stays fixed when the panel opens.
- [x] Apply G1, G2, and G4.

---

### Screen 5 — AI Insights (Owner)

**Add question history to "Ask about this brief"**
- [x] Show **previously asked questions** as a chat-style history in the section, so it looks like a user has already asked questions.
- [x] The history is **specific to this tab**.
- [x] Seed 3–5 Q&A pairs:
  - [x] Questions phrased the way an owner would ask (e.g. "Why is EBITDA below plan this month?", "Which entity is driving the cash shortfall?").
  - [x] Answers are short (2–3 lines), use entity name + code (G1), stay at entity level (no plants), and quote numbers that match the dashboard.
  - [x] Each item shows the question, a relative timestamp (e.g. "2 days ago"), and the answer, with the most recent first.
- [x] Keep the input box below or above the history, as per the existing layout.
- [x] Store the seeded history in the central data file, not inline in the component.

---

## 3. Acceptance Criteria

**ALL PERSONAS**
- [x] No bare entity code appears anywhere. It's always `Name (CODE)`.
- [x] No KPI click navigates elsewhere.
- [x] The Early Warning screen does not change size or proportion on any click.
- [x] "Biggest Risks" no longer exists on Risk, Compliance & EHS.

**Owner**
- [x] Enterprise Overview → Data Assurance shows Data Reliability first, has only two filters, and no trust table.
- [x] The Data Assurance screen is unreachable.
- [x] Risk, Compliance & EHS has exactly three sections (Material Risk, Compliance, EHS), every item is classified, and every status has a justification.
- [x] Capital Projects shows one timeline combining Projects and Benefits Delivered, with click-to-detail below the chart.
- [x] AI Insights shows the seeded question history in "Ask about this brief".
- [x] All v3 items remain in place.

---

## 4. Open Questions

1. **Trust table name:** confirm which table this is. The dictation reads roughly "numbers on your page / yes / yes / trust yes / date".
2. **Summary KPIs:** should any Summary cards move into Data Reliability or Data Ownership & Rules, or are they dropped with the filter? (Default: dropped.)
3. **Risk, Compliance & EHS restructure:** is it Owner only, or all personas like the Biggest Risks removal? (Default: Owner only.)
4. **AI Insights history:** is it one history for the AI Insights tab, or a separate history for each sub-tab if there are several? (Default: one history for the tab.)

---

## 5. Suggested Phasing (feeding to Claude)

1. **Phase A:** G1 entity names + G2 hyperlink removal (all personas, all screens).
2. **Phase B:** G3 Early Warning layout fix.
3. **Phase C:** Screen 1 (Data Assurance sub-category) + Screen 2 removal.
4. **Phase D:** Screen 3, Risk, Compliance & EHS (Biggest Risks removal + three-section restructure + justifications).
5. **Phase E:** Screen 4, Capital Projects timeline.
6. **Phase F:** Screen 5, AI Insights history.

> Tip: when feeding a phase to Claude, include Section 0, the relevant global items, and that phase's screen section, then state the scope (Owner only or all personas) and "change nothing outside this scope."
---

## 6. Implementation Status (2026-10-06)

| Item | Status | Notes |
|---|---|---|
| G1 Entity name + code | ✅ All personas | `resolve.js` renders `<Name> (<CODE>)` on every persona screen, using `DCTData.plant.scopes`; also the persona badge and page titles. `node tools/check_all.js` finds no bare code on 58 screens. |
| G2 No KPI click-throughs | ✅ All personas | KPI cards are no longer links. KPI table cells, tiles and heat-map items lose their links, and the (i) KPI Reference buttons are gone. Navigation and in-page drill-downs are kept. |
| G3 Early Warning layout | ✅ | Fixed-height cells, selection shown with an inset box-shadow, panel capped at 380 px with internal scroll. Heat map measured at 1370×428 before and after every click. |
| G4 Justifications | ✅ | Register entries now carry `source_type` (kpi / table_row) and `row_id`; material-risk table rows are justified. |
| S1 Enterprise Overview → Data Assurance | ✅ | Data Reliability first; filters are Data Reliability (default) and Data Ownership & Rules; trust table and Summary block removed. |
| S2 Data Assurance screen | ✅ | Removed from the Owner nav, redirected in `js/persona.js`, and links stripped from Owner pages. |
| S3a Biggest Risks | ✅ | Existed only on the Owner screen; removed. |
| S3b Three sections | ✅ | Material Risk, Compliance, EHS, each with a header and a one-line description; 15 items before and after. |
| S4 Capital Projects timeline | ✅ | One timeline: 4 projects plus a portfolio-benefits row, 7 benefit markers, plan/actual bars, a today line and a click-to-detail panel. The portfolio KPIs from the old Projects table appear as stats with justifications. Data: `data/owner-capex-timeline.json`. |
| S5 AI Insights history | ✅ | 4 seeded Q&A pairs, most recent first, in `data/owner-ai-history.json` → `js/data/owner-ai-history.js`. |

**Open questions: assumptions made**
1. The trust table is "Numbers on your pages and their trust state"; removed.
2. The Summary card (TRU-001) is dropped.
3. The three-section restructure is Owner only. "Biggest Risks" existed only for the Owner.
4. One history for the AI Insights tab.

**Assumption:** the compliance "clocks and deadlines" tile block includes "EHS escalation clocks running"; it is classified as one block under Compliance.

**Also applied from DCT_Change_Manifest.docx:**
- "Profit to cash" renamed to "Cash conversion and returns" on Enterprise Health and Entity Home.
- The variance chart now binds to PRD-003 and shows the two entities plus a Group total, with each entity's share of the gap.
- Login persona-card hover updated (lift, tint and shadow; respects reduced motion).
- Sidebar global legend removed from all six templates.
