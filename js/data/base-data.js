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
    "val": "0",
    "plan": "0",
    "ts": "Certified"
   },
   "Group": {
    "val": "0",
    "plan": "0",
    "ts": "Certified"
   }
  },
  "CON-001": {
   "A1": {
    "val": "1 (S-07)",
    "ts": ""
   },
   "Group": {
    "val": "4",
    "ts": "Certified",
    "v": "4",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "All owned",
    "bs": "On track",
    "prov": "CERT P06",
    "own": "Procurement (role)"
   }
  },
  "CON-002": {
   "A1": {
    "val": "95%",
    "ts": ""
   },
   "Group": {
    "val": "96%",
    "ts": ""
   }
  },
  "CON-003": {
   "A1": {
    "val": "0",
    "ts": ""
   },
   "Group": {
    "val": "1",
    "ts": ""
   }
  },
  "CPX-001": {
   "Group": {
    "v": "850",
    "u": "₹ m",
    "plan": "—",
    "var": "—",
    "tr": "flat",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)"
   },
   "A1": {
    "v": "112",
    "u": "₹ m",
    "plan": "112",
    "var": "0",
    "tr": "flat",
    "fc": "FY 112",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)",
    "sp": [
     100,
     100.2,
     101.8,
     101.3,
     102.9,
     103,
     103.6
    ],
    "spp": [
     100,
     100.6,
     101.2,
     101.8,
     102.4,
     103,
     103.6
    ],
    "spx": [
     "P01",
     "P07"
    ]
   }
  },
  "CPX-002": {
   "A1": {
    "v": "118",
    "u": "₹ m",
    "plan": "120",
    "var": "−1.7%",
    "tr": "flat",
    "fc": "160",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)"
   },
   "Group": {
    "v": "610",
    "u": "₹ m · 72%",
    "plan": "600",
    "var": "+1.7%",
    "tr": "▲",
    "fc": "P12 760",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)"
   }
  },
  "CPX-003": {
   "A1": {
    "v": "74",
    "u": "₹ m",
    "plan": "78",
    "var": "−5%",
    "tr": "flat",
    "fc": "120",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)"
   },
   "Group": {
    "v": "402",
    "u": "₹ m · 47%",
    "plan": "395",
    "var": "+1.8%",
    "tr": "▲",
    "fc": "P12 640",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)"
   }
  },
  "CPX-004": {
   "A1": {
    "v": "58",
    "u": "%",
    "plan": "55%",
    "var": "+3 pts",
    "tr": "▲",
    "fc": "80%",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)"
   },
   "Group": {
    "v": "61",
    "u": "% weighted",
    "plan": "60%",
    "var": "+1 pt",
    "tr": "▲",
    "fc": "P12 82%",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)"
   }
  },
  "CSH-001": {
   "Group": {
    "v": "384",
    "u": "₹ m",
    "plan": "402",
    "var": "−4.5%",
    "tr": "▼ 6 days",
    "fc": "Low D+6: 366",
    "bs": "Deteriorating",
    "ts": "Pending certification",
    "prov": "PRELIM daily",
    "own": "Treasury (role)"
   },
   "A1": {
    "val": "₹41 m",
    "plan": "48",
    "bs": "Deteriorating",
    "ts": "Pending certification"
   }
  },
  "CSH-002": {
   "Group": {
    "val": "₹21 m",
    "plan": "₹25 m",
    "bs": "Deteriorating",
    "ts": "Certified"
   },
   "A1": {
    "val": "₹4.2 m",
    "plan": "6.0",
    "bs": "Deteriorating",
    "ts": "Certified"
   }
  },
  "CSH-003": {
   "A1": {
    "v": "4.1",
    "u": "₹ m",
    "plan": "4.4",
    "var": "−6.8%",
    "tr": "▼ 3 days",
    "fc": "3.8 at D+6",
    "bs": "Deteriorating",
    "ts": "Pending certification",
    "prov": "PRELIM",
    "own": "Finance (role)"
   },
   "Group": {
    "val": "₹18.6 m",
    "plan": "₹19.2 m",
    "bs": "Deteriorating",
    "ts": "Pending"
   }
  },
  "CSH-004": {
   "Group": {
    "val": "33 d",
    "plan": "31",
    "bs": "Deteriorating",
    "ts": "Certified",
    "v": "33",
    "u": "days",
    "var": "+2 d",
    "tr": "▼",
    "fc": "35 d at P08",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "A1": {
    "val": "55 d",
    "plan": "37 d",
    "bs": "Deteriorating",
    "ts": "Pending certification"
   }
  },
  "CSH-006": {
   "A1": {
    "val": "₹26 m at risk (FCST)",
    "bs": "Forecast breach",
    "ts": "Pending certification",
    "v": "26",
    "u": "₹ m",
    "plan": "[UPSTREAM LIMIT — PH]",
    "var": "—",
    "tr": "▲ new D0",
    "fc": "Peaks D+8",
    "prov": "FCST",
    "own": "Group Treasury (role)"
   },
   "Group": {
    "v": "26",
    "u": "₹ m",
    "plan": "[UPSTREAM LIMIT — PH]",
    "var": "—",
    "tr": "▲ new D0",
    "fc": "Peaks D+8",
    "bs": "Forecast breach",
    "ts": "Pending certification",
    "prov": "FCST",
    "own": "Group Treasury (role)"
   }
  },
  "CST-001": {
   "A1": {
    "plan": "≤ 2,900 ₹/t",
    "bs": "On track",
    "ts": "Certified",
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
    "var": "−47 ₹/t",
    "spp": [
     95.7,
     95.7,
     95.7,
     95.7,
     95.7,
     95.7
    ],
    "prov": "CERT P06"
   },
   "Group": {
    "plan": "≤ 2,900 ₹/t",
    "bs": "Intervention required",
    "ts": "Certified",
    "v": "2,934",
    "u": "₹/t",
    "var": "+34 ₹/t",
    "tr": "▼ 231 vs P05",
    "fc": "—",
    "prov": "CERT P06",
    "own": "Finance (role)",
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
    "spp": [
     95.2,
     95.2,
     95.2,
     95.2,
     95.2,
     95.2
    ]
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
    "v": "3,276",
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
    "var": "+376 ₹/t",
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
     107.7,
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
    "plan": "—",
    "bs": "Improving",
    "ts": "Certified",
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
    "var": "—",
    "prov": "CERT P06"
   },
   "Group": {
    "plan": "—",
    "bs": "Improving",
    "ts": "Certified",
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
    "var": "—",
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
    "plan": "—",
    "bs": "Improving",
    "ts": "Certified",
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
    "var": "—",
    "prov": "CERT P06"
   },
   "Group": {
    "plan": "—",
    "var": "—",
    "bs": "Improving",
    "ts": "Certified",
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
     103.2,
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
    "tr": "▲ 18.2 vs P05",
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
    "val": "6.1 ₹/t",
    "plan": "6.3",
    "var": "−3.2%",
    "bs": "Improving",
    "ts": "Certified"
   }
  },
  "CST-005": {
   "A1": {
    "val": "₹61 m",
    "plan": "62",
    "var": "−1.6%",
    "bs": "On track",
    "ts": "Certified"
   }
  },
  "CTL-002": {
   "Group": {
    "val": "4",
    "ts": "Certified",
    "bs": "On track"
   },
   "A1": {
    "val": "1",
    "ts": ""
   }
  },
  "CTL-003": {
   "Group": {
    "val": "6 of 8",
    "ts": ""
   }
  },
  "CTL-004": {
   "Group": {
    "v": "0",
    "u": "",
    "plan": "0",
    "var": "0",
    "tr": "flat",
    "fc": "—",
    "bs": "On track",
    "ts": "Pending certification",
    "prov": "PRELIM",
    "own": "Assurance (role)"
   }
  },
  "CTL-005": {
   "Group": {
    "val": "3",
    "ts": ""
   },
   "A1": {
    "val": "1",
    "ts": ""
   }
  },
  "CTL-006": {
   "A1": {
    "val": "0",
    "ts": ""
   },
   "Group": {
    "val": "0",
    "ts": ""
   }
  },
  "CTL-007": {
   "Group": {
    "val": "1",
    "ts": ""
   },
   "A1": {
    "val": "0",
    "ts": ""
   }
  },
  "CTL-008": {
   "Group": {
    "val": "0",
    "ts": ""
   },
   "A1": {
    "val": "0",
    "ts": ""
   }
  },
  "CTL-009": {
   "Group": {
    "val": "0",
    "ts": ""
   },
   "A1": {
    "val": "0",
    "ts": ""
   }
  },
  "CTL-010": {
   "Group": {
    "val": "12",
    "ts": "Pending",
    "bs": "On track"
   },
   "A1": {
    "val": "5",
    "ts": ""
   }
  },
  "EFF-002": {
   "Group": {
    "val": "1",
    "v": "1",
    "u": "alert",
    "plan": "—",
    "var": "+1 vs D-1",
    "tr": "▼ new today",
    "fc": "—",
    "bs": "Deteriorating",
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Core Group (role)"
   },
   "A1": {
    "val": "1",
    "plan": "0",
    "ts": "System count"
   }
  },
  "EFF-006": {
   "Group": {
    "val": "1"
   }
  },
  "EFF-007": {
   "A1": {
    "val": "0",
    "v": "0",
    "u": "",
    "plan": "0",
    "var": "0",
    "tr": "flat",
    "fc": "—",
    "bs": "On track",
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Entity Executive"
   },
   "Group": {
    "val": "0"
   }
  },
  "EFF-008": {
   "Group": {
    "val": "2.4 d"
   },
   "A1": {
    "val": "2.9 d"
   }
  },
  "EFF-009": {
   "A1": {
    "val": "3"
   },
   "Group": {
    "val": "11"
   }
  },
  "EFF-010": {
   "A1": {
    "val": "2"
   },
   "Group": {
    "val": "2"
   }
  },
  "EFF-011": {
   "A1": {
    "val": "3 of 5"
   },
   "Group": {
    "val": "7 of 9"
   }
  },
  "EHS-001": {
   "A1": {
    "ts": "Certified",
    "v": "0.91",
    "u": "per 200k h",
    "tr": "▼ 1.16 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
    ],
    "plan": "≤ 0.50 per 200k h",
    "var": "+0.41 per 200k h",
    "bs": "Intervention required",
    "prov": "CERT P06"
   },
   "Group": {
    "ts": "Certified",
    "v": "0.47",
    "u": "per 200k h",
    "plan": "≤ 0.50 per 200k h",
    "var": "−0.03 per 200k h",
    "tr": "▼ 1.08 vs P05",
    "fc": "—",
    "bs": "On track",
    "prov": "CERT P06",
    "own": "EHS (role)",
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
    "spp": [
     57.5,
     57.5,
     57.5,
     57.5,
     57.5,
     57.5
    ]
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "ts": "Certified",
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
    "prov": "CERT P06"
   },
   "Group": {
    "ts": "Certified",
    "bs": "Deteriorating",
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
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "ts": "Certified",
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
    "prov": "CERT P06"
   },
   "Group": {
    "ts": "Certified",
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
    "plan": "≤ 0",
    "var": "+0",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "EHS (role)",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
    ]
   },
   "A1": {
    "ts": "Certified",
    "v": "0",
    "u": "",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
     0,
     0,
     0,
     0,
     0,
     0
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
    "ts": "Certified",
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
    "prov": "CERT P06"
   },
   "Group": {
    "ts": "Certified",
    "bs": "Deteriorating",
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
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "plan": "—",
    "var": "—",
    "tr": "▲ 10 vs P05",
    "fc": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "EHS (role)",
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
    ]
   },
   "Group": {
    "ts": "Certified",
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
    "plan": "≤ 0",
    "var": "+7",
    "tr": "▲ 6 vs P05",
    "fc": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "EHS (role)",
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
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ]
   },
   "Group": {
    "ts": "Certified",
    "bs": "Deteriorating",
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
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "val": "0 running",
    "ts": ""
   },
   "Group": {
    "val": "0 running",
    "ts": ""
   }
  },
  "EHS-009": {
   "A1": {
    "v": "75",
    "u": "%",
    "plan": "≥ 100%",
    "var": "−25 pts",
    "tr": "▲ 8 vs P05",
    "fc": "—",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "EHS (role)",
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
    "spp": [
     133.3,
     133.3,
     133.3,
     133.3,
     133.3,
     133.3
    ]
   },
   "Group": {
    "ts": "Certified",
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
     149.9,
     133.3,
     128.5,
     136.3,
     112.4
    ],
    "plan": "≥ 100%",
    "var": "−25 pts",
    "bs": "Deteriorating",
    "spp": [
     149.9,
     149.9,
     149.9,
     149.9,
     149.9,
     149.9
    ],
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
     111.2,
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "val": "83%",
    "ts": ""
   }
  },
  "FIN-001": {
   "A1": {
    "v": "96.2",
    "u": "₹ m",
    "plan": "95.8",
    "var": "+0.4%",
    "tr": "▲",
    "fc": "Gap −7.6 P07–P12",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Finance (role)",
    "fb": "Gap −7.6 P07–P12"
   },
   "Group": {
    "v": "361.3",
    "u": "₹ m",
    "plan": "361.0",
    "var": "+0.1%",
    "tr": "▲ 3 periods",
    "fc": "FY 733.1 vs plan 742.0",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06 · PRELIM P07",
    "own": "Finance (role)",
    "fb": "Gap −9.2 P07–P12"
   }
  },
  "FIN-002": {
   "Group": {
    "val": "238.4 ₹ m",
    "plan": "236.0",
    "bs": "On track",
    "ts": "Certified",
    "var": "+1.0%",
    "v": "238.4",
    "u": "₹ m",
    "tr": "▲",
    "fc": "FY 482 vs 490",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "A1": {
    "val": "₹68.7 m",
    "plan": "67.5",
    "var": "+1.8%",
    "ts": "Certified",
    "v": "68.7",
    "u": "₹ m",
    "tr": "▲",
    "fc": "FY 139 vs plan 138",
    "bs": "On track",
    "prov": "CERT P06",
    "own": "Finance (role)",
    "cf": 90,
    "sp": [
     100,
     100.8,
     100.7,
     102.4,
     102,
     103.4,
     103.9
    ],
    "spp": [
     100,
     100.6,
     101.2,
     101.8,
     102.4,
     103,
     103.6
    ],
    "spx": [
     "P01",
     "P07"
    ]
   }
  },
  "FIN-003": {
   "Group": {
    "val": "2,410 ₹ m",
    "plan": "2,395",
    "var": "+0.6%",
    "ts": "Certified",
    "v": "2,410",
    "u": "₹ m",
    "tr": "▲",
    "fc": "FY 4,860 vs 4,880",
    "bs": "On track",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "A1": {
    "val": "₹404.6 m",
    "plan": "403.0",
    "var": "+0.4%",
    "ts": "Certified",
    "v": "404.6",
    "u": "₹ m",
    "tr": "▲",
    "fc": "FY 812 vs plan 808",
    "bs": "On track",
    "prov": "CERT P06",
    "own": "Finance (role)",
    "sp": [
     52,
     109,
     169,
     229,
     287,
     346,
     404.6
    ],
    "spp": [
     51.5,
     108,
     168,
     228.5,
     286,
     344.5,
     403
    ],
    "spx": [
     "P01",
     "P07"
    ]
   }
  },
  "FIN-004": {
   "Group": {
    "v": "96.4",
    "u": "₹ m",
    "plan": "92.0",
    "var": "+4.8%",
    "tr": "▲ improving",
    "fc": "FY 171 vs plan 175",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "A1": {
    "val": "₹19.8 m",
    "plan": "24.5",
    "var": "−19.2%",
    "ts": "Certified",
    "v": "19.8",
    "u": "₹ m",
    "tr": "▼ 3 periods",
    "fc": "FY 38 vs plan 47",
    "bs": "Deteriorating",
    "prov": "CERT P06",
    "own": "Finance (role)",
    "cf": 84,
    "sp": [
     3.4,
     7.1,
     10.4,
     13.6,
     16,
     18.2,
     19.8
    ],
    "spp": [
     3.5,
     7,
     10.5,
     14,
     17.5,
     21,
     24.5
    ],
    "spx": [
     "P01",
     "P07"
    ]
   }
  },
  "FIN-005": {
   "Group": {
    "val": "11.8%",
    "plan": "12.0%",
    "bs": "Deteriorating",
    "ts": "Certified",
    "var": "−0.2 pts",
    "v": "11.8",
    "u": "%",
    "tr": "▼ 2 periods",
    "fc": "P12 11.6%",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "A1": {
    "val": "11.4%",
    "plan": "13.0%",
    "var": "−1.6 pt",
    "ts": "Certified",
    "v": "11.4",
    "u": "%",
    "tr": "▼ 3 periods",
    "fc": "FY 11.0%",
    "bs": "Deteriorating",
    "prov": "CERT P06",
    "own": "Finance (role)",
    "cf": 82,
    "sp": [
     100,
     98.6,
     96.3,
     95.7,
     93.1,
     92.2,
     90.4
    ],
    "spp": [
     100,
     100.6,
     101.2,
     101.8,
     102.4,
     103,
     103.6
    ],
    "spx": [
     "P01",
     "P07"
    ]
   }
  },
  "FIN-006": {
   "Group": {
    "val": "1,140 ₹ m",
    "plan": "1,150",
    "bs": "On track",
    "ts": "Certified",
    "v": "1,140",
    "u": "₹ m",
    "var": "−0.9%",
    "tr": "flat",
    "fc": "P12 1,128",
    "prov": "CERT P06",
    "own": "Treasury (role)"
   }
  },
  "FIN-007": {
   "Group": {
    "val": "[PLACEHOLDER]",
    "plan": "—",
    "ts": "Missing",
    "v": "—",
    "u": "",
    "var": "—",
    "tr": "—",
    "fc": "—",
    "bs": "—",
    "prov": "—",
    "own": "[OWNER — PH]"
   }
  },
  "FIN-008": {
   "Group": {
    "val": "27%",
    "plan": "25%",
    "bs": "On track",
    "ts": "Certified"
   }
  },
  "GOV-001": {
   "Group": {
    "val": "2 > [PH] d",
    "ts": ""
   },
   "A1": {
    "val": "1",
    "ts": "System count"
   }
  },
  "GOV-002": {
   "A1": {
    "v": "0",
    "u": "",
    "plan": "0",
    "var": "0",
    "tr": "flat",
    "fc": "—",
    "bs": "On track",
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Assurance"
   },
   "Group": {
    "val": "0",
    "ts": ""
   }
  },
  "GOV-003": {
   "Group": {
    "val": "1",
    "ts": ""
   },
   "A1": {
    "val": "1 (L2 meter mapping)",
    "ts": "System count"
   }
  },
  "GOV-004": {
   "Group": {
    "val": "7",
    "ts": "Certified",
    "bs": "Deteriorating",
    "v": "7",
    "u": "",
    "plan": "≤ 5",
    "var": "+2",
    "tr": "▼",
    "fc": "5 by P09",
    "prov": "CERT P06",
    "own": "Assurance (role)"
   },
   "A1": {
    "val": "2",
    "ts": "Certified"
   }
  },
  "GOV-005": {
   "Group": {
    "val": "0",
    "ts": ""
   },
   "A1": {
    "val": "0",
    "ts": "System count"
   }
  },
  "GOV-006": {
   "Group": {
    "val": "1",
    "ts": ""
   },
   "A1": {
    "val": "0",
    "ts": "Certified"
   }
  },
  "GOV-007": {
   "Group": {
    "v": "1",
    "u": "",
    "plan": "0",
    "var": "+1",
    "tr": "▼",
    "fc": "OPS-001",
    "bs": "Deteriorating",
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Assurance (role)"
   }
  },
  "GOV-008": {
   "A1": {
    "v": "86",
    "u": "%",
    "plan": "100%",
    "var": "−14 pts",
    "tr": "▲",
    "fc": "100% before close",
    "bs": "Improving",
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Assurance"
   },
   "Group": {
    "val": "88%",
    "ts": ""
   }
  },
  "GOV-009": {
   "Group": {
    "val": "34 d",
    "ts": ""
   },
   "A1": {
    "val": "29 d",
    "ts": "Certified"
   }
  },
  "LIQ-001": {
   "Group": {
    "v": "14.2",
    "u": "months",
    "plan": "≥ [PH]",
    "var": "—",
    "tr": "flat",
    "fc": "13.9 at P12",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Treasury (role)"
   },
   "A1": {
    "val": "7.5 months",
    "plan": "≥ 6",
    "bs": "On track",
    "ts": "Certified"
   }
  },
  "LIQ-002": {
   "Group": {
    "v": "22",
    "u": "% [TERMS — PH]",
    "plan": "≥ [PH]",
    "var": "—",
    "tr": "flat",
    "fc": "21% at P12",
    "bs": "On track",
    "ts": "Pending certification",
    "prov": "PRELIM",
    "own": "Treasury (role)"
   },
   "A1": {
    "val": "1.2×",
    "plan": "≥ 0.5×",
    "bs": "On track",
    "ts": "Certified"
   }
  },
  "LIQ-003": {
   "Group": {
    "val": "₹120 m",
    "bs": "On track",
    "ts": "Certified",
    "plan": "[PH]"
   },
   "A1": {
    "val": "₹18 m",
    "plan": "—",
    "bs": "On track",
    "ts": "Certified"
   }
  },
  "LIQ-004": {
   "Group": {
    "val": "₹310 m",
    "bs": "On track",
    "ts": "Certified",
    "plan": "[PH]"
   }
  },
  "OPS-001": {
   "A1": {
    "v": "91.3",
    "u": "% of plan",
    "plan": "≥ 100.0%",
    "var": "−8.7 pts",
    "tr": "▲ 2.7 vs P05",
    "fc": "—",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Metric Owner (production)",
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
    "spp": [
     107.7,
     107.7,
     107.7,
     107.7,
     107.7,
     107.7
    ],
    "fb": "Plant 02 at 78.4% of plan"
   },
   "Group": {
    "plan": "≥ 100.0%",
    "bs": "Intervention required",
    "ts": "Certified",
    "v": "95.5",
    "u": "% of plan",
    "var": "−4.5 pts",
    "tr": "▲ 3.2 vs P05",
    "fc": "—",
    "prov": "CERT P06",
    "own": "Production (role)",
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
    "spp": [
     103.9,
     103.9,
     103.9,
     103.9,
     103.9,
     103.9
    ],
    "fb": "Plant 02: −26.2 kt of the −29.4 kt gap"
   },
   "Plant02": {
    "v": "78.4",
    "u": "% of plan",
    "plan": "≥ 100.0%",
    "var": "−21.6 pts",
    "tr": "▼ 0.4 vs P05",
    "fc": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)",
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
    "spp": [
     119.0,
     119.0,
     119.0,
     119.0,
     119.0,
     119.0
    ],
    "fb": "−26.2 kt vs plan · P06"
   },
   "Group#t7": {
    "plan": "≥ 100.0%",
    "bs": "Intervention required",
    "v": "95.5",
    "u": "% of plan",
    "var": "−4.5 pts",
    "tr": "▲ 3.2 vs P05",
    "fc": "—",
    "own": "Production (role)",
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
    "spp": [
     103.9,
     103.9,
     103.9,
     103.9,
     103.9,
     103.9
    ],
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
    "v": "96.8",
    "u": "%",
    "plan": "100%",
    "var": "−3.2 pts",
    "tr": "▼",
    "fc": "P07 fcst 93%",
    "bs": "Deteriorating",
    "ts": "Pending certification",
    "prov": "PRELIM",
    "own": "Commercial (role)"
   },
   "Group": {
    "val": "97.6%",
    "plan": "100%",
    "bs": "Deteriorating",
    "ts": "Pending",
    "var": "−2.4 pts"
   }
  },
  "OPS-003": {
   "A1": {
    "v": "79.8",
    "u": "%",
    "plan": "≥ 85.0%",
    "var": "−5.2 pts",
    "tr": "▲ 3.6 vs P05",
    "fc": "—",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)",
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
    "spp": [
     105.1,
     105.1,
     105.1,
     105.1,
     105.1,
     105.1
    ]
   },
   "Group": {
    "plan": "≥ 85.0%",
    "var": "−1.6 pts",
    "ts": "Certified",
    "v": "83.4",
    "u": "%",
    "tr": "▲ 4.6 vs P05",
    "fc": "—",
    "bs": "Intervention required",
    "prov": "CERT P06",
    "own": "Production (role)",
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
    "spp": [
     101.2,
     101.2,
     101.2,
     101.2,
     101.2,
     101.2
    ]
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
    "val": "97.6%",
    "plan": "100%",
    "var": "−2.4 pts",
    "ts": "Pending certification"
   }
  },
  "OPS-005": {
   "A1": {
    "v": "79.8",
    "u": "%",
    "plan": "≥ 85.0%",
    "var": "−5.2 pts",
    "tr": "▲ 3.6 vs P05",
    "fc": "—",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)",
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
    "spp": [
     105.1,
     105.1,
     105.1,
     105.1,
     105.1,
     105.1
    ]
   },
   "Group": {
    "plan": "≥ 85.0%",
    "var": "−1.6 pts",
    "ts": "Certified",
    "v": "83.4",
    "u": "%",
    "tr": "▲ 4.6 vs P05",
    "fc": "—",
    "bs": "Intervention required",
    "prov": "CERT P06",
    "own": "Production (role)",
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
    "spp": [
     101.2,
     101.2,
     101.2,
     101.2,
     101.2,
     101.2
    ]
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
    "plan": "≥ 80.0%",
    "var": "+4.1 pts",
    "tr": "▲ 1.9 vs P05",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)",
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
    "spp": [
     94.4,
     94.4,
     94.4,
     94.4,
     94.4,
     94.4
    ]
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
    "plan": "≥ 80.0%",
    "var": "−9.7 pts",
    "tr": "▲ 2.3 vs P05",
    "fc": "—",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)",
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
    "spp": [
     110.2,
     110.2,
     110.2,
     110.2,
     110.2,
     110.2
    ]
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
    "plan": "≥ 90.0%",
    "var": "+1.9 pts",
    "tr": "▲ 1.1 vs P05",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)",
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
    "spp": [
     95.0,
     95.0,
     95.0,
     95.0,
     95.0,
     95.0
    ]
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
    "plan": "≥ 80.0%",
    "var": "−9.7 pts",
    "tr": "▲ 2.3 vs P05",
    "fc": "—",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)",
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
    "spp": [
     110.2,
     110.2,
     110.2,
     110.2,
     110.2,
     110.2
    ]
   },
   "Group": {
    "v": "84.1",
    "u": "%",
    "plan": "≥ 80.0%",
    "var": "+4.1 pts",
    "tr": "▲ 1.9 vs P05",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)",
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
    "spp": [
     94.4,
     94.4,
     94.4,
     94.4,
     94.4,
     94.4
    ]
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
    "plan": "≥ 88.0%",
    "var": "−0.5 pts",
    "tr": "▲ 0.5 vs P05",
    "fc": "—",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)",
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
    "spp": [
     101.2,
     101.2,
     101.2,
     101.2,
     101.2,
     101.2
    ]
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
    "plan": "≥ 92.0%",
    "var": "−0.5 pts",
    "tr": "▲ 0.3 vs P05",
    "fc": "—",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)",
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
    "spp": [
     102.6,
     102.6,
     102.6,
     102.6,
     102.6,
     102.6
    ]
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
    "val": "4 days"
   },
   "Plant02": {
    "val": "4 days",
    "v": "4",
    "u": "days",
    "plan": "—",
    "var": "—",
    "tr": "new",
    "fc": "Breach D+4",
    "bs": "Forecast breach",
    "ts": "Pending certification",
    "prov": "PREDICTION",
    "own": "Planning (role)"
   }
  },
  "PRD-002": {
   "Group": {
    "val": "64%",
    "v": "64",
    "u": "%",
    "plan": "—",
    "var": "—",
    "tr": "▲",
    "fc": "—",
    "bs": "Forecast breach",
    "ts": "Pending certification",
    "prov": "PREDICTION",
    "own": "Planning (role)"
   },
   "A1": {
    "v": "71",
    "u": "%",
    "plan": "—",
    "var": "—",
    "tr": "▲",
    "fc": "—",
    "bs": "Forecast breach",
    "ts": "Pending certification",
    "prov": "PREDICTION",
    "own": "Planning (role)"
   }
  },
  "PRD-003": {
   "Group": {
    "val": "−₹9.2 m",
    "v": "−9.2",
    "u": "₹ m",
    "plan": "0",
    "var": "—",
    "tr": "new",
    "fc": "Concentrated in A1",
    "bs": "Forecast breach",
    "ts": "Pending certification",
    "prov": "PREDICTION",
    "own": "Planning (role)"
   },
   "A1": {
    "v": "−7.6",
    "u": "₹ m",
    "plan": "0",
    "var": "—",
    "tr": "new",
    "fc": "P07–P12",
    "bs": "Forecast breach",
    "ts": "Pending certification",
    "prov": "PREDICTION",
    "own": "Finance (role)"
   }
  },
  "PRD-004": {
   "Group": {
    "val": "None within 90 d",
    "v": "None",
    "u": "in 90 d",
    "plan": "—",
    "var": "—",
    "tr": "flat",
    "fc": "—",
    "bs": "On track",
    "ts": "Pending certification",
    "prov": "PREDICTION",
    "own": "Treasury (role)"
   },
   "A1": {
    "v": "None",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "flat",
    "fc": "Runway 7.5 months",
    "bs": "On track",
    "ts": "Pending certification",
    "prov": "FCST",
    "own": "Finance (role)"
   }
  },
  "PRD-005": {
   "Group": {
    "val": "Not forecast",
    "bs": "On track",
    "ts": "Pending certification",
    "v": "No",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "flat",
    "fc": "—",
    "prov": "PREDICTION",
    "own": "Treasury (role)"
   },
   "A1": {
    "v": "No breach",
    "u": "· headroom 1.2×",
    "plan": "≥ 0.5×",
    "var": "—",
    "tr": "▼ from 1.4×",
    "fc": "P12 1.1×",
    "bs": "On track",
    "ts": "Pending certification",
    "prov": "FCST",
    "own": "Treasury (role)"
   }
  },
  "PRD-006": {
   "Group": {
    "val": "26.0 kt",
    "bs": "Deteriorating",
    "ts": "Pending certification",
    "plan": "—"
   }
  },
  "PRD-007": {
   "Group": {
    "val": "41%"
   }
  },
  "PRD-008": {
   "A1": {
    "val": "−₹9 m"
   }
  },
  "PRD-009": {
   "A1": {
    "val": "11.0%"
   }
  },
  "PRD-010": {
   "A1": {
    "val": "₹0.41 m",
    "plan": "0.40",
    "var": "+2.5%",
    "bs": "Improving",
    "ts": "Certified"
   }
  },
  "PRD-011": {
   "A1": {
    "val": "236 t",
    "plan": "240",
    "var": "−1.7%",
    "bs": "Deteriorating",
    "ts": "Certified"
   }
  },
  "PRG-001": {
   "Group": {
    "val": "9 on track · 2 at risk · 0 off track",
    "bs": "Deteriorating",
    "ts": "Certified",
    "plan": "—"
   }
  },
  "PRG-002": {
   "Group": {
    "v": "48",
    "u": "% of plan",
    "plan": "55%",
    "var": "−7 pts",
    "tr": "▼",
    "fc": "70%",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Transformation (role)"
   },
   "A1": {
    "v": "71",
    "u": "% of plan",
    "plan": "100%",
    "var": "−29 pts",
    "tr": "▼",
    "fc": "FY 84%",
    "bs": "Deteriorating",
    "ts": "Pending certification",
    "prov": "PRELIM",
    "own": "Value Office (role)",
    "sp": [
     100,
     98,
     97.3,
     94.6,
     94,
     91.8,
     90.2
    ],
    "spp": [
     100,
     100.6,
     101.2,
     101.8,
     102.4,
     103,
     103.6
    ],
    "spx": [
     "P01",
     "P07"
    ]
   }
  },
  "PRG-003": {
   "A1": {
    "v": "0",
    "u": "",
    "plan": "0",
    "var": "0",
    "tr": "flat",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)"
   },
   "Group": {
    "val": "1",
    "plan": "0",
    "bs": "Deteriorating",
    "ts": "Certified",
    "v": "1",
    "u": "",
    "var": "+1",
    "tr": "▼",
    "fc": "MP03",
    "prov": "CERT P06",
    "own": "Projects (role)"
   }
  },
  "PRG-004": {
   "A1": {
    "val": "58%",
    "plan": "60%",
    "var": "−2 pts",
    "ts": "Certified"
   },
   "Group": {
    "val": "54%",
    "plan": "52%",
    "bs": "Improving",
    "ts": "Certified",
    "var": "+2 pts"
   }
  },
  "PRG-005": {
   "A1": {
    "v": "5 / 8",
    "u": "on track",
    "plan": "8 / 8",
    "var": "−3",
    "tr": "▼",
    "fc": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Transformation (role)",
    "sp": [
     100,
     99.2,
     97.3,
     95.4,
     94.6,
     91.9,
     91.3
    ],
    "spp": [
     100,
     100.6,
     101.2,
     101.8,
     102.4,
     103,
     103.6
    ],
    "spx": [
     "P01",
     "P07"
    ]
   },
   "Group": {
    "val": "15 on track · 6 at risk · 3 delayed",
    "plan": "—",
    "bs": "Deteriorating",
    "ts": "Certified"
   }
  },
  "REG-001": {
   "A1": {
    "val": "1",
    "ts": ""
   },
   "Group": {
    "val": "3",
    "ts": ""
   }
  },
  "REG-002": {
   "A1": {
    "val": "3",
    "ts": ""
   },
   "Group": {
    "val": "3",
    "ts": ""
   }
  },
  "REG-003": {
   "A1": {
    "val": "1",
    "ts": ""
   },
   "Group": {
    "val": "2",
    "ts": ""
   }
  },
  "REG-004": {
   "A1": {
    "v": "3",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "flat",
    "fc": "All owned",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Compliance (role)"
   },
   "Group": {
    "val": "5",
    "ts": ""
   }
  },
  "REG-005": {
   "A1": {
    "v": "0",
    "u": "",
    "plan": "0",
    "var": "0",
    "tr": "flat",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Compliance (role)"
   },
   "Group": {
    "v": "0",
    "u": "",
    "plan": "0",
    "var": "0",
    "tr": "flat",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Compliance (role)"
   }
  },
  "REG-006": {
   "A1": {
    "v": "65",
    "u": "days",
    "plan": "≥ 90 days",
    "var": "−25 days",
    "tr": "▼ 30 vs P05",
    "fc": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Compliance (role)",
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
    "spp": [
     41.9,
     41.9,
     41.9,
     41.9,
     41.9,
     41.9
    ]
   },
   "Group": {
    "v": "65",
    "u": "days",
    "plan": "≥ 90 days",
    "var": "−25 days",
    "tr": "▼ 30 vs P05",
    "fc": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Compliance (role)",
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
    "spp": [
     41.9,
     41.9,
     41.9,
     41.9,
     41.9,
     41.9
    ]
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
    "val": "0",
    "ts": ""
   },
   "Group": {
    "val": "2",
    "ts": ""
   }
  },
  "REG-008": {
   "A1": {
    "val": "0",
    "ts": ""
   },
   "Group": {
    "val": "0",
    "ts": ""
   }
  },
  "REG-009": {
   "Group": {
    "v": "Not triggered",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "—",
    "fc": "Rule [PH]",
    "bs": "On track",
    "ts": "Pending certification",
    "prov": "SYSTEM",
    "own": "Disclosure Authority [PH]"
   }
  },
  "REG-010": {
   "A1": {
    "val": "0",
    "ts": ""
   },
   "Group": {
    "val": "0",
    "plan": "0",
    "bs": "On track",
    "ts": "Certified"
   }
  },
  "REG-011": {
   "A1": {
    "val": "38 h remaining",
    "ts": "System count",
    "v": "38",
    "u": "h remaining",
    "plan": "—",
    "var": "—",
    "tr": "▼ running",
    "fc": "Review due D+1",
    "bs": "Deteriorating",
    "prov": "SYSTEM",
    "own": "Entity Legal (role)"
   }
  },
  "REL-001": {
   "A1": {
    "v": "165",
    "u": "h",
    "plan": "≥ 200 h",
    "var": "−35 h",
    "tr": "▼ 37 vs P05",
    "fc": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     72.5,
     89.0,
     64.6,
     89.1,
     72.7
    ],
    "spp": [
     88.0,
     88.0,
     88.0,
     88.0,
     88.0,
     88.0
    ]
   },
   "Group": {
    "bs": "On track",
    "ts": "Certified",
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
     72.1,
     91.8
    ],
    "plan": "≥ 200 h",
    "var": "+70 h",
    "spp": [
     68.1,
     68.1,
     68.1,
     68.1,
     68.1,
     68.1
    ],
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
     67.7,
     98.5,
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
     124.1,
     80.9,
     111.7,
     77.0
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
     53.7,
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
    "plan": "≤ 6.0 h",
    "var": "+2.2 h",
    "tr": "▲ 0.1 vs P05",
    "fc": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)",
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
    "spp": [
     114.1,
     114.1,
     114.1,
     114.1,
     114.1,
     114.1
    ]
   },
   "Group": {
    "bs": "Deteriorating",
    "ts": "Certified",
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
    "spp": [
     118.1,
     118.1,
     118.1,
     118.1,
     118.1,
     118.1
    ],
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
     109.6,
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
    "plan": "—",
    "var": "—",
    "tr": "▲ 24 vs P05",
    "fc": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)",
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
    ]
   },
   "Group": {
    "v": "154",
    "u": "h",
    "plan": "—",
    "var": "—",
    "tr": "▼ 10 vs P05",
    "fc": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)",
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
    ]
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
    "plan": "—",
    "var": "—",
    "tr": "▲ 3.6 vs P05",
    "fc": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     138.6,
     137.7,
     200.2,
     152.2,
     183.0
    ]
   },
   "Group": {
    "bs": "Improving",
    "ts": "Certified",
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
     147.8,
     140.1,
     204.9,
     144.0,
     227.5
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
     147.6,
     119.6,
     223.4,
     172.5,
     252.0
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
    "tr": "▼ 2.6 vs P05",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     100.0,
     122.1,
     162.1,
     165.5,
     127.6,
     66.4
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
     177.5,
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
     307.1,
     252.1,
     165.1,
     70.4,
     75.7
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
     107.2,
     89.1,
     77.3,
     205.5,
     60.1
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
     192.4,
     70.2,
     213.5,
     217.5,
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
    "plan": "≥ 95.0%",
    "var": "−1.6 pts",
    "tr": "▼ 4.0 vs P05",
    "fc": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)",
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
    "spp": [
     101.6,
     101.6,
     101.6,
     101.6,
     101.6,
     101.6
    ]
   },
   "Group": {
    "plan": "≥ 95.0%",
    "var": "+0.6 pts",
    "bs": "On track",
    "ts": "Certified",
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
    "spp": [
     101.6,
     101.6,
     101.6,
     101.6,
     101.6,
     101.6
    ],
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
    "val": "0",
    "plan": "0",
    "ts": "Pending certification"
   }
  },
  "SIG-002": {
   "A1": {
    "v": "91.5",
    "u": "%",
    "plan": "≥ 92.0%",
    "var": "−0.5 pts",
    "tr": "▲ 0.3 vs P05",
    "fc": "—",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)",
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
    "spp": [
     102.6,
     102.6,
     102.6,
     102.6,
     102.6,
     102.6
    ]
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
  "SIG-003": {
   "A1": {
    "v": "87.5",
    "u": "%",
    "plan": "≥ 88.0%",
    "var": "−0.5 pts",
    "tr": "▲ 0.5 vs P05",
    "fc": "—",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)",
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
    "spp": [
     101.2,
     101.2,
     101.2,
     101.2,
     101.2,
     101.2
    ]
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
  "SIG-004": {
   "A1": {
    "val": "+2 d",
    "ts": "LEADING"
   },
   "Group": {
    "val": "+2 d (A1)"
   }
  },
  "SIG-005": {
   "A1": {
    "val": "2 customers",
    "ts": "LEADING"
   },
   "Group": {
    "val": "2 customers (A1)"
   }
  },
  "SIG-006": {
   "Group": {
    "val": "Not triggered",
    "plan": "—",
    "bs": "On track",
    "ts": "Pending"
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
     169.7,
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
    "plan": "—",
    "var": "—",
    "tr": "▲ 1.2 vs P05",
    "fc": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)",
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
    ]
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
     162.1,
     226.7,
     164.9,
     46.0,
     114.0
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
     334.6,
     263.2,
     41.2,
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
     196.0,
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
     448.3,
     839.0,
     301.9,
     246.5,
     218.6
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
     33400.0,
     22900.0,
     16666.7,
     2700.0,
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
     420.7,
     44.4,
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
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "plan": "≤ 0 alerts",
    "var": "+5 alerts",
    "tr": "▼ 2 vs P05",
    "fc": "—",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)",
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
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ]
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "plan": "≤ 0 materials",
    "var": "+4 materials",
    "tr": "▲ 1 vs P05",
    "fc": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Functional Leader (supply)",
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
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ]
   },
   "Group": {
    "v": "5",
    "u": "materials",
    "plan": "≤ 0 materials",
    "var": "+5 materials",
    "tr": "▼ 1 vs P05",
    "fc": "—",
    "bs": "Intervention required",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Functional Leader (supply)",
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
    "spp": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ]
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "val": "S-07 · elevated"
   }
  },
  "SIG-011": {
   "A1": {
    "v": "2",
    "u": "₹ m",
    "plan": "—",
    "var": "—",
    "tr": "flat",
    "fc": "—",
    "bs": "On track",
    "ts": "Pending certification",
    "prov": "LEADING",
    "own": "Projects (role)"
   },
   "Group": {
    "val": "₹34 m",
    "v": "34",
    "u": "₹ m",
    "plan": "—",
    "var": "—",
    "tr": "▲ new P07",
    "fc": "MP03",
    "bs": "Deteriorating",
    "ts": "Pending certification",
    "prov": "LEADING",
    "own": "Projects (role)"
   }
  },
  "SIG-012": {
   "A1": {
    "v": "10.9",
    "u": "% late",
    "plan": "≤ 5.0%",
    "var": "+5.9 pts",
    "tr": "▲ 0.8 vs P05",
    "fc": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Commercial (role)",
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
    "spp": [
     95.1,
     95.1,
     95.1,
     95.1,
     95.1,
     95.1
    ]
   },
   "Group": {
    "v": "8.7",
    "u": "% late",
    "plan": "≤ 5.0%",
    "var": "+3.7 pts",
    "tr": "▲ 1.0 vs P05",
    "fc": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Commercial (role)",
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
    "spp": [
     83.6,
     83.6,
     83.6,
     83.6,
     83.6,
     83.6
    ]
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
    "val": "Low",
    "bs": "On track",
    "ts": "Pending (LEADING)"
   }
  },
  "SIG-021": {
   "A1": {
    "ts": "Certified",
    "v": "0",
    "u": "",
    "tr": "flat",
    "fc": "—",
    "spx": [
     "P01",
     "P06"
    ],
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
    ],
    "plan": "≤ 0",
    "var": "+0",
    "bs": "On track",
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "sp": [
     0,
     0,
     0,
     0,
     0,
     0
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
    "val": "54%",
    "bs": "On track",
    "ts": "Certified",
    "plan": "55%",
    "var": "−1 pt"
   }
  },
  "SUP-001": {
   "A1": {
    "v": "88",
    "u": "%",
    "plan": "95%",
    "var": "−7 pts",
    "tr": "▼",
    "fc": "84% P07",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Supply (role)"
   },
   "Group": {
    "val": "91%",
    "bs": "Deteriorating",
    "ts": "Certified",
    "plan": "95%",
    "v": "91",
    "u": "%",
    "var": "−4 pts",
    "tr": "▼",
    "fc": "P07 fcst 89%",
    "prov": "CERT P06",
    "own": "Procurement (role)",
    "sp": [
     95,
     94.6,
     94,
     93.4,
     92.5,
     91.8,
     91
    ],
    "spp": [
     95,
     95,
     95,
     95,
     95,
     95,
     95
    ],
    "spx": [
     "P01",
     "P07"
    ]
   }
  },
  "SUP-002": {
   "A1": {
    "v": "94",
    "u": "%",
    "plan": "96%",
    "var": "−2 pts",
    "tr": "▼",
    "fc": "92%",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Supply (role)"
   }
  },
  "SUP-003": {
   "A1": {
    "v": "1.2",
    "u": "%",
    "plan": "≤ 1.5%",
    "var": "—",
    "tr": "flat",
    "fc": "1.2%",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Quality (role)"
   }
  },
  "SUP-004": {
   "A1": {
    "v": "+6",
    "u": "days",
    "plan": "≤ [PH]",
    "var": "+6 d",
    "tr": "▼ new",
    "fc": "+6 d",
    "bs": "Deteriorating",
    "ts": "Pending certification",
    "prov": "PRELIM",
    "own": "Supply (role)"
   },
   "Group": {
    "val": "38%",
    "bs": "Deteriorating",
    "ts": "Certified"
   }
  },
  "SUP-005": {
   "A1": {
    "v": "2",
    "u": "single-source suppliers",
    "plan": "0",
    "var": "+0",
    "tr": "flat",
    "fc": "S-07 elevated",
    "bs": "Deteriorating",
    "ts": "Pending certification",
    "prov": "PRELIM",
    "own": "Supply (role)"
   },
   "Group": {
    "val": "3 single-source (1 elevated: S-07)",
    "bs": "Deteriorating",
    "ts": "Pending"
   }
  },
  "SUP-006": {
   "A1": {
    "v": "3",
    "u": "days (Project 05)",
    "plan": "0",
    "var": "+3 d",
    "tr": "▼",
    "fc": "3 d",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Projects (role)"
   }
  },
  "SUP-007": {
   "Group": {
    "val": "38%",
    "plan": "≤ 30%",
    "bs": "Deteriorating",
    "ts": "Certified"
   }
  },
  "SUP-008": {
   "Group": {
    "val": "0",
    "plan": "0",
    "bs": "On track",
    "ts": "System count"
   }
  },
  "SUS-001": {
   "A1": {
    "bs": "Deteriorating",
    "ts": "Certified",
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
    "prov": "CERT P06"
   },
   "Group": {
    "bs": "Deteriorating",
    "ts": "Certified",
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
    "bs": "Deteriorating",
    "ts": "Certified",
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
    "prov": "CERT P06"
   },
   "Group": {
    "bs": "Deteriorating",
    "ts": "Certified",
    "v": "427.7",
    "u": "kt CO2e",
    "tr": "▲ 17.2 vs P05",
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
     83.3,
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
    "bs": "Deteriorating",
    "ts": "Certified",
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
    "spp": [
     104.8,
     104.8,
     104.8,
     104.8,
     104.8,
     104.8
    ],
    "prov": "CERT P06"
   },
   "Group": {
    "ts": "Certified",
    "bs": "On track",
    "v": "3.42",
    "u": "GJ/t",
    "plan": "≤ 3.50 GJ/t",
    "var": "−0.08 GJ/t",
    "tr": "▼ 0.10 vs P05",
    "fc": "—",
    "prov": "CERT P06",
    "own": "Sustainability (role)",
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
    "spp": [
     103.9,
     103.9,
     103.9,
     103.9,
     103.9,
     103.9
    ]
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
    "val": "₹64 m",
    "bs": "On track",
    "ts": "Pending certification",
    "plan": "≤ [PH]"
   },
   "A1": {
    "val": "₹11 m",
    "plan": "≤ 15",
    "bs": "On track",
    "ts": "Pending certification"
   }
  },
  "TRS-002": {
   "Group": {
    "val": "91%",
    "bs": "On track",
    "ts": "Certified",
    "plan": "≥ [PH]"
   },
   "A1": {
    "val": "93%",
    "plan": "≥ 80%",
    "bs": "On track",
    "ts": "Certified"
   }
  },
  "TRS-003": {
   "Group": {
    "val": "72% of unhedged",
    "plan": "—",
    "bs": "Deteriorating",
    "ts": "Pending certification"
   }
  },
  "TRS-004": {
   "A1": {
    "val": "77%",
    "plan": "≥ 75%",
    "bs": "On track",
    "ts": "Certified"
   },
   "Group": {
    "val": "68%",
    "bs": "Deteriorating",
    "ts": "Certified",
    "plan": "≥ 75%",
    "var": "−7 pts"
   }
  },
  "TRS-005": {
   "Group": {
    "val": "₹3.2 m EBITDA",
    "plan": "—",
    "bs": "",
    "ts": "Pending certification"
   }
  },
  "TRU-001": {
   "Group": {
    "v": "84",
    "u": "% of leadership KPIs",
    "plan": "≥ [PH]",
    "var": "—",
    "tr": "▼ from 88%",
    "fc": "Close P07 ≥ 95% planned",
    "bs": "Deteriorating",
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Core Group (role)"
   },
   "A1": {
    "val": "82%",
    "ts": "Certified"
   },
   "Group#t7": {
    "v": "85",
    "u": "% of leadership KPIs",
    "bs": "Deteriorating",
    "ts": "System count"
   }
  },
  "TRU-002": {
   "Group": {
    "v": "9",
    "u": "",
    "plan": "0 at close",
    "var": "—",
    "tr": "▼",
    "fc": "≤ 3 at close",
    "bs": "Deteriorating",
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Core Group (role)"
   }
  },
  "TRU-003": {
   "Group": {
    "val": "[BOARD FIGURE — PH]",
    "ts": ""
   }
  },
  "TRU-004": {
   "A1": {
    "v": "1",
    "u": "",
    "plan": "0",
    "var": "+1",
    "tr": "▼",
    "fc": "Closing today",
    "bs": "Deteriorating",
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Certifier"
   },
   "Group": {
    "val": "1",
    "ts": ""
   }
  },
  "TRU-005": {
   "Group": {
    "val": "92%",
    "ts": ""
   }
  },
  "TRU-006": {
   "A1": {
    "v": "0",
    "u": "",
    "plan": "0",
    "var": "0",
    "tr": "flat",
    "fc": "—",
    "bs": "On track",
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Core Group"
   },
   "Group": {
    "v": "2",
    "u": "",
    "plan": "0",
    "var": "+2",
    "tr": "▼",
    "fc": "0 by D+2",
    "bs": "Deteriorating",
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Core Group (role)"
   }
  },
  "TRU-007": {
   "Group": {
    "v": "1",
    "u": "",
    "plan": "0",
    "var": "+1",
    "tr": "▼",
    "fc": "BRK-SYN-0071",
    "bs": "Breached",
    "ts": "System count",
    "prov": "SYSTEM",
    "own": "Core Group (role)"
   }
  },
  "TRU-008": {
   "A1": {
    "v": "99.2",
    "u": "%",
    "plan": "≥ [PH]",
    "var": "—",
    "tr": "flat",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Data platform (role)"
   },
   "Group": {
    "val": "99.2%",
    "ts": ""
   }
  },
  "TRU-009": {
   "Group": {
    "val": "96.8%",
    "ts": ""
   },
   "A1": {
    "val": "94.8%",
    "ts": "System count"
   }
  },
  "TRU-010": {
   "Group": {
    "v": "0.6",
    "u": "%",
    "plan": "≤ [PH]",
    "var": "—",
    "tr": "flat",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "A1": {
    "val": "1.9%",
    "ts": "Certified"
   }
  },
  "TRU-011": {
   "A1": {
    "val": "0.2%",
    "ts": "Certified"
   },
   "Group": {
    "val": "0.3% max abs · Entity B2",
    "ts": "",
    "v": "0.3",
    "u": "% (max abs)",
    "plan": "≤ 0.5%",
    "var": "within",
    "tr": "flat",
    "fc": "—",
    "bs": "On track",
    "prov": "CERT P06",
    "own": "Group Controller (role)",
    "sp": [
     100,
     101.1,
     100.8,
     102.6,
     102.3,
     103.4,
     104.2
    ],
    "spp": [
     100,
     100.6,
     101.2,
     101.8,
     102.4,
     103,
     103.6
    ],
    "spx": [
     "P01",
     "P07"
    ]
   }
  },
  "VAL-001": {
   "Group": {
    "val": "₹14 m",
    "plan": "₹16 m",
    "ts": "Certified",
    "bs": "Deteriorating"
   },
   "A1": {
    "val": "₹6.1 m",
    "plan": "7.0",
    "var": "−13%",
    "bs": "Deteriorating",
    "ts": "Certified"
   }
  },
  "VAL-002": {
   "Group": {
    "val": "₹9 m",
    "plan": "₹10 m",
    "ts": "Certified",
    "bs": "On track"
   },
   "A1": {
    "val": "₹2.4 m",
    "plan": "4.0",
    "var": "−40%",
    "bs": "Deteriorating",
    "ts": "Pending certification"
   }
  },
  "VAL-003": {
   "Group": {
    "val": "₹11 m",
    "plan": "₹12 m",
    "ts": "Pending certification",
    "bs": "On track"
   },
   "A1": {
    "val": "₹3.9 m",
    "plan": "3.5",
    "var": "+11%",
    "bs": "Improving",
    "ts": "Certified"
   }
  },
  "WCP-001": {
   "A1": {
    "val": "52 d",
    "bs": "Deteriorating",
    "ts": "Certified",
    "v": "52",
    "u": "days",
    "plan": "45",
    "var": "+7 d",
    "tr": "▼",
    "fc": "55 d at P08",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "Group": {
    "val": "47 d",
    "plan": "45",
    "bs": "Deteriorating",
    "ts": "Certified",
    "v": "47",
    "u": "days",
    "var": "+2 d",
    "tr": "▼",
    "fc": "49 d at P08",
    "prov": "CERT P06",
    "own": "Finance (role)"
   }
  },
  "WCP-002": {
   "Group": {
    "val": "52 d",
    "plan": "50",
    "bs": "Improving",
    "ts": "Certified",
    "v": "52",
    "u": "days",
    "var": "+2 d",
    "tr": "▲",
    "fc": "52 d",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "A1": {
    "val": "38 d",
    "plan": "42",
    "var": "−4 d",
    "bs": "Deteriorating",
    "ts": "Certified"
   }
  },
  "WCP-003": {
   "Group": {
    "val": "38 d",
    "plan": "36",
    "bs": "Deteriorating",
    "ts": "Certified",
    "v": "38",
    "u": "days",
    "var": "+2 d",
    "tr": "▼",
    "fc": "40 d (RM-1 expediting)",
    "prov": "CERT P06",
    "own": "Supply (role)"
   },
   "A1": {
    "val": "41 d",
    "plan": "34",
    "var": "+7 d",
    "bs": "Deteriorating",
    "ts": "Pending certification"
   }
  },
  "WCP-004": {
   "Group": {
    "v": "512",
    "u": "₹ m",
    "plan": "498",
    "var": "+2.8%",
    "tr": "▼",
    "fc": "P12 505",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Finance (role)"
   },
   "A1": {
    "val": "₹96 m",
    "plan": "82",
    "var": "+14",
    "bs": "Deteriorating",
    "ts": "Pending certification"
   }
  },
  "WCP-005": {
   "Group": {
    "val": "+₹14 m",
    "plan": "+₹2 m",
    "bs": "Deteriorating",
    "ts": "Pending"
   },
   "A1": {
    "val": "+₹9 m (cash out)",
    "plan": "+2",
    "bs": "Deteriorating",
    "ts": "Pending certification"
   }
  },
  "WCP-006": {
   "Group": {
    "val": "33",
    "plan": "31",
    "bs": "Deteriorating",
    "ts": "Certified"
   },
   "A1": {
    "val": "55 d",
    "plan": "37",
    "var": "+18 d",
    "bs": "Deteriorating",
    "ts": "Pending certification"
   }
  },
  "SIG-001": {
   "A1": {
    "v": "121",
    "u": "h",
    "plan": "—",
    "var": "—",
    "tr": "▲ 24 vs P05",
    "fc": "—",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)",
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
    ]
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
   "Group": {
    "v": "154",
    "u": "h",
    "plan": "—",
    "var": "—",
    "tr": "▼ 10 vs P05",
    "fc": "—",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)",
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
    ]
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
   "SIG-001": "REL-003",
   "SIG-002": "PLT-005",
   "SIG-003": "PLT-004",
   "OPS-005": "OPS-003",
   "OPS-006": "PLT-002"
  },
  "src": "data/plant-model (build_plant_model.py → export_to_prototype.py)",
  "kpi": {
   "OPS-001": {
    "name": "Production vs plan",
    "unit": "% of plan",
    "dp": 1,
    "div": 1,
    "formula": "good_output_t / planned_production_t x 100",
    "better": "up",
    "target": 100,
    "fields": [
     "good_output_t",
     "planned_production_t"
    ],
    "rules": {
     "good_output_t": "SUM",
     "planned_production_t": "SUM"
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
      "good_output_t": 625667.0,
      "planned_production_t": 655054.0
     },
     "A1": {
      "good_output_t": 316798.0,
      "planned_production_t": 347088.0
     },
     "A2": {
      "good_output_t": 308869.0,
      "planned_production_t": 307966.0
     },
     "Plant01": {
      "good_output_t": 81854.0,
      "planned_production_t": 85234.0
     },
     "Plant02": {
      "good_output_t": 95233.0,
      "planned_production_t": 121475.0
     },
     "Plant03": {
      "good_output_t": 139711.0,
      "planned_production_t": 140379.0
     },
     "Plant04": {
      "good_output_t": 81694.0,
      "planned_production_t": 79048.0
     },
     "Plant05": {
      "good_output_t": 132787.0,
      "planned_production_t": 130881.0
     },
     "Plant06": {
      "good_output_t": 94388.0,
      "planned_production_t": 98037.0
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
    }
   },
   "OPS-003": {
    "name": "Capacity utilization",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "good_output_t / installed_capacity_t x 100",
    "better": "up",
    "target": 85,
    "fields": [
     "good_output_t",
     "installed_capacity_t"
    ],
    "rules": {
     "good_output_t": "SUM",
     "installed_capacity_t": "SUM"
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
      "good_output_t": 625667.0,
      "installed_capacity_t": 749808.0
     },
     "A1": {
      "good_output_t": 316798.0,
      "installed_capacity_t": 397008.0
     },
     "A2": {
      "good_output_t": 308869.0,
      "installed_capacity_t": 352800.0
     },
     "Plant01": {
      "good_output_t": 81854.0,
      "installed_capacity_t": 98712.0
     },
     "Plant02": {
      "good_output_t": 95233.0,
      "installed_capacity_t": 136008.0
     },
     "Plant03": {
      "good_output_t": 139711.0,
      "installed_capacity_t": 162288.0
     },
     "Plant04": {
      "good_output_t": 81694.0,
      "installed_capacity_t": 91296.0
     },
     "Plant05": {
      "good_output_t": 132787.0,
      "installed_capacity_t": 147600.0
     },
     "Plant06": {
      "good_output_t": 94388.0,
      "installed_capacity_t": 113904.0
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
    }
   },
   "PLT-001": {
    "name": "Asset utilization",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "run_hours / calendar_hours x 100",
    "better": "up",
    "target": 90,
    "fields": [
     "run_hours",
     "calendar_hours"
    ],
    "rules": {
     "run_hours": "SUM",
     "calendar_hours": "SUM"
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
      "run_hours": 4045.4,
      "calendar_hours": 4320.0
     },
     "A1": {
      "run_hours": 1984.2,
      "calendar_hours": 2160.0
     },
     "A2": {
      "run_hours": 2061.2,
      "calendar_hours": 2160.0
     },
     "Plant01": {
      "run_hours": 664.5,
      "calendar_hours": 720.0
     },
     "Plant02": {
      "run_hours": 624.3,
      "calendar_hours": 720.0
     },
     "Plant03": {
      "run_hours": 695.4,
      "calendar_hours": 720.0
     },
     "Plant04": {
      "run_hours": 690.6,
      "calendar_hours": 720.0
     },
     "Plant05": {
      "run_hours": 689.9,
      "calendar_hours": 720.0
     },
     "Plant06": {
      "run_hours": 680.7,
      "calendar_hours": 720.0
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
    }
   },
   "PLT-002": {
    "name": "OEE",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "Availability x Performance x Quality = good_output_t / ideal_output_t x 100",
    "better": "up",
    "target": 80,
    "fields": [
     "good_output_t",
     "ideal_output_t"
    ],
    "rules": {
     "good_output_t": "SUM",
     "ideal_output_t": "SUM"
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
      "good_output_t": 625667.0,
      "ideal_output_t": 744212.0
     },
     "A1": {
      "good_output_t": 316798.0,
      "ideal_output_t": 394982.0
     },
     "A2": {
      "good_output_t": 308869.0,
      "ideal_output_t": 349230.0
     },
     "Plant01": {
      "good_output_t": 81854.0,
      "ideal_output_t": 97478.0
     },
     "Plant02": {
      "good_output_t": 95233.0,
      "ideal_output_t": 135441.0
     },
     "Plant03": {
      "good_output_t": 139711.0,
      "ideal_output_t": 162063.0
     },
     "Plant04": {
      "good_output_t": 81694.0,
      "ideal_output_t": 91042.0
     },
     "Plant05": {
      "good_output_t": 132787.0,
      "ideal_output_t": 145550.0
     },
     "Plant06": {
      "good_output_t": 94388.0,
      "ideal_output_t": 112638.0
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
    }
   },
   "PLT-004": {
    "name": "Recovery percentage",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "recovered_contained_t / feed_contained_t x 100",
    "better": "up",
    "target": 88,
    "fields": [
     "recovered_contained_t",
     "feed_contained_t"
    ],
    "rules": {
     "recovered_contained_t": "SUM",
     "feed_contained_t": "SUM"
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
      "recovered_contained_t": 128381.0,
      "feed_contained_t": 146965.0
     },
     "A1": {
      "recovered_contained_t": 67855.0,
      "feed_contained_t": 77576.0
     },
     "A2": {
      "recovered_contained_t": 60526.0,
      "feed_contained_t": 69389.0
     },
     "Plant01": {
      "recovered_contained_t": 18334.0,
      "feed_contained_t": 19996.0
     },
     "Plant02": {
      "recovered_contained_t": 17994.0,
      "feed_contained_t": 20791.0
     },
     "Plant03": {
      "recovered_contained_t": 31527.0,
      "feed_contained_t": 36789.0
     },
     "Plant04": {
      "recovered_contained_t": 18005.0,
      "feed_contained_t": 20374.0
     },
     "Plant05": {
      "recovered_contained_t": 25111.0,
      "feed_contained_t": 28428.0
     },
     "Plant06": {
      "recovered_contained_t": 17410.0,
      "feed_contained_t": 20587.0
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
    }
   },
   "PLT-005": {
    "name": "Yield",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "good_output_t / feed_input_t x 100",
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
    }
   },
   "REL-001": {
    "name": "MTBF",
    "unit": "h",
    "dp": 0,
    "div": 1,
    "formula": "run_hours / failures",
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
     "Plant05": 685.7,
     "Plant06": 690.2
    }
   },
   "REL-002": {
    "name": "Mean Time to Repair",
    "unit": "h",
    "dp": 1,
    "div": 1,
    "formula": "repair_hours / failures",
    "better": "down",
    "target": 6,
    "fields": [
     "repair_hours",
     "failures"
    ],
    "rules": {
     "repair_hours": "SUM",
     "failures": "SUM"
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
      7.62,
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
      "repair_hours": 117.4,
      "failures": 15.0
     },
     "A1": {
      "repair_hours": 98.9,
      "failures": 12.0
     },
     "A2": {
      "repair_hours": 18.5,
      "failures": 3.0
     },
     "Plant01": {
      "repair_hours": 21.6,
      "failures": 4.0
     },
     "Plant02": {
      "repair_hours": 68.5,
      "failures": 6.0
     },
     "Plant03": {
      "repair_hours": 8.8,
      "failures": 2.0
     },
     "Plant04": {
      "repair_hours": 6.8,
      "failures": 1.0
     },
     "Plant05": {
      "repair_hours": 5.2,
      "failures": 1.0
     },
     "Plant06": {
      "repair_hours": 6.5,
      "failures": 1.0
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
    }
   },
   "REL-003": {
    "name": "Unplanned downtime",
    "unit": "h",
    "dp": 0,
    "div": 1,
    "formula": "unplanned_downtime_hours",
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
    }
   },
   "REL-004": {
    "name": "Production loss from downtime",
    "unit": "kt",
    "dp": 1,
    "div": 1000,
    "formula": "prod_loss_downtime_t",
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
    }
   },
   "REL-005": {
    "name": "Preventive-maintenance compliance",
    "unit": "%",
    "dp": 1,
    "div": 1,
    "formula": "pm_completed / pm_scheduled x 100",
    "better": "up",
    "target": 95,
    "fields": [
     "pm_completed",
     "pm_scheduled"
    ],
    "rules": {
     "pm_completed": "SUM",
     "pm_scheduled": "SUM"
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
      "pm_completed": 262.0,
      "pm_scheduled": 274.0
     },
     "A1": {
      "pm_completed": 128.0,
      "pm_scheduled": 137.0
     },
     "A2": {
      "pm_completed": 134.0,
      "pm_scheduled": 137.0
     },
     "Plant01": {
      "pm_completed": 43.0,
      "pm_scheduled": 46.0
     },
     "Plant02": {
      "pm_completed": 27.0,
      "pm_scheduled": 33.0
     },
     "Plant03": {
      "pm_completed": 58.0,
      "pm_scheduled": 58.0
     },
     "Plant04": {
      "pm_completed": 59.0,
      "pm_scheduled": 59.0
     },
     "Plant05": {
      "pm_completed": 41.0,
      "pm_scheduled": 42.0
     },
     "Plant06": {
      "pm_completed": 34.0,
      "pm_scheduled": 36.0
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
    }
   },
   "CST-001": {
    "name": "Cost per tonne",
    "unit": "₹/t",
    "dp": 0,
    "div": 1,
    "formula": "(variable_cost_k + fixed_cost_k) x 1000 / good_output_t",
    "better": "down",
    "target": 2900,
    "fields": [
     "variable_cost_k",
     "fixed_cost_k",
     "good_output_t"
    ],
    "rules": {
     "variable_cost_k": "SUM",
     "fixed_cost_k": "SUM",
     "good_output_t": "SUM"
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
      "variable_cost_k": 1827824.8,
      "fixed_cost_k": 7718.9,
      "good_output_t": 625667.0
     },
     "A1": {
      "variable_cost_k": 900069.4,
      "fixed_cost_k": 3769.8,
      "good_output_t": 316798.0
     },
     "A2": {
      "variable_cost_k": 927755.4,
      "fixed_cost_k": 3949.1,
      "good_output_t": 308869.0
     },
     "Plant01": {
      "variable_cost_k": 226098.2,
      "fixed_cost_k": 1375.5,
      "good_output_t": 81854.0
     },
     "Plant02": {
      "variable_cost_k": 308111.0,
      "fixed_cost_k": 940.2,
      "good_output_t": 95233.0
     },
     "Plant03": {
      "variable_cost_k": 365860.2,
      "fixed_cost_k": 1454.1,
      "good_output_t": 139711.0
     },
     "Plant04": {
      "variable_cost_k": 266460.1,
      "fixed_cost_k": 1127.6,
      "good_output_t": 81694.0
     },
     "Plant05": {
      "variable_cost_k": 398678.1,
      "fixed_cost_k": 1248.5,
      "good_output_t": 132787.0
     },
     "Plant06": {
      "variable_cost_k": 262617.2,
      "fixed_cost_k": 1573.0,
      "good_output_t": 94388.0
     }
    },
    "excl": {
     "A1": 3016.5,
     "A2": 2853.0,
     "Plant01": 2878.8,
     "Plant02": 2684.5,
     "Plant03": 3029.7,
     "Plant04": 2923.4,
     "Plant05": 3020.1,
     "Plant06": 3112.2
    }
   },
   "CST-002": {
    "name": "Variable cost",
    "unit": "₹ m",
    "dp": 1,
    "div": 1000,
    "formula": "variable_cost_k",
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
    }
   },
   "CST-003": {
    "name": "Fuel cost",
    "unit": "₹ m",
    "dp": 1,
    "div": 1000,
    "formula": "fuel_cost_k",
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
    }
   },
   "SUS-001": {
    "name": "Water usage",
    "unit": "'000 m³",
    "dp": 1,
    "div": 1000,
    "formula": "water_m3",
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
    }
   },
   "SUS-002": {
    "name": "Emissions",
    "unit": "kt CO2e",
    "dp": 1,
    "div": 1000,
    "formula": "emissions_tco2e",
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
    }
   },
   "SUS-003": {
    "name": "Energy intensity",
    "unit": "GJ/t",
    "dp": 2,
    "div": 1,
    "formula": "energy_gj / good_output_t",
    "better": "down",
    "target": 3.5,
    "fields": [
     "energy_gj",
     "good_output_t"
    ],
    "rules": {
     "energy_gj": "SUM",
     "good_output_t": "SUM"
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
      "energy_gj": 2140719.0,
      "good_output_t": 625667.0
     },
     "A1": {
      "energy_gj": 1144453.0,
      "good_output_t": 316798.0
     },
     "A2": {
      "energy_gj": 996266.0,
      "good_output_t": 308869.0
     },
     "Plant01": {
      "energy_gj": 289576.0,
      "good_output_t": 81854.0
     },
     "Plant02": {
      "energy_gj": 358135.0,
      "good_output_t": 95233.0
     },
     "Plant03": {
      "energy_gj": 496742.0,
      "good_output_t": 139711.0
     },
     "Plant04": {
      "energy_gj": 283879.0,
      "good_output_t": 81694.0
     },
     "Plant05": {
      "energy_gj": 425107.0,
      "good_output_t": 132787.0
     },
     "Plant06": {
      "energy_gj": 287280.0,
      "good_output_t": 94388.0
     }
    },
    "excl": {
     "A1": 3.226,
     "A2": 3.613,
     "Plant01": 3.639,
     "Plant02": 3.549,
     "Plant03": 3.658,
     "Plant04": 3.136,
     "Plant05": 3.244,
     "Plant06": 3.306
    }
   },
   "SIG-007": {
    "name": "Production at risk",
    "unit": "kt",
    "dp": 1,
    "div": 1000,
    "formula": "production_at_risk_t",
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
    }
   },
   "SIG-008": {
    "name": "Critical plant-state alerts",
    "unit": "alerts",
    "dp": 0,
    "div": 1,
    "formula": "critical_plant_alerts",
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
    }
   },
   "SIG-009": {
    "name": "Critical-material shortage risk",
    "unit": "materials",
    "dp": 0,
    "div": 1,
    "formula": "critical_material_risks",
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
    }
   },
   "SIG-012": {
    "name": "Dispatch delays",
    "unit": "% late",
    "dp": 1,
    "div": 1,
    "formula": "dispatches_delayed / dispatches_total x 100",
    "better": "down",
    "target": 5,
    "fields": [
     "dispatches_delayed",
     "dispatches_total"
    ],
    "rules": {
     "dispatches_delayed": "SUM",
     "dispatches_total": "SUM"
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
      "dispatches_delayed": 91.0,
      "dispatches_total": 1051.0
     },
     "A1": {
      "dispatches_delayed": 61.0,
      "dispatches_total": 559.0
     },
     "A2": {
      "dispatches_delayed": 30.0,
      "dispatches_total": 492.0
     },
     "Plant01": {
      "dispatches_delayed": 9.0,
      "dispatches_total": 120.0
     },
     "Plant02": {
      "dispatches_delayed": 36.0,
      "dispatches_total": 225.0
     },
     "Plant03": {
      "dispatches_delayed": 16.0,
      "dispatches_total": 214.0
     },
     "Plant04": {
      "dispatches_delayed": 12.0,
      "dispatches_total": 169.0
     },
     "Plant05": {
      "dispatches_delayed": 15.0,
      "dispatches_total": 198.0
     },
     "Plant06": {
      "dispatches_delayed": 3.0,
      "dispatches_total": 125.0
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
    }
   },
   "SIG-021": {
    "name": "Environmental violations",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "env_violations",
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
    }
   },
   "EHS-001": {
    "name": "TRIR",
    "unit": "per 200k h",
    "dp": 2,
    "div": 1,
    "formula": "recordable_injuries x 200,000 / hours_worked",
    "better": "down",
    "target": 0.5,
    "fields": [
     "recordable_injuries",
     "hours_worked"
    ],
    "rules": {
     "recordable_injuries": "SUM",
     "hours_worked": "SUM"
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
      "recordable_injuries": 1.0,
      "hours_worked": 425000.0
     },
     "A1": {
      "recordable_injuries": 1.0,
      "hours_worked": 219000.0
     },
     "A2": {
      "recordable_injuries": 0.0,
      "hours_worked": 206000.0
     },
     "Plant01": {
      "recordable_injuries": 0.0,
      "hours_worked": 55000.0
     },
     "Plant02": {
      "recordable_injuries": 0.0,
      "hours_worked": 95000.0
     },
     "Plant03": {
      "recordable_injuries": 1.0,
      "hours_worked": 69000.0
     },
     "Plant04": {
      "recordable_injuries": 0.0,
      "hours_worked": 57000.0
     },
     "Plant05": {
      "recordable_injuries": 0.0,
      "hours_worked": 60000.0
     },
     "Plant06": {
      "recordable_injuries": 0.0,
      "hours_worked": 89000.0
     }
    },
    "excl": {
     "A1": 0.0,
     "A2": 0.913,
     "Plant01": 1.22,
     "Plant02": 1.613,
     "Plant03": 0.0,
     "Plant04": 0.0,
     "Plant05": 0.0,
     "Plant06": 0.0
    }
   },
   "EHS-002": {
    "name": "Severity incidents",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "severity_incidents",
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
    }
   },
   "EHS-003": {
    "name": "Near misses",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "near_misses",
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
    }
   },
   "EHS-004": {
    "name": "Critical safety incidents",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "critical_safety_incidents",
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
    }
   },
   "EHS-005": {
    "name": "Environmental excursions",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "env_excursions",
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
    }
   },
   "EHS-006": {
    "name": "Open EHS corrective actions",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "ehs_ca_open",
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
    }
   },
   "EHS-007": {
    "name": "Overdue EHS actions",
    "unit": "",
    "dp": 0,
    "div": 1,
    "formula": "ehs_ca_overdue",
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
    }
   },
   "EHS-009": {
    "name": "EHS investigation completion",
    "unit": "%",
    "dp": 0,
    "div": 1,
    "formula": "investigations_completed / investigations_due x 100 (100 if none due)",
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
    }
   },
   "REG-006": {
    "name": "Licence or permit expiry clock",
    "unit": "days",
    "dp": 0,
    "div": 1,
    "formula": "permit_days_to_expiry (MIN across children)",
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
    }
   }
  }
 }
};
if (typeof module !== "undefined" && module.exports) module.exports = DCTData;
