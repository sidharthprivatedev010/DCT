# Screen map by lens: who builds what

Every screen in the prototype, grouped by lens (**Owner**, **Core Group**, **Entity**), so the work can be split. Fill in the **Assignee** column.

Each screen is two files: `P2-<code>.html` (the shell) and `js/c/P2-<code>.js` (its data). Don't edit the HTML by hand: on load it is redrawn from the JS. The lens column comes from the `"lens"` key in each JS file.

Totals: Owner 18 (+2 form-factor variants) · Core Group 18 · Entity 19 · plus shared items.

---

## 1. Owner lens (18 screens)

The Group summary for the owner. Shows the fewest numbers and the decisions that need making.

### Owner-only screens (O-series)
| # | Code | Screen | Files | Assignee |
|---|---|---|---|---|
| 1 | O-01 | Enterprise Health (Owner home) | `P2-O01-EnterpriseHealth` | |
| 2 | O-02 | Early Warning · Risk Heat Map | `P2-O02-ChangeReport` | |
| 3 | O-03 | Cash & Liquidity Dashboard | `P2-O03-CashLiquidity` | |
| 4 | O-04 | Major Capex and Strategic Initiatives | `P2-O04-Capex` | |
| 5 | O-05 | Material Risk, Compliance and EHS | `P2-O05-Risk` | |
| 6 | O-06 | Decisions Required | `P2-O06-Decisions` | |
| 7 | O-07 | AI Insights · Ask about this brief | `P2-O07-Brief` | |
| 8 | O-08 | Active War Room · WR-SYN-0142 | `P2-O08-WarRoom` | |
| 9 | O-09 | Operations and Assets | `P2-O09-Operations` | |
| 10 | G-08o | Trust Summary (Owner depth) | `P2-G08o-OwnerTrust` | |

### Owner versions of shared screens (S-series)
| # | Code | Screen | Files | Assignee |
|---|---|---|---|---|
| 11 | S-03o | KPI Detail and Lineage | `P2-S03o-KPIDetail` | |
| 12 | S-04 | Alert Detail · ALT-SYN-2041 | `P2-S04-Alert` | |
| 13 | S-05 | Case Detail · CASE-SYN-0388 | `P2-S05-Case` | |
| 14 | S-07 | AI Explanation · Plant 02 forecast | `P2-S07-AIExplain` | |
| 15 | S-08o | Evidence and Audit Trail | `P2-S08o-Evidence` | |
| 16 | S-09 | Entity Contribution · EBITDA gap | `P2-S09-Contribution` | |
| 17 | S-10 | Operations Impact · Plant 02 | `P2-S10-OpsImpact` | |
| 18 | S-11 | Cash Exposure · supply issue → cash | `P2-S11-CashExposure` | |

### Owner form-factor variants (P3)
| Code | Screen | Files | Assignee |
|---|---|---|---|
| O-01 L | Enterprise Health on a large display (≥1600 px) | `P3-L-LargeDisplay` | |
| O-07 M | Daily Executive Brief, compact mobile | `P3-M-MobileBrief` | |

---

## 2. Core Group lens (18 screens)

The comparison view across the Group: Entity A1 and A2, and Plants 01–06.

### Core Group screens (G-series)
| # | Code | Screen | Files | Assignee |
|---|---|---|---|---|
| 1 | G-01 | Portfolio Home (Core Group home) | `P2-G01-Portfolio` | |
| 2 | G-01b | Portfolio Home, after the T7 certification decision | `P2-G01b-PortfolioCertified` | |
| 3 | G-02 | Entity Performance Comparison | `P2-G02-EntityComparison` | |
| 4 | G-03 | Financial and Value Performance | `P2-G03-Financial` | |
| 5 | G-04 | Cash and Working-Capital Drivers | `P2-G04-CashWC` | |
| 6 | G-05 | Operations Benchmarking | `P2-G05-OpsBenchmark` | |
| 7 | G-06 | Capex Portfolio | `P2-G06-CapexPortfolio` | |
| 8 | G-07 | Consolidated Risk View | `P2-G07-Risk` | |
| 9 | G-08 | Certification Governance | `P2-G08-CertGovernance` | |
| 10 | G-09 | Executive Escalation Center | `P2-G09-Escalations` | |
| 11 | G-10 | Briefing and Inquiry Pack | `P2-G10-Briefing` | |

### Core Group versions of shared screens (S-series)
| # | Code | Screen | Files | Assignee |
|---|---|---|---|---|
| 12 | S-03 | KPI Detail and Lineage | `P2-S03-KPIDetail` | |
| 13 | S-04c | Alert Detail | `P2-S04c-Alert` | |
| 14 | S-05c | Case Detail | `P2-S05c-Case` | |
| 15 | S-06 | Scenario Analysis · RM-1 alternate sourcing | `P2-S06-Scenario` | |
| 16 | S-07c | AI Explanation | `P2-S07c-AIExplain` | |
| 17 | S-08 | Evidence and Audit Trail | `P2-S08-Evidence` | |
| 18 | S-12 | No-Surprises Signal Board | `P2-S12-Signals` | |

---

## 3. Entity lens (19 screens)

The working view for Entity A1 and Plants 01–03. It shows the most detail. Under rule C-05 the Entity lens sees only A1 and its plants.

### Entity screens (E-series)
| # | Code | Screen | Files | Assignee |
|---|---|---|---|---|
| 1 | E-01 | Entity Home · Entity A1 | `P2-E01-EntityHome` | |
| 2 | E-02 | Plant and Production Performance | `P2-E02-Plants` | |
| 3 | E-03 | Asset Reliability and Recovery | `P2-E03-Reliability` | |
| 4 | E-04 | Supply and Contractor Dependencies | `P2-E04-Supply` | |
| 5 | E-05 | Production-to-Cash Lifecycle | `P2-E05-ProductionCash` | |
| 6 | E-06 | Entity Capex Execution | `P2-E06-Capex` | |
| 7 | E-07 | Regulatory and EHS Workbench | `P2-E07-RegEHS` | |
| 8 | E-08 | KPI Certification Workbench | `P2-E08-CertWorkbench` | |
| 9 | E-09 | My Alerts, Cases and Actions | `P2-E09-MyWork` | |
| 10 | E-10 | Action Closure Detail · INC-SYN-0142 | `P2-E10-Closure` | |
| 11 | E-11 | Entity Financial Health | `P2-E11-Financial` | |

### Entity versions of shared screens (S-series)
| # | Code | Screen | Files | Assignee |
|---|---|---|---|---|
| 12 | S-03e | KPI Detail and Lineage | `P2-S03e-KPIDetail` | |
| 13 | S-04e | Alert Detail | `P2-S04e-Alert` | |
| 14 | S-05e | Case Detail | `P2-S05e-Case` | |
| 15 | S-06e | Scenario Analysis | `P2-S06e-Scenario` | |
| 16 | S-08e | Evidence and Audit Trail | `P2-S08e-Evidence` | |
| 17 | S-12e | No-Surprises Signal Board · Entity A1 | `P2-S12e-Signals` | |
| 18 | S-13 | Ask Control Tower | `P2-S13-Ask` | |
| 19 | R-01e | KPI Reference (Entity view) | `P2-R01e-KPIReference` | |

---

## 4. Shared and cross-lens items (one owner each)

| Item | Files | Notes | Assignee |
|---|---|---|---|
| R-01 KPI Reference (default and Owner view) | `P2-R01-KPIReference`, `P2-R01o-KPIReference` | Formulas and values, read from base-data | |
| State gallery | `P2-X-States` | Empty, loading and error states | |
| Screen inventory | `P2-00-Index` | Update it when screens are added or removed | |
| Shared templates | `js/c/TplA.js` … `TplF.js` | **A change to one must go to all six.** Give this to one person so the six don't drift apart. | |
| Data model | `data/kpi-model/*`, `js/data/base-data.js` | KPI numbers for every lens. Change the model's inputs and rebuild; never hand-edit the numbers. | |
| Design system | `P3-00-Tokens`, `P3-01-Library` | Tokens and the component library | |

Phase 1 pages (`P1-*`: personas, architecture, permissions, catalogue and so on) are documentation, not lens screens.

---

## Suggested split

- **One person per lens** (Owner / Core Group / Entity). They own that lens's home screen and its S-series versions, so each lens keeps the same voice and depth.
- **One person for shared infrastructure** (templates, data model, R-01, index). Lens owners send that person any change to a template or a KPI value instead of making it themselves.
- **Shared S-series screens** (S-03…S-08, S-12) exist in two or three lens versions. The story and IDs (ALT-SYN-2041, CASE-SYN-0388, INC-SYN-0142) must match across those versions, so the lens owners should check each other's versions.
