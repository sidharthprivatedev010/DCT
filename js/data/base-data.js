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
    "val": "₹425 /t",
    "plan": "₹410 /t",
    "bs": "Deteriorating",
    "ts": ""
   },
   "Group": {
    "val": "₹412 /t",
    "plan": "408",
    "bs": "Deteriorating",
    "ts": "Certified",
    "v": "412",
    "u": "₹ /t",
    "var": "+1.0%",
    "tr": "▼",
    "fc": "415",
    "prov": "CERT P06",
    "own": "Finance (role)"
   }
  },
  "CST-002": {
   "A1": {
    "val": "₹221 /t",
    "plan": "₹214 /t",
    "bs": "Deteriorating",
    "ts": ""
   },
   "Group": {
    "val": "₹214 /t",
    "plan": "₹211 /t",
    "bs": "Deteriorating",
    "ts": "Certified"
   }
  },
  "CST-003": {
   "A1": {
    "val": "₹38 /t",
    "plan": "₹37 /t",
    "bs": "On track",
    "ts": ""
   },
   "Group": {
    "val": "9.8 ₹/t",
    "plan": "9.4",
    "var": "+4.3%",
    "bs": "Deteriorating",
    "ts": "Pending certification"
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
    "val": "0.38",
    "ts": ""
   },
   "Group": {
    "val": "0.42",
    "ts": "Certified",
    "v": "0.42",
    "u": "",
    "plan": "≤ [PH]",
    "var": "—",
    "tr": "▲ improving",
    "fc": "0.40",
    "bs": "Improving",
    "prov": "CERT P06",
    "own": "EHS (role)"
   }
  },
  "EHS-002": {
   "A1": {
    "val": "0",
    "ts": ""
   },
   "Group": {
    "val": "0",
    "ts": "Certified",
    "bs": "On track"
   }
  },
  "EHS-003": {
   "A1": {
    "val": "3",
    "ts": ""
   },
   "Group": {
    "val": "14",
    "ts": ""
   }
  },
  "EHS-004": {
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
    "own": "EHS (role)"
   },
   "A1": {
    "val": "0",
    "ts": ""
   }
  },
  "EHS-005": {
   "A1": {
    "val": "0",
    "ts": ""
   },
   "Group": {
    "val": "1 (minor, closed)",
    "ts": "Certified",
    "bs": "On track"
   }
  },
  "EHS-006": {
   "A1": {
    "v": "2",
    "u": "",
    "plan": "—",
    "var": "—",
    "tr": "flat",
    "fc": "0 by D+20",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "EHS (role)"
   },
   "Group": {
    "val": "9",
    "ts": ""
   }
  },
  "EHS-007": {
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
    "own": "EHS (role)"
   },
   "Group": {
    "val": "0",
    "ts": "Certified",
    "bs": "On track"
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
    "v": "100",
    "u": "%",
    "plan": "100%",
    "var": "0",
    "tr": "flat",
    "fc": "—",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "EHS (role)"
   },
   "Group": {
    "val": "100%",
    "ts": ""
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
    "v": "103.2",
    "u": "% of plan (flash)",
    "plan": "100%",
    "var": "+3.2 pts",
    "tr": "▼ forecast",
    "fc": "P07 fcst 91.0%",
    "bs": "Deteriorating",
    "ts": "Reconciliation break",
    "prov": "PRELIM flash",
    "own": "Metric Owner (production)",
    "fb": "Breach in 4 d (Plant 02)"
   },
   "Group": {
    "val": "98.1%",
    "plan": "100%",
    "bs": "Deteriorating",
    "ts": "Reconciliation break",
    "v": "98.1",
    "u": "% of plan",
    "var": "−1.9 pts",
    "tr": "▼ since D-2",
    "fc": "P07 fcst 96.4%",
    "prov": "PRELIM flash",
    "own": "Production (role)",
    "fb": "Plant 02 breach in 4 d"
   },
   "Plant02": {
    "v": "100.2",
    "u": "% of plan",
    "plan": "100%",
    "var": "+0.2 pts",
    "tr": "▼ forecast",
    "fc": "81% P07",
    "bs": "Deteriorating",
    "ts": "Reconciliation break",
    "prov": "PRELIM",
    "own": "Production (role)",
    "fb": "Breach in 4 d"
   },
   "Group#t7": {
    "v": "97.8",
    "u": "% of plan",
    "bs": "Deteriorating",
    "ts": "Certified with exception"
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
    "v": "88",
    "u": "%",
    "plan": "86%",
    "var": "+2 pts",
    "tr": "✓",
    "fc": "71% from D+4",
    "bs": "Forecast breach",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)"
   },
   "Group": {
    "val": "86%",
    "plan": "85%",
    "var": "+1 pt",
    "ts": "Certified",
    "v": "86",
    "u": "%",
    "tr": "✓",
    "fc": "85%",
    "bs": "On track",
    "prov": "CERT P06",
    "own": "Production (role)"
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
    "val": "84%",
    "plan": "88%",
    "var": "−4 pts",
    "ts": "Pending certification"
   },
   "Group": {
    "val": "86%",
    "plan": "88%",
    "bs": "Deteriorating",
    "ts": "Pending certification",
    "var": "−2 pts",
    "v": "86",
    "u": "%",
    "tr": "▼",
    "fc": "P07 fcst 85%",
    "prov": "PRELIM",
    "own": "Operations (role)",
    "sp": [
     88.5,
     89,
     88.2,
     87.6,
     87.1,
     86.4,
     86
    ],
    "spp": [
     88,
     88,
     88,
     88,
     88,
     88,
     88
    ],
    "spx": [
     "P01",
     "P07"
    ]
   }
  },
  "OPS-006": {
   "Group": {
    "v": "78.4",
    "u": "%",
    "plan": "80%",
    "var": "−1.6 pts",
    "tr": "▼",
    "fc": "P07 fcst 77.9%",
    "bs": "Deteriorating",
    "ts": "Pending certification",
    "prov": "PRELIM",
    "own": "Operations (role)",
    "sp": [
     80.2,
     80.6,
     79.9,
     79.5,
     79.1,
     78.8,
     78.4
    ],
    "spp": [
     80,
     80,
     80,
     80,
     80,
     80,
     80
    ],
    "spx": [
     "P01",
     "P07"
    ]
   }
  },
  "PLT-001": {
   "A1": {
    "v": "82",
    "u": "%",
    "plan": "84%",
    "var": "−2 pts",
    "tr": "▼",
    "fc": "78% from D+4",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)"
   }
  },
  "PLT-002": {
   "Plant02": {
    "v": "74",
    "u": "%",
    "plan": "79%",
    "var": "−5 pts",
    "tr": "▼",
    "fc": "62% from D+4",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)"
   },
   "Group": {
    "v": "78",
    "u": "%",
    "plan": "79%",
    "var": "−1 pt",
    "tr": "▼",
    "fc": "77%",
    "bs": "Deteriorating",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)"
   }
  },
  "PLT-004": {
   "A1": {
    "v": "91.3",
    "u": "%",
    "plan": "91.0%",
    "var": "+0.3",
    "tr": "flat",
    "fc": "91%",
    "bs": "On track",
    "ts": "Pending certification",
    "prov": "PRELIM",
    "own": "Production (role)"
   }
  },
  "PLT-005": {
   "A1": {
    "v": "94.1",
    "u": "%",
    "plan": "94.0%",
    "var": "+0.1",
    "tr": "flat",
    "fc": "94%",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Production (role)"
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
    "val": "11.2 kt",
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
    "v": "112",
    "u": "days",
    "plan": "≥ [PH]",
    "var": "—",
    "tr": "counting down",
    "fc": "Renewal D+60",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Compliance (role)"
   },
   "Group": {
    "v": "74",
    "u": "days · Entity C1",
    "plan": "≥ [PH]",
    "var": "—",
    "tr": "counting down",
    "fc": "Renewal filed D+20 (plan)",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Compliance (role)"
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
    "v": "212",
    "u": "h",
    "plan": "200",
    "var": "+6%",
    "tr": "▲",
    "fc": "210 h",
    "bs": "Improving",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)"
   },
   "Group": {
    "val": "205 h",
    "bs": "On track",
    "ts": "Certified"
   }
  },
  "REL-002": {
   "A1": {
    "v": "3.4",
    "u": "h",
    "plan": "≤ 4.0",
    "var": "—",
    "tr": "flat",
    "fc": "3.5 h",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)"
   },
   "Group": {
    "val": "3.6 h",
    "bs": "On track",
    "ts": "Certified"
   }
  },
  "REL-003": {
   "A1": {
    "v": "2.8",
    "u": "% of hours",
    "plan": "≤ 3.5%",
    "var": "—",
    "tr": "flat",
    "fc": "2.9%",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)"
   },
   "Group": {
    "v": "3.1",
    "u": "% of hours",
    "plan": "≤ 3.5%",
    "var": "—",
    "tr": "flat",
    "fc": "3.0%",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)"
   }
  },
  "REL-004": {
   "A1": {
    "v": "1.6",
    "u": "kt MTD",
    "plan": "≤ 2.0",
    "var": "—",
    "tr": "flat",
    "fc": "1.8 kt",
    "bs": "On track",
    "ts": "Certified",
    "prov": "CERT P06",
    "own": "Maintenance (role)"
   },
   "Group": {
    "val": "93%",
    "bs": "Deteriorating",
    "ts": "Certified"
   }
  },
  "REL-005": {
   "A1": {
    "v": "93",
    "u": "%",
    "plan": "≥ 95%",
    "var": "−2 pts",
    "tr": "▼",
    "fc": "95% by P08",
    "bs": "Deteriorating",
    "ts": "Pending certification",
    "prov": "PRELIM",
    "own": "Maintenance (role)"
   },
   "Group": {
    "val": "93%",
    "plan": "≥ 95%",
    "var": "−2 pts",
    "bs": "Deteriorating",
    "ts": "Certified"
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
    "val": "Stable"
   }
  },
  "SIG-003": {
   "A1": {
    "val": "Stable"
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
    "val": "18.4 kt"
   },
   "Plant02": {
    "v": "18.4",
    "u": "kt (FCST)",
    "plan": "0",
    "var": "—",
    "tr": "▲ new",
    "fc": "From D+4",
    "bs": "Forecast breach",
    "ts": "Pending certification",
    "prov": "LEADING · FCST",
    "own": "Production (role)"
   }
  },
  "SIG-008": {
   "A1": {
    "v": "0",
    "u": "",
    "plan": "0",
    "var": "0",
    "tr": "flat",
    "fc": "—",
    "bs": "On track",
    "ts": "System count",
    "prov": "LEADING",
    "own": "Maintenance (role)"
   }
  },
  "SIG-009": {
   "A1": {
    "val": "Elevated",
    "v": "3.5",
    "u": "days of cover",
    "plan": "≥ lead time 9 d",
    "var": "−5.5 d",
    "tr": "▼ since D-1 21:40",
    "fc": "Stock-out D+4",
    "bs": "Deteriorating",
    "ts": "Pending certification",
    "prov": "LEADING · PRELIM",
    "own": "Functional Leader (supply)"
   },
   "Group": {
    "v": "3.5",
    "u": "days of cover",
    "plan": "≥ lead time 9 d",
    "var": "−5.5 d",
    "tr": "▼ since D-1 21:40",
    "fc": "Stock-out D+4",
    "bs": "Deteriorating",
    "ts": "Pending certification",
    "prov": "LEADING · PRELIM",
    "own": "Functional Leader (supply)"
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
    "v": "2–4",
    "u": "days (FCST)",
    "plan": "0",
    "var": "—",
    "tr": "new",
    "fc": "From D+4",
    "bs": "Forecast breach",
    "ts": "Pending certification",
    "prov": "LEADING · FCST",
    "own": "Commercial (role)"
   },
   "Group": {
    "v": "2–4",
    "u": "days",
    "plan": "0",
    "var": "—",
    "tr": "new",
    "fc": "From D+4",
    "bs": "Forecast breach",
    "ts": "Pending certification",
    "prov": "LEADING · FCST",
    "own": "Commercial (role)"
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
    "val": "0",
    "ts": "LEADING"
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
    "val": "3.0 m³/t",
    "bs": "On track",
    "ts": ""
   },
   "Group": {
    "val": "3.1 m³/t",
    "bs": "On track",
    "ts": "Certified"
   }
  },
  "SUS-002": {
   "A1": {
    "val": "0.84 tCO2e/t",
    "bs": "On track",
    "ts": ""
   },
   "Group": {
    "val": "0.82 tCO2e/t",
    "bs": "On track",
    "ts": "Pending"
   }
  },
  "SUS-003": {
   "A1": {
    "val": "5.3 GJ/t",
    "bs": "On track",
    "ts": ""
   },
   "Group": {
    "val": "5.2 GJ/t",
    "ts": "Certified",
    "bs": "Improving",
    "v": "5.2",
    "u": "GJ/t",
    "plan": "5.3",
    "var": "−1.9%",
    "tr": "▲",
    "fc": "5.2",
    "prov": "CERT P06",
    "own": "Sustainability (role)"
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
  }
 }
};
if (typeof module !== "undefined" && module.exports) module.exports = DCTData;
