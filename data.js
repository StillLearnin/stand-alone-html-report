var days = [
{
    employee: "Melvin Ray Herr",
    day: "2016-2-29",
    clockPunches: [
        { time: "09:18:08 AM", type: "f", hours: 1.70, billCode: "P", description: ".968216 *IP* (PRODAS0) Programming in March" },
        { time: "11:00:03 AM", type: "f", hours: 0.65, billCode: "M", description: "* Misc. Time" },
        { time: "11:39:13 AM", type: "f", hours: 0.43, billCode: "P", description: ".968216 *IP* (PRODAS0) Programming in March" },
        { time: "12:05:03 PM", type: "f", hours: 0.19, billCode: "M", description: "* Misc. Time" },
        { time: "12:16:30 PM", type: "f", hours: 1.07, billCode: "D", description: "* Done Working" },
        { time: "01:20:35 PM", type: "f", hours: 0.25, billCode: "M", description: "* Misc. Time" },
        { time: "01:35:46 PM", type: "f", hours: 2.16, billCode: "P", description: ".968216 *IP* (PRODAS0) Programming in March" },
        { time: "03:45:32 PM", type: "f", hours: 0.57, billCode: "M", description: "* Misc. Time" },
        { time: "04:19:38 PM", type: "f", hours: 0.44, billCode: "P", description: ".968216 *IP* (PRODAS0) Programming in March" },
        { time: "04:46:02 PM", type: "f", hours: 0.57, billCode: "M", description: "* Misc. Time" },
        { time: "05:20:23 PM", type: "f", hours: 40.18, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "M", description: "Misc. Time", hours: 2.23 },
                { key: "P", description: "Custom Programming", hours: 4.73 }
            ],
            total: 6.96
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 6.96 }
            ],
            total: 6.96
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-3-1",
    clockPunches: [
        { time: "10:00:18 AM", type: "p", hours: 0.01, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "10:03:42 AM", type: "p", hours: 0.52, billCode: "N", description: ".968147 *IP* (EMYLL 0) Troubleshoot" },
        { time: "10:39:06 AM", type: "f", hours: 0.14, billCode: "P", description: ".968245 *WC* (ZEIEQ 0) " },
        { time: "10:47:29 AM", type: "f", hours: 0.10, billCode: "D", description: "* Done Working" },
        { time: "10:53:20 AM", type: "f", hours: 0.39, billCode: "M", description: "* Misc. Time" },
        { time: "11:16:52 AM", type: "f", hours: 0.22, billCode: "P", description: ".968245 *WC* (ZEIEQ 0) " },
        { time: "11:30:00 AM", type: "f", hours: 0.52, billCode: "M", description: "* Misc. Time" },
        { time: "12:01:03 PM", type: "f", hours: 0.27, billCode: "P", description: ".968237 *IP* (ZIMMU 0) Link ABC to Outlook" },
        { time: "12:17:04 PM", type: "f", hours: 1.08, billCode: "F", description: "* Food/Fellowship" },
        { time: "01:20:10 PM", type: "p", hours: 0.00, billCode: "M", description: "* Misc. Time" },
        { time: "01:22:11 PM", type: "f", hours: 0.20, billCode: "P", description: ".968245 *WC* (ZEIEQ 0) " },
        { time: "01:34:23 PM", type: "f", hours: 0.68, billCode: "M", description: "* Misc. Time" },
        { time: "02:15:17 PM", type: "f", hours: 0.31, billCode: "P", description: ".968237 *IP* (ZIMMU 0) Link ABC to Outlook" },
        { time: "02:33:38 PM", type: "p", hours: 0.05, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "02:37:06 PM", type: "f", hours: 0.61, billCode: "G", description: "* Give/Get Co-Worker Help" },
        { time: "02:37:34 PM", type: "p", hours: 0.84, billCode: "P", description: ".968226 *IP* (ZIMMU 0) update to 15.05" },
        { time: "04:04:00 PM", type: "f", hours: 1.43, billCode: "P", description: ".968237 *IP* (ZIMMU 0) Link ABC to Outlook" },
        { time: "05:29:54 PM", type: "f", hours: 0.02, billCode: "M", description: "* Misc. Time" },
        { time: "05:30:57 PM", type: "f", hours: 1.03, billCode: "D", description: "* Done Working" },
        { time: "06:32:56 PM", type: "f", hours: 0.08, billCode: "M", description: "* Misc. Time" },
        { time: "06:37:41 PM", type: "f", hours: 19.54, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 1.08 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.67 },
                { key: "M", description: "Misc. Time", hours: 1.69 },
                { key: "N", description: "Billable Time", hours: 0.52 },
                { key: "P", description: "Custom Programming", hours: 3.41 }
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
    day: "2016-3-2",
    clockPunches: [
        { time: "02:16:33 PM", type: "f", hours: 2.89, billCode: "P", description: ".968216 *IP* (PRODAS0) Programming in March" },
        { time: "05:09:59 PM", type: "f", hours: 0.20, billCode: "D", description: "* Done Working" },
        { time: "05:21:42 PM", type: "f", hours: 0.28, billCode: "P", description: ".968216 *IP* (PRODAS0) Programming in March" },
        { time: "05:38:15 PM", type: "f", hours: 14.84, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "P", description: "Custom Programming", hours: 3.17 }
            ],
            total: 3.17
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 3.17 }
            ],
            total: 3.17
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-3-3",
    clockPunches: [
        { time: "10:31:33 AM", type: "p", hours: 1.31, billCode: "P", description: ".968245 *WC* (ZEIEQ 0) " },
        { time: "12:05:00 PM", type: "f", hours: 0.56, billCode: "F", description: "* Food/Fellowship" },
        { time: "12:35:36 PM", type: "p", hours: 0.00, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "12:35:45 PM", type: "p", hours: 0.14, billCode: "N", description: ".968233 " },
        { time: "12:44:16 PM", type: "p", hours: 0.02, billCode: "N", description: ".968233 " },
        { time: "12:47:51 PM", type: "f", hours: 2.05, billCode: "M", description: "* Misc. Time" },
        { time: "02:50:32 PM", type: "f", hours: 1.77, billCode: "V", description: "* (.DV010000) Global Input" },
        { time: "04:36:49 PM", type: "f", hours: 0.07, billCode: "M", description: "* Misc. Time" },
        { time: "04:41:15 PM", type: "f", hours: 0.44, billCode: "M", description: "* Misc. Time" },
        { time: "05:07:51 PM", type: "f", hours: 2.26, billCode: "D", description: "* Done Working" },
        { time: "07:23:21 PM", type: "f", hours: 0.24, billCode: "M", description: "* Misc. Time" },
        { time: "07:37:51 PM", type: "f", hours: 0.53, billCode: "D", description: "* Done Working" },
        { time: "08:09:45 PM", type: "f", hours: 1.49, billCode: "M", description: "* Misc. Time" },
        { time: "09:38:54 PM", type: "f", hours: 0.04, billCode: "D", description: "* Done Working" },
        { time: "09:41:12 PM", type: "f", hours: 0.77, billCode: "M", description: "* Misc. Time" },
        { time: "10:27:05 PM", type: "f", hours: 0.17, billCode: "D", description: "* Done Working" },
        { time: "10:37:29 PM", type: "f", hours: 1.59, billCode: "M", description: "* Misc. Time" }
    ],
    missingEndOfDayPunch: true,
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.56 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.00 },
                { key: "M", description: "Misc. Time", hours: 6.65 },
                { key: "N", description: "Billable Time", hours: 0.16 },
                { key: "P", description: "Custom Programming", hours: 1.31 },
                { key: "V", description: "Development Time", hours: 1.77 }
            ],
            total: 10.45
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 10.45 }
            ],
            total: 10.45
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-3-4",
    clockPunches: [
        { time: "00:28:53 AM", type: "f", hours: 0.60, billCode: "M", description: "* Misc. Time" },
        { time: "01:04:51 AM", type: "f", hours: 7.91, billCode: "D", description: "* Done Working" },
        { time: "08:59:37 AM", type: "f", hours: 3.34, billCode: "M", description: "* Misc. Time" },
        { time: "09:42:59 AM", type: "p", hours: 0.21, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "12:32:41 PM", type: "f", hours: 0.62, billCode: "F", description: "* Food/Fellowship" },
        { time: "01:10:04 PM", type: "f", hours: 0.39, billCode: "M", description: "* Misc. Time" },
        { time: "01:33:09 PM", type: "f", hours: 0.24, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "01:47:37 PM", type: "f", hours: 0.71, billCode: "D", description: "* Done Working" },
        { time: "02:30:21 PM", type: "f", hours: 0.61, billCode: "M", description: "* Misc. Time" },
        { time: "03:06:42 PM", type: "f", hours: 1971.66, billCode: "D", description: "* Done Working" }


    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.62 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.45 },
                { key: "M", description: "Misc. Time", hours: 4.94 }
            ],
            total: 6.01
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 6.01 }
            ],
            total: 6.01
        }
    }
}
];
var grandTotals = {
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 2.26 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 1.12 },
                { key: "M", description: "Misc. Time", hours: 15.51 },
                { key: "N", description: "Billable Time", hours: 0.68 },
                { key: "P", description: "Custom Programming", hours: 12.62 },
                { key: "V", description: "Development Time", hours: 1.77 }
            ],
            total: 33.96
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 33.96 }
            ],
            total: 33.96
        }
    }
}
