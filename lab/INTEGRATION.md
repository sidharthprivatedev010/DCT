> **Integrated (branch feature/overview-visuals):** the library now lives at `js/c/dc-viz.js` and the app's templates render it. See CHANGES.md for where each visual sits; `tools/place-visuals.js` holds their data.

# Visual lab: overview visuals

Two pages: `lab/viz-lab.html` (detailed versions) and `lab/viz-simple.html` (simpler versions, one message each, with design principles and sources). Open them (serve the `DCT/` folder: `python3 -m http.server`, then go to `/lab/viz-lab.html`).
Nothing in the app links to it, and `tools/regen.js` only reads root-level pages, so the lab doesn't touch any app page.

## Files

| File | What it is |
|---|---|
| `js/c/dc-viz.js` (moved from `lab/js/`) | `DCViz`: 11 block types → flat SVG scenes. Pure JS; runs in the browser and in Node (regen). Also exports `DCViz.snippet` (the markup) and a small hover layer. |
| `lab/js/VizLab.js` | The lab page component. `BLOCKS` holds each visual's block JSON, written exactly as it would sit in a page's `renderVals()`. |
| `lab/viz-lab.html` | Page shell (same tokens and fonts as the P2 pages). |
| `lab/js/VizSimple.js`, `lab/viz-simple.html` | The simpler page. It reuses `BLOCKS` from `VizLab.js` (exposed as `window.DCVizLabBlocks`) where data overlaps. |

## Block types

| Lens | `type` | Answers |
|---|---|---|
| Owner | `pulse` | Is the enterprise healthier than yesterday? Six domain petals (share of KPIs on track), dashed arc = yesterday. Reads `base-data.js`. The original 37-spoke version is kept as `pulseKpi`. |
| Owner | `horizon` | What crossed materiality, and what is about to? |
| Owner | `bridge` | How much of the gap to plan is certified? |
| Core Group | `flow` | Which entity drives the variance, and through which driver? `combine` folds every entity except `hi` into one node. |
| Core Group | `fingerprints` | Which entity looks different from its peers? `focus` draws that entity large with labelled axes and the peers small. |
| Core Group | `tide` | What's uncertified, and is this close behind its usual pace? |
| Core Group | `river` | Which escalations are stuck, and where? |
| Entity | `lanes` | What is causing the gap, and which function owns the fix? Swimlanes: row = owning function, column = causal depth, rings = handoffs. (`tree` is still available.) |
| Entity | `loop` | Where is cash stuck in the cycle? |
| Entity | `runway` | What is at risk in the next 14 days, and when does it bunch up? |
| All | `zoom` | Same treemap at business / entity / plant depth. |

### Simpler versions (viz-simple.html)

| Replaces | `type` | Pattern |
|---|---|---|
| `pulse` | `scorecard` | Unit chart: one dot per KPI, grouped by domain (reads base-data.js) |
| `horizon` | `bullets` | Bullet graph against the materiality threshold, top 5 only |
| `bridge` | `split` | Three bars on one scale: net vs certified vs provisional |
| `flow` | `diverge` | Diverging favourable/adverse bars with a net dot, one entity emphasised |
| `fingerprints` | `strip` | Dot strip per KPI, right = better, peers grey |
| `tide` | `waffle` | Waffle (1 square = 1 KPI) + sparkline against the usual range |
| `river` | `late` | Stage chips + bullet bars of the late items against SLA |
| `tree` | `path` | Critical path only, one step per row |
| `loop` | `ccc` | Hero number + dumbbells |
| `runway` | `days` | 14-day calendar strip, single-hue heat, 4 call-outs |
| `zoom` | `zoom` | Unchanged |

The visual language is the same everywhere: solid = Certified, amber outline = with exception, hatched + dashed = Pending, grey hatch = Reconciliation break, dotted = Stale. Status colours match `bizStyle()`.

## Moving into the app (about 15 minutes)

1. **Script:** move `lab/js/dc-viz.js` to `js/dc-viz.js`. In each page that uses a visual (or in all of them), add
   `<script src="js/dc-viz.js?v=0"></script>` after `base-data.js`. Regen picks it up because it matches `js/...`, and the cache tag gets bumped.
   Regen only loads scripts under `js/data/` and `js/c/`. Either put the file at `js/c/dc-viz.js`, or widen the regex in `tools/regen.js` to `js\/(?:data|c|dc-viz)`.
2. **Normaliser (all six templates):** in the block normaliser next to `b.isMulti = T === "multi"`, add:
   ```js
   b.isViz = typeof DCViz !== "undefined" && DCViz.has(T);
   if (b.isViz) b.vz = DCViz.scene(b, {data: typeof DCTData !== "undefined" ? DCTData : {}, level: b.level});
   ```
3. **Markup (all six templates):** next to the other `<sc-if value="{{b.isMulti}}">` renderers, add:
   `<sc-if value="{{b.isViz}}">` + the string `DCViz.snippet` (copy it from the file, or concatenate it into the template string) + `</sc-if>`.
   If you want the "Reading" line, render `{{b.vz.read}}` the way `b.read` is shown on `multi` blocks.
4. **Data:** copy a block from `BLOCKS` in `VizLab.js` into a page's `drivers`, `dominant` or a `drill[].blocks` entry. On home pages, reference it from `sections` as usual.
5. Run `node tools/regen.js`. It must report `regenerated 81` with no `FAIL` lines.

Suggested placement: `pulse` on O-01 as `dominant`; `horizon` on O-01 or O-02; `bridge` on O-03; `flow` + `fingerprints` on G-02; `tide` on G-08; `river` on G-09; `tree` on E-01 or E-11; `loop` on E-05; `runway` on E-01; `zoom` on every home page, with `level` set per lens (`owner`, `core`, `entity`).

## Before going live

- **Data source:** only `pulse` reads `base-data.js`. Driver splits (`bridge`, `flow`, `tree`), trajectories (`horizon`), close history (`tide`), escalations (`river`), events (`runway`) and plant EBITDA (`zoom`) are synthetic in the block JSON, but each sums to the governed totals in base-data (FIN-001, FIN-004, WCP-001/002/003/006, TRU-001, EFF-009). If they should resolve from base-data, add keys there and look them up in `DCViz.scene` the way `pulse` does.
- **`zoom` depth buttons** are lab-only (component state). In the app, set `level` from the page's lens. No buttons are needed.
- **Hover layer** installs itself once per page (tooltip from `data-tip`, plus trace highlighting through `data-g`). Every mark keeps an `aria-label` on the SVG. Keyboard access to individual marks isn't built yet.
