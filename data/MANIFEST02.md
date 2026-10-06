# Technical Manifest — Persona Dashboard Demo (Owner Persona)

**Version:** Draft v3 · **Status updated 2026-10-06:** implemented; all acceptance checks pass (see section 6)
**Scope:** Everything in this manifest applies **strictly to the Owner persona**. Core Group Executive and Entity Executive personas are unchanged.

---

## 0. Context

- The demo is a set of static screens, with most values currently hardcoded.
- **Personas:** Owner, Core Group Executive, Entity Executive.
- **Data hierarchy (lowest → highest):** Plant → Entity → Group → Owner view.
- **Owner screens:**

| # | Screen | Status for Owner |
|---|---|---|
| 1 | Enterprise Overview | Updated (absorbs all Data Assurance KPIs) |
| 2 | Data Assurance | Kept for now; to be removed in a future phase |
| 3 | Early Warning | Rebuilt as a heat map |
| 4 | Cash & Liquidity | Global changes only |
| 5 | Operational Performance | Global changes only |
| 6 | Capital Projects | Global changes only |
| 7 | Risk, Compliance & EHS | Global changes only |
| 8 | Actions & Escalations | **Removed for Owner** |
| 9 | AI Insights | Reduced to "Ask about this brief" only |

---

## 1. Global Changes (every remaining Owner screen)

### 1A. Cap abstraction at Entity level

**Rule:** No Owner screen may show, name, or break down plant-level data. The lowest visible level is **Entity**.

- [x] Entity names come from the backend. Do not hardcode them.
- [x] Display everything **by entity**.
- [x] Apply the cap to:
  - [x] Headline KPI cards
  - [x] Charts (series, legends, axis labels, tooltips)
  - [x] Tables and sub-tables (rows, columns, footers)
  - [x] KPI drill-downs
  - [x] KPI categories and sub-themes within each screen
  - [x] Filters and dropdowns (remove "Plant" options)
  - [x] Narrative text (insights, verdicts, alerts)

**Data integrity**
- [x] Each entity value is the roll-up of its plants. Plant data stays in the data layer and is hidden from Owner.
- [x] The group value equals the sum or weighted roll-up of the entities, and totals reconcile on every screen.
- [x] Ratio and percentage KPIs roll up by weighting, not by simple averaging.
- [x] A KPI shown on multiple screens has an identical value everywhere.

**Recommended implementation**
- [x] Move hardcoded values into one central data file structured as Plant → Entity → Group.
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
  "entity_code": "<from backend>",
  "entity_name": "<from backend>",
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

### 1C. Remove the critical notification banner
- [x] Remove the critical notification / alert banner from **every Owner screen** where it appears, **including Data Assurance**.

### 1D. Entity code + entity name
- [x] Wherever an entity **code** appears (cards, charts, legends, tables, tooltips, drill-downs, filters, justification text), show the **entity name** alongside it.
- [x] Format: `<Entity Name> (<CODE>)`, e.g. `Acme Steel (E01)`, with both values pulled from the backend.

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
  - [x] Remove the period/status tags (e.g. "Sep · Prelim", "Oct") from **every card**.

**1.2 Page-level**
- [x] Add a short description to every subsection in all sub-tables.
- [x] Remove the **"How totals add up"** sub-theme.
- [x] Remove the **critical alert banner** (see 1C).

**1.3 Data Assurance merge (ALL KPIs)**

> **Correction from v2:** the previous build carried over only one KPI ("Certified KPI %"). **Every KPI** from every Data Assurance sub-theme must be carried over.

- [x] **Inventory first:** list every KPI in Data Assurance → Summary, Data Reliability, and Data Ownership & Rules.
- [x] **Bring every KPI** into Enterprise Overview as **KPI cards**, styled like the existing Enterprise Overview cards.
- [x] **Group cards into blocks** by source sub-theme:
  - [x] Block: Summary
  - [x] Block: Data Reliability
  - [x] Block: Data Ownership & Rules
- [x] **Add a selector** (tabs or dropdown) with options: All · Summary · Data Reliability · Data Ownership & Rules. The default is All, showing every block.
- [x] **Exclude** Data Assurance's "How totals add up" KPIs.
- [x] Merged cards follow 1A, 1B, and 1D, and the card rules in 1.1 (Trend only, no refreshed tag, no period/status tag).
- [x] **Check:** the number of merged cards equals the number of KPIs in the three Data Assurance sub-themes, and values match the source screen.

**1.4 Global**
- [x] Apply 1A, 1B, 1C, and 1D.

---

### Screen 2 — Data Assurance

- [x] Keep the screen for now. It will be removed in a future phase.
- [x] Remove the critical notification banner (1C).
- [x] Its KPIs are also surfaced in Enterprise Overview (1.3).

---

### Screen 3 — Early Warning

**3.1 Remove**
- [x] The **"How totals add up"** category.
- [x] All existing category content. The heat map replaces it.
- [x] The critical notification banner (1C).

**3.2 Risk heat map (the only primary element on the screen)**
- [x] **Y-axis (categories):** Last 24 Hours, Forecast, Operations, Finance, Sales & Delivery, Outside Factors, Risk.
- [x] **X-axis (risk levels):** Low, Medium, High, Critical.
- [x] **Cell value:** count of signals in that category at that risk level, coloured by intensity.
- [x] **Data sync:** every signal currently on the screen maps to a cell, and counts reconcile to the existing data.

**3.3 Drill-down (below the heat map)**
- [x] Clicking a cell opens a panel **below** the heat map.
- [x] The panel lists each signal in that cell with its entity (name + code), its value, and a one-line justification for the risk rating.
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
- [x] Apply 1A, 1B, 1C, and 1D.

### Screen 5 — Operational Performance
- [x] Apply 1A, 1B, 1C, and 1D.

### Screen 6 — Capital Projects
- [x] Apply 1A, 1B, 1C, and 1D.

### Screen 7 — Risk, Compliance & EHS
- [x] Apply 1A, 1B, 1C, and 1D.

### Screen 8 — Actions & Escalations
- [x] **Remove this screen completely for the Owner persona**, including the nav item, routes, and any links or buttons pointing to it from other Owner screens.
- [x] Other personas keep this screen unchanged.

### Screen 9 — AI Insights
- [x] Keep **only** the **"Ask about this brief"** section.
- [x] Remove all other sections from the screen.
- [x] Responses in "Ask about this brief" follow 1A and 1D (no plant references; entity name + code).
- [x] Remove the critical notification banner (1C).

---

## 3. Acceptance Criteria (Owner persona)

- [x] No plant name or plant value is visible anywhere.
- [x] Entity values reconcile to the group total on every screen.
- [x] Every displayed verdict has a matching JSON justification.
- [x] Shared KPIs show identical values across screens.
- [x] Every period label on Enterprise Overview uses calendar months.
- [x] No Financials card shows Plan, Forecast, a refreshed tag, or a period/status tag.
- [x] Enterprise Overview contains **all** Data Assurance KPIs (excluding "How totals add up"), in blocks with a working selector.
- [x] No "How totals add up" section remains on any screen.
- [x] No critical notification banner appears on any screen.
- [x] Every entity code is shown with its entity name.
- [x] Actions & Escalations is unreachable for Owner.
- [x] AI Insights shows only "Ask about this brief".
- [x] Early Warning heat map counts reconcile to the underlying signals.
- [x] Core Group Executive and Entity Executive personas are unchanged.

---

## 4. Open Questions

1. **Early Warning, "Last 24 Hours" row:** this is a time window, while the other rows are topics. Should a recent signal count only in "Last 24 Hours", or also in its topic row?
2. **Financials KPI cards:** should anything be kept alongside Trend (e.g. last month's value)?

---

## 5. Suggested Phasing (feeding to Claude)

1. **Phase 1:** Global 1A data restructure (central data file, entity roll-ups) + 1D entity names.
2. **Phase 2:** Global 1B justification JSON + 1C banner removal.
3. **Phase 3:** Screen 1, Enterprise Overview (including the full Data Assurance KPI merge).
4. **Phase 4:** Screen 3, Early Warning heat map and drill-down.
5. **Phase 5:** Screen 8 removal + Screen 9 reduction.
6. **Phase 6:** Screens 2 and 4–7, applying the global changes.

> Tip: when feeding a phase to Claude, include Section 0, Section 1, and that phase's screen section, and state "Owner persona only; change nothing outside this scope."
---

## 6. Implementation Status (2026-10-06)

| Item | Status | Notes |
|---|---|---|
| 1A, 1B, Screen 1 months/headers/removals, Screen 3 heat map | ✅ Carried over from MANIFEST01 | Unchanged, re-verified. |
| 1B schema | ✅ Updated | `entity_code` + `entity_name` replace `entity` in `data/owner-verdicts.json` and `data/owner-signals.json`. |
| 1C Banner removal | ✅ Complete | Removed from every Owner screen in `resolve.js`, including Data Assurance. |
| 1D Entity name + code | ✅ Complete | `<Name> (<CODE>)` everywhere on Owner screens (text, legends, tables, justifications, heat-map panel), from `DCTData.plant.scopes`. |
| 1.1 Period/status tags on cards | ✅ Complete | The provenance chip (e.g. "CERT Sep · PRELIM Oct") is hidden on every Enterprise Overview card. |
| 1.3 Data Assurance merge (all KPIs) | ✅ Complete | 16 KPI cards: Summary (1), Data Reliability (6), Data Ownership & Rules (9). Selector: All · Summary · Data Reliability · Data Ownership & Rules (default All). Count and values are checked against Data Assurance. |
| Screen 2 | ✅ Complete | Kept; banner removed. |
| Screen 8 Actions & Escalations | ✅ Complete | Removed from the Owner nav; Owner visits to O-06 and O-08 redirect home (`js/persona.js`); links and buttons to it are stripped from Owner pages. |
| Screen 9 AI Insights | ✅ Complete | Shows only "Ask about this brief". |
| Core Group / Entity unchanged | ✅ Verified | Rendered text compared with the last commit. |

**Open questions: assumptions made:** (1) "Last 24 Hours" signals count only in that row. (2) Financials cards show value, verdict, justification and Trend only.
**Check:** `node tools/check_owner.js` covers every acceptance criterion in section 3. Changes are not yet committed.
