# Technical Manifest — Persona Dashboard Demo (Core Group Persona)

> MANIFEST04 · 2026-10-06 · for the developer implementing the Core Group lens rework.
> Baseline: `main` at 9aab0e8 (PR #5, Owner MANIFEST01–03 applied). Read MANIFEST01–03 first: this manifest reuses their rules and code.

---

## 0. Context

- **Personas:** Owner, Core Group Executive, Entity Executive.
- **Data hierarchy (lowest → highest):** Plant → Entity → Group.
- **What Core Group is for:** compare entities, coordinate across them, and act on escalations. It is broader than the Owner (more KPIs, more depth per theme, comparison everywhere) and narrower than the Entity lens (no plant working detail).
- **Position between the other lenses:**

| | Owner (done, MANIFEST01–03) | **Core Group (this manifest)** | Entity |
|---|---|---|---|
| Lowest level shown | Entity | **Entity**, plus a bare plant watchlist for 8 operational KPIs | Plant |
| Comparison | Group headline, entity split | **Entity vs entity on every KPI**, Group total | Plant vs plant |
| KPIs | Short executive set | **112 kept** (104 entity, 8 entity + watchlist) of 145 shown today | All |
| Plant data | Never | **Name + latest value + status only, for plants off target, in a watchlist block** | Full: trends, inputs, drill-down |
| Workflow | Decisions only | **L1+ escalations, certification oversight, scenario publish, brief release** | Own tasks (L0) |

- **Core Group screens (sidebar, `MAP["Core Group"]` in TplA–F):**

| Sidebar item | Page | File |
|---|---|---|
| Home | G-01 Portfolio Home | `js/c/P2-G01-Portfolio.js` (+ `P2-G01b-PortfolioCertified.js`, journey state) |
| Enterprise Overview | G-02 Entity Performance Comparison | `js/c/P2-G02-EntityComparison.js` (G-03 Financial `P2-G03-Financial.js` is its detail) |
| Data Assurance | G-08 Certification Governance | `js/c/P2-G08-CertGovernance.js` |
| Early Warning | S-12 No-Surprises Signal Board | `js/c/P2-S12-Signals.js` |
| Cash & Liquidity | G-04 Cash and Working-Capital Drivers | `js/c/P2-G04-CashWC.js` |
| Operational Performance | G-05 Operations Benchmarking | `js/c/P2-G05-OpsBenchmark.js` |
| Capital Projects | G-06 Capex Portfolio | `js/c/P2-G06-CapexPortfolio.js` |
| Risk, Compliance & EHS | G-07 Consolidated Risk View | `js/c/P2-G07-Risk.js` |
| Actions & Escalations | G-09 Executive Escalation Center | `js/c/P2-G09-Escalations.js` |
| AI Insights | G-10 Briefing and Inquiry Pack | `js/c/P2-G10-Briefing.js` |
| (detail pages) | S-03 KPI Detail, S-04c Alert, S-05c Case, S-06 Scenario, S-07c AI Explain, S-08 Evidence, R-01 KPI Reference | `js/c/P2-S03-KPIDetail.js`, `P2-S04c-Alert.js`, `P2-S05c-Case.js`, `P2-S06-Scenario.js`, `P2-S07c-AIExplain.js`, `P2-S08-Evidence.js`, `P2-R01-KPIReference.js` |

- **Ground rules from CLAUDE.md:** never edit page HTML; change `js/` and run `node tools/regen.js` (must report `regenerated 84`, no `FAIL`); KPI values only in `js/data/base-data.js`; a shared UI change goes into all six templates TplA–F.

---

## 1. Global Changes (every Core Group screen)

### 1A. Cap abstraction at Entity level, with a plant watchlist exception

**Rule:** Core Group shows Group and entities (Entity A1, Entity A2). Plant data is shown **only** inside a *plant watchlist* block (1B) for the 8 KPIs of tier **W** in §3. Everything else is entity-level.

- [ ] Entity names and codes come from the data layer (`DCTData.plant.scopes`), never hardcoded (MANIFEST03 G1 already does this for all personas).
- [ ] Apply the cap to: KPI cards, charts (series, legends, axis labels), tables (rows, columns), tiles, drill-downs, filters and dropdowns, narrative text (insights, alerts, AI answers, brief paragraphs).
- [ ] **KPI detail (S-03)** stops at entity: a `scope=PlantNN` request falls back to its entity; calculation, monthly and trust tabs list entities only; no raw plant inputs (`planned_production_t`, `good_output_t`, …).
- [ ] **KPI Reference (R-01)** scope picker for Core Group: Group, A1, A2 only (`SCOPES` in `P2-R01-KPIReference.js` lines 9–10 currently allows Plant01–06).
- [ ] A card, row or tile whose label names a plant must not pick up that plant's value (`plantOf()` in `resolve.js`); re-attribute to the entity, as the Owner `capScope()` does.
- [ ] Group = roll-up of entities; ratios by weighting, not averaging; a KPI shown on several screens shows the same value everywhere.

**Implementation (reuse the Owner code in `js/data/resolve.js`):**
- Generalise the Owner switch: today `OWN = lens === "Owner"` drives `capScope()`, `capOwner()` and the S-03 floor. Introduce a lens policy, e.g. `CAP = {"Owner": "entity", "Core Group": "entity+watchlist"}`, and run the same cap for Core Group.
- `capOwner()` (rename `capLens()`) must **skip** blocks with `type: "watchlist"` so the watchlist keeps its plant names.
- `kpiDetail()`: apply the entity floor for Core Group exactly as for the Owner (`q.scope = capScope(q.scope)`).
- Keep the Core Group "How totals add up" tab (Entity → Group) but see 1F.

### 1B. Plant watchlist (the only place plants appear)

**Rule:** bare plant information, for showing where an entity number comes from, never for working it.

- [ ] New block type `watchlist` rendered in all six templates (TplA–F): title "Plant watchlist", one row per plant that **misses target** on a tier-W KPI (if none miss, show the single lowest plant with "on target").
- [ ] Row content: plant name with its entity code (`Plant 02 · A1`), KPI name, latest value, target, status, one-line justification (1C). Max **5 rows** per block, sorted by gap to target.
- [ ] Values come from `DCTData.kpi[ID][PlantNN]` (model data); no hand-written rows.
- [ ] **Not allowed** anywhere in Core Group: plant trend lines or monthly series, plant raw inputs, plant ranking charts or benchmark tables, plant columns in tables, plant scope options, links into a plant (KPI detail at plant scope or Entity-lens pages).
- [ ] Watchlist placement: G-05 Operational Performance (OPS-001, PLT-002, CST-001, REL-003), S-12 Early Warning (PRD-001, PRD-002, SIG-007), G-07 Risk (EHS-001).

### 1C. Status justifications (carry MANIFEST01 1B / MANIFEST03 G4 to Core Group)

**Rule:** every status shown on a Core Group screen (On track, Improving, Declining, Intervention required, red/amber/green) has a one-line justification.

- [ ] Same schema as `data/owner-verdicts.json`, with `"persona": "core_group"`; store as `data/core-group-verdicts.json` (or one file keyed by persona) and build with `tools/build_verdicts.js`.
- [ ] One sentence, ≤ 20 words, metric movement plus driver, **comparative** where it helps: "Entity A1 DSO 52.0 days, 9.9 days slower than A2, above the 45-day target."
- [ ] Numbers match the screen; entity or Group only, except watchlist rows, which may name their plant.
- [ ] Attach at render time as for the Owner (`DCTVerdicts.attach(p)`), as inline subtext under the verdict.

### 1D. Remove static and unexplained content

| Where | What | Action |
|---|---|---|
| G-03 | EBITDA bridge, driver split hand-set ("Volume (Plant 02)", price, cost, FX) | Bind steps to model KPIs (OPS-002 volume, SIG-013 price, CST-001 cost, TRS-001 FX) or show only plan → forecast total; relabel "Volume (Entity A1)" |
| G-04 | NWC bridge P06 → P07, steps hand-set ("Inventory (RM-1)") | Bind to WCP-001/WCP-003/WCP-002 movements or remove the bridge; no material codes |
| G-04 | Working-capital release opportunity by entity, hand-set | Remove, or compute from best-quartile DSO/DPO/inventory days in the model |
| G-01 | Certification calendar with `[DATE — PH]` | Remove (G-08 owns certification) |
| G-06 | Two project lists that disagree (progress chain vs prioritisation: "Line 3 debottleneck", "Kiln 2 upgrade") | One project register; show only projects above the group materiality threshold; no line or kiln names |
| G-07 | Entity × materiality matrix with "placeholder bands" | Derive each cell from the dimension's KPIs (supply: SIG-009/SIG-010, liquidity: CSH-006/LIQ-002, EHS: EHS-001/EHS-002, regulatory: REG-005, controls: CTL-004, contracts: CON-001) or label it clearly as a rating with its rule |
| S-03 | Illustrative "Plant 02 daily production" and "Variance drivers by line" | Remove for Core Group |
| S-04c | "Materiality drivers · placeholder scoring" | Remove, or show the rule with the dimension KPIs behind it |
| S-06 | Illustrative "Plant 02 production · scenario options" (kt per day-pair) | Replace with Entity A1 / Group EBITDA and cash under each option, from SCN cards in ₹ |
| G-10, S-07c | AI-drafted paragraphs at plant level ("Plant 02 reliability losses plus RM-1 cover…") | Entity-level wording; numbers from base-data |
| All | Hand-written numbers in text that disagree with base-data (PRD-002 "64%" vs 69.7%) | Read from base-data, or remove the number |

### 1E. Role scope: what Core Group does, and does not do

- [ ] Show escalations at **L1 and above**; L0 tasks (ACT-SYN-1109 "Re-sequence Line L2", ACT-SYN-1110 dispatch) appear only as a count ("L0 · Entity A1 · 2 items").
- [ ] Keep only actions Core Group owns: reassign / escalate, appoint incident commander, publish scenario (S-06), release brief (G-10), approve closure.
- [ ] Remove other roles' workflow: certifier work queue (G-08 queue → counts and overdue items only), Assurance Reviewer sampling tasks (G-08 drill "Audit checks"), evidence actions "Sample / Challenge / Reopen" (S-08), the 22-field alert header (S-04c → 6 tiles).
- [ ] No links to Entity-lens pages (`equiv`, queue rows, S-03e, S-04e, S-05e, S-08e, S-12e, E-xx). `js/persona.js` keeps redirecting, but the links go.

### 1F. "How totals add up" tab

- [ ] Keep for Core Group (Entity → Group is the comparison this lens exists for), **limited to the page's own KPI cards** (≤ 8 rows), entity columns only.
- [ ] Do not add it to detail pages (S-04c, S-05c, S-07c, S-08, G-10, G-09).
- Code: `plantTab()` and the injection at `resolve.js` ~line 377 (`DETAIL[p.lens] && /^([EGO]-|S-(?!03))/`).

### 1G. Narrative, aliases, labels

- [ ] Entity name with code everywhere (MANIFEST03 G1).
- [ ] No plant, line, kiln, meter, material (`RM-n`) or supplier code (`S-07`, `S-12`) in labels and text, outside the watchlist. Supplier codes also clash with screen IDs S-07 and S-12.
- [ ] Show the canonical KPI ID only; aliases in §3 tier **A** are not shown.
- [ ] Fix mislabels found on G-05: REL-004 labelled "PM compliance" (is Production loss from downtime); SUP-004 labelled "Single-source spend share" (removed, tier R).
- [ ] S-07c meta reads "Requester's scope only (Owner)" on the Core Group view → "Core Group".

### 1H. Critical notification banner

- [ ] Keep it for Core Group (it coordinates the response), entity-level wording, with its justification line. (Owner removed it in MANIFEST02 1C.) See Open Question 1.

---

## 2. Screen-by-Screen Updates

KPI cards: ≤ 8 per screen; every card shows Group value, the A1 / A2 split and the justified status.

### Screen 1 — Home (G-01, G-01b)
- **Cards:** FIN-001, FIN-003, FIN-004, FIN-005, OPS-001, TRU-001, EFF-002, PRD-003.
- **Keep:** entity contribution to projected EBITDA variance (bars A1 / A2, Group total); trust by entity.
- **Change:** 24-hour changes and escalations at entity level ("Entity A1 production shortfall", not "Plant 02 shortfall"; no "RM-1").
- **Remove:** certification calendar (1D); duplicate "Financial" drill table (same values as the roll-up); link to E-01; G-01b link to S-03e.

### Screen 2 — Enterprise Overview (G-02, with G-03 as its financial detail)
- **Cards (G-02):** FIN-001, FIN-003, FIN-005, FIN-008, OPS-002, WCP-001.
- **Keep:** entity × KPI matrix; EBITDA variance by entity; ROCE / FCF conversion by entity.
- **G-03:** FIN-001, FIN-002, FIN-003, FIN-005, FIN-006, FIN-007; external drivers table (SIG-013, SIG-014, TRS-001, SIG-016, SIG-017, SIG-018) at Group/entity level; EBITDA bridge per 1D. Merge the four one-row tabs (Sales volume, Price, Cost, Profit to cash) into one "Drivers" tab. FIN-007 shows "definition pending approval" until certified (no value).
- **Remove:** CST-002 variable cost; links to E-11.

### Screen 3 — Data Assurance (G-08)
- **Cards:** TRU-001, TRU-002, TRU-006, TRU-007, TRU-010, GOV-007.
- **Keep:** certification matrix leadership KPIs × entity; reconciliation tab (TRU-003, TRU-004, TRU-005, TRU-009, TRU-011); governance tab (GOV-001…GOV-009).
- **Change:** certification queue → counts per entity (open, overdue, break) with the material break named at entity level ("Production number for Entity A1 not yet certified").
- **Remove:** TRU-008 (tier R); Assurance Reviewer sampling tasks; "opens E-08" link.

### Screen 4 — Early Warning (S-12)
- **Cards:** PRD-002, PRD-003, PRD-004, PRD-005, SIG count elevated; PRD-001 relabelled "Days to first plan breach (earliest entity)".
- **Keep:** signals by segment at Group/entity level; 24-hour change report at entity level; how signals become predictions (entity-level chain).
- **Add:** plant watchlist for PRD-001, PRD-002, SIG-007 (1B).
- **Remove:** SIG-001/002/003, SIG-015, SIG-019/020 aliases; SIG-008, SIG-021 (tier R); the "(Plant 02)" signal chain title. Move SIG-007/008/009/010 out of the "Finance and exposure" segment into Operations / Supply.

### Screen 5 — Cash & Liquidity (G-04)
- **Cards:** WCP-001, WCP-004, CSH-001, CSH-004, CSH-006, LIQ-002.
- **Keep:** DSO by entity; cash, liquidity and treasury tabs (CSH-001, CSH-002, LIQ-001…004, TRS-001, TRS-002, TRS-004, PRD-004, PRD-005); FCF and FCF conversion by entity.
- **Change:** NWC bridge per 1D.
- **Remove:** "Production to cash · Entity A1" chain (Entity lens, E-05); ACT-SYN-1110 L0 task; CSH-003, WCP-005, WCP-006 (tier R); release-opportunity bars unless computed (1D).

### Screen 6 — Operational Performance (G-05) — the main rebuild
- **Cards:** OPS-001, OPS-003, PLT-002, CST-001, REL-003, OPS-002.
- **Rebuild:** "Production vs plan by plant" bars → **by entity** (A1, A2, Group); "Plant × KPI benchmark" table → **Entity × KPI benchmark** (OPS-001, PLT-002, REL-003, CST-001, OPS-003; rows A1, A2, Group); "Asset productivity by plant" and "Cost by plant" tables → entity rows, or remove.
- **Add:** plant watchlist for OPS-001, PLT-002, CST-001, REL-003 (1B).
- **Keep:** REL-004, PRD-006 at entity level; supply exposure SUP-001, SUP-005, CON-003, SIG-009, SIG-010 at entity level.
- **Remove:** REL-001, REL-002, PLT-001, PLT-004, PLT-005, CST-003, SUP-004 (tier R); environment tab (SUS-001…003 live on G-07); ACT-SYN-1109 "Re-sequence Line L2"; 30 links to S-03 at plant scope.

### Screen 7 — Capital Projects (G-06)
- **Cards:** CPX-001, CPX-002, CPX-003, CPX-004, PRG-002, PRG-003.
- **Keep:** progress chain by project (major projects, with entity); value delivered vs plan (VAL-001…003); spend minus physical progress; SIG-011; PRG-001, STR-002.
- **Change:** one project register (1D); only projects above the group materiality threshold.
- **Remove:** contractor slippage tab (SUP-006, tier R; slippage that moves a milestone shows as PRG-003 / SIG-011); PRG-004 alias.

### Screen 8 — Risk, Compliance & EHS (G-07)
- **Cards:** EFF-002, EHS-001, EHS-004, REG-005, CTL-004, GOV-004.
- **Keep:** entity × materiality matrix (derived per 1D); audit findings by entity; EHS (EHS-002…007, EHS-010), regulatory (REG-002, REG-003, REG-005, REG-010), controls (CTL-002, 003, 004, 005, 007, 010), contracts (CON-001…003), sustainability (SUS-001…003).
- **Add:** plant watchlist for EHS-001 (1B).
- **Change:** controls and regulatory tabs show exceptions only (non-zero or off target), with the full count in a single line.
- **Remove:** CTL-006, CTL-008, CTL-009, REG-001, REG-004, REG-007, REG-008, EHS-008, EHS-009 (tier R); "S-07 contract" wording.

### Screen 9 — Actions & Escalations (G-09)
- **Keep (Core Group's own job):** escalation ladder, escalations table L1+, alert without owner (routing draft), escalation effectiveness (EFF-002, EFF-006…011), repeat issues and root causes.
- **Change:** L0 level shows a count only (1E).
- **Remove:** link to E-09.

### Screen 10 — AI Insights (G-10, S-07c)
- **Keep:** pack status, pack sections, inquiry log, release decision, predictive tiles (PRD-002, PRD-003, PRD-005, PRD-006).
- **Change:** lead paragraph and AI answers at entity level, numbers from base-data (1D); S-07c question "Why did the Entity A1 production forecast fall?"; scope label "Core Group".

### Detail pages
- **S-03 KPI Detail:** entity floor (1A); remove the two illustrative charts; no links to S-03e or E-08.
- **S-04c Alert:** 6 header tiles (state, materiality, entity, owner, due, exposure); impact at entity level; recommended actions only if blocked or escalated to Core Group.
- **S-05c Case:** keep ownership, impact and closure; live facts at entity level; actions list L1+ only (keep ACT-SYN-1108, blocked, needs Core Group).
- **S-06 Scenario:** options in ₹ EBITDA and cash for Entity A1 / Group; assumptions as count + owner roles.
- **S-08 Evidence:** completeness % and missing items; no reviewer actions.
- **R-01 KPI Reference:** scopes Group / A1 / A2; only KPIs of tier E and W; definitions kept; drop the "graphs / tables and tiles" source audits and the "Added by the model" tab from the Core Group view.

---

## 3. KPI Register (Core Group)

**Tiers**
- **E — Entity cap:** shown for Group, Entity A1 and Entity A2. Plant-built KPIs show the entity roll-up only.
- **W — Entity cap + plant watchlist:** as E, plus a watchlist row (1B) for each plant that misses target.
- **R — Remove from Core Group:** stays in the catalogue and the Entity lens.
- **A — Alias:** same measure as another ID; show the canonical ID only.

**Totals:** 145 KPIs on Core Group screens today → **104 E + 8 W kept (112)**, 25 R and 8 A removed.
"On screens now" is measured on `main` 9aab0e8 (every KPI ID the resolved page contains, including roll-up tabs).

| KPI | Measure | Model level | Tier | On screens now | Target screen(s) | Note |
|---|---|---|---|---|---|---|
| CON-001 | Contracts expiring, next 90 days | entity | E | G-07 | G-07 |  |
| CON-002 | Contract-compliance rate | entity | E | G-07 | G-07 |  |
| CON-003 | Supplier EHS non-compliance | entity | E | G-05, G-07 | G-05, G-07 |  |
| CPX-001 | Approved capex budget | entity | E | G-06 | G-06 |  |
| CPX-002 | Committed capex | entity | E | G-06 | G-06 |  |
| CPX-003 | Capex actual spend YTD | entity | E | G-06 | G-06 |  |
| CPX-004 | Capex physical progress, weighted | entity | E | G-01, G-06 | G-06 |  |
| CSH-001 | Cash position | entity | E | G-04, G-08 | G-04 |  |
| CSH-002 | Cash released YTD | entity | E | G-04 | G-04 |  |
| CSH-003 | Daily collections | entity | R | G-04 | — | Daily collections is a treasury operations metric |
| CSH-004 | Cash-conversion cycle | entity | E | G-04 | G-04 |  |
| CSH-006 | Cash-upstream exposure | entity | E | G-04, G-10, S-04 | G-04 |  |
| CST-001 | Cost per tonne | plant | W | G-03, G-05 | G-05 | Entity cap + plant watchlist row when a plant misses target |
| CST-002 | Variable cost | plant | R | G-03, G-05 | — | Variable cost; cost per tonne (CST-001) carries the cost story |
| CST-003 | Fuel cost | plant | R | G-05, S-12 | — | Fuel cost ₹ m; covered by CST-001 and fuel exposure SIG-017 |
| CST-004 | Power cost per tonne | plant | R | S-12 | — | Power cost per tonne; same story as SIG-018 |
| CTL-002 | Control failures YTD | entity | E | G-07 | G-07 |  |
| CTL-003 | Assurance reviews completed | entity | E | G-07 | G-07 |  |
| CTL-004 | High-severity control failures YTD | entity | E | G-07 | G-07 |  |
| CTL-005 | Policy exceptions YTD | entity | E | G-07 | G-07 |  |
| CTL-006 | Unauthorised-vendor usage YTD | entity | R | G-07 | — | Zero counter; fold into CTL-002 control failures |
| CTL-007 | Segregation-of-duties exceptions YTD | entity | E | G-07 | G-07 |  |
| CTL-008 | Unauthorised-access events YTD | entity | R | G-07 | — | Zero counter; fold into CTL-002 control failures |
| CTL-009 | Data-sharing exceptions YTD | entity | R | G-07 | — | Zero counter; fold into CTL-002 control failures |
| CTL-010 | Manual overrides YTD | entity | E | G-07 | G-07 |  |
| EFF-002 | Open critical alerts | entity | E | G-01, G-02, G-07, G-09 | G-01, G-07, G-09 |  |
| EFF-006 | Alerts without accepted owners | entity | E | G-09 | G-09 |  |
| EFF-007 | Overdue actions | entity | E | G-09 | G-09 |  |
| EFF-008 | Average resolution time | entity | E | G-09 | G-09 |  |
| EFF-009 | Closed escalations, last 30 days | entity | E | G-09 | G-09 |  |
| EFF-010 | Repeat issues, last 90 days | entity | E | G-09 | G-09 |  |
| EFF-011 | Root causes eliminated YTD | entity | E | G-09 | G-09 |  |
| EHS-001 | TRIR | plant | W | G-07, G-08 | G-07 | Entity cap + plant watchlist row when a plant misses target |
| EHS-002 | Severity incidents | plant | E | G-01, G-07 | G-07 | Plant-built; show entity roll-up only |
| EHS-003 | Near misses | plant | E | G-07 | G-07 | Plant-built; show entity roll-up only |
| EHS-004 | Critical safety incidents | plant | E | G-07 | G-07 | Plant-built; show entity roll-up only |
| EHS-005 | Environmental excursions | plant | E | G-07 | G-07 | Plant-built; show entity roll-up only |
| EHS-006 | Open EHS corrective actions | plant | E | G-07 | G-07 | Plant-built; show entity roll-up only |
| EHS-007 | Overdue EHS actions | plant | E | G-07 | G-07 | Plant-built; show entity roll-up only |
| EHS-008 | EHS escalation clocks running | plant | R | G-07 | — | Workflow counter (escalation clocks) |
| EHS-009 | EHS investigation completion | plant | R | G-07 | — | Duplicate of EHS-010 investigation completion |
| EHS-010 | EHS investigation completion rate YTD | plant | E | G-07 | G-07 | Plant-built; show entity roll-up only |
| FIN-001 | EBITDA YTD | entity | E | G-01, G-02, G-03, G-08, S-07 | G-01, G-02 |  |
| FIN-002 | EBIT YTD | entity | E | G-01, G-03 | G-02 |  |
| FIN-003 | Revenue YTD | plant | E | G-01, G-02, G-03, G-08 | G-01, G-02 | Plant-built; show entity roll-up only |
| FIN-004 | Free cash flow YTD | entity | E | G-01, G-03 | G-01, G-04 |  |
| FIN-005 | ROCE, annualised | entity | E | G-01, G-02, G-03 | G-01, G-02 |  |
| FIN-006 | Net debt | entity | E | G-01, G-03 | G-02 |  |
| FIN-007 | Shareholder-value indicator (economic profit YTD) | entity | E | G-03, G-08 | G-02 |  |
| FIN-008 | FCF conversion (FCF ÷ EBITDA) | entity | E | G-02, G-03 | G-02, G-04 |  |
| GOV-001 | Ageing certification approvals | entity | E | G-08 | G-08 |  |
| GOV-002 | KPI overrides | entity | E | G-08 | G-08 |  |
| GOV-003 | Recurring data-quality issues | entity | E | G-08 | G-08 |  |
| GOV-004 | Open audit findings | entity | E | G-07, G-08 | G-08, G-07 |  |
| GOV-005 | Overdue assurance actions | entity | E | G-08 | G-08 |  |
| GOV-006 | Repeat findings | entity | E | G-08 | G-08 |  |
| GOV-007 | Leadership KPIs affected by findings | entity | E | G-08 | G-08 |  |
| GOV-008 | Evidence completeness rate | entity | E | G-08 | G-08 |  |
| GOV-009 | Average finding-closure time | entity | E | G-08 | G-08 |  |
| LIQ-001 | Liquidity runway | entity | E | G-04 | G-04 |  |
| LIQ-002 | Covenant headroom | entity | E | G-04 | G-04 |  |
| LIQ-003 | Debt-maturity exposure, next 12 months | entity | E | G-04 | G-04 |  |
| LIQ-004 | Financing exposure (floating-rate debt) | entity | E | G-04 | G-04 |  |
| OPS-001 | Production vs plan | plant | W | G-01, G-02, G-03, G-05, G-08, G-10, S-04, S-07 | G-01, G-05 | Entity cap + plant watchlist row when a plant misses target |
| OPS-002 | Sales vs plan | plant | E | G-01, G-03 | G-02, G-05 | Plant-built; show entity roll-up only |
| OPS-003 | Capacity utilization | plant | E | G-05 | G-05 | Plant-built; show entity roll-up only |
| OPS-005 | Capacity utilisation | plant | A | G-01 | — | Alias of OPS-003; show OPS-003 only |
| PLT-001 | Asset utilization | plant | R | G-05 | — | Asset utilisation; OEE (PLT-002) carries availability |
| PLT-002 | OEE | plant | W | G-05 | G-05 | Entity cap + plant watchlist row when a plant misses target |
| PLT-004 | Recovery percentage | plant | R | G-05, S-12 | — | Process metric (recovery); covered by OEE |
| PLT-005 | Yield | plant | R | G-05, S-12 | — | Process metric (yield); covered by OEE |
| PRD-001 | Days to breach (earliest plant) | plant | W | S-12, S-07 | S-12 | Entity cap + plant watchlist row when a plant misses target |
| PRD-002 | Probability of production plan miss, next month | plant | W | G-01, G-10, S-12 | S-12 | Entity cap + plant watchlist row when a plant misses target |
| PRD-003 | Projected EBITDA gap, rest of year | entity | E | G-01, G-03, G-10, S-12 | G-01, S-12 |  |
| PRD-004 | Projected liquidity gap, next 90 days | entity | E | G-01, G-04, S-12 | S-12, G-04 |  |
| PRD-005 | Forecast covenant breach | entity | E | G-04, G-10, S-12, S-07 | S-12, G-04 |  |
| PRD-006 | Production loss from downtime, next month | plant | E | G-05, G-10 | S-12, G-05 | Plant-built; show entity roll-up only |
| PRG-001 | Capex project status | entity | E | G-06 | G-06 |  |
| PRG-002 | Benefits realisation | entity | E | G-06 | G-06 |  |
| PRG-003 | Delayed projects | entity | E | G-06 | G-06 |  |
| PRG-004 | Capex / transformation progress | entity | A | G-01 | — | Alias of STR-002; show STR-002 only |
| REG-001 | Pending filings | plant | R | G-07 | — | Zero counter; fold into REG-005 overdue obligations |
| REG-002 | Regulatory deadlines, next 30 days | plant | E | G-07, S-12 | G-07 | Plant-built; show entity roll-up only |
| REG-003 | Licence expirations, next 12 months | plant | E | G-07, S-12 | G-07 | Plant-built; show entity roll-up only |
| REG-004 | Regulatory obligations due, next 30 days | plant | R | G-07 | — | Overlaps REG-002 deadlines in 30 days |
| REG-005 | Overdue regulatory obligations | plant | E | G-07 | G-07 | Plant-built; show entity roll-up only |
| REG-007 | Open regulatory actions | plant | R | G-07 | — | Zero counter; fold into REG-005 |
| REG-008 | Overdue compliance actions | plant | R | G-07 | — | Zero counter; fold into REG-005 |
| REG-010 | Regulatory breaches YTD | plant | E | G-01 | G-07 | Plant-built; show entity roll-up only |
| REL-001 | MTBF | plant | R | G-05 | — | Maintenance metric (MTBF) |
| REL-002 | Mean Time to Repair | plant | R | G-05 | — | Maintenance metric (MTTR) |
| REL-003 | Unplanned downtime | plant | W | G-05, S-12 | G-05 | Entity cap + plant watchlist row when a plant misses target |
| REL-004 | Production loss from downtime | plant | E | G-05 | G-05 | Plant-built; show entity roll-up only |
| SIG-001 | Unplanned downtime | plant | A | S-12 | — | Alias of REL-003; show REL-003 only |
| SIG-002 | Yield | plant | A | S-12 | — | Alias of PLT-005; show PLT-005 only |
| SIG-003 | Recovery percentage | plant | A | S-12 | — | Alias of PLT-004; show PLT-004 only |
| SIG-004 | Collections slippage | entity | E | G-04, S-12 | S-12 |  |
| SIG-005 | Payment delays | entity | E | G-04, S-12 | S-12 |  |
| SIG-006 | Cash burn signal | entity | E | S-12 | S-12 |  |
| SIG-007 | Production at risk | plant | W | S-12, S-04 | S-12 | Entity cap + plant watchlist row when a plant misses target |
| SIG-008 | Critical plant-state alerts | plant | R | S-12 | — | Plant-state alert count; EFF-002 open critical alerts covers it |
| SIG-009 | Critical-material shortage risk | plant | E | S-12, S-04, S-05, S-07 | S-12, G-05 | Plant-built; show entity roll-up only |
| SIG-010 | Single-source supply risk | entity | E | S-12 | S-12, G-05 |  |
| SIG-011 | Capex value at risk | entity | E | G-06, S-12 | S-12, G-06 |  |
| SIG-012 | Dispatch delays | plant | E | S-12 | S-12 | Plant-built; show entity roll-up only |
| SIG-013 | Pricing pressure | plant | E | G-03, S-12 | G-02 | Plant-built; show entity roll-up only |
| SIG-014 | Commodity-price movement (RM-1 index) | entity | E | G-03, S-12 | G-02, S-12 |  |
| SIG-015 | FX exposure, unhedged | entity | A | G-03, S-12 | — | Alias of TRS-001; show TRS-001 only |
| SIG-016 | Freight exposure (lanes disrupted) | entity | E | G-03, S-12, S-07 | G-02, S-12 |  |
| SIG-017 | Fuel exposure (fuel cost per tonne, MoM) | plant | E | G-03, S-12 | G-02 | Plant-built; show entity roll-up only |
| SIG-018 | Power-cost exposure (power cost per tonne, MoM) | plant | E | G-03, S-12 | G-02 | Plant-built; show entity roll-up only |
| SIG-019 | Regulatory deadlines, next 30 days | plant | A | S-12 | — | Alias of REG-002; show REG-002 only |
| SIG-020 | Licence expirations, next 12 months | plant | A | S-12 | — | Alias of REG-003; show REG-003 only |
| SIG-021 | Environmental violations | plant | R | S-12 | — | Same story as EHS-005 environmental excursions |
| STR-002 | Transformation progress | entity | E | G-06 | G-06 |  |
| SUP-001 | Supplier on-time delivery | plant | E | G-05 | G-05 | Plant-built; show entity roll-up only |
| SUP-004 | Supplier lead-time variance | plant | R | G-05 | — | Procurement metric (lead-time variance); also mislabelled on G-05 |
| SUP-005 | Critical supplier exposure | entity | E | G-05 | G-05 |  |
| SUP-006 | Contractor slippage | entity | R | G-06 | — | Project-level days; PRG-003 delayed projects and SIG-011 cover it |
| SUS-001 | Water usage | plant | E | G-05, G-07 | G-07 | Plant-built; show entity roll-up only |
| SUS-002 | Emissions | plant | E | G-05, G-07 | G-07 | Plant-built; show entity roll-up only |
| SUS-003 | Energy intensity | plant | E | G-05, G-07 | G-07 | Plant-built; show entity roll-up only |
| TRS-001 | FX exposure, unhedged | entity | E | G-03, G-04, S-12 | G-02, G-04 |  |
| TRS-002 | Hedging effectiveness | entity | E | G-04 | G-04 |  |
| TRS-004 | Hedge cover, next 6 months | entity | E | G-04 | G-04 |  |
| TRU-001 | Certified KPI percentage | entity | E | G-01, G-02, G-08 | G-01, G-08 |  |
| TRU-002 | Uncertified KPI count | entity | E | G-08 | G-08 |  |
| TRU-003 | Variance against Board number (EBITDA) | entity | E | G-08 | G-08 |  |
| TRU-004 | Open reconciliation breaks | entity | E | G-08 | G-08 |  |
| TRU-005 | KPI certification coverage | entity | E | G-08 | G-08 |  |
| TRU-006 | Overdue certifications | entity | E | G-08 | G-08 |  |
| TRU-007 | Material reconciliation breaks | entity | E | G-08 | G-08 |  |
| TRU-008 | Source-to-Lake reconciliation rate | entity | R | G-08 | — | Data-platform metric (source-to-lake) for the data team |
| TRU-009 | Flash-to-MIS reconciliation rate | entity | E | G-08 | G-08 |  |
| TRU-010 | Flash-to-close variance | entity | E | G-08 | G-08 |  |
| TRU-011 | Largest entity variance against Board numbers | entity | E | G-08 | G-08 |  |
| VAL-001 | EBITDA benefit YTD | entity | E | G-06 | G-06 |  |
| VAL-002 | Cash benefit YTD | entity | E | G-06 | G-06 |  |
| VAL-003 | Cost savings delivered YTD | entity | E | G-06 | G-06 |  |
| WCP-001 | DSO | entity | E | G-02, G-04, G-08 | G-04 |  |
| WCP-002 | DPO | entity | E | G-04 | G-04 |  |
| WCP-003 | Inventory days | entity | E | G-04 | G-04 |  |
| WCP-004 | Net working capital | entity | E | G-04 | G-04 |  |
| WCP-005 | Working-capital movement | entity | R | G-04 | — | Month movement of WCP-004; the NWC trend shows it |
| WCP-006 | Working-capital days | entity | R | G-04 | — | Near-duplicate of CSH-004 cash-conversion cycle with a different value (35.7 vs 32.6 days): confusing |

---

## 4. Acceptance Criteria (Core Group persona)

- [ ] No Core Group screen or drill-down shows a plant name or value **outside a `watchlist` block**; watchlists contain only tier-W KPIs, ≤ 5 rows, no links.
- [ ] S-03 at `?scope=Plant02` for Core Group shows Entity A1, not Plant 02; R-01 offers Group / A1 / A2 only.
- [ ] No tier R or tier A KPI ID appears on a Core Group screen.
- [ ] Every tier E and W KPI appears on its target screen(s) in §3.
- [ ] Each KPI shows the same value on every Core Group screen (per scope).
- [ ] Every status shown has a justification (≤ 20 words, numbers match the screen).
- [ ] No `[PH]`, `placeholder`, "hand-set" or "illustrative" visual remains on a Core Group screen (R-01 source audit lists none for Core Group).
- [ ] No L0 tasks, certifier queue rows, assurance sampling tasks or evidence actions on Core Group screens.
- [ ] No links to Entity-lens pages from Core Group pages.
- [ ] `node tools/regen.js` → `regenerated 84`, no `FAIL`; `node tools/check_all.js` passes, including the new Core Group check.

**New check — `tools/check_core_group.js`** (model it on `tools/check_owner.js`, add to `tools/check_all.js`):
1. Load every Core Group page (the list in §0) plus extra queries: S-03 `?kpi=OPS-001&scope=Plant02`, `?kpi=OPS-001&scope=A1`, `?kpi=FIN-001&scope=Group`; R-01 `?scope=Plant01`.
2. Fail on any string matching `/\bPlants? ?0?\d\d?\b/` outside a `type: "watchlist"` block (ignore `.h`, `.href`, `.src`).
3. Fail if a watchlist row's KPI is not tier W, or a watchlist has > 5 rows or any link.
4. Fail if a tier R / A ID appears; fail if a tier E / W ID is missing from its target screen.
5. Same-value check across screens and justification check, as in `check_owner.js`.
6. Fail on `/\[(DATE|PH)|placeholder|hand-set|illustrative/i` in Core Group page text.

---

## 5. Open Questions (defaults in brackets; the developer applies the default unless told otherwise)

1. **Critical banner:** keep for Core Group with entity-level wording and a justification? *(Default: keep.)*
2. **G-03 Financial:** keep as a separate page reached from Enterprise Overview, or merge into G-02 as a "Financial drivers" tab like the Owner merges? *(Default: keep separate, with the four one-row tabs merged.)*
3. **Watchlist when every plant is on target:** show the single lowest plant marked "on target", or hide the block? *(Default: show the lowest plant.)*
4. **FIN-007 Shareholder value:** show "definition pending approval" without a value, or hide until certified? *(Default: show pending, no value.)*
5. **Tier R list (25 KPIs):** confirm with the business before removal; any ID can move to tier E without other changes. *(Default: remove as listed.)*
6. **"How totals add up":** keep limited to the page's cards (1F), or remove as for the Owner? *(Default: keep, limited.)*

---

## 6. Suggested Phasing (feeding to Claude or a developer)

1. **Phase 1 — Global cap:** 1A (resolve.js lens policy, S-03 floor, R-01 scopes, `plantOf` re-attribution) + 1G labels and links. Run regen; most plant references disappear here.
2. **Phase 2 — Watchlist:** 1B block in TplA–F + data from base-data; place it on G-05, S-12, G-07.
3. **Phase 3 — KPI register:** remove tier R / A IDs from page data; check every tier E / W KPI is on its target screen.
4. **Phase 4 — G-05 rebuild** (entity benchmark, watchlist), then G-04, G-06, G-07, G-08 per §2.
5. **Phase 5 — Static content (1D) and role scope (1E):** bridges, calendars, placeholders, illustrative charts, L0 tasks, other roles' workflow; detail pages.
6. **Phase 6 — Justifications (1C):** `core-group-verdicts.json` via `tools/build_verdicts.js`, attach at render.
7. **Phase 7 — Checks and sync:** `tools/check_core_group.js` in `check_all.js`; sync the "shown on screen" columns of `data/kpi-model/Group-KPI-Model.xlsx` (pattern: `tools/sync_owner_workbook.py`, `tools/owner_screen_dump.js`); update `CHANGES.md` and `docs/Control Tower Screen Reference.docx`.

---

## 7. Implementation Status

Applied 2026-10-06. §5 defaults taken for all six open questions (banner kept, G-03 separate with one Drivers tab, lowest plant shown when none miss, FIN-007 pending without value, tier R removed as listed, roll-up tab kept and limited to the page's cards).

| Phase | Status | Where |
|---|---|---|
| 1 Global cap | Done | `resolve.js`: lens policy `CAPL` (Owner, Core Group), `capScope` on cards, rows and tiles, S-03 entity floor; R-01 scopes Group / A1 / A2 |
| 2 Watchlist | Done | Block `watchlist` (TplA–F render it as a table; `resolve.js watchlist()` fills it from the model); on G-05, S-12, G-07 |
| 3 KPI register | Done | Tier R / A IDs removed from Core Group pages; R-01 lists the 112 tier E / W KPIs |
| 4 Screen rebuilds | Done | G-05 entity benchmark; G-01, G-02, G-03, G-04, G-06, G-07, G-08, S-12 per §2 |
| 5 Static content, role scope | Done | G-03 bridge = plan → forecast with PRD-003; NWC bridge, release bars, calendar, prioritisation list, placeholder bands, illustrative charts removed; G-07 matrix rated from KPIs (`krate`); controls/regulatory exceptions only (`exceptOnly`); L0 tasks as counts; S-04c 6 tiles; S-06 options in ₹ (scaled from PRD-003 / CSH-006, rule in caption); S-08 no reviewer actions |
| 6 Justifications | Done | `node tools/build_verdicts.js core_group` → `data/core-group-verdicts.json`, `js/data/core-group-verdicts.js` |
| 7 Checks and sync | Partly | `tools/check_core_group.js` (in `check_all.js`) passes; CHANGES.md updated. Not done: Group-KPI-Model.xlsx "shown on mockups" sync, Screen Reference .docx |

