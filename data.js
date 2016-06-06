var days = [
{
    employee: "Melvin Ray Herr",
    day: "2016-5-30",
    clockPunches: [
        { time: "06:16:48 AM", type: "f", hours: 0.23, billCode: "M", description: "* Misc. Time" },
        { time: "06:30:15 AM", type: "f", hours: 6.05, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "08:09:06 AM", type: "p", hours: 0.00, billCode: "M", description: "* Misc. Time" },
        { time: "09:35:16 AM", type: "p", hours: 0.00, billCode: "M", description: "* Misc. Time" },
        { time: "12:33:09 PM", type: "f", hours: 0.53, billCode: "M", description: "* Misc. Time" },
        { time: "01:04:46 PM", type: "f", hours: 3.27, billCode: "P", description: ".967457 *IP* (EMYLL 0) Centralized server control system." },
        { time: "04:20:55 PM", type: "f", hours: 0.16, billCode: "M", description: "* Misc. Time" },
        { time: "04:30:19 PM", type: "f", hours: 16.29, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "M", description: "Misc. Time", hours: 0.92 },
                { key: "P", description: "Custom Programming", hours: 3.27 },
                { key: "V", description: "Development Time", hours: 6.05 }
            ],
            total: 10.24
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 10.24 }
            ],
            total: 10.24
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-5-31",
    clockPunches: [
        { time: "08:47:43 AM", type: "f", hours: 0.45, billCode: "M", description: "* Misc. Time" },
        { time: "09:14:31 AM", type: "f", hours: 0.27, billCode: "P", description: ".968481 *IP* (PRODAS0) Programming in June." },
        { time: "09:30:44 AM", type: "f", hours: 1.45, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "10:57:40 AM", type: "f", hours: 0.21, billCode: "M", description: "* Misc. Time" },
        { time: "11:10:16 AM", type: "f", hours: 5.21, billCode: "P", description: ".968481 *IP* (PRODAS0) Programming in June." },
        { time: "04:22:57 PM", type: "f", hours: 0.86, billCode: "M", description: "* Misc. Time" },
        { time: "05:13:26 PM", type: "p", hours: 0.05, billCode: "G", description: "* (SB) Shawn Beachy" },
        { time: "05:17:21 PM", type: "f", hours: -8.57, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.05 },
                { key: "M", description: "Misc. Time", hours: 1.52 },
                { key: "P", description: "Custom Programming", hours: 5.48 },
                { key: "V", description: "Development Time", hours: 1.45 }
            ],
            total: 8.50
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 8.50 }
            ],
            total: 8.50
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-6-1",
    clockPunches: [
        { time: "08:43:24 AM", type: "f", hours: 0.05, billCode: "M", description: "* Misc. Time" },
        { time: "08:46:03 AM", type: "f", hours: 0.50, billCode: "P", description: ".968481 *IP* (PRODAS0) Programming in June." },
        { time: "09:15:43 AM", type: "f", hours: 0.23, billCode: "D", description: "* Done Working" },
        { time: "09:29:14 AM", type: "f", hours: 1.13, billCode: "P", description: ".968481 *IP* (PRODAS0) Programming in June." },
        { time: "10:36:57 AM", type: "f", hours: 0.11, billCode: "M", description: "* Misc. Time" },
        { time: "10:43:37 AM", type: "f", hours: 0.88, billCode: "D", description: "* Done Working" },
        { time: "11:36:26 AM", type: "f", hours: 0.14, billCode: "M", description: "* Misc. Time" },
        { time: "11:45:00 AM", type: "f", hours: 4.74, billCode: "P", description: ".968481 *IP* (PRODAS0) Programming in June." },
        { time: "04:29:18 PM", type: "f", hours: 0.10, billCode: "M", description: "* Misc. Time" },
        { time: "04:35:04 PM", type: "f", hours: 41.16, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "M", description: "Misc. Time", hours: 0.40 },
                { key: "P", description: "Custom Programming", hours: 6.37 }
            ],
            total: 6.77
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 6.77 }
            ],
            total: 6.77
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-6-3",
    clockPunches: [
        { time: "09:44:48 AM", type: "f", hours: 0.60, billCode: "M", description: "* Misc. Time" },
        { time: "09:52:49 AM", type: "p", hours: 0.51, billCode: "G", description: "* (KREROM0) ROBERT M KREIDER" },
        { time: "10:32:46 AM", type: "p", hours: 0.53, billCode: "G", description: "* (NK) Norman King" },
        { time: "11:06:51 AM", type: "p", hours: 0.14, billCode: "N", description: ".968509 Help with W_UT_CHANGE report to update customer print codes." },
        { time: "11:30:48 AM", type: "f", hours: 0.39, billCode: "V", description: "* (.DV724000) Client 4 Fixes" },
        { time: "11:54:02 AM", type: "f", hours: 0.21, billCode: "M", description: "* Misc. Time" },
        { time: "12:02:59 PM", type: "p", hours: 0.44, billCode: "N", description: ".968510 Upgrade client to newer version to make F11 work reliably." },
        { time: "12:33:08 PM", type: "f", hours: 0.67, billCode: "F", description: "* Food/Fellowship" },
        { time: "01:13:18 PM", type: "f", hours: 0.85, billCode: "M", description: "* Misc. Time" },
        { time: "01:20:52 PM", type: "p", hours: 2.91, billCode: "V", description: "* (.DV910000) Meetings/Conf Calls" },
        { time: "04:51:35 PM", type: "p", hours: 0.00, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "04:51:46 PM", type: "p", hours: 0.08, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "05:03:10 PM", type: "f", hours: 26.03, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.67 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 1.04 },
                { key: "M", description: "Misc. Time", hours: 1.66 },
                { key: "N", description: "Billable Time", hours: 0.58 },
                { key: "V", description: "Development Time", hours: 3.38 }
            ],
            total: 7.33
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 7.33 }
            ],
            total: 7.33
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-6-4",
    clockPunches: [
        { time: "07:04:39 PM", type: "f", hours: 0.06, billCode: "M", description: "* Misc. Time" },
        { time: "07:08:02 PM", type: "f", hours: 38.03, billCode: "D", description: "* Done Working" }


    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "M", description: "Misc. Time", hours: 0.06 }
            ],
            total: 0.06
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 0.06 }
            ],
            total: 0.06
        }
    }
}
];
var grandTotals = {
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.67 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 1.09 },
                { key: "M", description: "Misc. Time", hours: 4.56 },
                { key: "N", description: "Billable Time", hours: 0.58 },
                { key: "P", description: "Custom Programming", hours: 15.12 },
                { key: "V", description: "Development Time", hours: 10.88 }
            ],
            total: 32.90
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 32.90 }
            ],
            total: 32.90
        }
    }
}
