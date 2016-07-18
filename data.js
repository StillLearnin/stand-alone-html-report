var days = [
{
    employee: "Melvin Ray Herr",
    day: "2016-7-11",
    clockPunches: [
        { time: "09:24:36 AM", type: "f", hours: 0.55, billCode: "M", description: "* Misc. Time" },
        { time: "09:57:30 AM", type: "f", hours: 0.49, billCode: "D", description: "* Done Working" },
        { time: "10:27:01 AM", type: "f", hours: 0.38, billCode: "M", description: "* Misc. Time" },
        { time: "10:45:20 AM", type: "p", hours: 0.46, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "11:17:18 AM", type: "f", hours: 0.72, billCode: "P", description: ".968550 *IP* (PRODAS0) Programming in July" },
        { time: "12:00:26 PM", type: "f", hours: 0.03, billCode: "D", description: "* Done Working" },
        { time: "12:02:14 PM", type: "f", hours: 0.02, billCode: "M", description: "* Misc. Time" },
        { time: "12:03:05 PM", type: "f", hours: 0.39, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "12:26:29 PM", type: "f", hours: 0.51, billCode: "M", description: "* Misc. Time" },
        { time: "12:57:01 PM", type: "f", hours: 2.06, billCode: "D", description: "* Done Working" },
        { time: "01:21:30 PM", type: "p", hours: 0.03, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "03:02:43 PM", type: "f", hours: 0.01, billCode: "M", description: "* Misc. Time" },
        { time: "03:03:27 PM", type: "f", hours: 0.97, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "03:19:21 PM", type: "p", hours: 0.00, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "04:01:40 PM", type: "f", hours: 0.51, billCode: "M", description: "* Misc. Time" },
        { time: "04:32:01 PM", type: "f", hours: 0.27, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "04:48:11 PM", type: "f", hours: 1.70, billCode: "M", description: "* Misc. Time" },
        { time: "06:30:18 PM", type: "f", hours: 0.75, billCode: "D", description: "* Done Working" },
        { time: "07:15:03 PM", type: "f", hours: 0.68, billCode: "M", description: "* Misc. Time" },
        { time: "07:55:30 PM", type: "f", hours: 1.25, billCode: "D", description: "* Done Working" },
        { time: "09:10:42 PM", type: "f", hours: 0.45, billCode: "M", description: "* Misc. Time" },
        { time: "09:37:47 PM", type: "f", hours: 0.07, billCode: "D", description: "* Done Working" },
        { time: "09:42:04 PM", type: "f", hours: 2.14, billCode: "M", description: "* Misc. Time" },
        { time: "11:50:33 PM", type: "f", hours: 9.85, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.49 },
                { key: "M", description: "Misc. Time", hours: 6.95 },
                { key: "P", description: "Custom Programming", hours: 0.72 },
                { key: "V", description: "Development Time", hours: 1.63 }
            ],
            total: 9.79
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 9.79 }
            ],
            total: 9.79
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-7-12",
    clockPunches: [
        { time: "09:41:15 AM", type: "f", hours: 2.22, billCode: "M", description: "* Misc. Time" },
        { time: "10:04:11 AM", type: "p", hours: 0.54, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "12:27:07 PM", type: "f", hours: 0.88, billCode: "F", description: "* Food/Fellowship" },
        { time: "12:36:36 PM", type: "p", hours: 0.09, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "01:25:18 PM", type: "f", hours: 0.26, billCode: "M", description: "* Misc. Time" },
        { time: "01:40:53 PM", type: "f", hours: 0.45, billCode: "V", description: "* (.DV342002) Credit Line Interface" },
        { time: "02:07:33 PM", type: "f", hours: 2.26, billCode: "V", description: "* (.DV342000) Credit Card Fixes" },
        { time: "03:47:06 PM", type: "p", hours: 0.02, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "04:24:23 PM", type: "f", hours: 0.20, billCode: "M", description: "* Misc. Time" },
        { time: "04:36:13 PM", type: "f", hours: 0.31, billCode: "V", description: "* (.DV342000) Credit Card Fixes" },
        { time: "04:54:54 PM", type: "f", hours: 0.14, billCode: "M", description: "* Misc. Time" },
        { time: "05:02:59 PM", type: "f", hours: 0.24, billCode: "M", description: "* Misc. Time" },
        { time: "05:17:20 PM", type: "f", hours: 17.23, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.88 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.65 },
                { key: "M", description: "Misc. Time", hours: 3.06 },
                { key: "V", description: "Development Time", hours: 3.02 }
            ],
            total: 7.61
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 7.61 }
            ],
            total: 7.61
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-7-13",
    clockPunches: [
        { time: "10:31:22 AM", type: "f", hours: 0.73, billCode: "M", description: "* Misc. Time" },
        { time: "11:15:13 AM", type: "f", hours: 1.51, billCode: "V", description: "* (.DV120000) Inventory Posting Fixes" },
        { time: "12:45:48 PM", type: "f", hours: 0.74, billCode: "F", description: "* Food/Fellowship" },
        { time: "01:30:12 PM", type: "f", hours: 2.12, billCode: "M", description: "* Misc. Time" },
        { time: "02:00:20 PM", type: "p", hours: 0.00, billCode: "G", description: "* (MN) Mahlon Neuenschwander" },
        { time: "02:00:26 PM", type: "p", hours: 0.65, billCode: "C", description: ".968632 *WC* (HEGFES0) Sell, set up, and configure ABC Version 15" },
        { time: "03:01:18 PM", type: "p", hours: 0.14, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "03:26:40 PM", type: "p", hours: 0.05, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "03:32:56 PM", type: "p", hours: 0.08, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "03:42:00 PM", type: "p", hours: 0.00, billCode: "G", description: "* Give/Get Co-Worker Help" },
        { time: "03:42:26 PM", type: "p", hours: 0.03, billCode: "G", description: "* Give/Get Co-Worker Help" },
        { time: "03:44:07 PM", type: "p", hours: 0.02, billCode: "G", description: "* Give/Get Co-Worker Help" },
        { time: "03:46:17 PM", type: "p", hours: 0.50, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "04:39:46 PM", type: "p", hours: 0.27, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "05:20:23 PM", type: "f", hours: 16.17, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "C", description: "Commission", hours: 0.65 },
                { key: "F", description: "Food/Fellowship", hours: 0.74 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 1.09 },
                { key: "M", description: "Misc. Time", hours: 2.85 },
                { key: "V", description: "Development Time", hours: 1.51 }
            ],
            total: 6.84
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 6.84 }
            ],
            total: 6.84
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-7-14",
    clockPunches: [
        { time: "09:30:18 AM", type: "f", hours: 0.17, billCode: "M", description: "* Misc. Time" },
        { time: "09:40:20 AM", type: "f", hours: 2.37, billCode: "M", description: "* Misc. Time" },
        { time: "11:16:34 AM", type: "p", hours: 0.01, billCode: "N", description: ".966414 *WC* (BURMER0) Setup computer for David Gehman" },
        { time: "11:17:33 AM", type: "p", hours: 0.02, billCode: "N", description: ".966414 *WC* (BURMER0) Setup computer for David Gehman" },
        { time: "11:19:12 AM", type: "p", hours: 0.01, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "11:31:23 AM", type: "p", hours: 0.00, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "11:31:28 AM", type: "p", hours: 0.11, billCode: "N", description: ".966414 *WC* (BURMER0) Setup computer for David Gehman" },
        { time: "11:40:30 AM", type: "p", hours: 0.05, billCode: "N", description: ".966414 *WC* (BURMER0) Setup computer for David Gehman" },
        { time: "12:14:58 PM", type: "f", hours: 2.02, billCode: "F", description: "* Food/Fellowship" },
        { time: "02:15:54 PM", type: "f", hours: 0.34, billCode: "M", description: "* Misc. Time" },
        { time: "02:35:58 PM", type: "f", hours: 0.28, billCode: "P", description: ".968551 *IP* (EMYLL 0) Unified server control project web app user interface programming." },
        { time: "02:52:34 PM", type: "f", hours: 0.24, billCode: "M", description: "* Misc. Time" },
        { time: "03:05:07 PM", type: "p", hours: 1.21, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "04:19:48 PM", type: "f", hours: 17.46, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 2.02 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.01 },
                { key: "M", description: "Misc. Time", hours: 3.12 },
                { key: "N", description: "Billable Time", hours: 0.19 },
                { key: "P", description: "Custom Programming", hours: 0.28 },
                { key: "V", description: "Development Time", hours: 1.21 }
            ],
            total: 6.83
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 6.83 }
            ],
            total: 6.83
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-7-15",
    clockPunches: [
        { time: "09:47:32 AM", type: "f", hours: 2.80, billCode: "M", description: "* Misc. Time" },
        { time: "12:35:40 PM", type: "f", hours: 0.42, billCode: "F", description: "* Food/Fellowship" },
        { time: "01:00:42 PM", type: "f", hours: 0.41, billCode: "G", description: "* (MN) Mahlon Neuenschwander" },
        { time: "01:25:11 PM", type: "f", hours: 0.58, billCode: "M", description: "* Misc. Time" },
        { time: "01:39:17 PM", type: "p", hours: 0.03, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "01:57:20 PM", type: "p", hours: 0.01, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "01:58:48 PM", type: "p", hours: 0.47, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "02:29:37 PM", type: "p", hours: 0.03, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "02:32:34 PM", type: "f", hours: 0.74, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "03:04:57 PM", type: "p", hours: 0.15, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "03:16:11 PM", type: "p", hours: 0.03, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "03:27:25 PM", type: "f", hours: 7.47, billCode: "D", description: "* Done Working" },
        { time: "10:55:50 PM", type: "f", hours: 0.51, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "11:26:37 PM", type: "f", hours: 0.57, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.42 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.98 },
                { key: "M", description: "Misc. Time", hours: 3.38 },
                { key: "V", description: "Development Time", hours: 1.40 }
            ],
            total: 6.18
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 6.18 }
            ],
            total: 6.18
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-7-16",
    clockPunches: [
        { time: "00:00:42 AM", type: "f", hours: 0.32, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "00:20:00 AM", type: "f", hours: 57.40, billCode: "D", description: "* Done Working" }


    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "V", description: "Development Time", hours: 0.32 }
            ],
            total: 0.32
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 0.32 }
            ],
            total: 0.32
        }
    }
}
];
var grandTotals = {
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "C", description: "Commission", hours: 0.65 },
                { key: "F", description: "Food/Fellowship", hours: 4.06 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 3.22 },
                { key: "M", description: "Misc. Time", hours: 19.36 },
                { key: "N", description: "Billable Time", hours: 0.19 },
                { key: "P", description: "Custom Programming", hours: 1.00 },
                { key: "V", description: "Development Time", hours: 9.09 }
            ],
            total: 37.57
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 37.57 }
            ],
            total: 37.57
        }
    }
}
