var days = [
{
    employee: "Melvin Ray Herr",
    day: "2016-4-4",
    clockPunches: [
        { time: "09:03:10 AM", type: "f", hours: 1.67, billCode: "M", description: "* Misc. Time" },
        { time: "10:43:27 AM", type: "f", hours: 3.28, billCode: "YF", description: ".967457 *IP* (EMYLL 0) Centralized server control system." },
        { time: "02:00:14 PM", type: "f", hours: 0.39, billCode: "M", description: "* Misc. Time" },
        { time: "02:23:45 PM", type: "f", hours: 0.04, billCode: "YF", description: ".967457 *IP* (EMYLL 0) Centralized server control system." },
        { time: "02:25:59 PM", type: "f", hours: 1.73, billCode: "M", description: "* Misc. Time" },
        { time: "04:09:43 PM", type: "f", hours: 0.92, billCode: "U", description: "* (ABCTIT0) ABC Time Tracking and Reports" },
        { time: "05:05:04 PM", type: "f", hours: 1.37, billCode: "YF", description: ".967457 *IP* (EMYLL 0) Centralized server control system." },
        { time: "06:27:06 PM", type: "f", hours: 0.63, billCode: "M", description: "* Misc. Time" },
        { time: "07:05:00 PM", type: "f", hours: 0.76, billCode: "D", description: "* Done Working" },
        { time: "07:50:42 PM", type: "f", hours: 0.34, billCode: "M", description: "* Misc. Time" },
        { time: "08:11:20 PM", type: "f", hours: 1.05, billCode: "D", description: "* Done Working" },
        { time: "09:14:26 PM", type: "f", hours: 0.37, billCode: "P", description: ".968307 *IP* (PRODAS0) Programming in April" },
        { time: "09:36:47 PM", type: "f", hours: 0.14, billCode: "M", description: "* Misc. Time" },
        { time: "09:44:55 PM", type: "f", hours: 2.87, billCode: "U", description: "* (ABCTIT0) ABC Time Tracking and Reports" }
    ],
    missingEndOfDayPunch: true,
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "M", description: "Misc. Time", hours: 4.90 },
                { key: "P", description: "Custom Programming", hours: 0.37 },
                { key: "U", description: "Inhouse Development", hours: 3.79 },
                { key: "YF", description: "Programming/Tooling", hours: 4.69 }
            ],
            total: 13.75
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 9.06 },
                { key: "Y", description: "Bill Code Group Total", hours: 4.69 }
            ],
            total: 13.75
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-4-5",
    clockPunches: [
        { time: "00:37:13 AM", type: "f", hours: 0.14, billCode: "M", description: "* Misc. Time" },
        { time: "00:45:30 AM", type: "f", hours: 8.11, billCode: "D", description: "* Done Working" },
        { time: "08:52:12 AM", type: "f", hours: 0.48, billCode: "M", description: "* Misc. Time" },
        { time: "09:16:25 AM", type: "p", hours: 0.11, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "09:27:19 AM", type: "f", hours: 0.21, billCode: "U", description: "* (ABCTIT0) ABC Time Tracking and Reports" },
        { time: "09:39:54 AM", type: "f", hours: 1.66, billCode: "M", description: "* Misc. Time" },
        { time: "10:34:15 AM", type: "p", hours: 0.67, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "12:00:00 PM", type: "f", hours: 2.49, billCode: "G", description: "(KREROM0) ROBERT M KREIDER- Help Bob with his programming environments.       " },
        { time: "01:22:11 PM", type: "p", hours: 0.01, billCode: "M", description: "* Misc. Time" },
        { time: "02:30:00 PM", type: "f", hours: 0.51, billCode: "M", description: "* Misc. Time" },
        { time: "03:00:18 PM", type: "f", hours: 2.51, billCode: "D", description: "* Done Working" },
        { time: "05:30:57 PM", type: "f", hours: 0.70, billCode: "M", description: "* Misc. Time" },
        { time: "06:12:36 PM", type: "f", hours: 0.11, billCode: "V", description: "* (.DV342000) Credit Card Fixes" },
        { time: "06:19:21 PM", type: "f", hours: 0.08, billCode: "M", description: "* Misc. Time" },
        { time: "06:24:10 PM", type: "f", hours: 0.28, billCode: "V", description: "* (.DV342008) MW Genius Interface" },
        { time: "06:41:10 PM", type: "f", hours: 0.98, billCode: "D", description: "* Done Working" },
        { time: "07:40:05 PM", type: "f", hours: 0.57, billCode: "M", description: "* Misc. Time" },
        { time: "08:14:19 PM", type: "f", hours: 0.98, billCode: "V", description: "* (.DV342008) MW Genius Interface" },
        { time: "09:13:00 PM", type: "f", hours: 1.02, billCode: "V", description: "* (.DV040000) Global Add-ons" },
        { time: "10:13:55 PM", type: "f", hours: 1.00, billCode: "V", description: "* (.DV000001) Program Merge" },
        { time: "11:13:47 PM", type: "f", hours: 0.58, billCode: "M", description: "* Misc. Time" },
        { time: "11:48:18 PM", type: "f", hours: 7.43, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "G", description: "Give/Get Co-Worker Help", hours: 3.27 },
                { key: "M", description: "Misc. Time", hours: 4.73 },
                { key: "U", description: "Inhouse Development", hours: 0.21 },
                { key: "V", description: "Development Time", hours: 3.39 }
            ],
            total: 11.60
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 11.60 }
            ],
            total: 11.60
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-4-6",
    clockPunches: [
        { time: "07:14:05 AM", type: "f", hours: 0.08, billCode: "M", description: "* Misc. Time" },
        { time: "07:19:02 AM", type: "f", hours: 0.87, billCode: "D", description: "* Done Working" },
        { time: "08:11:15 AM", type: "f", hours: 0.38, billCode: "M", description: "* Misc. Time" },
        { time: "08:33:59 AM", type: "f", hours: 0.44, billCode: "D", description: "* Done Working" },
        { time: "09:00:07 AM", type: "f", hours: 0.16, billCode: "M", description: "* Misc. Time" },
        { time: "09:09:48 AM", type: "f", hours: 7.75, billCode: "P", description: ".968307 *IP* (PRODAS0) Programming in April" },
        { time: "04:54:32 PM", type: "f", hours: 0.20, billCode: "V", description: "* (.DV040000) Global Add-ons" },
        { time: "05:06:31 PM", type: "f", hours: 4.90, billCode: "D", description: "* Done Working" },
        { time: "10:00:33 PM", type: "f", hours: 0.39, billCode: "M", description: "* Misc. Time" },
        { time: "10:23:51 PM", type: "f", hours: 7.27, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "M", description: "Misc. Time", hours: 1.01 },
                { key: "P", description: "Custom Programming", hours: 7.75 },
                { key: "V", description: "Development Time", hours: 0.20 }
            ],
            total: 8.96
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 8.96 }
            ],
            total: 8.96
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-4-7",
    clockPunches: [
        { time: "05:40:15 AM", type: "f", hours: 1.67, billCode: "M", description: "* Misc. Time" },
        { time: "07:20:37 AM", type: "f", hours: 0.22, billCode: "M", description: "* Misc. Time" },
        { time: "07:33:38 AM", type: "f", hours: 0.93, billCode: "D", description: "* Done Working" },
        { time: "08:29:21 AM", type: "f", hours: 0.05, billCode: "YF", description: ".967457 *IP* (EMYLL 0) Centralized server control system." },
        { time: "08:32:14 AM", type: "f", hours: 0.47, billCode: "D", description: "* Done Working" },
        { time: "09:00:12 AM", type: "f", hours: 0.73, billCode: "M", description: "* Misc. Time" },
        { time: "09:43:58 AM", type: "f", hours: 0.14, billCode: "V", description: "* (.DV040000) Global Add-ons" },
        { time: "09:52:06 AM", type: "f", hours: 1.37, billCode: "M", description: "* Misc. Time" },
        { time: "11:13:32 AM", type: "p", hours: 0.01, billCode: "G", description: "* (KREROM0) ROBERT M KREIDER" },
        { time: "11:14:22 AM", type: "p", hours: 1.28, billCode: "G", description: "* (KREROM0) ROBERT M KREIDER" },
        { time: "12:31:53 PM", type: "f", hours: 0.38, billCode: "D", description: "* Done Working" },
        { time: "12:54:33 PM", type: "f", hours: 0.12, billCode: "F", description: "* Food/Fellowship" },
        { time: "01:01:35 PM", type: "f", hours: 1.33, billCode: "M", description: "* Misc. Time" },
        { time: "01:02:03 PM", type: "p", hours: 1.76, billCode: "YF", description: ".967457 *IP* (EMYLL 0) Centralized server control system." },
        { time: "02:48:25 PM", type: "p", hours: 0.02, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "02:50:01 PM", type: "p", hours: 2.96, billCode: "N", description: ".967897 " },
        { time: "07:05:43 PM", type: "f", hours: 0.88, billCode: "D", description: "* Done Working" },
        { time: "07:58:26 PM", type: "f", hours: 0.70, billCode: "P", description: ".968307 *IP* (PRODAS0) Programming in April" },
        { time: "08:40:11 PM", type: "f", hours: 0.21, billCode: "M", description: "* Misc. Time" },
        { time: "08:52:49 PM", type: "f", hours: 12.27, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.12 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 1.31 },
                { key: "M", description: "Misc. Time", hours: 5.53 },
                { key: "N", description: "Billable Time", hours: 2.96 },
                { key: "P", description: "Custom Programming", hours: 0.70 },
                { key: "V", description: "Development Time", hours: 0.14 },
                { key: "YF", description: "Programming/Tooling", hours: 1.81 }
            ],
            total: 12.57
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 10.76 },
                { key: "Y", description: "Bill Code Group Total", hours: 1.81 }
            ],
            total: 12.57
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-4-8",
    clockPunches: [
        { time: "09:08:55 AM", type: "f", hours: 1.55, billCode: "M", description: "* Misc. Time" },
        { time: "09:33:01 AM", type: "p", hours: 0.60, billCode: "V", description: "* (.DV910000) Meetings/Conf Calls" },
        { time: "10:24:30 AM", type: "p", hours: 0.16, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "10:39:05 AM", type: "p", hours: 0.76, billCode: "N", description: ".968374 *WC* (CHRLIP0) " },
        { time: "12:12:34 PM", type: "f", hours: 0.74, billCode: "F", description: "* Food/Fellowship" },
        { time: "12:56:55 PM", type: "f", hours: 0.98, billCode: "G", description: "* Give/Get Co-Worker Help" },
        { time: "01:16:59 PM", type: "p", hours: 2.12, billCode: "V", description: "* (.DV910000) Meetings/Conf Calls" },
        { time: "04:02:13 PM", type: "p", hours: 0.03, billCode: "M", description: "* Misc. Time" },
        { time: "04:04:20 PM", type: "f", hours: 0.13, billCode: "M", description: "* Misc. Time" },
        { time: "04:12:18 PM", type: "f", hours: 64.50, billCode: "D", description: "* Done Working" }


    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.74 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 1.14 },
                { key: "M", description: "Misc. Time", hours: 1.71 },
                { key: "N", description: "Billable Time", hours: 0.76 },
                { key: "V", description: "Development Time", hours: 2.72 }
            ],
            total: 7.07
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 7.07 }
            ],
            total: 7.07
        }
    }
}
];
var grandTotals = {
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.86 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 5.72 },
                { key: "M", description: "Misc. Time", hours: 17.88 },
                { key: "N", description: "Billable Time", hours: 3.72 },
                { key: "P", description: "Custom Programming", hours: 8.82 },
                { key: "U", description: "Inhouse Development", hours: 4.00 },
                { key: "V", description: "Development Time", hours: 6.45 },
                { key: "YF", description: "Programming/Tooling", hours: 6.50 }
            ],
            total: 53.95
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 47.45 },
                { key: "Y", description: "Bill Code Group Total", hours: 6.50 }
            ],
            total: 53.95
        }
    }
}

