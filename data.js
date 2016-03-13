var days = [
{
    employee: "Melvin Ray Herr",
    day: "2016-3-7",
    clockPunches: [
        { time: "08:40:16 AM", type: "f", hours: 0.34, billCode: "M", description: "* Misc. Time" },
        { time: "09:00:31 AM", type: "p", hours: 0.06, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "09:04:07 AM", type: "f", hours: 2.20, billCode: "D", description: "* Done Working" },
        { time: "11:15:54 AM", type: "f", hours: 0.62, billCode: "M", description: "* Misc. Time" },
        { time: "11:53:08 AM", type: "f", hours: 0.15, billCode: "D", description: "* Done Working" },
        { time: "12:02:10 PM", type: "f", hours: 0.46, billCode: "M", description: "* Misc. Time" },
        { time: "12:29:43 PM", type: "f", hours: 2.33, billCode: "P", description: ".968216 *IP* (PRODAS0) Programming in March" },
        { time: "02:49:22 PM", type: "f", hours: 0.17, billCode: "V", description: "* (.DV724000) Client 4 Fixes" },
        { time: "02:59:45 PM", type: "f", hours: 0.36, billCode: "P", description: ".968216 *IP* (PRODAS0) Programming in March" },
        { time: "03:21:19 PM", type: "f", hours: 0.44, billCode: "V", description: "* (.DV724000) Client 4 Fixes" },
        { time: "03:47:39 PM", type: "f", hours: 2.25, billCode: "P", description: ".968216 *IP* (PRODAS0) Programming in March" },
        { time: "06:02:24 PM", type: "f", hours: 15.06, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.06 },
                { key: "M", description: "Misc. Time", hours: 1.42 },
                { key: "P", description: "Custom Programming", hours: 4.94 },
                { key: "V", description: "Development Time", hours: 0.61 }
            ],
            total: 7.03
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 7.03 }
            ],
            total: 7.03
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-3-8",
    clockPunches: [
        { time: "09:05:54 AM", type: "f", hours: 0.46, billCode: "M", description: "* Misc. Time" },
        { time: "09:33:25 AM", type: "f", hours: 2.47, billCode: "P", description: ".968216 *IP* (PRODAS0) Programming in March" },
        { time: "12:01:19 PM", type: "f", hours: 0.30, billCode: "M", description: "* Misc. Time" },
        { time: "12:19:11 PM", type: "f", hours: 2.96, billCode: "P", description: ".968216 *IP* (PRODAS0) Programming in March" },
        { time: "03:16:39 PM", type: "f", hours: 0.73, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "04:00:20 PM", type: "f", hours: 0.66, billCode: "P", description: ".968256 " },
        { time: "04:40:01 PM", type: "f", hours: 0.24, billCode: "M", description: "* Misc. Time" },
        { time: "04:54:07 PM", type: "f", hours: 0.04, billCode: "P", description: ".968216 *IP* (PRODAS0) Programming in March" },
        { time: "04:56:12 PM", type: "f", hours: 0.17, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "05:06:30 PM", type: "f", hours: 0.42, billCode: "P", description: ".968216 *IP* (PRODAS0) Programming in March" },
        { time: "05:31:39 PM", type: "f", hours: 2.52, billCode: "D", description: "* Done Working" },
        { time: "08:02:45 PM", type: "f", hours: 0.51, billCode: "M", description: "* Misc. Time" },
        { time: "08:33:33 PM", type: "f", hours: 0.44, billCode: "D", description: "* Done Working" },
        { time: "08:59:50 PM", type: "f", hours: 0.30, billCode: "M", description: "* Misc. Time" },
        { time: "09:17:54 PM", type: "f", hours: 12.41, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.90 },
                { key: "M", description: "Misc. Time", hours: 1.81 },
                { key: "P", description: "Custom Programming", hours: 6.55 }
            ],
            total: 9.26
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 9.26 }
            ],
            total: 9.26
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-3-9",
    clockPunches: [
        { time: "09:42:34 AM", type: "f", hours: 0.94, billCode: "M", description: "* Misc. Time" },
        { time: "10:38:45 AM", type: "f", hours: 2.00, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "12:38:58 PM", type: "f", hours: 0.35, billCode: "F", description: "* Food/Fellowship" },
        { time: "12:59:45 PM", type: "f", hours: 1.56, billCode: "M", description: "* Misc. Time" },
        { time: "01:00:27 PM", type: "p", hours: 0.25, billCode: "P", description: ".968245 *WC* (ZEIEQ 0) " },
        { time: "01:15:56 PM", type: "p", hours: 0.83, billCode: "P", description: ".968245 *WC* (ZEIEQ 0) " },
        { time: "02:14:07 PM", type: "p", hours: 0.01, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "02:50:44 PM", type: "p", hours: 0.69, billCode: "V", description: "* (.DV342008) MW Genius Interface" },
        { time: "04:20:22 PM", type: "f", hours: 16.49, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.35 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.01 },
                { key: "M", description: "Misc. Time", hours: 2.50 },
                { key: "P", description: "Custom Programming", hours: 1.08 },
                { key: "V", description: "Development Time", hours: 2.69 }
            ],
            total: 6.63
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 6.63 }
            ],
            total: 6.63
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-3-10",
    clockPunches: [
        { time: "08:50:00 AM", type: "f", hours: 0.83, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "09:39:44 AM", type: "f", hours: 0.22, billCode: "M", description: "* Misc. Time" },
        { time: "09:53:08 AM", type: "f", hours: 1.42, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "11:18:22 AM", type: "f", hours: 1.40, billCode: "M", description: "* Misc. Time" },
        { time: "12:42:10 PM", type: "f", hours: 1.19, billCode: "F", description: "* Food/Fellowship" },
        { time: "01:53:13 PM", type: "f", hours: 1.87, billCode: "M", description: "* Misc. Time" },
        { time: "03:45:06 PM", type: "f", hours: 16.69, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 1.19 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 2.25 },
                { key: "M", description: "Misc. Time", hours: 3.49 }
            ],
            total: 6.93
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 6.93 }
            ],
            total: 6.93
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-3-11",
    clockPunches: [
        { time: "08:26:29 AM", type: "f", hours: 0.25, billCode: "V", description: "* (.DV000001) Program Merge" },
        { time: "08:41:23 AM", type: "f", hours: 0.05, billCode: "D", description: "* Done Working" },
        { time: "08:44:04 AM", type: "f", hours: 0.54, billCode: "V", description: "* (.DV000001) Program Merge" },
        { time: "09:16:12 AM", type: "f", hours: 0.01, billCode: "D", description: "* Done Working" },
        { time: "09:16:48 AM", type: "f", hours: 0.45, billCode: "V", description: "* (.DV000001) Program Merge" },
        { time: "09:43:42 AM", type: "f", hours: 1.11, billCode: "D", description: "* Done Working" },
        { time: "10:50:23 AM", type: "f", hours: 1.35, billCode: "M", description: "* Misc. Time" },
        { time: "12:11:09 PM", type: "f", hours: 0.36, billCode: "D", description: "* Done Working" },
        { time: "12:32:55 PM", type: "f", hours: 0.28, billCode: "F", description: "* Food/Fellowship" },
        { time: "12:49:55 PM", type: "f", hours: 0.73, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "01:33:51 PM", type: "f", hours: 2.31, billCode: "M", description: "* Misc. Time" },
        { time: "01:34:54 PM", type: "p", hours: 0.41, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "04:17:08 PM", type: "f", hours: 2.99, billCode: "D", description: "* Done Working" },
        { time: "07:16:25 PM", type: "f", hours: 1.05, billCode: "U", description: ".967140 *IP* (ABC) Upgrade to Version 15" },
        { time: "08:19:10 PM", type: "f", hours: 13.44, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.28 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.41 },
                { key: "M", description: "Misc. Time", hours: 3.66 },
                { key: "U", description: "Inhouse Development", hours: 1.05 },
                { key: "V", description: "Development Time", hours: 1.97 }
            ],
            total: 7.37
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 7.37 }
            ],
            total: 7.37
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-3-12",
    clockPunches: [
        { time: "09:45:42 AM", type: "f", hours: 0.03, billCode: "M", description: "* Misc. Time" },
        { time: "09:47:18 AM", type: "f", hours: 0.16, billCode: "U", description: ".967140 *IP* (ABC) Upgrade to Version 15" },
        { time: "09:56:50 AM", type: "f", hours: 4.76, billCode: "D", description: "* Done Working" },
        { time: "02:42:14 PM", type: "f", hours: 0.07, billCode: "M", description: "* Misc. Time" },
        { time: "02:46:26 PM", type: "f", hours: 0.38, billCode: "D", description: "* Done Working" },
        { time: "03:08:53 PM", type: "f", hours: 0.32, billCode: "U", description: ".967140 *IP* (ABC) Upgrade to Version 15" },
        { time: "03:27:55 PM", type: "f", hours: 0.08, billCode: "D", description: "* Done Working" },
        { time: "03:32:24 PM", type: "f", hours: 1.12, billCode: "U", description: ".967140 *IP* (ABC) Upgrade to Version 15" },
        { time: "04:39:24 PM", type: "f", hours: 0.46, billCode: "D", description: "* Done Working" },
        { time: "05:06:58 PM", type: "f", hours: 1.27, billCode: "U", description: ".967140 *IP* (ABC) Upgrade to Version 15" },
        { time: "06:23:00 PM", type: "f", hours: 3.08, billCode: "D", description: "* Done Working" },
        { time: "09:27:37 PM", type: "f", hours: 0.32, billCode: "U", description: ".967140 *IP* (ABC) Upgrade to Version 15" },
        { time: "09:46:37 PM", type: "f", hours: 1770.22, billCode: "D", description: "* Done Working" }


    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "M", description: "Misc. Time", hours: 0.10 },
                { key: "U", description: "Inhouse Development", hours: 3.19 }
            ],
            total: 3.29
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 3.29 }
            ],
            total: 3.29
        }
    }
}
];
var grandTotals = {
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 1.82 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 3.63 },
                { key: "M", description: "Misc. Time", hours: 12.98 },
                { key: "P", description: "Custom Programming", hours: 12.57 },
                { key: "U", description: "Inhouse Development", hours: 4.24 },
                { key: "V", description: "Development Time", hours: 5.27 }
            ],
            total: 40.51
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 40.51 }
            ],
            total: 40.51
        }
    }
}
