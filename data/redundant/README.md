# Redundant data (kept for reference, not used)

Nothing in the prototype or the build reads these files. They were replaced by `data/kpi-model/` (see its README), which calculates every screen KPI for Plants 01–06, Entity A1/A2 and Group from `data/kpi-model/Group-KPI-Model.xlsx`.

## plant-model/

| File | Replaced by |
|---|---|
| `export_to_prototype.py` | `data/kpi-model/export_to_prototype.py` (all 170 KPIs). **Do not run it:** it would overwrite `js/data/base-data.js` with the older 31-KPI values |
| `plant_kpi.csv`, `entity_base.csv`, `entity_kpi.csv`, `group_base.csv`, `group_kpi.csv` | `data/kpi-model/kpi_values.csv` and the per-scope sheets in `KPI-Model.xlsx` |
| `kpi_calculations.csv` | KPI detail pages in the prototype, and the live formulas in `KPI-Model.xlsx` |
| `Plant-Entity-Group-Model.xlsx`, `plant_combined.xlsx` | `data/kpi-model/KPI-Model.xlsx` |
| `hardcoded_header.md` | `data/kpi-model/hardcoded_header.md` |

## Still in use in data/plant-model/

| File | Use |
|---|---|
| `build_plant_model.py` + `plant_base.csv` | Generator of the original plant data. Its 40 columns are the first 40 columns of *Plant Inputs* in `data/kpi-model/Group-KPI-Model.xlsx`, which is now the master. Running the generator again also recreates the files above in `data/plant-model/`. |
| `Data-Model-Methodology.md` | Plant base measures, plant KPI formulas, display and status rules (referenced by `data/kpi-model/README.md`) |
