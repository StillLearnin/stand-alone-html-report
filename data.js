var days = [
{
    employee: "Melvin Ray Herr",
    day: "2016-3-21",
    clockPunches: [
        { time: "09:51:42 AM", type: "f", hours: 0.22, billCode: "M", description: "* Misc. Time" },
        { time: "10:04:40 AM", type: "f", hours: 0.85, billCode: "D", description: "* Done Working" },
        { time: "10:55:51 AM", type: "f", hours: 1.87, billCode: "P", description: ".968307 *IP* (PRODAS0) Programming in April" },
        { time: "12:47:54 PM", type: "f", hours: 0.82, billCode: "D", description: "* Done Working" },
        { time: "01:37:08 PM", type: "f", hours: 1.90, billCode: "P", description: ".968307 *IP* (PRODAS0) Programming in April" },
        { time: "03:30:59 PM", type: "f", hours: 2.28, billCode: "D", description: "* Done Working" },
        { time: "05:47:37 PM", type: "f", hours: 0.03, billCode: "M", description: "* Misc. Time" },
        { time: "05:49:30 PM", type: "f", hours: 3.83, billCode: "D", description: "* Done Working" },
        { time: "09:39:05 PM", type: "f", hours: 0.31, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "09:57:23 PM", type: "f", hours: 12.00, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "M", description: "Misc. Time", hours: 0.25 },
                { key: "P", description: "Custom Programming", hours: 4.08 }
            ],
            total: 4.33
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 4.33 }
            ],
            total: 4.33
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-3-22",
    clockPunches: [
        { time: "09:57:11 AM", type: "f", hours: 1.35, billCode: "M", description: "* Misc. Time" },
        { time: "11:18:12 AM", type: "f", hours: 0.41, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "11:42:50 AM", type: "f", hours: 0.58, billCode: "M", description: "* Misc. Time" },
        { time: "11:45:20 AM", type: "p", hours: 0.06, billCode: "M", description: "* Misc. Time" },
        { time: "12:21:21 PM", type: "f", hours: 0.08, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "12:26:02 PM", type: "f", hours: 0.09, billCode: "M", description: "* Misc. Time" },
        { time: "12:31:30 PM", type: "f", hours: 1.23, billCode: "F", description: "* Food/Fellowship" },
        { time: "01:45:25 PM", type: "f", hours: 0.12, billCode: "M", description: "* Misc. Time" },
        { time: "01:52:25 PM", type: "f", hours: 0.89, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "02:45:52 PM", type: "f", hours: 0.32, billCode: "D", description: "* Done Working" },
        { time: "03:05:13 PM", type: "f", hours: 0.17, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "03:15:30 PM", type: "f", hours: 0.75, billCode: "D", description: "* Done Working" },
        { time: "04:00:41 PM", type: "f", hours: 0.44, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "04:27:00 PM", type: "f", hours: 1.26, billCode: "D", description: "* Done Working" },
        { time: "05:42:35 PM", type: "f", hours: 0.76, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "06:27:50 PM", type: "f", hours: 2.37, billCode: "D", description: "* Done Working" },
        { time: "08:49:46 PM", type: "f", hours: 0.56, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "09:23:28 PM", type: "f", hours: 0.56, billCode: "D", description: "* Done Working" },
        { time: "09:56:47 PM", type: "f", hours: 2.40, billCode: "M", description: "* Misc. Time" }
    ],
    missingEndOfDayPunch: true,
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 1.23 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.85 },
                { key: "M", description: "Misc. Time", hours: 4.60 },
                { key: "P", description: "Custom Programming", hours: 2.46 }
            ],
            total: 9.14
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 9.14 }
            ],
            total: 9.14
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-3-23",
    clockPunches: [
        { time: "00:20:28 AM", type: "f", hours: 3.62, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "03:57:34 AM", type: "f", hours: 0.20, billCode: "D", description: "* Done Working" },
        { time: "04:09:37 AM", type: "f", hours: 1.56, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "05:43:19 AM", type: "f", hours: 5.05, billCode: "D", description: "* Done Working" },
        { time: "10:46:25 AM", type: "f", hours: 0.25, billCode: "P", description: ".968307 *IP* (PRODAS0) Programming in April" },
        { time: "11:01:30 AM", type: "f", hours: 0.04, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "11:03:59 AM", type: "f", hours: 0.52, billCode: "D", description: "* Done Working" },
        { time: "11:35:04 AM", type: "f", hours: 1.07, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "12:39:13 PM", type: "f", hours: 1.36, billCode: "D", description: "* Done Working" },
        { time: "02:00:44 PM", type: "f", hours: 0.05, billCode: "G", description: "* (SB) Shawn Beachy" },
        { time: "02:03:24 PM", type: "f", hours: 0.06, billCode: "M", description: "* Misc. Time" },
        { time: "02:06:41 PM", type: "f", hours: 0.74, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "02:20:38 PM", type: "p", hours: 0.40, billCode: "G", description: "* (MN) Mahlon Neuenschwander" },
        { time: "03:14:41 PM", type: "f", hours: 0.06, billCode: "D", description: "* Done Working" },
        { time: "03:18:25 PM", type: "f", hours: 2.11, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "05:25:03 PM", type: "f", hours: 0.07, billCode: "D", description: "* Done Working" },
        { time: "05:28:59 PM", type: "f", hours: 0.16, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "05:38:49 PM", type: "f", hours: 19.36, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.45 },
                { key: "M", description: "Misc. Time", hours: 0.06 },
                { key: "P", description: "Custom Programming", hours: 9.55 }
            ],
            total: 10.06
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 10.06 }
            ],
            total: 10.06
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-3-24",
    clockPunches: [
        { time: "01:00:22 PM", type: "f", hours: 0.78, billCode: "F", description: "* Food/Fellowship" },
        { time: "01:46:59 PM", type: "f", hours: 0.06, billCode: "M", description: "* Misc. Time" },
        { time: "01:47:44 PM", type: "p", hours: 0.44, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "02:16:47 PM", type: "f", hours: 0.40, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "02:40:40 PM", type: "f", hours: 0.10, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "02:46:49 PM", type: "f", hours: 0.60, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "03:22:49 PM", type: "f", hours: 0.77, billCode: "D", description: "* Done Working" },
        { time: "04:08:42 PM", type: "f", hours: 0.12, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "04:15:52 PM", type: "f", hours: 0.33, billCode: "D", description: "* Done Working" },
        { time: "04:35:23 PM", type: "f", hours: 0.37, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "04:57:41 PM", type: "f", hours: 0.01, billCode: "D", description: "* Done Working" },
        { time: "04:58:20 PM", type: "f", hours: 1.10, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "06:04:14 PM", type: "f", hours: 1.08, billCode: "D", description: "* Done Working" },
        { time: "07:09:13 PM", type: "f", hours: 0.02, billCode: "P", description: ".967831 *WC* (GREFE 0) " },
        { time: "07:10:08 PM", type: "f", hours: 85.99, billCode: "D", description: "* Done Working" }


    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.78 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.54 },
                { key: "M", description: "Misc. Time", hours: 0.06 },
                { key: "P", description: "Custom Programming", hours: 2.61 }
            ],
            total: 3.99
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 3.99 }
            ],
            total: 3.99
        }
    }
}
];
var grandTotals = {
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 2.01 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 1.84 },
                { key: "M", description: "Misc. Time", hours: 4.97 },
                { key: "P", description: "Custom Programming", hours: 18.70 }
            ],
            total: 27.52
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 27.52 }
            ],
            total: 27.52
        }
    }
}
