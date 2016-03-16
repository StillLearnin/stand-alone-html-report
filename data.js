var days = [
{
    employee: "Melvin Ray Herr",
    day: "2016-3-14",
    clockPunches: [
        { time: "07:50:38 AM", type: "f", hours: 0.41, billCode: "M", description: "* Misc. Time" },
        { time: "08:15:08 AM", type: "f", hours: 0.68, billCode: "V", description: "* (.DV010000) Global Input" },
        { time: "08:55:48 AM", type: "f", hours: 0.01, billCode: "M", description: "* Misc. Time" },
        { time: "08:56:29 AM", type: "f", hours: 0.92, billCode: "D", description: "* Done Working" },
        { time: "09:51:46 AM", type: "f", hours: 0.10, billCode: "V", description: "* (.DV342008) MW Genius Interface" },
        { time: "09:57:38 AM", type: "f", hours: 0.76, billCode: "D", description: "* Done Working" },
        { time: "10:43:05 AM", type: "f", hours: 0.56, billCode: "M", description: "* Misc. Time" },
        { time: "11:16:47 AM", type: "f", hours: 0.72, billCode: "V", description: "* (.DV010000) Global Input" },
        { time: "12:00:02 PM", type: "f", hours: 2.21, billCode: "V", description: "* (.DV342008) MW Genius Interface" },
        { time: "01:10:36 PM", type: "p", hours: 0.15, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "02:21:32 PM", type: "f", hours: 0.63, billCode: "M", description: "* Misc. Time" },
        { time: "02:59:16 PM", type: "f", hours: 2.05, billCode: "V", description: "* (.DV342008) MW Genius Interface" },
        { time: "03:31:22 PM", type: "p", hours: 0.01, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "03:31:42 PM", type: "p", hours: 0.10, billCode: "M", description: "* Misc. Time" },
        { time: "03:41:38 PM", type: "p", hours: 0.04, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "05:03:41 PM", type: "p", hours: 0.82, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "05:59:57 PM", type: "f", hours: 0.93, billCode: "M", description: "* Misc. Time" },
        { time: "06:55:36 PM", type: "f", hours: 0.59, billCode: "V", description: "* (.DV342008) MW Genius Interface" },
        { time: "07:30:59 PM", type: "f", hours: 14.13, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.97 },
                { key: "M", description: "Misc. Time", hours: 2.64 },
                { key: "V", description: "Development Time", hours: 6.40 }
            ],
            total: 10.01
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 10.01 }
            ],
            total: 10.01
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-3-15",
    clockPunches: [
        { time: "09:38:38 AM", type: "f", hours: 0.12, billCode: "M", description: "* Misc. Time" },
        { time: "09:45:59 AM", type: "f", hours: 0.10, billCode: "V", description: "* (.DV342008) MW Genius Interface" },
        { time: "09:52:00 AM", type: "f", hours: 0.09, billCode: "M", description: "* Misc. Time" },
        { time: "09:56:47 AM", type: "p", hours: 0.23, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "10:11:19 AM", type: "f", hours: 1.55, billCode: "V", description: "* (.DV342008) MW Genius Interface" },
        { time: "11:44:02 AM", type: "f", hours: 0.10, billCode: "M", description: "* Misc. Time" },
        { time: "11:50:11 AM", type: "f", hours: 0.46, billCode: "D", description: "* Done Working" },
        { time: "12:17:33 PM", type: "f", hours: 0.62, billCode: "V", description: "* (.DV342008) MW Genius Interface" },
        { time: "12:54:34 PM", type: "f", hours: 0.33, billCode: "U", description: ".967140 *IP* (ABC) Upgrade to Version 15" },
        { time: "01:14:21 PM", type: "f", hours: 0.13, billCode: "V", description: "* (.DV724000) Client 4 Fixes" },
        { time: "01:21:57 PM", type: "f", hours: 0.60, billCode: "M", description: "* Misc. Time" },
        { time: "01:55:51 PM", type: "p", hours: 0.29, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "02:15:07 PM", type: "f", hours: 0.07, billCode: "G", description: "* (TK) Timothy Kreider" },
        { time: "02:19:04 PM", type: "f", hours: 0.10, billCode: "M", description: "* Misc. Time" },
        { time: "02:24:52 PM", type: "p", hours: 0.19, billCode: "G", description: "* (TK) Timothy Kreider" },
        { time: "02:36:06 PM", type: "f", hours: 0.42, billCode: "G", description: "* (MN) Mahlon Neuenschwander" },
        { time: "03:01:21 PM", type: "f", hours: 0.02, billCode: "M", description: "* Misc. Time" },
        { time: "03:02:40 PM", type: "f", hours: 0.59, billCode: "V", description: "* (.DV342000) Credit Card Fixes" },
        { time: "03:22:58 PM", type: "p", hours: 0.53, billCode: "G", description: "* (NK) Norman King" },
        { time: "04:01:40 PM", type: "p", hours: 0.00, billCode: "M", description: "* (MN) Mahlon Neuenschwander" },
        { time: "04:01:51 PM", type: "p", hours: 0.94, billCode: "V", description: "* (.DV342000) Credit Card Fixes" },
        { time: "05:02:04 PM", type: "p", hours: 0.03, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "05:07:33 PM", type: "f", hours: 0.63, billCode: "M", description: "* Misc. Time" },
        { time: "05:45:34 PM", type: "f", hours: 5.76, billCode: "D", description: "* Done Working" },
        { time: "11:31:04 PM", type: "f", hours: 0.40, billCode: "M", description: "* Misc. Time" },
        { time: "11:54:52 PM", type: "f", hours: 9.19, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "G", description: "Give/Get Co-Worker Help", hours: 1.76 },
                { key: "M", description: "Misc. Time", hours: 2.06 },
                { key: "U", description: "Inhouse Development", hours: 0.33 },
                { key: "V", description: "Development Time", hours: 3.93 }
            ],
            total: 8.08
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 8.08 }
            ],
            total: 8.08
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-3-16",
    clockPunches: [
        { time: "08:58:42 AM", type: "p", hours: 0.23, billCode: "G", description: "* (TK) Timothy Kreider" },
        { time: "09:19:53 AM", type: "f", hours: 0.58, billCode: "M", description: "* Misc. Time" },
        { time: "09:44:46 AM", type: "p", hours: 0.71, billCode: "G", description: "* (TK) Timothy Kreider" },
        { time: "10:28:58 AM", type: "p", hours: 0.48, billCode: "V", description: "* (.DV342000) Credit Card Fixes" },
        { time: "10:59:33 AM", type: "p", hours: 0.34, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "11:26:02 AM", type: "f", hours: 0.95, billCode: "V", description: "* (.DV610000) Utilities / Input Fixes" },
        { time: "12:22:56 PM", type: "f", hours: 0.82, billCode: "F", description: "* Food/Fellowship" },
        { time: "01:12:05 PM", type: "f", hours: 0.08, billCode: "V", description: "* (.DV610000) Utilities / Input Fixes" },
        { time: "01:17:02 PM", type: "f", hours: 2.87, billCode: "V", description: "* (.DV342000) Credit Card Fixes" },
        { time: "02:59:44 PM", type: "p", hours: 0.05, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "03:23:29 PM", type: "p", hours: 0.06, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "04:15:56 PM", type: "f", hours: 0.07, billCode: "M", description: "* Misc. Time" },
        { time: "04:17:41 PM", type: "p", hours: 0.13, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "04:27:49 PM", type: "f", hours: 0.00, billCode: "D", description: "* Done Working" }


    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.82 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 1.52 },
                { key: "M", description: "Misc. Time", hours: 0.65 },
                { key: "V", description: "Development Time", hours: 4.38 }
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
];
var grandTotals = {
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.82 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 4.25 },
                { key: "M", description: "Misc. Time", hours: 5.35 },
                { key: "U", description: "Inhouse Development", hours: 0.33 },
                { key: "V", description: "Development Time", hours: 14.71 }
            ],
            total: 25.46
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 25.46 }
            ],
            total: 25.46
        }
    }
}
