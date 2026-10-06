# Technical Manifest — Persona Dashboard Demo (Owner Persona)

**Version:** Draft v2 · **Status updated 2026-10-06:** implemented (see Implementation Status at the end)
**Scope:** Owner persona only. Core Group Executive and Entity Executive personas are unchanged in this phase.

---

## 0. Context

- The demo is a set of static screens, with most values currently hardcoded.
- **Personas:** Owner, Core Group Executive, Entity Executive.
- **Data hierarchy (lowest → highest):** Plant → Entity → Group → Owner view.
- **Owner screens in scope:**
  1. Enterprise Overview
  2. Data Assurance (KPIs merge into Enterprise Overview; see Screen 2)
  3. Early Warning
  4. Cash & Liquidity
  5. Operational Performance
  6. Capital Projects
  7. Risk, Compliance & EHS
  8. Actions & Escalations
  9. AI Insights

---

## 1. Global Changes (apply to every Owner screen)

### 1A. Cap abstraction at Entity level

**Rule:** No Owner screen may show, name, or break down plant-level data. The lowest visible level is **Entity**.

- [x] Entity names come from the backend. Do not hardcode them. *(Pages use `[[A1]]`/`[[A2]]` tokens resolved from `DCTData.plant.scopes`.)*
- [x] Display everything **by entity**.
- [x] Apply the cap to:
  - [x] Headline KPI cards
  - [x] Charts (series, legends, axis labels, tooltips)
  - [x] Tables and sub-tables (rows, columns, footers)
  - [x] KPI drill-downs
  - [x] KPI categories and sub-themes within each screen
  - [x] Filters and dropdowns (remove "Plant" options)
  - [x] Narrative text (insights, verdicts, alerts, escalation descriptions)
  - [x] Plant-raised actions and escalations, which are re-attributed to their parent entity

**Data integrity**
- [x] Each entity value is the roll-up of its plants. Plant data stays in the data layer and is hidden from Owner.
- [x] The group value equals the sum or weighted roll-up of the entities, and totals reconcile on every screen.
- [x] Ratio and percentage KPIs (margins, utilisation, etc.) roll up by weighting, not by simple averaging.
- [x] A KPI shown on multiple screens has an identical value everywhere.

**Recommended implementation**
- [x] Move hardcoded values into one central data file structured as Plant → Entity → Group. *(Existing model `js/data/base-data.js` / `data/kpi-model/`; plus `data/owner-verdicts.json` and `data/owner-signals.json`.)*
- [x] Screens read from that file, and the Owner view renders entity and group nodes only.

### 1B. Verdict justifications (JSON)

**Rule:** Every verdict shown on an Owner screen (e.g. "Improving", "Intervention required", red/amber/green status) has a one-line justification.

**Schema**
```json
{
  "persona": "owner",
  "screen": "cash_and_liquidity",
  "section": "working_capital",
  "kpi_id": "dso",
  "level": "entity",
  "entity": "<from backend>",
  "verdict": "improving | watch | intervention_required",
  "status_color": "green | amber | red",
  "justification": "DSO up 9 days vs plan as two large receivables slipped past 60 days."
}
```

**Rules**
- [x] One sentence of 20 words or fewer, stating the metric movement plus its driver.
- [x] Numbers match the values displayed on screen.
- [x] Reference entity or group only, never plants.
- [x] The verdict and colour agree with the KPI's actual direction vs plan or threshold.
- [x] One entry per KPI × level wherever a verdict is shown.
- [x] **UI:** inline subtext under the verdict (default).
- [x] *Note:* `on_track` (green) added to the verdict enum for "On track" verdicts.

---

## 2. Screen-by-Screen Updates

### Screen 1 — Enterprise Overview

**1.1 Financials sub-theme**
- [x] **EBITDA Actual vs Plan:** replace period labels (P01, P02…) with calendar months (Apr, May…).
- [x] **EBITDA Variance Contribution by Entity:** replace P01, P02… with calendar months.
- [x] **EBITDA Variance Contribution by Entity (Forecast vs Plan):** rewrite headers to be self-explanatory.
- [x] **All Financials charts and tables:** make headers clearer.
- [x] **Financial Health Measures table:** remove it.
- [x] **Financials KPI cards:**
  - [x] Remove the **Plan** and **Forecast** parameters.
  - [x] Keep **Trend** only. Trend = month-over-month variance of the card's attribute (current month vs previous month).
  - [x] Remove the "Refreshed at [time] by [person]" tag from every card.

**1.2 Page-level**
- [x] Add a short description to every subsection in all sub-tables.
- [x] Remove the **"How totals add up"** sub-theme.
- [x] Remove the **critical alert banner** from the page entirely.

**1.3 Merge from Data Assurance (KPIs only)**
- [x] Add three sub-themes carrying the Data Assurance KPIs:
  - [x] Summary
  - [x] Data Reliability
  - [x] Data Ownership & Rules
- [x] Do **not** carry over Data Assurance's "How totals add up".
- [x] Merged KPIs follow Global Changes 1A and 1B.

**1.4 Global**
- [x] Apply 1A (entity cap) and 1B (verdict justifications).

---

### Screen 2 — Data Assurance

- [x] All KPIs move to Enterprise Overview (see 1.3).
- [x] "How totals add up" is dropped.
- [ ] *Open:* remove the standalone screen after the merge? (See Open Questions.) — **Not done:** screen kept pending your decision.

---

### Screen 3 — Early Warning

**3.1 Remove**
- [x] The **"How totals add up"** category.
- [x] All existing category content. The heat map replaces it.

**3.2 Risk heat map (the only primary element on the screen)**
- [x] **Y-axis (categories):** Last 24 Hours, Forecast, Operations, Finance, Sales & Delivery, Outside Factors, Risk.
- [x] **X-axis (risk levels):** Low, Medium, High, Critical.
- [x] **Cell value:** count of signals in that category at that risk level, coloured by intensity.
- [x] **Data sync:** every signal currently on the screen maps to a cell, and counts reconcile to the existing data.

**3.3 Drill-down (below the heat map)**
- [x] Clicking a cell opens a panel **below** the heat map.
- [x] The panel lists each signal in that cell with its entity, its value, and a one-line justification for the risk rating.
- [x] Justifications use the 1B JSON, extended with:
```json
{
  "category": "finance",
  "risk_level": "low | medium | high | critical"
}
```
- [x] Entity cap applies: no plant-level signals.

---

### Screen 4 — Cash & Liquidity
- [x] Apply 1A (entity cap) to all KPIs, drill-downs, and sub-themes.
- [x] Apply 1B (verdict justifications).

### Screen 5 — Operational Performance
- [x] Apply 1A (entity cap) to all KPIs, drill-downs, and sub-themes.
- [x] Apply 1B (verdict justifications).

### Screen 6 — Capital Projects
- [x] Apply 1A (entity cap) to all KPIs, drill-downs, and sub-themes.
- [x] Apply 1B (verdict justifications).

### Screen 7 — Risk, Compliance & EHS
- [x] Apply 1A (entity cap) to all KPIs, drill-downs, and sub-themes.
- [x] Apply 1B (verdict justifications).

### Screen 8 — Actions & Escalations
- [x] Apply 1A (entity cap). Re-attribute plant-raised items to their parent entity.
- [x] Apply 1B (verdict justifications).

### Screen 9 — AI Insights
- [x] Apply 1A (entity cap). Insight text must not reference plants.
- [x] Apply 1B (verdict justifications).

---

## 3. Acceptance Criteria

- [x] No plant name or plant value is visible anywhere in the Owner persona.
- [x] Entity values reconcile to the group total on every screen.
- [x] Every displayed verdict has a matching JSON justification.
- [x] Shared KPIs show identical values across screens.
- [x] Every period label on Enterprise Overview uses calendar months.
- [x] No "How totals add up" section remains on any screen.
- [x] Early Warning heat map counts reconcile to the underlying signals.

---

## 4. Open Questions

1. **Data Assurance screen:** remove it after merging its KPIs into Enterprise Overview?
2. **Early Warning, "Last 24 Hours" row:** this is a time window, while the other rows are topics. Should a recent signal count only in "Last 24 Hours", or also in its topic row?
3. **Financials KPI cards:** should anything be kept alongside Trend (e.g. last month's value)?

---

## 5. Suggested Phasing (feeding to Claude)

1. **Phase 1:** Global 1A data restructure (central data file, entity roll-ups).
2. **Phase 2:** Global 1B justification JSON.
3. **Phase 3:** Screen 1, Enterprise Overview (including the Data Assurance merge).
4. **Phase 4:** Screen 3, Early Warning heat map and drill-down.
5. **Phase 5:** Screens 4–9, applying the entity cap and justifications.

> Tip: when feeding a phase to Claude, include Section 0, Section 1, and that phase's screen section, and state "change nothing outside this scope."

---

## 6. Implementation Status (2026-10-06)

| Section | Status | Notes |
|---|---|---|
| 1A Entity cap | ✅ Complete | `js/data/resolve.js` caps the Owner lens at Entity; narrative rewritten on 18 Owner pages (9 screens + S-03o, S-04, S-05, S-07, S-08o, S-09, S-10, S-11, R-01o). |
| 1B Verdict justifications | ✅ Complete | `data/owner-verdicts.json` (generated by `tools/build_verdicts.js`); subtext on cards and table Status cells. |
| Screen 1 Enterprise Overview | ✅ Complete | Months, headers, captions, removals, trend-only Financials cards, Data Assurance tabs. |
| Screen 2 Data Assurance | ⚠️ Partial | KPIs merged into Enterprise Overview; standalone screen kept (open question 1). |
| Screen 3 Early Warning | ✅ Complete | Heat map (22 signals) with drill-down panel; register `data/owner-signals.json`. |
| Screens 4–9 | ✅ Complete | Covered by 1A and 1B. |
| Acceptance criteria | ✅ Passing | `node tools/check_owner.js` → "Owner checks passed". |

**Open questions: assumptions made**
1. Data Assurance screen kept until you decide.
2. "Last 24 Hours" signals are counted only in that row (no double counting).
3. Financials cards show value, verdict and justification, and Trend only.

**Follow-ups:**
- Rerun `scan_ui.js` and the export so KPI Reference picks up the retitled charts.
- KPI Reference definitions still use the generic word "plant" (e.g. "earliest plant").
- Changes are not yet committed.
