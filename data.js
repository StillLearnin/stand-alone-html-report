var days = [
{
    employee: "Melvin Ray Herr",
    day: "2016-5-2",
    clockPunches: [
        { time: "08:11:24 AM", type: "f", hours: 0.31, billCode: "M", description: "* Misc. Time" },
        { time: "08:30:14 AM", type: "f", hours: 24.75, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "M", description: "Misc. Time", hours: 0.31 }
            ],
            total: 0.31
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 0.31 }
            ],
            total: 0.31
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-5-3",
    clockPunches: [
        { time: "09:15:00 AM", type: "f", hours: 0.61, billCode: "M", description: "* Misc. Time" },
        { time: "09:31:01 AM", type: "p", hours: 2.49, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "12:20:22 PM", type: "f", hours: 0.72, billCode: "F", description: "* Food/Fellowship" },
        { time: "01:03:38 PM", type: "f", hours: 3.38, billCode: "M", description: "* Misc. Time" },
        { time: "01:58:18 PM", type: "p", hours: 0.46, billCode: "M", description: "- Conference with Bruce Rhoads of Fulton (no show on" },
        { time: "03:47:57 PM", type: "p", hours: 0.05, billCode: "M", description: "* (MUSPL 0) MUSSELMAN'S PLUMBING" },
        { time: "03:55:24 PM", type: "p", hours: 0.01, billCode: "M", description: "* (MUSPL 0) MUSSELMAN'S PLUMBING" },
        { time: "04:03:22 PM", type: "p", hours: 0.02, billCode: "M", description: "* (MUSPL 0) MUSSELMAN'S PLUMBING" },
        { time: "04:22:38 PM", type: "p", hours: 0.04, billCode: "M", description: "* (COMFOL0) COMPASS FOUNDATION  LLC" },
        { time: "05:01:00 PM", type: "f", hours: 0.53, billCode: "C", description: ".968435 *IP* (HALHY 0) " },
        { time: "05:32:48 PM", type: "f", hours: 0.17, billCode: "M", description: "* Misc. Time" },
        { time: "05:42:59 PM", type: "f", hours: 3.43, billCode: "D", description: "* Done Working" },
        { time: "09:08:28 PM", type: "f", hours: 0.12, billCode: "M", description: "* Misc. Time" },
        { time: "09:15:32 PM", type: "f", hours: 1.38, billCode: "P", description: ".968378 *IP* (PRODAS0) " },
        { time: "10:38:32 PM", type: "f", hours: 0.02, billCode: "M", description: "* Misc. Time" },
        { time: "10:39:23 PM", type: "f", hours: 9.53, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "C", description: "Commission", hours: 0.53 },
                { key: "F", description: "Food/Fellowship", hours: 0.72 },
                { key: "M", description: "Misc. Time", hours: 4.88 },
                { key: "P", description: "Custom Programming", hours: 1.38 },
                { key: "V", description: "Development Time", hours: 2.49 }
            ],
            total: 10.00
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 10.00 }
            ],
            total: 10.00
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-5-4",
    clockPunches: [
        { time: "08:10:52 AM", type: "f", hours: 0.34, billCode: "P", description: ".968378 *IP* (PRODAS0) " },
        { time: "08:30:55 AM", type: "f", hours: 1.72, billCode: "D", description: "* Done Working" },
        { time: "10:13:50 AM", type: "f", hours: 0.28, billCode: "M", description: "* Misc. Time" },
        { time: "10:30:35 AM", type: "f", hours: 0.29, billCode: "P", description: ".968378 *IP* (PRODAS0) " },
        { time: "10:48:03 AM", type: "f", hours: 0.29, billCode: "M", description: "* Misc. Time" },
        { time: "11:05:20 AM", type: "f", hours: 1.74, billCode: "P", description: ".968418 *IP* (PRODAS0) " },
        { time: "12:49:30 PM", type: "f", hours: 0.54, billCode: "P", description: ".968378 *IP* (PRODAS0) " },
        { time: "01:21:56 PM", type: "f", hours: 2.55, billCode: "P", description: ".968418 *IP* (PRODAS0) " },
        { time: "03:54:40 PM", type: "f", hours: 0.35, billCode: "V", description: "* (.DV000001) Program Merge" },
        { time: "04:15:50 PM", type: "f", hours: 1.14, billCode: "M", description: "* Misc. Time" },
        { time: "05:24:23 PM", type: "f", hours: 39.22, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "M", description: "Misc. Time", hours: 1.71 },
                { key: "P", description: "Custom Programming", hours: 5.46 },
                { key: "V", description: "Development Time", hours: 0.35 }
            ],
            total: 7.52
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 7.52 }
            ],
            total: 7.52
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-5-6",
    clockPunches: [
        { time: "08:37:45 AM", type: "f", hours: 1.66, billCode: "M", description: "* Misc. Time" },
        { time: "09:01:22 AM", type: "p", hours: 0.08, billCode: "M", description: "* (TK) Timothy Kreider" },
        { time: "10:06:22 AM", type: "p", hours: 0.03, billCode: "C", description: ".968441 *IP* (EASMEP0) Upgrade to Version 15" },
        { time: "10:23:53 AM", type: "f", hours: 0.13, billCode: "P", description: ".967814 *IP* (ZIMCHS0) " },
        { time: "10:31:44 AM", type: "f", hours: 0.59, billCode: "V", description: "* (.DV724000) Client 4 Fixes" },
        { time: "11:06:49 AM", type: "f", hours: 0.13, billCode: "M", description: "* Misc. Time" },
        { time: "11:14:21 AM", type: "f", hours: 0.17, billCode: "V", description: "* (.DV724000) Client 4 Fixes" },
        { time: "11:16:12 AM", type: "p", hours: 0.16, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "11:33:44 AM", type: "f", hours: 0.57, billCode: "V", description: "* (.DV724000) Client 4 Fixes" },
        { time: "12:06:19 PM", type: "p", hours: 0.51, billCode: "C", description: ".964447 *WC* (KEYAIP0) " },
        { time: "12:38:17 PM", type: "f", hours: 0.60, billCode: "M", description: "* Misc. Time" },
        { time: "01:10:57 PM", type: "p", hours: 0.05, billCode: "C", description: ".964447 *WC* (KEYAIP0) " },
        { time: "01:16:28 PM", type: "p", hours: 1.34, billCode: "V", description: "* (.DV910000) Meetings/Conf Calls" },
        { time: "02:37:00 PM", type: "f", hours: 1.43, billCode: "V", description: "* (.DV910000) Meetings/Conf Calls" },
        { time: "04:03:00 PM", type: "f", hours: 30.01, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "C", description: "Commission", hours: 0.59 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.16 },
                { key: "M", description: "Misc. Time", hours: 2.47 },
                { key: "P", description: "Custom Programming", hours: 0.13 },
                { key: "V", description: "Development Time", hours: 4.10 }
            ],
            total: 7.45
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 7.45 }
            ],
            total: 7.45
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-5-7",
    clockPunches: [
        { time: "10:03:17 PM", type: "f", hours: 0.10, billCode: "M", description: "* Misc. Time" },
        { time: "10:09:22 PM", type: "f", hours: 34.46, billCode: "D", description: "* Done Working" }


    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "M", description: "Misc. Time", hours: 0.10 }
            ],
            total: 0.10
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 0.10 }
            ],
            total: 0.10
        }
    }
}
];
var grandTotals = {
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "C", description: "Commission", hours: 1.12 },
                { key: "F", description: "Food/Fellowship", hours: 0.72 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.16 },
                { key: "M", description: "Misc. Time", hours: 9.47 },
                { key: "P", description: "Custom Programming", hours: 6.97 },
                { key: "V", description: "Development Time", hours: 6.94 }
            ],
            total: 25.38
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 25.38 }
            ],
            total: 25.38
        }
    }
}
