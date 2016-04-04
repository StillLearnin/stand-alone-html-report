var days = [
{
    employee: "Melvin Ray Herr",
    day: "2016-3-28",
    clockPunches: [
        { time: "09:09:20 AM", type: "f", hours: 0.28, billCode: "M", description: "* Misc. Time" },
        { time: "09:26:14 AM", type: "f", hours: 0.70, billCode: "P", description: ".968307 *IP* (PRODAS0) Programming in April" },
        { time: "10:08:16 AM", type: "f", hours: 0.19, billCode: "M", description: "* Misc. Time" },
        { time: "10:19:38 AM", type: "f", hours: 4.82, billCode: "P", description: ".968307 *IP* (PRODAS0) Programming in April" },
        { time: "03:08:31 PM", type: "f", hours: 0.05, billCode: "M", description: "* Misc. Time" },
        { time: "03:11:31 PM", type: "f", hours: 3.98, billCode: "D", description: "* Done Working" },
        { time: "07:10:11 PM", type: "f", hours: 0.16, billCode: "M", description: "* Misc. Time" },
        { time: "07:20:01 PM", type: "f", hours: 13.46, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "M", description: "Misc. Time", hours: 0.68 },
                { key: "P", description: "Custom Programming", hours: 5.52 }
            ],
            total: 6.20
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 6.20 }
            ],
            total: 6.20
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-3-29",
    clockPunches: [
        { time: "08:47:44 AM", type: "f", hours: 0.83, billCode: "M", description: "* Misc. Time" },
        { time: "08:57:13 AM", type: "p", hours: 1.58, billCode: "P", description: ".968245 *IP* (ZEIEQ 0) " },
        { time: "11:06:43 AM", type: "p", hours: 0.48, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "11:40:53 AM", type: "f", hours: 0.73, billCode: "V", description: "* (.DV342000) Credit Card Fixes" },
        { time: "12:24:41 PM", type: "f", hours: 0.80, billCode: "F", description: "* Food/Fellowship" },
        { time: "01:12:51 PM", type: "f", hours: 0.69, billCode: "V", description: "* (.DV342000) Credit Card Fixes" },
        { time: "01:54:25 PM", type: "f", hours: 0.40, billCode: "M", description: "* Misc. Time" },
        { time: "02:18:38 PM", type: "f", hours: 1.95, billCode: "U", description: ".967140 *IP* (ABC) Upgrade to Version 15" },
        { time: "04:06:58 PM", type: "p", hours: 0.04, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "04:09:47 PM", type: "p", hours: 0.02, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "04:19:08 PM", type: "f", hours: 0.30, billCode: "V", description: "* (.DV610000) Utilities / Input Fixes" },
        { time: "04:37:22 PM", type: "f", hours: 1.17, billCode: "D", description: "* Done Working" },
        { time: "05:47:40 PM", type: "f", hours: 0.32, billCode: "V", description: "* (.DV610000) Utilities / Input Fixes" },
        { time: "06:06:41 PM", type: "f", hours: 0.31, billCode: "U", description: ".967140 *IP* (ABC) Upgrade to Version 15" },
        { time: "06:25:07 PM", type: "f", hours: 2.24, billCode: "D", description: "* Done Working" },
        { time: "08:39:45 PM", type: "f", hours: 0.53, billCode: "U", description: ".967140 *IP* (ABC) Upgrade to Version 15" },
        { time: "09:11:24 PM", type: "f", hours: 0.26, billCode: "D", description: "* Done Working" },
        { time: "09:26:58 PM", type: "f", hours: 1.39, billCode: "M", description: "* Misc. Time" },
        { time: "10:50:04 PM", type: "f", hours: 0.20, billCode: "P", description: ".968307 *IP* (PRODAS0) Programming in April" },
        { time: "11:01:46 PM", type: "f", hours: 0.24, billCode: "M", description: "* Misc. Time" },
        { time: "11:15:58 PM", type: "f", hours: 0.65, billCode: "V", description: "* (.DV130000) Inventory Reports Fixes" },
        { time: "11:55:00 PM", type: "f", hours: 0.84, billCode: "M", description: "* Misc. Time" }
    ],
    missingEndOfDayPunch: true,
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.80 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.54 },
                { key: "M", description: "Misc. Time", hours: 3.70 },
                { key: "P", description: "Custom Programming", hours: 1.78 },
                { key: "U", description: "Inhouse Development", hours: 2.79 },
                { key: "V", description: "Development Time", hours: 2.69 }
            ],
            total: 12.30
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 12.30 }
            ],
            total: 12.30
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-3-30",
    clockPunches: [
        { time: "00:45:15 AM", type: "f", hours: 9.18, billCode: "D", description: "* Done Working" },
        { time: "09:55:49 AM", type: "f", hours: 0.13, billCode: "M", description: "* Misc. Time" },
        { time: "10:03:47 AM", type: "f", hours: 0.07, billCode: "V", description: "* (.DV010000) Global Input" },
        { time: "10:07:58 AM", type: "f", hours: 1.93, billCode: "P", description: ".968307 *IP* (PRODAS0) Programming in April" },
        { time: "12:03:27 PM", type: "f", hours: 0.26, billCode: "M", description: "* Misc. Time" },
        { time: "12:19:07 PM", type: "f", hours: 0.28, billCode: "P", description: ".968307 *IP* (PRODAS0) Programming in April" },
        { time: "12:35:46 PM", type: "f", hours: 0.12, billCode: "V", description: "* (.DV724000) Client 4 Fixes" },
        { time: "12:42:55 PM", type: "f", hours: 0.33, billCode: "D", description: "* Done Working" },
        { time: "01:02:25 PM", type: "f", hours: 0.08, billCode: "M", description: "* Misc. Time" },
        { time: "01:06:53 PM", type: "f", hours: 3.57, billCode: "P", description: ".968307 *IP* (PRODAS0) Programming in April" },
        { time: "04:40:53 PM", type: "f", hours: 0.05, billCode: "M", description: "* Misc. Time" },
        { time: "04:44:06 PM", type: "f", hours: 5.16, billCode: "D", description: "* Done Working" },
        { time: "09:53:37 PM", type: "f", hours: 1.18, billCode: "M", description: "* Misc. Time" },
        { time: "11:04:31 PM", type: "f", hours: 9.71, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "M", description: "Misc. Time", hours: 1.70 },
                { key: "P", description: "Custom Programming", hours: 5.78 },
                { key: "V", description: "Development Time", hours: 0.19 }
            ],
            total: 7.67
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 7.67 }
            ],
            total: 7.67
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-3-31",
    clockPunches: [
        { time: "08:47:10 AM", type: "f", hours: 1.90, billCode: "M", description: "* Misc. Time" },
        { time: "08:59:01 AM", type: "p", hours: 0.00, billCode: "M", description: "* Misc. Time" },
        { time: "09:09:43 AM", type: "p", hours: 0.13, billCode: "V", description: "* (.DV724000) Client 4 Fixes" },
        { time: "10:49:16 AM", type: "f", hours: 0.47, billCode: "V", description: "* (.DV724000) Client 4 Fixes" },
        { time: "10:59:38 AM", type: "p", hours: 0.72, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "12:00:25 PM", type: "f", hours: 0.24, billCode: "M", description: "* Misc. Time" },
        { time: "12:14:41 PM", type: "f", hours: 0.33, billCode: "D", description: "* Done Working" },
        { time: "12:34:39 PM", type: "f", hours: 0.43, billCode: "F", description: "* Food/Fellowship" },
        { time: "01:00:18 PM", type: "f", hours: 0.83, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "01:50:03 PM", type: "f", hours: 0.39, billCode: "M", description: "* Misc. Time" },
        { time: "02:13:19 PM", type: "f", hours: 1.03, billCode: "YF", description: ".968339 " },
        { time: "03:15:01 PM", type: "f", hours: 2.39, billCode: "M", description: "* Misc. Time" },
        { time: "04:38:49 PM", type: "p", hours: 0.10, billCode: "D", description: "* (AW) Anthony Witmer" },
        { time: "05:44:01 PM", type: "f", hours: -9.23, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.43 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 1.55 },
                { key: "M", description: "Misc. Time", hours: 4.92 },
                { key: "V", description: "Development Time", hours: 0.60 },
                { key: "YF", description: "Programming/Tooling", hours: 1.03 }
            ],
            total: 8.53
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 7.50 },
                { key: "Y", description: "Bill Code Group Total", hours: 1.03 }
            ],
            total: 8.53
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-4-1",
    clockPunches: [
        { time: "08:30:15 AM", type: "f", hours: 2.76, billCode: "M", description: "* Misc. Time" },
        { time: "10:44:09 AM", type: "p", hours: 0.02, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "10:45:15 AM", type: "p", hours: 0.00, billCode: "M", description: "* (MN) Mahlon Neuenschwander" },
        { time: "10:47:20 AM", type: "p", hours: 0.98, billCode: "YF", description: ".968339 " },
        { time: "11:52:38 AM", type: "p", hours: 0.16, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "12:25:44 PM", type: "f", hours: 1.15, billCode: "F", description: "* Food/Fellowship" },
        { time: "01:34:45 PM", type: "f", hours: 0.03, billCode: "M", description: "* Misc. Time" },
        { time: "01:36:27 PM", type: "f", hours: 0.30, billCode: "V", description: "* (.DV000001) Program Merge" },
        { time: "01:37:04 PM", type: "p", hours: 0.07, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "01:55:38 PM", type: "p", hours: 0.01, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "01:56:23 PM", type: "p", hours: 0.11, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "02:04:48 PM", type: "p", hours: 0.29, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "02:22:40 PM", type: "f", hours: 1.01, billCode: "M", description: "* Misc. Time" },
        { time: "03:22:59 PM", type: "f", hours: 0.36, billCode: "V", description: "* (.DV000001) Program Merge" },
        { time: "03:44:21 PM", type: "f", hours: 0.76, billCode: "M", description: "* Misc. Time" },
        { time: "04:30:05 PM", type: "f", hours: 64.55, billCode: "D", description: "* Done Working" }


    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 1.15 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.66 },
                { key: "M", description: "Misc. Time", hours: 4.56 },
                { key: "V", description: "Development Time", hours: 0.66 },
                { key: "YF", description: "Programming/Tooling", hours: 0.98 }
            ],
            total: 8.01
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 7.03 },
                { key: "Y", description: "Bill Code Group Total", hours: 0.98 }
            ],
            total: 8.01
        }
    }
}
];
var grandTotals = {
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 2.38 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 2.75 },
                { key: "M", description: "Misc. Time", hours: 15.56 },
                { key: "P", description: "Custom Programming", hours: 13.08 },
                { key: "U", description: "Inhouse Development", hours: 2.79 },
                { key: "V", description: "Development Time", hours: 4.14 },
                { key: "YF", description: "Programming/Tooling", hours: 2.01 }
            ],
            total: 42.71
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 40.70 },
                { key: "Y", description: "Bill Code Group Total", hours: 2.01 }
            ],
            total: 42.71
        }
    }
}

