/* Single source of truth for every KPI value shown across the prototype.
   Keyed by KPI id (from P1-R1-KPICatalogue.html where one exists), then by scope:
   "Group" (Owner/Core Group), "A1" (Entity A1), "Plant02" (Plant 02 drill-ins).
   A trailing "#t7" scope key (e.g. "Group#t7") is a named point-in-time variant,
   used only by pages that deliberately show a before/after state (e.g. G-01b).
   js/data/resolve.js reads this and overwrites every KPI card, table cell and tile
   on render, so a KPI never shows two different values on two different pages. */
var DCTData = {
 "kpi": {
  "CMP-005": {
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified"
   },
   "Group": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CON-001": {
   "A1": {
    "v": "2",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     200.0,
     200.0,
     200.0,
     200.0,
     200.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "4",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     166.7,
     133.3,
     166.7,
     133.3,
     133.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Procurement (role)"
   },
   "A2": {
    "v": "2",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     150.0,
     100.0,
     150.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CON-002": {
   "A1": {
    "v": "95.8",
    "u": "%",
    "tr": "▲ 1.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     98.5,
     100.0,
     98.5,
     98.5,
     100.0
    ],
    "plan": "≥ 95.0%",
    "var": "+0.8 pts",
    "bs": "On track",
    "spp": [
     99.1,
     99.1,
     99.1,
     99.1,
     99.1,
     99.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "95.7",
    "u": "%",
    "tr": "▲ 0.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     98.5,
     100.0,
     98.5,
     98.5,
     99.3
    ],
    "plan": "≥ 95.0%",
    "var": "+0.7 pts",
    "bs": "On track",
    "spp": [
     98.5,
     98.5,
     98.5,
     98.5,
     98.5,
     98.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "95.6",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     98.5,
     100.0,
     98.5,
     98.5,
     98.5
    ],
    "plan": "≥ 95.0%",
    "var": "+0.6 pts",
    "bs": "On track",
    "spp": [
     97.9,
     97.9,
     97.9,
     97.9,
     97.9,
     97.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CON-003": {
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     0.0,
     100.0,
     0.0,
     0.0
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     0.0,
     100.0,
     0.0,
     0.0
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CPX-001": {
   "Group": {
    "v": "1,860.0",
    "u": "₹ m",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)"
   },
   "A1": {
    "v": "1,000.0",
    "u": "₹ m",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)"
   },
   "A2": {
    "v": "860.0",
    "u": "₹ m",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CPX-002": {
   "A1": {
    "v": "722.6",
    "u": "₹ m",
    "tr": "▲ 51.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     111.5,
     124.9,
     135.5,
     149.5,
     160.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)"
   },
   "Group": {
    "v": "1,347.7",
    "u": "₹ m",
    "tr": "▲ 109.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     111.3,
     123.7,
     135.3,
     147.7,
     160.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)"
   },
   "A2": {
    "v": "625.1",
    "u": "₹ m",
    "tr": "▲ 58.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     111.0,
     122.3,
     135.1,
     145.6,
     160.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CPX-003": {
   "A1": {
    "v": "468.1",
    "u": "₹ m",
    "tr": "▲ 79.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     197.9,
     293.8,
     399.2,
     506.6,
     609.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)"
   },
   "Group": {
    "v": "879.7",
    "u": "₹ m",
    "tr": "▲ 144.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     199.0,
     297.0,
     397.7,
     501.4,
     600.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)"
   },
   "A2": {
    "v": "411.6",
    "u": "₹ m",
    "tr": "▲ 65.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     200.2,
     300.5,
     396.1,
     495.7,
     589.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CPX-004": {
   "A1": {
    "v": "59.0",
    "u": "% weighted",
    "tr": "▲ 4.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     111.1,
     122.1,
     133.2,
     144.2,
     155.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)"
   },
   "Group": {
    "v": "60.9",
    "u": "% weighted",
    "tr": "▲ 4.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     112.0,
     124.1,
     136.1,
     148.1,
     160.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)"
   },
   "A2": {
    "v": "63.0",
    "u": "% weighted",
    "tr": "▲ 5.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     113.2,
     126.3,
     139.5,
     152.6,
     165.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CSH-001": {
   "Group": {
    "v": "2,141.8",
    "u": "₹ m",
    "tr": "▲ 114.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     96.1,
     94.6,
     102.0,
     96.6,
     102.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Pending certification",
    "prov": "PRELIM daily",
    "own": "Treasury (role)"
   },
   "A1": {
    "v": "967.1",
    "u": "₹ m",
    "tr": "▲ 76.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.1,
     97.3,
     98.6,
     95.1,
     103.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Pending certification"
   },
   "A2": {
    "v": "1,174.7",
    "u": "₹ m",
    "tr": "▲ 37.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     93.7,
     92.4,
     104.8,
     97.8,
     101.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CSH-002": {
   "Group": {
    "v": "22.0",
    "u": "₹ m",
    "tr": "▲ 3.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     195.6,
     294.5,
     388.5,
     486.2,
     575.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified"
   },
   "A1": {
    "v": "4.2",
    "u": "₹ m",
    "tr": "▲ 0.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     255.8,
     398.1,
     530.8,
     646.2,
     807.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified"
   },
   "A2": {
    "v": "17.8",
    "u": "₹ m",
    "tr": "▲ 2.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     186.1,
     278.2,
     366.2,
     461.0,
     538.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CSH-003": {
   "A1": {
    "v": "38.6",
    "u": "₹ m/day",
    "tr": "▲ 0.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     91.5,
     94.5,
     97.3,
     96.0,
     98.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Pending certification",
    "prov": "PRELIM",
    "own": "Finance (role)"
   },
   "Group": {
    "v": "76.8",
    "u": "₹ m/day",
    "tr": "▲ 3.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     91.8,
     95.4,
     98.4,
     95.6,
     99.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Pending"
   },
   "A2": {
    "v": "38.2",
    "u": "₹ m/day",
    "tr": "▲ 2.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     92.0,
     96.3,
     99.6,
     95.1,
     101.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CSH-004": {
   "Group": {
    "v": "32.6",
    "u": "days",
    "tr": "▼ 3.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     102.9,
     99.6,
     96.9,
     101.9,
     93.4
    ],
    "plan": "≤ 35.0 days",
    "var": "−2.4 days",
    "bs": "On track",
    "spp": [
     100.3,
     100.3,
     100.3,
     100.3,
     100.3,
     100.3
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "A1": {
    "v": "52.3",
    "u": "days",
    "tr": "▼ 1.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     97.2,
     96.0,
     95.8,
     98.2,
     96.1
    ],
    "plan": "≤ 35.0 days",
    "var": "+17.3 days",
    "bs": "Intervention required",
    "spp": [
     64.3,
     64.3,
     64.3,
     64.3,
     64.3,
     64.3
    ],
    "ts": "Pending certification"
   },
   "A2": {
    "v": "13.4",
    "u": "days",
    "tr": "▼ 3.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     112.2,
     118.1,
     111.7,
     113.4,
     90.7
    ],
    "plan": "≤ 35.0 days",
    "var": "−21.6 days",
    "bs": "On track",
    "spp": [
     236.5,
     236.5,
     236.5,
     236.5,
     236.5,
     236.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CSH-006": {
   "A1": {
    "v": "27.2",
    "u": "₹ m",
    "tr": "▲ 1.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Pending certification",
    "prov": "FCST",
    "own": "Group Treasury (role)"
   },
   "Group": {
    "v": "27.2",
    "u": "₹ m",
    "tr": "▲ 1.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Pending certification",
    "prov": "FCST",
    "own": "Group Treasury (role)"
   },
   "A2": {
    "v": "0.0",
    "u": "₹ m",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CST-001": {
   "A1": {
    "v": "2,853",
    "u": "₹/t",
    "tr": "▼ 313 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     110.3,
     102.6,
     98.0,
     104.5,
     94.1
    ],
    "plan": "≤ 2,900 ₹/t",
    "var": "−47 ₹/t",
    "bs": "On track",
    "spp": [
     95.7,
     95.7,
     95.7,
     95.7,
     95.7,
     95.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "2,934",
    "u": "₹/t",
    "tr": "▼ 231 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     103.7,
     103.9,
     101.8,
     103.9,
     96.3
    ],
    "plan": "≤ 2,900 ₹/t",
    "var": "+34 ₹/t",
    "bs": "Intervention required",
    "spp": [
     95.2,
     95.2,
     95.2,
     95.2,
     95.2,
     95.2
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "Plant01": {
    "v": "2,779",
    "u": "₹/t",
    "tr": "▼ 298 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     116.7,
     114.9,
     91.9,
     105.9,
     95.6
    ],
    "plan": "≤ 2,900 ₹/t",
    "var": "−121 ₹/t",
    "bs": "On track",
    "spp": [
     99.8,
     99.8,
     99.8,
     99.8,
     99.8,
     99.8
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "3,245",
    "u": "₹/t",
    "tr": "▼ 164 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     121.1,
     117.2,
     120.2,
     113.8,
     108.3
    ],
    "plan": "≤ 2,900 ₹/t",
    "var": "+345 ₹/t",
    "bs": "Intervention required",
    "spp": [
     96.8,
     96.8,
     96.8,
     96.8,
     96.8,
     96.8
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "2,629",
    "u": "₹/t",
    "tr": "▼ 440 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     98.4,
     85.5,
     86.4,
     97.9,
     83.9
    ],
    "plan": "≤ 2,900 ₹/t",
    "var": "−271 ₹/t",
    "bs": "On track",
    "spp": [
     92.5,
     92.5,
     92.5,
     92.5,
     92.5,
     92.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "3,016",
    "u": "₹/t",
    "tr": "▼ 147 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     96.9,
     105.1,
     105.6,
     103.3,
     98.5
    ],
    "plan": "≤ 2,900 ₹/t",
    "var": "+116 ₹/t",
    "bs": "Intervention required",
    "spp": [
     94.7,
     94.7,
     94.7,
     94.7,
     94.7,
     94.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "3,275",
    "u": "₹/t",
    "tr": "▲ 413 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.4,
     105.4,
     107.2,
     92.2,
     105.5
    ],
    "plan": "≤ 2,900 ₹/t",
    "var": "+375 ₹/t",
    "bs": "Deteriorating",
    "spp": [
     93.4,
     93.4,
     93.4,
     93.4,
     93.4,
     93.4
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "3,012",
    "u": "₹/t",
    "tr": "▼ 158 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     88.7,
     99.6,
     96.5,
     94.0,
     89.4
    ],
    "plan": "≤ 2,900 ₹/t",
    "var": "+112 ₹/t",
    "bs": "Intervention required",
    "spp": [
     86.0,
     86.0,
     86.0,
     86.0,
     86.0,
     86.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "2,799",
    "u": "₹/t",
    "tr": "▼ 598 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     107.6,
     113.9,
     118.7,
     128.5,
     105.9
    ],
    "plan": "≤ 2,900 ₹/t",
    "var": "−101 ₹/t",
    "bs": "On track",
    "spp": [
     109.7,
     109.7,
     109.7,
     109.7,
     109.7,
     109.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CST-002": {
   "A1": {
    "v": "900.1",
    "u": "₹ m",
    "tr": "▼ 85.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     103.5,
     96.6,
     98.3,
     101.7,
     92.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "1,827.8",
    "u": "₹ m",
    "tr": "▼ 98.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     97.2,
     98.7,
     103.1,
     100.8,
     95.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "226.1",
    "u": "₹ m",
    "tr": "▼ 42.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     108.3,
     107.1,
     87.8,
     106.5,
     89.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "308.1",
    "u": "₹ m",
    "tr": "▲ 14.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     119.1,
     109.4,
     119.2,
     99.9,
     104.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "365.9",
    "u": "₹ m",
    "tr": "▼ 57.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     89.8,
     81.5,
     90.0,
     100.0,
     86.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "927.8",
    "u": "₹ m",
    "tr": "▼ 12.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     90.6,
     100.9,
     108.0,
     99.8,
     98.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "266.5",
    "u": "₹ m",
    "tr": "▲ 45.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     98.2,
     102.9,
     108.0,
     92.7,
     111.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "398.7",
    "u": "₹ m",
    "tr": "▲ 8.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     83.3,
     94.6,
     102.1,
     89.7,
     91.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "262.6",
    "u": "₹ m",
    "tr": "▼ 66.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.9,
     109.3,
     117.6,
     122.6,
     97.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CST-003": {
   "A1": {
    "v": "218.7",
    "u": "₹ m",
    "tr": "▼ 79.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     114.3,
     103.1,
     107.6,
     128.1,
     93.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "459.4",
    "u": "₹ m",
    "tr": "▼ 85.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.4,
     105.0,
     115.0,
     111.1,
     93.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "50.6",
    "u": "₹ m",
    "tr": "▼ 28.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     127.3,
     100.7,
     103.1,
     125.6,
     80.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "70.8",
    "u": "₹ m",
    "tr": "▼ 18.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     143.4,
     105.5,
     137.6,
     132.4,
     104.4
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "97.3",
    "u": "₹ m",
    "tr": "▼ 32.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     87.0,
     103.1,
     90.4,
     126.8,
     95.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "240.7",
    "u": "₹ m",
    "tr": "▼ 5.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     87.9,
     106.7,
     121.8,
     95.8,
     93.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "82.6",
    "u": "₹ m",
    "tr": "▲ 18.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     103.5,
     123.8,
     129.5,
     102.7,
     131.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "92.2",
    "u": "₹ m",
    "tr": "▼ 0.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     69.5,
     98.1,
     102.2,
     72.1,
     71.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "65.9",
    "u": "₹ m",
    "tr": "▼ 23.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     108.8,
     107.1,
     152.8,
     135.6,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CST-004": {
   "Group": {
    "v": "174",
    "u": "₹/t",
    "tr": "▼ 13 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.5,
     102.6,
     91.9,
     100.5,
     93.3
    ],
    "plan": "≤ 180 ₹/t",
    "var": "−6 ₹/t",
    "bs": "On track",
    "spp": [
     96.4,
     96.4,
     96.4,
     96.4,
     96.4,
     96.4
    ],
    "ts": "Certified"
   },
   "A1": {
    "v": "176",
    "u": "₹/t",
    "tr": "▼ 21 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.5,
     93.5,
     83.5,
     101.9,
     91.1
    ],
    "plan": "≤ 180 ₹/t",
    "var": "−4 ₹/t",
    "bs": "On track",
    "spp": [
     93.0,
     93.0,
     93.0,
     93.0,
     93.0,
     93.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "172",
    "u": "₹/t",
    "tr": "▼ 6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     104.0,
     112.6,
     101.3,
     98.8,
     95.8
    ],
    "plan": "≤ 180 ₹/t",
    "var": "−8 ₹/t",
    "bs": "On track",
    "spp": [
     100.2,
     100.2,
     100.2,
     100.2,
     100.2,
     100.2
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "165",
    "u": "₹/t",
    "tr": "▼ 19 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     122.7,
     118.6,
     78.3,
     105.3,
     94.6
    ],
    "plan": "≤ 180 ₹/t",
    "var": "−15 ₹/t",
    "bs": "On track",
    "spp": [
     103.3,
     103.3,
     103.3,
     103.3,
     103.3,
     103.3
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "216",
    "u": "₹/t",
    "tr": "▲ 17 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     93.6,
     93.7,
     108.4,
     97.7,
     106.1
    ],
    "plan": "≤ 180 ₹/t",
    "var": "+36 ₹/t",
    "bs": "Deteriorating",
    "spp": [
     88.5,
     88.5,
     88.5,
     88.5,
     88.5,
     88.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "156",
    "u": "₹/t",
    "tr": "▼ 49 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     81.2,
     79.5,
     68.2,
     103.1,
     78.6
    ],
    "plan": "≤ 180 ₹/t",
    "var": "−24 ₹/t",
    "bs": "On track",
    "spp": [
     90.5,
     90.5,
     90.5,
     90.5,
     90.5,
     90.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "198",
    "u": "₹/t",
    "tr": "▲ 15 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     105.6,
     112.8,
     113.1,
     116.9,
     126.8
    ],
    "plan": "≤ 180 ₹/t",
    "var": "+18 ₹/t",
    "bs": "Deteriorating",
    "spp": [
     115.3,
     115.3,
     115.3,
     115.3,
     115.3,
     115.3
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "168",
    "u": "₹/t",
    "tr": "▲ 9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     101.9,
     112.9,
     103.6,
     83.8,
     88.3
    ],
    "plan": "≤ 180 ₹/t",
    "var": "−12 ₹/t",
    "bs": "On track",
    "spp": [
     94.5,
     94.5,
     94.5,
     94.5,
     94.5,
     94.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "155",
    "u": "₹/t",
    "tr": "▼ 41 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     106.3,
     112.4,
     89.9,
     106.9,
     84.4
    ],
    "plan": "≤ 180 ₹/t",
    "var": "−25 ₹/t",
    "bs": "On track",
    "spp": [
     97.9,
     97.9,
     97.9,
     97.9,
     97.9,
     97.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CST-005": {
   "A1": {
    "v": "21.4",
    "u": "₹ m",
    "tr": "▲ 3.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     205.3,
     293.3,
     390.8,
     493.6,
     598.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified"
   },
   "Group": {
    "v": "44.6",
    "u": "₹ m",
    "tr": "▲ 7.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     217.3,
     309.9,
     414.1,
     526.6,
     636.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "23.1",
    "u": "₹ m",
    "tr": "▲ 3.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     229.8,
     326.9,
     438.6,
     561.1,
     676.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "7.2",
    "u": "₹ m",
    "tr": "▲ 1.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     234.9,
     335.8,
     441.3,
     538.5,
     665.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "7.2",
    "u": "₹ m",
    "tr": "▲ 0.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     209.0,
     308.1,
     437.8,
     564.0,
     648.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "7.0",
    "u": "₹ m",
    "tr": "▲ 1.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     179.0,
     247.8,
     313.8,
     400.7,
     506.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "7.2",
    "u": "₹ m",
    "tr": "▲ 1.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     230.6,
     313.5,
     434.2,
     545.0,
     646.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "8.4",
    "u": "₹ m",
    "tr": "▲ 1.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     220.6,
     336.5,
     448.4,
     565.1,
     664.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "7.6",
    "u": "₹ m",
    "tr": "▲ 1.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     242.3,
     333.7,
     435.6,
     578.8,
     729.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CTL-002": {
   "Group": {
    "v": "4",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     200.0,
     300.0,
     400.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified"
   },
   "A1": {
    "v": "2",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     200.0,
     200.0,
     200.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "2",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CTL-003": {
   "Group": {
    "v": "6 of 8",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "2 of 4",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "4 of 4",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CTL-004": {
   "Group": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Pending certification",
    "prov": "PRELIM",
    "own": "Assurance (role)"
   },
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CTL-005": {
   "Group": {
    "v": "4",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "2",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "2",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CTL-006": {
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CTL-007": {
   "Group": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CTL-008": {
   "Group": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CTL-009": {
   "Group": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "CTL-010": {
   "Group": {
    "v": "14",
    "u": "",
    "tr": "▲ 3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     300.0,
     600.0,
     700.0,
     1100.0,
     1400.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Pending"
   },
   "A1": {
    "v": "7",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     300.0,
     400.0,
     600.0,
     700.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "7",
    "u": "",
    "tr": "▲ 2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "EFF-002": {
   "Group": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Intervention required",
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Core Group (role)"
   },
   "A1": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Intervention required",
    "ts": "System count"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "EFF-006": {
   "Group": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "EFF-007": {
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Entity Executive"
   },
   "Group": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "EFF-008": {
   "Group": {
    "v": "2.5",
    "u": "days",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     94.1,
     95.3,
     100.0,
     96.1,
     95.7
    ],
    "plan": "≤ 3.0 days",
    "var": "−0.5 days",
    "bs": "On track",
    "spp": [
     117.2,
     117.2,
     117.2,
     117.2,
     117.2,
     117.2
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "2.8",
    "u": "days",
    "tr": "▼ 0.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     97.6,
     98.7,
     101.0,
     102.7,
     93.6
    ],
    "plan": "≤ 3.0 days",
    "var": "−0.2 days",
    "bs": "On track",
    "spp": [
     101.0,
     101.0,
     101.0,
     101.0,
     101.0,
     101.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "2.1",
    "u": "days",
    "tr": "▲ 0.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     89.8,
     90.7,
     99.1,
     92.1,
     95.8
    ],
    "plan": "≤ 3.0 days",
    "var": "−0.9 days",
    "bs": "On track",
    "spp": [
     139.5,
     139.5,
     139.5,
     139.5,
     139.5,
     139.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "EFF-009": {
   "A1": {
    "v": "3",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     75.0,
     100.0,
     75.0,
     75.0,
     75.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "11",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     83.3,
     91.7,
     91.7,
     91.7,
     91.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "8",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     87.5,
     87.5,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "EFF-010": {
   "A1": {
    "v": "3",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "4",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "EFF-011": {
   "A1": {
    "v": "4 of 4",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "8 of 9",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "4 of 5",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "EHS-001": {
   "A1": {
    "v": "0.91",
    "u": "per 200k h",
    "tr": "▼ 1.16 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0.50 per 200k h",
    "var": "+0.41 per 200k h",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "0.47",
    "u": "per 200k h",
    "tr": "▼ 1.08 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     214.9,
     259.8,
     155.2,
     178.2,
     54.0
    ],
    "plan": "≤ 0.50 per 200k h",
    "var": "−0.03 per 200k h",
    "bs": "On track",
    "spp": [
     57.5,
     57.5,
     57.5,
     57.5,
     57.5,
     57.5
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "EHS (role)"
   },
   "Plant01": {
    "v": "0.00",
    "u": "per 200k h",
    "tr": "▼ 3.57 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0.50 per 200k h",
    "var": "−0.50 per 200k h",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "0.00",
    "u": "per 200k h",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0.50 per 200k h",
    "var": "−0.50 per 200k h",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "2.90",
    "u": "per 200k h",
    "tr": "▼ 0.04 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0.50 per 200k h",
    "var": "+2.40 per 200k h",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0.00",
    "u": "per 200k h",
    "tr": "▼ 1.03 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     110.1,
     108.9,
     56.0,
     61.3,
     0.0
    ],
    "plan": "≤ 0.50 per 200k h",
    "var": "−0.50 per 200k h",
    "bs": "On track",
    "spp": [
     29.8,
     29.8,
     29.8,
     29.8,
     29.8,
     29.8
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0.00",
    "u": "per 200k h",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0.50 per 200k h",
    "var": "−0.50 per 200k h",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "0.00",
    "u": "per 200k h",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     137.4,
     67.7,
     0.0,
     0.0
    ],
    "plan": "≤ 0.50 per 200k h",
    "var": "−0.50 per 200k h",
    "bs": "On track",
    "spp": [
     11.0,
     11.0,
     11.0,
     11.0,
     11.0,
     11.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "0.00",
    "u": "per 200k h",
    "tr": "▼ 3.51 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0.50 per 200k h",
    "var": "−0.50 per 200k h",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "EHS-002": {
   "A1": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     0.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "3",
    "u": "",
    "tr": "▲ 2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     0.0,
     200.0,
     100.0,
     300.0
    ],
    "plan": "≤ 0",
    "var": "+3",
    "bs": "Deteriorating",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     0.0,
     0.0,
     0.0,
     100.0
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Deteriorating",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "0",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "2",
    "u": "",
    "tr": "▲ 2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+2",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "EHS-003": {
   "A1": {
    "v": "20",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     85.7,
     104.8,
     90.5,
     90.5,
     95.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "41",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     117.9,
     112.8,
     82.1,
     107.7,
     105.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "9",
    "u": "",
    "tr": "▲ 3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     40.0,
     100.0,
     90.0,
     60.0,
     90.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "2",
    "u": "",
    "tr": "▼ 3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     66.7,
     66.7,
     100.0,
     83.3,
     33.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "9",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     200.0,
     160.0,
     80.0,
     160.0,
     180.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "21",
    "u": "",
    "tr": "▼ 2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     155.6,
     122.2,
     72.2,
     127.8,
     116.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "3",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     160.0,
     220.0,
     80.0,
     40.0,
     60.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "9",
    "u": "",
    "tr": "▼ 2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     400.0,
     200.0,
     100.0,
     366.7,
     300.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "9",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     80.0,
     50.0,
     60.0,
     100.0,
     90.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "EHS-004": {
   "Group": {
    "v": "0",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "EHS (role)"
   },
   "A1": {
    "v": "0",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "0",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "EHS-005": {
   "A1": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     200.0,
     0.0,
     100.0
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Deteriorating",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "2",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     50.0,
     50.0,
     150.0,
     50.0,
     100.0
    ],
    "plan": "≤ 0",
    "var": "+2",
    "bs": "Deteriorating",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     0.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "EHS-006": {
   "A1": {
    "v": "28",
    "u": "",
    "tr": "▲ 10 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     104.0,
     92.0,
     96.0,
     72.0,
     112.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "EHS (role)"
   },
   "Group": {
    "v": "45",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     96.7,
     75.0,
     100.0,
     73.3,
     75.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "14",
    "u": "",
    "tr": "▲ 9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     78.6,
     35.7,
     28.6,
     35.7,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "6",
    "u": "",
    "tr": "▼ 2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     83.3,
     83.3,
     116.7,
     133.3,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "8",
    "u": "",
    "tr": "▲ 3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     200.0,
     260.0,
     260.0,
     100.0,
     160.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "17",
    "u": "",
    "tr": "▼ 9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     91.4,
     62.9,
     102.9,
     74.3,
     48.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "6",
    "u": "",
    "tr": "▼ 6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     50.0,
     92.9,
     85.7,
     42.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "6",
    "u": "",
    "tr": "▼ 2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     25.0,
     116.7,
     66.7,
     50.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "5",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     66.7,
     133.3,
     100.0,
     66.7,
     55.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "EHS-007": {
   "A1": {
    "v": "7",
    "u": "",
    "tr": "▲ 6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     71.4,
     57.1,
     71.4,
     14.3,
     100.0
    ],
    "plan": "≤ 0",
    "var": "+7",
    "bs": "Deteriorating",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "EHS (role)"
   },
   "Group": {
    "v": "9",
    "u": "",
    "tr": "▲ 6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     116.7,
     66.7,
     100.0,
     25.0,
     75.0
    ],
    "plan": "≤ 0",
    "var": "+9",
    "bs": "Deteriorating",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "4",
    "u": "",
    "tr": "▲ 4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     50.0,
     25.0,
     25.0,
     0.0,
     100.0
    ],
    "plan": "≤ 0",
    "var": "+4",
    "bs": "Deteriorating",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     50.0,
     0.0,
     0.0,
     50.0,
     50.0
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "2",
    "u": "",
    "tr": "▲ 2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     200.0,
     300.0,
     400.0,
     0.0,
     200.0
    ],
    "plan": "≤ 0",
    "var": "+2",
    "bs": "Deteriorating",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "2",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     180.0,
     80.0,
     140.0,
     40.0,
     40.0
    ],
    "plan": "≤ 0",
    "var": "+2",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     25.0,
     50.0,
     25.0,
     25.0
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "0",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     200.0,
     200.0,
     100.0,
     0.0,
     100.0
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Deteriorating",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "EHS-008": {
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "EHS-009": {
   "A1": {
    "v": "75",
    "u": "%",
    "tr": "▲ 8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     133.3,
     100.0,
     133.3,
     88.9,
     100.0
    ],
    "plan": "≥ 100%",
    "var": "−25 pts",
    "bs": "Intervention required",
    "spp": [
     133.3,
     133.3,
     133.3,
     133.3,
     133.3,
     133.3
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "EHS (role)"
   },
   "Group": {
    "v": "75",
    "u": "%",
    "tr": "▼ 16 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     150.0,
     133.3,
     128.6,
     136.4,
     112.5
    ],
    "plan": "≥ 100%",
    "var": "−25 pts",
    "bs": "Deteriorating",
    "spp": [
     150.0,
     150.0,
     150.0,
     150.0,
     150.0,
     150.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "100",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "≥ 100%",
    "var": "+0 pts",
    "bs": "On track",
    "spp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "50",
    "u": "%",
    "tr": "▼ 50 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     50.0,
     100.0,
     100.0,
     50.0
    ],
    "plan": "≥ 100%",
    "var": "−50 pts",
    "bs": "Deteriorating",
    "spp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "100",
    "u": "%",
    "tr": "▲ 50 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≥ 100%",
    "var": "+0 pts",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "100",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     166.7,
     166.7,
     111.1,
     166.7,
     166.7
    ],
    "plan": "≥ 100%",
    "var": "+0 pts",
    "bs": "On track",
    "spp": [
     166.7,
     166.7,
     166.7,
     166.7,
     166.7,
     166.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "100",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     200.0,
     200.0,
     200.0,
     200.0,
     200.0
    ],
    "plan": "≥ 100%",
    "var": "+0 pts",
    "bs": "On track",
    "spp": [
     200.0,
     200.0,
     200.0,
     200.0,
     200.0,
     200.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "100",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≥ 100%",
    "var": "+0 pts",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "100",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     66.7,
     100.0,
     100.0
    ],
    "plan": "≥ 100%",
    "var": "+0 pts",
    "bs": "On track",
    "spp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "EHS-010": {
   "Group": {
    "v": "85.4",
    "u": "%",
    "tr": "▼ 0.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     123.5,
     126.9,
     127.3,
     129.5,
     128.1
    ],
    "plan": "≥ 95.0%",
    "var": "−9.6 pts",
    "bs": "Deteriorating",
    "spp": [
     142.5,
     142.5,
     142.5,
     142.5,
     142.5,
     142.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "81.8",
    "u": "%",
    "tr": "▼ 1.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     114.3,
     109.1,
     115.6,
     111.1,
     109.1
    ],
    "plan": "≥ 95.0%",
    "var": "−13.2 pts",
    "bs": "Deteriorating",
    "spp": [
     126.7,
     126.7,
     126.7,
     126.7,
     126.7,
     126.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "88.5",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     133.3,
     144.4,
     138.9,
     147.4,
     147.4
    ],
    "plan": "≥ 95.0%",
    "var": "−6.5 pts",
    "bs": "Intervention required",
    "spp": [
     158.3,
     158.3,
     158.3,
     158.3,
     158.3,
     158.3
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "100.0",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "≥ 95.0%",
    "var": "+5.0 pts",
    "bs": "On track",
    "spp": [
     95.0,
     95.0,
     95.0,
     95.0,
     95.0,
     95.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "75.0",
    "u": "%",
    "tr": "▼ 8.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     80.0,
     83.3,
     83.3,
     75.0
    ],
    "plan": "≥ 95.0%",
    "var": "−20.0 pts",
    "bs": "Deteriorating",
    "spp": [
     95.0,
     95.0,
     95.0,
     95.0,
     95.0,
     95.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "60.0",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≥ 95.0%",
    "var": "−35.0 pts",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "85.7",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     133.3,
     160.0,
     160.0,
     171.4,
     171.4
    ],
    "plan": "≥ 95.0%",
    "var": "−9.3 pts",
    "bs": "Intervention required",
    "spp": [
     190.0,
     190.0,
     190.0,
     190.0,
     190.0,
     190.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "83.3",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≥ 95.0%",
    "var": "−11.7 pts",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "92.3",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     90.0,
     92.3,
     92.3
    ],
    "plan": "≥ 95.0%",
    "var": "−2.7 pts",
    "bs": "Intervention required",
    "spp": [
     95.0,
     95.0,
     95.0,
     95.0,
     95.0,
     95.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "FIN-001": {
   "A1": {
    "v": "890.5",
    "u": "₹ m",
    "tr": "▲ 201.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     140.4,
     220.4,
     326.7,
     410.5,
     530.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "Group": {
    "v": "1,760.1",
    "u": "₹ m",
    "tr": "▲ 397.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     178.4,
     253.6,
     346.1,
     423.4,
     546.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06 · PRELIM P07",
    "own": "Finance (role)"
   },
   "A2": {
    "v": "869.5",
    "u": "₹ m",
    "tr": "▲ 195.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     219.9,
     289.7,
     367.3,
     437.3,
     564.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "FIN-002": {
   "Group": {
    "v": "1,228.1",
    "u": "₹ m",
    "tr": "▲ 307.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     170.7,
     236.7,
     326.7,
     395.7,
     527.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "A1": {
    "v": "610.0",
    "u": "₹ m",
    "tr": "▲ 154.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     117.8,
     190.3,
     298.7,
     376.2,
     503.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Finance (role)",
    "cf": 90
   },
   "A2": {
    "v": "618.1",
    "u": "₹ m",
    "tr": "▲ 153.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     228.3,
     287.1,
     357.1,
     416.8,
     554.4
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "FIN-003": {
   "Group": {
    "v": "13,811.3",
    "u": "₹ m",
    "tr": "▲ 2,335.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     194.4,
     289.6,
     391.1,
     488.5,
     587.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "A1": {
    "v": "6,972.3",
    "u": "₹ m",
    "tr": "▲ 1,155.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     194.1,
     288.0,
     387.5,
     486.3,
     582.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "A2": {
    "v": "6,839.0",
    "u": "₹ m",
    "tr": "▲ 1,180.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     194.8,
     291.3,
     394.9,
     490.7,
     593.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "1,892.8",
    "u": "₹ m",
    "tr": "▲ 300.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     193.9,
     285.1,
     382.7,
     483.1,
     574.4
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "2,089.6",
    "u": "₹ m",
    "tr": "▲ 346.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     196.8,
     289.6,
     386.2,
     474.3,
     568.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "2,990.0",
    "u": "₹ m",
    "tr": "▲ 508.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     192.4,
     288.8,
     391.6,
     497.3,
     599.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "1,749.6",
    "u": "₹ m",
    "tr": "▲ 310.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     197.8,
     293.1,
     392.6,
     491.6,
     597.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "2,890.8",
    "u": "₹ m",
    "tr": "▲ 506.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     197.9,
     295.5,
     406.3,
     502.4,
     609.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "2,198.5",
    "u": "₹ m",
    "tr": "▲ 363.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     188.7,
     284.6,
     382.6,
     475.7,
     569.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "FIN-004": {
   "Group": {
    "v": "606.2",
    "u": "₹ m",
    "tr": "▲ 157.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     472.5,
     497.1,
     565.3,
     680.4,
     919.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "A1": {
    "v": "337.6",
    "u": "₹ m",
    "tr": "▲ 94.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     968.2,
     960.6,
     1045.2,
     1057.0,
     1466.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Finance (role)",
    "cf": 84
   },
   "A2": {
    "v": "268.6",
    "u": "₹ m",
    "tr": "▲ 63.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     206.8,
     248.6,
     308.1,
     478.6,
     625.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "FIN-005": {
   "Group": {
    "v": "11.6",
    "u": "%",
    "tr": "▲ 1.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     85.0,
     78.3,
     80.7,
     77.9,
     86.3
    ],
    "plan": "≥ 12.0%",
    "var": "−0.4 pts",
    "bs": "Intervention required",
    "spp": [
     89.4,
     89.4,
     89.4,
     89.4,
     89.4,
     89.4
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "A1": {
    "v": "11.1",
    "u": "%",
    "tr": "▲ 1.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     58.6,
     62.9,
     73.8,
     74.0,
     82.3
    ],
    "plan": "≥ 12.0%",
    "var": "−0.9 pts",
    "bs": "Intervention required",
    "spp": [
     89.1,
     89.1,
     89.1,
     89.1,
     89.1,
     89.1
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Finance (role)",
    "cf": 82
   },
   "A2": {
    "v": "12.1",
    "u": "%",
    "tr": "▲ 1.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     113.7,
     94.9,
     88.2,
     82.1,
     90.6
    ],
    "plan": "≥ 12.0%",
    "var": "+0.1 pts",
    "bs": "On track",
    "spp": [
     89.7,
     89.7,
     89.7,
     89.7,
     89.7,
     89.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "FIN-006": {
   "Group": {
    "v": "6,650.0",
    "u": "₹ m",
    "tr": "▼ 70.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.0,
     98.0,
     97.0,
     96.0,
     95.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Treasury (role)"
   },
   "A1": {
    "v": "3,610.0",
    "u": "₹ m",
    "tr": "▼ 38.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.0,
     98.0,
     97.0,
     96.0,
     95.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "3,040.0",
    "u": "₹ m",
    "tr": "▼ 32.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.0,
     98.0,
     97.0,
     96.0,
     95.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "FIN-007": {
   "Group": {
    "v": "-86.7",
    "u": "₹ m",
    "tr": "▲ 59.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     -332.1,
     -862.0,
     -979.6,
     -1482.5,
     -879.7
    ],
    "plan": "≥ 0.0 ₹ m",
    "var": "−86.7 ₹ m",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Missing",
    "prov": "—",
    "own": "[OWNER — PH]"
   },
   "A1": {
    "v": "-65.7",
    "u": "₹ m",
    "tr": "▲ 26.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     -1193.7,
     -1582.1,
     -1379.1,
     -1707.6,
     -1214.8
    ],
    "plan": "≥ 0.0 ₹ m",
    "var": "−65.7 ₹ m",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "-20.9",
    "u": "₹ m",
    "tr": "▲ 32.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     717.8,
     15.3,
     -492.8,
     -1208.1,
     -471.4
    ],
    "plan": "≥ 0.0 ₹ m",
    "var": "−20.9 ₹ m",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "FIN-008": {
   "Group": {
    "v": "34.4",
    "u": "%",
    "tr": "▲ 1.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     264.8,
     196.0,
     163.3,
     160.7,
     168.1
    ],
    "plan": "≥ 35.0%",
    "var": "−0.6 pts",
    "bs": "Intervention required",
    "spp": [
     170.8,
     170.8,
     170.8,
     170.8,
     170.8,
     170.8
    ],
    "ts": "Certified"
   },
   "A1": {
    "v": "37.9",
    "u": "%",
    "tr": "▲ 2.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     689.5,
     435.6,
     319.8,
     257.4,
     276.3
    ],
    "plan": "≥ 35.0%",
    "var": "+2.9 pts",
    "bs": "On track",
    "spp": [
     255.1,
     255.1,
     255.1,
     255.1,
     255.1,
     255.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "30.9",
    "u": "%",
    "tr": "▲ 0.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     94.0,
     85.8,
     83.9,
     109.4,
     110.8
    ],
    "plan": "≥ 35.0%",
    "var": "−4.1 pts",
    "bs": "Intervention required",
    "spp": [
     125.6,
     125.6,
     125.6,
     125.6,
     125.6,
     125.6
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "GOV-001": {
   "Group": {
    "v": "2",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     200.0,
     0.0,
     100.0,
     200.0,
     200.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     0.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "System count"
   },
   "A2": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "GOV-002": {
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Assurance"
   },
   "Group": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "GOV-003": {
   "Group": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "System count"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "GOV-004": {
   "Group": {
    "v": "7",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     87.5,
     100.0,
     87.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Assurance (role)"
   },
   "A1": {
    "v": "2",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     150.0,
     100.0,
     100.0,
     150.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified"
   },
   "A2": {
    "v": "5",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     83.3,
     100.0,
     83.3,
     83.3,
     83.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "GOV-005": {
   "Group": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "System count"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "GOV-006": {
   "Group": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified"
   },
   "A2": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "GOV-007": {
   "Group": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Assurance (role)"
   },
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "GOV-008": {
   "A1": {
    "v": "86.0",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "≥ 95.0%",
    "var": "−9.0 pts",
    "bs": "Intervention required",
    "spp": [
     110.5,
     110.5,
     110.5,
     110.5,
     110.5,
     110.5
    ],
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Assurance"
   },
   "Group": {
    "v": "88.0",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     101.1,
     100.0,
     100.0
    ],
    "plan": "≥ 95.0%",
    "var": "−7.0 pts",
    "bs": "Intervention required",
    "spp": [
     108.0,
     108.0,
     108.0,
     108.0,
     108.0,
     108.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "89.7",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     101.9,
     100.0,
     100.0
    ],
    "plan": "≥ 95.0%",
    "var": "−5.3 pts",
    "bs": "Intervention required",
    "spp": [
     106.0,
     106.0,
     106.0,
     106.0,
     106.0,
     106.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "GOV-009": {
   "Group": {
    "v": "32.8",
    "u": "days",
    "tr": "▲ 0.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     96.4,
     100.3,
     97.6,
     98.5,
     98.8
    ],
    "plan": "≤ 30.0 days",
    "var": "+2.8 days",
    "bs": "Deteriorating",
    "spp": [
     90.4,
     90.4,
     90.4,
     90.4,
     90.4,
     90.4
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "28.6",
    "u": "days",
    "tr": "▲ 0.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     101.8,
     103.0,
     101.8,
     103.1,
     103.9
    ],
    "plan": "≤ 30.0 days",
    "var": "−1.4 days",
    "bs": "On track",
    "spp": [
     109.1,
     109.1,
     109.1,
     109.1,
     109.1,
     109.1
    ],
    "ts": "Certified"
   },
   "A2": {
    "v": "37.8",
    "u": "days",
    "tr": "▲ 0.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     101.5,
     101.0,
     101.4,
     102.0
    ],
    "plan": "≤ 30.0 days",
    "var": "+7.8 days",
    "bs": "Deteriorating",
    "spp": [
     81.1,
     81.1,
     81.1,
     81.1,
     81.1,
     81.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "LIQ-001": {
   "Group": {
    "v": "16.7",
    "u": "months",
    "tr": "▲ 0.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.4,
     101.6,
     102.2,
     100.2,
     105.4
    ],
    "plan": "≥ 12.0 months",
    "var": "+4.7 months",
    "bs": "On track",
    "spp": [
     75.7,
     75.7,
     75.7,
     75.7,
     75.7,
     75.7
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Treasury (role)"
   },
   "A1": {
    "v": "15.4",
    "u": "months",
    "tr": "▲ 1.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     104.2,
     108.0,
     102.3,
     102.5,
     110.2
    ],
    "plan": "≥ 12.0 months",
    "var": "+3.4 months",
    "bs": "On track",
    "spp": [
     86.0,
     86.0,
     86.0,
     86.0,
     86.0,
     86.0
    ],
    "ts": "Certified"
   },
   "A2": {
    "v": "18.1",
    "u": "months",
    "tr": "▲ 0.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     97.0,
     96.0,
     102.0,
     97.9,
     101.1
    ],
    "plan": "≥ 12.0 months",
    "var": "+6.1 months",
    "bs": "On track",
    "spp": [
     67.0,
     67.0,
     67.0,
     67.0,
     67.0,
     67.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "LIQ-002": {
   "Group": {
    "v": "24.4",
    "u": "%",
    "tr": "▲ 6.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     71.2,
     58.0,
     68.1,
     64.8,
     88.8
    ],
    "plan": "≥ 20.0%",
    "var": "+4.4 pts",
    "bs": "On track",
    "spp": [
     72.6,
     72.6,
     72.6,
     72.6,
     72.6,
     72.6
    ],
    "ts": "Pending certification",
    "prov": "PRELIM",
    "own": "Treasury (role)"
   },
   "A1": {
    "v": "18.9",
    "u": "%",
    "tr": "▲ 7.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     -26.3,
     -2.7,
     42.3,
     48.0,
     77.1
    ],
    "plan": "≥ 20.0%",
    "var": "−1.1 pts",
    "bs": "Intervention required",
    "spp": [
     81.5,
     81.5,
     81.5,
     81.5,
     81.5,
     81.5
    ],
    "ts": "Certified"
   },
   "A2": {
    "v": "30.1",
    "u": "%",
    "tr": "▲ 6.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     122.4,
     96.7,
     87.4,
     78.1,
     97.7
    ],
    "plan": "≥ 20.0%",
    "var": "+10.1 pts",
    "bs": "On track",
    "spp": [
     65.0,
     65.0,
     65.0,
     65.0,
     65.0,
     65.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "LIQ-003": {
   "Group": {
    "v": "891.4",
    "u": "₹ m",
    "tr": "▲ 25.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     109.3,
     104.4,
     107.8,
     102.6,
     105.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified"
   },
   "A1": {
    "v": "486.3",
    "u": "₹ m",
    "tr": "▲ 56.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     109.5,
     107.6,
     109.5,
     97.2,
     109.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified"
   },
   "A2": {
    "v": "405.1",
    "u": "₹ m",
    "tr": "▼ 31.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     109.1,
     100.8,
     105.9,
     108.6,
     100.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "LIQ-004": {
   "Group": {
    "v": "2,720.8",
    "u": "₹ m",
    "tr": "▲ 93.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     92.6,
     94.4,
     96.4,
     96.5,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified"
   },
   "A1": {
    "v": "1,440.7",
    "u": "₹ m",
    "tr": "▲ 6.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     97.7,
     101.5,
     97.8,
     105.6,
     106.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "1,280.1",
    "u": "₹ m",
    "tr": "▲ 87.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     87.5,
     87.3,
     94.9,
     87.5,
     93.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "OPS-001": {
   "A1": {
    "v": "91.3",
    "u": "% of plan",
    "tr": "▲ 2.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     93.8,
     92.9,
     98.1,
     95.4,
     98.3
    ],
    "plan": "≥ 100.0%",
    "var": "−8.7 pts",
    "bs": "Intervention required",
    "spp": [
     107.7,
     107.7,
     107.7,
     107.7,
     107.7,
     107.7
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Metric Owner (production)",
    "fb": "Plant 02 at 78.4% of plan"
   },
   "Group": {
    "v": "95.5",
    "u": "% of plan",
    "tr": "▲ 3.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.1,
     93.4,
     97.7,
     96.0,
     99.2
    ],
    "plan": "≥ 100.0%",
    "var": "−4.5 pts",
    "bs": "Intervention required",
    "spp": [
     103.9,
     103.9,
     103.9,
     103.9,
     103.9,
     103.9
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)",
    "fb": "Plant 02: −26.2 kt of the −29.4 kt gap"
   },
   "Plant02": {
    "v": "78.4",
    "u": "% of plan",
    "tr": "▼ 0.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     97.1,
     90.7,
     95.2,
     93.7,
     93.3
    ],
    "plan": "≥ 100.0%",
    "var": "−21.6 pts",
    "bs": "Deteriorating",
    "spp": [
     119.0,
     119.0,
     119.0,
     119.0,
     119.0,
     119.0
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)",
    "fb": "−26.2 kt vs plan · P06"
   },
   "Group#t7": {
    "v": "95.5",
    "u": "% of plan",
    "tr": "▲ 3.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.1,
     93.4,
     97.7,
     96.0,
     99.2
    ],
    "plan": "≥ 100.0%",
    "var": "−4.5 pts",
    "bs": "Intervention required",
    "spp": [
     103.9,
     103.9,
     103.9,
     103.9,
     103.9,
     103.9
    ],
    "own": "Production (role)",
    "fb": "Plant 02: −26.2 kt of the −29.4 kt gap",
    "ts": "Certified with exception"
   },
   "Plant01": {
    "v": "96.0",
    "u": "% of plan",
    "tr": "▲ 0.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     93.3,
     92.9,
     96.0,
     97.3,
     97.6
    ],
    "plan": "≥ 100.0%",
    "var": "−4.0 pts",
    "bs": "Intervention required",
    "spp": [
     101.6,
     101.6,
     101.6,
     101.6,
     101.6,
     101.6
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "99.5",
    "u": "% of plan",
    "tr": "▲ 8.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     91.9,
     94.8,
     101.7,
     94.6,
     103.0
    ],
    "plan": "≥ 100.0%",
    "var": "−0.5 pts",
    "bs": "Intervention required",
    "spp": [
     103.5,
     103.5,
     103.5,
     103.5,
     103.5,
     103.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "100.3",
    "u": "% of plan",
    "tr": "▲ 3.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     96.7,
     93.9,
     97.2,
     96.6,
     100.2
    ],
    "plan": "≥ 100.0%",
    "var": "+0.3 pts",
    "bs": "On track",
    "spp": [
     99.9,
     99.9,
     99.9,
     99.9,
     99.9,
     99.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "103.3",
    "u": "% of plan",
    "tr": "▲ 2.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     92.7,
     94.3,
     96.5,
     103.9,
     106.2
    ],
    "plan": "≥ 100.0%",
    "var": "+3.3 pts",
    "bs": "On track",
    "spp": [
     102.7,
     102.7,
     102.7,
     102.7,
     102.7,
     102.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "101.5",
    "u": "% of plan",
    "tr": "▲ 3.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.8,
     94.0,
     99.5,
     97.8,
     101.7
    ],
    "plan": "≥ 100.0%",
    "var": "+1.5 pts",
    "bs": "On track",
    "spp": [
     100.2,
     100.2,
     100.2,
     100.2,
     100.2,
     100.2
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "96.3",
    "u": "% of plan",
    "tr": "▲ 3.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.1,
     93.6,
     94.7,
     89.9,
     93.7
    ],
    "plan": "≥ 100.0%",
    "var": "−3.7 pts",
    "bs": "Intervention required",
    "spp": [
     97.4,
     97.4,
     97.4,
     97.4,
     97.4,
     97.4
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "OPS-002": {
   "A1": {
    "v": "89.2",
    "u": "% of plan",
    "tr": "▲ 0.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.1,
     92.3,
     98.0,
     96.6,
     97.0
    ],
    "plan": "≥ 100.0%",
    "var": "−10.8 pts",
    "bs": "Intervention required",
    "spp": [
     108.7,
     108.7,
     108.7,
     108.7,
     108.7,
     108.7
    ],
    "ts": "Pending certification",
    "prov": "PRELIM",
    "own": "Commercial (role)"
   },
   "Group": {
    "v": "95.2",
    "u": "% of plan",
    "tr": "▲ 2.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     96.1,
     93.3,
     98.6,
     96.9,
     99.9
    ],
    "plan": "≥ 100.0%",
    "var": "−4.8 pts",
    "bs": "Intervention required",
    "spp": [
     104.9,
     104.9,
     104.9,
     104.9,
     104.9,
     104.9
    ],
    "ts": "Pending"
   },
   "A2": {
    "v": "102.0",
    "u": "% of plan",
    "tr": "▲ 5.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     97.3,
     94.3,
     99.1,
     97.3,
     102.9
    ],
    "plan": "≥ 100.0%",
    "var": "+2.0 pts",
    "bs": "On track",
    "spp": [
     100.9,
     100.9,
     100.9,
     100.9,
     100.9,
     100.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "92.8",
    "u": "% of plan",
    "tr": "▼ 2.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     94.8,
     90.3,
     98.7,
     97.3,
     94.8
    ],
    "plan": "≥ 100.0%",
    "var": "−7.2 pts",
    "bs": "Deteriorating",
    "spp": [
     102.1,
     102.1,
     102.1,
     102.1,
     102.1,
     102.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "77.6",
    "u": "% of plan",
    "tr": "▼ 1.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.1,
     90.9,
     92.3,
     92.4,
     90.5
    ],
    "plan": "≥ 100.0%",
    "var": "−22.4 pts",
    "bs": "Deteriorating",
    "spp": [
     116.7,
     116.7,
     116.7,
     116.7,
     116.7,
     116.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "97.0",
    "u": "% of plan",
    "tr": "▲ 5.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.5,
     94.9,
     102.1,
     98.6,
     103.9
    ],
    "plan": "≥ 100.0%",
    "var": "−3.0 pts",
    "bs": "Intervention required",
    "spp": [
     107.1,
     107.1,
     107.1,
     107.1,
     107.1,
     107.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "105.4",
    "u": "% of plan",
    "tr": "▲ 4.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     92.3,
     91.7,
     96.0,
     103.3,
     107.5
    ],
    "plan": "≥ 100.0%",
    "var": "+5.4 pts",
    "bs": "On track",
    "spp": [
     102.0,
     102.0,
     102.0,
     102.0,
     102.0,
     102.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "103.0",
    "u": "% of plan",
    "tr": "▲ 5.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     103.0,
     96.7,
     103.9,
     100.6,
     106.3
    ],
    "plan": "≥ 100.0%",
    "var": "+3.0 pts",
    "bs": "On track",
    "spp": [
     103.2,
     103.2,
     103.2,
     103.2,
     103.2,
     103.2
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "98.1",
    "u": "% of plan",
    "tr": "▲ 6.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     94.6,
     93.4,
     95.2,
     89.0,
     95.3
    ],
    "plan": "≥ 100.0%",
    "var": "−1.9 pts",
    "bs": "Intervention required",
    "spp": [
     97.1,
     97.1,
     97.1,
     97.1,
     97.1,
     97.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "OPS-003": {
   "A1": {
    "v": "79.8",
    "u": "%",
    "tr": "▲ 3.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     90.8,
     94.1,
     97.0,
     94.2,
     98.6
    ],
    "plan": "≥ 85.0%",
    "var": "−5.2 pts",
    "bs": "Intervention required",
    "spp": [
     105.1,
     105.1,
     105.1,
     105.1,
     105.1,
     105.1
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)"
   },
   "Group": {
    "v": "83.4",
    "u": "%",
    "tr": "▲ 4.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     90.7,
     95.0,
     98.0,
     93.9,
     99.4
    ],
    "plan": "≥ 85.0%",
    "var": "−1.6 pts",
    "bs": "Intervention required",
    "spp": [
     101.2,
     101.2,
     101.2,
     101.2,
     101.2,
     101.2
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)"
   },
   "Plant01": {
    "v": "82.9",
    "u": "%",
    "tr": "▼ 2.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     89.9,
     93.2,
     92.5,
     97.3,
     94.0
    ],
    "plan": "≥ 85.0%",
    "var": "−2.1 pts",
    "bs": "Deteriorating",
    "spp": [
     96.4,
     96.4,
     96.4,
     96.4,
     96.4,
     96.4
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "70.0",
    "u": "%",
    "tr": "▲ 8.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.2,
     93.3,
     96.0,
     85.1,
     96.7
    ],
    "plan": "≥ 85.0%",
    "var": "−15.0 pts",
    "bs": "Intervention required",
    "spp": [
     117.4,
     117.4,
     117.4,
     117.4,
     117.4,
     117.4
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "86.1",
    "u": "%",
    "tr": "▲ 3.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     88.3,
     95.3,
     100.7,
     98.8,
     103.0
    ],
    "plan": "≥ 85.0%",
    "var": "+1.1 pts",
    "bs": "On track",
    "spp": [
     101.7,
     101.7,
     101.7,
     101.7,
     101.7,
     101.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "87.5",
    "u": "%",
    "tr": "▲ 5.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     90.7,
     96.0,
     99.0,
     93.6,
     100.1
    ],
    "plan": "≥ 85.0%",
    "var": "+2.5 pts",
    "bs": "On track",
    "spp": [
     97.2,
     97.2,
     97.2,
     97.2,
     97.2,
     97.2
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "89.5",
    "u": "%",
    "tr": "▲ 7.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.8,
     97.5,
     97.5,
     97.4,
     106.0
    ],
    "plan": "≥ 85.0%",
    "var": "+4.5 pts",
    "bs": "On track",
    "spp": [
     100.7,
     100.7,
     100.7,
     100.7,
     100.7,
     100.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "90.0",
    "u": "%",
    "tr": "▲ 8.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     91.0,
     95.0,
     102.4,
     92.4,
     102.6
    ],
    "plan": "≥ 85.0%",
    "var": "+5.0 pts",
    "bs": "On track",
    "spp": [
     96.9,
     96.9,
     96.9,
     96.9,
     96.9,
     96.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "82.9",
    "u": "%",
    "tr": "▲ 0.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     86.3,
     95.9,
     95.8,
     92.4,
     92.6
    ],
    "plan": "≥ 85.0%",
    "var": "−2.1 pts",
    "bs": "Intervention required",
    "spp": [
     95.0,
     95.0,
     95.0,
     95.0,
     95.0,
     95.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "OPS-004": {
   "Group": {
    "v": "95.2",
    "u": "% of plan",
    "tr": "▲ 2.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     96.1,
     93.3,
     98.6,
     96.9,
     99.9
    ],
    "plan": "≥ 100.0%",
    "var": "−4.8 pts",
    "bs": "Intervention required",
    "spp": [
     104.9,
     104.9,
     104.9,
     104.9,
     104.9,
     104.9
    ],
    "ts": "Pending certification"
   },
   "A1": {
    "v": "89.2",
    "u": "% of plan",
    "tr": "▲ 0.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.1,
     92.3,
     98.0,
     96.6,
     97.0
    ],
    "plan": "≥ 100.0%",
    "var": "−10.8 pts",
    "bs": "Intervention required",
    "spp": [
     108.7,
     108.7,
     108.7,
     108.7,
     108.7,
     108.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "102.0",
    "u": "% of plan",
    "tr": "▲ 5.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     97.3,
     94.3,
     99.1,
     97.3,
     102.9
    ],
    "plan": "≥ 100.0%",
    "var": "+2.0 pts",
    "bs": "On track",
    "spp": [
     100.9,
     100.9,
     100.9,
     100.9,
     100.9,
     100.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "92.8",
    "u": "% of plan",
    "tr": "▼ 2.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     94.8,
     90.3,
     98.7,
     97.3,
     94.8
    ],
    "plan": "≥ 100.0%",
    "var": "−7.2 pts",
    "bs": "Deteriorating",
    "spp": [
     102.1,
     102.1,
     102.1,
     102.1,
     102.1,
     102.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "77.6",
    "u": "% of plan",
    "tr": "▼ 1.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.1,
     90.9,
     92.3,
     92.4,
     90.5
    ],
    "plan": "≥ 100.0%",
    "var": "−22.4 pts",
    "bs": "Deteriorating",
    "spp": [
     116.7,
     116.7,
     116.7,
     116.7,
     116.7,
     116.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "97.0",
    "u": "% of plan",
    "tr": "▲ 5.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.5,
     94.9,
     102.1,
     98.6,
     103.9
    ],
    "plan": "≥ 100.0%",
    "var": "−3.0 pts",
    "bs": "Intervention required",
    "spp": [
     107.1,
     107.1,
     107.1,
     107.1,
     107.1,
     107.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "105.4",
    "u": "% of plan",
    "tr": "▲ 4.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     92.3,
     91.7,
     96.0,
     103.3,
     107.5
    ],
    "plan": "≥ 100.0%",
    "var": "+5.4 pts",
    "bs": "On track",
    "spp": [
     102.0,
     102.0,
     102.0,
     102.0,
     102.0,
     102.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "103.0",
    "u": "% of plan",
    "tr": "▲ 5.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     103.0,
     96.7,
     103.9,
     100.6,
     106.3
    ],
    "plan": "≥ 100.0%",
    "var": "+3.0 pts",
    "bs": "On track",
    "spp": [
     103.2,
     103.2,
     103.2,
     103.2,
     103.2,
     103.2
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "98.1",
    "u": "% of plan",
    "tr": "▲ 6.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     94.6,
     93.4,
     95.2,
     89.0,
     95.3
    ],
    "plan": "≥ 100.0%",
    "var": "−1.9 pts",
    "bs": "Intervention required",
    "spp": [
     97.1,
     97.1,
     97.1,
     97.1,
     97.1,
     97.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "OPS-005": {
   "A1": {
    "v": "79.8",
    "u": "%",
    "tr": "▲ 3.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     90.8,
     94.1,
     97.0,
     94.2,
     98.6
    ],
    "plan": "≥ 85.0%",
    "var": "−5.2 pts",
    "bs": "Intervention required",
    "spp": [
     105.1,
     105.1,
     105.1,
     105.1,
     105.1,
     105.1
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)"
   },
   "Group": {
    "v": "83.4",
    "u": "%",
    "tr": "▲ 4.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     90.7,
     95.0,
     98.0,
     93.9,
     99.4
    ],
    "plan": "≥ 85.0%",
    "var": "−1.6 pts",
    "bs": "Intervention required",
    "spp": [
     101.2,
     101.2,
     101.2,
     101.2,
     101.2,
     101.2
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)"
   },
   "A2": {
    "v": "87.5",
    "u": "%",
    "tr": "▲ 5.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     90.7,
     96.0,
     99.0,
     93.6,
     100.1
    ],
    "plan": "≥ 85.0%",
    "var": "+2.5 pts",
    "bs": "On track",
    "spp": [
     97.2,
     97.2,
     97.2,
     97.2,
     97.2,
     97.2
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "82.9",
    "u": "%",
    "tr": "▼ 2.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     89.9,
     93.2,
     92.5,
     97.3,
     94.0
    ],
    "plan": "≥ 85.0%",
    "var": "−2.1 pts",
    "bs": "Deteriorating",
    "spp": [
     96.4,
     96.4,
     96.4,
     96.4,
     96.4,
     96.4
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "70.0",
    "u": "%",
    "tr": "▲ 8.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.2,
     93.3,
     96.0,
     85.1,
     96.7
    ],
    "plan": "≥ 85.0%",
    "var": "−15.0 pts",
    "bs": "Intervention required",
    "spp": [
     117.4,
     117.4,
     117.4,
     117.4,
     117.4,
     117.4
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "86.1",
    "u": "%",
    "tr": "▲ 3.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     88.3,
     95.3,
     100.7,
     98.8,
     103.0
    ],
    "plan": "≥ 85.0%",
    "var": "+1.1 pts",
    "bs": "On track",
    "spp": [
     101.7,
     101.7,
     101.7,
     101.7,
     101.7,
     101.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "89.5",
    "u": "%",
    "tr": "▲ 7.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.8,
     97.5,
     97.5,
     97.4,
     106.0
    ],
    "plan": "≥ 85.0%",
    "var": "+4.5 pts",
    "bs": "On track",
    "spp": [
     100.7,
     100.7,
     100.7,
     100.7,
     100.7,
     100.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "90.0",
    "u": "%",
    "tr": "▲ 8.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     91.0,
     95.0,
     102.4,
     92.4,
     102.6
    ],
    "plan": "≥ 85.0%",
    "var": "+5.0 pts",
    "bs": "On track",
    "spp": [
     96.9,
     96.9,
     96.9,
     96.9,
     96.9,
     96.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "82.9",
    "u": "%",
    "tr": "▲ 0.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     86.3,
     95.9,
     95.8,
     92.4,
     92.6
    ],
    "plan": "≥ 85.0%",
    "var": "−2.1 pts",
    "bs": "Intervention required",
    "spp": [
     95.0,
     95.0,
     95.0,
     95.0,
     95.0,
     95.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "OPS-006": {
   "Group": {
    "v": "84.1",
    "u": "%",
    "tr": "▲ 1.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     96.2,
     94.7,
     97.7,
     97.0,
     99.2
    ],
    "plan": "≥ 80.0%",
    "var": "+4.1 pts",
    "bs": "On track",
    "spp": [
     94.4,
     94.4,
     94.4,
     94.4,
     94.4,
     94.4
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)"
   },
   "A1": {
    "v": "80.2",
    "u": "%",
    "tr": "▲ 1.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     96.0,
     93.3,
     96.9,
     96.4,
     98.2
    ],
    "plan": "≥ 80.0%",
    "var": "+0.2 pts",
    "bs": "On track",
    "spp": [
     98.0,
     98.0,
     98.0,
     98.0,
     98.0,
     98.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "88.4",
    "u": "%",
    "tr": "▲ 2.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     96.4,
     96.1,
     98.5,
     97.7,
     100.3
    ],
    "plan": "≥ 80.0%",
    "var": "+8.4 pts",
    "bs": "On track",
    "spp": [
     90.7,
     90.7,
     90.7,
     90.7,
     90.7,
     90.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "84.0",
    "u": "%",
    "tr": "▼ 1.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     89.1,
     92.4,
     92.1,
     96.4,
     94.4
    ],
    "plan": "≥ 80.0%",
    "var": "+4.0 pts",
    "bs": "On track",
    "spp": [
     89.9,
     89.9,
     89.9,
     89.9,
     89.9,
     89.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "70.3",
    "u": "%",
    "tr": "▲ 2.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     102.3,
     93.3,
     96.7,
     93.7,
     96.8
    ],
    "plan": "≥ 80.0%",
    "var": "−9.7 pts",
    "bs": "Intervention required",
    "spp": [
     110.2,
     110.2,
     110.2,
     110.2,
     110.2,
     110.2
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)"
   },
   "Plant03": {
    "v": "86.2",
    "u": "%",
    "tr": "▲ 3.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.8,
     93.9,
     100.0,
     97.3,
     101.6
    ],
    "plan": "≥ 80.0%",
    "var": "+6.2 pts",
    "bs": "On track",
    "spp": [
     94.3,
     94.3,
     94.3,
     94.3,
     94.3,
     94.3
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "89.7",
    "u": "%",
    "tr": "▼ 0.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.4,
     97.8,
     97.5,
     106.3,
     105.8
    ],
    "plan": "≥ 80.0%",
    "var": "+9.7 pts",
    "bs": "On track",
    "spp": [
     94.4,
     94.4,
     94.4,
     94.4,
     94.4,
     94.4
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "91.2",
    "u": "%",
    "tr": "▲ 4.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.1,
     94.6,
     101.0,
     97.5,
     102.6
    ],
    "plan": "≥ 80.0%",
    "var": "+11.2 pts",
    "bs": "On track",
    "spp": [
     89.9,
     89.9,
     89.9,
     89.9,
     89.9,
     89.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "83.8",
    "u": "%",
    "tr": "▲ 1.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     94.2,
     96.7,
     96.1,
     91.9,
     93.1
    ],
    "plan": "≥ 80.0%",
    "var": "+3.8 pts",
    "bs": "On track",
    "spp": [
     88.9,
     88.9,
     88.9,
     88.9,
     88.9,
     88.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PLT-001": {
   "A1": {
    "v": "91.9",
    "u": "%",
    "tr": "▲ 1.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     93.5,
     98.9,
     97.2,
     95.8,
     96.9
    ],
    "plan": "≥ 90.0%",
    "var": "+1.9 pts",
    "bs": "On track",
    "spp": [
     95.0,
     95.0,
     95.0,
     95.0,
     95.0,
     95.0
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)"
   },
   "Plant01": {
    "v": "92.3",
    "u": "%",
    "tr": "▼ 3.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     98.2,
     98.4,
     98.1,
     99.3,
     96.0
    ],
    "plan": "≥ 90.0%",
    "var": "+2.3 pts",
    "bs": "On track",
    "spp": [
     93.6,
     93.6,
     93.6,
     93.6,
     93.6,
     93.6
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "86.7",
    "u": "%",
    "tr": "▲ 5.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     90.4,
     99.2,
     94.0,
     86.5,
     92.5
    ],
    "plan": "≥ 90.0%",
    "var": "−3.3 pts",
    "bs": "Intervention required",
    "spp": [
     96.0,
     96.0,
     96.0,
     96.0,
     96.0,
     96.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "96.6",
    "u": "%",
    "tr": "▲ 0.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     91.8,
     99.0,
     99.4,
     101.5,
     102.4
    ],
    "plan": "≥ 90.0%",
    "var": "+6.6 pts",
    "bs": "On track",
    "spp": [
     95.4,
     95.4,
     95.4,
     95.4,
     95.4,
     95.4
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "93.6",
    "u": "%",
    "tr": "▲ 3.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     93.2,
     98.8,
     98.3,
     94.6,
     98.3
    ],
    "plan": "≥ 90.0%",
    "var": "+3.6 pts",
    "bs": "On track",
    "spp": [
     94.5,
     94.5,
     94.5,
     94.5,
     94.5,
     94.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "95.4",
    "u": "%",
    "tr": "▲ 6.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     92.8,
     98.7,
     99.4,
     93.5,
     99.7
    ],
    "plan": "≥ 90.0%",
    "var": "+5.4 pts",
    "bs": "On track",
    "spp": [
     94.1,
     94.1,
     94.1,
     94.1,
     94.1,
     94.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "95.9",
    "u": "%",
    "tr": "▲ 8.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     97.0,
     97.9,
     99.5,
     91.3,
     100.3
    ],
    "plan": "≥ 90.0%",
    "var": "+5.9 pts",
    "bs": "On track",
    "spp": [
     94.1,
     94.1,
     94.1,
     94.1,
     94.1,
     94.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "95.8",
    "u": "%",
    "tr": "▲ 9.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     90.8,
     99.4,
     101.1,
     91.1,
     100.8
    ],
    "plan": "≥ 90.0%",
    "var": "+5.8 pts",
    "bs": "On track",
    "spp": [
     94.7,
     94.7,
     94.7,
     94.7,
     94.7,
     94.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "94.5",
    "u": "%",
    "tr": "▲ 0.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     90.6,
     98.7,
     97.6,
     97.9,
     98.1
    ],
    "plan": "≥ 90.0%",
    "var": "+4.5 pts",
    "bs": "On track",
    "spp": [
     93.4,
     93.4,
     93.4,
     93.4,
     93.4,
     93.4
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PLT-002": {
   "Plant02": {
    "v": "70.3",
    "u": "%",
    "tr": "▲ 2.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     102.3,
     93.3,
     96.7,
     93.7,
     96.8
    ],
    "plan": "≥ 80.0%",
    "var": "−9.7 pts",
    "bs": "Intervention required",
    "spp": [
     110.2,
     110.2,
     110.2,
     110.2,
     110.2,
     110.2
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)"
   },
   "Group": {
    "v": "84.1",
    "u": "%",
    "tr": "▲ 1.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     96.2,
     94.7,
     97.7,
     97.0,
     99.2
    ],
    "plan": "≥ 80.0%",
    "var": "+4.1 pts",
    "bs": "On track",
    "spp": [
     94.4,
     94.4,
     94.4,
     94.4,
     94.4,
     94.4
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)"
   },
   "A1": {
    "v": "80.2",
    "u": "%",
    "tr": "▲ 1.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     96.0,
     93.3,
     96.9,
     96.4,
     98.2
    ],
    "plan": "≥ 80.0%",
    "var": "+0.2 pts",
    "bs": "On track",
    "spp": [
     98.0,
     98.0,
     98.0,
     98.0,
     98.0,
     98.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "84.0",
    "u": "%",
    "tr": "▼ 1.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     89.1,
     92.4,
     92.1,
     96.4,
     94.4
    ],
    "plan": "≥ 80.0%",
    "var": "+4.0 pts",
    "bs": "On track",
    "spp": [
     89.9,
     89.9,
     89.9,
     89.9,
     89.9,
     89.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "86.2",
    "u": "%",
    "tr": "▲ 3.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.8,
     93.9,
     100.0,
     97.3,
     101.6
    ],
    "plan": "≥ 80.0%",
    "var": "+6.2 pts",
    "bs": "On track",
    "spp": [
     94.3,
     94.3,
     94.3,
     94.3,
     94.3,
     94.3
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "88.4",
    "u": "%",
    "tr": "▲ 2.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     96.4,
     96.1,
     98.5,
     97.7,
     100.3
    ],
    "plan": "≥ 80.0%",
    "var": "+8.4 pts",
    "bs": "On track",
    "spp": [
     90.7,
     90.7,
     90.7,
     90.7,
     90.7,
     90.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "89.7",
    "u": "%",
    "tr": "▼ 0.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.4,
     97.8,
     97.5,
     106.3,
     105.8
    ],
    "plan": "≥ 80.0%",
    "var": "+9.7 pts",
    "bs": "On track",
    "spp": [
     94.4,
     94.4,
     94.4,
     94.4,
     94.4,
     94.4
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "91.2",
    "u": "%",
    "tr": "▲ 4.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.1,
     94.6,
     101.0,
     97.5,
     102.6
    ],
    "plan": "≥ 80.0%",
    "var": "+11.2 pts",
    "bs": "On track",
    "spp": [
     89.9,
     89.9,
     89.9,
     89.9,
     89.9,
     89.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "83.8",
    "u": "%",
    "tr": "▲ 1.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     94.2,
     96.7,
     96.1,
     91.9,
     93.1
    ],
    "plan": "≥ 80.0%",
    "var": "+3.8 pts",
    "bs": "On track",
    "spp": [
     88.9,
     88.9,
     88.9,
     88.9,
     88.9,
     88.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PLT-004": {
   "A1": {
    "v": "87.5",
    "u": "%",
    "tr": "▲ 0.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     98.6,
     100.3,
     100.7,
     100.0,
     100.6
    ],
    "plan": "≥ 88.0%",
    "var": "−0.5 pts",
    "bs": "Intervention required",
    "spp": [
     101.2,
     101.2,
     101.2,
     101.2,
     101.2,
     101.2
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)"
   },
   "Plant01": {
    "v": "91.7",
    "u": "%",
    "tr": "▲ 3.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     94.3,
     96.7,
     102.0,
     99.0,
     102.3
    ],
    "plan": "≥ 88.0%",
    "var": "+3.7 pts",
    "bs": "On track",
    "spp": [
     98.2,
     98.2,
     98.2,
     98.2,
     98.2,
     98.2
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "86.5",
    "u": "%",
    "tr": "▲ 4.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     105.2,
     99.8,
     105.8,
     99.8,
     105.1
    ],
    "plan": "≥ 88.0%",
    "var": "−1.5 pts",
    "bs": "Intervention required",
    "spp": [
     106.9,
     106.9,
     106.9,
     106.9,
     106.9,
     106.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "85.7",
    "u": "%",
    "tr": "▼ 3.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     96.5,
     102.7,
     96.2,
     100.3,
     96.4
    ],
    "plan": "≥ 88.0%",
    "var": "−2.3 pts",
    "bs": "Deteriorating",
    "spp": [
     99.0,
     99.0,
     99.0,
     99.0,
     99.0,
     99.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "87.3",
    "u": "%",
    "tr": "▼ 1.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.0,
     101.3,
     100.2,
     101.7,
     100.4
    ],
    "plan": "≥ 88.0%",
    "var": "−0.7 pts",
    "bs": "Deteriorating",
    "spp": [
     101.2,
     101.2,
     101.2,
     101.2,
     101.2,
     101.2
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "87.2",
    "u": "%",
    "tr": "▼ 2.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.4,
     102.5,
     99.7,
     103.5,
     100.2
    ],
    "plan": "≥ 88.0%",
    "var": "−0.8 pts",
    "bs": "Deteriorating",
    "spp": [
     101.1,
     101.1,
     101.1,
     101.1,
     101.1,
     101.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "88.4",
    "u": "%",
    "tr": "▼ 0.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.2,
     102.7,
     96.8,
     100.7,
     99.9
    ],
    "plan": "≥ 88.0%",
    "var": "+0.4 pts",
    "bs": "On track",
    "spp": [
     99.5,
     99.5,
     99.5,
     99.5,
     99.5,
     99.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "88.3",
    "u": "%",
    "tr": "▼ 2.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     97.4,
     103.3,
     101.7,
     103.2,
     100.8
    ],
    "plan": "≥ 88.0%",
    "var": "+0.3 pts",
    "bs": "On track",
    "spp": [
     100.4,
     100.4,
     100.4,
     100.4,
     100.4,
     100.4
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "84.6",
    "u": "%",
    "tr": "▼ 5.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     101.9,
     101.2,
     98.9,
     106.0,
     99.2
    ],
    "plan": "≥ 88.0%",
    "var": "−3.4 pts",
    "bs": "Deteriorating",
    "spp": [
     103.2,
     103.2,
     103.2,
     103.2,
     103.2,
     103.2
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PLT-005": {
   "A1": {
    "v": "91.5",
    "u": "%",
    "tr": "▲ 0.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     102.5,
     104.0,
     100.3,
     101.7,
     102.0
    ],
    "plan": "≥ 92.0%",
    "var": "−0.5 pts",
    "bs": "Intervention required",
    "spp": [
     102.6,
     102.6,
     102.6,
     102.6,
     102.6,
     102.6
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)"
   },
   "Plant01": {
    "v": "91.5",
    "u": "%",
    "tr": "▼ 1.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     102.9,
     103.2,
     97.0,
     101.5,
     100.4
    ],
    "plan": "≥ 92.0%",
    "var": "−0.5 pts",
    "bs": "Deteriorating",
    "spp": [
     101.0,
     101.0,
     101.0,
     101.0,
     101.0,
     101.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "93.1",
    "u": "%",
    "tr": "▲ 4.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     106.2,
     106.4,
     101.9,
     99.7,
     104.8
    ],
    "plan": "≥ 92.0%",
    "var": "+1.1 pts",
    "bs": "On track",
    "spp": [
     103.6,
     103.6,
     103.6,
     103.6,
     103.6,
     103.6
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "90.4",
    "u": "%",
    "tr": "▼ 1.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.5,
     102.8,
     101.3,
     103.0,
     101.1
    ],
    "plan": "≥ 92.0%",
    "var": "−1.6 pts",
    "bs": "Deteriorating",
    "spp": [
     102.9,
     102.9,
     102.9,
     102.9,
     102.9,
     102.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "91.9",
    "u": "%",
    "tr": "▲ 0.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     102.0,
     101.1,
     101.0,
     100.7,
     101.6
    ],
    "plan": "≥ 92.0%",
    "var": "−0.1 pts",
    "bs": "Intervention required",
    "spp": [
     101.7,
     101.7,
     101.7,
     101.7,
     101.7,
     101.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "92.4",
    "u": "%",
    "tr": "▲ 1.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     101.6,
     98.2,
     101.8,
     99.6,
     101.1
    ],
    "plan": "≥ 92.0%",
    "var": "+0.4 pts",
    "bs": "On track",
    "spp": [
     100.7,
     100.7,
     100.7,
     100.7,
     100.7,
     100.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "90.6",
    "u": "%",
    "tr": "▼ 1.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     98.8,
     97.7,
     102.0,
     98.7,
     97.6
    ],
    "plan": "≥ 92.0%",
    "var": "−1.4 pts",
    "bs": "Deteriorating",
    "spp": [
     99.1,
     99.1,
     99.1,
     99.1,
     99.1,
     99.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "93.2",
    "u": "%",
    "tr": "▲ 3.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     103.3,
     100.0,
     105.7,
     100.1,
     104.4
    ],
    "plan": "≥ 92.0%",
    "var": "+1.2 pts",
    "bs": "On track",
    "spp": [
     103.0,
     103.0,
     103.0,
     103.0,
     103.0,
     103.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "92.9",
    "u": "%",
    "tr": "▲ 0.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     101.7,
     96.3,
     96.7,
     99.6,
     99.8
    ],
    "plan": "≥ 92.0%",
    "var": "+0.9 pts",
    "bs": "On track",
    "spp": [
     98.9,
     98.9,
     98.9,
     98.9,
     98.9,
     98.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PRD-001": {
   "A1": {
    "v": "4",
    "u": "days",
    "tr": "▼ 6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     70.6,
     105.9,
     70.6,
     58.8,
     23.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "4",
    "u": "days",
    "tr": "▼ 6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     70.6,
     105.9,
     70.6,
     58.8,
     23.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Planning (role)"
   },
   "Group": {
    "v": "4",
    "u": "days",
    "tr": "▼ 6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     70.6,
     105.9,
     70.6,
     58.8,
     23.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "Not expected",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "Not expected",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "Not expected",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "Not expected",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "Not expected",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "Not expected",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PRD-002": {
   "Group": {
    "v": "69.7",
    "u": "%",
    "tr": "▲ 8.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     92.3,
     101.0,
     101.4,
     94.1,
     107.4
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Pending certification",
    "prov": "PREDICTION",
    "own": "Planning (role)"
   },
   "A1": {
    "v": "79.4",
    "u": "%",
    "tr": "▲ 6.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     87.7,
     97.4,
     97.4,
     91.8,
     100.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Pending certification",
    "prov": "PREDICTION",
    "own": "Planning (role)"
   },
   "A2": {
    "v": "45.1",
    "u": "%",
    "tr": "▲ 4.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     109.6,
     110.3,
     110.6,
     108.3,
     119.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "38.8",
    "u": "%",
    "tr": "▼ 6.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     70.5,
     86.4,
     102.4,
     91.1,
     77.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "98.3",
    "u": "%",
    "tr": "▲ 3.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.2,
     98.4,
     94.0,
     97.4,
     101.4
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "43.2",
    "u": "%",
    "tr": "▲ 0.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     101.0,
     102.6,
     111.7,
     102.9,
     103.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "52.3",
    "u": "%",
    "tr": "▲ 12.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     80.5,
     72.7,
     97.9,
     80.1,
     105.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "46.9",
    "u": "%",
    "tr": "▼ 3.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     113.9,
     123.4,
     122.5,
     123.9,
     114.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "43.2",
    "u": "%",
    "tr": "▲ 2.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     120.2,
     117.0,
     93.3,
     102.8,
     108.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PRD-003": {
   "Group": {
    "v": "-56.2",
    "u": "₹ m",
    "tr": "▼ 17.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     98.3,
     56.9,
     66.2,
     184.3,
     266.0
    ],
    "plan": "≥ 0.0 ₹ m",
    "var": "−56.2 ₹ m",
    "bs": "Deteriorating",
    "spp": [
     -0.0,
     -0.0,
     -0.0,
     -0.0,
     -0.0,
     -0.0
    ],
    "ts": "Pending certification",
    "prov": "PREDICTION",
    "own": "Planning (role)"
   },
   "A1": {
    "v": "-48.5",
    "u": "₹ m",
    "tr": "▼ 17.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     44.6,
     39.1,
     69.0,
     213.0,
     333.8
    ],
    "plan": "≥ 0.0 ₹ m",
    "var": "−48.5 ₹ m",
    "bs": "Deteriorating",
    "spp": [
     -0.0,
     -0.0,
     -0.0,
     -0.0,
     -0.0,
     -0.0
    ],
    "ts": "Pending certification",
    "prov": "PREDICTION",
    "own": "Finance (role)"
   },
   "A2": {
    "v": "-7.7",
    "u": "₹ m",
    "tr": "▲ 0.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     217.0,
     96.2,
     60.0,
     120.8,
     116.3
    ],
    "plan": "≥ 0.0 ₹ m",
    "var": "−7.7 ₹ m",
    "bs": "Intervention required",
    "spp": [
     -0.0,
     -0.0,
     -0.0,
     -0.0,
     -0.0,
     -0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PRD-004": {
   "Group": {
    "v": "None within 90 d",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Pending certification",
    "prov": "PREDICTION",
    "own": "Treasury (role)"
   },
   "A1": {
    "v": "None within 90 d",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Pending certification",
    "prov": "FCST",
    "own": "Finance (role)"
   },
   "A2": {
    "v": "None within 90 d",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PRD-005": {
   "Group": {
    "v": "Not forecast",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Pending certification",
    "prov": "PREDICTION",
    "own": "Treasury (role)"
   },
   "A1": {
    "v": "Not forecast",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Pending certification",
    "prov": "FCST",
    "own": "Treasury (role)"
   },
   "A2": {
    "v": "Not forecast",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PRD-006": {
   "Group": {
    "v": "28.0",
    "u": "kt",
    "tr": "▼ 0.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     145.9,
     121.2,
     170.6,
     147.5,
     145.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Pending certification"
   },
   "A1": {
    "v": "22.3",
    "u": "kt",
    "tr": "▲ 5.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     132.8,
     133.3,
     202.5,
     141.4,
     190.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "5.7",
    "u": "kt",
    "tr": "▼ 6.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     166.2,
     102.3,
     120.7,
     157.1,
     76.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "4.2",
    "u": "kt",
    "tr": "▲ 1.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     179.6,
     148.1,
     238.3,
     166.7,
     257.4
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "15.6",
    "u": "kt",
    "tr": "▲ 6.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     150.0,
     128.4,
     246.5,
     166.2,
     291.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "2.5",
    "u": "kt",
    "tr": "▼ 2.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     97.5,
     134.0,
     140.5,
     104.6,
     53.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "1.4",
    "u": "kt",
    "tr": "▲ 0.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     294.9,
     212.5,
     179.0,
     64.2,
     80.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "2.3",
    "u": "kt",
    "tr": "▼ 4.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     94.2,
     72.8,
     66.0,
     163.0,
     57.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "2.0",
    "u": "kt",
    "tr": "▼ 2.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     200.6,
     58.9,
     187.4,
     238.3,
     115.4
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PRD-007": {
   "Group": {
    "v": "0.0",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "0.6",
    "u": "%",
    "tr": "▲ 0.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     5.3,
     68.4,
     421.1,
     18.4,
     155.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0.0",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     300.0,
     0.0,
     0.0,
     200.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "2.1",
    "u": "%",
    "tr": "▲ 1.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     116.1,
     47.3,
     475.9,
     83.9,
     183.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "31.4",
    "u": "%",
    "tr": "▲ 0.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     26.7,
     89.4,
     61.8,
     77.9,
     79.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "3.1",
    "u": "%",
    "tr": "▲ 2.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     24.2,
     113.3,
     360.0,
     35.2,
     190.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "2.8",
    "u": "%",
    "tr": "▲ 1.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     44.5,
     15.9,
     103.7,
     66.9,
     113.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "0.6",
    "u": "%",
    "tr": "▼ 1.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     115.8,
     50.3,
     18.8,
     149.1,
     38.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "1.5",
    "u": "%",
    "tr": "▲ 0.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     595.9,
     68.4,
     91.8,
     112.2,
     154.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PRD-008": {
   "A1": {
    "v": "-101.3",
    "u": "₹ m",
    "tr": "▼ 10.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     470.2,
     301.9,
     238.9,
     187.2,
     209.5
    ],
    "plan": "≥ 0.0 ₹ m",
    "var": "−101.3 ₹ m",
    "bs": "Deteriorating",
    "spp": [
     -0.0,
     -0.0,
     -0.0,
     -0.0,
     -0.0,
     -0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "-120.1",
    "u": "₹ m",
    "tr": "▼ 12.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     380.2,
     248.8,
     200.4,
     167.1,
     186.9
    ],
    "plan": "≥ 0.0 ₹ m",
    "var": "−120.1 ₹ m",
    "bs": "Deteriorating",
    "spp": [
     -0.0,
     -0.0,
     -0.0,
     -0.0,
     -0.0,
     -0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "-18.8",
    "u": "₹ m",
    "tr": "▼ 1.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     106.2,
     87.4,
     83.3,
     106.0,
     118.3
    ],
    "plan": "≥ 0.0 ₹ m",
    "var": "−18.8 ₹ m",
    "bs": "Deteriorating",
    "spp": [
     -0.0,
     -0.0,
     -0.0,
     -0.0,
     -0.0,
     -0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PRD-009": {
   "A1": {
    "v": "10.5",
    "u": "%",
    "tr": "▲ 1.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     58.9,
     63.5,
     74.8,
     75.3,
     84.0
    ],
    "plan": "≥ 12.0%",
    "var": "−1.5 pts",
    "bs": "Intervention required",
    "spp": [
     96.2,
     96.2,
     96.2,
     96.2,
     96.2,
     96.2
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "11.3",
    "u": "%",
    "tr": "▲ 1.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     86.0,
     78.9,
     81.2,
     78.4,
     86.9
    ],
    "plan": "≥ 12.0%",
    "var": "−0.7 pts",
    "bs": "Intervention required",
    "spp": [
     92.6,
     92.6,
     92.6,
     92.6,
     92.6,
     92.6
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "12.1",
    "u": "%",
    "tr": "▲ 1.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     113.5,
     94.7,
     87.8,
     81.5,
     89.8
    ],
    "plan": "≥ 12.0%",
    "var": "+0.1 pts",
    "bs": "On track",
    "spp": [
     89.0,
     89.0,
     89.0,
     89.0,
     89.0,
     89.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PRD-010": {
   "A1": {
    "v": "5.17",
    "u": "₹ m",
    "tr": "▲ 0.84 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     193.5,
     286.2,
     387.3,
     484.7,
     579.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified"
   },
   "Group": {
    "v": "5.25",
    "u": "₹ m",
    "tr": "▲ 0.88 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     194.4,
     289.5,
     391.3,
     488.5,
     587.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "5.33",
    "u": "₹ m",
    "tr": "▲ 0.93 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     195.2,
     292.6,
     394.9,
     491.8,
     595.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PRD-011": {
   "A1": {
    "v": "235",
    "u": "t",
    "tr": "▲ 2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     93.6,
     93.5,
     100.3,
     97.0,
     98.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified"
   },
   "Group": {
    "v": "238",
    "u": "t",
    "tr": "▲ 5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     93.7,
     94.9,
     101.3,
     97.0,
     99.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "241",
    "u": "t",
    "tr": "▲ 9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     93.9,
     96.4,
     102.3,
     97.0,
     100.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PRG-001": {
   "Group": {
    "v": "9 on track · 2 at risk · 0 off track",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified"
   },
   "A1": {
    "v": "5 on track · 1 at risk · 0 off track",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "4 on track · 1 at risk · 0 off track",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PRG-002": {
   "Group": {
    "v": "48.0",
    "u": "% of plan",
    "tr": "▼ 0.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     102.5,
     102.2,
     102.9,
     103.0,
     102.7
    ],
    "plan": "≥ 100.0%",
    "var": "−52.0 pts",
    "bs": "Deteriorating",
    "spp": [
     214.2,
     214.2,
     214.2,
     214.2,
     214.2,
     214.2
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Transformation (role)"
   },
   "A1": {
    "v": "69.3",
    "u": "% of plan",
    "tr": "▼ 0.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     98.4,
     96.4,
     96.6,
     96.9,
     96.1
    ],
    "plan": "≥ 100.0%",
    "var": "−30.7 pts",
    "bs": "Deteriorating",
    "spp": [
     138.5,
     138.5,
     138.5,
     138.5,
     138.5,
     138.5
    ],
    "ts": "Pending certification",
    "prov": "PRELIM",
    "own": "Value Office (role)"
   },
   "A2": {
    "v": "36.3",
    "u": "% of plan",
    "tr": "▲ 0.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     106.3,
     107.5,
     108.6,
     108.6,
     109.2
    ],
    "plan": "≥ 100.0%",
    "var": "−63.7 pts",
    "bs": "Intervention required",
    "spp": [
     301.2,
     301.2,
     301.2,
     301.2,
     301.2,
     301.2
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PRG-003": {
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)"
   },
   "Group": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)"
   },
   "A2": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PRG-004": {
   "A1": {
    "v": "53.3",
    "u": "%",
    "tr": "▲ 3.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     116.7,
     133.3,
     150.0,
     166.7,
     177.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified"
   },
   "Group": {
    "v": "54.0",
    "u": "%",
    "tr": "▲ 4.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     116.2,
     132.4,
     148.6,
     164.8,
     181.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified"
   },
   "A2": {
    "v": "54.7",
    "u": "%",
    "tr": "▲ 6.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     115.8,
     131.6,
     147.4,
     163.2,
     184.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PRG-005": {
   "A1": {
    "v": "5 on track · 2 at risk · 1 delayed",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Transformation (role)"
   },
   "Group": {
    "v": "15 on track · 6 at risk · 3 delayed",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified"
   },
   "A2": {
    "v": "10 on track · 4 at risk · 2 delayed",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "REG-001": {
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     200.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     33.3,
     33.3,
     0.0,
     0.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     50.0,
     50.0,
     50.0,
     0.0,
     0.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "REG-002": {
   "A1": {
    "v": "2",
    "u": "",
    "tr": "▲ 2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     50.0,
     0.0,
     0.0,
     0.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "3",
    "u": "",
    "tr": "▲ 3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     50.0,
     100.0,
     100.0,
     0.0,
     150.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     0.0,
     0.0,
     0.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "REG-003": {
   "A1": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     50.0,
     100.0,
     50.0,
     50.0,
     50.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "1",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     33.3,
     100.0,
     66.7,
     66.7,
     33.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     100.0,
     100.0,
     100.0,
     0.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     100.0,
     0.0,
     0.0,
     0.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     100.0,
     0.0,
     0.0,
     0.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "0",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "REG-004": {
   "A1": {
    "v": "1",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     33.3,
     66.7,
     33.3,
     66.7,
     33.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Compliance (role)"
   },
   "Group": {
    "v": "2",
    "u": "",
    "tr": "▼ 2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     50.0,
     100.0,
     100.0,
     100.0,
     50.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "1",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     200.0,
     300.0,
     200.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "0",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     100.0,
     0.0,
     100.0,
     0.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     100.0,
     100.0,
     0.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "0",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     0.0,
     0.0,
     100.0,
     0.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "REG-005": {
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Compliance (role)"
   },
   "Group": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Compliance (role)"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "REG-006": {
   "A1": {
    "v": "65",
    "u": "days",
    "tr": "▼ 30 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     86.0,
     72.1,
     58.1,
     44.2,
     30.2
    ],
    "plan": "≥ 90 days",
    "var": "−25 days",
    "bs": "Deteriorating",
    "spp": [
     41.9,
     41.9,
     41.9,
     41.9,
     41.9,
     41.9
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Compliance (role)"
   },
   "Group": {
    "v": "65",
    "u": "days",
    "tr": "▼ 30 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     86.0,
     72.1,
     58.1,
     44.2,
     30.2
    ],
    "plan": "≥ 90 days",
    "var": "−25 days",
    "bs": "Deteriorating",
    "spp": [
     41.9,
     41.9,
     41.9,
     41.9,
     41.9,
     41.9
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Compliance (role)"
   },
   "Plant01": {
    "v": "161",
    "u": "days",
    "tr": "▼ 30 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     90.4,
     80.7,
     71.1,
     61.4,
     51.8
    ],
    "plan": "≥ 90 days",
    "var": "+71 days",
    "bs": "On track",
    "spp": [
     28.9,
     28.9,
     28.9,
     28.9,
     28.9,
     28.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "65",
    "u": "days",
    "tr": "▼ 30 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     86.0,
     72.1,
     58.1,
     44.2,
     30.2
    ],
    "plan": "≥ 90 days",
    "var": "−25 days",
    "bs": "Deteriorating",
    "spp": [
     41.9,
     41.9,
     41.9,
     41.9,
     41.9,
     41.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "68",
    "u": "days",
    "tr": "▼ 30 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     86.2,
     72.5,
     58.7,
     45.0,
     31.2
    ],
    "plan": "≥ 90 days",
    "var": "−22 days",
    "bs": "Deteriorating",
    "spp": [
     41.3,
     41.3,
     41.3,
     41.3,
     41.3,
     41.3
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "102",
    "u": "days",
    "tr": "▼ 30 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     88.1,
     76.2,
     64.3,
     52.4,
     40.5
    ],
    "plan": "≥ 90 days",
    "var": "+12 days",
    "bs": "On track",
    "spp": [
     35.7,
     35.7,
     35.7,
     35.7,
     35.7,
     35.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "219",
    "u": "days",
    "tr": "▼ 30 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     91.9,
     83.7,
     75.6,
     67.5,
     59.3
    ],
    "plan": "≥ 90 days",
    "var": "+129 days",
    "bs": "On track",
    "spp": [
     24.4,
     24.4,
     24.4,
     24.4,
     24.4,
     24.4
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "102",
    "u": "days",
    "tr": "▼ 30 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     88.1,
     76.2,
     64.3,
     52.4,
     40.5
    ],
    "plan": "≥ 90 days",
    "var": "+12 days",
    "bs": "On track",
    "spp": [
     35.7,
     35.7,
     35.7,
     35.7,
     35.7,
     35.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "110",
    "u": "days",
    "tr": "▼ 30 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     88.5,
     76.9,
     65.4,
     53.8,
     42.3
    ],
    "plan": "≥ 90 days",
    "var": "+20 days",
    "bs": "On track",
    "spp": [
     34.6,
     34.6,
     34.6,
     34.6,
     34.6,
     34.6
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "REG-007": {
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "0",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "0",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "REG-008": {
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "REG-009": {
   "Group": {
    "v": "Not triggered",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Pending certification",
    "prov": "SYSTEM",
    "own": "Disclosure Authority [PH]"
   },
   "A1": {
    "v": "Not triggered",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "Not triggered",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "Not triggered",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "Not triggered",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "Not triggered",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "Not triggered",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "Not triggered",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "Not triggered",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "REG-010": {
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "REG-011": {
   "A1": {
    "v": "38",
    "u": "h remaining",
    "tr": "▼ 961 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     3.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Entity Legal (role)"
   },
   "Group": {
    "v": "38",
    "u": "h remaining",
    "tr": "▼ 961 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     3.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "No clock running",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "REL-001": {
   "A1": {
    "v": "165",
    "u": "h",
    "tr": "▼ 37 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     72.5,
     89.0,
     64.5,
     89.1,
     72.7
    ],
    "plan": "≥ 200 h",
    "var": "−35 h",
    "bs": "Deteriorating",
    "spp": [
     88.0,
     88.0,
     88.0,
     88.0,
     88.0,
     88.0
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)"
   },
   "Group": {
    "v": "270",
    "u": "h",
    "tr": "▲ 58 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     64.2,
     81.3,
     64.6,
     72.0,
     91.8
    ],
    "plan": "≥ 200 h",
    "var": "+70 h",
    "bs": "On track",
    "spp": [
     68.1,
     68.1,
     68.1,
     68.1,
     68.1,
     68.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "166",
    "u": "h",
    "tr": "▼ 189 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     67.6,
     98.4,
     50.7,
     102.7,
     48.0
    ],
    "plan": "≥ 200 h",
    "var": "−34 h",
    "bs": "Deteriorating",
    "spp": [
     57.8,
     57.8,
     57.8,
     57.8,
     57.8,
     57.8
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "104",
    "u": "h",
    "tr": "▼ 47 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     93.4,
     124.0,
     80.9,
     111.7,
     77.1
    ],
    "plan": "≥ 200 h",
    "var": "−96 h",
    "bs": "Deteriorating",
    "spp": [
     148.1,
     148.1,
     148.1,
     148.1,
     148.1,
     148.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "348",
    "u": "h",
    "tr": "▲ 170 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     47.4,
     49.5,
     51.4,
     52.4,
     102.4
    ],
    "plan": "≥ 200 h",
    "var": "+148 h",
    "bs": "On track",
    "spp": [
     58.9,
     58.9,
     58.9,
     58.9,
     58.9,
     58.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "687",
    "u": "h",
    "tr": "▲ 465 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     53.3,
     70.5,
     64.2,
     53.6,
     166.2
    ],
    "plan": "≥ 200 h",
    "var": "+487 h",
    "bs": "On track",
    "spp": [
     48.4,
     48.4,
     48.4,
     48.4,
     48.4,
     48.4
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "691",
    "u": "h",
    "tr": "▲ 41 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     50.1,
     65.3,
     51.4,
     188.7,
     200.6
    ],
    "plan": "≥ 200 h",
    "var": "+491 h",
    "bs": "On track",
    "spp": [
     58.1,
     58.1,
     58.1,
     58.1,
     58.1,
     58.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "690",
    "u": "h",
    "tr": "▲ 529 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     93.9,
     66.3,
     209.0,
     47.1,
     201.6
    ],
    "plan": "≥ 200 h",
    "var": "+490 h",
    "bs": "On track",
    "spp": [
     58.4,
     58.4,
     58.4,
     58.4,
     58.4,
     58.4
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "681",
    "u": "h",
    "tr": "▲ 505 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     31.2,
     98.7,
     33.6,
     25.3,
     98.1
    ],
    "plan": "≥ 200 h",
    "var": "+481 h",
    "bs": "On track",
    "spp": [
     28.8,
     28.8,
     28.8,
     28.8,
     28.8,
     28.8
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "REL-002": {
   "A1": {
    "v": "8.2",
    "u": "h",
    "tr": "▲ 0.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     117.9,
     133.8,
     147.7,
     155.5,
     156.7
    ],
    "plan": "≤ 6.0 h",
    "var": "+2.2 h",
    "bs": "Deteriorating",
    "spp": [
     114.1,
     114.1,
     114.1,
     114.1,
     114.1,
     114.1
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)"
   },
   "Group": {
    "v": "7.8",
    "u": "h",
    "tr": "▲ 0.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     121.3,
     129.5,
     131.7,
     136.0,
     154.1
    ],
    "plan": "≤ 6.0 h",
    "var": "+1.8 h",
    "bs": "Deteriorating",
    "spp": [
     118.1,
     118.1,
     118.1,
     118.1,
     118.1,
     118.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "5.4",
    "u": "h",
    "tr": "▼ 1.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     145.6,
     207.0,
     150.1,
     197.2,
     152.1
    ],
    "plan": "≤ 6.0 h",
    "var": "−0.6 h",
    "bs": "On track",
    "spp": [
     169.0,
     169.0,
     169.0,
     169.0,
     169.0,
     169.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "11.4",
    "u": "h",
    "tr": "▼ 0.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     141.6,
     142.5,
     191.4,
     204.5,
     199.7
    ],
    "plan": "≤ 6.0 h",
    "var": "+5.4 h",
    "bs": "Intervention required",
    "spp": [
     104.9,
     104.9,
     104.9,
     104.9,
     104.9,
     104.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "4.4",
    "u": "h",
    "tr": "▼ 0.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     79.3,
     99.7,
     94.0,
     90.5,
     75.9
    ],
    "plan": "≤ 6.0 h",
    "var": "−1.6 h",
    "bs": "On track",
    "spp": [
     103.4,
     103.4,
     103.4,
     103.4,
     103.4,
     103.4
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "6.2",
    "u": "h",
    "tr": "▲ 0.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     128.4,
     124.2,
     100.6,
     115.3,
     129.6
    ],
    "plan": "≤ 6.0 h",
    "var": "+0.2 h",
    "bs": "Deteriorating",
    "spp": [
     126.1,
     126.1,
     126.1,
     126.1,
     126.1,
     126.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "6.8",
    "u": "h",
    "tr": "▲ 2.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     228.8,
     249.1,
     113.2,
     120.6,
     200.0
    ],
    "plan": "≤ 6.0 h",
    "var": "+0.8 h",
    "bs": "Deteriorating",
    "spp": [
     176.5,
     176.5,
     176.5,
     176.5,
     176.5,
     176.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "5.2",
    "u": "h",
    "tr": "▼ 2.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     66.9,
     57.6,
     86.3,
     109.8,
     74.8
    ],
    "plan": "≤ 6.0 h",
    "var": "−0.8 h",
    "bs": "On track",
    "spp": [
     86.3,
     86.3,
     86.3,
     86.3,
     86.3,
     86.3
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "6.5",
    "u": "h",
    "tr": "▲ 2.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     157.1,
     129.0,
     181.6,
     119.4,
     209.7
    ],
    "plan": "≤ 6.0 h",
    "var": "+0.5 h",
    "bs": "Deteriorating",
    "spp": [
     193.5,
     193.5,
     193.5,
     193.5,
     193.5,
     193.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "REL-003": {
   "A1": {
    "v": "121",
    "u": "h",
    "tr": "▲ 24 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     140.1,
     136.5,
     202.4,
     153.2,
     192.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)"
   },
   "Group": {
    "v": "154",
    "u": "h",
    "tr": "▼ 10 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     161.6,
     136.7,
     178.3,
     157.8,
     148.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)"
   },
   "Plant01": {
    "v": "30",
    "u": "h",
    "tr": "▲ 11 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     147.4,
     139.8,
     204.5,
     143.6,
     227.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "78",
    "u": "h",
    "tr": "▲ 25 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     147.7,
     119.7,
     223.5,
     172.6,
     252.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "12",
    "u": "h",
    "tr": "▼ 11 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     122.2,
     162.2,
     165.4,
     127.6,
     66.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "34",
    "u": "h",
    "tr": "▼ 34 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     194.4,
     137.0,
     141.6,
     165.0,
     82.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "10",
    "u": "h",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     307.5,
     252.6,
     165.4,
     70.7,
     75.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "10",
    "u": "h",
    "tr": "▼ 25 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     107.1,
     88.8,
     77.1,
     205.3,
     60.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "13",
    "u": "h",
    "tr": "▼ 10 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     192.6,
     70.4,
     213.9,
     217.6,
     124.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "REL-004": {
   "A1": {
    "v": "21.7",
    "u": "kt",
    "tr": "▲ 3.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     138.7,
     137.7,
     200.2,
     152.3,
     183.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)"
   },
   "Group": {
    "v": "27.2",
    "u": "kt",
    "tr": "▼ 2.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     152.9,
     132.8,
     175.4,
     160.8,
     145.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "4.1",
    "u": "kt",
    "tr": "▲ 1.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     147.4,
     139.9,
     204.6,
     143.7,
     227.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "14.8",
    "u": "kt",
    "tr": "▲ 4.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     147.7,
     119.7,
     223.5,
     172.6,
     252.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "2.8",
    "u": "kt",
    "tr": "▼ 2.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     122.2,
     162.2,
     165.4,
     127.6,
     66.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "5.5",
    "u": "kt",
    "tr": "▼ 6.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     177.4,
     124.4,
     132.7,
     175.3,
     79.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "1.3",
    "u": "kt",
    "tr": "▲ 0.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     307.6,
     252.7,
     165.5,
     70.7,
     76.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "2.1",
    "u": "kt",
    "tr": "▼ 5.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     107.1,
     88.8,
     77.1,
     205.3,
     60.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "2.1",
    "u": "kt",
    "tr": "▼ 1.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     192.6,
     70.3,
     213.8,
     217.6,
     124.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "REL-005": {
   "A1": {
    "v": "93.4",
    "u": "%",
    "tr": "▼ 4.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     96.0,
     99.0,
     94.9,
     104.2,
     99.9
    ],
    "plan": "≥ 95.0%",
    "var": "−1.6 pts",
    "bs": "Deteriorating",
    "spp": [
     101.6,
     101.6,
     101.6,
     101.6,
     101.6,
     101.6
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)"
   },
   "Group": {
    "v": "95.6",
    "u": "%",
    "tr": "▼ 2.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.2,
     101.3,
     99.0,
     105.2,
     102.3
    ],
    "plan": "≥ 95.0%",
    "var": "+0.6 pts",
    "bs": "On track",
    "spp": [
     101.6,
     101.6,
     101.6,
     101.6,
     101.6,
     101.6
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "93.5",
    "u": "%",
    "tr": "▼ 3.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.6,
     96.4,
     97.2,
     99.6,
     96.1
    ],
    "plan": "≥ 95.0%",
    "var": "−1.5 pts",
    "bs": "Deteriorating",
    "spp": [
     97.6,
     97.6,
     97.6,
     97.6,
     97.6,
     97.6
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "81.8",
    "u": "%",
    "tr": "▼ 13.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     88.2,
     101.3,
     92.4,
     111.6,
     96.3
    ],
    "plan": "≥ 95.0%",
    "var": "−13.2 pts",
    "bs": "Deteriorating",
    "spp": [
     111.8,
     111.8,
     111.8,
     111.8,
     111.8,
     111.8
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "100.0",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     96.5,
     98.1,
     98.9,
     102.2,
     102.2
    ],
    "plan": "≥ 95.0%",
    "var": "+5.0 pts",
    "bs": "On track",
    "spp": [
     97.1,
     97.1,
     97.1,
     97.1,
     97.1,
     97.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "97.8",
    "u": "%",
    "tr": "▼ 1.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     102.9,
     103.7,
     103.2,
     106.1,
     104.7
    ],
    "plan": "≥ 95.0%",
    "var": "+2.8 pts",
    "bs": "On track",
    "spp": [
     101.7,
     101.7,
     101.7,
     101.7,
     101.7,
     101.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "100.0",
    "u": "%",
    "tr": "▲ 2.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     107.0,
     101.3,
     102.8,
     103.8,
     107.0
    ],
    "plan": "≥ 95.0%",
    "var": "+5.0 pts",
    "bs": "On track",
    "spp": [
     101.6,
     101.6,
     101.6,
     101.6,
     101.6,
     101.6
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "97.6",
    "u": "%",
    "tr": "▼ 2.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     105.5,
     106.5,
     108.3,
     105.8
    ],
    "plan": "≥ 95.0%",
    "var": "+2.6 pts",
    "bs": "On track",
    "spp": [
     102.9,
     102.9,
     102.9,
     102.9,
     102.9,
     102.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "94.4",
    "u": "%",
    "tr": "▼ 5.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     101.3,
     105.4,
     98.6,
     105.4,
     99.5
    ],
    "plan": "≥ 95.0%",
    "var": "−0.6 pts",
    "bs": "Deteriorating",
    "spp": [
     100.1,
     100.1,
     100.1,
     100.1,
     100.1,
     100.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "RSK-003": {
   "Group": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Pending certification"
   },
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-002": {
   "A1": {
    "v": "91.5",
    "u": "%",
    "tr": "▲ 0.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     102.5,
     104.0,
     100.3,
     101.7,
     102.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)"
   },
   "Plant01": {
    "v": "91.5",
    "u": "%",
    "tr": "▼ 1.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     102.9,
     103.2,
     97.0,
     101.5,
     100.4
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "93.1",
    "u": "%",
    "tr": "▲ 4.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     106.2,
     106.4,
     101.9,
     99.7,
     104.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "90.4",
    "u": "%",
    "tr": "▼ 1.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.5,
     102.8,
     101.3,
     103.0,
     101.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "91.9",
    "u": "%",
    "tr": "▲ 0.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     102.0,
     101.1,
     101.0,
     100.7,
     101.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "92.4",
    "u": "%",
    "tr": "▲ 1.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     101.6,
     98.2,
     101.8,
     99.6,
     101.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "90.6",
    "u": "%",
    "tr": "▼ 1.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     98.8,
     97.7,
     102.0,
     98.7,
     97.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "93.2",
    "u": "%",
    "tr": "▲ 3.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     103.3,
     100.0,
     105.7,
     100.1,
     104.4
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "92.9",
    "u": "%",
    "tr": "▲ 0.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     101.7,
     96.3,
     96.7,
     99.6,
     99.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-003": {
   "A1": {
    "v": "87.5",
    "u": "%",
    "tr": "▲ 0.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     98.6,
     100.3,
     100.7,
     100.0,
     100.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)"
   },
   "Plant01": {
    "v": "91.7",
    "u": "%",
    "tr": "▲ 3.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     94.3,
     96.7,
     102.0,
     99.0,
     102.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "86.5",
    "u": "%",
    "tr": "▲ 4.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     105.2,
     99.8,
     105.8,
     99.8,
     105.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "85.7",
    "u": "%",
    "tr": "▼ 3.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     96.5,
     102.7,
     96.2,
     100.3,
     96.4
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "87.3",
    "u": "%",
    "tr": "▼ 1.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.0,
     101.3,
     100.2,
     101.7,
     100.4
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "87.2",
    "u": "%",
    "tr": "▼ 2.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.4,
     102.5,
     99.7,
     103.5,
     100.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "88.4",
    "u": "%",
    "tr": "▼ 0.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.2,
     102.7,
     96.8,
     100.7,
     99.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "88.3",
    "u": "%",
    "tr": "▼ 2.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     97.4,
     103.3,
     101.7,
     103.2,
     100.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "84.6",
    "u": "%",
    "tr": "▼ 5.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     101.9,
     101.2,
     98.9,
     106.0,
     99.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-004": {
   "A1": {
    "v": "1.9",
    "u": "days",
    "tr": "▼ 0.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     48.7,
     -7.7,
     -35.9,
     561.5,
     497.4
    ],
    "plan": "≤ 0.0 days",
    "var": "+1.9 days",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "LEADING"
   },
   "Group": {
    "v": "1.1",
    "u": "days",
    "tr": "▼ 0.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     -6.2,
     81.2,
     18.8,
     881.2,
     700.0
    ],
    "plan": "≤ 0.0 days",
    "var": "+1.1 days",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0.2",
    "u": "days",
    "tr": "▼ 0.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     244.4,
     -377.8,
     -277.8,
     -422.2,
     -233.3
    ],
    "plan": "≤ 0.0 days",
    "var": "+0.2 days",
    "bs": "Intervention required",
    "spp": [
     -0.0,
     -0.0,
     -0.0,
     -0.0,
     -0.0,
     -0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-005": {
   "A1": {
    "v": "2",
    "u": "customers",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0 customers",
    "var": "+2 customers",
    "bs": "Intervention required",
    "ts": "LEADING"
   },
   "Group": {
    "v": "3",
    "u": "customers",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0 customers",
    "var": "+3 customers",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "1",
    "u": "customers",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0 customers",
    "var": "+1 customers",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-006": {
   "Group": {
    "v": "Not triggered",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Pending"
   },
   "A1": {
    "v": "Not triggered",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "Not triggered",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-007": {
   "A1": {
    "v": "30.9",
    "u": "kt",
    "tr": "▼ 7.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     169.8,
     192.2,
     117.8,
     148.0,
     119.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "24.3",
    "u": "kt",
    "tr": "▲ 1.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     119.4,
     163.5,
     133.2,
     134.4,
     141.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)"
   },
   "Plant01": {
    "v": "3.7",
    "u": "kt",
    "tr": "▲ 2.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     161.9,
     226.4,
     164.8,
     45.9,
     113.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "2.9",
    "u": "kt",
    "tr": "▼ 10.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     334.3,
     263.1,
     41.1,
     251.9,
     54.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "36.8",
    "u": "kt",
    "tr": "▼ 8.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     196.1,
     253.3,
     135.2,
     157.3,
     129.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "5.9",
    "u": "kt",
    "tr": "▼ 0.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     448.6,
     839.5,
     302.1,
     246.8,
     218.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0.0",
    "u": "kt",
    "tr": "▼ 0.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     34534.5,
     23679.3,
     17258.6,
     2779.3,
     0.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "0.0",
    "u": "kt",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     421.0,
     44.2,
     0.0,
     0.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "5.9",
    "u": "kt",
    "tr": "▲ 0.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-008": {
   "A1": {
    "v": "5",
    "u": "alerts",
    "tr": "▼ 2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     150.0,
     125.0,
     50.0,
     175.0,
     125.0
    ],
    "plan": "≤ 0 alerts",
    "var": "+5 alerts",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)"
   },
   "Plant01": {
    "v": "0",
    "u": "alerts",
    "tr": "▼ 2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     200.0,
     0.0,
     200.0,
     0.0
    ],
    "plan": "≤ 0 alerts",
    "var": "+0 alerts",
    "bs": "On track",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "4",
    "u": "alerts",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     200.0,
     100.0,
     100.0,
     150.0,
     200.0
    ],
    "plan": "≤ 0 alerts",
    "var": "+4 alerts",
    "bs": "Deteriorating",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "1",
    "u": "alerts",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     0.0,
     200.0,
     100.0
    ],
    "plan": "≤ 0 alerts",
    "var": "+1 alerts",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "7",
    "u": "alerts",
    "tr": "▼ 4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     75.0,
     112.5,
     37.5,
     137.5,
     87.5
    ],
    "plan": "≤ 0 alerts",
    "var": "+7 alerts",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "2",
    "u": "alerts",
    "tr": "▼ 2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     100.0,
     25.0,
     100.0,
     50.0
    ],
    "plan": "≤ 0 alerts",
    "var": "+2 alerts",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0",
    "u": "alerts",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0 alerts",
    "var": "+0 alerts",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "1",
    "u": "alerts",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     100.0,
     0.0,
     100.0,
     50.0
    ],
    "plan": "≤ 0 alerts",
    "var": "+1 alerts",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "1",
    "u": "alerts",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     100.0,
     0.0,
     100.0,
     50.0
    ],
    "plan": "≤ 0 alerts",
    "var": "+1 alerts",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-009": {
   "A1": {
    "v": "4",
    "u": "materials",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     100.0,
     200.0,
     300.0,
     400.0
    ],
    "plan": "≤ 0 materials",
    "var": "+4 materials",
    "bs": "Deteriorating",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Functional Leader (supply)"
   },
   "Group": {
    "v": "5",
    "u": "materials",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     33.3,
     200.0,
     200.0,
     166.7
    ],
    "plan": "≤ 0 materials",
    "var": "+5 materials",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Functional Leader (supply)"
   },
   "Plant01": {
    "v": "2",
    "u": "materials",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0 materials",
    "var": "+2 materials",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "1",
    "u": "materials",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     100.0,
     0.0,
     0.0,
     100.0
    ],
    "plan": "≤ 0 materials",
    "var": "+1 materials",
    "bs": "Deteriorating",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "1",
    "u": "materials",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0 materials",
    "var": "+1 materials",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "1",
    "u": "materials",
    "tr": "▼ 2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     150.0,
     0.0,
     200.0,
     150.0,
     50.0
    ],
    "plan": "≤ 0 materials",
    "var": "+1 materials",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0",
    "u": "materials",
    "tr": "▼ 2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     0.0,
     50.0,
     100.0,
     0.0
    ],
    "plan": "≤ 0 materials",
    "var": "+0 materials",
    "bs": "On track",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "0",
    "u": "materials",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0 materials",
    "var": "+0 materials",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "1",
    "u": "materials",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0 materials",
    "var": "+1 materials",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-010": {
   "A1": {
    "v": "1",
    "u": "suppliers",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0 suppliers",
    "var": "+1 suppliers",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "1",
    "u": "suppliers",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0 suppliers",
    "var": "+1 suppliers",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "suppliers",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0 suppliers",
    "var": "+0 suppliers",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-011": {
   "A1": {
    "v": "20.8",
    "u": "₹ m",
    "tr": "▼ 0.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     114.6,
     98.6,
     108.5,
     96.8,
     93.4
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Pending certification",
    "prov": "LEADING",
    "own": "Projects (role)"
   },
   "Group": {
    "v": "148.0",
    "u": "₹ m",
    "tr": "▼ 5.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     116.2,
     109.4,
     110.6,
     109.9,
     106.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Pending certification",
    "prov": "LEADING",
    "own": "Projects (role)"
   },
   "A2": {
    "v": "127.2",
    "u": "₹ m",
    "tr": "▼ 4.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     116.5,
     111.4,
     111.0,
     112.4,
     108.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-012": {
   "A1": {
    "v": "10.9",
    "u": "% late",
    "tr": "▲ 0.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     119.8,
     163.5,
     144.7,
     191.8,
     207.4
    ],
    "plan": "≤ 5.0%",
    "var": "+5.9 pts",
    "bs": "Deteriorating",
    "spp": [
     95.1,
     95.1,
     95.1,
     95.1,
     95.1,
     95.1
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Commercial (role)"
   },
   "Group": {
    "v": "8.7",
    "u": "% late",
    "tr": "▲ 1.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     118.4,
     125.1,
     133.4,
     127.6,
     144.8
    ],
    "plan": "≤ 5.0%",
    "var": "+3.7 pts",
    "bs": "Deteriorating",
    "spp": [
     83.6,
     83.6,
     83.6,
     83.6,
     83.6,
     83.6
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Commercial (role)"
   },
   "Plant01": {
    "v": "7.5",
    "u": "% late",
    "tr": "▼ 0.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     68.6,
     130.4,
     79.8,
     144.9,
     131.6
    ],
    "plan": "≤ 5.0%",
    "var": "+2.5 pts",
    "bs": "Intervention required",
    "spp": [
     87.7,
     87.7,
     87.7,
     87.7,
     87.7,
     87.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "16.0",
    "u": "% late",
    "tr": "▲ 0.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     181.3,
     184.0,
     197.8,
     256.6,
     272.1
    ],
    "plan": "≤ 5.0%",
    "var": "+11.0 pts",
    "bs": "Deteriorating",
    "spp": [
     85.0,
     85.0,
     85.0,
     85.0,
     85.0,
     85.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "7.5",
    "u": "% late",
    "tr": "▲ 4.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     135.6,
     186.5,
     213.5,
     84.4,
     194.3
    ],
    "plan": "≤ 5.0%",
    "var": "+2.5 pts",
    "bs": "Deteriorating",
    "spp": [
     129.9,
     129.9,
     129.9,
     129.9,
     129.9,
     129.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "6.1",
    "u": "% late",
    "tr": "▲ 0.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     124.1,
     98.2,
     126.2,
     88.2,
     92.4
    ],
    "plan": "≤ 5.0%",
    "var": "+1.1 pts",
    "bs": "Deteriorating",
    "spp": [
     75.8,
     75.8,
     75.8,
     75.8,
     75.8,
     75.8
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "7.1",
    "u": "% late",
    "tr": "▼ 1.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     97.8,
     85.8,
     100.7,
     96.9,
     82.2
    ],
    "plan": "≤ 5.0%",
    "var": "+2.1 pts",
    "bs": "Intervention required",
    "spp": [
     57.9,
     57.9,
     57.9,
     57.9,
     57.9,
     57.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "7.6",
    "u": "% late",
    "tr": "▲ 1.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     107.9,
     96.9,
     112.3,
     79.8,
     101.6
    ],
    "plan": "≤ 5.0%",
    "var": "+2.6 pts",
    "bs": "Deteriorating",
    "spp": [
     67.0,
     67.0,
     67.0,
     67.0,
     67.0,
     67.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "2.4",
    "u": "% late",
    "tr": "▼ 1.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     248.8,
     140.2,
     240.5,
     106.1,
     73.6
    ],
    "plan": "≤ 5.0%",
    "var": "−2.6 pts",
    "bs": "On track",
    "spp": [
     153.4,
     153.4,
     153.4,
     153.4,
     153.4,
     153.4
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-013": {
   "Group": {
    "v": "Low (-0.4% vs plan price)",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Pending (LEADING)"
   },
   "A1": {
    "v": "Low (-0.9% vs plan price)",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "Low (0% vs plan price)",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "Low (0.2% vs plan price)",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "Medium (-2.3% vs plan price)",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "Low (-0.5% vs plan price)",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "Low (-0.7% vs plan price)",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "Low (0.2% vs plan price)",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "Low (0.5% vs plan price)",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-021": {
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     100.0,
     0.0,
     0.0,
     0.0
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     100.0,
     0.0,
     0.0,
     0.0
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "STR-002": {
   "Group": {
    "v": "54.0",
    "u": "%",
    "tr": "▲ 4.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     116.2,
     132.4,
     148.6,
     164.8,
     181.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified"
   },
   "A1": {
    "v": "53.3",
    "u": "%",
    "tr": "▲ 3.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     116.7,
     133.3,
     150.0,
     166.7,
     177.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "54.7",
    "u": "%",
    "tr": "▲ 6.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     115.8,
     131.6,
     147.4,
     163.2,
     184.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SUP-001": {
   "A1": {
    "v": "90.4",
    "u": "%",
    "tr": "▲ 1.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     97.8,
     100.0,
     99.9,
     98.2,
     99.9
    ],
    "plan": "≥ 95.0%",
    "var": "−4.6 pts",
    "bs": "Intervention required",
    "spp": [
     105.0,
     105.0,
     105.0,
     105.0,
     105.0,
     105.0
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Supply (role)"
   },
   "Group": {
    "v": "91.4",
    "u": "%",
    "tr": "▲ 0.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.3,
     101.0,
     100.9,
     100.1,
     100.3
    ],
    "plan": "≥ 95.0%",
    "var": "−3.6 pts",
    "bs": "Intervention required",
    "spp": [
     104.3,
     104.3,
     104.3,
     104.3,
     104.3,
     104.3
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Procurement (role)"
   },
   "A2": {
    "v": "92.3",
    "u": "%",
    "tr": "▼ 0.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     102.4,
     102.0,
     101.8,
     101.6,
     100.8
    ],
    "plan": "≥ 95.0%",
    "var": "−2.7 pts",
    "bs": "Deteriorating",
    "spp": [
     103.7,
     103.7,
     103.7,
     103.7,
     103.7,
     103.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "92.7",
    "u": "%",
    "tr": "▲ 0.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     97.5,
     100.0,
     100.4,
     98.9,
     99.4
    ],
    "plan": "≥ 95.0%",
    "var": "−2.3 pts",
    "bs": "Intervention required",
    "spp": [
     101.8,
     101.8,
     101.8,
     101.8,
     101.8,
     101.8
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "85.0",
    "u": "%",
    "tr": "▲ 1.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     96.0,
     97.2,
     94.7,
     98.1,
     99.9
    ],
    "plan": "≥ 95.0%",
    "var": "−10.0 pts",
    "bs": "Intervention required",
    "spp": [
     111.7,
     111.7,
     111.7,
     111.7,
     111.7,
     111.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "92.4",
    "u": "%",
    "tr": "▲ 2.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.5,
     100.4,
     101.9,
     97.4,
     100.1
    ],
    "plan": "≥ 95.0%",
    "var": "−2.6 pts",
    "bs": "Intervention required",
    "spp": [
     102.9,
     102.9,
     102.9,
     102.9,
     102.9,
     102.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "93.5",
    "u": "%",
    "tr": "▼ 0.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     103.1,
     101.5,
     100.0,
     101.4,
     101.1
    ],
    "plan": "≥ 95.0%",
    "var": "−1.5 pts",
    "bs": "Deteriorating",
    "spp": [
     102.8,
     102.8,
     102.8,
     102.8,
     102.8,
     102.8
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "91.9",
    "u": "%",
    "tr": "▲ 1.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.1,
     98.7,
     101.3,
     98.5,
     99.7
    ],
    "plan": "≥ 95.0%",
    "var": "−3.1 pts",
    "bs": "Intervention required",
    "spp": [
     103.1,
     103.1,
     103.1,
     103.1,
     103.1,
     103.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "90.7",
    "u": "%",
    "tr": "▼ 3.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     104.1,
     104.5,
     103.4,
     103.6,
     100.2
    ],
    "plan": "≥ 95.0%",
    "var": "−4.3 pts",
    "bs": "Deteriorating",
    "spp": [
     105.0,
     105.0,
     105.0,
     105.0,
     105.0,
     105.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SUP-002": {
   "A1": {
    "v": "97.0",
    "u": "%",
    "tr": "▲ 0.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.1,
     100.5,
     99.4,
     100.7,
     100.8
    ],
    "plan": "≥ 98.0%",
    "var": "−1.0 pts",
    "bs": "Intervention required",
    "spp": [
     101.8,
     101.8,
     101.8,
     101.8,
     101.8,
     101.8
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Supply (role)"
   },
   "Group": {
    "v": "96.8",
    "u": "%",
    "tr": "▼ 0.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.5,
     101.0,
     99.9,
     101.0,
     100.9
    ],
    "plan": "≥ 98.0%",
    "var": "−1.2 pts",
    "bs": "Deteriorating",
    "spp": [
     102.1,
     102.1,
     102.1,
     102.1,
     102.1,
     102.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "96.6",
    "u": "%",
    "tr": "▼ 0.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     98.9,
     101.5,
     100.5,
     101.4,
     101.0
    ],
    "plan": "≥ 98.0%",
    "var": "−1.4 pts",
    "bs": "Deteriorating",
    "spp": [
     102.5,
     102.5,
     102.5,
     102.5,
     102.5,
     102.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "96.1",
    "u": "%",
    "tr": "▼ 0.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.2,
     100.2,
     99.6,
     100.0,
     99.4
    ],
    "plan": "≥ 98.0%",
    "var": "−1.9 pts",
    "bs": "Deteriorating",
    "spp": [
     101.3,
     101.3,
     101.3,
     101.3,
     101.3,
     101.3
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "97.4",
    "u": "%",
    "tr": "▲ 0.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.6,
     99.4,
     97.2,
     98.1,
     98.5
    ],
    "plan": "≥ 98.0%",
    "var": "−0.6 pts",
    "bs": "Intervention required",
    "spp": [
     99.1,
     99.1,
     99.1,
     99.1,
     99.1,
     99.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "97.3",
    "u": "%",
    "tr": "▲ 0.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     101.2,
     101.5,
     100.9,
     103.0,
     103.4
    ],
    "plan": "≥ 98.0%",
    "var": "−0.7 pts",
    "bs": "Intervention required",
    "spp": [
     104.1,
     104.1,
     104.1,
     104.1,
     104.1,
     104.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "94.7",
    "u": "%",
    "tr": "▲ 0.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.3,
     102.2,
     99.6,
     99.3,
     99.6
    ],
    "plan": "≥ 98.0%",
    "var": "−3.3 pts",
    "bs": "Intervention required",
    "spp": [
     103.0,
     103.0,
     103.0,
     103.0,
     103.0,
     103.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "99.0",
    "u": "%",
    "tr": "▲ 1.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.3,
     103.5,
     101.0,
     103.6,
     105.2
    ],
    "plan": "≥ 98.0%",
    "var": "+1.0 pts",
    "bs": "On track",
    "spp": [
     104.2,
     104.2,
     104.2,
     104.2,
     104.2,
     104.2
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "95.1",
    "u": "%",
    "tr": "▼ 3.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     96.8,
     98.6,
     100.3,
     100.2,
     96.9
    ],
    "plan": "≥ 98.0%",
    "var": "−2.9 pts",
    "bs": "Deteriorating",
    "spp": [
     99.9,
     99.9,
     99.9,
     99.9,
     99.9,
     99.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SUP-003": {
   "A1": {
    "v": "0.97",
    "u": "%",
    "tr": "▼ 0.62 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     69.5,
     83.1,
     97.5,
     134.7,
     82.2
    ],
    "plan": "≤ 1.50%",
    "var": "−0.53 pts",
    "bs": "On track",
    "spp": [
     127.1,
     127.1,
     127.1,
     127.1,
     127.1,
     127.1
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Quality (role)"
   },
   "Group": {
    "v": "1.12",
    "u": "%",
    "tr": "▼ 0.21 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     78.2,
     73.1,
     75.6,
     111.8,
     94.1
    ],
    "plan": "≤ 1.50%",
    "var": "−0.38 pts",
    "bs": "On track",
    "spp": [
     126.1,
     126.1,
     126.1,
     126.1,
     126.1,
     126.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "1.28",
    "u": "%",
    "tr": "▲ 0.22 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     88.2,
     63.0,
     53.8,
     89.1,
     107.6
    ],
    "plan": "≤ 1.50%",
    "var": "−0.22 pts",
    "bs": "On track",
    "spp": [
     126.1,
     126.1,
     126.1,
     126.1,
     126.1,
     126.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "1.40",
    "u": "%",
    "tr": "▲ 0.12 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     49.3,
     56.8,
     105.5,
     87.7,
     95.9
    ],
    "plan": "≤ 1.50%",
    "var": "−0.10 pts",
    "bs": "On track",
    "spp": [
     102.7,
     102.7,
     102.7,
     102.7,
     102.7,
     102.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "1.11",
    "u": "%",
    "tr": "▼ 0.55 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     84.0,
     139.0,
     71.0,
     166.0,
     111.0
    ],
    "plan": "≤ 1.50%",
    "var": "−0.39 pts",
    "bs": "On track",
    "spp": [
     150.0,
     150.0,
     150.0,
     150.0,
     150.0,
     150.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "0.62",
    "u": "%",
    "tr": "▼ 1.13 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     76.3,
     68.4,
     105.3,
     153.5,
     54.4
    ],
    "plan": "≤ 1.50%",
    "var": "−0.88 pts",
    "bs": "On track",
    "spp": [
     131.6,
     131.6,
     131.6,
     131.6,
     131.6,
     131.6
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "1.61",
    "u": "%",
    "tr": "▲ 0.05 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     164.4,
     146.5,
     62.4,
     154.5,
     159.4
    ],
    "plan": "≤ 1.50%",
    "var": "+0.11 pts",
    "bs": "Deteriorating",
    "spp": [
     148.5,
     148.5,
     148.5,
     148.5,
     148.5,
     148.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "1.01",
    "u": "%",
    "tr": "▲ 0.22 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     37.4,
     33.8,
     35.3,
     56.8,
     72.7
    ],
    "plan": "≤ 1.50%",
    "var": "−0.49 pts",
    "bs": "On track",
    "spp": [
     107.9,
     107.9,
     107.9,
     107.9,
     107.9,
     107.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "1.37",
    "u": "%",
    "tr": "▲ 0.35 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     116.7,
     50.9,
     78.7,
     94.4,
     126.9
    ],
    "plan": "≤ 1.50%",
    "var": "−0.13 pts",
    "bs": "On track",
    "spp": [
     138.9,
     138.9,
     138.9,
     138.9,
     138.9,
     138.9
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SUP-004": {
   "A1": {
    "v": "6.9",
    "u": "%",
    "tr": "▲ 1.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     52.7,
     65.1,
     114.2,
     82.1,
     114.2
    ],
    "plan": "≤ 5.0%",
    "var": "+1.9 pts",
    "bs": "Deteriorating",
    "spp": [
     82.6,
     82.6,
     82.6,
     82.6,
     82.6,
     82.6
    ],
    "ts": "Pending certification",
    "prov": "PRELIM",
    "own": "Supply (role)"
   },
   "Group": {
    "v": "5.2",
    "u": "%",
    "tr": "▲ 2.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     55.4,
     60.1,
     46.9,
     47.8,
     99.2
    ],
    "plan": "≤ 5.0%",
    "var": "+0.2 pts",
    "bs": "Deteriorating",
    "spp": [
     94.5,
     94.5,
     94.5,
     94.5,
     94.5,
     94.5
    ],
    "ts": "Certified"
   },
   "A2": {
    "v": "3.6",
    "u": "%",
    "tr": "▲ 3.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     56.0,
     52.6,
     -13.4,
     1.7,
     78.7
    ],
    "plan": "≤ 5.0%",
    "var": "−1.4 pts",
    "bs": "On track",
    "spp": [
     107.8,
     107.8,
     107.8,
     107.8,
     107.8,
     107.8
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "5.0",
    "u": "%",
    "tr": "▲ 6.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     -27.1,
     11.8,
     -475.3,
     176.5,
     -584.7
    ],
    "plan": "≤ 5.0%",
    "var": "−0.0 pts",
    "bs": "On track",
    "spp": [
     -588.2,
     -588.2,
     -588.2,
     -588.2,
     -588.2,
     -588.2
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "17.3",
    "u": "%",
    "tr": "▼ 1.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     84.7,
     76.6,
     113.0,
     122.3,
     113.0
    ],
    "plan": "≤ 5.0%",
    "var": "+12.3 pts",
    "bs": "Intervention required",
    "spp": [
     32.6,
     32.6,
     32.6,
     32.6,
     32.6,
     32.6
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "2.4",
    "u": "%",
    "tr": "▼ 0.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     3.6,
     53.5,
     11.4,
     64.9,
     49.7
    ],
    "plan": "≤ 5.0%",
    "var": "−2.6 pts",
    "bs": "On track",
    "spp": [
     105.7,
     105.7,
     105.7,
     105.7,
     105.7,
     105.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "3.9",
    "u": "%",
    "tr": "▲ 4.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     -12.3,
     -17.4,
     -44.4,
     -18.7,
     104.8
    ],
    "plan": "≤ 5.0%",
    "var": "−1.1 pts",
    "bs": "On track",
    "spp": [
     133.7,
     133.7,
     133.7,
     133.7,
     133.7,
     133.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "6.7",
    "u": "%",
    "tr": "▲ 3.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     58.9,
     81.7,
     -18.0,
     47.5,
     91.0
    ],
    "plan": "≤ 5.0%",
    "var": "+1.7 pts",
    "bs": "Deteriorating",
    "spp": [
     68.1,
     68.1,
     68.1,
     68.1,
     68.1,
     68.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "-1.1",
    "u": "%",
    "tr": "▲ 0.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     376.5,
     -87.5,
     55.9,
     -89.0,
     -83.8
    ],
    "plan": "≤ 5.0%",
    "var": "−6.1 pts",
    "bs": "On track",
    "spp": [
     367.6,
     367.6,
     367.6,
     367.6,
     367.6,
     367.6
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SUP-005": {
   "A1": {
    "v": "2",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Pending certification",
    "prov": "PRELIM",
    "own": "Supply (role)"
   },
   "Group": {
    "v": "3",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Pending"
   },
   "A2": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SUP-006": {
   "A1": {
    "v": "2.5",
    "u": "days",
    "tr": "▼ 0.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     94.3,
     116.7,
     94.3,
     100.0,
     83.3
    ],
    "plan": "≤ 0.0 days",
    "var": "+2.5 days",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)"
   },
   "Group": {
    "v": "1.7",
    "u": "days",
    "tr": "▼ 0.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     93.2,
     92.4,
     89.0,
     91.1,
     73.3
    ],
    "plan": "≤ 0.0 days",
    "var": "+1.7 days",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "1.3",
    "u": "days",
    "tr": "▲ 0.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     114.4,
     80.0,
     93.6,
     103.2
    ],
    "plan": "≤ 0.0 days",
    "var": "+1.3 days",
    "bs": "Deteriorating",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SUP-007": {
   "Group": {
    "v": "35.2",
    "u": "%",
    "tr": "▼ 1.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     105.7,
     108.2,
     104.7,
     106.4,
     101.8
    ],
    "plan": "≤ 30.0%",
    "var": "+5.2 pts",
    "bs": "Intervention required",
    "spp": [
     86.8,
     86.8,
     86.8,
     86.8,
     86.8,
     86.8
    ],
    "ts": "Certified"
   },
   "A1": {
    "v": "34.8",
    "u": "%",
    "tr": "▼ 4.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     104.4,
     99.9,
     99.7,
     101.1,
     90.8
    ],
    "plan": "≤ 30.0%",
    "var": "+4.8 pts",
    "bs": "Intervention required",
    "spp": [
     78.2,
     78.2,
     78.2,
     78.2,
     78.2,
     78.2
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "35.5",
    "u": "%",
    "tr": "▲ 0.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     105.1,
     117.6,
     110.8,
     111.9,
     114.7
    ],
    "plan": "≤ 30.0%",
    "var": "+5.5 pts",
    "bs": "Deteriorating",
    "spp": [
     96.8,
     96.8,
     96.8,
     96.8,
     96.8,
     96.8
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "30.1",
    "u": "%",
    "tr": "▼ 7.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     113.5,
     102.4,
     126.4,
     122.1,
     97.8
    ],
    "plan": "≤ 30.0%",
    "var": "+0.1 pts",
    "bs": "Intervention required",
    "spp": [
     97.4,
     97.4,
     97.4,
     97.4,
     97.4,
     97.4
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "43.0",
    "u": "%",
    "tr": "▼ 4.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     101.9,
     99.7,
     101.7,
     104.5,
     95.0
    ],
    "plan": "≤ 30.0%",
    "var": "+13.0 pts",
    "bs": "Intervention required",
    "spp": [
     66.2,
     66.2,
     66.2,
     66.2,
     66.2,
     66.2
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "30.7",
    "u": "%",
    "tr": "▼ 2.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     101.2,
     97.4,
     80.9,
     88.7,
     81.2
    ],
    "plan": "≤ 30.0%",
    "var": "+0.7 pts",
    "bs": "Intervention required",
    "spp": [
     79.4,
     79.4,
     79.4,
     79.4,
     79.4,
     79.4
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "31.2",
    "u": "%",
    "tr": "▼ 6.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     102.4,
     117.7,
     106.1,
     122.2,
     102.2
    ],
    "plan": "≤ 30.0%",
    "var": "+1.2 pts",
    "bs": "Intervention required",
    "spp": [
     98.2,
     98.2,
     98.2,
     98.2,
     98.2,
     98.2
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "35.5",
    "u": "%",
    "tr": "▲ 1.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     102.4,
     120.6,
     116.1,
     110.0,
     115.5
    ],
    "plan": "≤ 30.0%",
    "var": "+5.5 pts",
    "bs": "Deteriorating",
    "spp": [
     97.5,
     97.5,
     97.5,
     97.5,
     97.5,
     97.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "39.9",
    "u": "%",
    "tr": "▲ 6.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     111.6,
     112.9,
     107.1,
     106.1,
     125.5
    ],
    "plan": "≤ 30.0%",
    "var": "+9.9 pts",
    "bs": "Deteriorating",
    "spp": [
     94.4,
     94.4,
     94.4,
     94.4,
     94.4,
     94.4
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SUP-008": {
   "Group": {
    "v": "3",
    "u": "",
    "tr": "▲ 2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+3",
    "bs": "Deteriorating",
    "ts": "System count"
   },
   "A1": {
    "v": "2",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+2",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "2",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+2",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SUS-001": {
   "A1": {
    "v": "741.3",
    "u": "'000 m³",
    "tr": "▲ 67.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     105.8,
     93.8,
     111.3,
     101.5,
     111.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "1,450.1",
    "u": "'000 m³",
    "tr": "▲ 86.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     94.8,
     92.1,
     103.4,
     100.8,
     107.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "148.8",
    "u": "'000 m³",
    "tr": "▼ 43.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     123.0,
     99.5,
     107.9,
     114.9,
     89.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "245.7",
    "u": "'000 m³",
    "tr": "▲ 81.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     87.0,
     85.8,
     100.7,
     81.1,
     121.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "346.8",
    "u": "'000 m³",
    "tr": "▲ 30.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     109.0,
     96.1,
     120.5,
     107.9,
     118.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "708.8",
    "u": "'000 m³",
    "tr": "▲ 18.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     84.1,
     90.4,
     95.9,
     100.2,
     102.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "178.3",
    "u": "'000 m³",
    "tr": "▼ 5.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     88.4,
     72.7,
     82.7,
     98.6,
     95.4
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "299.9",
    "u": "'000 m³",
    "tr": "▼ 20.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     83.5,
     94.8,
     97.5,
     109.5,
     102.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "230.6",
    "u": "'000 m³",
    "tr": "▲ 45.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     81.2,
     100.0,
     105.5,
     88.6,
     110.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SUS-002": {
   "A1": {
    "v": "219.5",
    "u": "kt CO2e",
    "tr": "▲ 3.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     81.9,
     81.6,
     82.5,
     93.8,
     95.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "427.7",
    "u": "kt CO2e",
    "tr": "▲ 17.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     89.8,
     87.9,
     93.4,
     96.4,
     100.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "59.1",
    "u": "kt CO2e",
    "tr": "▲ 4.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     87.6,
     97.9,
     89.0,
     89.5,
     96.4
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "68.8",
    "u": "kt CO2e",
    "tr": "▲ 6.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     90.0,
     79.4,
     83.4,
     90.0,
     99.4
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "91.6",
    "u": "kt CO2e",
    "tr": "▼ 7.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     72.7,
     73.1,
     77.9,
     99.1,
     91.4
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "208.2",
    "u": "kt CO2e",
    "tr": "▲ 14.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.3,
     95.4,
     106.2,
     99.5,
     106.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "58.4",
    "u": "kt CO2e",
    "tr": "▲ 4.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     116.2,
     87.5,
     94.8,
     112.4,
     122.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "86.5",
    "u": "kt CO2e",
    "tr": "▲ 7.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     86.2,
     104.1,
     108.3,
     92.3,
     100.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "63.2",
    "u": "kt CO2e",
    "tr": "▲ 2.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     104.5,
     89.3,
     112.3,
     99.6,
     103.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SUS-003": {
   "A1": {
    "v": "3.61",
    "u": "GJ/t",
    "tr": "▲ 0.01 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     97.9,
     99.7,
     107.8,
     108.1
    ],
    "plan": "≤ 3.50 GJ/t",
    "var": "+0.11 GJ/t",
    "bs": "Deteriorating",
    "spp": [
     104.8,
     104.8,
     104.8,
     104.8,
     104.8,
     104.8
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "3.42",
    "u": "GJ/t",
    "tr": "▼ 0.10 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     94.4,
     96.7,
     96.4,
     104.5,
     101.5
    ],
    "plan": "≤ 3.50 GJ/t",
    "var": "−0.08 GJ/t",
    "bs": "On track",
    "spp": [
     103.9,
     103.9,
     103.9,
     103.9,
     103.9,
     103.9
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Sustainability (role)"
   },
   "Plant01": {
    "v": "3.54",
    "u": "GJ/t",
    "tr": "▲ 0.04 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     87.4,
     84.0,
     82.1,
     98.0,
     99.2
    ],
    "plan": "≤ 3.50 GJ/t",
    "var": "+0.04 GJ/t",
    "bs": "Deteriorating",
    "spp": [
     98.0,
     98.0,
     98.0,
     98.0,
     98.0,
     98.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "3.76",
    "u": "GJ/t",
    "tr": "▼ 0.26 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     109.3,
     113.0,
     102.8,
     113.2,
     105.9
    ],
    "plan": "≤ 3.50 GJ/t",
    "var": "+0.26 GJ/t",
    "bs": "Intervention required",
    "spp": [
     98.6,
     98.6,
     98.6,
     98.6,
     98.6,
     98.6
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "3.56",
    "u": "GJ/t",
    "tr": "▲ 0.15 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     101.0,
     96.4,
     110.2,
     112.5,
     117.5
    ],
    "plan": "≤ 3.50 GJ/t",
    "var": "+0.06 GJ/t",
    "bs": "Deteriorating",
    "spp": [
     115.5,
     115.5,
     115.5,
     115.5,
     115.5,
     115.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "3.23",
    "u": "GJ/t",
    "tr": "▼ 0.20 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     88.6,
     95.3,
     93.3,
     100.6,
     94.7
    ],
    "plan": "≤ 3.50 GJ/t",
    "var": "−0.27 GJ/t",
    "bs": "On track",
    "spp": [
     102.6,
     102.6,
     102.6,
     102.6,
     102.6,
     102.6
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "3.47",
    "u": "GJ/t",
    "tr": "▲ 0.43 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     90.0,
     93.8,
     91.8,
     89.1,
     101.8
    ],
    "plan": "≤ 3.50 GJ/t",
    "var": "−0.03 GJ/t",
    "bs": "On track",
    "spp": [
     102.6,
     102.6,
     102.6,
     102.6,
     102.6,
     102.6
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "3.20",
    "u": "GJ/t",
    "tr": "▼ 0.36 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     84.1,
     101.4,
     96.5,
     102.9,
     92.5
    ],
    "plan": "≤ 3.50 GJ/t",
    "var": "−0.30 GJ/t",
    "bs": "On track",
    "spp": [
     101.2,
     101.2,
     101.2,
     101.2,
     101.2,
     101.2
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "3.04",
    "u": "GJ/t",
    "tr": "▼ 0.55 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     93.7,
     88.9,
     90.1,
     107.8,
     91.3
    ],
    "plan": "≤ 3.50 GJ/t",
    "var": "−0.46 GJ/t",
    "bs": "On track",
    "spp": [
     105.1,
     105.1,
     105.1,
     105.1,
     105.1,
     105.1
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "TRS-001": {
   "Group": {
    "v": "221.7",
    "u": "₹ m",
    "tr": "▼ 3.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     108.8,
     98.7,
     119.4,
     118.2,
     116.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Pending certification"
   },
   "A1": {
    "v": "123.3",
    "u": "₹ m",
    "tr": "▼ 7.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     111.9,
     101.2,
     110.6,
     118.0,
     110.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Pending certification"
   },
   "A2": {
    "v": "98.5",
    "u": "₹ m",
    "tr": "▲ 4.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     104.3,
     95.2,
     131.7,
     118.5,
     123.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "TRS-002": {
   "Group": {
    "v": "91.7",
    "u": "%",
    "tr": "▼ 1.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     103.9,
     104.2,
     101.6,
     104.4,
     102.9
    ],
    "plan": "≥ 80.0%",
    "var": "+11.7 pts",
    "bs": "On track",
    "spp": [
     89.8,
     89.8,
     89.8,
     89.8,
     89.8,
     89.8
    ],
    "ts": "Certified"
   },
   "A1": {
    "v": "91.5",
    "u": "%",
    "tr": "▼ 1.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     102.1,
     104.7,
     98.5,
     103.8,
     102.4
    ],
    "plan": "≥ 80.0%",
    "var": "+11.5 pts",
    "bs": "On track",
    "spp": [
     89.5,
     89.5,
     89.5,
     89.5,
     89.5,
     89.5
    ],
    "ts": "Certified"
   },
   "A2": {
    "v": "92.0",
    "u": "%",
    "tr": "▼ 1.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     105.7,
     103.7,
     105.0,
     105.1,
     103.6
    ],
    "plan": "≥ 80.0%",
    "var": "+12.0 pts",
    "bs": "On track",
    "spp": [
     90.2,
     90.2,
     90.2,
     90.2,
     90.2,
     90.2
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "TRS-003": {
   "Group": {
    "v": "75.8",
    "u": "%",
    "tr": "▲ 4.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     102.4,
     97.9,
     100.1,
     88.9,
     94.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Pending certification"
   },
   "A1": {
    "v": "80.5",
    "u": "%",
    "tr": "▲ 11.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     93.8,
     95.3,
     98.2,
     84.3,
     98.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "70.0",
    "u": "%",
    "tr": "▼ 5.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     115.5,
     101.8,
     102.8,
     95.6,
     89.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "TRS-004": {
   "A1": {
    "v": "77.9",
    "u": "%",
    "tr": "▲ 0.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.9,
     98.0,
     97.9,
     100.4,
     100.5
    ],
    "plan": "≥ 70.0%",
    "var": "+7.9 pts",
    "bs": "On track",
    "spp": [
     90.3,
     90.3,
     90.3,
     90.3,
     90.3,
     90.3
    ],
    "ts": "Certified"
   },
   "Group": {
    "v": "70.7",
    "u": "%",
    "tr": "▲ 1.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     101.3,
     99.5,
     97.5,
     99.2,
     100.6
    ],
    "plan": "≥ 70.0%",
    "var": "+0.7 pts",
    "bs": "On track",
    "spp": [
     99.7,
     99.7,
     99.7,
     99.7,
     99.7,
     99.7
    ],
    "ts": "Certified"
   },
   "A2": {
    "v": "61.1",
    "u": "%",
    "tr": "▲ 2.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     102.6,
     102.8,
     98.3,
     97.7,
     102.5
    ],
    "plan": "≥ 70.0%",
    "var": "−8.9 pts",
    "bs": "Intervention required",
    "spp": [
     117.5,
     117.5,
     117.5,
     117.5,
     117.5,
     117.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "TRS-005": {
   "Group": {
    "v": "8.4",
    "u": "₹ m",
    "tr": "▲ 0.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     111.4,
     96.6,
     119.6,
     105.2,
     109.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Pending certification"
   },
   "A1": {
    "v": "5.0",
    "u": "₹ m",
    "tr": "▲ 0.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     104.9,
     96.2,
     108.4,
     99.3,
     109.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "3.4",
    "u": "₹ m",
    "tr": "▼ 0.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     120.4,
     96.8,
     135.5,
     113.1,
     109.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "TRU-001": {
   "Group": {
    "v": "83.9",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "≥ 95.0%",
    "var": "−11.1 pts",
    "bs": "Intervention required",
    "spp": [
     113.2,
     113.2,
     113.2,
     113.2,
     113.2,
     113.2
    ],
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Core Group (role)"
   },
   "A1": {
    "v": "82.1",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "≥ 95.0%",
    "var": "−12.9 pts",
    "bs": "Intervention required",
    "spp": [
     115.7,
     115.7,
     115.7,
     115.7,
     115.7,
     115.7
    ],
    "ts": "Certified"
   },
   "Group#t7": {
    "v": "83.9",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "≥ 95.0%",
    "var": "−11.1 pts",
    "bs": "Intervention required",
    "spp": [
     113.2,
     113.2,
     113.2,
     113.2,
     113.2,
     113.2
    ],
    "own": "Core Group (role)",
    "ts": "System count"
   },
   "A2": {
    "v": "85.7",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "≥ 95.0%",
    "var": "−9.3 pts",
    "bs": "Intervention required",
    "spp": [
     110.8,
     110.8,
     110.8,
     110.8,
     110.8,
     110.8
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "TRU-002": {
   "Group": {
    "v": "9",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Core Group (role)"
   },
   "A1": {
    "v": "5",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "4",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "TRU-003": {
   "Group": {
    "v": "-0.2",
    "u": "%",
    "tr": "▼ 0.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     -144.4,
     -222.2,
     -33.3,
     0.0,
     -244.4
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "-0.2",
    "u": "%",
    "tr": "▼ 0.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     -100.0,
     280.0,
     190.0,
     -180.0,
     170.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "-0.3",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     -72.4,
     -31.0,
     69.0,
     -79.3,
     -93.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "TRU-004": {
   "A1": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Certifier"
   },
   "Group": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "TRU-005": {
   "Group": {
    "v": "92.9",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "≥ 95.0%",
    "var": "−2.1 pts",
    "bs": "Intervention required",
    "spp": [
     102.3,
     102.3,
     102.3,
     102.3,
     102.3,
     102.3
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "92.9",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "≥ 95.0%",
    "var": "−2.1 pts",
    "bs": "Intervention required",
    "spp": [
     102.3,
     102.3,
     102.3,
     102.3,
     102.3,
     102.3
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "92.9",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "≥ 95.0%",
    "var": "−2.1 pts",
    "bs": "Intervention required",
    "spp": [
     102.3,
     102.3,
     102.3,
     102.3,
     102.3,
     102.3
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "TRU-006": {
   "A1": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Core Group"
   },
   "Group": {
    "v": "2",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     200.0,
     200.0
    ],
    "plan": "≤ 0",
    "var": "+2",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Core Group (role)"
   },
   "A2": {
    "v": "2",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     200.0,
     200.0
    ],
    "plan": "≤ 0",
    "var": "+2",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "TRU-007": {
   "Group": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Intervention required",
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Core Group (role)"
   },
   "A1": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "TRU-008": {
   "A1": {
    "v": "98.9",
    "u": "%",
    "tr": "▼ 0.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     99.8,
     99.6,
     100.0,
     99.5
    ],
    "plan": "≥ 99.0%",
    "var": "−0.1 pts",
    "bs": "Deteriorating",
    "spp": [
     99.6,
     99.6,
     99.6,
     99.6,
     99.6,
     99.6
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Data platform (role)"
   },
   "Group": {
    "v": "99.0",
    "u": "%",
    "tr": "▼ 0.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     99.8,
     99.5,
     99.9,
     99.6
    ],
    "plan": "≥ 99.0%",
    "var": "+0.0 pts",
    "bs": "On track",
    "spp": [
     99.5,
     99.5,
     99.5,
     99.5,
     99.5,
     99.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "99.1",
    "u": "%",
    "tr": "▼ 0.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     99.8,
     99.4,
     99.8,
     99.6
    ],
    "plan": "≥ 99.0%",
    "var": "+0.1 pts",
    "bs": "On track",
    "spp": [
     99.5,
     99.5,
     99.5,
     99.5,
     99.5,
     99.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "TRU-009": {
   "Group": {
    "v": "96.0",
    "u": "%",
    "tr": "▼ 0.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.5,
     99.6,
     100.1,
     100.0,
     99.1
    ],
    "plan": "≥ 98.0%",
    "var": "−2.0 pts",
    "bs": "Deteriorating",
    "spp": [
     101.2,
     101.2,
     101.2,
     101.2,
     101.2,
     101.2
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "94.2",
    "u": "%",
    "tr": "▼ 1.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.5,
     99.2,
     99.7,
     100.3,
     99.0
    ],
    "plan": "≥ 98.0%",
    "var": "−3.8 pts",
    "bs": "Deteriorating",
    "spp": [
     102.9,
     102.9,
     102.9,
     102.9,
     102.9,
     102.9
    ],
    "ts": "System count"
   },
   "A2": {
    "v": "97.6",
    "u": "%",
    "tr": "▼ 0.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     99.5,
     100.0,
     100.5,
     99.8,
     99.3
    ],
    "plan": "≥ 98.0%",
    "var": "−0.4 pts",
    "bs": "Deteriorating",
    "spp": [
     99.7,
     99.7,
     99.7,
     99.7,
     99.7,
     99.7
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "TRU-010": {
   "Group": {
    "v": "0.38",
    "u": "%",
    "tr": "▲ 0.14 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     34.8,
     47.8,
     10.9,
     26.1,
     41.3
    ],
    "plan": "≤ 0.50%",
    "var": "−0.12 pts",
    "bs": "On track",
    "spp": [
     54.3,
     54.3,
     54.3,
     54.3,
     54.3,
     54.3
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "A1": {
    "v": "0.23",
    "u": "%",
    "tr": "▼ 0.11 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     24.8,
     26.7,
     37.1,
     32.4,
     21.9
    ],
    "plan": "≤ 0.50%",
    "var": "−0.27 pts",
    "bs": "On track",
    "spp": [
     47.6,
     47.6,
     47.6,
     47.6,
     47.6,
     47.6
    ],
    "ts": "Certified"
   },
   "A2": {
    "v": "0.52",
    "u": "%",
    "tr": "▼ 0.33 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     115.2,
     75.9,
     74.7,
     107.6,
     65.8
    ],
    "plan": "≤ 0.50%",
    "var": "+0.02 pts",
    "bs": "Intervention required",
    "spp": [
     63.3,
     63.3,
     63.3,
     63.3,
     63.3,
     63.3
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "TRU-011": {
   "A1": {
    "v": "0.3",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     72.4,
     96.6,
     69.0,
     79.3,
     93.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified"
   },
   "Group": {
    "v": "0.3",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     72.4,
     96.6,
     69.0,
     79.3,
     93.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Group Controller (role)"
   },
   "A2": {
    "v": "0.3",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     72.4,
     96.6,
     69.0,
     79.3,
     93.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "VAL-001": {
   "Group": {
    "v": "14.2",
    "u": "₹ m",
    "tr": "▲ 2.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     199.2,
     300.4,
     401.3,
     502.5,
     602.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified"
   },
   "A1": {
    "v": "6.2",
    "u": "₹ m",
    "tr": "▲ 1.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     196.0,
     304.0,
     413.1,
     518.2,
     626.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified"
   },
   "A2": {
    "v": "8.0",
    "u": "₹ m",
    "tr": "▲ 1.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     200.7,
     295.7,
     389.1,
     487.7,
     579.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "VAL-002": {
   "Group": {
    "v": "8.7",
    "u": "₹ m",
    "tr": "▲ 1.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     204.2,
     303.5,
     406.9,
     505.6,
     604.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified"
   },
   "A1": {
    "v": "2.4",
    "u": "₹ m",
    "tr": "▲ 0.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     228.6,
     348.6,
     465.7,
     565.7,
     677.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Pending certification"
   },
   "A2": {
    "v": "6.3",
    "u": "₹ m",
    "tr": "▲ 1.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     196.3,
     289.9,
     388.1,
     486.2,
     581.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "VAL-003": {
   "Group": {
    "v": "11.2",
    "u": "₹ m",
    "tr": "▲ 1.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     207.3,
     314.1,
     422.0,
     528.8,
     635.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Pending certification"
   },
   "A1": {
    "v": "3.9",
    "u": "₹ m",
    "tr": "▲ 0.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     208.3,
     320.0,
     435.0,
     541.7,
     648.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified"
   },
   "A2": {
    "v": "7.3",
    "u": "₹ m",
    "tr": "▲ 1.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     206.8,
     312.0,
     416.2,
     522.2,
     628.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "WCP-001": {
   "A1": {
    "v": "52.0",
    "u": "days",
    "tr": "▲ 1.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     104.1,
     102.3,
     100.7,
     100.4,
     102.5
    ],
    "plan": "≤ 45.0 days",
    "var": "+7.0 days",
    "bs": "Deteriorating",
    "spp": [
     88.7,
     88.7,
     88.7,
     88.7,
     88.7,
     88.7
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "Group": {
    "v": "47.0",
    "u": "days",
    "tr": "▼ 0.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     103.2,
     102.7,
     101.8,
     100.7,
     99.6
    ],
    "plan": "≤ 45.0 days",
    "var": "+2.0 days",
    "bs": "Intervention required",
    "spp": [
     95.4,
     95.4,
     95.4,
     95.4,
     95.4,
     95.4
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "A2": {
    "v": "42.0",
    "u": "days",
    "tr": "▼ 1.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     102.1,
     103.3,
     103.6,
     100.9,
     96.8
    ],
    "plan": "≤ 45.0 days",
    "var": "−3.0 days",
    "bs": "On track",
    "spp": [
     103.6,
     103.6,
     103.6,
     103.6,
     103.6,
     103.6
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "WCP-002": {
   "Group": {
    "v": "52.1",
    "u": "days",
    "tr": "▲ 1.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     101.5,
     104.0,
     101.8,
     100.0,
     103.5
    ],
    "plan": "≥ 50.0 days",
    "var": "+2.1 days",
    "bs": "On track",
    "spp": [
     99.3,
     99.3,
     99.3,
     99.3,
     99.3,
     99.3
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "A1": {
    "v": "40.2",
    "u": "days",
    "tr": "▲ 1.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     104.6,
     106.6,
     102.3,
     100.4,
     105.2
    ],
    "plan": "≥ 50.0 days",
    "var": "−9.8 days",
    "bs": "Intervention required",
    "spp": [
     130.9,
     130.9,
     130.9,
     130.9,
     130.9,
     130.9
    ],
    "ts": "Certified"
   },
   "A2": {
    "v": "63.7",
    "u": "days",
    "tr": "▲ 0.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     102.1,
     101.6,
     99.6,
     100.1,
     101.3
    ],
    "plan": "≥ 50.0 days",
    "var": "+13.7 days",
    "bs": "On track",
    "spp": [
     79.5,
     79.5,
     79.5,
     79.5,
     79.5,
     79.5
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "WCP-003": {
   "Group": {
    "v": "37.8",
    "u": "days",
    "tr": "▼ 0.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.7,
     101.6,
     97.2,
     100.8,
     99.0
    ],
    "plan": "≤ 40.0 days",
    "var": "−2.2 days",
    "bs": "On track",
    "spp": [
     104.9,
     104.9,
     104.9,
     104.9,
     104.9,
     104.9
    ],
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Supply (role)"
   },
   "A1": {
    "v": "40.5",
    "u": "days",
    "tr": "▼ 0.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     95.5,
     98.0,
     95.8,
     97.5,
     96.7
    ],
    "plan": "≤ 40.0 days",
    "var": "+0.5 days",
    "bs": "Intervention required",
    "spp": [
     95.5,
     95.5,
     95.5,
     95.5,
     95.5,
     95.5
    ],
    "ts": "Pending certification"
   },
   "A2": {
    "v": "35.1",
    "u": "days",
    "tr": "▼ 0.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     106.5,
     106.5,
     99.9,
     104.8,
     102.5
    ],
    "plan": "≤ 40.0 days",
    "var": "−4.9 days",
    "bs": "On track",
    "spp": [
     116.8,
     116.8,
     116.8,
     116.8,
     116.8,
     116.8
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "WCP-004": {
   "Group": {
    "v": "2,781.0",
    "u": "₹ m",
    "tr": "▲ 17.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     93.4,
     94.4,
     95.9,
     94.9,
     95.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "A1": {
    "v": "2,012.2",
    "u": "₹ m",
    "tr": "▼ 9.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     89.7,
     91.2,
     93.0,
     94.4,
     94.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Pending certification"
   },
   "A2": {
    "v": "768.8",
    "u": "₹ m",
    "tr": "▲ 26.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     103.8,
     103.4,
     103.9,
     96.3,
     99.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "WCP-005": {
   "Group": {
    "v": "17.3",
    "u": "₹ m",
    "tr": "▲ 46.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     -440.8,
     69.5,
     97.0,
     -66.4,
     39.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Pending"
   },
   "A1": {
    "v": "-9.2",
    "u": "₹ m",
    "tr": "▼ 38.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     -689.6,
     103.3,
     120.7,
     91.1,
     -28.7
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Pending certification"
   },
   "A2": {
    "v": "26.5",
    "u": "₹ m",
    "tr": "▲ 84.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     250.7,
     -24.6,
     30.9,
     -504.2,
     229.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "WCP-006": {
   "Group": {
    "v": "35.7",
    "u": "days",
    "tr": "▼ 1.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     102.2,
     99.2,
     97.6,
     100.7,
     96.0
    ],
    "plan": "≤ 35.0 days",
    "var": "+0.7 days",
    "bs": "Intervention required",
    "spp": [
     94.1,
     94.1,
     94.1,
     94.1,
     94.1,
     94.1
    ],
    "ts": "Certified"
   },
   "A1": {
    "v": "52.2",
    "u": "days",
    "tr": "▼ 0.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     98.4,
     97.1,
     96.6,
     98.7,
     97.2
    ],
    "plan": "≤ 35.0 days",
    "var": "+17.2 days",
    "bs": "Intervention required",
    "spp": [
     65.2,
     65.2,
     65.2,
     65.2,
     65.2,
     65.2
    ],
    "ts": "Pending certification"
   },
   "A2": {
    "v": "19.5",
    "u": "days",
    "tr": "▼ 1.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     113.2,
     107.2,
     103.6,
     103.8,
     97.5
    ],
    "plan": "≤ 35.0 days",
    "var": "−15.5 days",
    "bs": "On track",
    "spp": [
     174.6,
     174.6,
     174.6,
     174.6,
     174.6,
     174.6
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-001": {
   "A1": {
    "v": "120.7",
    "u": "h",
    "tr": "▲ 24.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     140.1,
     136.5,
     202.4,
     153.2,
     192.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)"
   },
   "Plant01": {
    "v": "30.2",
    "u": "h",
    "tr": "▲ 11.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     147.4,
     139.8,
     204.5,
     143.6,
     227.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "78.2",
    "u": "h",
    "tr": "▲ 24.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     147.7,
     119.7,
     223.5,
     172.6,
     252.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "12.3",
    "u": "h",
    "tr": "▼ 11.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     122.2,
     162.2,
     165.4,
     127.6,
     66.5
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Group": {
    "v": "154.4",
    "u": "h",
    "tr": "▼ 9.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     161.6,
     136.7,
     178.3,
     157.8,
     148.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)"
   },
   "A2": {
    "v": "33.7",
    "u": "h",
    "tr": "▼ 34.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     194.4,
     137.0,
     141.6,
     165.0,
     82.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "10.1",
    "u": "h",
    "tr": "▲ 0.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     307.5,
     252.6,
     165.4,
     70.7,
     75.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "10.2",
    "u": "h",
    "tr": "▼ 24.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     107.1,
     88.8,
     77.1,
     205.3,
     60.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "13.4",
    "u": "h",
    "tr": "▼ 10.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     192.6,
     70.4,
     213.9,
     217.6,
     124.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "PRD-012": {
   "Group": {
    "v": "69.4",
    "u": "%",
    "tr": "▼ 1.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     83.4,
     100.0,
     102.5,
     100.9,
     98.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "80.4",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "44.3",
    "u": "%",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-014": {
   "Group": {
    "v": "2.1",
    "u": "% MoM",
    "tr": "▲ 1.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "2.1",
    "u": "% MoM",
    "tr": "▲ 1.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "2.1",
    "u": "% MoM",
    "tr": "▲ 1.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-016": {
   "Group": {
    "v": "1",
    "u": "lanes",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0 lanes",
    "var": "+1 lanes",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "1",
    "u": "lanes",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0 lanes",
    "var": "+1 lanes",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "lanes",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0 lanes",
    "var": "+0 lanes",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-017": {
   "Group": {
    "v": "-17.7",
    "u": "% MoM",
    "tr": "▼ 18.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "-27.7",
    "u": "% MoM",
    "tr": "▼ 50.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "-5.7",
    "u": "% MoM",
    "tr": "▲ 11.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "-31.4",
    "u": "% MoM",
    "tr": "▼ 47.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "-28.3",
    "u": "% MoM",
    "tr": "▼ 36.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "-25.7",
    "u": "% MoM",
    "tr": "▼ 68.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "21.7",
    "u": "% MoM",
    "tr": "▲ 42.3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "-7.5",
    "u": "% MoM",
    "tr": "▲ 14.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "-24.0",
    "u": "% MoM",
    "tr": "▼ 16.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-018": {
   "Group": {
    "v": "-7.1",
    "u": "% MoM",
    "tr": "▼ 16.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "-10.6",
    "u": "% MoM",
    "tr": "▼ 32.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "-3.1",
    "u": "% MoM",
    "tr": "▼ 0.7 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "-10.1",
    "u": "% MoM",
    "tr": "▼ 44.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "8.6",
    "u": "% MoM",
    "tr": "▲ 18.4 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "-23.8",
    "u": "% MoM",
    "tr": "▼ 74.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "8.5",
    "u": "% MoM",
    "tr": "▲ 5.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "5.4",
    "u": "% MoM",
    "tr": "▲ 24.5 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "-21.0",
    "u": "% MoM",
    "tr": "▼ 40.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-015": {
   "Group": {
    "v": "221.7",
    "u": "₹ m",
    "tr": "▼ 3.8 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     108.8,
     98.7,
     119.4,
     118.2,
     116.2
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "123.3",
    "u": "₹ m",
    "tr": "▼ 7.9 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     111.9,
     101.2,
     110.6,
     118.0,
     110.9
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "98.5",
    "u": "₹ m",
    "tr": "▲ 4.1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     104.3,
     95.2,
     131.7,
     118.5,
     123.6
    ],
    "plan": "—",
    "var": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-019": {
   "Group": {
    "v": "3",
    "u": "",
    "tr": "▲ 3 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     50.0,
     100.0,
     100.0,
     0.0,
     150.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "2",
    "u": "",
    "tr": "▲ 2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     50.0,
     0.0,
     0.0,
     0.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     0.0,
     0.0,
     0.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "SIG-020": {
   "Group": {
    "v": "1",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     33.3,
     100.0,
     66.7,
     66.7,
     33.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     50.0,
     100.0,
     50.0,
     50.0,
     50.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     100.0,
     100.0,
     100.0,
     0.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     100.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     100.0,
     0.0,
     0.0,
     0.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     100.0,
     0.0,
     0.0,
     0.0
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "0",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "—",
    "var": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "RSK-001": {
   "Group": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "RSK-002": {
   "Group": {
    "v": "3",
    "u": "",
    "tr": "▲ 2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     100.0,
     0.0,
     200.0,
     100.0,
     300.0
    ],
    "plan": "≤ 0",
    "var": "+3",
    "bs": "Deteriorating",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "1",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     0.0,
     100.0,
     100.0,
     100.0
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Intervention required",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "2",
    "u": "",
    "tr": "▲ 2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+2",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant01": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     0.0,
     0.0,
     0.0,
     0.0,
     100.0
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Deteriorating",
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant02": {
    "v": "0",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant03": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant04": {
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant05": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "Plant06": {
    "v": "1",
    "u": "",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "plan": "≤ 0",
    "var": "+1",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  },
  "STR-001": {
   "Group": {
    "v": "60.9",
    "u": "% weighted",
    "tr": "▲ 4.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     112.0,
     124.1,
     136.1,
     148.1,
     160.1
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A1": {
    "v": "59.0",
    "u": "% weighted",
    "tr": "▲ 4.2 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     111.1,
     122.1,
     133.2,
     144.2,
     155.3
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   },
   "A2": {
    "v": "63.0",
    "u": "% weighted",
    "tr": "▲ 5.0 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     113.2,
     126.3,
     139.5,
     152.6,
     165.8
    ],
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06"
   }
  }
 },
 "plant": {
  "period": "P06",
  "periodL": "P06 · Sep 2026 (SYN, certified month)",
  "x": [
   "P01",
   "P02",
   "P03",
   "P04",
   "P05",
   "P06"
  ],
  "entity": "A1",
  "root": "Group",
  "scopes": {
   "Group": "Group",
   "A1": "Entity A1",
   "A2": "Entity A2",
   "Plant01": "Plant 01",
   "Plant02": "Plant 02",
   "Plant03": "Plant 03",
   "Plant04": "Plant 04",
   "Plant05": "Plant 05",
   "Plant06": "Plant 06"
  },
  "children": {
   "Group": [
    "A1",
    "A2"
   ],
   "A1": [
    "Plant01",
    "Plant02",
    "Plant03"
   ],
   "A2": [
    "Plant04",
    "Plant05",
    "Plant06"
   ]
  },
  "alias": {
   "OPS-005": "OPS-003",
   "OPS-006": "PLT-002",
   "OPS-004": "OPS-002",
   "PRG-004": "STR-002",
   "RSK-003": "REG-010",
   "CMP-005": "REG-010",
   "SIG-001": "REL-003",
   "SIG-002": "PLT-005",
   "SIG-003": "PLT-004",
   "SIG-015": "TRS-001",
   "SIG-019": "REG-002",
   "SIG-020": "REG-003",
   "RSK-001": "EFF-002",
   "RSK-002": "EHS-002",
   "STR-001": "CPX-004"
  },
  "src": "data/kpi-model (build_kpi_model.py → export_to_prototype.py)",
  "kpi": {
   "OPS-001": {
    "name": "Production vs plan",
    "unit": "% of plan",
    "dp": 1,
    "div": 1,
    "formula": "Good output ÷ Planned production × 100",
    "basis": "Month",
    "better": "up",
    "target": 100,
    "fields": [
     "planned_production_t",
     "good_output_t"
    ],
    "rules": {
     "planned_production_t": "SUM",
     "good_output_t": "SUM"
    },
    "val": {
     "Group": [
      96.24,
      91.56,
      89.93,
      94.02,
      92.36,
      95.51
     ],
     "A1": [
      92.81,
      87.09,
      86.25,
      91.02,
      88.58,
      91.27
     ],
     "A2": [
      100.1,
      96.75,
      94.03,
      97.3,
      96.69,
      100.29
     ],
     "Plant01": [
      98.39,
      91.76,
      91.36,
      94.44,
      95.74,
      96.03
     ],
     "Plant02": [
      84.05,
      81.61,
      76.21,
      80.02,
      78.79,
      78.4
     ],
     "Plant03": [
      96.59,
      88.8,
      91.6,
      98.27,
      91.36,
      99.52
     ],
     "Plant04": [
      97.36,
      90.29,
      91.8,
      93.95,
      101.13,
      103.35
     ],
     "Plant05": [
      99.76,
      100.51,
      93.81,
      99.3,
      97.61,
      101.46
     ],
     "Plant06": [
      102.71,
      97.71,
      96.12,
      97.31,
      92.36,
      96.28
     ]
    },
    "inp": {
     "Group": {
      "planned_production_t": 655054.0,
      "good_output_t": 625667.0
     },
     "A1": {
      "planned_production_t": 347088.0,
      "good_output_t": 316798.0
     },
     "A2": {
      "planned_production_t": 307966.0,
      "good_output_t": 308869.0
     },
     "Plant01": {
      "planned_production_t": 85234.0,
      "good_output_t": 81854.0
     },
     "Plant02": {
      "planned_production_t": 121475.0,
      "good_output_t": 95233.0
     },
     "Plant03": {
      "planned_production_t": 140379.0,
      "good_output_t": 139711.0
     },
     "Plant04": {
      "planned_production_t": 79048.0,
      "good_output_t": 81694.0
     },
     "Plant05": {
      "planned_production_t": 130881.0,
      "good_output_t": 132787.0
     },
     "Plant06": {
      "planned_production_t": 98037.0,
      "good_output_t": 94388.0
     }
    },
    "excl": {
     "A1": 100.29,
     "A2": 91.27,
     "Plant01": 89.72,
     "Plant02": 98.21,
     "Plant03": 85.67,
     "Plant04": 99.24,
     "Plant05": 99.43,
     "Plant06": 102.17
    },
    "level": "plant",
    "theme": "T1",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E01-EntityHome",
     "P2-E02-Plants",
     "P2-E05-ProductionCash",
     "P2-E08-CertWorkbench",
     "P2-G01-Portfolio",
     "P2-G01b-PortfolioCertified",
     "P2-G02-EntityComparison",
     "P2-G03-Financial",
     "P2-G05-OpsBenchmark",
     "P2-G08-CertGovernance",
     "P2-G08o-OwnerTrust",
     "P2-O01-EnterpriseHealth",
     "P2-O02-ChangeReport",
     "P2-O09-Operations",
     "P2-S03-KPIDetail",
     "P2-S03e-KPIDetail",
     "P2-S03o-KPIDetail",
     "P2-S10-OpsImpact",
     "P2-S12e-Signals",
     "P2-X-States",
     "P3-L-LargeDisplay"
    ]
   },
   "OPS-003": {
    "name": "Capacity utilization",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Good output ÷ Installed capacity × 100",
    "basis": "Month",
    "better": "up",
    "target": 85,
    "fields": [
     "installed_capacity_t",
     "good_output_t"
    ],
    "rules": {
     "installed_capacity_t": "SUM",
     "good_output_t": "SUM"
    },
    "val": {
     "Group": [
      83.98,
      76.21,
      79.77,
      82.31,
      78.87,
      83.44
     ],
     "A1": [
      80.9,
      73.48,
      76.11,
      78.51,
      76.19,
      79.8
     ],
     "A2": [
      87.44,
      79.28,
      83.9,
      86.58,
      81.88,
      87.55
     ],
     "Plant01": [
      88.22,
      79.28,
      82.19,
      81.62,
      85.81,
      82.92
     ],
     "Plant02": [
      72.41,
      68.9,
      67.53,
      69.54,
      61.62,
      70.02
     ],
     "Plant03": [
      83.55,
      73.78,
      79.59,
      84.15,
      82.56,
      86.09
     ],
     "Plant04": [
      84.43,
      80.9,
      82.34,
      82.36,
      82.25,
      89.48
     ],
     "Plant05": [
      87.71,
      79.83,
      83.35,
      89.81,
      81.04,
      89.96
     ],
     "Plant06": [
      89.51,
      77.27,
      85.85,
      85.77,
      82.68,
      82.87
     ]
    },
    "inp": {
     "Group": {
      "installed_capacity_t": 749808.0,
      "good_output_t": 625667.0
     },
     "A1": {
      "installed_capacity_t": 397008.0,
      "good_output_t": 316798.0
     },
     "A2": {
      "installed_capacity_t": 352800.0,
      "good_output_t": 308869.0
     },
     "Plant01": {
      "installed_capacity_t": 98712.0,
      "good_output_t": 81854.0
     },
     "Plant02": {
      "installed_capacity_t": 136008.0,
      "good_output_t": 95233.0
     },
     "Plant03": {
      "installed_capacity_t": 162288.0,
      "good_output_t": 139711.0
     },
     "Plant04": {
      "installed_capacity_t": 91296.0,
      "good_output_t": 81694.0
     },
     "Plant05": {
      "installed_capacity_t": 147600.0,
      "good_output_t": 132787.0
     },
     "Plant06": {
      "installed_capacity_t": 113904.0,
      "good_output_t": 94388.0
     }
    },
    "excl": {
     "A1": 87.55,
     "A2": 79.8,
     "Plant01": 78.76,
     "Plant02": 84.89,
     "Plant03": 75.45,
     "Plant04": 86.87,
     "Plant05": 85.81,
     "Plant06": 89.78
    },
    "level": "plant",
    "theme": "T1",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E02-Plants",
     "P2-G05-OpsBenchmark",
     "P2-O01-EnterpriseHealth",
     "P2-X-States",
     "P3-L-LargeDisplay"
    ]
   },
   "PLT-001": {
    "name": "Asset utilization",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Run hours ÷ Calendar hours × 100",
    "basis": "Month",
    "better": "up",
    "target": 90,
    "fields": [
     "calendar_hours",
     "run_hours"
    ],
    "rules": {
     "calendar_hours": "SUM",
     "run_hours": "SUM"
    },
    "val": {
     "Group": [
      95.22,
      88.71,
      94.06,
      93.6,
      90.1,
      93.64
     ],
     "A1": [
      94.75,
      88.59,
      93.69,
      92.06,
      90.77,
      91.86
     ],
     "A2": [
      95.69,
      88.83,
      94.43,
      95.13,
      89.43,
      95.43
     ],
     "Plant01": [
      96.15,
      94.42,
      94.65,
      94.3,
      95.52,
      92.29
     ],
     "Plant02": [
      93.76,
      84.77,
      93.04,
      88.09,
      81.1,
      86.71
     ],
     "Plant03": [
      94.32,
      86.59,
      93.38,
      93.79,
      95.69,
      96.58
     ],
     "Plant04": [
      95.61,
      92.77,
      93.58,
      95.17,
      87.28,
      95.92
     ],
     "Plant05": [
      95.07,
      86.36,
      94.54,
      96.14,
      86.64,
      95.82
     ],
     "Plant06": [
      96.4,
      87.37,
      95.15,
      94.07,
      94.35,
      94.54
     ]
    },
    "inp": {
     "Group": {
      "calendar_hours": 4320.0,
      "run_hours": 4045.4
     },
     "A1": {
      "calendar_hours": 2160.0,
      "run_hours": 1984.2
     },
     "A2": {
      "calendar_hours": 2160.0,
      "run_hours": 2061.2
     },
     "Plant01": {
      "calendar_hours": 720.0,
      "run_hours": 664.5
     },
     "Plant02": {
      "calendar_hours": 720.0,
      "run_hours": 624.3
     },
     "Plant03": {
      "calendar_hours": 720.0,
      "run_hours": 695.4
     },
     "Plant04": {
      "calendar_hours": 720.0,
      "run_hours": 690.6
     },
     "Plant05": {
      "calendar_hours": 720.0,
      "run_hours": 689.9
     },
     "Plant06": {
      "calendar_hours": 720.0,
      "run_hours": 680.7
     }
    },
    "excl": {
     "A1": 95.43,
     "A2": 91.86,
     "Plant01": 91.65,
     "Plant02": 94.44,
     "Plant03": 89.5,
     "Plant04": 95.18,
     "Plant05": 95.23,
     "Plant06": 95.87
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E02-Plants"
    ]
   },
   "PLT-002": {
    "name": "OEE",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Availability × Performance × Quality = Good output ÷ Ideal output × 100",
    "basis": "Month",
    "better": "up",
    "target": 80,
    "fields": [
     "ideal_output_t",
     "good_output_t"
    ],
    "rules": {
     "ideal_output_t": "SUM",
     "good_output_t": "SUM"
    },
    "val": {
     "Group": [
      84.74,
      81.53,
      80.23,
      82.78,
      82.21,
      84.07
     ],
     "A1": [
      81.65,
      78.4,
      76.22,
      79.11,
      78.73,
      80.21
     ],
     "A2": [
      88.21,
      85.07,
      84.77,
      86.9,
      86.21,
      88.44
     ],
     "Plant01": [
      88.97,
      79.28,
      82.19,
      81.95,
      85.81,
      83.97
     ],
     "Plant02": [
      72.61,
      74.3,
      67.72,
      70.2,
      68.01,
      70.31
     ],
     "Plant03": [
      84.85,
      81.32,
      79.7,
      84.83,
      82.56,
      86.21
     ],
     "Plant04": [
      84.79,
      80.9,
      82.92,
      82.69,
      90.12,
      89.73
     ],
     "Plant05": [
      88.94,
      88.12,
      84.17,
      89.81,
      86.76,
      91.23
     ],
     "Plant06": [
      90.01,
      84.8,
      87.06,
      86.47,
      82.68,
      83.8
     ]
    },
    "inp": {
     "Group": {
      "ideal_output_t": 744212.0,
      "good_output_t": 625667.0
     },
     "A1": {
      "ideal_output_t": 394982.0,
      "good_output_t": 316798.0
     },
     "A2": {
      "ideal_output_t": 349230.0,
      "good_output_t": 308869.0
     },
     "Plant01": {
      "ideal_output_t": 97478.0,
      "good_output_t": 81854.0
     },
     "Plant02": {
      "ideal_output_t": 135441.0,
      "good_output_t": 95233.0
     },
     "Plant03": {
      "ideal_output_t": 162063.0,
      "good_output_t": 139711.0
     },
     "Plant04": {
      "ideal_output_t": 91042.0,
      "good_output_t": 81694.0
     },
     "Plant05": {
      "ideal_output_t": 145550.0,
      "good_output_t": 132787.0
     },
     "Plant06": {
      "ideal_output_t": 112638.0,
      "good_output_t": 94388.0
     }
    },
    "excl": {
     "A1": 88.44,
     "A2": 80.21,
     "Plant01": 78.97,
     "Plant02": 85.37,
     "Plant03": 76.03,
     "Plant04": 87.99,
     "Plant05": 86.45,
     "Plant06": 90.65
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E02-Plants",
     "P2-G05-OpsBenchmark"
    ]
   },
   "PLT-004": {
    "name": "Recovery percentage",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Valuable content recovered ÷ Valuable content in feed × 100",
    "basis": "Month",
    "better": "up",
    "target": 88,
    "fields": [
     "feed_contained_t",
     "recovered_contained_t"
    ],
    "rules": {
     "feed_contained_t": "SUM",
     "recovered_contained_t": "SUM"
    },
    "val": {
     "Group": [
      86.99,
      86.1,
      88.15,
      87.16,
      88.51,
      87.35
     ],
     "A1": [
      86.95,
      85.7,
      87.19,
      87.53,
      86.96,
      87.47
     ],
     "A2": [
      87.03,
      86.53,
      89.22,
      86.73,
      90.09,
      87.23
     ],
     "Plant01": [
      89.65,
      84.57,
      86.69,
      91.43,
      88.72,
      91.69
     ],
     "Plant02": [
      82.33,
      86.62,
      82.16,
      87.09,
      82.15,
      86.55
     ],
     "Plant03": [
      88.88,
      85.78,
      91.32,
      85.49,
      89.14,
      85.7
     ],
     "Plant04": [
      88.48,
      87.77,
      90.88,
      85.62,
      89.14,
      88.37
     ],
     "Plant05": [
      87.65,
      85.41,
      90.56,
      89.15,
      90.45,
      88.33
     ],
     "Plant06": [
      85.27,
      86.93,
      86.32,
      84.34,
      90.37,
      84.57
     ]
    },
    "inp": {
     "Group": {
      "feed_contained_t": 146965.0,
      "recovered_contained_t": 128381.0
     },
     "A1": {
      "feed_contained_t": 77576.0,
      "recovered_contained_t": 67855.0
     },
     "A2": {
      "feed_contained_t": 69389.0,
      "recovered_contained_t": 60526.0
     },
     "Plant01": {
      "feed_contained_t": 19996.0,
      "recovered_contained_t": 18334.0
     },
     "Plant02": {
      "feed_contained_t": 20791.0,
      "recovered_contained_t": 17994.0
     },
     "Plant03": {
      "feed_contained_t": 36789.0,
      "recovered_contained_t": 31527.0
     },
     "Plant04": {
      "feed_contained_t": 20374.0,
      "recovered_contained_t": 18005.0
     },
     "Plant05": {
      "feed_contained_t": 28428.0,
      "recovered_contained_t": 25111.0
     },
     "Plant06": {
      "feed_contained_t": 20587.0,
      "recovered_contained_t": 17410.0
     }
    },
    "excl": {
     "A1": 87.23,
     "A2": 87.47,
     "Plant01": 86.0,
     "Plant02": 87.81,
     "Plant03": 89.07,
     "Plant04": 86.75,
     "Plant05": 86.46,
     "Plant06": 88.35
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E02-Plants"
    ]
   },
   "PLT-005": {
    "name": "Yield",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Good output ÷ Feed input × 100",
    "basis": "Month",
    "better": "up",
    "target": 92,
    "fields": [
     "good_output_t",
     "feed_input_t"
    ],
    "rules": {
     "good_output_t": "SUM",
     "feed_input_t": "SUM"
    },
    "val": {
     "Group": [
      90.5,
      92.35,
      91.47,
      91.45,
      91.09,
      91.93
     ],
     "A1": [
      89.68,
      91.9,
      93.25,
      89.98,
      91.19,
      91.46
     ],
     "A2": [
      91.38,
      92.82,
      89.73,
      93.0,
      91.0,
      92.42
     ],
     "Plant01": [
      91.1,
      93.76,
      94.05,
      88.37,
      92.45,
      91.48
     ],
     "Plant02": [
      88.81,
      94.32,
      94.47,
      90.46,
      88.57,
      93.11
     ],
     "Plant03": [
      89.42,
      88.95,
      91.91,
      90.62,
      92.09,
      90.37
     ],
     "Plant04": [
      92.81,
      91.73,
      90.68,
      94.68,
      91.58,
      90.59
     ],
     "Plant05": [
      89.32,
      92.24,
      89.33,
      94.4,
      89.39,
      93.25
     ],
     "Plant06": [
      93.01,
      94.56,
      89.53,
      89.96,
      92.64,
      92.87
     ]
    },
    "inp": {
     "Group": {
      "good_output_t": 625667.0,
      "feed_input_t": 680575.0
     },
     "A1": {
      "good_output_t": 316798.0,
      "feed_input_t": 346362.0
     },
     "A2": {
      "good_output_t": 308869.0,
      "feed_input_t": 334213.0
     },
     "Plant01": {
      "good_output_t": 81854.0,
      "feed_input_t": 89479.0
     },
     "Plant02": {
      "good_output_t": 95233.0,
      "feed_input_t": 102279.0
     },
     "Plant03": {
      "good_output_t": 139711.0,
      "feed_input_t": 154604.0
     },
     "Plant04": {
      "good_output_t": 81694.0,
      "feed_input_t": 90180.0
     },
     "Plant05": {
      "good_output_t": 132787.0,
      "feed_input_t": 142400.0
     },
     "Plant06": {
      "good_output_t": 94388.0,
      "feed_input_t": 101633.0
     }
    },
    "excl": {
     "A1": 92.42,
     "A2": 91.46,
     "Plant01": 91.46,
     "Plant02": 90.77,
     "Plant03": 92.35,
     "Plant04": 93.09,
     "Plant05": 91.8,
     "Plant06": 92.22
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E02-Plants"
    ]
   },
   "REL-001": {
    "name": "MTBF",
    "unit": "h",
    "dp": 0,
    "div": 1,
    "formula": "Run hours ÷ Breakdowns",
    "basis": "Month",
    "better": "up",
    "target": 200,
    "fields": [
     "run_hours",
     "failures"
    ],
    "rules": {
     "run_hours": "SUM",
     "failures": "SUM"
    },
    "val": {
     "Group": [
      293.8,
      188.6,
      239.0,
      189.9,
      211.7,
      269.7
     ],
     "A1": [
      227.4,
      164.8,
      202.4,
      146.8,
      202.6,
      165.3
     ],
     "A2": [
      413.4,
      220.3,
      291.4,
      265.4,
      221.8,
      687.1
     ],
     "Plant01": [
      346.1,
      234.2,
      340.8,
      175.4,
      355.4,
      166.1
     ],
     "Plant02": [
      135.0,
      126.1,
      167.5,
      109.2,
      150.8,
      104.0
     ],
     "Plant03": [
      339.6,
      161.1,
      168.1,
      174.4,
      178.0,
      347.7
     ],
     "Plant04": [
      344.2,
      172.6,
      224.6,
      177.0,
      649.4,
      690.6
     ],
     "Plant05": [
      342.2,
      321.2,
      226.9,
      715.3,
      161.2,
      689.9
     ],
     "Plant06": [
      694.1,
      216.7,
      685.1,
      233.3,
      175.5,
      680.7
     ]
    },
    "inp": {
     "Group": {
      "run_hours": 4045.4,
      "failures": 15.0
     },
     "A1": {
      "run_hours": 1984.2,
      "failures": 12.0
     },
     "A2": {
      "run_hours": 2061.2,
      "failures": 3.0
     },
     "Plant01": {
      "run_hours": 664.5,
      "failures": 4.0
     },
     "Plant02": {
      "run_hours": 624.3,
      "failures": 6.0
     },
     "Plant03": {
      "run_hours": 695.4,
      "failures": 2.0
     },
     "Plant04": {
      "run_hours": 690.6,
      "failures": 1.0
     },
     "Plant05": {
      "run_hours": 689.9,
      "failures": 1.0
     },
     "Plant06": {
      "run_hours": 680.7,
      "failures": 1.0
     }
    },
    "excl": {
     "A1": 687.1,
     "A2": 165.3,
     "Plant01": 165.0,
     "Plant02": 226.7,
     "Plant03": 128.9,
     "Plant04": 685.3,
     "Plant05": 685.6,
     "Plant06": 690.2
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E03-Reliability",
     "P2-G05-OpsBenchmark",
     "P2-O09-Operations"
    ]
   },
   "REL-002": {
    "name": "Mean Time to Repair",
    "unit": "h",
    "dp": 1,
    "div": 1,
    "formula": "Repair hours ÷ Breakdowns",
    "basis": "Month",
    "better": "down",
    "target": 6,
    "fields": [
     "failures",
     "repair_hours"
    ],
    "rules": {
     "failures": "SUM",
     "repair_hours": "SUM"
    },
    "val": {
     "Group": [
      5.08,
      6.16,
      6.58,
      6.69,
      6.91,
      7.83
     ],
     "A1": [
      5.26,
      6.2,
      7.04,
      7.77,
      8.18,
      8.24
     ],
     "A2": [
      4.76,
      6.11,
      5.91,
      4.79,
      5.49,
      6.17
     ],
     "Plant01": [
      3.55,
      5.17,
      7.35,
      5.33,
      7.0,
      5.4
     ],
     "Plant02": [
      5.72,
      8.1,
      8.15,
      10.95,
      11.7,
      11.42
     ],
     "Plant03": [
      5.8,
      4.6,
      5.78,
      5.45,
      5.25,
      4.4
     ],
     "Plant04": [
      3.4,
      7.78,
      8.47,
      3.85,
      4.1,
      6.8
     ],
     "Plant05": [
      6.95,
      4.65,
      4.0,
      6.0,
      7.63,
      5.2
     ],
     "Plant06": [
      3.1,
      4.87,
      4.0,
      5.63,
      3.7,
      6.5
     ]
    },
    "inp": {
     "Group": {
      "failures": 15.0,
      "repair_hours": 117.4
     },
     "A1": {
      "failures": 12.0,
      "repair_hours": 98.9
     },
     "A2": {
      "failures": 3.0,
      "repair_hours": 18.5
     },
     "Plant01": {
      "failures": 4.0,
      "repair_hours": 21.6
     },
     "Plant02": {
      "failures": 6.0,
      "repair_hours": 68.5
     },
     "Plant03": {
      "failures": 2.0,
      "repair_hours": 8.8
     },
     "Plant04": {
      "failures": 1.0,
      "repair_hours": 6.8
     },
     "Plant05": {
      "failures": 1.0,
      "repair_hours": 5.2
     },
     "Plant06": {
      "failures": 1.0,
      "repair_hours": 6.5
     }
    },
    "excl": {
     "A1": 6.17,
     "A2": 8.24,
     "Plant01": 9.66,
     "Plant02": 5.07,
     "Plant03": 9.01,
     "Plant04": 5.85,
     "Plant05": 6.65,
     "Plant06": 6.0
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E03-Reliability",
     "P2-G05-OpsBenchmark",
     "P2-O09-Operations"
    ]
   },
   "REL-003": {
    "name": "Unplanned downtime",
    "unit": "h",
    "dp": 0,
    "div": 1,
    "formula": "Unplanned downtime",
    "basis": "Month",
    "better": "down",
    "target": null,
    "fields": [
     "unplanned_downtime_hours"
    ],
    "rules": {
     "unplanned_downtime_hours": "SUM"
    },
    "val": {
     "Group": [
      103.9,
      167.9,
      142.0,
      185.3,
      164.0,
      154.4
     ],
     "A1": [
      62.8,
      88.0,
      85.7,
      127.1,
      96.2,
      120.7
     ],
     "A2": [
      41.1,
      79.9,
      56.3,
      58.2,
      67.8,
      33.7
     ],
     "Plant01": [
      13.3,
      19.6,
      18.6,
      27.2,
      19.1,
      30.2
     ],
     "Plant02": [
      31.0,
      45.8,
      37.1,
      69.3,
      53.5,
      78.2
     ],
     "Plant03": [
      18.5,
      22.6,
      30.0,
      30.6,
      23.6,
      12.3
     ],
     "Plant04": [
      13.3,
      40.9,
      33.6,
      22.0,
      9.4,
      10.1
     ],
     "Plant05": [
      17.0,
      18.2,
      15.1,
      13.1,
      34.9,
      10.2
     ],
     "Plant06": [
      10.8,
      20.8,
      7.6,
      23.1,
      23.5,
      13.4
     ]
    },
    "inp": {
     "Group": {
      "unplanned_downtime_hours": 154.4
     },
     "A1": {
      "unplanned_downtime_hours": 120.7
     },
     "A2": {
      "unplanned_downtime_hours": 33.7
     },
     "Plant01": {
      "unplanned_downtime_hours": 30.2
     },
     "Plant02": {
      "unplanned_downtime_hours": 78.2
     },
     "Plant03": {
      "unplanned_downtime_hours": 12.3
     },
     "Plant04": {
      "unplanned_downtime_hours": 10.1
     },
     "Plant05": {
      "unplanned_downtime_hours": 10.2
     },
     "Plant06": {
      "unplanned_downtime_hours": 13.4
     }
    },
    "excl": {
     "A1": 33.7,
     "A2": 120.7,
     "Plant01": 90.5,
     "Plant02": 42.5,
     "Plant03": 108.4,
     "Plant04": 23.6,
     "Plant05": 23.5,
     "Plant06": 20.3
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E03-Reliability",
     "P2-G05-OpsBenchmark",
     "P2-O09-Operations"
    ]
   },
   "REL-004": {
    "name": "Production loss from downtime",
    "unit": "kt",
    "dp": 1,
    "div": 1000,
    "formula": "Production lost to downtime",
    "basis": "Month",
    "better": "down",
    "target": null,
    "fields": [
     "prod_loss_downtime_t"
    ],
    "rules": {
     "prod_loss_downtime_t": "SUM"
    },
    "val": {
     "Group": [
      18.73,
      28.64,
      24.88,
      32.85,
      30.11,
      27.18
     ],
     "A1": [
      11.85,
      16.43,
      16.32,
      23.72,
      18.04,
      21.68
     ],
     "A2": [
      6.88,
      12.21,
      8.56,
      9.13,
      12.06,
      5.49
     ],
     "Plant01": [
      1.82,
      2.69,
      2.55,
      3.73,
      2.62,
      4.14
     ],
     "Plant02": [
      5.86,
      8.65,
      7.01,
      13.09,
      10.11,
      14.77
     ],
     "Plant03": [
      4.17,
      5.09,
      6.76,
      6.9,
      5.32,
      2.77
     ],
     "Plant04": [
      1.69,
      5.19,
      4.26,
      2.79,
      1.19,
      1.28
     ],
     "Plant05": [
      3.48,
      3.73,
      3.1,
      2.69,
      7.15,
      2.09
     ],
     "Plant06": [
      1.71,
      3.29,
      1.2,
      3.65,
      3.72,
      2.12
     ]
    },
    "inp": {
     "Group": {
      "prod_loss_downtime_t": 27176.0
     },
     "A1": {
      "prod_loss_downtime_t": 21684.0
     },
     "A2": {
      "prod_loss_downtime_t": 5492.0
     },
     "Plant01": {
      "prod_loss_downtime_t": 4140.0
     },
     "Plant02": {
      "prod_loss_downtime_t": 14772.0
     },
     "Plant03": {
      "prod_loss_downtime_t": 2772.0
     },
     "Plant04": {
      "prod_loss_downtime_t": 1281.0
     },
     "Plant05": {
      "prod_loss_downtime_t": 2091.0
     },
     "Plant06": {
      "prod_loss_downtime_t": 2120.0
     }
    },
    "excl": {
     "A1": 5.49,
     "A2": 21.68,
     "Plant01": 17.54,
     "Plant02": 6.91,
     "Plant03": 18.91,
     "Plant04": 4.21,
     "Plant05": 3.4,
     "Plant06": 3.37
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E03-Reliability",
     "P2-G05-OpsBenchmark"
    ]
   },
   "REL-005": {
    "name": "Preventive-maintenance compliance",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Preventive maintenance completed ÷ Preventive maintenance scheduled × 100",
    "basis": "Month",
    "better": "up",
    "target": 95,
    "fields": [
     "pm_scheduled",
     "pm_completed"
    ],
    "rules": {
     "pm_scheduled": "SUM",
     "pm_completed": "SUM"
    },
    "val": {
     "Group": [
      93.46,
      92.73,
      94.68,
      92.55,
      98.28,
      95.62
     ],
     "A1": [
      93.5,
      89.73,
      92.54,
      88.73,
      97.39,
      93.43
     ],
     "A2": [
      93.43,
      96.12,
      96.9,
      96.43,
      99.15,
      97.81
     ],
     "Plant01": [
      97.3,
      97.92,
      93.75,
      94.55,
      96.88,
      93.48
     ],
     "Plant02": [
      85.0,
      75.0,
      86.11,
      78.57,
      94.87,
      81.82
     ],
     "Plant03": [
      97.83,
      94.44,
      96.0,
      96.77,
      100.0,
      100.0
     ],
     "Plant04": [
      93.48,
      100.0,
      94.74,
      96.08,
      97.06,
      100.0
     ],
     "Plant05": [
      92.31,
      92.31,
      97.37,
      98.28,
      100.0,
      97.62
     ],
     "Plant06": [
      94.87,
      96.08,
      100.0,
      93.55,
      100.0,
      94.44
     ]
    },
    "inp": {
     "Group": {
      "pm_scheduled": 274.0,
      "pm_completed": 262.0
     },
     "A1": {
      "pm_scheduled": 137.0,
      "pm_completed": 128.0
     },
     "A2": {
      "pm_scheduled": 137.0,
      "pm_completed": 134.0
     },
     "Plant01": {
      "pm_scheduled": 46.0,
      "pm_completed": 43.0
     },
     "Plant02": {
      "pm_scheduled": 33.0,
      "pm_completed": 27.0
     },
     "Plant03": {
      "pm_scheduled": 58.0,
      "pm_completed": 58.0
     },
     "Plant04": {
      "pm_scheduled": 59.0,
      "pm_completed": 59.0
     },
     "Plant05": {
      "pm_scheduled": 42.0,
      "pm_completed": 41.0
     },
     "Plant06": {
      "pm_scheduled": 36.0,
      "pm_completed": 34.0
     }
    },
    "excl": {
     "A1": 97.81,
     "A2": 93.43,
     "Plant01": 93.41,
     "Plant02": 97.12,
     "Plant03": 88.61,
     "Plant04": 96.15,
     "Plant05": 97.89,
     "Plant06": 99.01
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E03-Reliability",
     "P2-O09-Operations"
    ]
   },
   "CST-001": {
    "name": "Cost per tonne",
    "unit": "₹/t",
    "dp": 0,
    "div": 1,
    "formula": "(Variable cost + Fixed cost) × 1000 ÷ Good output",
    "basis": "Month",
    "better": "down",
    "target": 2900,
    "fields": [
     "good_output_t",
     "variable_cost_k",
     "fixed_cost_k"
    ],
    "rules": {
     "good_output_t": "SUM",
     "variable_cost_k": "SUM",
     "fixed_cost_k": "SUM"
    },
    "val": {
     "Group": [
      3046.7,
      3159.4,
      3165.2,
      3100.9,
      3164.8,
      2933.7
     ],
     "A1": [
      3030.4,
      3342.1,
      3110.3,
      2970.2,
      3165.7,
      2853.1
     ],
     "A2": [
      3063.7,
      2968.8,
      3221.3,
      3234.2,
      3163.8,
      3016.5
     ],
     "Plant01": [
      2906.0,
      3391.1,
      3339.2,
      2671.7,
      3077.0,
      2779.0
     ],
     "Plant02": [
      2996.2,
      3628.9,
      3512.2,
      3600.8,
      3408.8,
      3245.2
     ],
     "Plant03": [
      3135.2,
      3085.7,
      2680.8,
      2709.7,
      3069.6,
      2629.1
     ],
     "Plant04": [
      3104.6,
      3084.9,
      3272.8,
      3329.5,
      2862.1,
      3275.5
     ],
     "Plant05": [
      3370.6,
      2988.5,
      3356.8,
      3252.2,
      3169.6,
      3011.8
     ],
     "Plant06": [
      2643.0,
      2845.2,
      3011.2,
      3136.5,
      3397.1,
      2799.0
     ]
    },
    "inp": {
     "Group": {
      "good_output_t": 625667.0,
      "variable_cost_k": 1827824.8,
      "fixed_cost_k": 7718.9
     },
     "A1": {
      "good_output_t": 316798.0,
      "variable_cost_k": 900069.4,
      "fixed_cost_k": 3769.8
     },
     "A2": {
      "good_output_t": 308869.0,
      "variable_cost_k": 927755.4,
      "fixed_cost_k": 3949.1
     },
     "Plant01": {
      "good_output_t": 81854.0,
      "variable_cost_k": 226098.2,
      "fixed_cost_k": 1375.5
     },
     "Plant02": {
      "good_output_t": 95233.0,
      "variable_cost_k": 308111.0,
      "fixed_cost_k": 940.2
     },
     "Plant03": {
      "good_output_t": 139711.0,
      "variable_cost_k": 365860.2,
      "fixed_cost_k": 1454.1
     },
     "Plant04": {
      "good_output_t": 81694.0,
      "variable_cost_k": 266460.1,
      "fixed_cost_k": 1127.6
     },
     "Plant05": {
      "good_output_t": 132787.0,
      "variable_cost_k": 398678.1,
      "fixed_cost_k": 1248.5
     },
     "Plant06": {
      "good_output_t": 94388.0,
      "variable_cost_k": 262617.2,
      "fixed_cost_k": 1573.0
     }
    },
    "excl": {
     "A1": 3016.5,
     "A2": 2853.1,
     "Plant01": 2878.8,
     "Plant02": 2684.5,
     "Plant03": 3029.7,
     "Plant04": 2923.4,
     "Plant05": 3020.1,
     "Plant06": 3112.2
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E02-Plants",
     "P2-E11-Financial",
     "P2-G03-Financial",
     "P2-G05-OpsBenchmark",
     "P2-O09-Operations"
    ]
   },
   "CST-002": {
    "name": "Variable cost",
    "unit": "₹ m",
    "dp": 1,
    "div": 1000,
    "formula": "Variable cost",
    "basis": "Month",
    "better": "down",
    "target": null,
    "fields": [
     "variable_cost_k"
    ],
    "rules": {
     "variable_cost_k": "SUM"
    },
    "val": {
     "Group": [
      1911.39,
      1857.32,
      1886.76,
      1970.23,
      1926.08,
      1827.82
     ],
     "A1": [
      969.68,
      1003.68,
      936.61,
      953.22,
      985.82,
      900.07
     ],
     "A2": [
      941.7,
      853.64,
      950.15,
      1017.01,
      940.26,
      927.76
     ],
     "Plant01": [
      251.99,
      272.78,
      269.8,
      221.28,
      268.25,
      226.1
     ],
     "Plant02": [
      293.95,
      350.21,
      321.49,
      350.47,
      293.79,
      308.11
     ],
     "Plant03": [
      423.75,
      380.69,
      345.32,
      381.46,
      423.78,
      365.86
     ],
     "Plant04": [
      238.2,
      234.0,
      245.13,
      257.34,
      220.84,
      266.46
     ],
     "Plant05": [
      435.08,
      362.34,
      411.52,
      444.08,
      390.31,
      398.68
     ],
     "Plant06": [
      268.42,
      257.3,
      293.5,
      315.59,
      329.11,
      262.62
     ]
    },
    "inp": {
     "Group": {
      "variable_cost_k": 1827824.8
     },
     "A1": {
      "variable_cost_k": 900069.4
     },
     "A2": {
      "variable_cost_k": 927755.4
     },
     "Plant01": {
      "variable_cost_k": 226098.2
     },
     "Plant02": {
      "variable_cost_k": 308111.0
     },
     "Plant03": {
      "variable_cost_k": 365860.2
     },
     "Plant04": {
      "variable_cost_k": 266460.1
     },
     "Plant05": {
      "variable_cost_k": 398678.1
     },
     "Plant06": {
      "variable_cost_k": 262617.2
     }
    },
    "excl": {
     "A1": 927.76,
     "A2": 900.07,
     "Plant01": 673.97,
     "Plant02": 591.96,
     "Plant03": 534.21,
     "Plant04": 661.3,
     "Plant05": 529.08,
     "Plant06": 665.14
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E02-Plants",
     "P2-E11-Financial",
     "P2-G03-Financial",
     "P2-O09-Operations"
    ]
   },
   "CST-003": {
    "name": "Fuel cost",
    "unit": "₹ m",
    "dp": 1,
    "div": 1000,
    "formula": "Fuel cost",
    "basis": "Month",
    "better": "down",
    "target": null,
    "fields": [
     "fuel_cost_k"
    ],
    "rules": {
     "fuel_cost_k": "SUM"
    },
    "val": {
     "Group": [
      490.33,
      492.35,
      514.85,
      564.12,
      544.91,
      459.37
     ],
     "A1": [
      232.9,
      266.12,
      240.23,
      250.51,
      298.3,
      218.67
     ],
     "A2": [
      257.43,
      226.23,
      274.62,
      313.62,
      246.61,
      240.7
     ],
     "Plant01": [
      62.83,
      79.96,
      63.24,
      64.81,
      78.89,
      50.62
     ],
     "Plant02": [
      67.78,
      97.18,
      71.5,
      93.26,
      89.72,
      70.78
     ],
     "Plant03": [
      102.29,
      88.98,
      105.48,
      92.44,
      129.69,
      97.27
     ],
     "Plant04": [
      62.77,
      64.99,
      77.7,
      81.31,
      64.49,
      82.64
     ],
     "Plant05": [
      128.78,
      89.55,
      126.36,
      131.63,
      92.79,
      92.19
     ],
     "Plant06": [
      65.88,
      71.69,
      70.57,
      100.68,
      89.33,
      65.86
     ]
    },
    "inp": {
     "Group": {
      "fuel_cost_k": 459369.3
     },
     "A1": {
      "fuel_cost_k": 218672.4
     },
     "A2": {
      "fuel_cost_k": 240696.9
     },
     "Plant01": {
      "fuel_cost_k": 50616.0
     },
     "Plant02": {
      "fuel_cost_k": 70784.4
     },
     "Plant03": {
      "fuel_cost_k": 97272.0
     },
     "Plant04": {
      "fuel_cost_k": 82640.2
     },
     "Plant05": {
      "fuel_cost_k": 92193.9
     },
     "Plant06": {
      "fuel_cost_k": 65862.8
     }
    },
    "excl": {
     "A1": 240.7,
     "A2": 218.67,
     "Plant01": 168.06,
     "Plant02": 147.89,
     "Plant03": 121.4,
     "Plant04": 158.06,
     "Plant05": 148.5,
     "Plant06": 174.83
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E02-Plants",
     "P2-O09-Operations"
    ]
   },
   "SUS-001": {
    "name": "Water usage",
    "unit": "'000 m³",
    "dp": 1,
    "div": 1000,
    "formula": "Water used",
    "basis": "Month",
    "better": "down",
    "target": null,
    "fields": [
     "water_m3"
    ],
    "rules": {
     "water_m3": "SUM"
    },
    "val": {
     "Group": [
      1352.73,
      1282.07,
      1245.66,
      1399.28,
      1363.7,
      1450.14
     ],
     "A1": [
      663.73,
      702.33,
      622.78,
      738.48,
      673.37,
      741.31
     ],
     "A2": [
      689.0,
      579.74,
      622.88,
      660.8,
      690.33,
      708.83
     ],
     "Plant01": [
      167.24,
      205.73,
      166.42,
      180.48,
      192.09,
      148.81
     ],
     "Plant02": [
      202.91,
      176.55,
      174.18,
      204.29,
      164.59,
      245.66
     ],
     "Plant03": [
      293.58,
      320.05,
      282.18,
      353.7,
      316.69,
      346.84
     ],
     "Plant04": [
      186.85,
      165.22,
      135.85,
      154.58,
      184.19,
      178.27
     ],
     "Plant05": [
      292.64,
      244.42,
      277.55,
      285.26,
      320.46,
      299.94
     ],
     "Plant06": [
      209.51,
      170.1,
      209.47,
      220.96,
      185.67,
      230.62
     ]
    },
    "inp": {
     "Group": {
      "water_m3": 1450141.0
     },
     "A1": {
      "water_m3": 741310.0
     },
     "A2": {
      "water_m3": 708831.0
     },
     "Plant01": {
      "water_m3": 148807.0
     },
     "Plant02": {
      "water_m3": 245659.0
     },
     "Plant03": {
      "water_m3": 346844.0
     },
     "Plant04": {
      "water_m3": 178267.0
     },
     "Plant05": {
      "water_m3": 299945.0
     },
     "Plant06": {
      "water_m3": 230619.0
     }
    },
    "excl": {
     "A1": 708.83,
     "A2": 741.31,
     "Plant01": 592.5,
     "Plant02": 495.65,
     "Plant03": 394.47,
     "Plant04": 530.56,
     "Plant05": 408.89,
     "Plant06": 478.21
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E02-Plants",
     "P2-E07-RegEHS",
     "P2-G05-OpsBenchmark",
     "P2-G07-Risk",
     "P2-O05-Risk",
     "P2-O09-Operations"
    ]
   },
   "SUS-002": {
    "name": "Emissions",
    "unit": "kt CO2e",
    "dp": 1,
    "div": 1000,
    "formula": "Emissions",
    "basis": "Month",
    "better": "down",
    "target": null,
    "fields": [
     "emissions_tco2e"
    ],
    "rules": {
     "emissions_tco2e": "SUM"
    },
    "val": {
     "Group": [
      425.63,
      382.39,
      374.12,
      397.39,
      410.41,
      427.66
     ],
     "A1": [
      230.68,
      188.84,
      188.17,
      190.29,
      216.41,
      219.5
     ],
     "A2": [
      194.95,
      193.55,
      185.95,
      207.09,
      194.0,
      208.16
     ],
     "Plant01": [
      61.32,
      53.72,
      60.01,
      54.6,
      54.89,
      59.12
     ],
     "Plant02": [
      69.23,
      62.33,
      54.97,
      57.7,
      62.32,
      68.82
     ],
     "Plant03": [
      100.14,
      72.79,
      73.19,
      77.99,
      99.21,
      91.57
     ],
     "Plant04": [
      47.77,
      55.5,
      41.79,
      45.27,
      53.67,
      58.38
     ],
     "Plant05": [
      86.14,
      74.25,
      89.68,
      93.28,
      79.52,
      86.53
     ],
     "Plant06": [
      61.04,
      63.81,
      54.48,
      68.54,
      60.8,
      63.24
     ]
    },
    "inp": {
     "Group": {
      "emissions_tco2e": 427664.0
     },
     "A1": {
      "emissions_tco2e": 219505.0
     },
     "A2": {
      "emissions_tco2e": 208159.0
     },
     "Plant01": {
      "emissions_tco2e": 59115.0
     },
     "Plant02": {
      "emissions_tco2e": 68824.0
     },
     "Plant03": {
      "emissions_tco2e": 91566.0
     },
     "Plant04": {
      "emissions_tco2e": 58385.0
     },
     "Plant05": {
      "emissions_tco2e": 86535.0
     },
     "Plant06": {
      "emissions_tco2e": 63239.0
     }
    },
    "excl": {
     "A1": 208.16,
     "A2": 219.5,
     "Plant01": 160.39,
     "Plant02": 150.68,
     "Plant03": 127.94,
     "Plant04": 149.77,
     "Plant05": 121.62,
     "Plant06": 144.92
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E02-Plants",
     "P2-E07-RegEHS",
     "P2-G05-OpsBenchmark",
     "P2-G07-Risk",
     "P2-O05-Risk",
     "P2-O09-Operations"
    ]
   },
   "SUS-003": {
    "name": "Energy intensity",
    "unit": "GJ/t",
    "dp": 2,
    "div": 1,
    "formula": "Energy used ÷ Good output",
    "basis": "Month",
    "better": "down",
    "target": 3.5,
    "fields": [
     "good_output_t",
     "energy_gj"
    ],
    "rules": {
     "good_output_t": "SUM",
     "energy_gj": "SUM"
    },
    "val": {
     "Group": [
      3.37,
      3.18,
      3.26,
      3.25,
      3.52,
      3.42
     ],
     "A1": [
      3.34,
      3.34,
      3.27,
      3.33,
      3.6,
      3.61
     ],
     "A2": [
      3.41,
      3.02,
      3.25,
      3.18,
      3.43,
      3.23
     ],
     "Plant01": [
      3.57,
      3.12,
      3.0,
      2.93,
      3.5,
      3.54
     ],
     "Plant02": [
      3.55,
      3.88,
      4.01,
      3.65,
      4.02,
      3.76
     ],
     "Plant03": [
      3.03,
      3.06,
      2.92,
      3.34,
      3.41,
      3.56
     ],
     "Plant04": [
      3.41,
      3.07,
      3.2,
      3.13,
      3.04,
      3.47
     ],
     "Plant05": [
      3.46,
      2.91,
      3.51,
      3.34,
      3.56,
      3.2
     ],
     "Plant06": [
      3.33,
      3.12,
      2.96,
      3.0,
      3.59,
      3.04
     ]
    },
    "inp": {
     "Group": {
      "good_output_t": 625667.0,
      "energy_gj": 2140719.0
     },
     "A1": {
      "good_output_t": 316798.0,
      "energy_gj": 1144453.0
     },
     "A2": {
      "good_output_t": 308869.0,
      "energy_gj": 996266.0
     },
     "Plant01": {
      "good_output_t": 81854.0,
      "energy_gj": 289576.0
     },
     "Plant02": {
      "good_output_t": 95233.0,
      "energy_gj": 358135.0
     },
     "Plant03": {
      "good_output_t": 139711.0,
      "energy_gj": 496742.0
     },
     "Plant04": {
      "good_output_t": 81694.0,
      "energy_gj": 283879.0
     },
     "Plant05": {
      "good_output_t": 132787.0,
      "energy_gj": 425107.0
     },
     "Plant06": {
      "good_output_t": 94388.0,
      "energy_gj": 287280.0
     }
    },
    "excl": {
     "A1": 3.23,
     "A2": 3.61,
     "Plant01": 3.64,
     "Plant02": 3.55,
     "Plant03": 3.66,
     "Plant04": 3.14,
     "Plant05": 3.24,
     "Plant06": 3.31
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E02-Plants",
     "P2-E07-RegEHS",
     "P2-G05-OpsBenchmark",
     "P2-G07-Risk",
     "P2-O05-Risk",
     "P2-O09-Operations"
    ]
   },
   "SIG-007": {
    "name": "Production at risk",
    "unit": "kt",
    "dp": 1,
    "div": 1000,
    "formula": "Production at risk",
    "basis": "Month",
    "better": "down",
    "target": null,
    "fields": [
     "production_at_risk_t"
    ],
    "rules": {
     "production_at_risk_t": "SUM"
    },
    "val": {
     "Group": [
      28.5,
      55.87,
      72.18,
      38.53,
      44.82,
      36.81
     ],
     "A1": [
      25.81,
      43.81,
      49.61,
      30.41,
      38.19,
      30.93
     ],
     "A2": [
      2.69,
      12.06,
      22.57,
      8.12,
      6.63,
      5.88
     ],
     "Plant01": [
      3.22,
      5.22,
      7.3,
      5.31,
      1.48,
      3.67
     ],
     "Plant02": [
      17.17,
      20.5,
      28.07,
      22.87,
      23.07,
      24.32
     ],
     "Plant03": [
      5.41,
      18.1,
      14.24,
      2.23,
      13.63,
      2.94
     ],
     "Plant04": [
      0.03,
      10.02,
      6.87,
      5.0,
      0.81,
      0.0
     ],
     "Plant05": [
      2.66,
      0.0,
      11.19,
      1.18,
      0.0,
      0.0
     ],
     "Plant06": [
      0.0,
      2.04,
      4.51,
      1.94,
      5.83,
      5.88
     ]
    },
    "inp": {
     "Group": {
      "production_at_risk_t": 36810.0
     },
     "A1": {
      "production_at_risk_t": 30930.0
     },
     "A2": {
      "production_at_risk_t": 5880.0
     },
     "Plant01": {
      "production_at_risk_t": 3669.0
     },
     "Plant02": {
      "production_at_risk_t": 24322.0
     },
     "Plant03": {
      "production_at_risk_t": 2939.0
     },
     "Plant04": {
      "production_at_risk_t": 0.0
     },
     "Plant05": {
      "production_at_risk_t": 0.0
     },
     "Plant06": {
      "production_at_risk_t": 5880.0
     }
    },
    "excl": {
     "A1": 5.88,
     "A2": 30.93,
     "Plant01": 27.26,
     "Plant02": 6.61,
     "Plant03": 27.99,
     "Plant04": 5.88,
     "Plant05": 5.88,
     "Plant06": 0.0
    },
    "level": "plant",
    "theme": "T3",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E01-EntityHome",
     "P2-E02-Plants",
     "P2-E05-ProductionCash",
     "P2-O02-ChangeReport",
     "P2-S10-OpsImpact",
     "P2-S12-Signals",
     "P2-S12e-Signals"
    ]
   },
   "SIG-008": {
    "name": "Critical plant-state alerts",
    "unit": "alerts",
    "dp": 0,
    "div": 1,
    "formula": "Critical plant alerts",
    "basis": "Month",
    "better": "down",
    "target": 0,
    "fields": [
     "critical_plant_alerts"
    ],
    "rules": {
     "critical_plant_alerts": "SUM"
    },
    "val": {
     "Group": [
      8.0,
      6.0,
      9.0,
      3.0,
      11.0,
      7.0
     ],
     "A1": [
      4.0,
      6.0,
      5.0,
      2.0,
      7.0,
      5.0
     ],
     "A2": [
      4.0,
      0.0,
      4.0,
      1.0,
      4.0,
      2.0
     ],
     "Plant01": [
      1.0,
      1.0,
      2.0,
      0.0,
      2.0,
      0.0
     ],
     "Plant02": [
      2.0,
      4.0,
      2.0,
      2.0,
      3.0,
      4.0
     ],
     "Plant03": [
      1.0,
      1.0,
      1.0,
      0.0,
      2.0,
      1.0
     ],
     "Plant04": [
      0.0,
      0.0,
      0.0,
      1.0,
      0.0,
      0.0
     ],
     "Plant05": [
      2.0,
      0.0,
      2.0,
      0.0,
      2.0,
      1.0
     ],
     "Plant06": [
      2.0,
      0.0,
      2.0,
      0.0,
      2.0,
      1.0
     ]
    },
    "inp": {
     "Group": {
      "critical_plant_alerts": 7.0
     },
     "A1": {
      "critical_plant_alerts": 5.0
     },
     "A2": {
      "critical_plant_alerts": 2.0
     },
     "Plant01": {
      "critical_plant_alerts": 0.0
     },
     "Plant02": {
      "critical_plant_alerts": 4.0
     },
     "Plant03": {
      "critical_plant_alerts": 1.0
     },
     "Plant04": {
      "critical_plant_alerts": 0.0
     },
     "Plant05": {
      "critical_plant_alerts": 1.0
     },
     "Plant06": {
      "critical_plant_alerts": 1.0
     }
    },
    "excl": {
     "A1": 2.0,
     "A2": 5.0,
     "Plant01": 5.0,
     "Plant02": 1.0,
     "Plant03": 4.0,
     "Plant04": 2.0,
     "Plant05": 1.0,
     "Plant06": 1.0
    },
    "level": "plant",
    "theme": "T3",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E03-Reliability",
     "P2-S12-Signals",
     "P2-S12e-Signals"
    ]
   },
   "SIG-009": {
    "name": "Critical-material shortage risk",
    "unit": "materials",
    "dp": 0,
    "div": 1,
    "formula": "Critical materials at risk",
    "basis": "Month",
    "better": "down",
    "target": 0,
    "fields": [
     "critical_material_risks"
    ],
    "rules": {
     "critical_material_risks": "SUM"
    },
    "val": {
     "Group": [
      3.0,
      3.0,
      1.0,
      6.0,
      6.0,
      5.0
     ],
     "A1": [
      1.0,
      0.0,
      1.0,
      2.0,
      3.0,
      4.0
     ],
     "A2": [
      2.0,
      3.0,
      0.0,
      4.0,
      3.0,
      1.0
     ],
     "Plant01": [
      0.0,
      0.0,
      0.0,
      1.0,
      2.0,
      2.0
     ],
     "Plant02": [
      1.0,
      0.0,
      1.0,
      0.0,
      0.0,
      1.0
     ],
     "Plant03": [
      0.0,
      0.0,
      0.0,
      1.0,
      1.0,
      1.0
     ],
     "Plant04": [
      2.0,
      2.0,
      0.0,
      1.0,
      2.0,
      0.0
     ],
     "Plant05": [
      0.0,
      1.0,
      0.0,
      1.0,
      1.0,
      0.0
     ],
     "Plant06": [
      0.0,
      0.0,
      0.0,
      2.0,
      0.0,
      1.0
     ]
    },
    "inp": {
     "Group": {
      "critical_material_risks": 5.0
     },
     "A1": {
      "critical_material_risks": 4.0
     },
     "A2": {
      "critical_material_risks": 1.0
     },
     "Plant01": {
      "critical_material_risks": 2.0
     },
     "Plant02": {
      "critical_material_risks": 1.0
     },
     "Plant03": {
      "critical_material_risks": 1.0
     },
     "Plant04": {
      "critical_material_risks": 0.0
     },
     "Plant05": {
      "critical_material_risks": 0.0
     },
     "Plant06": {
      "critical_material_risks": 1.0
     }
    },
    "excl": {
     "A1": 1.0,
     "A2": 4.0,
     "Plant01": 2.0,
     "Plant02": 3.0,
     "Plant03": 3.0,
     "Plant04": 1.0,
     "Plant05": 1.0,
     "Plant06": 0.0
    },
    "level": "plant",
    "theme": "T3",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E01-EntityHome",
     "P2-E04-Supply",
     "P2-O02-ChangeReport",
     "P2-O09-Operations",
     "P2-S10-OpsImpact",
     "P2-S12-Signals",
     "P2-S12e-Signals"
    ]
   },
   "SIG-012": {
    "name": "Dispatch delays",
    "unit": "% late",
    "dp": 1,
    "div": 1,
    "formula": "Delayed dispatches ÷ Dispatches × 100",
    "basis": "Month",
    "better": "down",
    "target": 5,
    "fields": [
     "dispatches_total",
     "dispatches_delayed"
    ],
    "rules": {
     "dispatches_total": "SUM",
     "dispatches_delayed": "SUM"
    },
    "val": {
     "Group": [
      5.98,
      7.08,
      7.48,
      7.98,
      7.63,
      8.66
     ],
     "A1": [
      5.26,
      6.3,
      8.6,
      7.61,
      10.09,
      10.91
     ],
     "A2": [
      6.6,
      8.19,
      6.48,
      8.33,
      5.82,
      6.1
     ],
     "Plant01": [
      5.7,
      3.91,
      7.43,
      4.55,
      8.26,
      7.5
     ],
     "Plant02": [
      5.88,
      10.66,
      10.82,
      11.63,
      15.09,
      16.0
     ],
     "Plant03": [
      3.85,
      5.22,
      7.18,
      8.22,
      3.25,
      7.48
     ],
     "Plant04": [
      8.64,
      8.45,
      7.41,
      8.7,
      8.37,
      7.1
     ],
     "Plant05": [
      7.46,
      8.05,
      7.23,
      8.38,
      5.95,
      7.58
     ],
     "Plant06": [
      3.26,
      8.11,
      4.57,
      7.84,
      3.46,
      2.4
     ]
    },
    "inp": {
     "Group": {
      "dispatches_total": 1051.0,
      "dispatches_delayed": 91.0
     },
     "A1": {
      "dispatches_total": 559.0,
      "dispatches_delayed": 61.0
     },
     "A2": {
      "dispatches_total": 492.0,
      "dispatches_delayed": 30.0
     },
     "Plant01": {
      "dispatches_total": 120.0,
      "dispatches_delayed": 9.0
     },
     "Plant02": {
      "dispatches_total": 225.0,
      "dispatches_delayed": 36.0
     },
     "Plant03": {
      "dispatches_total": 214.0,
      "dispatches_delayed": 16.0
     },
     "Plant04": {
      "dispatches_total": 169.0,
      "dispatches_delayed": 12.0
     },
     "Plant05": {
      "dispatches_total": 198.0,
      "dispatches_delayed": 15.0
     },
     "Plant06": {
      "dispatches_total": 125.0,
      "dispatches_delayed": 3.0
     }
    },
    "excl": {
     "A1": 6.1,
     "A2": 10.91,
     "Plant01": 11.85,
     "Plant02": 7.49,
     "Plant03": 13.04,
     "Plant04": 5.57,
     "Plant05": 5.1,
     "Plant06": 7.36
    },
    "level": "plant",
    "theme": "T3",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E05-ProductionCash",
     "P2-O02-ChangeReport",
     "P2-S11-CashExposure",
     "P2-S12-Signals",
     "P2-S12e-Signals"
    ]
   },
   "SIG-021": {
    "name": "Environmental violations",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Environmental violations",
    "basis": "Month",
    "better": "down",
    "target": 0,
    "fields": [
     "env_violations"
    ],
    "rules": {
     "env_violations": "SUM"
    },
    "val": {
     "Group": [
      1.0,
      0.0,
      1.0,
      0.0,
      0.0,
      0.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      1.0,
      0.0,
      1.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant01": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant02": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant03": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant04": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant05": [
      0.0,
      0.0,
      1.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant06": [
      1.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "env_violations": 0.0
     },
     "A1": {
      "env_violations": 0.0
     },
     "A2": {
      "env_violations": 0.0
     },
     "Plant01": {
      "env_violations": 0.0
     },
     "Plant02": {
      "env_violations": 0.0
     },
     "Plant03": {
      "env_violations": 0.0
     },
     "Plant04": {
      "env_violations": 0.0
     },
     "Plant05": {
      "env_violations": 0.0
     },
     "Plant06": {
      "env_violations": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 0.0,
     "Plant01": 0.0,
     "Plant02": 0.0,
     "Plant03": 0.0,
     "Plant04": 0.0,
     "Plant05": 0.0,
     "Plant06": 0.0
    },
    "level": "plant",
    "theme": "T3",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-S12-Signals",
     "P2-S12e-Signals"
    ]
   },
   "EHS-001": {
    "name": "TRIR",
    "unit": "per 200k h",
    "dp": 2,
    "div": 1,
    "formula": "Recordable injuries × 200,000 ÷ Hours worked",
    "basis": "Month",
    "better": "down",
    "target": 0.5,
    "fields": [
     "hours_worked",
     "recordable_injuries"
    ],
    "rules": {
     "hours_worked": "SUM",
     "recordable_injuries": "SUM"
    },
    "val": {
     "Group": [
      0.87,
      1.87,
      2.26,
      1.35,
      1.55,
      0.47
     ],
     "A1": [
      0.0,
      1.9,
      2.67,
      1.72,
      2.07,
      0.91
     ],
     "A2": [
      1.68,
      1.85,
      1.83,
      0.94,
      1.03,
      0.0
     ],
     "Plant01": [
      0.0,
      0.0,
      2.2,
      2.63,
      3.57,
      0.0
     ],
     "Plant02": [
      0.0,
      2.9,
      3.23,
      0.0,
      0.0,
      0.0
     ],
     "Plant03": [
      0.0,
      2.63,
      2.78,
      2.27,
      2.94,
      2.9
     ],
     "Plant04": [
      0.0,
      5.13,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant05": [
      4.55,
      0.0,
      6.25,
      3.08,
      0.0,
      0.0
     ],
     "Plant06": [
      0.0,
      0.0,
      0.0,
      0.0,
      3.51,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "hours_worked": 425000.0,
      "recordable_injuries": 1.0
     },
     "A1": {
      "hours_worked": 219000.0,
      "recordable_injuries": 1.0
     },
     "A2": {
      "hours_worked": 206000.0,
      "recordable_injuries": 0.0
     },
     "Plant01": {
      "hours_worked": 55000.0,
      "recordable_injuries": 0.0
     },
     "Plant02": {
      "hours_worked": 95000.0,
      "recordable_injuries": 0.0
     },
     "Plant03": {
      "hours_worked": 69000.0,
      "recordable_injuries": 1.0
     },
     "Plant04": {
      "hours_worked": 57000.0,
      "recordable_injuries": 0.0
     },
     "Plant05": {
      "hours_worked": 60000.0,
      "recordable_injuries": 0.0
     },
     "Plant06": {
      "hours_worked": 89000.0,
      "recordable_injuries": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 0.91,
     "Plant01": 1.22,
     "Plant02": 1.61,
     "Plant03": 0.0,
     "Plant04": 0.0,
     "Plant05": 0.0,
     "Plant06": 0.0
    },
    "level": "plant",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk",
     "P2-G08-CertGovernance",
     "P2-O05-Risk"
    ]
   },
   "EHS-002": {
    "name": "Severity incidents",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Severity incidents",
    "basis": "Month",
    "better": "down",
    "target": 0,
    "fields": [
     "severity_incidents"
    ],
    "rules": {
     "severity_incidents": "SUM"
    },
    "val": {
     "Group": [
      1.0,
      1.0,
      0.0,
      2.0,
      1.0,
      3.0
     ],
     "A1": [
      1.0,
      0.0,
      0.0,
      1.0,
      1.0,
      1.0
     ],
     "A2": [
      0.0,
      1.0,
      0.0,
      1.0,
      0.0,
      2.0
     ],
     "Plant01": [
      1.0,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0
     ],
     "Plant02": [
      0.0,
      0.0,
      0.0,
      1.0,
      1.0,
      0.0
     ],
     "Plant03": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant04": [
      0.0,
      0.0,
      0.0,
      1.0,
      0.0,
      0.0
     ],
     "Plant05": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0
     ],
     "Plant06": [
      0.0,
      1.0,
      0.0,
      0.0,
      0.0,
      1.0
     ]
    },
    "inp": {
     "Group": {
      "severity_incidents": 3.0
     },
     "A1": {
      "severity_incidents": 1.0
     },
     "A2": {
      "severity_incidents": 2.0
     },
     "Plant01": {
      "severity_incidents": 1.0
     },
     "Plant02": {
      "severity_incidents": 0.0
     },
     "Plant03": {
      "severity_incidents": 0.0
     },
     "Plant04": {
      "severity_incidents": 0.0
     },
     "Plant05": {
      "severity_incidents": 1.0
     },
     "Plant06": {
      "severity_incidents": 1.0
     }
    },
    "excl": {
     "A1": 2.0,
     "A2": 1.0,
     "Plant01": 0.0,
     "Plant02": 1.0,
     "Plant03": 1.0,
     "Plant04": 2.0,
     "Plant05": 1.0,
     "Plant06": 1.0
    },
    "level": "plant",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G01-Portfolio",
     "P2-G01b-PortfolioCertified",
     "P2-G07-Risk",
     "P2-O05-Risk"
    ]
   },
   "EHS-003": {
    "name": "Near misses",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Near misses",
    "basis": "Month",
    "better": null,
    "target": null,
    "fields": [
     "near_misses"
    ],
    "rules": {
     "near_misses": "SUM"
    },
    "val": {
     "Group": [
      39.0,
      46.0,
      44.0,
      32.0,
      42.0,
      41.0
     ],
     "A1": [
      21.0,
      18.0,
      22.0,
      19.0,
      19.0,
      20.0
     ],
     "A2": [
      18.0,
      28.0,
      22.0,
      13.0,
      23.0,
      21.0
     ],
     "Plant01": [
      10.0,
      4.0,
      10.0,
      9.0,
      6.0,
      9.0
     ],
     "Plant02": [
      6.0,
      4.0,
      4.0,
      6.0,
      5.0,
      2.0
     ],
     "Plant03": [
      5.0,
      10.0,
      8.0,
      4.0,
      8.0,
      9.0
     ],
     "Plant04": [
      5.0,
      8.0,
      11.0,
      4.0,
      2.0,
      3.0
     ],
     "Plant05": [
      3.0,
      12.0,
      6.0,
      3.0,
      11.0,
      9.0
     ],
     "Plant06": [
      10.0,
      8.0,
      5.0,
      6.0,
      10.0,
      9.0
     ]
    },
    "inp": {
     "Group": {
      "near_misses": 41.0
     },
     "A1": {
      "near_misses": 20.0
     },
     "A2": {
      "near_misses": 21.0
     },
     "Plant01": {
      "near_misses": 9.0
     },
     "Plant02": {
      "near_misses": 2.0
     },
     "Plant03": {
      "near_misses": 9.0
     },
     "Plant04": {
      "near_misses": 3.0
     },
     "Plant05": {
      "near_misses": 9.0
     },
     "Plant06": {
      "near_misses": 9.0
     }
    },
    "excl": {
     "A1": 21.0,
     "A2": 20.0,
     "Plant01": 11.0,
     "Plant02": 18.0,
     "Plant03": 11.0,
     "Plant04": 18.0,
     "Plant05": 12.0,
     "Plant06": 12.0
    },
    "level": "plant",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk",
     "P2-O05-Risk"
    ]
   },
   "EHS-004": {
    "name": "Critical safety incidents",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Critical safety incidents",
    "basis": "Month",
    "better": "down",
    "target": 0,
    "fields": [
     "critical_safety_incidents"
    ],
    "rules": {
     "critical_safety_incidents": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      1.0,
      0.0,
      0.0,
      1.0,
      0.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
      0.0
     ],
     "A2": [
      0.0,
      1.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant01": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant02": [
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
      0.0
     ],
     "Plant03": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant04": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant05": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant06": [
      0.0,
      1.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "critical_safety_incidents": 0.0
     },
     "A1": {
      "critical_safety_incidents": 0.0
     },
     "A2": {
      "critical_safety_incidents": 0.0
     },
     "Plant01": {
      "critical_safety_incidents": 0.0
     },
     "Plant02": {
      "critical_safety_incidents": 0.0
     },
     "Plant03": {
      "critical_safety_incidents": 0.0
     },
     "Plant04": {
      "critical_safety_incidents": 0.0
     },
     "Plant05": {
      "critical_safety_incidents": 0.0
     },
     "Plant06": {
      "critical_safety_incidents": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 0.0,
     "Plant01": 0.0,
     "Plant02": 0.0,
     "Plant03": 0.0,
     "Plant04": 0.0,
     "Plant05": 0.0,
     "Plant06": 0.0
    },
    "level": "plant",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk",
     "P2-O05-Risk"
    ]
   },
   "EHS-005": {
    "name": "Environmental excursions",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Environmental excursions",
    "basis": "Month",
    "better": "down",
    "target": 0,
    "fields": [
     "env_excursions"
    ],
    "rules": {
     "env_excursions": "SUM"
    },
    "val": {
     "Group": [
      2.0,
      1.0,
      1.0,
      3.0,
      1.0,
      2.0
     ],
     "A1": [
      1.0,
      1.0,
      1.0,
      2.0,
      0.0,
      1.0
     ],
     "A2": [
      1.0,
      0.0,
      0.0,
      1.0,
      1.0,
      1.0
     ],
     "Plant01": [
      0.0,
      0.0,
      1.0,
      1.0,
      0.0,
      0.0
     ],
     "Plant02": [
      0.0,
      0.0,
      0.0,
      1.0,
      0.0,
      1.0
     ],
     "Plant03": [
      1.0,
      1.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant04": [
      0.0,
      0.0,
      0.0,
      1.0,
      1.0,
      1.0
     ],
     "Plant05": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant06": [
      1.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "env_excursions": 2.0
     },
     "A1": {
      "env_excursions": 1.0
     },
     "A2": {
      "env_excursions": 1.0
     },
     "Plant01": {
      "env_excursions": 0.0
     },
     "Plant02": {
      "env_excursions": 1.0
     },
     "Plant03": {
      "env_excursions": 0.0
     },
     "Plant04": {
      "env_excursions": 1.0
     },
     "Plant05": {
      "env_excursions": 0.0
     },
     "Plant06": {
      "env_excursions": 0.0
     }
    },
    "excl": {
     "A1": 1.0,
     "A2": 1.0,
     "Plant01": 1.0,
     "Plant02": 0.0,
     "Plant03": 1.0,
     "Plant04": 0.0,
     "Plant05": 1.0,
     "Plant06": 1.0
    },
    "level": "plant",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk",
     "P2-O05-Risk"
    ]
   },
   "EHS-006": {
    "name": "Open EHS corrective actions",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Open EHS corrective actions",
    "basis": "Month",
    "better": "down",
    "target": null,
    "fields": [
     "ehs_ca_open"
    ],
    "rules": {
     "ehs_ca_open": "SUM"
    },
    "val": {
     "Group": [
      60.0,
      58.0,
      45.0,
      60.0,
      44.0,
      45.0
     ],
     "A1": [
      25.0,
      26.0,
      23.0,
      24.0,
      18.0,
      28.0
     ],
     "A2": [
      35.0,
      32.0,
      22.0,
      36.0,
      26.0,
      17.0
     ],
     "Plant01": [
      14.0,
      11.0,
      5.0,
      4.0,
      5.0,
      14.0
     ],
     "Plant02": [
      6.0,
      5.0,
      5.0,
      7.0,
      8.0,
      6.0
     ],
     "Plant03": [
      5.0,
      10.0,
      13.0,
      13.0,
      5.0,
      8.0
     ],
     "Plant04": [
      14.0,
      14.0,
      7.0,
      13.0,
      12.0,
      6.0
     ],
     "Plant05": [
      12.0,
      12.0,
      3.0,
      14.0,
      8.0,
      6.0
     ],
     "Plant06": [
      9.0,
      6.0,
      12.0,
      9.0,
      6.0,
      5.0
     ]
    },
    "inp": {
     "Group": {
      "ehs_ca_open": 45.0
     },
     "A1": {
      "ehs_ca_open": 28.0
     },
     "A2": {
      "ehs_ca_open": 17.0
     },
     "Plant01": {
      "ehs_ca_open": 14.0
     },
     "Plant02": {
      "ehs_ca_open": 6.0
     },
     "Plant03": {
      "ehs_ca_open": 8.0
     },
     "Plant04": {
      "ehs_ca_open": 6.0
     },
     "Plant05": {
      "ehs_ca_open": 6.0
     },
     "Plant06": {
      "ehs_ca_open": 5.0
     }
    },
    "excl": {
     "A1": 17.0,
     "A2": 28.0,
     "Plant01": 14.0,
     "Plant02": 22.0,
     "Plant03": 20.0,
     "Plant04": 11.0,
     "Plant05": 11.0,
     "Plant06": 12.0
    },
    "level": "plant",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk"
    ]
   },
   "EHS-007": {
    "name": "Overdue EHS actions",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Overdue EHS corrective actions",
    "basis": "Month",
    "better": "down",
    "target": 0,
    "fields": [
     "ehs_ca_overdue"
    ],
    "rules": {
     "ehs_ca_overdue": "SUM"
    },
    "val": {
     "Group": [
      12.0,
      14.0,
      8.0,
      12.0,
      3.0,
      9.0
     ],
     "A1": [
      7.0,
      5.0,
      4.0,
      5.0,
      1.0,
      7.0
     ],
     "A2": [
      5.0,
      9.0,
      4.0,
      7.0,
      2.0,
      2.0
     ],
     "Plant01": [
      4.0,
      2.0,
      1.0,
      1.0,
      0.0,
      4.0
     ],
     "Plant02": [
      2.0,
      1.0,
      0.0,
      0.0,
      1.0,
      1.0
     ],
     "Plant03": [
      1.0,
      2.0,
      3.0,
      4.0,
      0.0,
      2.0
     ],
     "Plant04": [
      4.0,
      4.0,
      1.0,
      2.0,
      1.0,
      1.0
     ],
     "Plant05": [
      0.0,
      3.0,
      1.0,
      4.0,
      1.0,
      0.0
     ],
     "Plant06": [
      1.0,
      2.0,
      2.0,
      1.0,
      0.0,
      1.0
     ]
    },
    "inp": {
     "Group": {
      "ehs_ca_overdue": 9.0
     },
     "A1": {
      "ehs_ca_overdue": 7.0
     },
     "A2": {
      "ehs_ca_overdue": 2.0
     },
     "Plant01": {
      "ehs_ca_overdue": 4.0
     },
     "Plant02": {
      "ehs_ca_overdue": 1.0
     },
     "Plant03": {
      "ehs_ca_overdue": 2.0
     },
     "Plant04": {
      "ehs_ca_overdue": 1.0
     },
     "Plant05": {
      "ehs_ca_overdue": 0.0
     },
     "Plant06": {
      "ehs_ca_overdue": 1.0
     }
    },
    "excl": {
     "A1": 2.0,
     "A2": 7.0,
     "Plant01": 3.0,
     "Plant02": 6.0,
     "Plant03": 5.0,
     "Plant04": 1.0,
     "Plant05": 2.0,
     "Plant06": 1.0
    },
    "level": "plant",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk",
     "P2-O05-Risk"
    ]
   },
   "EHS-009": {
    "name": "EHS investigation completion",
    "unit": "%",
    "dp": 0,
    "div": 1,
    "formula": "EHS investigations completed ÷ EHS investigations due × 100 (100 if none due)",
    "basis": "Month",
    "better": "up",
    "target": 100,
    "fields": [
     "investigations_due",
     "investigations_completed"
    ],
    "rules": {
     "investigations_due": "SUM",
     "investigations_completed": "SUM"
    },
    "val": {
     "Group": [
      66.7,
      100.0,
      88.9,
      85.7,
      90.9,
      75.0
     ],
     "A1": [
      75.0,
      100.0,
      75.0,
      100.0,
      66.7,
      75.0
     ],
     "A2": [
      60.0,
      100.0,
      100.0,
      66.7,
      100.0,
      100.0
     ],
     "Plant01": [
      100.0,
      100.0,
      100.0,
      100.0,
      100.0,
      100.0
     ],
     "Plant02": [
      100.0,
      100.0,
      50.0,
      100.0,
      100.0,
      50.0
     ],
     "Plant03": [
      0.0,
      100.0,
      100.0,
      100.0,
      50.0,
      100.0
     ],
     "Plant04": [
      50.0,
      100.0,
      100.0,
      100.0,
      100.0,
      100.0
     ],
     "Plant05": [
      0.0,
      100.0,
      100.0,
      100.0,
      100.0,
      100.0
     ],
     "Plant06": [
      100.0,
      100.0,
      100.0,
      66.7,
      100.0,
      100.0
     ]
    },
    "inp": {
     "Group": {
      "investigations_due": 4.0,
      "investigations_completed": 3.0
     },
     "A1": {
      "investigations_due": 4.0,
      "investigations_completed": 3.0
     },
     "A2": {
      "investigations_due": 0.0,
      "investigations_completed": 0.0
     },
     "Plant01": {
      "investigations_due": 2.0,
      "investigations_completed": 2.0
     },
     "Plant02": {
      "investigations_due": 2.0,
      "investigations_completed": 1.0
     },
     "Plant03": {
      "investigations_due": 0.0,
      "investigations_completed": 0.0
     },
     "Plant04": {
      "investigations_due": 0.0,
      "investigations_completed": 0.0
     },
     "Plant05": {
      "investigations_due": 0.0,
      "investigations_completed": 0.0
     },
     "Plant06": {
      "investigations_due": 0.0,
      "investigations_completed": 0.0
     }
    },
    "excl": {
     "A1": 100.0,
     "A2": 75.0,
     "Plant01": 50.0,
     "Plant02": 100.0,
     "Plant03": 75.0,
     "Plant04": 100.0,
     "Plant05": 100.0,
     "Plant06": 100.0
    },
    "level": "plant",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk"
    ]
   },
   "REG-006": {
    "name": "Licence or permit expiry clock",
    "unit": "days",
    "dp": 0,
    "div": 1,
    "formula": "Days to permit expiry (lowest plant)",
    "basis": "Month",
    "better": "up",
    "target": 90,
    "fields": [
     "permit_days_to_expiry"
    ],
    "rules": {
     "permit_days_to_expiry": "MIN"
    },
    "val": {
     "Group": [
      215.0,
      185.0,
      155.0,
      125.0,
      95.0,
      65.0
     ],
     "A1": [
      215.0,
      185.0,
      155.0,
      125.0,
      95.0,
      65.0
     ],
     "A2": [
      252.0,
      222.0,
      192.0,
      162.0,
      132.0,
      102.0
     ],
     "Plant01": [
      311.0,
      281.0,
      251.0,
      221.0,
      191.0,
      161.0
     ],
     "Plant02": [
      215.0,
      185.0,
      155.0,
      125.0,
      95.0,
      65.0
     ],
     "Plant03": [
      218.0,
      188.0,
      158.0,
      128.0,
      98.0,
      68.0
     ],
     "Plant04": [
      369.0,
      339.0,
      309.0,
      279.0,
      249.0,
      219.0
     ],
     "Plant05": [
      252.0,
      222.0,
      192.0,
      162.0,
      132.0,
      102.0
     ],
     "Plant06": [
      260.0,
      230.0,
      200.0,
      170.0,
      140.0,
      110.0
     ]
    },
    "inp": {
     "Group": {
      "permit_days_to_expiry": 65.0
     },
     "A1": {
      "permit_days_to_expiry": 65.0
     },
     "A2": {
      "permit_days_to_expiry": 102.0
     },
     "Plant01": {
      "permit_days_to_expiry": 161.0
     },
     "Plant02": {
      "permit_days_to_expiry": 65.0
     },
     "Plant03": {
      "permit_days_to_expiry": 68.0
     },
     "Plant04": {
      "permit_days_to_expiry": 219.0
     },
     "Plant05": {
      "permit_days_to_expiry": 102.0
     },
     "Plant06": {
      "permit_days_to_expiry": 110.0
     }
    },
    "excl": {
     "A1": 102.0,
     "A2": 65.0,
     "Plant01": 65.0,
     "Plant02": 68.0,
     "Plant03": 65.0,
     "Plant04": 102.0,
     "Plant05": 110.0,
     "Plant06": 102.0
    },
    "level": "plant",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-O05-Risk"
    ]
   },
   "OPS-005": {
    "name": "Capacity utilisation (same measure as OPS-003)",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Good output ÷ Installed capacity × 100",
    "basis": "Month",
    "better": "up",
    "target": 85,
    "fields": [
     "installed_capacity_t",
     "good_output_t"
    ],
    "rules": {
     "installed_capacity_t": "SUM",
     "good_output_t": "SUM"
    },
    "val": {
     "Group": [
      83.98,
      76.21,
      79.77,
      82.31,
      78.87,
      83.44
     ],
     "A1": [
      80.9,
      73.48,
      76.11,
      78.51,
      76.19,
      79.8
     ],
     "A2": [
      87.44,
      79.28,
      83.9,
      86.58,
      81.88,
      87.55
     ],
     "Plant01": [
      88.22,
      79.28,
      82.19,
      81.62,
      85.81,
      82.92
     ],
     "Plant02": [
      72.41,
      68.9,
      67.53,
      69.54,
      61.62,
      70.02
     ],
     "Plant03": [
      83.55,
      73.78,
      79.59,
      84.15,
      82.56,
      86.09
     ],
     "Plant04": [
      84.43,
      80.9,
      82.34,
      82.36,
      82.25,
      89.48
     ],
     "Plant05": [
      87.71,
      79.83,
      83.35,
      89.81,
      81.04,
      89.96
     ],
     "Plant06": [
      89.51,
      77.27,
      85.85,
      85.77,
      82.68,
      82.87
     ]
    },
    "inp": {
     "Group": {
      "installed_capacity_t": 749808.0,
      "good_output_t": 625667.0
     },
     "A1": {
      "installed_capacity_t": 397008.0,
      "good_output_t": 316798.0
     },
     "A2": {
      "installed_capacity_t": 352800.0,
      "good_output_t": 308869.0
     },
     "Plant01": {
      "installed_capacity_t": 98712.0,
      "good_output_t": 81854.0
     },
     "Plant02": {
      "installed_capacity_t": 136008.0,
      "good_output_t": 95233.0
     },
     "Plant03": {
      "installed_capacity_t": 162288.0,
      "good_output_t": 139711.0
     },
     "Plant04": {
      "installed_capacity_t": 91296.0,
      "good_output_t": 81694.0
     },
     "Plant05": {
      "installed_capacity_t": 147600.0,
      "good_output_t": 132787.0
     },
     "Plant06": {
      "installed_capacity_t": 113904.0,
      "good_output_t": 94388.0
     }
    },
    "excl": {
     "A1": 87.55,
     "A2": 79.8,
     "Plant01": 78.76,
     "Plant02": 84.89,
     "Plant03": 75.45,
     "Plant04": 86.87,
     "Plant05": 85.81,
     "Plant06": 89.78
    },
    "level": "plant",
    "theme": "T5",
    "source": "alias",
    "aliasOf": "OPS-003",
    "screens": [
     "P2-E01-EntityHome",
     "P2-G01-Portfolio",
     "P2-G01b-PortfolioCertified",
     "P2-O01-EnterpriseHealth",
     "P2-O09-Operations"
    ]
   },
   "OPS-006": {
    "name": "OEE · Group weighted (same measure as PLT-002)",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Good output ÷ Ideal output × 100 (weighted by output, not an average of plants)",
    "basis": "Month",
    "better": "up",
    "target": 80,
    "fields": [
     "ideal_output_t",
     "good_output_t"
    ],
    "rules": {
     "ideal_output_t": "SUM",
     "good_output_t": "SUM"
    },
    "val": {
     "Group": [
      84.74,
      81.53,
      80.23,
      82.78,
      82.21,
      84.07
     ],
     "A1": [
      81.65,
      78.4,
      76.22,
      79.11,
      78.73,
      80.21
     ],
     "A2": [
      88.21,
      85.07,
      84.77,
      86.9,
      86.21,
      88.44
     ],
     "Plant01": [
      88.97,
      79.28,
      82.19,
      81.95,
      85.81,
      83.97
     ],
     "Plant02": [
      72.61,
      74.3,
      67.72,
      70.2,
      68.01,
      70.31
     ],
     "Plant03": [
      84.85,
      81.32,
      79.7,
      84.83,
      82.56,
      86.21
     ],
     "Plant04": [
      84.79,
      80.9,
      82.92,
      82.69,
      90.12,
      89.73
     ],
     "Plant05": [
      88.94,
      88.12,
      84.17,
      89.81,
      86.76,
      91.23
     ],
     "Plant06": [
      90.01,
      84.8,
      87.06,
      86.47,
      82.68,
      83.8
     ]
    },
    "inp": {
     "Group": {
      "ideal_output_t": 744212.0,
      "good_output_t": 625667.0
     },
     "A1": {
      "ideal_output_t": 394982.0,
      "good_output_t": 316798.0
     },
     "A2": {
      "ideal_output_t": 349230.0,
      "good_output_t": 308869.0
     },
     "Plant01": {
      "ideal_output_t": 97478.0,
      "good_output_t": 81854.0
     },
     "Plant02": {
      "ideal_output_t": 135441.0,
      "good_output_t": 95233.0
     },
     "Plant03": {
      "ideal_output_t": 162063.0,
      "good_output_t": 139711.0
     },
     "Plant04": {
      "ideal_output_t": 91042.0,
      "good_output_t": 81694.0
     },
     "Plant05": {
      "ideal_output_t": 145550.0,
      "good_output_t": 132787.0
     },
     "Plant06": {
      "ideal_output_t": 112638.0,
      "good_output_t": 94388.0
     }
    },
    "excl": {
     "A1": 88.44,
     "A2": 80.21,
     "Plant01": 78.97,
     "Plant02": 85.37,
     "Plant03": 76.03,
     "Plant04": 87.99,
     "Plant05": 86.45,
     "Plant06": 90.65
    },
    "level": "plant",
    "theme": "T5",
    "source": "alias",
    "aliasOf": "PLT-002",
    "screens": [
     "P2-O09-Operations"
    ]
   },
   "OPS-002": {
    "name": "Sales vs plan",
    "unit": "% of plan",
    "dp": 1,
    "div": 1,
    "formula": "Sales volume ÷ Planned sales volume × 100",
    "basis": "Month",
    "better": "up",
    "target": 100,
    "fields": [
     "sales_t",
     "planned_sales_t"
    ],
    "rules": {
     "sales_t": "SUM",
     "planned_sales_t": "SUM"
    },
    "val": {
     "Group": [
      95.35,
      91.65,
      88.97,
      93.98,
      92.4,
      95.23
     ],
     "A1": [
      91.99,
      87.48,
      84.91,
      90.12,
      88.9,
      89.21
     ],
     "A2": [
      99.12,
      96.44,
      93.49,
      98.18,
      96.44,
      102.04
     ],
     "Plant01": [
      97.93,
      92.79,
      88.43,
      96.65,
      95.27,
      92.8
     ],
     "Plant02": [
      85.72,
      81.55,
      77.93,
      79.14,
      79.23,
      77.61
     ],
     "Plant03": [
      93.4,
      89.22,
      88.6,
      95.37,
      92.1,
      97.05
     ],
     "Plant04": [
      98.03,
      90.46,
      89.92,
      94.14,
      101.29,
      105.36
     ],
     "Plant05": [
      96.86,
      99.77,
      93.65,
      100.65,
      97.41,
      102.97
     ],
     "Plant06": [
      103.0,
      97.48,
      96.16,
      98.09,
      91.71,
      98.14
     ]
    },
    "inp": {
     "Group": {
      "sales_t": 623746.0,
      "planned_sales_t": 654973.0
     },
     "A1": {
      "sales_t": 310047.0,
      "planned_sales_t": 347556.0
     },
     "A2": {
      "sales_t": 313699.0,
      "planned_sales_t": 307417.0
     },
     "Plant01": {
      "sales_t": 79865.0,
      "planned_sales_t": 86061.0
     },
     "Plant02": {
      "sales_t": 94217.0,
      "planned_sales_t": 121397.0
     },
     "Plant03": {
      "sales_t": 135965.0,
      "planned_sales_t": 140098.0
     },
     "Plant04": {
      "sales_t": 83171.0,
      "planned_sales_t": 78942.0
     },
     "Plant05": {
      "sales_t": 134472.0,
      "planned_sales_t": 130597.0
     },
     "Plant06": {
      "sales_t": 96056.0,
      "planned_sales_t": 97878.0
     }
    },
    "excl": {
     "A1": 102.04,
     "A2": 89.21,
     "Plant01": 88.03,
     "Plant02": 95.43,
     "Plant03": 83.91,
     "Plant04": 100.9,
     "Plant05": 101.36,
     "Plant06": 103.87
    },
    "level": "plant",
    "theme": "T1",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E01-EntityHome",
     "P2-E08-CertWorkbench",
     "P2-G01-Portfolio",
     "P2-G01b-PortfolioCertified",
     "P2-G03-Financial",
     "P2-O01-EnterpriseHealth",
     "P2-X-States",
     "P3-L-LargeDisplay"
    ]
   },
   "OPS-004": {
    "name": "Sales vs plan · Group (same measure as OPS-002)",
    "unit": "% of plan",
    "dp": 1,
    "div": 1,
    "formula": "Sales volume ÷ Planned sales volume × 100",
    "basis": "Month",
    "better": "up",
    "target": 100,
    "fields": [
     "sales_t",
     "planned_sales_t"
    ],
    "rules": {
     "sales_t": "SUM",
     "planned_sales_t": "SUM"
    },
    "val": {
     "Group": [
      95.35,
      91.65,
      88.97,
      93.98,
      92.4,
      95.23
     ],
     "A1": [
      91.99,
      87.48,
      84.91,
      90.12,
      88.9,
      89.21
     ],
     "A2": [
      99.12,
      96.44,
      93.49,
      98.18,
      96.44,
      102.04
     ],
     "Plant01": [
      97.93,
      92.79,
      88.43,
      96.65,
      95.27,
      92.8
     ],
     "Plant02": [
      85.72,
      81.55,
      77.93,
      79.14,
      79.23,
      77.61
     ],
     "Plant03": [
      93.4,
      89.22,
      88.6,
      95.37,
      92.1,
      97.05
     ],
     "Plant04": [
      98.03,
      90.46,
      89.92,
      94.14,
      101.29,
      105.36
     ],
     "Plant05": [
      96.86,
      99.77,
      93.65,
      100.65,
      97.41,
      102.97
     ],
     "Plant06": [
      103.0,
      97.48,
      96.16,
      98.09,
      91.71,
      98.14
     ]
    },
    "inp": {
     "Group": {
      "sales_t": 623746.0,
      "planned_sales_t": 654973.0
     },
     "A1": {
      "sales_t": 310047.0,
      "planned_sales_t": 347556.0
     },
     "A2": {
      "sales_t": 313699.0,
      "planned_sales_t": 307417.0
     },
     "Plant01": {
      "sales_t": 79865.0,
      "planned_sales_t": 86061.0
     },
     "Plant02": {
      "sales_t": 94217.0,
      "planned_sales_t": 121397.0
     },
     "Plant03": {
      "sales_t": 135965.0,
      "planned_sales_t": 140098.0
     },
     "Plant04": {
      "sales_t": 83171.0,
      "planned_sales_t": 78942.0
     },
     "Plant05": {
      "sales_t": 134472.0,
      "planned_sales_t": 130597.0
     },
     "Plant06": {
      "sales_t": 96056.0,
      "planned_sales_t": 97878.0
     }
    },
    "excl": {
     "A1": 102.04,
     "A2": 89.21,
     "Plant01": 88.03,
     "Plant02": 95.43,
     "Plant03": 83.91,
     "Plant04": 100.9,
     "Plant05": 101.36,
     "Plant06": 103.87
    },
    "level": "plant",
    "theme": "T5",
    "source": "alias",
    "aliasOf": "OPS-002",
    "screens": [
     "P2-O01-EnterpriseHealth"
    ]
   },
   "CST-004": {
    "name": "Power cost per tonne",
    "unit": "₹/t",
    "dp": 0,
    "div": 1,
    "formula": "Power cost × 1000 ÷ Good output",
    "basis": "Month",
    "better": "down",
    "target": 180,
    "fields": [
     "good_output_t",
     "power_cost_k"
    ],
    "rules": {
     "good_output_t": "SUM",
     "power_cost_k": "SUM"
    },
    "val": {
     "Group": [
      186.8,
      185.8,
      191.6,
      171.7,
      187.7,
      174.3
     ],
     "A1": [
      193.6,
      184.8,
      181.0,
      161.7,
      197.3,
      176.4
     ],
     "A2": [
      179.7,
      186.8,
      202.4,
      182.0,
      177.6,
      172.1
     ],
     "Plant01": [
      174.2,
      213.6,
      206.6,
      136.4,
      183.4,
      164.8
     ],
     "Plant02": [
      203.5,
      190.4,
      190.6,
      220.5,
      198.8,
      215.9
     ],
     "Plant03": [
      199.0,
      161.7,
      158.2,
      135.8,
      205.2,
      156.3
     ],
     "Plant04": [
      156.2,
      164.8,
      176.2,
      176.6,
      182.6,
      198.1
     ],
     "Plant05": [
      190.4,
      194.1,
      215.0,
      197.3,
      159.6,
      168.2
     ],
     "Plant06": [
      183.9,
      195.5,
      206.7,
      165.3,
      196.6,
      155.2
     ]
    },
    "inp": {
     "Group": {
      "good_output_t": 625667.0,
      "power_cost_k": 109048.8
     },
     "A1": {
      "good_output_t": 316798.0,
      "power_cost_k": 55885.9
     },
     "A2": {
      "good_output_t": 308869.0,
      "power_cost_k": 53162.9
     },
     "Plant01": {
      "good_output_t": 81854.0,
      "power_cost_k": 13488.8
     },
     "Plant02": {
      "good_output_t": 95233.0,
      "power_cost_k": 20557.3
     },
     "Plant03": {
      "good_output_t": 139711.0,
      "power_cost_k": 21839.8
     },
     "Plant04": {
      "good_output_t": 81694.0,
      "power_cost_k": 16180.0
     },
     "Plant05": {
      "good_output_t": 132787.0,
      "power_cost_k": 22330.4
     },
     "Plant06": {
      "good_output_t": 94388.0,
      "power_cost_k": 14652.5
     }
    },
    "excl": {
     "A1": 172.1,
     "A2": 176.4,
     "Plant01": 180.5,
     "Plant02": 159.4,
     "Plant03": 192.3,
     "Plant04": 162.8,
     "Plant05": 175.1,
     "Plant06": 179.6
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-O09-Operations"
    ]
   },
   "FIN-001": {
    "name": "EBITDA YTD",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "Sum of monthly EBITDA since April ÷ 1000",
    "basis": "Year to date",
    "better": "up",
    "target": null,
    "fields": [
     "ebitda_k (YTD)"
    ],
    "rules": {
     "ebitda_k (YTD)": "SUM"
    },
    "val": {
     "Group": [
      321.96,
      574.52,
      816.46,
      1114.42,
      1363.11,
      1760.09
     ],
     "A1": [
      167.86,
      235.61,
      369.97,
      548.35,
      689.12,
      890.55
     ],
     "A2": [
      154.11,
      338.91,
      446.49,
      566.07,
      674.0,
      869.54
     ]
    },
    "inp": {
     "Group": {
      "ebitda_k (YTD)": 1760093.2
     },
     "A1": {
      "ebitda_k (YTD)": 890553.8
     },
     "A2": {
      "ebitda_k (YTD)": 869539.4
     }
    },
    "excl": {
     "A1": 869.54,
     "A2": 890.55
    },
    "level": "entity",
    "theme": "T1",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E01-EntityHome",
     "P2-E11-Financial",
     "P2-G01-Portfolio",
     "P2-G01b-PortfolioCertified",
     "P2-G02-EntityComparison",
     "P2-G03-Financial",
     "P2-G08-CertGovernance",
     "P2-G08o-OwnerTrust",
     "P2-O01-EnterpriseHealth",
     "P2-X-States",
     "P3-L-LargeDisplay"
    ]
   },
   "FIN-002": {
    "name": "EBIT YTD",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "Sum of monthly EBIT since April ÷ 1000",
    "basis": "Year to date",
    "better": "up",
    "target": null,
    "fields": [
     "ebit_k (YTD)"
    ],
    "rules": {
     "ebit_k (YTD)": "SUM"
    },
    "val": {
     "Group": [
      232.68,
      397.26,
      550.73,
      760.11,
      920.64,
      1228.14
     ],
     "A1": [
      121.21,
      142.8,
      230.62,
      362.0,
      455.94,
      610.05
     ],
     "A2": [
      111.48,
      254.46,
      320.11,
      398.11,
      464.7,
      618.1
     ]
    },
    "inp": {
     "Group": {
      "ebit_k (YTD)": 1228143.4
     },
     "A1": {
      "ebit_k (YTD)": 610048.3
     },
     "A2": {
      "ebit_k (YTD)": 618095.1
     }
    },
    "excl": {
     "A1": 618.1,
     "A2": 610.05
    },
    "level": "entity",
    "theme": "T1",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E01-EntityHome",
     "P2-E11-Financial",
     "P2-G01-Portfolio",
     "P2-G01b-PortfolioCertified",
     "P2-G03-Financial",
     "P2-O01-EnterpriseHealth",
     "P2-X-States",
     "P3-L-LargeDisplay"
    ]
   },
   "FIN-003": {
    "name": "Revenue YTD",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "Sum of monthly Revenue since April ÷ 1000",
    "basis": "Year to date",
    "better": "up",
    "target": null,
    "fields": [
     "revenue_k (YTD)"
    ],
    "rules": {
     "revenue_k (YTD)": "SUM"
    },
    "val": {
     "Group": [
      2349.26,
      4568.1,
      6803.75,
      9188.45,
      11475.48,
      13811.3
     ],
     "A1": [
      1196.06,
      2321.97,
      3444.91,
      4634.59,
      5816.6,
      6972.32
     ],
     "A2": [
      1153.2,
      2246.14,
      3358.84,
      4553.86,
      5658.88,
      6838.98
     ],
     "Plant01": [
      329.49,
      638.72,
      939.45,
      1260.87,
      1591.85,
      1892.75
     ],
     "Plant02": [
      367.58,
      723.37,
      1064.47,
      1419.48,
      1743.52,
      2089.58
     ],
     "Plant03": [
      498.99,
      959.87,
      1440.99,
      1954.25,
      2481.23,
      2989.99
     ],
     "Plant04": [
      292.75,
      578.96,
      858.14,
      1149.31,
      1439.03,
      1749.63
     ],
     "Plant05": [
      474.58,
      939.19,
      1402.46,
      1928.24,
      2384.46,
      2890.84
     ],
     "Plant06": [
      385.87,
      727.98,
      1098.24,
      1476.31,
      1835.4,
      2198.51
     ]
    },
    "inp": {
     "Group": {
      "revenue_k (YTD)": 13811300.2
     },
     "A1": {
      "revenue_k (YTD)": 6972323.4
     },
     "A2": {
      "revenue_k (YTD)": 6838976.8
     },
     "Plant01": {
      "revenue_k (YTD)": 1892753.0
     },
     "Plant02": {
      "revenue_k (YTD)": 2089580.2
     },
     "Plant03": {
      "revenue_k (YTD)": 2989990.2
     },
     "Plant04": {
      "revenue_k (YTD)": 1749627.1
     },
     "Plant05": {
      "revenue_k (YTD)": 2890843.4
     },
     "Plant06": {
      "revenue_k (YTD)": 2198506.3
     }
    },
    "excl": {
     "A1": 6838.98,
     "A2": 6972.32,
     "Plant01": 5079.57,
     "Plant02": 4882.74,
     "Plant03": 3982.33,
     "Plant04": 5089.35,
     "Plant05": 3948.13,
     "Plant06": 4640.47
    },
    "level": "plant",
    "theme": "T1",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E01-EntityHome",
     "P2-E11-Financial",
     "P2-G01-Portfolio",
     "P2-G01b-PortfolioCertified",
     "P2-G02-EntityComparison",
     "P2-G03-Financial",
     "P2-G08-CertGovernance",
     "P2-O01-EnterpriseHealth",
     "P2-X-States",
     "P3-L-LargeDisplay"
    ]
   },
   "FIN-004": {
    "name": "Free cash flow YTD",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "Sum of monthly Free cash flow since April ÷ 1000",
    "basis": "Year to date",
    "better": "up",
    "target": null,
    "fields": [
     "fcf_k (YTD)"
    ],
    "rules": {
     "fcf_k (YTD)": "SUM"
    },
    "val": {
     "Group": [
      65.96,
      311.68,
      327.88,
      372.88,
      448.76,
      606.18
     ],
     "A1": [
      23.02,
      222.88,
      221.14,
      240.61,
      243.31,
      337.63
     ],
     "A2": [
      42.93,
      88.8,
      106.74,
      132.27,
      205.45,
      268.55
     ]
    },
    "inp": {
     "Group": {
      "fcf_k (YTD)": 606183.8
     },
     "A1": {
      "fcf_k (YTD)": 337630.8
     },
     "A2": {
      "fcf_k (YTD)": 268553.0
     }
    },
    "excl": {
     "A1": 268.55,
     "A2": 337.63
    },
    "level": "entity",
    "theme": "T1",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E01-EntityHome",
     "P2-E11-Financial",
     "P2-G01-Portfolio",
     "P2-G01b-PortfolioCertified",
     "P2-G03-Financial",
     "P2-O01-EnterpriseHealth",
     "P2-O03-CashLiquidity",
     "P2-X-States",
     "P3-L-LargeDisplay"
    ]
   },
   "FIN-005": {
    "name": "ROCE, annualised",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "EBIT since April × 12 ÷ months elapsed ÷ Capital employed × 100",
    "basis": "Year to date",
    "better": "up",
    "target": 12,
    "fields": [
     "capital_employed_k",
     "ebit_k (YTD)"
    ],
    "rules": {
     "capital_employed_k": "SUM",
     "ebit_k (YTD)": "SUM"
    },
    "val": {
     "Group": [
      13.42,
      11.41,
      10.51,
      10.83,
      10.46,
      11.58
     ],
     "A1": [
      13.47,
      7.9,
      8.47,
      9.94,
      9.97,
      11.08
     ],
     "A2": [
      13.38,
      15.21,
      12.7,
      11.8,
      10.98,
      12.12
     ]
    },
    "inp": {
     "Group": {
      "capital_employed_k": 21216000.0,
      "ebit_k (YTD)": 1228143.4
     },
     "A1": {
      "capital_employed_k": 11016000.0,
      "ebit_k (YTD)": 610048.3
     },
     "A2": {
      "capital_employed_k": 10200000.0,
      "ebit_k (YTD)": 618095.1
     }
    },
    "excl": {
     "A1": 12.12,
     "A2": 11.08
    },
    "level": "entity",
    "theme": "T1",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E01-EntityHome",
     "P2-E11-Financial",
     "P2-G01-Portfolio",
     "P2-G01b-PortfolioCertified",
     "P2-G03-Financial",
     "P2-O01-EnterpriseHealth",
     "P2-X-States",
     "P3-L-LargeDisplay"
    ]
   },
   "FIN-006": {
    "name": "Net debt",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "(Gross debt − Cash) ÷ 1000",
    "basis": "Month end",
    "better": "down",
    "target": null,
    "fields": [
     "net_debt_k"
    ],
    "rules": {
     "net_debt_k": "SUM"
    },
    "val": {
     "Group": [
      7000.0,
      6930.0,
      6860.0,
      6790.0,
      6720.0,
      6650.0
     ],
     "A1": [
      3800.0,
      3762.0,
      3724.0,
      3686.0,
      3648.0,
      3610.0
     ],
     "A2": [
      3200.0,
      3168.0,
      3136.0,
      3104.0,
      3072.0,
      3040.0
     ]
    },
    "inp": {
     "Group": {
      "net_debt_k": 6650000.0
     },
     "A1": {
      "net_debt_k": 3610000.0
     },
     "A2": {
      "net_debt_k": 3040000.0
     }
    },
    "excl": {
     "A1": 3040.0,
     "A2": 3610.0
    },
    "level": "entity",
    "theme": "T1",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G01-Portfolio",
     "P2-G01b-PortfolioCertified",
     "P2-G03-Financial",
     "P2-O01-EnterpriseHealth",
     "P2-O03-CashLiquidity",
     "P2-X-States",
     "P3-L-LargeDisplay"
    ]
   },
   "FIN-007": {
    "name": "Shareholder-value indicator (economic profit YTD)",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "(EBIT since April × (1 − Tax rate) − Capital employed × Cost of capital × months elapsed ÷ 12) ÷ 1000",
    "basis": "Year to date",
    "better": "up",
    "target": 0,
    "fields": [
     "capital_employed_k",
     "ebit_k (YTD)"
    ],
    "rules": {
     "capital_employed_k": "SUM",
     "ebit_k (YTD)": "SUM"
    },
    "val": {
     "Group": [
      9.85,
      -32.71,
      -84.91,
      -96.49,
      -146.03,
      -86.65
     ],
     "A1": [
      5.41,
      -64.58,
      -85.59,
      -74.61,
      -92.38,
      -65.72
     ],
     "A2": [
      4.44,
      31.87,
      0.68,
      -21.88,
      -53.64,
      -20.93
     ]
    },
    "inp": {
     "Group": {
      "capital_employed_k": 21216000.0,
      "ebit_k (YTD)": 1228143.4
     },
     "A1": {
      "capital_employed_k": 11016000.0,
      "ebit_k (YTD)": 610048.3
     },
     "A2": {
      "capital_employed_k": 10200000.0,
      "ebit_k (YTD)": 618095.1
     }
    },
    "excl": {
     "A1": -20.93,
     "A2": -65.72
    },
    "level": "entity",
    "theme": "T1",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G03-Financial",
     "P2-G08-CertGovernance",
     "P2-O01-EnterpriseHealth",
     "P2-X-States",
     "P3-L-LargeDisplay"
    ]
   },
   "FIN-008": {
    "name": "FCF conversion (FCF ÷ EBITDA)",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Free cash flow since April ÷ EBITDA since April × 100",
    "basis": "Year to date",
    "better": "up",
    "target": 35,
    "fields": [
     "ebitda_k (YTD)",
     "fcf_k (YTD)"
    ],
    "rules": {
     "ebitda_k (YTD)": "SUM",
     "fcf_k (YTD)": "SUM"
    },
    "val": {
     "Group": [
      20.49,
      54.25,
      40.16,
      33.46,
      32.92,
      34.44
     ],
     "A1": [
      13.72,
      94.6,
      59.77,
      43.88,
      35.31,
      37.91
     ],
     "A2": [
      27.86,
      26.2,
      23.91,
      23.37,
      30.48,
      30.88
     ]
    },
    "inp": {
     "Group": {
      "ebitda_k (YTD)": 1760093.2,
      "fcf_k (YTD)": 606183.8
     },
     "A1": {
      "ebitda_k (YTD)": 890553.8,
      "fcf_k (YTD)": 337630.8
     },
     "A2": {
      "ebitda_k (YTD)": 869539.4,
      "fcf_k (YTD)": 268553.0
     }
    },
    "excl": {
     "A1": 30.88,
     "A2": 37.91
    },
    "level": "entity",
    "theme": "T1",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G03-Financial"
    ]
   },
   "CSH-001": {
    "name": "Cash position",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "Cash ÷ 1000",
    "basis": "Month end",
    "better": "up",
    "target": null,
    "fields": [
     "cash_k"
    ],
    "rules": {
     "cash_k": "SUM"
    },
    "val": {
     "Group": [
      2099.11,
      2017.66,
      1986.19,
      2142.07,
      2027.31,
      2141.82
     ],
     "A1": [
      936.18,
      927.73,
      911.17,
      922.97,
      890.5,
      967.08
     ],
     "A2": [
      1162.93,
      1089.93,
      1075.02,
      1219.1,
      1136.81,
      1174.74
     ]
    },
    "inp": {
     "Group": {
      "cash_k": 2141822.4
     },
     "A1": {
      "cash_k": 967082.6
     },
     "A2": {
      "cash_k": 1174739.8
     }
    },
    "excl": {
     "A1": 1174.74,
     "A2": 967.08
    },
    "level": "entity",
    "theme": "T4",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E05-ProductionCash",
     "P2-G04-CashWC",
     "P2-G08-CertGovernance",
     "P2-G08o-OwnerTrust",
     "P2-O03-CashLiquidity"
    ]
   },
   "CSH-002": {
    "name": "Cash released YTD",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "Sum of cash released since April ÷ 1000",
    "basis": "Year to date",
    "better": "up",
    "target": null,
    "fields": [
     "cash_released_k (YTD)"
    ],
    "rules": {
     "cash_released_k (YTD)": "SUM"
    },
    "val": {
     "Group": [
      3.83,
      7.49,
      11.28,
      14.88,
      18.62,
      22.03
     ],
     "A1": [
      0.52,
      1.33,
      2.07,
      2.76,
      3.36,
      4.2
     ],
     "A2": [
      3.31,
      6.16,
      9.21,
      12.12,
      15.26,
      17.83
     ]
    },
    "inp": {
     "Group": {
      "cash_released_k (YTD)": 22031.9
     },
     "A1": {
      "cash_released_k (YTD)": 4201.2
     },
     "A2": {
      "cash_released_k (YTD)": 17830.7
     }
    },
    "excl": {
     "A1": 17.83,
     "A2": 4.2
    },
    "level": "entity",
    "theme": "T4",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E05-ProductionCash",
     "P2-G04-CashWC",
     "P2-O03-CashLiquidity"
    ]
   },
   "CSH-003": {
    "name": "Daily collections",
    "unit": "₹ m/day",
    "dp": 1,
    "div": 1,
    "formula": "Cash collected ÷ Days in month ÷ 1000",
    "basis": "Month",
    "better": "up",
    "target": null,
    "fields": [
     "collections_k"
    ],
    "rules": {
     "collections_k": "SUM"
    },
    "val": {
     "Group": [
      77.02,
      70.67,
      73.45,
      75.79,
      73.61,
      76.77
     ],
     "A1": [
      39.4,
      36.06,
      37.22,
      38.34,
      37.84,
      38.6
     ],
     "A2": [
      37.62,
      34.61,
      36.23,
      37.46,
      35.78,
      38.17
     ]
    },
    "inp": {
     "Group": {
      "collections_k": 2303231.4
     },
     "A1": {
      "collections_k": 1158127.3
     },
     "A2": {
      "collections_k": 1145104.1
     }
    },
    "excl": {
     "A1": 38.17,
     "A2": 38.6
    },
    "level": "entity",
    "theme": "T4",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E01-EntityHome",
     "P2-E05-ProductionCash",
     "P2-E08-CertWorkbench",
     "P2-G04-CashWC",
     "P2-O03-CashLiquidity",
     "P2-S11-CashExposure"
    ]
   },
   "CSH-004": {
    "name": "Cash-conversion cycle",
    "unit": "days",
    "dp": 1,
    "div": 1,
    "formula": "DSO + Inventory days − DPO",
    "basis": "Month end",
    "better": "down",
    "target": 35,
    "fields": [
     "dso_d",
     "dpo_d",
     "dio_d"
    ],
    "rules": {
     "dso_d": "SUM",
     "dpo_d": "SUM",
     "dio_d": "SUM"
    },
    "val": {
     "Group": [
      34.91,
      35.93,
      34.78,
      33.84,
      35.58,
      32.59
     ],
     "A1": [
      54.42,
      52.87,
      52.24,
      52.11,
      53.43,
      52.3
     ],
     "A2": [
      14.8,
      16.61,
      17.48,
      16.53,
      16.79,
      13.42
     ]
    },
    "inp": {
     "Group": {
      "dso_d": 46.97,
      "dpo_d": 52.15,
      "dio_d": 37.76
     },
     "A1": {
      "dso_d": 52.0,
      "dpo_d": 40.2,
      "dio_d": 40.49
     },
     "A2": {
      "dso_d": 42.05,
      "dpo_d": 63.74,
      "dio_d": 35.11
     }
    },
    "excl": {
     "A1": 13.42,
     "A2": 52.3
    },
    "level": "entity",
    "theme": "T4",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E05-ProductionCash",
     "P2-G04-CashWC",
     "P2-O03-CashLiquidity"
    ]
   },
   "CSH-006": {
    "name": "Cash-upstream exposure",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "(Cash due to be upstreamed − Amount covered by available cash) ÷ 1000",
    "basis": "Next 30 days",
    "better": "down",
    "target": null,
    "fields": [
     "upstream_due_k",
     "upstream_covered_k"
    ],
    "rules": {
     "upstream_due_k": "SUM",
     "upstream_covered_k": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      25.62,
      27.21
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      25.62,
      27.21
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "upstream_due_k": 205271.0,
      "upstream_covered_k": 178058.4
     },
     "A1": {
      "upstream_due_k": 122055.2,
      "upstream_covered_k": 94842.6
     },
     "A2": {
      "upstream_due_k": 83215.8,
      "upstream_covered_k": 83215.8
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 27.21
    },
    "level": "entity",
    "theme": "T4",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E01-EntityHome",
     "P2-E05-ProductionCash",
     "P2-G04-CashWC",
     "P2-G08o-OwnerTrust",
     "P2-O02-ChangeReport",
     "P2-O03-CashLiquidity",
     "P2-S11-CashExposure"
    ]
   },
   "WCP-001": {
    "name": "DSO",
    "unit": "days",
    "dp": 1,
    "div": 1,
    "formula": "Trade receivables ÷ Revenue × Days in month",
    "basis": "Month end",
    "better": "down",
    "target": 45,
    "fields": [
     "dso_d"
    ],
    "rules": {
     "dso_d": "SUM"
    },
    "val": {
     "Group": [
      47.16,
      48.66,
      48.42,
      48.03,
      47.51,
      46.97
     ],
     "A1": [
      50.73,
      52.83,
      51.91,
      51.08,
      50.95,
      52.0
     ],
     "A2": [
      43.45,
      44.35,
      44.9,
      45.0,
      43.84,
      42.05
     ]
    },
    "inp": {
     "Group": {
      "dso_d": 46.97
     },
     "A1": {
      "dso_d": 52.0
     },
     "A2": {
      "dso_d": 42.05
     }
    },
    "excl": {
     "A1": 42.05,
     "A2": 52.0
    },
    "level": "entity",
    "theme": "T4",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E01-EntityHome",
     "P2-E05-ProductionCash",
     "P2-G02-EntityComparison",
     "P2-G04-CashWC",
     "P2-G08-CertGovernance",
     "P2-O03-CashLiquidity",
     "P2-S11-CashExposure"
    ]
   },
   "WCP-002": {
    "name": "DPO",
    "unit": "days",
    "dp": 1,
    "div": 1,
    "formula": "Trade payables ÷ Variable cost × Days in month",
    "basis": "Month end",
    "better": "up",
    "target": 50,
    "fields": [
     "dpo_d"
    ],
    "rules": {
     "dpo_d": "SUM"
    },
    "val": {
     "Group": [
      50.37,
      51.11,
      52.39,
      51.26,
      50.37,
      52.15
     ],
     "A1": [
      38.2,
      39.97,
      40.72,
      39.08,
      38.37,
      40.2
     ],
     "A2": [
      62.9,
      64.21,
      63.9,
      62.67,
      62.95,
      63.74
     ]
    },
    "inp": {
     "Group": {
      "dpo_d": 52.15
     },
     "A1": {
      "dpo_d": 40.2
     },
     "A2": {
      "dpo_d": 63.74
     }
    },
    "excl": {
     "A1": 63.74,
     "A2": 40.2
    },
    "level": "entity",
    "theme": "T4",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E05-ProductionCash",
     "P2-G04-CashWC",
     "P2-O03-CashLiquidity"
    ]
   },
   "WCP-003": {
    "name": "Inventory days",
    "unit": "days",
    "dp": 1,
    "div": 1,
    "formula": "Inventory ÷ Variable cost × Days in month",
    "basis": "Month end",
    "better": "down",
    "target": 40,
    "fields": [
     "dio_d"
    ],
    "rules": {
     "dio_d": "SUM"
    },
    "val": {
     "Group": [
      38.13,
      38.38,
      38.75,
      37.06,
      38.44,
      37.76
     ],
     "A1": [
      41.89,
      40.01,
      41.04,
      40.11,
      40.86,
      40.49
     ],
     "A2": [
      34.25,
      36.48,
      36.49,
      34.2,
      35.9,
      35.11
     ]
    },
    "inp": {
     "Group": {
      "dio_d": 37.76
     },
     "A1": {
      "dio_d": 40.49
     },
     "A2": {
      "dio_d": 35.11
     }
    },
    "excl": {
     "A1": 35.11,
     "A2": 40.49
    },
    "level": "entity",
    "theme": "T4",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E05-ProductionCash",
     "P2-G04-CashWC",
     "P2-O03-CashLiquidity"
    ]
   },
   "WCP-004": {
    "name": "Net working capital",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "(Trade receivables + Inventory − Trade payables) ÷ 1000",
    "basis": "Month end",
    "better": "down",
    "target": null,
    "fields": [
     "nwc_k"
    ],
    "rules": {
     "nwc_k": "SUM"
    },
    "val": {
     "Group": [
      2912.58,
      2720.0,
      2750.36,
      2792.72,
      2763.73,
      2780.99
     ],
     "A1": [
      2141.69,
      1920.13,
      1953.33,
      1992.13,
      2021.41,
      2012.17
     ],
     "A2": [
      770.89,
      799.87,
      797.03,
      800.6,
      742.32,
      768.81
     ]
    },
    "inp": {
     "Group": {
      "nwc_k": 2780986.6
     },
     "A1": {
      "nwc_k": 2012174.3
     },
     "A2": {
      "nwc_k": 768812.3
     }
    },
    "excl": {
     "A1": 768.81,
     "A2": 2012.17
    },
    "level": "entity",
    "theme": "T4",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E05-ProductionCash",
     "P2-G04-CashWC",
     "P2-O03-CashLiquidity"
    ]
   },
   "WCP-005": {
    "name": "Working-capital movement",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "(Net working capital − last month's net working capital) ÷ 1000; positive = cash tied up",
    "basis": "Month",
    "better": "down",
    "target": null,
    "fields": [
     "nwc_change_k"
    ],
    "rules": {
     "nwc_change_k": "SUM"
    },
    "val": {
     "Group": [
      43.69,
      -192.58,
      30.36,
      42.36,
      -29.0,
      17.26
     ],
     "A1": [
      32.13,
      -221.56,
      33.2,
      38.79,
      29.28,
      -9.23
     ],
     "A2": [
      11.56,
      28.98,
      -2.84,
      3.57,
      -58.28,
      26.49
     ]
    },
    "inp": {
     "Group": {
      "nwc_change_k": 17258.6
     },
     "A1": {
      "nwc_change_k": -9233.7
     },
     "A2": {
      "nwc_change_k": 26492.3
     }
    },
    "excl": {
     "A1": 26.49,
     "A2": -9.23
    },
    "level": "entity",
    "theme": "T4",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E05-ProductionCash",
     "P2-G04-CashWC",
     "P2-O03-CashLiquidity"
    ]
   },
   "WCP-006": {
    "name": "Working-capital days",
    "unit": "days",
    "dp": 1,
    "div": 1,
    "formula": "Net working capital ÷ Revenue × Days in month",
    "basis": "Month end",
    "better": "down",
    "target": 35,
    "fields": [
     "revenue_k",
     "nwc_k"
    ],
    "rules": {
     "revenue_k": "SUM",
     "nwc_k": "SUM"
    },
    "val": {
     "Group": [
      37.19,
      38.0,
      36.91,
      36.3,
      37.46,
      35.72
     ],
     "A1": [
      53.72,
      52.87,
      52.18,
      51.91,
      53.01,
      52.23
     ],
     "A2": [
      20.05,
      22.69,
      21.49,
      20.77,
      20.82,
      19.54
     ]
    },
    "inp": {
     "Group": {
      "revenue_k": 2335817.8,
      "nwc_k": 2780986.6
     },
     "A1": {
      "revenue_k": 1155724.2,
      "nwc_k": 2012174.3
     },
     "A2": {
      "revenue_k": 1180093.6,
      "nwc_k": 768812.3
     }
    },
    "excl": {
     "A1": 19.54,
     "A2": 52.23
    },
    "level": "entity",
    "theme": "T4",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E05-ProductionCash",
     "P2-G04-CashWC",
     "P2-O03-CashLiquidity"
    ]
   },
   "LIQ-001": {
    "name": "Liquidity runway",
    "unit": "months",
    "dp": 1,
    "div": 1,
    "formula": "(Cash + Undrawn facilities) ÷ (Fixed cost + Overheads + Debt service) per month",
    "basis": "Month end",
    "better": "up",
    "target": 12,
    "fields": [
     "fixed_cost_k",
     "overhead_k",
     "cash_k",
     "undrawn_facilities_k",
     "debt_service_k"
    ],
    "rules": {
     "fixed_cost_k": "SUM",
     "overhead_k": "SUM",
     "cash_k": "SUM",
     "undrawn_facilities_k": "SUM",
     "debt_service_k": "SUM"
    },
    "val": {
     "Group": [
      15.85,
      15.91,
      16.11,
      16.2,
      15.88,
      16.71
     ],
     "A1": [
      13.95,
      14.53,
      15.06,
      14.27,
      14.3,
      15.37
     ],
     "A2": [
      17.91,
      17.38,
      17.19,
      18.26,
      17.54,
      18.11
     ]
    },
    "inp": {
     "Group": {
      "fixed_cost_k": 7718.9,
      "overhead_k": 103293.8,
      "cash_k": 2141822.4,
      "undrawn_facilities_k": 880814.6,
      "debt_service_k": 69825.0
     },
     "A1": {
      "fixed_cost_k": 3769.8,
      "overhead_k": 50448.8,
      "cash_k": 967082.6,
      "undrawn_facilities_k": 449031.4,
      "debt_service_k": 37905.0
     },
     "A2": {
      "fixed_cost_k": 3949.1,
      "overhead_k": 52845.0,
      "cash_k": 1174739.8,
      "undrawn_facilities_k": 431783.2,
      "debt_service_k": 31920.0
     }
    },
    "excl": {
     "A1": 18.11,
     "A2": 15.37
    },
    "level": "entity",
    "theme": "T4",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E05-ProductionCash",
     "P2-G04-CashWC",
     "P2-O03-CashLiquidity"
    ]
   },
   "LIQ-002": {
    "name": "Covenant headroom",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "(Covenant limit − Net debt ÷ Annualised EBITDA) ÷ Covenant limit × 100",
    "basis": "Month end",
    "better": "up",
    "target": 20,
    "fields": [
     "net_debt_k",
     "ebitda_annualised_k"
    ],
    "rules": {
     "net_debt_k": "SUM",
     "ebitda_annualised_k": "SUM"
    },
    "val": {
     "Group": [
      27.53,
      19.59,
      15.98,
      18.76,
      17.84,
      24.44
     ],
     "A1": [
      24.54,
      -6.45,
      -0.66,
      10.37,
      11.77,
      18.93
     ],
     "A2": [
      30.78,
      37.68,
      29.76,
      26.89,
      24.04,
      30.08
     ]
    },
    "inp": {
     "Group": {
      "net_debt_k": 6650000.0,
      "ebitda_annualised_k": 3520186.4
     },
     "A1": {
      "net_debt_k": 3610000.0,
      "ebitda_annualised_k": 1781107.6
     },
     "A2": {
      "net_debt_k": 3040000.0,
      "ebitda_annualised_k": 1739078.8
     }
    },
    "excl": {
     "A1": 30.08,
     "A2": 18.93
    },
    "level": "entity",
    "theme": "T4",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E05-ProductionCash",
     "P2-G04-CashWC",
     "P2-O03-CashLiquidity"
    ]
   },
   "LIQ-003": {
    "name": "Debt-maturity exposure, next 12 months",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "Debt maturing in next 12 months ÷ 1000",
    "basis": "Month end",
    "better": "down",
    "target": null,
    "fields": [
     "debt_maturing_12m_k"
    ],
    "rules": {
     "debt_maturing_12m_k": "SUM"
    },
    "val": {
     "Group": [
      844.3,
      922.92,
      881.23,
      910.31,
      866.12,
      891.41
     ],
     "A1": [
      442.62,
      484.6,
      476.22,
      484.74,
      430.02,
      486.34
     ],
     "A2": [
      401.68,
      438.32,
      405.01,
      425.57,
      436.1,
      405.07
     ]
    },
    "inp": {
     "Group": {
      "debt_maturing_12m_k": 891410.2
     },
     "A1": {
      "debt_maturing_12m_k": 486342.3
     },
     "A2": {
      "debt_maturing_12m_k": 405067.9
     }
    },
    "excl": {
     "A1": 405.07,
     "A2": 486.34
    },
    "level": "entity",
    "theme": "T4",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E05-ProductionCash",
     "P2-G04-CashWC",
     "P2-O03-CashLiquidity"
    ]
   },
   "LIQ-004": {
    "name": "Financing exposure (floating-rate debt)",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "Floating-rate debt ÷ 1000",
    "basis": "Month end",
    "better": "down",
    "target": null,
    "fields": [
     "floating_rate_debt_k"
    ],
    "rules": {
     "floating_rate_debt_k": "SUM"
    },
    "val": {
     "Group": [
      2721.45,
      2519.26,
      2568.18,
      2622.48,
      2627.52,
      2720.83
     ],
     "A1": [
      1357.98,
      1326.72,
      1378.11,
      1328.59,
      1434.55,
      1440.7
     ],
     "A2": [
      1363.48,
      1192.54,
      1190.07,
      1293.89,
      1192.97,
      1280.13
     ]
    },
    "inp": {
     "Group": {
      "floating_rate_debt_k": 2720832.1
     },
     "A1": {
      "floating_rate_debt_k": 1440701.8
     },
     "A2": {
      "floating_rate_debt_k": 1280130.3
     }
    },
    "excl": {
     "A1": 1280.13,
     "A2": 1440.7
    },
    "level": "entity",
    "theme": "T4",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G04-CashWC",
     "P2-O03-CashLiquidity"
    ]
   },
   "TRS-001": {
    "name": "FX exposure, unhedged",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "(Foreign-currency exposure − Amount hedged) ÷ 1000",
    "basis": "Month end",
    "better": "down",
    "target": null,
    "fields": [
     "fx_exposure_k",
     "fx_hedged_k"
    ],
    "rules": {
     "fx_exposure_k": "SUM",
     "fx_hedged_k": "SUM"
    },
    "val": {
     "Group": [
      190.79,
      207.5,
      188.28,
      227.78,
      225.53,
      221.72
     ],
     "A1": [
      111.15,
      124.42,
      112.48,
      122.91,
      131.19,
      123.27
     ],
     "A2": [
      79.64,
      83.08,
      75.8,
      104.88,
      94.34,
      98.46
     ]
    },
    "inp": {
     "Group": {
      "fx_exposure_k": 767723.3,
      "fx_hedged_k": 545998.6
     },
     "A1": {
      "fx_exposure_k": 437492.4,
      "fx_hedged_k": 314223.8
     },
     "A2": {
      "fx_exposure_k": 330230.9,
      "fx_hedged_k": 231774.8
     }
    },
    "excl": {
     "A1": 98.46,
     "A2": 123.27
    },
    "level": "entity",
    "theme": "T4",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E05-ProductionCash",
     "P2-G04-CashWC",
     "P2-O03-CashLiquidity"
    ]
   },
   "TRS-002": {
    "name": "Hedging effectiveness",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Change in value of hedges ÷ Change in value of hedged items × 100",
    "basis": "Month",
    "better": "up",
    "target": 80,
    "fields": [
     "hedge_value_change_k",
     "hedged_item_value_change_k"
    ],
    "rules": {
     "hedge_value_change_k": "SUM",
     "hedged_item_value_change_k": "SUM"
    },
    "val": {
     "Group": [
      89.09,
      92.53,
      92.84,
      90.54,
      92.99,
      91.7
     ],
     "A1": [
      89.37,
      91.23,
      93.56,
      88.05,
      92.8,
      91.55
     ],
     "A2": [
      88.74,
      93.84,
      91.98,
      93.2,
      93.29,
      91.96
     ]
    },
    "inp": {
     "Group": {
      "hedge_value_change_k": 11376.9,
      "hedged_item_value_change_k": 12406.1
     },
     "A1": {
      "hedge_value_change_k": 7006.3,
      "hedged_item_value_change_k": 7653.2
     },
     "A2": {
      "hedge_value_change_k": 4370.6,
      "hedged_item_value_change_k": 4752.9
     }
    },
    "excl": {
     "A1": 91.96,
     "A2": 91.55
    },
    "level": "entity",
    "theme": "T4",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E05-ProductionCash",
     "P2-G04-CashWC",
     "P2-O03-CashLiquidity"
    ]
   },
   "TRS-003": {
    "name": "USD share of unhedged FX exposure",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "(USD exposure − USD hedged) ÷ (FX exposure − FX hedged) × 100",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "fx_exposure_k",
     "fx_hedged_k",
     "usd_exposure_k",
     "usd_hedged_k"
    ],
    "rules": {
     "fx_exposure_k": "SUM",
     "fx_hedged_k": "SUM",
     "usd_exposure_k": "SUM",
     "usd_hedged_k": "SUM"
    },
    "val": {
     "Group": [
      80.23,
      82.15,
      78.55,
      80.32,
      71.35,
      75.83
     ],
     "A1": [
      81.43,
      76.41,
      77.61,
      79.94,
      68.66,
      80.51
     ],
     "A2": [
      78.54,
      90.75,
      79.94,
      80.77,
      75.1,
      69.97
     ]
    },
    "inp": {
     "Group": {
      "fx_exposure_k": 767723.3,
      "fx_hedged_k": 545998.6,
      "usd_exposure_k": 614925.4,
      "usd_hedged_k": 446793.4
     },
     "A1": {
      "fx_exposure_k": 437492.4,
      "fx_hedged_k": 314223.8,
      "usd_exposure_k": 354951.3,
      "usd_hedged_k": 255711.3
     },
     "A2": {
      "fx_exposure_k": 330230.9,
      "fx_hedged_k": 231774.8,
      "usd_exposure_k": 259974.1,
      "usd_hedged_k": 191082.1
     }
    },
    "excl": {
     "A1": 69.97,
     "A2": 80.51
    },
    "level": "entity",
    "theme": "T4",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-O03-CashLiquidity"
    ]
   },
   "TRS-004": {
    "name": "Hedge cover, next 6 months",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Foreign-currency flows hedged ÷ Forecast foreign-currency flows, next 6 months × 100",
    "basis": "Next 6 months",
    "better": "up",
    "target": 70,
    "fields": [
     "fx_flows_6m_k",
     "fx_hedged_6m_k"
    ],
    "rules": {
     "fx_flows_6m_k": "SUM",
     "fx_hedged_6m_k": "SUM"
    },
    "val": {
     "Group": [
      70.22,
      71.1,
      69.89,
      68.44,
      69.67,
      70.65
     ],
     "A1": [
      77.51,
      78.18,
      75.94,
      75.89,
      77.81,
      77.9
     ],
     "A2": [
      59.58,
      61.12,
      61.24,
      58.59,
      58.22,
      61.09
     ]
    },
    "inp": {
     "Group": {
      "fx_flows_6m_k": 4533205.0,
      "fx_hedged_6m_k": 3202912.2
     },
     "A1": {
      "fx_flows_6m_k": 2579231.2,
      "fx_hedged_6m_k": 2009224.9
     },
     "A2": {
      "fx_flows_6m_k": 1953973.8,
      "fx_hedged_6m_k": 1193687.3
     }
    },
    "excl": {
     "A1": 61.09,
     "A2": 77.9
    },
    "level": "entity",
    "theme": "T4",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E05-ProductionCash",
     "P2-G04-CashWC",
     "P2-O03-CashLiquidity"
    ]
   },
   "TRS-005": {
    "name": "FX sensitivity, 5% USD move",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "5% × (USD exposure − USD hedged) ÷ 1000",
    "basis": "Month end",
    "better": "down",
    "target": null,
    "fields": [
     "usd_exposure_k",
     "usd_hedged_k"
    ],
    "rules": {
     "usd_exposure_k": "SUM",
     "usd_hedged_k": "SUM"
    },
    "val": {
     "Group": [
      7.65,
      8.52,
      7.39,
      9.15,
      8.05,
      8.41
     ],
     "A1": [
      4.53,
      4.75,
      4.36,
      4.91,
      4.5,
      4.96
     ],
     "A2": [
      3.13,
      3.77,
      3.03,
      4.24,
      3.54,
      3.44
     ]
    },
    "inp": {
     "Group": {
      "usd_exposure_k": 614925.4,
      "usd_hedged_k": 446793.4
     },
     "A1": {
      "usd_exposure_k": 354951.3,
      "usd_hedged_k": 255711.3
     },
     "A2": {
      "usd_exposure_k": 259974.1,
      "usd_hedged_k": 191082.1
     }
    },
    "excl": {
     "A1": 3.44,
     "A2": 4.96
    },
    "level": "entity",
    "theme": "T4",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-O03-CashLiquidity"
    ]
   },
   "CPX-001": {
    "name": "Approved capex budget",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "Approved capex budget ÷ 1000",
    "basis": "Full year",
    "better": null,
    "target": null,
    "fields": [
     "capex_budget_k"
    ],
    "rules": {
     "capex_budget_k": "SUM"
    },
    "val": {
     "Group": [
      1860.0,
      1860.0,
      1860.0,
      1860.0,
      1860.0,
      1860.0
     ],
     "A1": [
      1000.0,
      1000.0,
      1000.0,
      1000.0,
      1000.0,
      1000.0
     ],
     "A2": [
      860.0,
      860.0,
      860.0,
      860.0,
      860.0,
      860.0
     ]
    },
    "inp": {
     "Group": {
      "capex_budget_k": 1860000.0
     },
     "A1": {
      "capex_budget_k": 1000000.0
     },
     "A2": {
      "capex_budget_k": 860000.0
     }
    },
    "excl": {
     "A1": 860.0,
     "A2": 1000.0
    },
    "level": "entity",
    "theme": "T6",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E06-Capex",
     "P2-G06-CapexPortfolio",
     "P2-O04-Capex"
    ]
   },
   "CPX-002": {
    "name": "Committed capex",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "Capex committed to date ÷ 1000",
    "basis": "To date",
    "better": null,
    "target": null,
    "fields": [
     "capex_committed_k"
    ],
    "rules": {
     "capex_committed_k": "SUM"
    },
    "val": {
     "Group": [
      838.53,
      933.32,
      1037.26,
      1134.85,
      1238.53,
      1347.73
     ],
     "A1": [
      449.05,
      500.86,
      561.02,
      608.68,
      671.48,
      722.63
     ],
     "A2": [
      389.48,
      432.47,
      476.24,
      526.17,
      567.05,
      625.1
     ]
    },
    "inp": {
     "Group": {
      "capex_committed_k": 1347733.3
     },
     "A1": {
      "capex_committed_k": 722629.1
     },
     "A2": {
      "capex_committed_k": 625104.2
     }
    },
    "excl": {
     "A1": 625.1,
     "A2": 722.63
    },
    "level": "entity",
    "theme": "T6",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E06-Capex",
     "P2-G06-CapexPortfolio",
     "P2-O04-Capex"
    ]
   },
   "CPX-003": {
    "name": "Capex actual spend YTD",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "Sum of capex spent since April ÷ 1000",
    "basis": "Year to date",
    "better": null,
    "target": null,
    "fields": [
     "capex_spend_k (YTD)"
    ],
    "rules": {
     "capex_spend_k (YTD)": "SUM"
    },
    "val": {
     "Group": [
      146.56,
      291.62,
      435.28,
      582.9,
      734.84,
      879.71
     ],
     "A1": [
      76.78,
      151.95,
      225.58,
      306.48,
      388.94,
      468.11
     ],
     "A2": [
      69.78,
      139.67,
      209.69,
      276.42,
      345.89,
      411.6
     ]
    },
    "inp": {
     "Group": {
      "capex_spend_k (YTD)": 879711.2
     },
     "A1": {
      "capex_spend_k (YTD)": 468114.8
     },
     "A2": {
      "capex_spend_k (YTD)": 411596.4
     }
    },
    "excl": {
     "A1": 411.6,
     "A2": 468.11
    },
    "level": "entity",
    "theme": "T6",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E06-Capex",
     "P2-G06-CapexPortfolio",
     "P2-O04-Capex"
    ]
   },
   "CPX-004": {
    "name": "Capex physical progress, weighted",
    "unit": "% weighted",
    "dp": 1,
    "div": 1,
    "formula": "Work completed valued at budget ÷ Approved budget × 100 (weights each project by its budget)",
    "basis": "To date",
    "better": "up",
    "target": null,
    "fields": [
     "capex_budget_k",
     "capex_earned_value_k"
    ],
    "rules": {
     "capex_budget_k": "SUM",
     "capex_earned_value_k": "SUM"
    },
    "val": {
     "Group": [
      38.0,
      42.57,
      47.14,
      51.71,
      56.28,
      60.85
     ],
     "A1": [
      38.0,
      42.2,
      46.4,
      50.6,
      54.8,
      59.0
     ],
     "A2": [
      38.0,
      43.0,
      48.0,
      53.0,
      58.0,
      63.0
     ]
    },
    "inp": {
     "Group": {
      "capex_budget_k": 1860000.0,
      "capex_earned_value_k": 1131800.0
     },
     "A1": {
      "capex_budget_k": 1000000.0,
      "capex_earned_value_k": 590000.0
     },
     "A2": {
      "capex_budget_k": 860000.0,
      "capex_earned_value_k": 541800.0
     }
    },
    "excl": {
     "A1": 63.0,
     "A2": 59.0
    },
    "level": "entity",
    "theme": "T6",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E06-Capex",
     "P2-G01-Portfolio",
     "P2-G01b-PortfolioCertified",
     "P2-G06-CapexPortfolio",
     "P2-O01-EnterpriseHealth",
     "P2-O04-Capex",
     "P2-X-States",
     "P3-L-LargeDisplay"
    ]
   },
   "SIG-011": {
    "name": "Capex value at risk",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "Budget of projects at risk ÷ 1000",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "capex_at_risk_k"
    ],
    "rules": {
     "capex_at_risk_k": "SUM"
    },
    "val": {
     "Group": [
      139.24,
      161.83,
      152.29,
      153.97,
      153.09,
      148.03
     ],
     "A1": [
      22.27,
      25.53,
      21.95,
      24.16,
      21.56,
      20.8
     ],
     "A2": [
      116.97,
      136.3,
      130.33,
      129.81,
      131.53,
      127.23
     ]
    },
    "inp": {
     "Group": {
      "capex_at_risk_k": 148031.4
     },
     "A1": {
      "capex_at_risk_k": 20798.4
     },
     "A2": {
      "capex_at_risk_k": 127233.0
     }
    },
    "excl": {
     "A1": 127.23,
     "A2": 20.8
    },
    "level": "entity",
    "theme": "T3",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E06-Capex",
     "P2-G06-CapexPortfolio",
     "P2-O04-Capex",
     "P2-S12-Signals",
     "P2-S12e-Signals"
    ]
   },
   "PRG-001": {
    "name": "Capex project status",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Count of projects by status",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "projects_on_track",
     "projects_at_risk",
     "projects_off_track"
    ],
    "rules": {
     "projects_on_track": "SUM",
     "projects_at_risk": "SUM",
     "projects_off_track": "SUM"
    },
    "val": {
     "Group": [
      "9 on track · 2 at risk · 0 off track",
      "9 on track · 2 at risk · 0 off track",
      "9 on track · 2 at risk · 0 off track",
      "9 on track · 2 at risk · 0 off track",
      "9 on track · 2 at risk · 0 off track",
      "9 on track · 2 at risk · 0 off track"
     ],
     "A1": [
      "5 on track · 1 at risk · 0 off track",
      "5 on track · 1 at risk · 0 off track",
      "5 on track · 1 at risk · 0 off track",
      "5 on track · 1 at risk · 0 off track",
      "5 on track · 1 at risk · 0 off track",
      "5 on track · 1 at risk · 0 off track"
     ],
     "A2": [
      "4 on track · 1 at risk · 0 off track",
      "4 on track · 1 at risk · 0 off track",
      "4 on track · 1 at risk · 0 off track",
      "4 on track · 1 at risk · 0 off track",
      "4 on track · 1 at risk · 0 off track",
      "4 on track · 1 at risk · 0 off track"
     ]
    },
    "inp": {
     "Group": {
      "projects_on_track": 9.0,
      "projects_at_risk": 2.0,
      "projects_off_track": 0.0
     },
     "A1": {
      "projects_on_track": 5.0,
      "projects_at_risk": 1.0,
      "projects_off_track": 0.0
     },
     "A2": {
      "projects_on_track": 4.0,
      "projects_at_risk": 1.0,
      "projects_off_track": 0.0
     }
    },
    "excl": {
     "A1": "4 on track · 1 at risk · 0 off track",
     "A2": "5 on track · 1 at risk · 0 off track"
    },
    "level": "entity",
    "theme": "T6",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G06-CapexPortfolio",
     "P2-O04-Capex"
    ]
   },
   "PRG-002": {
    "name": "Benefits realisation",
    "unit": "% of plan",
    "dp": 1,
    "div": 1,
    "formula": "Benefits delivered since April ÷ Benefits planned since April × 100",
    "basis": "Year to date",
    "better": "up",
    "target": 100,
    "fields": [
     "benefits_planned_k (YTD)",
     "benefits_delivered_k (YTD)"
    ],
    "rules": {
     "benefits_planned_k (YTD)": "SUM",
     "benefits_delivered_k (YTD)": "SUM"
    },
    "val": {
     "Group": [
      46.69,
      47.85,
      47.74,
      48.04,
      48.1,
      47.96
     ],
     "A1": [
      72.18,
      70.99,
      69.61,
      69.76,
      69.95,
      69.34
     ],
     "A2": [
      33.2,
      35.29,
      35.7,
      36.06,
      36.04,
      36.27
     ]
    },
    "inp": {
     "Group": {
      "benefits_planned_k (YTD)": 85397.7,
      "benefits_delivered_k (YTD)": 40953.5
     },
     "A1": {
      "benefits_planned_k (YTD)": 30173.4,
      "benefits_delivered_k (YTD)": 20923.0
     },
     "A2": {
      "benefits_planned_k (YTD)": 55224.3,
      "benefits_delivered_k (YTD)": 20030.5
     }
    },
    "excl": {
     "A1": 36.27,
     "A2": 69.34
    },
    "level": "entity",
    "theme": "T6",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E06-Capex",
     "P2-G06-CapexPortfolio",
     "P2-O04-Capex"
    ]
   },
   "PRG-003": {
    "name": "Delayed projects",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Capex projects delayed",
    "basis": "Month end",
    "better": "down",
    "target": 0,
    "fields": [
     "projects_delayed"
    ],
    "rules": {
     "projects_delayed": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      1.0,
      1.0,
      1.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      1.0,
      1.0,
      1.0
     ]
    },
    "inp": {
     "Group": {
      "projects_delayed": 1.0
     },
     "A1": {
      "projects_delayed": 0.0
     },
     "A2": {
      "projects_delayed": 1.0
     }
    },
    "excl": {
     "A1": 1.0,
     "A2": 0.0
    },
    "level": "entity",
    "theme": "T6",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E06-Capex",
     "P2-G06-CapexPortfolio",
     "P2-O04-Capex"
    ]
   },
   "PRG-004": {
    "name": "Capex / transformation progress (same measure as STR-002)",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Transformation milestones completed ÷ Milestones in plan × 100",
    "basis": "To date",
    "better": null,
    "target": null,
    "fields": [
     "milestones_total",
     "milestones_done"
    ],
    "rules": {
     "milestones_total": "SUM",
     "milestones_done": "SUM"
    },
    "val": {
     "Group": [
      29.84,
      34.68,
      39.52,
      44.35,
      49.19,
      54.03
     ],
     "A1": [
      30.0,
      35.0,
      40.0,
      45.0,
      50.0,
      53.33
     ],
     "A2": [
      29.69,
      34.38,
      39.06,
      43.75,
      48.44,
      54.69
     ]
    },
    "inp": {
     "Group": {
      "milestones_total": 124.0,
      "milestones_done": 67.0
     },
     "A1": {
      "milestones_total": 60.0,
      "milestones_done": 32.0
     },
     "A2": {
      "milestones_total": 64.0,
      "milestones_done": 35.0
     }
    },
    "excl": {
     "A1": 54.69,
     "A2": 53.33
    },
    "level": "entity",
    "theme": "T6",
    "source": "alias",
    "aliasOf": "STR-002",
    "screens": [
     "P2-E01-EntityHome",
     "P2-G01-Portfolio",
     "P2-G01b-PortfolioCertified",
     "P2-O01-EnterpriseHealth",
     "P2-O04-Capex"
    ]
   },
   "STR-002": {
    "name": "Transformation progress",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Transformation milestones completed ÷ Milestones in plan × 100",
    "basis": "To date",
    "better": null,
    "target": null,
    "fields": [
     "milestones_total",
     "milestones_done"
    ],
    "rules": {
     "milestones_total": "SUM",
     "milestones_done": "SUM"
    },
    "val": {
     "Group": [
      29.84,
      34.68,
      39.52,
      44.35,
      49.19,
      54.03
     ],
     "A1": [
      30.0,
      35.0,
      40.0,
      45.0,
      50.0,
      53.33
     ],
     "A2": [
      29.69,
      34.38,
      39.06,
      43.75,
      48.44,
      54.69
     ]
    },
    "inp": {
     "Group": {
      "milestones_total": 124.0,
      "milestones_done": 67.0
     },
     "A1": {
      "milestones_total": 60.0,
      "milestones_done": 32.0
     },
     "A2": {
      "milestones_total": 64.0,
      "milestones_done": 35.0
     }
    },
    "excl": {
     "A1": 54.69,
     "A2": 53.33
    },
    "level": "entity",
    "theme": "T1",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G06-CapexPortfolio",
     "P2-O01-EnterpriseHealth",
     "P2-O04-Capex",
     "P2-X-States",
     "P3-L-LargeDisplay"
    ]
   },
   "PRG-005": {
    "name": "Transformation initiative status",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Count of transformation initiatives by status",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "initiatives_on_track",
     "initiatives_at_risk",
     "initiatives_delayed"
    ],
    "rules": {
     "initiatives_on_track": "SUM",
     "initiatives_at_risk": "SUM",
     "initiatives_delayed": "SUM"
    },
    "val": {
     "Group": [
      "15 on track · 6 at risk · 3 delayed",
      "15 on track · 6 at risk · 3 delayed",
      "15 on track · 6 at risk · 3 delayed",
      "15 on track · 6 at risk · 3 delayed",
      "15 on track · 6 at risk · 3 delayed",
      "15 on track · 6 at risk · 3 delayed"
     ],
     "A1": [
      "5 on track · 2 at risk · 1 delayed",
      "5 on track · 2 at risk · 1 delayed",
      "5 on track · 2 at risk · 1 delayed",
      "5 on track · 2 at risk · 1 delayed",
      "5 on track · 2 at risk · 1 delayed",
      "5 on track · 2 at risk · 1 delayed"
     ],
     "A2": [
      "10 on track · 4 at risk · 2 delayed",
      "10 on track · 4 at risk · 2 delayed",
      "10 on track · 4 at risk · 2 delayed",
      "10 on track · 4 at risk · 2 delayed",
      "10 on track · 4 at risk · 2 delayed",
      "10 on track · 4 at risk · 2 delayed"
     ]
    },
    "inp": {
     "Group": {
      "initiatives_on_track": 15.0,
      "initiatives_at_risk": 6.0,
      "initiatives_delayed": 3.0
     },
     "A1": {
      "initiatives_on_track": 5.0,
      "initiatives_at_risk": 2.0,
      "initiatives_delayed": 1.0
     },
     "A2": {
      "initiatives_on_track": 10.0,
      "initiatives_at_risk": 4.0,
      "initiatives_delayed": 2.0
     }
    },
    "excl": {
     "A1": "10 on track · 4 at risk · 2 delayed",
     "A2": "5 on track · 2 at risk · 1 delayed"
    },
    "level": "entity",
    "theme": "T6",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E06-Capex",
     "P2-O04-Capex"
    ]
   },
   "SUP-006": {
    "name": "Contractor slippage",
    "unit": "days",
    "dp": 1,
    "div": 1,
    "formula": "Contractor days late ÷ Contractor milestones due (average days late per milestone)",
    "basis": "Month",
    "better": "down",
    "target": 0,
    "fields": [
     "contractor_milestones_due",
     "contractor_days_late"
    ],
    "rules": {
     "contractor_milestones_due": "SUM",
     "contractor_days_late": "SUM"
    },
    "val": {
     "Group": [
      2.36,
      2.2,
      2.18,
      2.1,
      2.15,
      1.73
     ],
     "A1": [
      3.0,
      2.83,
      3.5,
      2.83,
      3.0,
      2.5
     ],
     "A2": [
      1.25,
      1.25,
      1.43,
      1.0,
      1.17,
      1.29
     ]
    },
    "inp": {
     "Group": {
      "contractor_milestones_due": 11.0,
      "contractor_days_late": 19.0
     },
     "A1": {
      "contractor_milestones_due": 4.0,
      "contractor_days_late": 10.0
     },
     "A2": {
      "contractor_milestones_due": 7.0,
      "contractor_days_late": 9.0
     }
    },
    "excl": {
     "A1": 1.29,
     "A2": 2.5
    },
    "level": "entity",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E04-Supply",
     "P2-E06-Capex",
     "P2-G06-CapexPortfolio"
    ]
   },
   "VAL-001": {
    "name": "EBITDA benefit YTD",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "Sum of EBITDA benefit since April ÷ 1000",
    "basis": "Year to date",
    "better": null,
    "target": null,
    "fields": [
     "ebitda_benefit_k (YTD)"
    ],
    "rules": {
     "ebitda_benefit_k (YTD)": "SUM"
    },
    "val": {
     "Group": [
      2.36,
      4.7,
      7.09,
      9.47,
      11.86,
      14.21
     ],
     "A1": [
      0.99,
      1.94,
      3.01,
      4.09,
      5.13,
      6.2
     ],
     "A2": [
      1.38,
      2.77,
      4.08,
      5.37,
      6.73,
      8.0
     ]
    },
    "inp": {
     "Group": {
      "ebitda_benefit_k (YTD)": 14207.4
     },
     "A1": {
      "ebitda_benefit_k (YTD)": 6204.2
     },
     "A2": {
      "ebitda_benefit_k (YTD)": 8003.2
     }
    },
    "excl": {
     "A1": 8.0,
     "A2": 6.2
    },
    "level": "entity",
    "theme": "T6",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E06-Capex",
     "P2-G06-CapexPortfolio",
     "P2-O04-Capex"
    ]
   },
   "VAL-002": {
    "name": "Cash benefit YTD",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "Sum of cash benefit since April ÷ 1000",
    "basis": "Year to date",
    "better": null,
    "target": null,
    "fields": [
     "cash_benefit_k (YTD)"
    ],
    "rules": {
     "cash_benefit_k (YTD)": "SUM"
    },
    "val": {
     "Group": [
      1.44,
      2.94,
      4.37,
      5.86,
      7.28,
      8.71
     ],
     "A1": [
      0.35,
      0.8,
      1.22,
      1.63,
      1.98,
      2.37
     ],
     "A2": [
      1.09,
      2.14,
      3.16,
      4.23,
      5.3,
      6.34
     ]
    },
    "inp": {
     "Group": {
      "cash_benefit_k (YTD)": 8709.2
     },
     "A1": {
      "cash_benefit_k (YTD)": 2373.5
     },
     "A2": {
      "cash_benefit_k (YTD)": 6335.7
     }
    },
    "excl": {
     "A1": 6.34,
     "A2": 2.37
    },
    "level": "entity",
    "theme": "T6",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E06-Capex",
     "P2-G06-CapexPortfolio",
     "P2-O04-Capex"
    ]
   },
   "VAL-003": {
    "name": "Cost savings delivered YTD",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "Sum of cost savings since April ÷ 1000",
    "basis": "Year to date",
    "better": null,
    "target": null,
    "fields": [
     "cost_savings_k (YTD)"
    ],
    "rules": {
     "cost_savings_k (YTD)": "SUM"
    },
    "val": {
     "Group": [
      1.77,
      3.67,
      5.56,
      7.47,
      9.36,
      11.25
     ],
     "A1": [
      0.6,
      1.25,
      1.92,
      2.61,
      3.25,
      3.89
     ],
     "A2": [
      1.17,
      2.42,
      3.65,
      4.87,
      6.11,
      7.35
     ]
    },
    "inp": {
     "Group": {
      "cost_savings_k (YTD)": 11247.9
     },
     "A1": {
      "cost_savings_k (YTD)": 3894.5
     },
     "A2": {
      "cost_savings_k (YTD)": 7353.4
     }
    },
    "excl": {
     "A1": 7.35,
     "A2": 3.89
    },
    "level": "entity",
    "theme": "T6",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E06-Capex",
     "P2-G06-CapexPortfolio",
     "P2-O04-Capex"
    ]
   },
   "SUP-001": {
    "name": "Supplier on-time delivery",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Purchase-order lines on time ÷ Lines due × 100",
    "basis": "Month",
    "better": "up",
    "target": 95,
    "fields": [
     "po_lines_due",
     "po_lines_on_time"
    ],
    "rules": {
     "po_lines_due": "SUM",
     "po_lines_on_time": "SUM"
    },
    "val": {
     "Group": [
      91.11,
      91.39,
      92.06,
      91.89,
      91.17,
      91.41
     ],
     "A1": [
      90.46,
      88.46,
      90.46,
      90.33,
      88.85,
      90.39
     ],
     "A2": [
      91.58,
      93.76,
      93.41,
      93.2,
      93.06,
      92.28
     ],
     "Plant01": [
      93.3,
      90.96,
      93.3,
      93.67,
      92.31,
      92.72
     ],
     "Plant02": [
      85.03,
      81.61,
      82.67,
      80.5,
      83.44,
      84.97
     ],
     "Plant03": [
      92.31,
      91.81,
      92.67,
      94.04,
      89.92,
      92.41
     ],
     "Plant04": [
      92.43,
      95.31,
      93.85,
      92.43,
      93.77,
      93.45
     ],
     "Plant05": [
      92.14,
      91.35,
      90.91,
      93.36,
      90.74,
      91.9
     ],
     "Plant06": [
      90.51,
      94.19,
      94.61,
      93.57,
      93.73,
      90.73
     ]
    },
    "inp": {
     "Group": {
      "po_lines_due": 1339.0,
      "po_lines_on_time": 1224.0
     },
     "A1": {
      "po_lines_due": 614.0,
      "po_lines_on_time": 555.0
     },
     "A2": {
      "po_lines_due": 725.0,
      "po_lines_on_time": 669.0
     },
     "Plant01": {
      "po_lines_due": 151.0,
      "po_lines_on_time": 140.0
     },
     "Plant02": {
      "po_lines_due": 173.0,
      "po_lines_on_time": 147.0
     },
     "Plant03": {
      "po_lines_due": 290.0,
      "po_lines_on_time": 268.0
     },
     "Plant04": {
      "po_lines_due": 290.0,
      "po_lines_on_time": 271.0
     },
     "Plant05": {
      "po_lines_due": 284.0,
      "po_lines_on_time": 261.0
     },
     "Plant06": {
      "po_lines_due": 151.0,
      "po_lines_on_time": 137.0
     }
    },
    "excl": {
     "A1": 92.28,
     "A2": 90.39,
     "Plant01": 89.63,
     "Plant02": 92.52,
     "Plant03": 88.58,
     "Plant04": 91.49,
     "Plant05": 92.52,
     "Plant06": 92.68
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E04-Supply",
     "P2-G05-OpsBenchmark",
     "P2-O09-Operations"
    ]
   },
   "SUP-002": {
    "name": "Supplier fill rate",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Quantity received ÷ Quantity ordered × 100",
    "basis": "Month",
    "better": "up",
    "target": 98,
    "fields": [
     "qty_ordered_t",
     "qty_received_t"
    ],
    "rules": {
     "qty_ordered_t": "SUM",
     "qty_received_t": "SUM"
    },
    "val": {
     "Group": [
      95.96,
      95.52,
      96.93,
      95.87,
      96.93,
      96.82
     ],
     "A1": [
      96.27,
      96.41,
      96.75,
      95.68,
      96.91,
      97.01
     ],
     "A2": [
      95.63,
      94.55,
      97.11,
      96.07,
      96.94,
      96.61
     ],
     "Plant01": [
      96.72,
      95.94,
      96.9,
      96.33,
      96.69,
      96.14
     ],
     "Plant02": [
      98.87,
      98.45,
      98.29,
      96.11,
      97.03,
      97.38
     ],
     "Plant03": [
      94.12,
      95.22,
      95.55,
      94.98,
      96.99,
      97.28
     ],
     "Plant04": [
      95.13,
      94.49,
      97.21,
      94.76,
      94.42,
      94.71
     ],
     "Plant05": [
      94.05,
      94.29,
      97.36,
      95.02,
      97.47,
      98.98
     ],
     "Plant06": [
      98.11,
      94.96,
      96.72,
      98.36,
      98.29,
      95.06
     ]
    },
    "inp": {
     "Group": {
      "qty_ordered_t": 672929.0,
      "qty_received_t": 651499.0
     },
     "A1": {
      "qty_ordered_t": 343753.0,
      "qty_received_t": 333481.0
     },
     "A2": {
      "qty_ordered_t": 329176.0,
      "qty_received_t": 318018.0
     },
     "Plant01": {
      "qty_ordered_t": 89804.0,
      "qty_received_t": 86335.0
     },
     "Plant02": {
      "qty_ordered_t": 103840.0,
      "qty_received_t": 101122.0
     },
     "Plant03": {
      "qty_ordered_t": 150109.0,
      "qty_received_t": 146024.0
     },
     "Plant04": {
      "qty_ordered_t": 90306.0,
      "qty_received_t": 85528.0
     },
     "Plant05": {
      "qty_ordered_t": 138360.0,
      "qty_received_t": 136947.0
     },
     "Plant06": {
      "qty_ordered_t": 100510.0,
      "qty_received_t": 95543.0
     }
    },
    "excl": {
     "A1": 96.61,
     "A2": 97.01,
     "Plant01": 97.32,
     "Plant02": 96.85,
     "Plant03": 96.8,
     "Plant04": 97.33,
     "Plant05": 94.89,
     "Plant06": 97.29
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E04-Supply"
    ]
   },
   "SUP-003": {
    "name": "Supplier quality-rejection rate",
    "unit": "%",
    "dp": 2,
    "div": 1,
    "formula": "Quantity rejected ÷ Quantity received × 100",
    "basis": "Month",
    "better": "down",
    "target": 1.5,
    "fields": [
     "qty_received_t",
     "qty_rejected_t"
    ],
    "rules": {
     "qty_received_t": "SUM",
     "qty_rejected_t": "SUM"
    },
    "val": {
     "Group": [
      1.19,
      0.93,
      0.87,
      0.9,
      1.33,
      1.12
     ],
     "A1": [
      1.18,
      0.82,
      0.98,
      1.15,
      1.59,
      0.97
     ],
     "A2": [
      1.19,
      1.05,
      0.75,
      0.64,
      1.06,
      1.28
     ],
     "Plant01": [
      1.46,
      0.72,
      0.83,
      1.54,
      1.28,
      1.4
     ],
     "Plant02": [
      1.0,
      0.84,
      1.39,
      0.71,
      1.66,
      1.11
     ],
     "Plant03": [
      1.14,
      0.87,
      0.78,
      1.2,
      1.75,
      0.62
     ],
     "Plant04": [
      1.01,
      1.66,
      1.48,
      0.63,
      1.56,
      1.61
     ],
     "Plant05": [
      1.39,
      0.52,
      0.47,
      0.49,
      0.79,
      1.01
     ],
     "Plant06": [
      1.08,
      1.26,
      0.55,
      0.85,
      1.02,
      1.37
     ]
    },
    "inp": {
     "Group": {
      "qty_received_t": 651499.0,
      "qty_rejected_t": 7320.0
     },
     "A1": {
      "qty_received_t": 333481.0,
      "qty_rejected_t": 3243.0
     },
     "A2": {
      "qty_received_t": 318018.0,
      "qty_rejected_t": 4077.0
     },
     "Plant01": {
      "qty_received_t": 86335.0,
      "qty_rejected_t": 1211.0
     },
     "Plant02": {
      "qty_received_t": 101122.0,
      "qty_rejected_t": 1125.0
     },
     "Plant03": {
      "qty_received_t": 146024.0,
      "qty_rejected_t": 907.0
     },
     "Plant04": {
      "qty_received_t": 85528.0,
      "qty_rejected_t": 1378.0
     },
     "Plant05": {
      "qty_received_t": 136947.0,
      "qty_rejected_t": 1389.0
     },
     "Plant06": {
      "qty_received_t": 95543.0,
      "qty_rejected_t": 1310.0
     }
    },
    "excl": {
     "A1": 1.28,
     "A2": 0.97,
     "Plant01": 0.82,
     "Plant02": 0.91,
     "Plant03": 1.25,
     "Plant04": 1.16,
     "Plant05": 1.48,
     "Plant06": 1.24
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E04-Supply"
    ]
   },
   "SUP-004": {
    "name": "Supplier lead-time variance",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "(Actual lead time − Planned lead time) ÷ Planned lead time × 100",
    "basis": "Month",
    "better": "down",
    "target": 5,
    "fields": [
     "lead_time_planned_days",
     "lead_time_actual_days"
    ],
    "rules": {
     "lead_time_planned_days": "SUM",
     "lead_time_actual_days": "SUM"
    },
    "val": {
     "Group": [
      5.29,
      2.93,
      3.18,
      2.48,
      2.53,
      5.25
     ],
     "A1": [
      6.05,
      3.19,
      3.94,
      6.91,
      4.97,
      6.91
     ],
     "A2": [
      4.64,
      2.6,
      2.44,
      -0.62,
      0.08,
      3.65
     ],
     "Plant01": [
      -0.85,
      0.23,
      -0.1,
      4.04,
      -1.5,
      4.97
     ],
     "Plant02": [
      15.33,
      12.99,
      11.75,
      17.33,
      18.75,
      17.33
     ],
     "Plant03": [
      4.73,
      0.17,
      2.53,
      0.54,
      3.07,
      2.35
     ],
     "Plant04": [
      3.74,
      -0.46,
      -0.65,
      -1.66,
      -0.7,
      3.92
     ],
     "Plant05": [
      7.34,
      4.32,
      6.0,
      -1.32,
      3.49,
      6.68
     ],
     "Plant06": [
      1.36,
      5.12,
      -1.19,
      0.76,
      -1.21,
      -1.14
     ]
    },
    "inp": {
     "Group": {
      "lead_time_planned_days": 5166.0,
      "lead_time_actual_days": 5437.0
     },
     "A1": {
      "lead_time_planned_days": 2534.0,
      "lead_time_actual_days": 2709.0
     },
     "A2": {
      "lead_time_planned_days": 2632.0,
      "lead_time_actual_days": 2728.0
     },
     "Plant01": {
      "lead_time_planned_days": 644.0,
      "lead_time_actual_days": 676.0
     },
     "Plant02": {
      "lead_time_planned_days": 658.0,
      "lead_time_actual_days": 772.0
     },
     "Plant03": {
      "lead_time_planned_days": 1232.0,
      "lead_time_actual_days": 1261.0
     },
     "Plant04": {
      "lead_time_planned_days": 1148.0,
      "lead_time_actual_days": 1193.0
     },
     "Plant05": {
      "lead_time_planned_days": 868.0,
      "lead_time_actual_days": 926.0
     },
     "Plant06": {
      "lead_time_planned_days": 616.0,
      "lead_time_actual_days": 609.0
     }
    },
    "excl": {
     "A1": 3.65,
     "A2": 6.91,
     "Plant01": 7.57,
     "Plant02": 3.25,
     "Plant03": 11.21,
     "Plant04": 3.44,
     "Plant05": 2.15,
     "Plant06": 5.11
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E04-Supply",
     "P2-G05-OpsBenchmark"
    ]
   },
   "SUP-005": {
    "name": "Critical supplier exposure",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Critical single-source suppliers",
    "basis": "Month end",
    "better": "down",
    "target": null,
    "fields": [
     "single_source_suppliers"
    ],
    "rules": {
     "single_source_suppliers": "SUM"
    },
    "val": {
     "Group": [
      3.0,
      3.0,
      3.0,
      3.0,
      3.0,
      3.0
     ],
     "A1": [
      2.0,
      2.0,
      2.0,
      2.0,
      2.0,
      2.0
     ],
     "A2": [
      1.0,
      1.0,
      1.0,
      1.0,
      1.0,
      1.0
     ]
    },
    "inp": {
     "Group": {
      "single_source_suppliers": 3.0
     },
     "A1": {
      "single_source_suppliers": 2.0
     },
     "A2": {
      "single_source_suppliers": 1.0
     }
    },
    "excl": {
     "A1": 1.0,
     "A2": 2.0
    },
    "level": "entity",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E04-Supply",
     "P2-G05-OpsBenchmark"
    ]
   },
   "SUP-007": {
    "name": "Single-source spend share",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Spend with single-source suppliers ÷ Supplier spend × 100",
    "basis": "Month",
    "better": "down",
    "target": 30,
    "fields": [
     "supplier_spend_k",
     "single_source_spend_k"
    ],
    "rules": {
     "supplier_spend_k": "SUM",
     "single_source_spend_k": "SUM"
    },
    "val": {
     "Group": [
      34.56,
      36.53,
      37.4,
      36.17,
      36.78,
      35.19
     ],
     "A1": [
      38.35,
      40.04,
      38.32,
      38.25,
      38.77,
      34.81
     ],
     "A2": [
      31.0,
      32.58,
      36.46,
      34.35,
      34.68,
      35.55
     ],
     "Plant01": [
      30.8,
      34.96,
      31.54,
      38.92,
      37.62,
      30.12
     ],
     "Plant02": [
      45.29,
      46.14,
      45.17,
      46.06,
      47.35,
      43.02
     ],
     "Plant03": [
      37.8,
      38.25,
      36.81,
      30.59,
      33.52,
      30.7
     ],
     "Plant04": [
      30.54,
      31.27,
      35.96,
      32.4,
      37.32,
      31.2
     ],
     "Plant05": [
      30.78,
      31.51,
      37.12,
      35.73,
      33.86,
      35.54
     ],
     "Plant06": [
      31.77,
      35.47,
      35.86,
      34.01,
      33.7,
      39.87
     ]
    },
    "inp": {
     "Group": {
      "supplier_spend_k": 1019083.4,
      "single_source_spend_k": 358582.3
     },
     "A1": {
      "supplier_spend_k": 498240.2,
      "single_source_spend_k": 173445.1
     },
     "A2": {
      "supplier_spend_k": 520843.2,
      "single_source_spend_k": 185137.2
     },
     "Plant01": {
      "supplier_spend_k": 116619.5,
      "single_source_spend_k": 35125.0
     },
     "Plant02": {
      "supplier_spend_k": 171707.4,
      "single_source_spend_k": 73868.5
     },
     "Plant03": {
      "supplier_spend_k": 209913.3,
      "single_source_spend_k": 64451.6
     },
     "Plant04": {
      "supplier_spend_k": 145373.0,
      "single_source_spend_k": 45358.0
     },
     "Plant05": {
      "supplier_spend_k": 229069.1,
      "single_source_spend_k": 81412.2
     },
     "Plant06": {
      "supplier_spend_k": 146401.1,
      "single_source_spend_k": 58367.0
     }
    },
    "excl": {
     "A1": 35.55,
     "A2": 34.81,
     "Plant01": 36.25,
     "Plant02": 30.5,
     "Plant03": 37.8,
     "Plant04": 37.23,
     "Plant05": 35.55,
     "Plant06": 33.86
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-O09-Operations"
    ]
   },
   "SUP-008": {
    "name": "Supplier EHS incidents YTD",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Sum of supplier EHS incidents since April",
    "basis": "Year to date",
    "better": "down",
    "target": 0,
    "fields": [
     "supplier_ehs_incidents (YTD)"
    ],
    "rules": {
     "supplier_ehs_incidents (YTD)": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      1.0,
      1.0,
      1.0,
      3.0
     ],
     "A1": [
      0.0,
      0.0,
      1.0,
      1.0,
      1.0,
      2.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0
     ],
     "Plant01": [
      0.0,
      0.0,
      1.0,
      1.0,
      1.0,
      2.0
     ],
     "Plant02": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant03": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant04": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant05": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0
     ],
     "Plant06": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "supplier_ehs_incidents (YTD)": 3.0
     },
     "A1": {
      "supplier_ehs_incidents (YTD)": 2.0
     },
     "A2": {
      "supplier_ehs_incidents (YTD)": 1.0
     },
     "Plant01": {
      "supplier_ehs_incidents (YTD)": 2.0
     },
     "Plant02": {
      "supplier_ehs_incidents (YTD)": 0.0
     },
     "Plant03": {
      "supplier_ehs_incidents (YTD)": 0.0
     },
     "Plant04": {
      "supplier_ehs_incidents (YTD)": 0.0
     },
     "Plant05": {
      "supplier_ehs_incidents (YTD)": 1.0
     },
     "Plant06": {
      "supplier_ehs_incidents (YTD)": 0.0
     }
    },
    "excl": {
     "A1": 1.0,
     "A2": 2.0,
     "Plant01": 0.0,
     "Plant02": 2.0,
     "Plant03": 2.0,
     "Plant04": 1.0,
     "Plant05": 0.0,
     "Plant06": 1.0
    },
    "level": "plant",
    "theme": "T5",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-O09-Operations"
    ]
   },
   "CON-001": {
    "name": "Contracts expiring, next 90 days",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Contracts expiring in next 90 days",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "contracts_expiring_90d"
    ],
    "rules": {
     "contracts_expiring_90d": "SUM"
    },
    "val": {
     "Group": [
      3.0,
      5.0,
      4.0,
      5.0,
      4.0,
      4.0
     ],
     "A1": [
      1.0,
      2.0,
      2.0,
      2.0,
      2.0,
      2.0
     ],
     "A2": [
      2.0,
      3.0,
      2.0,
      3.0,
      2.0,
      2.0
     ]
    },
    "inp": {
     "Group": {
      "contracts_expiring_90d": 4.0
     },
     "A1": {
      "contracts_expiring_90d": 2.0
     },
     "A2": {
      "contracts_expiring_90d": 2.0
     }
    },
    "excl": {
     "A1": 2.0,
     "A2": 2.0
    },
    "level": "entity",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E04-Supply",
     "P2-E07-RegEHS",
     "P2-G07-Risk",
     "P2-O05-Risk"
    ]
   },
   "CON-002": {
    "name": "Contract-compliance rate",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Contracts fully compliant ÷ Active contracts × 100",
    "basis": "Month end",
    "better": "up",
    "target": 95,
    "fields": [
     "contracts_total",
     "contracts_compliant"
    ],
    "rules": {
     "contracts_total": "SUM",
     "contracts_compliant": "SUM"
    },
    "val": {
     "Group": [
      96.43,
      95.0,
      96.43,
      95.0,
      95.0,
      95.71
     ],
     "A1": [
      95.83,
      94.44,
      95.83,
      94.44,
      94.44,
      95.83
     ],
     "A2": [
      97.06,
      95.59,
      97.06,
      95.59,
      95.59,
      95.59
     ]
    },
    "inp": {
     "Group": {
      "contracts_total": 140.0,
      "contracts_compliant": 134.0
     },
     "A1": {
      "contracts_total": 72.0,
      "contracts_compliant": 69.0
     },
     "A2": {
      "contracts_total": 68.0,
      "contracts_compliant": 65.0
     }
    },
    "excl": {
     "A1": 95.59,
     "A2": 95.83
    },
    "level": "entity",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E04-Supply",
     "P2-E07-RegEHS",
     "P2-G07-Risk",
     "P2-O05-Risk"
    ]
   },
   "CON-003": {
    "name": "Supplier EHS non-compliance",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Suppliers not meeting EHS requirements",
    "basis": "Month end",
    "better": "down",
    "target": 0,
    "fields": [
     "supplier_ehs_noncompliance"
    ],
    "rules": {
     "supplier_ehs_noncompliance": "SUM"
    },
    "val": {
     "Group": [
      1.0,
      1.0,
      0.0,
      1.0,
      0.0,
      0.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      1.0,
      1.0,
      0.0,
      1.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "supplier_ehs_noncompliance": 0.0
     },
     "A1": {
      "supplier_ehs_noncompliance": 0.0
     },
     "A2": {
      "supplier_ehs_noncompliance": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 0.0
    },
    "level": "entity",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E04-Supply",
     "P2-E07-RegEHS",
     "P2-G05-OpsBenchmark",
     "P2-G07-Risk",
     "P2-O05-Risk"
    ]
   },
   "REG-001": {
    "name": "Pending filings",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Regulatory filings pending",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "pending_filings"
    ],
    "rules": {
     "pending_filings": "SUM"
    },
    "val": {
     "Group": [
      3.0,
      3.0,
      1.0,
      1.0,
      0.0,
      0.0
     ],
     "A1": [
      1.0,
      2.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      2.0,
      1.0,
      1.0,
      1.0,
      0.0,
      0.0
     ],
     "Plant01": [
      0.0,
      1.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant02": [
      1.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant03": [
      0.0,
      1.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant04": [
      1.0,
      1.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant05": [
      0.0,
      0.0,
      1.0,
      1.0,
      0.0,
      0.0
     ],
     "Plant06": [
      1.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "pending_filings": 0.0
     },
     "A1": {
      "pending_filings": 0.0
     },
     "A2": {
      "pending_filings": 0.0
     },
     "Plant01": {
      "pending_filings": 0.0
     },
     "Plant02": {
      "pending_filings": 0.0
     },
     "Plant03": {
      "pending_filings": 0.0
     },
     "Plant04": {
      "pending_filings": 0.0
     },
     "Plant05": {
      "pending_filings": 0.0
     },
     "Plant06": {
      "pending_filings": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 0.0,
     "Plant01": 0.0,
     "Plant02": 0.0,
     "Plant03": 0.0,
     "Plant04": 0.0,
     "Plant05": 0.0,
     "Plant06": 0.0
    },
    "level": "plant",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk"
    ]
   },
   "REG-002": {
    "name": "Regulatory deadlines, next 30 days",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Regulatory deadlines in next 30 days",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "reg_deadlines_30d"
    ],
    "rules": {
     "reg_deadlines_30d": "SUM"
    },
    "val": {
     "Group": [
      2.0,
      1.0,
      2.0,
      2.0,
      0.0,
      3.0
     ],
     "A1": [
      2.0,
      1.0,
      0.0,
      0.0,
      0.0,
      2.0
     ],
     "A2": [
      0.0,
      0.0,
      2.0,
      2.0,
      0.0,
      1.0
     ],
     "Plant01": [
      1.0,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0
     ],
     "Plant02": [
      1.0,
      1.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant03": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0
     ],
     "Plant04": [
      0.0,
      0.0,
      0.0,
      1.0,
      0.0,
      0.0
     ],
     "Plant05": [
      0.0,
      0.0,
      1.0,
      1.0,
      0.0,
      0.0
     ],
     "Plant06": [
      0.0,
      0.0,
      1.0,
      0.0,
      0.0,
      1.0
     ]
    },
    "inp": {
     "Group": {
      "reg_deadlines_30d": 3.0
     },
     "A1": {
      "reg_deadlines_30d": 2.0
     },
     "A2": {
      "reg_deadlines_30d": 1.0
     },
     "Plant01": {
      "reg_deadlines_30d": 1.0
     },
     "Plant02": {
      "reg_deadlines_30d": 0.0
     },
     "Plant03": {
      "reg_deadlines_30d": 1.0
     },
     "Plant04": {
      "reg_deadlines_30d": 0.0
     },
     "Plant05": {
      "reg_deadlines_30d": 0.0
     },
     "Plant06": {
      "reg_deadlines_30d": 1.0
     }
    },
    "excl": {
     "A1": 1.0,
     "A2": 2.0,
     "Plant01": 1.0,
     "Plant02": 2.0,
     "Plant03": 1.0,
     "Plant04": 1.0,
     "Plant05": 1.0,
     "Plant06": 0.0
    },
    "level": "plant",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk"
    ]
   },
   "REG-003": {
    "name": "Licence expirations, next 12 months",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Licences expiring in next 12 months",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "licences_expiring_12m"
    ],
    "rules": {
     "licences_expiring_12m": "SUM"
    },
    "val": {
     "Group": [
      3.0,
      1.0,
      3.0,
      2.0,
      2.0,
      1.0
     ],
     "A1": [
      2.0,
      1.0,
      2.0,
      1.0,
      1.0,
      1.0
     ],
     "A2": [
      1.0,
      0.0,
      1.0,
      1.0,
      1.0,
      0.0
     ],
     "Plant01": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant02": [
      1.0,
      1.0,
      1.0,
      1.0,
      1.0,
      1.0
     ],
     "Plant03": [
      1.0,
      0.0,
      1.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant04": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant05": [
      1.0,
      0.0,
      1.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant06": [
      0.0,
      0.0,
      0.0,
      1.0,
      1.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "licences_expiring_12m": 1.0
     },
     "A1": {
      "licences_expiring_12m": 1.0
     },
     "A2": {
      "licences_expiring_12m": 0.0
     },
     "Plant01": {
      "licences_expiring_12m": 0.0
     },
     "Plant02": {
      "licences_expiring_12m": 1.0
     },
     "Plant03": {
      "licences_expiring_12m": 0.0
     },
     "Plant04": {
      "licences_expiring_12m": 0.0
     },
     "Plant05": {
      "licences_expiring_12m": 0.0
     },
     "Plant06": {
      "licences_expiring_12m": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 1.0,
     "Plant01": 1.0,
     "Plant02": 0.0,
     "Plant03": 1.0,
     "Plant04": 0.0,
     "Plant05": 0.0,
     "Plant06": 0.0
    },
    "level": "plant",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk"
    ]
   },
   "REG-004": {
    "name": "Regulatory obligations due, next 30 days",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Regulatory obligations due in next 30 days",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "reg_obligations_due_30d"
    ],
    "rules": {
     "reg_obligations_due_30d": "SUM"
    },
    "val": {
     "Group": [
      4.0,
      2.0,
      4.0,
      4.0,
      4.0,
      2.0
     ],
     "A1": [
      3.0,
      1.0,
      2.0,
      1.0,
      2.0,
      1.0
     ],
     "A2": [
      1.0,
      1.0,
      2.0,
      3.0,
      2.0,
      1.0
     ],
     "Plant01": [
      1.0,
      0.0,
      1.0,
      0.0,
      1.0,
      0.0
     ],
     "Plant02": [
      1.0,
      0.0,
      1.0,
      1.0,
      0.0,
      1.0
     ],
     "Plant03": [
      1.0,
      1.0,
      0.0,
      0.0,
      1.0,
      0.0
     ],
     "Plant04": [
      0.0,
      0.0,
      1.0,
      1.0,
      1.0,
      0.0
     ],
     "Plant05": [
      1.0,
      1.0,
      1.0,
      1.0,
      1.0,
      1.0
     ],
     "Plant06": [
      0.0,
      0.0,
      0.0,
      1.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "reg_obligations_due_30d": 2.0
     },
     "A1": {
      "reg_obligations_due_30d": 1.0
     },
     "A2": {
      "reg_obligations_due_30d": 1.0
     },
     "Plant01": {
      "reg_obligations_due_30d": 0.0
     },
     "Plant02": {
      "reg_obligations_due_30d": 1.0
     },
     "Plant03": {
      "reg_obligations_due_30d": 0.0
     },
     "Plant04": {
      "reg_obligations_due_30d": 0.0
     },
     "Plant05": {
      "reg_obligations_due_30d": 1.0
     },
     "Plant06": {
      "reg_obligations_due_30d": 0.0
     }
    },
    "excl": {
     "A1": 1.0,
     "A2": 1.0,
     "Plant01": 1.0,
     "Plant02": 0.0,
     "Plant03": 1.0,
     "Plant04": 1.0,
     "Plant05": 0.0,
     "Plant06": 1.0
    },
    "level": "plant",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk"
    ]
   },
   "REG-005": {
    "name": "Overdue regulatory obligations",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Regulatory obligations overdue",
    "basis": "Month end",
    "better": "down",
    "target": 0,
    "fields": [
     "reg_obligations_overdue"
    ],
    "rules": {
     "reg_obligations_overdue": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant01": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant02": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant03": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant04": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant05": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant06": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "reg_obligations_overdue": 0.0
     },
     "A1": {
      "reg_obligations_overdue": 0.0
     },
     "A2": {
      "reg_obligations_overdue": 0.0
     },
     "Plant01": {
      "reg_obligations_overdue": 0.0
     },
     "Plant02": {
      "reg_obligations_overdue": 0.0
     },
     "Plant03": {
      "reg_obligations_overdue": 0.0
     },
     "Plant04": {
      "reg_obligations_overdue": 0.0
     },
     "Plant05": {
      "reg_obligations_overdue": 0.0
     },
     "Plant06": {
      "reg_obligations_overdue": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 0.0,
     "Plant01": 0.0,
     "Plant02": 0.0,
     "Plant03": 0.0,
     "Plant04": 0.0,
     "Plant05": 0.0,
     "Plant06": 0.0
    },
    "level": "plant",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk",
     "P2-O05-Risk"
    ]
   },
   "REG-007": {
    "name": "Open regulatory actions",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Open regulatory actions",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "reg_actions_open"
    ],
    "rules": {
     "reg_actions_open": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      1.0,
      0.0,
      1.0,
      1.0,
      0.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      1.0,
      0.0,
      0.0
     ],
     "A2": [
      0.0,
      1.0,
      0.0,
      0.0,
      1.0,
      0.0
     ],
     "Plant01": [
      0.0,
      0.0,
      0.0,
      1.0,
      0.0,
      0.0
     ],
     "Plant02": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant03": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant04": [
      0.0,
      1.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant05": [
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
      0.0
     ],
     "Plant06": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "reg_actions_open": 0.0
     },
     "A1": {
      "reg_actions_open": 0.0
     },
     "A2": {
      "reg_actions_open": 0.0
     },
     "Plant01": {
      "reg_actions_open": 0.0
     },
     "Plant02": {
      "reg_actions_open": 0.0
     },
     "Plant03": {
      "reg_actions_open": 0.0
     },
     "Plant04": {
      "reg_actions_open": 0.0
     },
     "Plant05": {
      "reg_actions_open": 0.0
     },
     "Plant06": {
      "reg_actions_open": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 0.0,
     "Plant01": 0.0,
     "Plant02": 0.0,
     "Plant03": 0.0,
     "Plant04": 0.0,
     "Plant05": 0.0,
     "Plant06": 0.0
    },
    "level": "plant",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk"
    ]
   },
   "REG-008": {
    "name": "Overdue compliance actions",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Overdue compliance actions",
    "basis": "Month end",
    "better": "down",
    "target": 0,
    "fields": [
     "compliance_actions_overdue"
    ],
    "rules": {
     "compliance_actions_overdue": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant01": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant02": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant03": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant04": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant05": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant06": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "compliance_actions_overdue": 0.0
     },
     "A1": {
      "compliance_actions_overdue": 0.0
     },
     "A2": {
      "compliance_actions_overdue": 0.0
     },
     "Plant01": {
      "compliance_actions_overdue": 0.0
     },
     "Plant02": {
      "compliance_actions_overdue": 0.0
     },
     "Plant03": {
      "compliance_actions_overdue": 0.0
     },
     "Plant04": {
      "compliance_actions_overdue": 0.0
     },
     "Plant05": {
      "compliance_actions_overdue": 0.0
     },
     "Plant06": {
      "compliance_actions_overdue": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 0.0,
     "Plant01": 0.0,
     "Plant02": 0.0,
     "Plant03": 0.0,
     "Plant04": 0.0,
     "Plant05": 0.0,
     "Plant06": 0.0
    },
    "level": "plant",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk"
    ]
   },
   "REG-009": {
    "name": "Disclosure-clock status",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Triggered if any event that needs disclosure is open, otherwise Not triggered",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "disclosure_events_open"
    ],
    "rules": {
     "disclosure_events_open": "SUM"
    },
    "val": {
     "Group": [
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered"
     ],
     "A1": [
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered"
     ],
     "A2": [
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered"
     ],
     "Plant01": [
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered"
     ],
     "Plant02": [
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered"
     ],
     "Plant03": [
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered"
     ],
     "Plant04": [
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered"
     ],
     "Plant05": [
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered"
     ],
     "Plant06": [
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered"
     ]
    },
    "inp": {
     "Group": {
      "disclosure_events_open": 0.0
     },
     "A1": {
      "disclosure_events_open": 0.0
     },
     "A2": {
      "disclosure_events_open": 0.0
     },
     "Plant01": {
      "disclosure_events_open": 0.0
     },
     "Plant02": {
      "disclosure_events_open": 0.0
     },
     "Plant03": {
      "disclosure_events_open": 0.0
     },
     "Plant04": {
      "disclosure_events_open": 0.0
     },
     "Plant05": {
      "disclosure_events_open": 0.0
     },
     "Plant06": {
      "disclosure_events_open": 0.0
     }
    },
    "excl": {
     "A1": "Not triggered",
     "A2": "Not triggered"
    },
    "level": "plant",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-O05-Risk"
    ]
   },
   "REG-010": {
    "name": "Regulatory breaches YTD",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Sum of regulatory breaches since April",
    "basis": "Year to date",
    "better": "down",
    "target": 0,
    "fields": [
     "reg_breaches (YTD)"
    ],
    "rules": {
     "reg_breaches (YTD)": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant01": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant02": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant03": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant04": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant05": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant06": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "reg_breaches (YTD)": 0.0
     },
     "A1": {
      "reg_breaches (YTD)": 0.0
     },
     "A2": {
      "reg_breaches (YTD)": 0.0
     },
     "Plant01": {
      "reg_breaches (YTD)": 0.0
     },
     "Plant02": {
      "reg_breaches (YTD)": 0.0
     },
     "Plant03": {
      "reg_breaches (YTD)": 0.0
     },
     "Plant04": {
      "reg_breaches (YTD)": 0.0
     },
     "Plant05": {
      "reg_breaches (YTD)": 0.0
     },
     "Plant06": {
      "reg_breaches (YTD)": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 0.0,
     "Plant01": 0.0,
     "Plant02": 0.0,
     "Plant03": 0.0,
     "Plant04": 0.0,
     "Plant05": 0.0,
     "Plant06": 0.0
    },
    "level": "plant",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G01-Portfolio",
     "P2-G01b-PortfolioCertified",
     "P2-O05-Risk"
    ]
   },
   "RSK-003": {
    "name": "Regulatory breaches YTD (same measure as REG-010)",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Sum of regulatory breaches since April",
    "basis": "Year to date",
    "better": "down",
    "target": 0,
    "fields": [
     "reg_breaches (YTD)"
    ],
    "rules": {
     "reg_breaches (YTD)": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant01": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant02": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant03": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant04": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant05": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant06": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "reg_breaches (YTD)": 0.0
     },
     "A1": {
      "reg_breaches (YTD)": 0.0
     },
     "A2": {
      "reg_breaches (YTD)": 0.0
     },
     "Plant01": {
      "reg_breaches (YTD)": 0.0
     },
     "Plant02": {
      "reg_breaches (YTD)": 0.0
     },
     "Plant03": {
      "reg_breaches (YTD)": 0.0
     },
     "Plant04": {
      "reg_breaches (YTD)": 0.0
     },
     "Plant05": {
      "reg_breaches (YTD)": 0.0
     },
     "Plant06": {
      "reg_breaches (YTD)": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 0.0,
     "Plant01": 0.0,
     "Plant02": 0.0,
     "Plant03": 0.0,
     "Plant04": 0.0,
     "Plant05": 0.0,
     "Plant06": 0.0
    },
    "level": "plant",
    "theme": "T1",
    "source": "alias",
    "aliasOf": "REG-010",
    "screens": [
     "P2-O01-EnterpriseHealth",
     "P2-X-States",
     "P3-L-LargeDisplay"
    ]
   },
   "CMP-005": {
    "name": "Regulatory breaches YTD (same measure as REG-010)",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Sum of regulatory breaches since April",
    "basis": "Year to date",
    "better": "down",
    "target": 0,
    "fields": [
     "reg_breaches (YTD)"
    ],
    "rules": {
     "reg_breaches (YTD)": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant01": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant02": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant03": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant04": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant05": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant06": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "reg_breaches (YTD)": 0.0
     },
     "A1": {
      "reg_breaches (YTD)": 0.0
     },
     "A2": {
      "reg_breaches (YTD)": 0.0
     },
     "Plant01": {
      "reg_breaches (YTD)": 0.0
     },
     "Plant02": {
      "reg_breaches (YTD)": 0.0
     },
     "Plant03": {
      "reg_breaches (YTD)": 0.0
     },
     "Plant04": {
      "reg_breaches (YTD)": 0.0
     },
     "Plant05": {
      "reg_breaches (YTD)": 0.0
     },
     "Plant06": {
      "reg_breaches (YTD)": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 0.0,
     "Plant01": 0.0,
     "Plant02": 0.0,
     "Plant03": 0.0,
     "Plant04": 0.0,
     "Plant05": 0.0,
     "Plant06": 0.0
    },
    "level": "plant",
    "theme": "T7",
    "source": "alias",
    "aliasOf": "REG-010",
    "screens": [
     "P2-E01-EntityHome",
     "P2-O01-EnterpriseHealth"
    ]
   },
   "EHS-008": {
    "name": "EHS escalation clocks running",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "EHS escalation clocks running",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "ehs_escalation_clocks"
    ],
    "rules": {
     "ehs_escalation_clocks": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant01": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant02": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant03": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant04": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant05": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant06": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "ehs_escalation_clocks": 0.0
     },
     "A1": {
      "ehs_escalation_clocks": 0.0
     },
     "A2": {
      "ehs_escalation_clocks": 0.0
     },
     "Plant01": {
      "ehs_escalation_clocks": 0.0
     },
     "Plant02": {
      "ehs_escalation_clocks": 0.0
     },
     "Plant03": {
      "ehs_escalation_clocks": 0.0
     },
     "Plant04": {
      "ehs_escalation_clocks": 0.0
     },
     "Plant05": {
      "ehs_escalation_clocks": 0.0
     },
     "Plant06": {
      "ehs_escalation_clocks": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 0.0,
     "Plant01": 0.0,
     "Plant02": 0.0,
     "Plant03": 0.0,
     "Plant04": 0.0,
     "Plant05": 0.0,
     "Plant06": 0.0
    },
    "level": "plant",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk",
     "P2-O05-Risk"
    ]
   },
   "EHS-010": {
    "name": "EHS investigation completion rate YTD",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "EHS investigations completed since April ÷ Investigations due since April × 100 (100 if none due)",
    "basis": "Year to date",
    "better": "up",
    "target": 95,
    "fields": [
     "investigations_due (YTD)",
     "investigations_completed (YTD)"
    ],
    "rules": {
     "investigations_due (YTD)": "SUM",
     "investigations_completed (YTD)": "SUM"
    },
    "val": {
     "Group": [
      66.67,
      82.35,
      84.62,
      84.85,
      86.36,
      85.42
     ],
     "A1": [
      75.0,
      85.71,
      81.82,
      86.67,
      83.33,
      81.82
     ],
     "A2": [
      60.0,
      80.0,
      86.67,
      83.33,
      88.46,
      88.46
     ],
     "Plant01": [
      100.0,
      100.0,
      100.0,
      100.0,
      100.0,
      100.0
     ],
     "Plant02": [
      100.0,
      100.0,
      80.0,
      83.33,
      83.33,
      75.0
     ],
     "Plant03": [
      0.0,
      0.0,
      66.67,
      66.67,
      60.0,
      60.0
     ],
     "Plant04": [
      50.0,
      66.67,
      80.0,
      80.0,
      85.71,
      85.71
     ],
     "Plant05": [
      0.0,
      66.67,
      66.67,
      66.67,
      83.33,
      83.33
     ],
     "Plant06": [
      100.0,
      100.0,
      100.0,
      90.0,
      92.31,
      92.31
     ]
    },
    "inp": {
     "Group": {
      "investigations_due (YTD)": 48.0,
      "investigations_completed (YTD)": 41.0
     },
     "A1": {
      "investigations_due (YTD)": 22.0,
      "investigations_completed (YTD)": 18.0
     },
     "A2": {
      "investigations_due (YTD)": 26.0,
      "investigations_completed (YTD)": 23.0
     },
     "Plant01": {
      "investigations_due (YTD)": 9.0,
      "investigations_completed (YTD)": 9.0
     },
     "Plant02": {
      "investigations_due (YTD)": 8.0,
      "investigations_completed (YTD)": 6.0
     },
     "Plant03": {
      "investigations_due (YTD)": 5.0,
      "investigations_completed (YTD)": 3.0
     },
     "Plant04": {
      "investigations_due (YTD)": 7.0,
      "investigations_completed (YTD)": 6.0
     },
     "Plant05": {
      "investigations_due (YTD)": 6.0,
      "investigations_completed (YTD)": 5.0
     },
     "Plant06": {
      "investigations_due (YTD)": 13.0,
      "investigations_completed (YTD)": 12.0
     }
    },
    "excl": {
     "A1": 88.46,
     "A2": 81.82,
     "Plant01": 69.23,
     "Plant02": 85.71,
     "Plant03": 88.24,
     "Plant04": 89.47,
     "Plant05": 90.0,
     "Plant06": 84.62
    },
    "level": "plant",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G07-Risk"
    ]
   },
   "CTL-002": {
    "name": "Control failures YTD",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Sum of control failures since April",
    "basis": "Year to date",
    "better": null,
    "target": null,
    "fields": [
     "control_failures (YTD)"
    ],
    "rules": {
     "control_failures (YTD)": "SUM"
    },
    "val": {
     "Group": [
      1.0,
      1.0,
      1.0,
      2.0,
      3.0,
      4.0
     ],
     "A1": [
      1.0,
      1.0,
      1.0,
      2.0,
      2.0,
      2.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
      2.0
     ]
    },
    "inp": {
     "Group": {
      "control_failures (YTD)": 4.0
     },
     "A1": {
      "control_failures (YTD)": 2.0
     },
     "A2": {
      "control_failures (YTD)": 2.0
     }
    },
    "excl": {
     "A1": 2.0,
     "A2": 2.0
    },
    "level": "entity",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk",
     "P2-O05-Risk"
    ]
   },
   "CTL-004": {
    "name": "High-severity control failures YTD",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Sum of high-severity control failures since April",
    "basis": "Year to date",
    "better": "down",
    "target": 0,
    "fields": [
     "control_failures_high (YTD)"
    ],
    "rules": {
     "control_failures_high (YTD)": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "control_failures_high (YTD)": 0.0
     },
     "A1": {
      "control_failures_high (YTD)": 0.0
     },
     "A2": {
      "control_failures_high (YTD)": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 0.0
    },
    "level": "entity",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G07-Risk",
     "P2-O05-Risk"
    ]
   },
   "CTL-005": {
    "name": "Policy exceptions YTD",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Sum of policy exceptions since April",
    "basis": "Year to date",
    "better": null,
    "target": null,
    "fields": [
     "policy_exceptions (YTD)"
    ],
    "rules": {
     "policy_exceptions (YTD)": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      1.0,
      3.0,
      4.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
      2.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      1.0,
      2.0,
      2.0
     ]
    },
    "inp": {
     "Group": {
      "policy_exceptions (YTD)": 4.0
     },
     "A1": {
      "policy_exceptions (YTD)": 2.0
     },
     "A2": {
      "policy_exceptions (YTD)": 2.0
     }
    },
    "excl": {
     "A1": 2.0,
     "A2": 2.0
    },
    "level": "entity",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk",
     "P2-O05-Risk"
    ]
   },
   "CTL-006": {
    "name": "Unauthorised-vendor usage YTD",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Sum of unauthorised vendor uses since April",
    "basis": "Year to date",
    "better": "down",
    "target": 0,
    "fields": [
     "unauthorized_vendor_uses (YTD)"
    ],
    "rules": {
     "unauthorized_vendor_uses (YTD)": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "unauthorized_vendor_uses (YTD)": 0.0
     },
     "A1": {
      "unauthorized_vendor_uses (YTD)": 0.0
     },
     "A2": {
      "unauthorized_vendor_uses (YTD)": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 0.0
    },
    "level": "entity",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E04-Supply",
     "P2-E07-RegEHS",
     "P2-G07-Risk",
     "P2-O05-Risk"
    ]
   },
   "CTL-007": {
    "name": "Segregation-of-duties exceptions YTD",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Sum of segregation-of-duties exceptions since April",
    "basis": "Year to date",
    "better": null,
    "target": null,
    "fields": [
     "sod_exceptions (YTD)"
    ],
    "rules": {
     "sod_exceptions (YTD)": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      1.0,
      1.0,
      1.0,
      1.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      0.0,
      0.0,
      1.0,
      1.0,
      1.0,
      1.0
     ]
    },
    "inp": {
     "Group": {
      "sod_exceptions (YTD)": 1.0
     },
     "A1": {
      "sod_exceptions (YTD)": 0.0
     },
     "A2": {
      "sod_exceptions (YTD)": 1.0
     }
    },
    "excl": {
     "A1": 1.0,
     "A2": 0.0
    },
    "level": "entity",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk",
     "P2-O05-Risk"
    ]
   },
   "CTL-008": {
    "name": "Unauthorised-access events YTD",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Sum of unauthorised access events since April",
    "basis": "Year to date",
    "better": "down",
    "target": 0,
    "fields": [
     "unauthorized_access_events (YTD)"
    ],
    "rules": {
     "unauthorized_access_events (YTD)": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "unauthorized_access_events (YTD)": 0.0
     },
     "A1": {
      "unauthorized_access_events (YTD)": 0.0
     },
     "A2": {
      "unauthorized_access_events (YTD)": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 0.0
    },
    "level": "entity",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk",
     "P2-O05-Risk"
    ]
   },
   "CTL-009": {
    "name": "Data-sharing exceptions YTD",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Sum of data-sharing exceptions since April",
    "basis": "Year to date",
    "better": "down",
    "target": 0,
    "fields": [
     "data_sharing_exceptions (YTD)"
    ],
    "rules": {
     "data_sharing_exceptions (YTD)": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "data_sharing_exceptions (YTD)": 0.0
     },
     "A1": {
      "data_sharing_exceptions (YTD)": 0.0
     },
     "A2": {
      "data_sharing_exceptions (YTD)": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 0.0
    },
    "level": "entity",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk",
     "P2-O05-Risk"
    ]
   },
   "CTL-010": {
    "name": "Manual overrides YTD",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Sum of manual operational or system overrides since April",
    "basis": "Year to date",
    "better": null,
    "target": null,
    "fields": [
     "manual_overrides (YTD)"
    ],
    "rules": {
     "manual_overrides (YTD)": "SUM"
    },
    "val": {
     "Group": [
      1.0,
      3.0,
      6.0,
      7.0,
      11.0,
      14.0
     ],
     "A1": [
      1.0,
      1.0,
      3.0,
      4.0,
      6.0,
      7.0
     ],
     "A2": [
      0.0,
      2.0,
      3.0,
      3.0,
      5.0,
      7.0
     ]
    },
    "inp": {
     "Group": {
      "manual_overrides (YTD)": 14.0
     },
     "A1": {
      "manual_overrides (YTD)": 7.0
     },
     "A2": {
      "manual_overrides (YTD)": 7.0
     }
    },
    "excl": {
     "A1": 7.0,
     "A2": 7.0
    },
    "level": "entity",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-G07-Risk",
     "P2-O05-Risk"
    ]
   },
   "CTL-003": {
    "name": "Assurance reviews completed",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Assurance reviews completed since April, of those planned since April",
    "basis": "Year to date",
    "better": null,
    "target": null,
    "fields": [
     "assurance_reviews_planned (YTD)",
     "assurance_reviews_done (YTD)"
    ],
    "rules": {
     "assurance_reviews_planned (YTD)": "SUM",
     "assurance_reviews_done (YTD)": "SUM"
    },
    "val": {
     "Group": [
      "2 of 2",
      "3 of 4",
      "3 of 4",
      "4 of 6",
      "6 of 8",
      "6 of 8"
     ],
     "A1": [
      "1 of 1",
      "1 of 2",
      "1 of 2",
      "1 of 3",
      "2 of 4",
      "2 of 4"
     ],
     "A2": [
      "1 of 1",
      "2 of 2",
      "2 of 2",
      "3 of 3",
      "4 of 4",
      "4 of 4"
     ]
    },
    "inp": {
     "Group": {
      "assurance_reviews_planned (YTD)": 8.0,
      "assurance_reviews_done (YTD)": 6.0
     },
     "A1": {
      "assurance_reviews_planned (YTD)": 4.0,
      "assurance_reviews_done (YTD)": 2.0
     },
     "A2": {
      "assurance_reviews_planned (YTD)": 4.0,
      "assurance_reviews_done (YTD)": 4.0
     }
    },
    "excl": {
     "A1": "4 of 4",
     "A2": "2 of 4"
    },
    "level": "entity",
    "theme": "T7",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G07-Risk"
    ]
   },
   "GOV-001": {
    "name": "Ageing certification approvals",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Certification approvals past due date",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "cert_approvals_ageing"
    ],
    "rules": {
     "cert_approvals_ageing": "SUM"
    },
    "val": {
     "Group": [
      1.0,
      2.0,
      0.0,
      1.0,
      2.0,
      2.0
     ],
     "A1": [
      1.0,
      1.0,
      0.0,
      1.0,
      1.0,
      1.0
     ],
     "A2": [
      0.0,
      1.0,
      0.0,
      0.0,
      1.0,
      1.0
     ]
    },
    "inp": {
     "Group": {
      "cert_approvals_ageing": 2.0
     },
     "A1": {
      "cert_approvals_ageing": 1.0
     },
     "A2": {
      "cert_approvals_ageing": 1.0
     }
    },
    "excl": {
     "A1": 1.0,
     "A2": 1.0
    },
    "level": "entity",
    "theme": "T2",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E08-CertWorkbench",
     "P2-G08-CertGovernance",
     "P2-G08o-OwnerTrust"
    ]
   },
   "GOV-002": {
    "name": "KPI overrides",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "KPI values overridden",
    "basis": "Month end",
    "better": "down",
    "target": 0,
    "fields": [
     "kpi_overrides"
    ],
    "rules": {
     "kpi_overrides": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "kpi_overrides": 0.0
     },
     "A1": {
      "kpi_overrides": 0.0
     },
     "A2": {
      "kpi_overrides": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 0.0
    },
    "level": "entity",
    "theme": "T2",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E08-CertWorkbench",
     "P2-G08-CertGovernance",
     "P2-G08o-OwnerTrust"
    ]
   },
   "GOV-003": {
    "name": "Recurring data-quality issues",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Recurring data-quality issues",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "dq_issues_recurring"
    ],
    "rules": {
     "dq_issues_recurring": "SUM"
    },
    "val": {
     "Group": [
      1.0,
      1.0,
      1.0,
      1.0,
      1.0,
      1.0
     ],
     "A1": [
      1.0,
      1.0,
      1.0,
      1.0,
      1.0,
      1.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "dq_issues_recurring": 1.0
     },
     "A1": {
      "dq_issues_recurring": 1.0
     },
     "A2": {
      "dq_issues_recurring": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 1.0
    },
    "level": "entity",
    "theme": "T2",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E08-CertWorkbench",
     "P2-G08-CertGovernance",
     "P2-G08o-OwnerTrust"
    ]
   },
   "GOV-004": {
    "name": "Open audit findings",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Open audit findings",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "audit_findings_open"
    ],
    "rules": {
     "audit_findings_open": "SUM"
    },
    "val": {
     "Group": [
      8.0,
      8.0,
      8.0,
      7.0,
      8.0,
      7.0
     ],
     "A1": [
      2.0,
      3.0,
      2.0,
      2.0,
      3.0,
      2.0
     ],
     "A2": [
      6.0,
      5.0,
      6.0,
      5.0,
      5.0,
      5.0
     ]
    },
    "inp": {
     "Group": {
      "audit_findings_open": 7.0
     },
     "A1": {
      "audit_findings_open": 2.0
     },
     "A2": {
      "audit_findings_open": 5.0
     }
    },
    "excl": {
     "A1": 5.0,
     "A2": 2.0
    },
    "level": "entity",
    "theme": "T2",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS",
     "P2-E08-CertWorkbench",
     "P2-G07-Risk",
     "P2-G08-CertGovernance",
     "P2-G08o-OwnerTrust",
     "P2-O05-Risk"
    ]
   },
   "GOV-005": {
    "name": "Overdue assurance actions",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Overdue assurance actions",
    "basis": "Month end",
    "better": "down",
    "target": 0,
    "fields": [
     "assurance_actions_overdue"
    ],
    "rules": {
     "assurance_actions_overdue": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "assurance_actions_overdue": 0.0
     },
     "A1": {
      "assurance_actions_overdue": 0.0
     },
     "A2": {
      "assurance_actions_overdue": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 0.0
    },
    "level": "entity",
    "theme": "T2",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E08-CertWorkbench",
     "P2-G08-CertGovernance",
     "P2-G08o-OwnerTrust"
    ]
   },
   "GOV-006": {
    "name": "Repeat findings",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Repeat audit findings",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "repeat_findings"
    ],
    "rules": {
     "repeat_findings": "SUM"
    },
    "val": {
     "Group": [
      1.0,
      1.0,
      1.0,
      1.0,
      1.0,
      1.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      1.0,
      1.0,
      1.0,
      1.0,
      1.0,
      1.0
     ]
    },
    "inp": {
     "Group": {
      "repeat_findings": 1.0
     },
     "A1": {
      "repeat_findings": 0.0
     },
     "A2": {
      "repeat_findings": 1.0
     }
    },
    "excl": {
     "A1": 1.0,
     "A2": 0.0
    },
    "level": "entity",
    "theme": "T2",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E08-CertWorkbench",
     "P2-G08-CertGovernance",
     "P2-G08o-OwnerTrust"
    ]
   },
   "GOV-007": {
    "name": "Leadership KPIs affected by findings",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Leadership KPIs affected by open findings",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "leadership_kpis_affected"
    ],
    "rules": {
     "leadership_kpis_affected": "SUM"
    },
    "val": {
     "Group": [
      1.0,
      1.0,
      1.0,
      1.0,
      1.0,
      1.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      1.0,
      1.0,
      1.0,
      1.0,
      1.0,
      1.0
     ]
    },
    "inp": {
     "Group": {
      "leadership_kpis_affected": 1.0
     },
     "A1": {
      "leadership_kpis_affected": 0.0
     },
     "A2": {
      "leadership_kpis_affected": 1.0
     }
    },
    "excl": {
     "A1": 1.0,
     "A2": 0.0
    },
    "level": "entity",
    "theme": "T2",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G08-CertGovernance",
     "P2-G08o-OwnerTrust"
    ]
   },
   "TRU-004": {
    "name": "Open reconciliation breaks",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Open reconciliation breaks",
    "basis": "Month end",
    "better": "down",
    "target": 0,
    "fields": [
     "recon_breaks_open"
    ],
    "rules": {
     "recon_breaks_open": "SUM"
    },
    "val": {
     "Group": [
      1.0,
      1.0,
      1.0,
      1.0,
      1.0,
      1.0
     ],
     "A1": [
      1.0,
      1.0,
      1.0,
      1.0,
      1.0,
      1.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "recon_breaks_open": 1.0
     },
     "A1": {
      "recon_breaks_open": 1.0
     },
     "A2": {
      "recon_breaks_open": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 1.0
    },
    "level": "entity",
    "theme": "T2",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E08-CertWorkbench",
     "P2-G08-CertGovernance"
    ]
   },
   "TRU-006": {
    "name": "Overdue certifications",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Certifications overdue",
    "basis": "Month end",
    "better": "down",
    "target": 0,
    "fields": [
     "certifications_overdue"
    ],
    "rules": {
     "certifications_overdue": "SUM"
    },
    "val": {
     "Group": [
      1.0,
      1.0,
      1.0,
      1.0,
      2.0,
      2.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      1.0,
      1.0,
      1.0,
      1.0,
      2.0,
      2.0
     ]
    },
    "inp": {
     "Group": {
      "certifications_overdue": 2.0
     },
     "A1": {
      "certifications_overdue": 0.0
     },
     "A2": {
      "certifications_overdue": 2.0
     }
    },
    "excl": {
     "A1": 2.0,
     "A2": 0.0
    },
    "level": "entity",
    "theme": "T2",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E08-CertWorkbench",
     "P2-G08-CertGovernance"
    ]
   },
   "TRU-007": {
    "name": "Material reconciliation breaks",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Material reconciliation breaks",
    "basis": "Month end",
    "better": "down",
    "target": 0,
    "fields": [
     "recon_breaks_material"
    ],
    "rules": {
     "recon_breaks_material": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
      1.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
      1.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "recon_breaks_material": 1.0
     },
     "A1": {
      "recon_breaks_material": 1.0
     },
     "A2": {
      "recon_breaks_material": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 1.0
    },
    "level": "entity",
    "theme": "T2",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G08-CertGovernance",
     "P2-G08o-OwnerTrust"
    ]
   },
   "GOV-008": {
    "name": "Evidence completeness rate",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Evidence items complete ÷ Evidence items required × 100",
    "basis": "Month end",
    "better": "up",
    "target": 95,
    "fields": [
     "evidence_required",
     "evidence_complete"
    ],
    "rules": {
     "evidence_required": "SUM",
     "evidence_complete": "SUM"
    },
    "val": {
     "Group": [
      87.96,
      87.96,
      87.96,
      88.89,
      87.96,
      87.96
     ],
     "A1": [
      86.0,
      86.0,
      86.0,
      86.0,
      86.0,
      86.0
     ],
     "A2": [
      89.66,
      89.66,
      89.66,
      91.38,
      89.66,
      89.66
     ]
    },
    "inp": {
     "Group": {
      "evidence_required": 108.0,
      "evidence_complete": 95.0
     },
     "A1": {
      "evidence_required": 50.0,
      "evidence_complete": 43.0
     },
     "A2": {
      "evidence_required": 58.0,
      "evidence_complete": 52.0
     }
    },
    "excl": {
     "A1": 89.66,
     "A2": 86.0
    },
    "level": "entity",
    "theme": "T2",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E08-CertWorkbench",
     "P2-G08-CertGovernance",
     "P2-G08o-OwnerTrust"
    ]
   },
   "GOV-009": {
    "name": "Average finding-closure time",
    "unit": "days",
    "dp": 1,
    "div": 1,
    "formula": "Days taken to close findings since April ÷ Findings closed since April",
    "basis": "Year to date",
    "better": "down",
    "target": 30,
    "fields": [
     "findings_closed (YTD)",
     "finding_closure_days (YTD)"
    ],
    "rules": {
     "findings_closed (YTD)": "SUM",
     "finding_closure_days (YTD)": "SUM"
    },
    "val": {
     "Group": [
      33.2,
      32.0,
      33.31,
      32.41,
      32.71,
      32.81
     ],
     "A1": [
      27.5,
      28.0,
      28.33,
      28.0,
      28.36,
      28.57
     ],
     "A2": [
      37.0,
      37.0,
      37.57,
      37.38,
      37.5,
      37.75
     ]
    },
    "inp": {
     "Group": {
      "findings_closed (YTD)": 26.0,
      "finding_closure_days (YTD)": 853.0
     },
     "A1": {
      "findings_closed (YTD)": 14.0,
      "finding_closure_days (YTD)": 400.0
     },
     "A2": {
      "findings_closed (YTD)": 12.0,
      "finding_closure_days (YTD)": 453.0
     }
    },
    "excl": {
     "A1": 37.75,
     "A2": 28.57
    },
    "level": "entity",
    "theme": "T2",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E08-CertWorkbench",
     "P2-G08-CertGovernance",
     "P2-G08o-OwnerTrust"
    ]
   },
   "TRU-001": {
    "name": "Certified KPI percentage",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Leadership KPI values certified ÷ Leadership KPI values reported × 100",
    "basis": "Month end",
    "better": "up",
    "target": 95,
    "fields": [
     "kpis_leadership",
     "kpis_certified"
    ],
    "rules": {
     "kpis_leadership": "SUM",
     "kpis_certified": "SUM"
    },
    "val": {
     "Group": [
      83.93,
      83.93,
      83.93,
      83.93,
      83.93,
      83.93
     ],
     "A1": [
      82.14,
      82.14,
      82.14,
      82.14,
      82.14,
      82.14
     ],
     "A2": [
      85.71,
      85.71,
      85.71,
      85.71,
      85.71,
      85.71
     ]
    },
    "inp": {
     "Group": {
      "kpis_leadership": 56.0,
      "kpis_certified": 47.0
     },
     "A1": {
      "kpis_leadership": 28.0,
      "kpis_certified": 23.0
     },
     "A2": {
      "kpis_leadership": 28.0,
      "kpis_certified": 24.0
     }
    },
    "excl": {
     "A1": 85.71,
     "A2": 82.14
    },
    "level": "entity",
    "theme": "T2",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E08-CertWorkbench",
     "P2-G01-Portfolio",
     "P2-G01b-PortfolioCertified",
     "P2-G02-EntityComparison",
     "P2-G08-CertGovernance",
     "P2-G08o-OwnerTrust"
    ]
   },
   "TRU-002": {
    "name": "Uncertified KPI count",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Leadership KPI values reported − Values certified",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "kpis_leadership",
     "kpis_certified"
    ],
    "rules": {
     "kpis_leadership": "SUM",
     "kpis_certified": "SUM"
    },
    "val": {
     "Group": [
      9.0,
      9.0,
      9.0,
      9.0,
      9.0,
      9.0
     ],
     "A1": [
      5.0,
      5.0,
      5.0,
      5.0,
      5.0,
      5.0
     ],
     "A2": [
      4.0,
      4.0,
      4.0,
      4.0,
      4.0,
      4.0
     ]
    },
    "inp": {
     "Group": {
      "kpis_leadership": 56.0,
      "kpis_certified": 47.0
     },
     "A1": {
      "kpis_leadership": 28.0,
      "kpis_certified": 23.0
     },
     "A2": {
      "kpis_leadership": 28.0,
      "kpis_certified": 24.0
     }
    },
    "excl": {
     "A1": 4.0,
     "A2": 5.0
    },
    "level": "entity",
    "theme": "T2",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G08-CertGovernance",
     "P2-G08o-OwnerTrust"
    ]
   },
   "TRU-005": {
    "name": "KPI certification coverage",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Leadership KPI values inside the certification process ÷ Values reported × 100",
    "basis": "Month end",
    "better": "up",
    "target": 95,
    "fields": [
     "kpis_leadership",
     "kpis_in_scope"
    ],
    "rules": {
     "kpis_leadership": "SUM",
     "kpis_in_scope": "SUM"
    },
    "val": {
     "Group": [
      92.86,
      92.86,
      92.86,
      92.86,
      92.86,
      92.86
     ],
     "A1": [
      92.86,
      92.86,
      92.86,
      92.86,
      92.86,
      92.86
     ],
     "A2": [
      92.86,
      92.86,
      92.86,
      92.86,
      92.86,
      92.86
     ]
    },
    "inp": {
     "Group": {
      "kpis_leadership": 56.0,
      "kpis_in_scope": 52.0
     },
     "A1": {
      "kpis_leadership": 28.0,
      "kpis_in_scope": 26.0
     },
     "A2": {
      "kpis_leadership": 28.0,
      "kpis_in_scope": 26.0
     }
    },
    "excl": {
     "A1": 92.86,
     "A2": 92.86
    },
    "level": "entity",
    "theme": "T2",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G08-CertGovernance"
    ]
   },
   "TRU-008": {
    "name": "Source-to-Lake reconciliation rate",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Records reconciled to source ÷ Records loaded × 100",
    "basis": "Month",
    "better": "up",
    "target": 99,
    "fields": [
     "lake_records_loaded",
     "lake_records_reconciled"
    ],
    "rules": {
     "lake_records_loaded": "SUM",
     "lake_records_reconciled": "SUM"
    },
    "val": {
     "Group": [
      99.45,
      99.42,
      99.23,
      98.97,
      99.33,
      99.02
     ],
     "A1": [
      99.41,
      99.39,
      99.19,
      99.05,
      99.42,
      98.93
     ],
     "A2": [
      99.48,
      99.46,
      99.26,
      98.9,
      99.25,
      99.11
     ]
    },
    "inp": {
     "Group": {
      "lake_records_loaded": 1004309.0,
      "lake_records_reconciled": 994443.0
     },
     "A1": {
      "lake_records_loaded": 500044.0,
      "lake_records_reconciled": 494690.0
     },
     "A2": {
      "lake_records_loaded": 504265.0,
      "lake_records_reconciled": 499753.0
     }
    },
    "excl": {
     "A1": 99.11,
     "A2": 98.93
    },
    "level": "entity",
    "theme": "T2",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E08-CertWorkbench",
     "P2-G08-CertGovernance",
     "P2-G08o-OwnerTrust"
    ]
   },
   "TRU-009": {
    "name": "Flash-to-MIS reconciliation rate",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Flash lines matching MIS ÷ Flash report lines × 100",
    "basis": "Month",
    "better": "up",
    "target": 98,
    "fields": [
     "mis_lines_total",
     "mis_lines_matched"
    ],
    "rules": {
     "mis_lines_total": "SUM",
     "mis_lines_matched": "SUM"
    },
    "val": {
     "Group": [
      96.83,
      96.34,
      96.46,
      96.95,
      96.83,
      95.98
     ],
     "A1": [
      95.25,
      94.75,
      94.5,
      95.0,
      95.5,
      94.25
     ],
     "A2": [
      98.33,
      97.86,
      98.33,
      98.81,
      98.1,
      97.62
     ]
    },
    "inp": {
     "Group": {
      "mis_lines_total": 820.0,
      "mis_lines_matched": 787.0
     },
     "A1": {
      "mis_lines_total": 400.0,
      "mis_lines_matched": 377.0
     },
     "A2": {
      "mis_lines_total": 420.0,
      "mis_lines_matched": 410.0
     }
    },
    "excl": {
     "A1": 97.62,
     "A2": 94.25
    },
    "level": "entity",
    "theme": "T2",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E08-CertWorkbench",
     "P2-G08-CertGovernance",
     "P2-G08o-OwnerTrust"
    ]
   },
   "TRU-010": {
    "name": "Flash-to-close variance",
    "unit": "%",
    "dp": 2,
    "div": 1,
    "formula": "|Flash revenue − Closed revenue| ÷ Closed revenue × 100",
    "basis": "Month",
    "better": "down",
    "target": 0.5,
    "fields": [
     "revenue_k",
     "flash_revenue_k"
    ],
    "rules": {
     "revenue_k": "SUM",
     "flash_revenue_k": "SUM"
    },
    "val": {
     "Group": [
      0.92,
      0.32,
      0.44,
      0.1,
      0.24,
      0.38
     ],
     "A1": [
      1.05,
      0.26,
      0.28,
      0.39,
      0.34,
      0.23
     ],
     "A2": [
      0.79,
      0.91,
      0.6,
      0.59,
      0.85,
      0.52
     ]
    },
    "inp": {
     "Group": {
      "revenue_k": 2335817.8,
      "flash_revenue_k": 2326971.1
     },
     "A1": {
      "revenue_k": 1155724.2,
      "flash_revenue_k": 1153045.0
     },
     "A2": {
      "revenue_k": 1180093.6,
      "flash_revenue_k": 1173926.1
     }
    },
    "excl": {
     "A1": 0.52,
     "A2": 0.23
    },
    "level": "entity",
    "theme": "T2",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E08-CertWorkbench",
     "P2-G08-CertGovernance",
     "P2-G08o-OwnerTrust"
    ]
   },
   "TRU-003": {
    "name": "Variance against Board number (EBITDA)",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "(Board-pack EBITDA − Certified EBITDA) ÷ Certified EBITDA × 100",
    "basis": "Month",
    "better": null,
    "target": null,
    "fields": [
     "board_ebitda_k",
     "ebitda_k"
    ],
    "rules": {
     "board_ebitda_k": "SUM",
     "ebitda_k": "SUM"
    },
    "val": {
     "Group": [
      0.09,
      -0.13,
      -0.2,
      -0.03,
      0.0,
      -0.22
     ],
     "A1": [
      -0.1,
      0.1,
      -0.28,
      -0.19,
      0.18,
      -0.17
     ],
     "A2": [
      0.29,
      -0.21,
      -0.09,
      0.2,
      -0.23,
      -0.27
     ]
    },
    "inp": {
     "Group": {
      "board_ebitda_k": 396100.2,
      "ebitda_k": 396980.3
     },
     "A1": {
      "board_ebitda_k": 201088.9,
      "ebitda_k": 201436.2
     },
     "A2": {
      "board_ebitda_k": 195011.3,
      "ebitda_k": 195544.1
     }
    },
    "excl": {
     "A1": -0.27,
     "A2": -0.17
    },
    "level": "entity",
    "theme": "T2",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G08-CertGovernance"
    ]
   },
   "TRU-011": {
    "name": "Largest entity variance against Board numbers",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Highest of the entities' |Board-pack EBITDA − Certified EBITDA| ÷ Certified EBITDA × 100",
    "basis": "Month",
    "better": null,
    "target": null,
    "fields": [
     "variable_cost_k",
     "fixed_cost_k",
     "revenue_k",
     "overhead_k",
     "board_ebitda_k"
    ],
    "rules": {
     "variable_cost_k": "SUM",
     "fixed_cost_k": "SUM",
     "revenue_k": "SUM",
     "overhead_k": "SUM",
     "board_ebitda_k": "SUM"
    },
    "val": {
     "Group": [
      0.29,
      0.21,
      0.28,
      0.2,
      0.23,
      0.27
     ],
     "A1": [
      0.29,
      0.21,
      0.28,
      0.2,
      0.23,
      0.27
     ],
     "A2": [
      0.29,
      0.21,
      0.28,
      0.2,
      0.23,
      0.27
     ]
    },
    "inp": {
     "Group": {
      "variable_cost_k": 1827824.8,
      "fixed_cost_k": 7718.9,
      "revenue_k": 2335817.8,
      "overhead_k": 103293.8,
      "board_ebitda_k": 396100.2
     },
     "A1": {
      "variable_cost_k": 900069.4,
      "fixed_cost_k": 3769.8,
      "revenue_k": 1155724.2,
      "overhead_k": 50448.8,
      "board_ebitda_k": 201088.9
     },
     "A2": {
      "variable_cost_k": 927755.4,
      "fixed_cost_k": 3949.1,
      "revenue_k": 1180093.6,
      "overhead_k": 52845.0,
      "board_ebitda_k": 195011.3
     }
    },
    "excl": {
     "A1": 0.27,
     "A2": 0.27
    },
    "level": "entity",
    "theme": "T2",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E08-CertWorkbench",
     "P2-G08-CertGovernance",
     "P2-G08o-OwnerTrust"
    ]
   },
   "EFF-002": {
    "name": "Open critical alerts",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Open critical alerts",
    "basis": "Month end",
    "better": "down",
    "target": 0,
    "fields": [
     "critical_alerts_open"
    ],
    "rules": {
     "critical_alerts_open": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
      1.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
      1.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "critical_alerts_open": 1.0
     },
     "A1": {
      "critical_alerts_open": 1.0
     },
     "A2": {
      "critical_alerts_open": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 1.0
    },
    "level": "entity",
    "theme": "T8",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E01-EntityHome",
     "P2-E09-MyWork",
     "P2-G01-Portfolio",
     "P2-G01b-PortfolioCertified",
     "P2-G02-EntityComparison",
     "P2-G07-Risk",
     "P2-G09-Escalations",
     "P2-O01-EnterpriseHealth",
     "P2-X-States",
     "P3-L-LargeDisplay"
    ]
   },
   "EFF-006": {
    "name": "Alerts without accepted owners",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Alerts with no accepted owner",
    "basis": "Month end",
    "better": "down",
    "target": 0,
    "fields": [
     "alerts_unowned"
    ],
    "rules": {
     "alerts_unowned": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0
     ]
    },
    "inp": {
     "Group": {
      "alerts_unowned": 1.0
     },
     "A1": {
      "alerts_unowned": 0.0
     },
     "A2": {
      "alerts_unowned": 1.0
     }
    },
    "excl": {
     "A1": 1.0,
     "A2": 0.0
    },
    "level": "entity",
    "theme": "T8",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G09-Escalations"
    ]
   },
   "EFF-007": {
    "name": "Overdue actions",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Overdue actions",
    "basis": "Month end",
    "better": "down",
    "target": 0,
    "fields": [
     "actions_overdue"
    ],
    "rules": {
     "actions_overdue": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "actions_overdue": 0.0
     },
     "A1": {
      "actions_overdue": 0.0
     },
     "A2": {
      "actions_overdue": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 0.0
    },
    "level": "entity",
    "theme": "T8",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E01-EntityHome",
     "P2-E09-MyWork",
     "P2-G09-Escalations"
    ]
   },
   "EFF-008": {
    "name": "Average resolution time",
    "unit": "days",
    "dp": 1,
    "div": 1,
    "formula": "Days taken to resolve alerts ÷ Alerts resolved",
    "basis": "Month",
    "better": "down",
    "target": 3,
    "fields": [
     "alerts_resolved",
     "alert_resolution_days"
    ],
    "rules": {
     "alerts_resolved": "SUM",
     "alert_resolution_days": "SUM"
    },
    "val": {
     "Group": [
      2.56,
      2.41,
      2.44,
      2.56,
      2.46,
      2.45
     ],
     "A1": [
      2.97,
      2.9,
      2.93,
      3.0,
      3.05,
      2.78
     ],
     "A2": [
      2.15,
      1.93,
      1.95,
      2.13,
      1.98,
      2.06
     ]
    },
    "inp": {
     "Group": {
      "alerts_resolved": 11.0,
      "alert_resolution_days": 27.0
     },
     "A1": {
      "alerts_resolved": 6.0,
      "alert_resolution_days": 16.7
     },
     "A2": {
      "alerts_resolved": 5.0,
      "alert_resolution_days": 10.3
     }
    },
    "excl": {
     "A1": 2.06,
     "A2": 2.78
    },
    "level": "entity",
    "theme": "T8",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E09-MyWork",
     "P2-G09-Escalations",
     "P2-O06-Decisions"
    ]
   },
   "EFF-009": {
    "name": "Closed escalations, last 30 days",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Escalations closed in the month",
    "basis": "Month",
    "better": null,
    "target": null,
    "fields": [
     "escalations_closed"
    ],
    "rules": {
     "escalations_closed": "SUM"
    },
    "val": {
     "Group": [
      12.0,
      10.0,
      11.0,
      11.0,
      11.0,
      11.0
     ],
     "A1": [
      4.0,
      3.0,
      4.0,
      3.0,
      3.0,
      3.0
     ],
     "A2": [
      8.0,
      7.0,
      7.0,
      8.0,
      8.0,
      8.0
     ]
    },
    "inp": {
     "Group": {
      "escalations_closed": 11.0
     },
     "A1": {
      "escalations_closed": 3.0
     },
     "A2": {
      "escalations_closed": 8.0
     }
    },
    "excl": {
     "A1": 8.0,
     "A2": 3.0
    },
    "level": "entity",
    "theme": "T8",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E09-MyWork",
     "P2-G09-Escalations",
     "P2-O06-Decisions"
    ]
   },
   "EFF-010": {
    "name": "Repeat issues, last 90 days",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Sum of repeat issues over the last 3 months",
    "basis": "Last 3 months",
    "better": null,
    "target": null,
    "fields": [
     "repeat_issues"
    ],
    "rules": {
     "repeat_issues": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      1.0,
      2.0,
      4.0,
      4.0,
      4.0
     ],
     "A1": [
      0.0,
      0.0,
      1.0,
      2.0,
      3.0,
      3.0
     ],
     "A2": [
      0.0,
      1.0,
      1.0,
      2.0,
      1.0,
      1.0
     ]
    },
    "inp": {
     "Group": {
      "repeat_issues": 1.0
     },
     "A1": {
      "repeat_issues": 1.0
     },
     "A2": {
      "repeat_issues": 0.0
     }
    },
    "excl": {
     "A1": 1.0,
     "A2": 3.0
    },
    "level": "entity",
    "theme": "T8",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E09-MyWork",
     "P2-G09-Escalations",
     "P2-O06-Decisions"
    ]
   },
   "EFF-011": {
    "name": "Root causes eliminated YTD",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Root causes eliminated since April, of those identified since April",
    "basis": "Year to date",
    "better": null,
    "target": null,
    "fields": [
     "root_causes_identified (YTD)",
     "root_causes_eliminated (YTD)"
    ],
    "rules": {
     "root_causes_identified (YTD)": "SUM",
     "root_causes_eliminated (YTD)": "SUM"
    },
    "val": {
     "Group": [
      "1 of 1",
      "2 of 2",
      "2 of 3",
      "4 of 5",
      "6 of 7",
      "8 of 9"
     ],
     "A1": [
      "0 of 0",
      "0 of 0",
      "1 of 1",
      "2 of 2",
      "3 of 3",
      "4 of 4"
     ],
     "A2": [
      "1 of 1",
      "2 of 2",
      "1 of 2",
      "2 of 3",
      "3 of 4",
      "4 of 5"
     ]
    },
    "inp": {
     "Group": {
      "root_causes_identified (YTD)": 9.0,
      "root_causes_eliminated (YTD)": 8.0
     },
     "A1": {
      "root_causes_identified (YTD)": 4.0,
      "root_causes_eliminated (YTD)": 4.0
     },
     "A2": {
      "root_causes_identified (YTD)": 5.0,
      "root_causes_eliminated (YTD)": 4.0
     }
    },
    "excl": {
     "A1": "4 of 5",
     "A2": "4 of 4"
    },
    "level": "entity",
    "theme": "T8",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E09-MyWork",
     "P2-G09-Escalations",
     "P2-O06-Decisions"
    ]
   },
   "SIG-004": {
    "name": "Collections slippage",
    "unit": "days",
    "dp": 1,
    "div": 1,
    "formula": "(Days taken to collect − Agreed payment terms) ÷ Invoices collected (average days late)",
    "basis": "Month",
    "better": "down",
    "target": 0,
    "fields": [
     "invoices_collected",
     "collection_days",
     "terms_days"
    ],
    "rules": {
     "invoices_collected": "SUM",
     "collection_days": "SUM",
     "terms_days": "SUM"
    },
    "val": {
     "Group": [
      0.16,
      -0.01,
      0.13,
      0.03,
      1.41,
      1.12
     ],
     "A1": [
      0.39,
      0.19,
      -0.03,
      -0.14,
      2.19,
      1.94
     ],
     "A2": [
      -0.09,
      -0.22,
      0.34,
      0.25,
      0.38,
      0.21
     ]
    },
    "inp": {
     "Group": {
      "invoices_collected": 750.0,
      "collection_days": 34592.0,
      "terms_days": 33750.0
     },
     "A1": {
      "invoices_collected": 395.0,
      "collection_days": 18541.0,
      "terms_days": 17775.0
     },
     "A2": {
      "invoices_collected": 355.0,
      "collection_days": 16051.0,
      "terms_days": 15975.0
     }
    },
    "excl": {
     "A1": 0.21,
     "A2": 1.94
    },
    "level": "entity",
    "theme": "T3",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E05-ProductionCash",
     "P2-G04-CashWC",
     "P2-O02-ChangeReport",
     "P2-O03-CashLiquidity",
     "P2-S12-Signals",
     "P2-S12e-Signals"
    ]
   },
   "SIG-005": {
    "name": "Payment delays",
    "unit": "customers",
    "dp": 0,
    "div": 1,
    "formula": "Customers more than 30 days overdue",
    "basis": "Month end",
    "better": "down",
    "target": 0,
    "fields": [
     "customers_overdue"
    ],
    "rules": {
     "customers_overdue": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      1.0,
      0.0,
      1.0,
      3.0,
      3.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      2.0,
      2.0
     ],
     "A2": [
      0.0,
      1.0,
      0.0,
      1.0,
      1.0,
      1.0
     ]
    },
    "inp": {
     "Group": {
      "customers_overdue": 3.0
     },
     "A1": {
      "customers_overdue": 2.0
     },
     "A2": {
      "customers_overdue": 1.0
     }
    },
    "excl": {
     "A1": 1.0,
     "A2": 2.0
    },
    "level": "entity",
    "theme": "T3",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E05-ProductionCash",
     "P2-G04-CashWC",
     "P2-S12-Signals",
     "P2-S12e-Signals"
    ]
   },
   "SIG-006": {
    "name": "Cash burn signal",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Triggered if operating cash flow in the month is negative",
    "basis": "Month",
    "better": null,
    "target": null,
    "fields": [
     "op_cash_flow_k"
    ],
    "rules": {
     "op_cash_flow_k": "SUM"
    },
    "val": {
     "Group": [
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered"
     ],
     "A1": [
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered"
     ],
     "A2": [
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered",
      "Not triggered"
     ]
    },
    "inp": {
     "Group": {
      "op_cash_flow_k": 302300.8
     },
     "A1": {
      "op_cash_flow_k": 173495.8
     },
     "A2": {
      "op_cash_flow_k": 128805.0
     }
    },
    "excl": {
     "A1": "Not triggered",
     "A2": "Not triggered"
    },
    "level": "entity",
    "theme": "T3",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-O03-CashLiquidity",
     "P2-S12-Signals"
    ]
   },
   "SIG-013": {
    "name": "Pricing pressure",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Realised price vs plan: Low if above −1%, Medium down to −3%, High below −3%",
    "basis": "Month",
    "better": null,
    "target": null,
    "fields": [
     "price_vs_plan_pct"
    ],
    "rules": {
     "price_vs_plan_pct": "SUM"
    },
    "val": {
     "Group": [
      "Low (-0.1% vs plan price)",
      "Low (0% vs plan price)",
      "Low (0.3% vs plan price)",
      "Low (-0.2% vs plan price)",
      "Low (-0.3% vs plan price)",
      "Low (-0.4% vs plan price)"
     ],
     "A1": [
      "Low (-0.3% vs plan price)",
      "Low (-0.5% vs plan price)",
      "Low (0.1% vs plan price)",
      "Low (-0.5% vs plan price)",
      "Low (0.1% vs plan price)",
      "Low (-0.9% vs plan price)"
     ],
     "A2": [
      "Low (0.1% vs plan price)",
      "Low (0.6% vs plan price)",
      "Low (0.6% vs plan price)",
      "Low (0.1% vs plan price)",
      "Low (-0.7% vs plan price)",
      "Low (0% vs plan price)"
     ],
     "Plant01": [
      "Low (0.3% vs plan price)",
      "Low (1.5% vs plan price)",
      "Low (1.4% vs plan price)",
      "Low (1.2% vs plan price)",
      "Low (1.4% vs plan price)",
      "Low (0.2% vs plan price)"
     ],
     "Plant02": [
      "Medium (-1.9% vs plan price)",
      "Medium (-2.2% vs plan price)",
      "Medium (-2.9% vs plan price)",
      "Medium (-1.3% vs plan price)",
      "Medium (-1.5% vs plan price)",
      "Medium (-2.3% vs plan price)"
     ],
     "Plant03": [
      "Low (0.5% vs plan price)",
      "Low (-0.6% vs plan price)",
      "Low (1.5% vs plan price)",
      "Low (-1% vs plan price)",
      "Low (0.2% vs plan price)",
      "Low (-0.5% vs plan price)"
     ],
     "Plant04": [
      "Low (-0.5% vs plan price)",
      "Low (-0.3% vs plan price)",
      "Low (1% vs plan price)",
      "Low (0.2% vs plan price)",
      "Low (-0.6% vs plan price)",
      "Low (-0.7% vs plan price)"
     ],
     "Plant05": [
      "Low (-0.6% vs plan price)",
      "Low (1.5% vs plan price)",
      "Low (0.4% vs plan price)",
      "Low (0.7% vs plan price)",
      "Low (-0.9% vs plan price)",
      "Low (0.2% vs plan price)"
     ],
     "Plant06": [
      "Low (1.3% vs plan price)",
      "Low (0.1% vs plan price)",
      "Low (0.4% vs plan price)",
      "Low (-0.8% vs plan price)",
      "Low (-0.4% vs plan price)",
      "Low (0.5% vs plan price)"
     ]
    },
    "inp": {
     "Group": {
      "price_vs_plan_pct": -0.4
     },
     "A1": {
      "price_vs_plan_pct": -0.86
     },
     "A2": {
      "price_vs_plan_pct": 0.05
     },
     "Plant01": {
      "price_vs_plan_pct": 0.2
     },
     "Plant02": {
      "price_vs_plan_pct": -2.31
     },
     "Plant03": {
      "price_vs_plan_pct": -0.48
     },
     "Plant04": {
      "price_vs_plan_pct": -0.68
     },
     "Plant05": {
      "price_vs_plan_pct": 0.15
     },
     "Plant06": {
      "price_vs_plan_pct": 0.54
     }
    },
    "excl": {
     "A1": "Low (0% vs plan price)",
     "A2": "Low (-0.9% vs plan price)"
    },
    "level": "plant",
    "theme": "T3",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G03-Financial",
     "P2-S12-Signals"
    ]
   },
   "PRD-001": {
    "name": "Days to breach (earliest plant)",
    "unit": "days",
    "dp": 0,
    "div": 1,
    "formula": "Lowest plant forecast of days until its production plan is breached (99 = not expected)",
    "basis": "Forecast",
    "better": "up",
    "target": null,
    "fields": [
     "days_to_breach"
    ],
    "rules": {
     "days_to_breach": "MIN"
    },
    "val": {
     "Group": [
      17.0,
      12.0,
      18.0,
      12.0,
      10.0,
      4.0
     ],
     "A1": [
      17.0,
      12.0,
      18.0,
      12.0,
      10.0,
      4.0
     ],
     "A2": [
      99.0,
      99.0,
      99.0,
      99.0,
      99.0,
      99.0
     ],
     "Plant01": [
      99.0,
      99.0,
      99.0,
      99.0,
      99.0,
      99.0
     ],
     "Plant02": [
      17.0,
      12.0,
      18.0,
      12.0,
      10.0,
      4.0
     ],
     "Plant03": [
      99.0,
      99.0,
      99.0,
      99.0,
      99.0,
      99.0
     ],
     "Plant04": [
      99.0,
      99.0,
      99.0,
      99.0,
      99.0,
      99.0
     ],
     "Plant05": [
      99.0,
      99.0,
      99.0,
      99.0,
      99.0,
      99.0
     ],
     "Plant06": [
      99.0,
      99.0,
      99.0,
      99.0,
      99.0,
      99.0
     ]
    },
    "inp": {
     "Group": {
      "days_to_breach": 4.0
     },
     "A1": {
      "days_to_breach": 4.0
     },
     "A2": {
      "days_to_breach": 99.0
     },
     "Plant01": {
      "days_to_breach": 99.0
     },
     "Plant02": {
      "days_to_breach": 4.0
     },
     "Plant03": {
      "days_to_breach": 99.0
     },
     "Plant04": {
      "days_to_breach": 99.0
     },
     "Plant05": {
      "days_to_breach": 99.0
     },
     "Plant06": {
      "days_to_breach": 99.0
     }
    },
    "excl": {
     "A1": 99.0,
     "A2": 4.0,
     "Plant01": 4.0,
     "Plant02": 99.0,
     "Plant03": 4.0,
     "Plant04": 99.0,
     "Plant05": 99.0,
     "Plant06": 99.0
    },
    "level": "plant",
    "theme": "T3",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-E01-EntityHome",
     "P2-E04-Supply",
     "P2-O01-EnterpriseHealth",
     "P2-O02-ChangeReport",
     "P2-O09-Operations",
     "P2-S10-OpsImpact",
     "P2-S12-Signals",
     "P2-S12e-Signals",
     "P2-X-States",
     "P3-L-LargeDisplay"
    ]
   },
   "PRD-002": {
    "name": "Probability of production plan miss, next month",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Chance that output falls below plan: normal distribution with mean = Forecast good output, spread = √(sum of plant forecast variances)",
    "basis": "Next month",
    "better": "down",
    "target": null,
    "fields": [
     "planned_production_next_t",
     "forecast_good_next_t",
     "forecast_good_var_next"
    ],
    "rules": {
     "planned_production_next_t": "SUM",
     "forecast_good_next_t": "SUM",
     "forecast_good_var_next": "SUM"
    },
    "val": {
     "Group": [
      64.9,
      59.89,
      65.54,
      65.82,
      61.08,
      69.69
     ],
     "A1": [
      79.31,
      69.56,
      77.23,
      77.26,
      72.77,
      79.36
     ],
     "A2": [
      37.76,
      41.4,
      41.65,
      41.77,
      40.91,
      45.13
     ],
     "Plant01": [
      50.06,
      35.3,
      43.26,
      51.26,
      45.59,
      38.81
     ],
     "Plant02": [
      96.92,
      92.29,
      95.41,
      91.15,
      94.41,
      98.27
     ],
     "Plant03": [
      41.86,
      42.28,
      42.93,
      46.74,
      43.07,
      43.19
     ],
     "Plant04": [
      49.71,
      40.01,
      36.16,
      48.68,
      39.82,
      52.26
     ],
     "Plant05": [
      40.92,
      46.61,
      50.51,
      50.12,
      50.72,
      46.86
     ],
     "Plant06": [
      39.69,
      47.69,
      46.42,
      37.02,
      40.82,
      43.2
     ]
    },
    "inp": {
     "Group": {
      "planned_production_next_t": 661346.0,
      "forecast_good_next_t": 652912.0,
      "forecast_good_var_next": 267584263.0
     },
     "A1": {
      "planned_production_next_t": 347978.0,
      "forecast_good_next_t": 338180.0,
      "forecast_good_var_next": 143103746.0
     },
     "A2": {
      "planned_production_next_t": 313368.0,
      "forecast_good_next_t": 314732.0,
      "forecast_good_var_next": 124480517.0
     },
     "Plant01": {
      "planned_production_next_t": 85101.0,
      "forecast_good_next_t": 86567.0,
      "forecast_good_var_next": 26609951.0
     },
     "Plant02": {
      "planned_production_next_t": 121378.0,
      "forecast_good_next_t": 108581.0,
      "forecast_good_var_next": 36663480.0
     },
     "Plant03": {
      "planned_production_next_t": 141499.0,
      "forecast_good_next_t": 143032.0,
      "forecast_good_var_next": 79830315.0
     },
     "Plant04": {
      "planned_production_next_t": 80582.0,
      "forecast_good_next_t": 80307.0,
      "forecast_good_var_next": 23556548.0
     },
     "Plant05": {
      "planned_production_next_t": 133388.0,
      "forecast_good_next_t": 134036.0,
      "forecast_good_var_next": 67486316.0
     },
     "Plant06": {
      "planned_production_next_t": 99398.0,
      "forecast_good_next_t": 100389.0,
      "forecast_good_var_next": 33437653.0
     }
    },
    "excl": {
     "A1": 45.13,
     "A2": 79.36,
     "Plant01": 85.17,
     "Plant02": 38.56,
     "Plant03": 92.28,
     "Plant04": 43.52,
     "Plant05": 46.22,
     "Plant06": 48.44
    },
    "level": "plant",
    "theme": "T3",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G01-Portfolio",
     "P2-G01b-PortfolioCertified",
     "P2-G10-Briefing",
     "P2-O01-EnterpriseHealth",
     "P2-O02-ChangeReport",
     "P2-S12-Signals",
     "P2-S12e-Signals",
     "P2-X-States",
     "P3-L-LargeDisplay"
    ]
   },
   "PRD-003": {
    "name": "Projected EBITDA gap, rest of year",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "(Forecast EBITDA − Planned EBITDA, rest of year) ÷ 1000",
    "basis": "Forecast",
    "better": "up",
    "target": 0,
    "fields": [
     "forecast_ebitda_rest_k",
     "planned_ebitda_rest_k"
    ],
    "rules": {
     "forecast_ebitda_rest_k": "SUM",
     "planned_ebitda_rest_k": "SUM"
    },
    "val": {
     "Group": [
      -21.12,
      -20.76,
      -12.01,
      -13.98,
      -38.92,
      -56.18
     ],
     "A1": [
      -14.54,
      -6.48,
      -5.68,
      -10.03,
      -30.97,
      -48.53
     ],
     "A2": [
      -6.58,
      -14.28,
      -6.33,
      -3.95,
      -7.95,
      -7.65
     ]
    },
    "inp": {
     "Group": {
      "forecast_ebitda_rest_k": 2334226.4,
      "planned_ebitda_rest_k": 2390406.5
     },
     "A1": {
      "forecast_ebitda_rest_k": 1161973.5,
      "planned_ebitda_rest_k": 1210504.1
     },
     "A2": {
      "forecast_ebitda_rest_k": 1172252.9,
      "planned_ebitda_rest_k": 1179902.4
     }
    },
    "excl": {
     "A1": -7.65,
     "A2": -48.53
    },
    "level": "entity",
    "theme": "T3",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G01-Portfolio",
     "P2-G01b-PortfolioCertified",
     "P2-G03-Financial",
     "P2-G10-Briefing",
     "P2-O01-EnterpriseHealth",
     "P2-O02-ChangeReport",
     "P2-S09-Contribution",
     "P2-S12-Signals",
     "P2-S12e-Signals",
     "P2-X-States",
     "P3-L-LargeDisplay"
    ]
   },
   "PRD-004": {
    "name": "Projected liquidity gap, next 90 days",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "Cash + Undrawn facilities + Forecast net cash flow (90 days); 'None' if not negative",
    "basis": "Next 90 days",
    "better": null,
    "target": null,
    "fields": [
     "cash_k",
     "undrawn_facilities_k",
     "forecast_net_cash_flow_90d_k"
    ],
    "rules": {
     "cash_k": "SUM",
     "undrawn_facilities_k": "SUM",
     "forecast_net_cash_flow_90d_k": "SUM"
    },
    "val": {
     "Group": [
      "None within 90 d",
      "None within 90 d",
      "None within 90 d",
      "None within 90 d",
      "None within 90 d",
      "None within 90 d"
     ],
     "A1": [
      "None within 90 d",
      "None within 90 d",
      "None within 90 d",
      "None within 90 d",
      "None within 90 d",
      "None within 90 d"
     ],
     "A2": [
      "None within 90 d",
      "None within 90 d",
      "None within 90 d",
      "None within 90 d",
      "None within 90 d",
      "None within 90 d"
     ]
    },
    "inp": {
     "Group": {
      "cash_k": 2141822.4,
      "undrawn_facilities_k": 880814.6,
      "forecast_net_cash_flow_90d_k": 347118.3
     },
     "A1": {
      "cash_k": 967082.6,
      "undrawn_facilities_k": 449031.4,
      "forecast_net_cash_flow_90d_k": 164691.3
     },
     "A2": {
      "cash_k": 1174739.8,
      "undrawn_facilities_k": 431783.2,
      "forecast_net_cash_flow_90d_k": 182427.0
     }
    },
    "excl": {
     "A1": "None within 90 d",
     "A2": "None within 90 d"
    },
    "level": "entity",
    "theme": "T3",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G01-Portfolio",
     "P2-G01b-PortfolioCertified",
     "P2-G04-CashWC",
     "P2-O02-ChangeReport",
     "P2-O03-CashLiquidity",
     "P2-S12-Signals",
     "P2-S12e-Signals"
    ]
   },
   "PRD-005": {
    "name": "Forecast covenant breach",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Breach forecast if Forecast net debt ÷ Forecast 12-month EBITDA exceeds the covenant limit",
    "basis": "Quarter end",
    "better": null,
    "target": null,
    "fields": [
     "forecast_net_debt_k",
     "forecast_ebitda_ltm_k"
    ],
    "rules": {
     "forecast_net_debt_k": "SUM",
     "forecast_ebitda_ltm_k": "SUM"
    },
    "val": {
     "Group": [
      "Not forecast",
      "Not forecast",
      "Not forecast",
      "Not forecast",
      "Not forecast",
      "Not forecast"
     ],
     "A1": [
      "Not forecast",
      "Breach forecast",
      "Not forecast",
      "Not forecast",
      "Not forecast",
      "Not forecast"
     ],
     "A2": [
      "Not forecast",
      "Not forecast",
      "Not forecast",
      "Not forecast",
      "Not forecast",
      "Not forecast"
     ]
    },
    "inp": {
     "Group": {
      "forecast_net_debt_k": 6584269.1,
      "forecast_ebitda_ltm_k": 4695236.9
     },
     "A1": {
      "forecast_net_debt_k": 3584699.7,
      "forecast_ebitda_ltm_k": 2391562.6
     },
     "A2": {
      "forecast_net_debt_k": 2999569.4,
      "forecast_ebitda_ltm_k": 2303674.3
     }
    },
    "excl": {
     "A1": "Not forecast",
     "A2": "Not forecast"
    },
    "level": "entity",
    "theme": "T3",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G04-CashWC",
     "P2-G10-Briefing",
     "P2-O02-ChangeReport",
     "P2-O03-CashLiquidity",
     "P2-S12-Signals",
     "P2-S12e-Signals"
    ]
   },
   "PRD-006": {
    "name": "Production loss from downtime, next month",
    "unit": "kt",
    "dp": 1,
    "div": 1,
    "formula": "Forecast production lost to downtime next month ÷ 1000",
    "basis": "Next month",
    "better": "down",
    "target": null,
    "fields": [
     "forecast_downtime_loss_next_t"
    ],
    "rules": {
     "forecast_downtime_loss_next_t": "SUM"
    },
    "val": {
     "Group": [
      19.21,
      28.02,
      23.28,
      32.77,
      28.34,
      28.01
     ],
     "A1": [
      11.72,
      15.57,
      15.62,
      23.73,
      16.57,
      22.3
     ],
     "A2": [
      7.49,
      12.45,
      7.66,
      9.04,
      11.77,
      5.71
     ],
     "Plant01": [
      1.62,
      2.91,
      2.4,
      3.86,
      2.7,
      4.17
     ],
     "Plant02": [
      5.36,
      8.04,
      6.88,
      13.21,
      8.91,
      15.61
     ],
     "Plant03": [
      4.74,
      4.62,
      6.35,
      6.66,
      4.96,
      2.51
     ],
     "Plant04": [
      1.76,
      5.19,
      3.74,
      3.15,
      1.13,
      1.42
     ],
     "Plant05": [
      3.97,
      3.74,
      2.89,
      2.62,
      6.47,
      2.27
     ],
     "Plant06": [
      1.75,
      3.51,
      1.03,
      3.28,
      4.17,
      2.02
     ]
    },
    "inp": {
     "Group": {
      "forecast_downtime_loss_next_t": 28008.0
     },
     "A1": {
      "forecast_downtime_loss_next_t": 22295.0
     },
     "A2": {
      "forecast_downtime_loss_next_t": 5713.0
     },
     "Plant01": {
      "forecast_downtime_loss_next_t": 4173.0
     },
     "Plant02": {
      "forecast_downtime_loss_next_t": 15611.0
     },
     "Plant03": {
      "forecast_downtime_loss_next_t": 2511.0
     },
     "Plant04": {
      "forecast_downtime_loss_next_t": 1421.0
     },
     "Plant05": {
      "forecast_downtime_loss_next_t": 2268.0
     },
     "Plant06": {
      "forecast_downtime_loss_next_t": 2024.0
     }
    },
    "excl": {
     "A1": 5.71,
     "A2": 22.3,
     "Plant01": 18.12,
     "Plant02": 6.68,
     "Plant03": 19.78,
     "Plant04": 4.29,
     "Plant05": 3.45,
     "Plant06": 3.69
    },
    "level": "plant",
    "theme": "T3",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-G05-OpsBenchmark",
     "P2-G10-Briefing",
     "P2-O09-Operations"
    ]
   },
   "PRD-007": {
    "name": "Probability OEE below 78%, next month",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Chance that Forecast good output < 78% × Ideal output next month (same distribution as PRD-002)",
    "basis": "Next month",
    "better": "down",
    "target": null,
    "fields": [
     "forecast_good_next_t",
     "forecast_good_var_next",
     "ideal_output_next_t"
    ],
    "rules": {
     "forecast_good_next_t": "SUM",
     "forecast_good_var_next": "SUM",
     "ideal_output_next_t": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "A1": [
      0.38,
      0.02,
      0.26,
      1.6,
      0.07,
      0.59
     ],
     "A2": [
      0.01,
      0.03,
      0.0,
      0.0,
      0.02,
      0.01
     ],
     "Plant01": [
      1.12,
      1.3,
      0.53,
      5.33,
      0.94,
      2.06
     ],
     "Plant02": [
      39.37,
      10.51,
      35.21,
      24.33,
      30.68,
      31.38
     ],
     "Plant03": [
      1.65,
      0.4,
      1.87,
      5.94,
      0.58,
      3.14
     ],
     "Plant04": [
      2.45,
      1.09,
      0.39,
      2.54,
      1.64,
      2.77
     ],
     "Plant05": [
      1.65,
      1.91,
      0.83,
      0.31,
      2.46,
      0.63
     ],
     "Plant06": [
      0.98,
      5.84,
      0.67,
      0.9,
      1.1,
      1.51
     ]
    },
    "inp": {
     "Group": {
      "forecast_good_next_t": 652912.0,
      "forecast_good_var_next": 267584263.0,
      "ideal_output_next_t": 744212.0
     },
     "A1": {
      "forecast_good_next_t": 338180.0,
      "forecast_good_var_next": 143103746.0,
      "ideal_output_next_t": 394982.0
     },
     "A2": {
      "forecast_good_next_t": 314732.0,
      "forecast_good_var_next": 124480517.0,
      "ideal_output_next_t": 349230.0
     },
     "Plant01": {
      "forecast_good_next_t": 86567.0,
      "forecast_good_var_next": 26609951.0,
      "ideal_output_next_t": 97478.0
     },
     "Plant02": {
      "forecast_good_next_t": 108581.0,
      "forecast_good_var_next": 36663480.0,
      "ideal_output_next_t": 135441.0
     },
     "Plant03": {
      "forecast_good_next_t": 143032.0,
      "forecast_good_var_next": 79830315.0,
      "ideal_output_next_t": 162063.0
     },
     "Plant04": {
      "forecast_good_next_t": 80307.0,
      "forecast_good_var_next": 23556548.0,
      "ideal_output_next_t": 91042.0
     },
     "Plant05": {
      "forecast_good_next_t": 134036.0,
      "forecast_good_var_next": 67486316.0,
      "ideal_output_next_t": 145550.0
     },
     "Plant06": {
      "forecast_good_next_t": 100389.0,
      "forecast_good_var_next": 33437653.0,
      "ideal_output_next_t": 112638.0
     }
    },
    "excl": {
     "A1": 0.01,
     "A2": 0.59,
     "Plant01": 3.5,
     "Plant02": 0.42,
     "Plant03": 4.52,
     "Plant04": 0.05,
     "Plant05": 0.19,
     "Plant06": 0.09
    },
    "level": "plant",
    "theme": "T3",
    "source": "workbook",
    "aliasOf": "",
    "screens": [
     "P2-O09-Operations"
    ]
   },
   "CST-005": {
    "name": "Fixed cost YTD",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "Sum of monthly fixed cost since April ÷ 1000",
    "basis": "Year to date",
    "better": "down",
    "target": null,
    "fields": [
     "fixed_cost_k (YTD)"
    ],
    "rules": {
     "fixed_cost_k (YTD)": "SUM"
    },
    "val": {
     "Group": [
      7.0,
      15.21,
      21.69,
      28.99,
      36.86,
      44.58
     ],
     "A1": [
      3.58,
      7.35,
      10.5,
      13.99,
      17.67,
      21.44
     ],
     "A2": [
      3.42,
      7.86,
      11.18,
      15.0,
      19.19,
      23.14
     ],
     "Plant01": [
      1.09,
      2.56,
      3.66,
      4.81,
      5.87,
      7.25
     ],
     "Plant02": [
      1.11,
      2.32,
      3.42,
      4.86,
      6.26,
      7.2
     ],
     "Plant03": [
      1.38,
      2.47,
      3.42,
      4.33,
      5.53,
      6.99
     ],
     "Plant04": [
      1.11,
      2.56,
      3.48,
      4.82,
      6.05,
      7.18
     ],
     "Plant05": [
      1.26,
      2.78,
      4.24,
      5.65,
      7.12,
      8.37
     ],
     "Plant06": [
      1.04,
      2.52,
      3.47,
      4.53,
      6.02,
      7.59
     ]
    },
    "inp": {
     "Group": {
      "fixed_cost_k (YTD)": 44575.6
     },
     "A1": {
      "fixed_cost_k (YTD)": 21435.6
     },
     "A2": {
      "fixed_cost_k (YTD)": 23140.0
     },
     "Plant01": {
      "fixed_cost_k (YTD)": 7246.2
     },
     "Plant02": {
      "fixed_cost_k (YTD)": 7201.6
     },
     "Plant03": {
      "fixed_cost_k (YTD)": 6987.8
     },
     "Plant04": {
      "fixed_cost_k (YTD)": 7181.9
     },
     "Plant05": {
      "fixed_cost_k (YTD)": 8367.9
     },
     "Plant06": {
      "fixed_cost_k (YTD)": 7590.2
     }
    },
    "excl": {
     "A1": 23.14,
     "A2": 21.44,
     "Plant01": 14.19,
     "Plant02": 14.23,
     "Plant03": 14.45,
     "Plant04": 15.96,
     "Plant05": 14.77,
     "Plant06": 15.55
    },
    "level": "plant",
    "theme": "T5",
    "source": "added",
    "aliasOf": "",
    "screens": [
     "P2-E11-Financial"
    ]
   },
   "PRD-008": {
    "name": "Projected FCF gap, full year",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "(FCF YTD + forecast FCF rest of year − FY FCF plan) ÷ 1000",
    "basis": "Forecast",
    "better": "up",
    "target": 0,
    "fields": [
     "fcf_k (YTD)",
     "fcf_plan_fy_k",
     "forecast_fcf_rest_k"
    ],
    "rules": {
     "fcf_k (YTD)": "SUM",
     "fcf_plan_fy_k": "SUM",
     "forecast_fcf_rest_k": "SUM"
    },
    "val": {
     "Group": [
      -64.24,
      -244.21,
      -159.83,
      -128.72,
      -107.36,
      -120.09
     ],
     "A1": [
      -48.35,
      -227.34,
      -145.95,
      -115.49,
      -90.51,
      -101.29
     ],
     "A2": [
      -15.89,
      -16.87,
      -13.88,
      -13.23,
      -16.85,
      -18.8
     ]
    },
    "inp": {
     "Group": {
      "fcf_k (YTD)": 606183.8,
      "fcf_plan_fy_k": 1314883.2,
      "forecast_fcf_rest_k": 588611.5
     },
     "A1": {
      "fcf_k (YTD)": 337630.8,
      "fcf_plan_fy_k": 756293.0,
      "forecast_fcf_rest_k": 317373.0
     },
     "A2": {
      "fcf_k (YTD)": 268553.0,
      "fcf_plan_fy_k": 558590.2,
      "forecast_fcf_rest_k": 271238.5
     }
    },
    "excl": {
     "A1": -18.8,
     "A2": -101.29
    },
    "level": "entity",
    "theme": "T3",
    "source": "added",
    "aliasOf": "",
    "screens": [
     "P2-E11-Financial"
    ]
   },
   "PRD-009": {
    "name": "ROCE at P12 (forecast)",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "(EBIT YTD + forecast EBIT rest of year) ÷ forecast capital employed at P12 × 100",
    "basis": "Forecast",
    "better": "up",
    "target": 12,
    "fields": [
     "capital_employed_p12_k",
     "ebit_fcst_rest_k",
     "ebit_k (YTD)"
    ],
    "rules": {
     "capital_employed_p12_k": "SUM",
     "ebit_fcst_rest_k": "SUM",
     "ebit_k (YTD)": "SUM"
    },
    "val": {
     "Group": [
      12.96,
      11.14,
      10.23,
      10.52,
      10.16,
      11.26
     ],
     "A1": [
      12.48,
      7.35,
      7.92,
      9.33,
      9.4,
      10.48
     ],
     "A2": [
      13.49,
      15.31,
      12.77,
      11.84,
      11.0,
      12.12
     ]
    },
    "inp": {
     "Group": {
      "capital_employed_p12_k": 21648480.0,
      "ebit_fcst_rest_k": 1210002.9,
      "ebit_k (YTD)": 1228143.4
     },
     "A1": {
      "capital_employed_p12_k": 11346480.0,
      "ebit_fcst_rest_k": 579545.9,
      "ebit_k (YTD)": 610048.3
     },
     "A2": {
      "capital_employed_p12_k": 10302000.0,
      "ebit_fcst_rest_k": 630457.0,
      "ebit_k (YTD)": 618095.1
     }
    },
    "excl": {
     "A1": 12.12,
     "A2": 10.48
    },
    "level": "entity",
    "theme": "T3",
    "source": "added",
    "aliasOf": "",
    "screens": [
     "P2-E11-Financial"
    ]
   },
   "PRD-010": {
    "name": "Revenue per FTE YTD",
    "unit": "₹ m",
    "dp": 2,
    "div": 1,
    "formula": "Revenue since April ÷ FTE ÷ 1000",
    "basis": "Year to date",
    "better": "up",
    "target": null,
    "fields": [
     "fte",
     "revenue_k (YTD)"
    ],
    "rules": {
     "fte": "SUM",
     "revenue_k (YTD)": "SUM"
    },
    "val": {
     "Group": [
      0.893,
      1.736,
      2.585,
      3.494,
      4.362,
      5.247
     ],
     "A1": [
      0.893,
      1.728,
      2.556,
      3.459,
      4.328,
      5.172
     ],
     "A2": [
      0.894,
      1.745,
      2.616,
      3.53,
      4.397,
      5.326
     ]
    },
    "inp": {
     "Group": {
      "fte": 2632.0,
      "revenue_k (YTD)": 13811300.2
     },
     "A1": {
      "fte": 1348.0,
      "revenue_k (YTD)": 6972323.4
     },
     "A2": {
      "fte": 1284.0,
      "revenue_k (YTD)": 6838976.8
     }
    },
    "excl": {
     "A1": 5.326,
     "A2": 5.172
    },
    "level": "entity",
    "theme": "T3",
    "source": "added",
    "aliasOf": "",
    "screens": [
     "P2-E11-Financial"
    ]
   },
   "PRD-011": {
    "name": "Tonnes per FTE",
    "unit": "t",
    "dp": 0,
    "div": 1,
    "formula": "Good output ÷ FTE",
    "basis": "Month",
    "better": "up",
    "target": null,
    "fields": [
     "fte",
     "good_output_t"
    ],
    "rules": {
     "fte": "SUM",
     "good_output_t": "SUM"
    },
    "val": {
     "Group": [
      239.4,
      224.4,
      227.3,
      242.5,
      232.3,
      237.7
     ],
     "A1": [
      239.7,
      224.3,
      224.1,
      240.4,
      232.6,
      235.0
     ],
     "A2": [
      239.1,
      224.6,
      230.5,
      244.7,
      231.9,
      240.6
     ]
    },
    "inp": {
     "Group": {
      "fte": 2632.0,
      "good_output_t": 625667.0
     },
     "A1": {
      "fte": 1348.0,
      "good_output_t": 316798.0
     },
     "A2": {
      "fte": 1284.0,
      "good_output_t": 308869.0
     }
    },
    "excl": {
     "A1": 240.6,
     "A2": 235.0
    },
    "level": "entity",
    "theme": "T3",
    "source": "added",
    "aliasOf": "",
    "screens": [
     "P2-E11-Financial"
    ]
   },
   "PRD-012": {
    "name": "Probability of EBITDA plan miss, full year",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "P(FY EBITDA < FY plan), FY EBITDA ~ Normal(EBITDA YTD + forecast rest of year, σ)",
    "basis": "Forecast",
    "better": "down",
    "target": null,
    "fields": [
     "ebitda_fy_sigma_k",
     "ebitda_k (YTD)",
     "ebitda_plan_fy_k",
     "forecast_ebitda_rest_k"
    ],
    "rules": {
     "ebitda_fy_sigma_k": "SQRT(Σσ²)",
     "ebitda_k (YTD)": "SUM",
     "ebitda_plan_fy_k": "SUM",
     "forecast_ebitda_rest_k": "SUM"
    },
    "val": {
     "Group": [
      70.26,
      58.62,
      70.24,
      71.99,
      70.88,
      69.39
     ],
     "A1": [
      80.43,
      80.43,
      80.43,
      80.43,
      80.43,
      80.43
     ],
     "A2": [
      44.32,
      44.32,
      44.32,
      44.32,
      44.32,
      44.32
     ]
    },
    "inp": {
     "Group": {
      "ebitda_fy_sigma_k": 101329.6,
      "ebitda_k (YTD)": 1760093.2,
      "ebitda_plan_fy_k": 4145686.4,
      "forecast_ebitda_rest_k": 2334226.4
     },
     "A1": {
      "ebitda_fy_sigma_k": 71838.5,
      "ebitda_k (YTD)": 890553.8,
      "ebitda_plan_fy_k": 2114103.1,
      "forecast_ebitda_rest_k": 1161973.5
     },
     "A2": {
      "ebitda_fy_sigma_k": 71462.7,
      "ebitda_k (YTD)": 869539.4,
      "ebitda_plan_fy_k": 2031583.3,
      "forecast_ebitda_rest_k": 1172252.9
     }
    },
    "excl": {
     "A1": 44.32,
     "A2": 80.43
    },
    "level": "entity",
    "theme": "T3",
    "source": "added",
    "aliasOf": "",
    "screens": [
     "P2-E11-Financial"
    ]
   },
   "REG-011": {
    "name": "Disclosure clock, hours remaining",
    "unit": "h remaining",
    "dp": 0,
    "div": 1,
    "formula": "Hours to the nearest open disclosure deadline (999 = none running)",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "disclosure_deadline_h"
    ],
    "rules": {
     "disclosure_deadline_h": "MIN"
    },
    "val": {
     "Group": [
      999.0,
      999.0,
      999.0,
      999.0,
      999.0,
      38.0
     ],
     "A1": [
      999.0,
      999.0,
      999.0,
      999.0,
      999.0,
      38.0
     ],
     "A2": [
      999.0,
      999.0,
      999.0,
      999.0,
      999.0,
      999.0
     ]
    },
    "inp": {
     "Group": {
      "disclosure_deadline_h": 38.0
     },
     "A1": {
      "disclosure_deadline_h": 38.0
     },
     "A2": {
      "disclosure_deadline_h": 999.0
     }
    },
    "excl": {
     "A1": 999.0,
     "A2": 38.0
    },
    "level": "entity",
    "theme": "T7",
    "source": "added",
    "aliasOf": "",
    "screens": [
     "P2-E07-RegEHS"
    ]
   },
   "SIG-010": {
    "name": "Single-source supply risk",
    "unit": "suppliers",
    "dp": 0,
    "div": 1,
    "formula": "Single-source suppliers with cover below lead time",
    "basis": "Month end",
    "better": "down",
    "target": 0,
    "fields": [
     "single_source_elevated"
    ],
    "rules": {
     "single_source_elevated": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
      1.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
      1.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "single_source_elevated": 1.0
     },
     "A1": {
      "single_source_elevated": 1.0
     },
     "A2": {
      "single_source_elevated": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 1.0
    },
    "level": "entity",
    "theme": "T3",
    "source": "added",
    "aliasOf": "",
    "screens": [
     "P2-E01-EntityHome",
     "P2-E04-Supply",
     "P2-S12-Signals",
     "P2-S12e-Signals"
    ]
   },
   "SIG-014": {
    "name": "Commodity-price movement (RM-1 index)",
    "unit": "% MoM",
    "dp": 1,
    "div": 1,
    "formula": "RM-1 price index ÷ last month's index − 1, as %",
    "basis": "Month",
    "better": null,
    "target": null,
    "fields": [
     "rm1_price_index"
    ],
    "rules": {
     "rm1_price_index": "SAME"
    },
    "val": {
     "Group": [
      0.0,
      1.2,
      -0.59,
      1.69,
      0.78,
      2.13
     ],
     "A1": [
      0.0,
      1.2,
      -0.59,
      1.69,
      0.78,
      2.13
     ],
     "A2": [
      0.0,
      1.2,
      -0.59,
      1.69,
      0.78,
      2.13
     ]
    },
    "inp": {
     "Group": {
      "rm1_price_index": 105.3
     },
     "A1": {
      "rm1_price_index": 105.3
     },
     "A2": {
      "rm1_price_index": 105.3
     }
    },
    "excl": {
     "A1": 2.13,
     "A2": 2.13
    },
    "level": "entity",
    "theme": "T3",
    "source": "added",
    "aliasOf": "",
    "screens": [
     "P2-G03-Financial",
     "P2-O02-ChangeReport",
     "P2-S12-Signals"
    ]
   },
   "SIG-016": {
    "name": "Freight exposure (lanes disrupted)",
    "unit": "lanes",
    "dp": 0,
    "div": 1,
    "formula": "Supply lanes with a disruption flag",
    "basis": "Month end",
    "better": "down",
    "target": 0,
    "fields": [
     "freight_lanes_disrupted"
    ],
    "rules": {
     "freight_lanes_disrupted": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "freight_lanes_disrupted": 1.0
     },
     "A1": {
      "freight_lanes_disrupted": 1.0
     },
     "A2": {
      "freight_lanes_disrupted": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 1.0
    },
    "level": "entity",
    "theme": "T3",
    "source": "added",
    "aliasOf": "",
    "screens": [
     "P2-G03-Financial",
     "P2-O02-ChangeReport",
     "P2-S12-Signals",
     "P2-S12e-Signals"
    ]
   },
   "SIG-017": {
    "name": "Fuel exposure (fuel cost per tonne, MoM)",
    "unit": "% MoM",
    "dp": 1,
    "div": 1,
    "formula": "(Fuel cost ÷ good output) ÷ last month's − 1, as %",
    "basis": "Month",
    "better": null,
    "target": null,
    "fields": [
     "fuel_cost_k",
     "good_output_t"
    ],
    "rules": {
     "fuel_cost_k": "SUM",
     "good_output_t": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      7.08,
      3.23,
      2.77,
      0.81,
      -17.66
     ],
     "A1": [
      0.0,
      21.74,
      -9.94,
      -2.18,
      22.71,
      -27.67
     ],
     "A2": [
      0.0,
      -6.2,
      18.54,
      7.09,
      -16.86,
      -5.67
     ],
     "Plant01": [
      0.0,
      37.04,
      -21.16,
      -0.13,
      15.79,
      -31.4
     ],
     "Plant02": [
      0.0,
      45.8,
      -22.42,
      22.57,
      8.57,
      -28.26
     ],
     "Plant03": [
      0.0,
      -4.66,
      13.56,
      -19.78,
      42.99,
      -25.67
     ],
     "Plant04": [
      0.0,
      4.58,
      21.37,
      1.25,
      -20.58,
      21.71
     ],
     "Plant05": [
      0.0,
      -26.06,
      39.64,
      -6.44,
      -21.88,
      -7.52
     ],
     "Plant06": [
      0.0,
      21.97,
      -8.44,
      38.19,
      -7.96,
      -23.98
     ]
    },
    "inp": {
     "Group": {
      "fuel_cost_k": 459369.3,
      "good_output_t": 625667.0
     },
     "A1": {
      "fuel_cost_k": 218672.4,
      "good_output_t": 316798.0
     },
     "A2": {
      "fuel_cost_k": 240696.9,
      "good_output_t": 308869.0
     },
     "Plant01": {
      "fuel_cost_k": 50616.0,
      "good_output_t": 81854.0
     },
     "Plant02": {
      "fuel_cost_k": 70784.4,
      "good_output_t": 95233.0
     },
     "Plant03": {
      "fuel_cost_k": 97272.0,
      "good_output_t": 139711.0
     },
     "Plant04": {
      "fuel_cost_k": 82640.2,
      "good_output_t": 81694.0
     },
     "Plant05": {
      "fuel_cost_k": 92193.9,
      "good_output_t": 132787.0
     },
     "Plant06": {
      "fuel_cost_k": 65862.8,
      "good_output_t": 94388.0
     }
    },
    "excl": {
     "A1": -5.67,
     "A2": -27.67,
     "Plant01": -26.63,
     "Plant02": -27.69,
     "Plant03": -29.21,
     "Plant04": -15.6,
     "Plant05": -4.1,
     "Plant06": 4.27
    },
    "level": "plant",
    "theme": "T3",
    "source": "added",
    "aliasOf": "",
    "screens": [
     "P2-G03-Financial",
     "P2-O02-ChangeReport",
     "P2-S12-Signals",
     "P2-S12e-Signals"
    ]
   },
   "SIG-018": {
    "name": "Power-cost exposure (power cost per tonne, MoM)",
    "unit": "% MoM",
    "dp": 1,
    "div": 1,
    "formula": "(Power cost ÷ good output) ÷ last month's − 1, as %",
    "basis": "Month",
    "better": null,
    "target": null,
    "fields": [
     "good_output_t",
     "power_cost_k"
    ],
    "rules": {
     "good_output_t": "SUM",
     "power_cost_k": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      -0.53,
      3.12,
      -10.39,
      9.31,
      -7.14
     ],
     "A1": [
      0.0,
      -4.54,
      -2.06,
      -10.71,
      22.05,
      -10.59
     ],
     "A2": [
      0.0,
      3.96,
      8.35,
      -10.1,
      -2.39,
      -3.1
     ],
     "Plant01": [
      0.0,
      22.65,
      -3.31,
      -33.97,
      34.44,
      -10.13
     ],
     "Plant02": [
      0.0,
      -6.41,
      0.1,
      15.68,
      -9.84,
      8.57
     ],
     "Plant03": [
      0.0,
      -18.76,
      -2.14,
      -14.16,
      51.08,
      -23.81
     ],
     "Plant04": [
      0.0,
      5.55,
      6.91,
      0.23,
      3.37,
      8.48
     ],
     "Plant05": [
      0.0,
      1.93,
      10.77,
      -8.23,
      -19.11,
      5.36
     ],
     "Plant06": [
      0.0,
      6.32,
      5.72,
      -20.04,
      18.95,
      -21.03
     ]
    },
    "inp": {
     "Group": {
      "good_output_t": 625667.0,
      "power_cost_k": 109048.8
     },
     "A1": {
      "good_output_t": 316798.0,
      "power_cost_k": 55885.9
     },
     "A2": {
      "good_output_t": 308869.0,
      "power_cost_k": 53162.9
     },
     "Plant01": {
      "good_output_t": 81854.0,
      "power_cost_k": 13488.8
     },
     "Plant02": {
      "good_output_t": 95233.0,
      "power_cost_k": 20557.3
     },
     "Plant03": {
      "good_output_t": 139711.0,
      "power_cost_k": 21839.8
     },
     "Plant04": {
      "good_output_t": 81694.0,
      "power_cost_k": 16180.0
     },
     "Plant05": {
      "good_output_t": 132787.0,
      "power_cost_k": 22330.4
     },
     "Plant06": {
      "good_output_t": 94388.0,
      "power_cost_k": 14652.5
     }
    },
    "excl": {
     "A1": -3.1,
     "A2": -10.59,
     "Plant01": -10.99,
     "Plant02": -18.95,
     "Plant03": 0.63,
     "Plant04": -7.45,
     "Plant05": -8.02,
     "Plant06": 6.58
    },
    "level": "plant",
    "theme": "T3",
    "source": "added",
    "aliasOf": "",
    "screens": [
     "P2-G03-Financial",
     "P2-O02-ChangeReport",
     "P2-S12-Signals"
    ]
   },
   "SIG-001": {
    "name": "Unplanned downtime (same measure as REL-003)",
    "unit": "h",
    "dp": 1,
    "div": 1,
    "formula": "Alias of REL-003: same value",
    "basis": "Month",
    "better": null,
    "target": null,
    "fields": [
     "unplanned_downtime_hours"
    ],
    "rules": {
     "unplanned_downtime_hours": "SUM"
    },
    "val": {
     "Group": [
      103.9,
      167.9,
      142.0,
      185.3,
      164.0,
      154.4
     ],
     "A1": [
      62.8,
      88.0,
      85.7,
      127.1,
      96.2,
      120.7
     ],
     "A2": [
      41.1,
      79.9,
      56.3,
      58.2,
      67.8,
      33.7
     ],
     "Plant01": [
      13.3,
      19.6,
      18.6,
      27.2,
      19.1,
      30.2
     ],
     "Plant02": [
      31.0,
      45.8,
      37.1,
      69.3,
      53.5,
      78.2
     ],
     "Plant03": [
      18.5,
      22.6,
      30.0,
      30.6,
      23.6,
      12.3
     ],
     "Plant04": [
      13.3,
      40.9,
      33.6,
      22.0,
      9.4,
      10.1
     ],
     "Plant05": [
      17.0,
      18.2,
      15.1,
      13.1,
      34.9,
      10.2
     ],
     "Plant06": [
      10.8,
      20.8,
      7.6,
      23.1,
      23.5,
      13.4
     ]
    },
    "inp": {
     "Group": {
      "unplanned_downtime_hours": 154.4
     },
     "A1": {
      "unplanned_downtime_hours": 120.7
     },
     "A2": {
      "unplanned_downtime_hours": 33.7
     },
     "Plant01": {
      "unplanned_downtime_hours": 30.2
     },
     "Plant02": {
      "unplanned_downtime_hours": 78.2
     },
     "Plant03": {
      "unplanned_downtime_hours": 12.3
     },
     "Plant04": {
      "unplanned_downtime_hours": 10.1
     },
     "Plant05": {
      "unplanned_downtime_hours": 10.2
     },
     "Plant06": {
      "unplanned_downtime_hours": 13.4
     }
    },
    "excl": {
     "A1": 33.7,
     "A2": 120.7,
     "Plant01": 90.5,
     "Plant02": 42.5,
     "Plant03": 108.4,
     "Plant04": 23.6,
     "Plant05": 23.5,
     "Plant06": 20.3
    },
    "level": "plant",
    "theme": "T3",
    "source": "alias",
    "aliasOf": "REL-003",
    "screens": [
     "P2-O02-ChangeReport",
     "P2-S12-Signals",
     "P2-S12e-Signals"
    ]
   },
   "SIG-002": {
    "name": "Yield (same measure as PLT-005)",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Alias of PLT-005: same value",
    "basis": "Month",
    "better": null,
    "target": null,
    "fields": [
     "good_output_t",
     "feed_input_t"
    ],
    "rules": {
     "good_output_t": "SUM",
     "feed_input_t": "SUM"
    },
    "val": {
     "Group": [
      90.5,
      92.35,
      91.47,
      91.45,
      91.09,
      91.93
     ],
     "A1": [
      89.68,
      91.9,
      93.25,
      89.98,
      91.19,
      91.46
     ],
     "A2": [
      91.38,
      92.82,
      89.73,
      93.0,
      91.0,
      92.42
     ],
     "Plant01": [
      91.1,
      93.76,
      94.05,
      88.37,
      92.45,
      91.48
     ],
     "Plant02": [
      88.81,
      94.32,
      94.47,
      90.46,
      88.57,
      93.11
     ],
     "Plant03": [
      89.42,
      88.95,
      91.91,
      90.62,
      92.09,
      90.37
     ],
     "Plant04": [
      92.81,
      91.73,
      90.68,
      94.68,
      91.58,
      90.59
     ],
     "Plant05": [
      89.32,
      92.24,
      89.33,
      94.4,
      89.39,
      93.25
     ],
     "Plant06": [
      93.01,
      94.56,
      89.53,
      89.96,
      92.64,
      92.87
     ]
    },
    "inp": {
     "Group": {
      "good_output_t": 625667.0,
      "feed_input_t": 680575.0
     },
     "A1": {
      "good_output_t": 316798.0,
      "feed_input_t": 346362.0
     },
     "A2": {
      "good_output_t": 308869.0,
      "feed_input_t": 334213.0
     },
     "Plant01": {
      "good_output_t": 81854.0,
      "feed_input_t": 89479.0
     },
     "Plant02": {
      "good_output_t": 95233.0,
      "feed_input_t": 102279.0
     },
     "Plant03": {
      "good_output_t": 139711.0,
      "feed_input_t": 154604.0
     },
     "Plant04": {
      "good_output_t": 81694.0,
      "feed_input_t": 90180.0
     },
     "Plant05": {
      "good_output_t": 132787.0,
      "feed_input_t": 142400.0
     },
     "Plant06": {
      "good_output_t": 94388.0,
      "feed_input_t": 101633.0
     }
    },
    "excl": {
     "A1": 92.42,
     "A2": 91.46,
     "Plant01": 91.46,
     "Plant02": 90.77,
     "Plant03": 92.35,
     "Plant04": 93.09,
     "Plant05": 91.8,
     "Plant06": 92.22
    },
    "level": "plant",
    "theme": "T3",
    "source": "alias",
    "aliasOf": "PLT-005",
    "screens": [
     "P2-E02-Plants",
     "P2-S12-Signals",
     "P2-S12e-Signals"
    ]
   },
   "SIG-003": {
    "name": "Recovery percentage (same measure as PLT-004)",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Alias of PLT-004: same value",
    "basis": "Month",
    "better": null,
    "target": null,
    "fields": [
     "feed_contained_t",
     "recovered_contained_t"
    ],
    "rules": {
     "feed_contained_t": "SUM",
     "recovered_contained_t": "SUM"
    },
    "val": {
     "Group": [
      86.99,
      86.1,
      88.15,
      87.16,
      88.51,
      87.35
     ],
     "A1": [
      86.95,
      85.7,
      87.19,
      87.53,
      86.96,
      87.47
     ],
     "A2": [
      87.03,
      86.53,
      89.22,
      86.73,
      90.09,
      87.23
     ],
     "Plant01": [
      89.65,
      84.57,
      86.69,
      91.43,
      88.72,
      91.69
     ],
     "Plant02": [
      82.33,
      86.62,
      82.16,
      87.09,
      82.15,
      86.55
     ],
     "Plant03": [
      88.88,
      85.78,
      91.32,
      85.49,
      89.14,
      85.7
     ],
     "Plant04": [
      88.48,
      87.77,
      90.88,
      85.62,
      89.14,
      88.37
     ],
     "Plant05": [
      87.65,
      85.41,
      90.56,
      89.15,
      90.45,
      88.33
     ],
     "Plant06": [
      85.27,
      86.93,
      86.32,
      84.34,
      90.37,
      84.57
     ]
    },
    "inp": {
     "Group": {
      "feed_contained_t": 146965.0,
      "recovered_contained_t": 128381.0
     },
     "A1": {
      "feed_contained_t": 77576.0,
      "recovered_contained_t": 67855.0
     },
     "A2": {
      "feed_contained_t": 69389.0,
      "recovered_contained_t": 60526.0
     },
     "Plant01": {
      "feed_contained_t": 19996.0,
      "recovered_contained_t": 18334.0
     },
     "Plant02": {
      "feed_contained_t": 20791.0,
      "recovered_contained_t": 17994.0
     },
     "Plant03": {
      "feed_contained_t": 36789.0,
      "recovered_contained_t": 31527.0
     },
     "Plant04": {
      "feed_contained_t": 20374.0,
      "recovered_contained_t": 18005.0
     },
     "Plant05": {
      "feed_contained_t": 28428.0,
      "recovered_contained_t": 25111.0
     },
     "Plant06": {
      "feed_contained_t": 20587.0,
      "recovered_contained_t": 17410.0
     }
    },
    "excl": {
     "A1": 87.23,
     "A2": 87.47,
     "Plant01": 86.0,
     "Plant02": 87.81,
     "Plant03": 89.07,
     "Plant04": 86.75,
     "Plant05": 86.46,
     "Plant06": 88.35
    },
    "level": "plant",
    "theme": "T3",
    "source": "alias",
    "aliasOf": "PLT-004",
    "screens": [
     "P2-E02-Plants",
     "P2-S12-Signals"
    ]
   },
   "SIG-015": {
    "name": "FX exposure, unhedged (same measure as TRS-001)",
    "unit": "₹ m",
    "dp": 1,
    "div": 1,
    "formula": "Alias of TRS-001: same value",
    "basis": "Month end",
    "better": "down",
    "target": null,
    "fields": [
     "fx_exposure_k",
     "fx_hedged_k"
    ],
    "rules": {
     "fx_exposure_k": "SUM",
     "fx_hedged_k": "SUM"
    },
    "val": {
     "Group": [
      190.79,
      207.5,
      188.28,
      227.78,
      225.53,
      221.72
     ],
     "A1": [
      111.15,
      124.42,
      112.48,
      122.91,
      131.19,
      123.27
     ],
     "A2": [
      79.64,
      83.08,
      75.8,
      104.88,
      94.34,
      98.46
     ]
    },
    "inp": {
     "Group": {
      "fx_exposure_k": 767723.3,
      "fx_hedged_k": 545998.6
     },
     "A1": {
      "fx_exposure_k": 437492.4,
      "fx_hedged_k": 314223.8
     },
     "A2": {
      "fx_exposure_k": 330230.9,
      "fx_hedged_k": 231774.8
     }
    },
    "excl": {
     "A1": 98.46,
     "A2": 123.27
    },
    "level": "entity",
    "theme": "T3",
    "source": "alias",
    "aliasOf": "TRS-001",
    "screens": [
     "P2-G03-Financial",
     "P2-O02-ChangeReport",
     "P2-S12-Signals"
    ]
   },
   "SIG-019": {
    "name": "Regulatory deadlines, next 30 days (same measure as REG-002)",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Alias of REG-002: same value",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "reg_deadlines_30d"
    ],
    "rules": {
     "reg_deadlines_30d": "SUM"
    },
    "val": {
     "Group": [
      2.0,
      1.0,
      2.0,
      2.0,
      0.0,
      3.0
     ],
     "A1": [
      2.0,
      1.0,
      0.0,
      0.0,
      0.0,
      2.0
     ],
     "A2": [
      0.0,
      0.0,
      2.0,
      2.0,
      0.0,
      1.0
     ],
     "Plant01": [
      1.0,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0
     ],
     "Plant02": [
      1.0,
      1.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant03": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0
     ],
     "Plant04": [
      0.0,
      0.0,
      0.0,
      1.0,
      0.0,
      0.0
     ],
     "Plant05": [
      0.0,
      0.0,
      1.0,
      1.0,
      0.0,
      0.0
     ],
     "Plant06": [
      0.0,
      0.0,
      1.0,
      0.0,
      0.0,
      1.0
     ]
    },
    "inp": {
     "Group": {
      "reg_deadlines_30d": 3.0
     },
     "A1": {
      "reg_deadlines_30d": 2.0
     },
     "A2": {
      "reg_deadlines_30d": 1.0
     },
     "Plant01": {
      "reg_deadlines_30d": 1.0
     },
     "Plant02": {
      "reg_deadlines_30d": 0.0
     },
     "Plant03": {
      "reg_deadlines_30d": 1.0
     },
     "Plant04": {
      "reg_deadlines_30d": 0.0
     },
     "Plant05": {
      "reg_deadlines_30d": 0.0
     },
     "Plant06": {
      "reg_deadlines_30d": 1.0
     }
    },
    "excl": {
     "A1": 1.0,
     "A2": 2.0,
     "Plant01": 1.0,
     "Plant02": 2.0,
     "Plant03": 1.0,
     "Plant04": 1.0,
     "Plant05": 1.0,
     "Plant06": 0.0
    },
    "level": "plant",
    "theme": "T3",
    "source": "alias",
    "aliasOf": "REG-002",
    "screens": [
     "P2-S12-Signals",
     "P2-S12e-Signals"
    ]
   },
   "SIG-020": {
    "name": "Licence expirations, next 12 months (same measure as REG-003)",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Alias of REG-003: same value",
    "basis": "Month end",
    "better": null,
    "target": null,
    "fields": [
     "licences_expiring_12m"
    ],
    "rules": {
     "licences_expiring_12m": "SUM"
    },
    "val": {
     "Group": [
      3.0,
      1.0,
      3.0,
      2.0,
      2.0,
      1.0
     ],
     "A1": [
      2.0,
      1.0,
      2.0,
      1.0,
      1.0,
      1.0
     ],
     "A2": [
      1.0,
      0.0,
      1.0,
      1.0,
      1.0,
      0.0
     ],
     "Plant01": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant02": [
      1.0,
      1.0,
      1.0,
      1.0,
      1.0,
      1.0
     ],
     "Plant03": [
      1.0,
      0.0,
      1.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant04": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant05": [
      1.0,
      0.0,
      1.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant06": [
      0.0,
      0.0,
      0.0,
      1.0,
      1.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "licences_expiring_12m": 1.0
     },
     "A1": {
      "licences_expiring_12m": 1.0
     },
     "A2": {
      "licences_expiring_12m": 0.0
     },
     "Plant01": {
      "licences_expiring_12m": 0.0
     },
     "Plant02": {
      "licences_expiring_12m": 1.0
     },
     "Plant03": {
      "licences_expiring_12m": 0.0
     },
     "Plant04": {
      "licences_expiring_12m": 0.0
     },
     "Plant05": {
      "licences_expiring_12m": 0.0
     },
     "Plant06": {
      "licences_expiring_12m": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 1.0,
     "Plant01": 1.0,
     "Plant02": 0.0,
     "Plant03": 1.0,
     "Plant04": 0.0,
     "Plant05": 0.0,
     "Plant06": 0.0
    },
    "level": "plant",
    "theme": "T3",
    "source": "alias",
    "aliasOf": "REG-003",
    "screens": [
     "P2-S12-Signals",
     "P2-S12e-Signals"
    ]
   },
   "RSK-001": {
    "name": "Open critical alerts (same measure as EFF-002)",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Alias of EFF-002: same value",
    "basis": "Month end",
    "better": "down",
    "target": 0,
    "fields": [
     "critical_alerts_open"
    ],
    "rules": {
     "critical_alerts_open": "SUM"
    },
    "val": {
     "Group": [
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
      1.0
     ],
     "A1": [
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
      1.0
     ],
     "A2": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ]
    },
    "inp": {
     "Group": {
      "critical_alerts_open": 1.0
     },
     "A1": {
      "critical_alerts_open": 1.0
     },
     "A2": {
      "critical_alerts_open": 0.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 1.0
    },
    "level": "entity",
    "theme": "T1",
    "source": "alias",
    "aliasOf": "EFF-002",
    "screens": [
     "P2-O01-EnterpriseHealth",
     "P2-X-States",
     "P3-L-LargeDisplay"
    ]
   },
   "RSK-002": {
    "name": "Severity incidents (same measure as EHS-002)",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "Alias of EHS-002: same value",
    "basis": "Month",
    "better": "down",
    "target": 0,
    "fields": [
     "severity_incidents"
    ],
    "rules": {
     "severity_incidents": "SUM"
    },
    "val": {
     "Group": [
      1.0,
      1.0,
      0.0,
      2.0,
      1.0,
      3.0
     ],
     "A1": [
      1.0,
      0.0,
      0.0,
      1.0,
      1.0,
      1.0
     ],
     "A2": [
      0.0,
      1.0,
      0.0,
      1.0,
      0.0,
      2.0
     ],
     "Plant01": [
      1.0,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0
     ],
     "Plant02": [
      0.0,
      0.0,
      0.0,
      1.0,
      1.0,
      0.0
     ],
     "Plant03": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
     ],
     "Plant04": [
      0.0,
      0.0,
      0.0,
      1.0,
      0.0,
      0.0
     ],
     "Plant05": [
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0
     ],
     "Plant06": [
      0.0,
      1.0,
      0.0,
      0.0,
      0.0,
      1.0
     ]
    },
    "inp": {
     "Group": {
      "severity_incidents": 3.0
     },
     "A1": {
      "severity_incidents": 1.0
     },
     "A2": {
      "severity_incidents": 2.0
     },
     "Plant01": {
      "severity_incidents": 1.0
     },
     "Plant02": {
      "severity_incidents": 0.0
     },
     "Plant03": {
      "severity_incidents": 0.0
     },
     "Plant04": {
      "severity_incidents": 0.0
     },
     "Plant05": {
      "severity_incidents": 1.0
     },
     "Plant06": {
      "severity_incidents": 1.0
     }
    },
    "excl": {
     "A1": 2.0,
     "A2": 1.0,
     "Plant01": 0.0,
     "Plant02": 1.0,
     "Plant03": 1.0,
     "Plant04": 2.0,
     "Plant05": 1.0,
     "Plant06": 1.0
    },
    "level": "plant",
    "theme": "T1",
    "source": "alias",
    "aliasOf": "EHS-002",
    "screens": [
     "P2-O01-EnterpriseHealth",
     "P2-X-States",
     "P3-L-LargeDisplay"
    ]
   },
   "STR-001": {
    "name": "Capex physical progress, weighted (same measure as CPX-004)",
    "unit": "% weighted",
    "dp": 1,
    "div": 1,
    "formula": "Alias of CPX-004: same value",
    "basis": "To date",
    "better": "up",
    "target": null,
    "fields": [
     "capex_budget_k",
     "capex_earned_value_k"
    ],
    "rules": {
     "capex_budget_k": "SUM",
     "capex_earned_value_k": "SUM"
    },
    "val": {
     "Group": [
      38.0,
      42.57,
      47.14,
      51.71,
      56.28,
      60.85
     ],
     "A1": [
      38.0,
      42.2,
      46.4,
      50.6,
      54.8,
      59.0
     ],
     "A2": [
      38.0,
      43.0,
      48.0,
      53.0,
      58.0,
      63.0
     ]
    },
    "inp": {
     "Group": {
      "capex_budget_k": 1860000.0,
      "capex_earned_value_k": 1131800.0
     },
     "A1": {
      "capex_budget_k": 1000000.0,
      "capex_earned_value_k": 590000.0
     },
     "A2": {
      "capex_budget_k": 860000.0,
      "capex_earned_value_k": 541800.0
     }
    },
    "excl": {
     "A1": 63.0,
     "A2": 59.0
    },
    "level": "entity",
    "theme": "T1",
    "source": "alias",
    "aliasOf": "CPX-004",
    "screens": [
     "P2-O01-EnterpriseHealth",
     "P2-X-States",
     "P3-L-LargeDisplay"
    ]
   }
  },
  "screens": {
   "P2-E01-EntityHome": {
    "lens": "Entity",
    "rid": "E-01",
    "title": "Entity Home · Entity A1",
    "file": "P2-E01-EntityHome.html"
   },
   "P2-E02-Plants": {
    "lens": "Entity",
    "rid": "E-02",
    "title": "Plant and Production Performance",
    "file": "P2-E02-Plants.html"
   },
   "P2-E03-Reliability": {
    "lens": "Entity",
    "rid": "E-03",
    "title": "Asset Reliability and Recovery",
    "file": "P2-E03-Reliability.html"
   },
   "P2-E04-Supply": {
    "lens": "Entity",
    "rid": "E-04",
    "title": "Supply and Contractor Dependencies",
    "file": "P2-E04-Supply.html"
   },
   "P2-E05-ProductionCash": {
    "lens": "Entity",
    "rid": "E-05",
    "title": "Production-to-Cash Lifecycle",
    "file": "P2-E05-ProductionCash.html"
   },
   "P2-E06-Capex": {
    "lens": "Entity",
    "rid": "E-06",
    "title": "Entity Capex Execution",
    "file": "P2-E06-Capex.html"
   },
   "P2-E07-RegEHS": {
    "lens": "Entity",
    "rid": "E-07",
    "title": "Regulatory and EHS Workbench",
    "file": "P2-E07-RegEHS.html"
   },
   "P2-E08-CertWorkbench": {
    "lens": "Entity",
    "rid": "E-08",
    "title": "KPI Certification Workbench",
    "file": "P2-E08-CertWorkbench.html"
   },
   "P2-E09-MyWork": {
    "lens": "Entity",
    "rid": "E-09",
    "title": "My Alerts, Cases and Actions",
    "file": "P2-E09-MyWork.html"
   },
   "P2-E10-Closure": {
    "lens": "Entity",
    "rid": "E-10",
    "title": "Action Closure Detail · INC-SYN-0142",
    "file": "P2-E10-Closure.html"
   },
   "P2-E11-Financial": {
    "lens": "Entity",
    "rid": "E-11",
    "title": "Entity Financial Health",
    "file": "P2-E11-Financial.html"
   },
   "P2-G01-Portfolio": {
    "lens": "Core Group",
    "rid": "G-01",
    "title": "Portfolio Home",
    "file": "P2-G01-Portfolio.html"
   },
   "P2-G01b-PortfolioCertified": {
    "lens": "Core Group",
    "rid": "G-01 · after T7",
    "title": "Portfolio Home · updated after certification decision",
    "file": "P2-G01b-PortfolioCertified.html"
   },
   "P2-G02-EntityComparison": {
    "lens": "Core Group",
    "rid": "G-02",
    "title": "Entity Performance Comparison",
    "file": "P2-G02-EntityComparison.html"
   },
   "P2-G03-Financial": {
    "lens": "Core Group",
    "rid": "G-03",
    "title": "Financial and Value Performance",
    "file": "P2-G03-Financial.html"
   },
   "P2-G04-CashWC": {
    "lens": "Core Group",
    "rid": "G-04",
    "title": "Cash and Working-Capital Drivers",
    "file": "P2-G04-CashWC.html"
   },
   "P2-G05-OpsBenchmark": {
    "lens": "Core Group",
    "rid": "G-05",
    "title": "Operations Benchmarking",
    "file": "P2-G05-OpsBenchmark.html"
   },
   "P2-G06-CapexPortfolio": {
    "lens": "Core Group",
    "rid": "G-06",
    "title": "Capex Portfolio",
    "file": "P2-G06-CapexPortfolio.html"
   },
   "P2-G07-Risk": {
    "lens": "Core Group",
    "rid": "G-07",
    "title": "Consolidated Risk View",
    "file": "P2-G07-Risk.html"
   },
   "P2-G08-CertGovernance": {
    "lens": "Core Group",
    "rid": "G-08",
    "title": "Certification Governance",
    "file": "P2-G08-CertGovernance.html"
   },
   "P2-G08o-OwnerTrust": {
    "lens": "Owner",
    "rid": "G-08 · Owner depth",
    "title": "Trust Summary (Owner depth)",
    "file": "P2-G08o-OwnerTrust.html"
   },
   "P2-G09-Escalations": {
    "lens": "Core Group",
    "rid": "G-09",
    "title": "Executive Escalation Center",
    "file": "P2-G09-Escalations.html"
   },
   "P2-G10-Briefing": {
    "lens": "Core Group",
    "rid": "G-10",
    "title": "Briefing and Inquiry Pack",
    "file": "P2-G10-Briefing.html"
   },
   "P2-O01-EnterpriseHealth": {
    "lens": "Owner",
    "rid": "O-01",
    "title": "Enterprise Health",
    "file": "P2-O01-EnterpriseHealth.html"
   },
   "P2-O02-ChangeReport": {
    "lens": "Owner",
    "rid": "O-02",
    "title": "24-Hour Executive Change Report",
    "file": "P2-O02-ChangeReport.html"
   },
   "P2-O03-CashLiquidity": {
    "lens": "Owner",
    "rid": "O-03",
    "title": "Cash and Liquidity Summary",
    "file": "P2-O03-CashLiquidity.html"
   },
   "P2-O04-Capex": {
    "lens": "Owner",
    "rid": "O-04",
    "title": "Major Capex and Strategic Initiatives",
    "file": "P2-O04-Capex.html"
   },
   "P2-O05-Risk": {
    "lens": "Owner",
    "rid": "O-05",
    "title": "Material Risk, Compliance and EHS",
    "file": "P2-O05-Risk.html"
   },
   "P2-O06-Decisions": {
    "lens": "Owner",
    "rid": "O-06",
    "title": "Decisions Required",
    "file": "P2-O06-Decisions.html"
   },
   "P2-O07-Brief": {
    "lens": "Owner",
    "rid": "O-07",
    "title": "Daily Executive Brief",
    "file": "P2-O07-Brief.html"
   },
   "P2-O08-WarRoom": {
    "lens": "Owner",
    "rid": "O-08",
    "title": "Active War Room · WR-SYN-0142",
    "file": "P2-O08-WarRoom.html"
   },
   "P2-O09-Operations": {
    "lens": "Owner",
    "rid": "O-09",
    "title": "Operations and Assets",
    "file": "P2-O09-Operations.html"
   },
   "P2-S03-KPIDetail": {
    "lens": "Core Group",
    "rid": "S-03",
    "title": "KPI Detail and Lineage · OPS-001 Production vs plan · Entity A1",
    "file": "P2-S03-KPIDetail.html"
   },
   "P2-S03e-KPIDetail": {
    "lens": "Entity",
    "rid": "S-03 · Entity view",
    "title": "KPI Detail and Lineage · OPS-001 Production vs plan · Entity A1",
    "file": "P2-S03e-KPIDetail.html"
   },
   "P2-S03o-KPIDetail": {
    "lens": "Owner",
    "rid": "S-03 · Owner view",
    "title": "KPI Detail and Lineage · OPS-001 Production vs plan · Entity A1",
    "file": "P2-S03o-KPIDetail.html"
   },
   "P2-S04-Alert": {
    "lens": "Owner",
    "rid": "S-04",
    "title": "Alert Detail · ALT-SYN-2041",
    "file": "P2-S04-Alert.html"
   },
   "P2-S04c-Alert": {
    "lens": "Core Group",
    "rid": "S-04 · Core Group view",
    "title": "Alert Detail · ALT-SYN-2041",
    "file": "P2-S04c-Alert.html"
   },
   "P2-S04e-Alert": {
    "lens": "Entity",
    "rid": "S-04 · Entity view",
    "title": "Alert Detail · ALT-SYN-2041",
    "file": "P2-S04e-Alert.html"
   },
   "P2-S05-Case": {
    "lens": "Owner",
    "rid": "S-05",
    "title": "Case Detail · CASE-SYN-0388 → INC-SYN-0142 (war-room mode)",
    "file": "P2-S05-Case.html"
   },
   "P2-S05c-Case": {
    "lens": "Core Group",
    "rid": "S-05 · Core Group view",
    "title": "Case Detail · CASE-SYN-0388 → INC-SYN-0142 (war-room mode)",
    "file": "P2-S05c-Case.html"
   },
   "P2-S05e-Case": {
    "lens": "Entity",
    "rid": "S-05 · Entity view",
    "title": "Case Detail · CASE-SYN-0388 → INC-SYN-0142 (war-room mode)",
    "file": "P2-S05e-Case.html"
   },
   "P2-S06-Scenario": {
    "lens": "Core Group",
    "rid": "S-06",
    "title": "Scenario Analysis · SCN-SYN-0031 · RM-1 alternate sourcing",
    "file": "P2-S06-Scenario.html"
   },
   "P2-S06e-Scenario": {
    "lens": "Entity",
    "rid": "S-06 · Entity view",
    "title": "Scenario Analysis · SCN-SYN-0031 · RM-1 alternate sourcing",
    "file": "P2-S06e-Scenario.html"
   },
   "P2-S07-AIExplain": {
    "lens": "Owner",
    "rid": "S-07",
    "title": "AI Explanation · Why did the Plant 02 forecast fall?",
    "file": "P2-S07-AIExplain.html"
   },
   "P2-S07c-AIExplain": {
    "lens": "Core Group",
    "rid": "S-07 · Core Group view",
    "title": "AI Explanation · Why did the Plant 02 forecast fall?",
    "file": "P2-S07c-AIExplain.html"
   },
   "P2-S08-Evidence": {
    "lens": "Core Group",
    "rid": "S-08",
    "title": "Evidence and Audit Trail · INC-SYN-0142",
    "file": "P2-S08-Evidence.html"
   },
   "P2-S08e-Evidence": {
    "lens": "Entity",
    "rid": "S-08 · Entity view",
    "title": "Evidence and Audit Trail · INC-SYN-0142",
    "file": "P2-S08e-Evidence.html"
   },
   "P2-S08o-Evidence": {
    "lens": "Owner",
    "rid": "S-08 · Owner view",
    "title": "Evidence and Audit Trail · INC-SYN-0142",
    "file": "P2-S08o-Evidence.html"
   },
   "P2-S09-Contribution": {
    "lens": "Owner",
    "rid": "S-09",
    "title": "Entity Contribution · projected EBITDA gap",
    "file": "P2-S09-Contribution.html"
   },
   "P2-S10-OpsImpact": {
    "lens": "Owner",
    "rid": "S-10",
    "title": "Operations Impact · Plant 02 (Owner summary)",
    "file": "P2-S10-OpsImpact.html"
   },
   "P2-S11-CashExposure": {
    "lens": "Owner",
    "rid": "S-11",
    "title": "Cash Exposure · how the supply issue reaches cash",
    "file": "P2-S11-CashExposure.html"
   },
   "P2-S12-Signals": {
    "lens": "Core Group",
    "rid": "S-12",
    "title": "No-Surprises Signal Board",
    "file": "P2-S12-Signals.html"
   },
   "P2-S12e-Signals": {
    "lens": "Entity",
    "rid": "S-12 · Entity view",
    "title": "No-Surprises Signal Board · Entity A1",
    "file": "P2-S12e-Signals.html"
   },
   "P2-S13-Ask": {
    "lens": "Entity",
    "rid": "S-13",
    "title": "Ask Control Tower",
    "file": "P2-S13-Ask.html"
   },
   "P2-X-States": {
    "lens": "Owner",
    "rid": "STATE GALLERY · O-01 + S-02",
    "title": "Enterprise Health",
    "file": "P2-X-States.html"
   },
   "P3-L-LargeDisplay": {
    "lens": "Owner",
    "rid": "O-01 · large display ≥ 1600",
    "title": "Enterprise Health",
    "file": "P3-L-LargeDisplay.html"
   },
   "P3-M-MobileBrief": {
    "lens": "Owner",
    "rid": "O-07 · compact mobile brief",
    "title": "Daily Executive Brief",
    "file": "P3-M-MobileBrief.html"
   }
  },
  "themes": {
   "T1": "Enterprise Health",
   "T2": "Number Assurance",
   "T3": "No-Surprises Intelligence",
   "T4": "Cash and Liquidity",
   "T5": "Operations and Assets",
   "T6": "Capex and Strategic Initiatives",
   "T7": "Risk, Compliance and EHS",
   "T8": "Decision, Action and Escalation"
  }
 }
};
if (typeof module !== "undefined" && module.exports) module.exports = DCTData;
