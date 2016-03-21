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
        { time: "04:27:49 PM", type: "f", hours: 0.35, billCode: "M", description: "* Misc. Time" },
        { time: "04:31:51 PM", type: "p", hours: 0.06, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "04:38:46 PM", type: "p", hours: 0.01, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "04:45:22 PM", type: "p", hours: 0.03, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "04:54:19 PM", type: "p", hours: 0.05, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "04:57:13 PM", type: "f", hours: 17.13, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.82 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 1.67 },
                { key: "M", description: "Misc. Time", hours: 1.00 },
                { key: "V", description: "Development Time", hours: 4.38 }
            ],
            total: 7.87
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 7.87 }
            ],
            total: 7.87
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-3-17",
    clockPunches: [
        { time: "10:04:40 AM", type: "f", hours: 0.55, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "10:37:35 AM", type: "f", hours: 2.37, billCode: "D", description: "* Done Working" },
        { time: "12:59:56 PM", type: "f", hours: 0.20, billCode: "M", description: "* Misc. Time" },
        { time: "01:12:02 PM", type: "f", hours: 0.19, billCode: "D", description: "* Done Working" },
        { time: "01:23:38 PM", type: "f", hours: 0.52, billCode: "M", description: "* Misc. Time" },
        { time: "01:54:40 PM", type: "f", hours: 0.81, billCode: "D", description: "* Done Working" },
        { time: "02:43:23 PM", type: "f", hours: 0.86, billCode: "M", description: "* Misc. Time" },
        { time: "03:05:29 PM", type: "p", hours: 0.09, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "03:14:25 PM", type: "p", hours: 0.01, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "03:40:52 PM", type: "f", hours: 1.13, billCode: "G", description: "* (SB) Shawn Beachy" },
        { time: "04:48:20 PM", type: "f", hours: 0.20, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "05:00:00 PM", type: "f", hours: 0.23, billCode: "M", description: "* Misc. Time" },
        { time: "05:00:41 PM", type: "p", hours: 0.03, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "05:03:52 PM", type: "p", hours: 0.19, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "05:18:20 PM", type: "p", hours: 0.05, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "05:29:39 PM", type: "f", hours: 0.30, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "05:47:38 PM", type: "f", hours: 12.94, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "G", description: "Give/Get Co-Worker Help", hours: 2.55 },
                { key: "M", description: "Misc. Time", hours: 1.81 }
            ],
            total: 4.36
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 4.36 }
            ],
            total: 4.36
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-3-18",
    clockPunches: [
        { time: "06:44:12 AM", type: "f", hours: 0.11, billCode: "M", description: "* Misc. Time" },
        { time: "06:50:44 AM", type: "f", hours: 2.75, billCode: "V", description: "* (.DV330000) Sales Reports Fixes" },
        { time: "09:30:44 AM", type: "p", hours: 0.75, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "10:18:26 AM", type: "p", hours: 0.08, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "10:25:26 AM", type: "f", hours: 0.11, billCode: "M", description: "* Misc. Time" },
        { time: "10:28:39 AM", type: "p", hours: 0.23, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "10:45:43 AM", type: "f", hours: 0.34, billCode: "V", description: "* (.DV342000) Credit Card Fixes" },
        { time: "11:06:05 AM", type: "f", hours: 0.10, billCode: "M", description: "* Misc. Time" },
        { time: "11:12:13 AM", type: "f", hours: 0.37, billCode: "V", description: "* (.DV330000) Sales Reports Fixes" },
        { time: "11:16:26 AM", type: "p", hours: 0.00, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "11:27:01 AM", type: "p", hours: 0.04, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "11:36:35 AM", type: "f", hours: 0.23, billCode: "D", description: "* Done Working" },
        { time: "11:50:08 AM", type: "f", hours: 0.35, billCode: "V", description: "* (.DV342008) MW Genius Interface" },
        { time: "12:04:17 PM", type: "p", hours: 0.12, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "12:18:04 PM", type: "f", hours: 0.79, billCode: "F", description: "* Food/Fellowship" },
        { time: "01:05:08 PM", type: "f", hours: 1.04, billCode: "M", description: "* Misc. Time" },
        { time: "01:14:43 PM", type: "p", hours: 2.27, billCode: "V", description: "* (.DV910000) Meetings/Conf Calls" },
        { time: "03:54:47 PM", type: "p", hours: 0.09, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "04:00:00 PM", type: "p", hours: 0.04, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "04:31:04 PM", type: "p", hours: 0.04, billCode: "M", description: "* Misc. Time" },
        { time: "04:33:23 PM", type: "f", hours: 0.56, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "04:50:50 PM", type: "p", hours: 0.05, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "05:09:48 PM", type: "f", hours: 0.30, billCode: "M", description: "* Misc. Time" },
        { time: "05:27:30 PM", type: "f", hours: 0.10, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "05:33:40 PM", type: "f", hours: 22.30, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.79 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.61 },
                { key: "M", description: "Misc. Time", hours: 1.70 },
                { key: "P", description: "Custom Programming", hours: 0.70 },
                { key: "V", description: "Development Time", hours: 6.83 }
            ],
            total: 10.63
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 10.63 }
            ],
            total: 10.63
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-3-19",
    clockPunches: [
        { time: "03:51:32 PM", type: "f", hours: 0.29, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "04:09:05 PM", type: "f", hours: 41.71, billCode: "D", description: "* Done Working" }


    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "P", description: "Custom Programming", hours: 0.29 }
            ],
            total: 0.29
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 0.29 }
            ],
            total: 0.29
        }
    }
}
];
var grandTotals = {
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 1.61 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 7.56 },
                { key: "M", description: "Misc. Time", hours: 9.21 },
                { key: "P", description: "Custom Programming", hours: 0.99 },
                { key: "U", description: "Inhouse Development", hours: 0.33 },
                { key: "V", description: "Development Time", hours: 21.54 }
            ],
            total: 41.24
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 41.24 }
            ],
            total: 41.24
        }
    }
}
