var days = [
{
    employee: "Melvin Ray Herr",
    day: "2016-7-4",
    clockPunches: [
        { time: "10:32:32 AM", type: "f", hours: 0.21, billCode: "M", description: "* Misc. Time" },
        { time: "10:45:00 AM", type: "f", hours: 22.75, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "M", description: "Misc. Time", hours: 0.21 }
            ],
            total: 0.21
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 0.21 }
            ],
            total: 0.21
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-7-5",
    clockPunches: [
        { time: "09:30:00 AM", type: "f", hours: 1.26, billCode: "M", description: "* Misc. Time" },
        { time: "09:32:15 AM", type: "p", hours: 1.82, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "12:34:48 PM", type: "f", hours: 0.32, billCode: "D", description: "* Done Working" },
        { time: "12:53:39 PM", type: "f", hours: 0.60, billCode: "F", description: "* Food/Fellowship" },
        { time: "01:29:32 PM", type: "f", hours: 0.64, billCode: "G", description: "* Give/Get Co-Worker Help" },
        { time: "02:08:00 PM", type: "p", hours: 0.00, billCode: "M", description: "* Misc. Time" },
        { time: "02:08:15 PM", type: "f", hours: 0.55, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "02:17:28 PM", type: "p", hours: 0.12, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "02:29:36 PM", type: "p", hours: 0.34, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "03:00:21 PM", type: "p", hours: 1.02, billCode: "N", description: ".968570 Training on ABC server management and user setup." },
        { time: "04:10:12 PM", type: "f", hours: 0.11, billCode: "M", description: "* Misc. Time" },
        { time: "04:17:00 PM", type: "f", hours: 0.29, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "04:24:31 PM", type: "p", hours: 0.24, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "04:48:50 PM", type: "f", hours: 0.10, billCode: "M", description: "* Misc. Time" },
        { time: "04:54:40 PM", type: "f", hours: 18.59, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.60 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.64 },
                { key: "M", description: "Misc. Time", hours: 1.47 },
                { key: "N", description: "Billable Time", hours: 1.02 },
                { key: "V", description: "Development Time", hours: 3.36 }
            ],
            total: 7.09
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 7.09 }
            ],
            total: 7.09
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-7-6",
    clockPunches: [
        { time: "11:30:18 AM", type: "f", hours: 0.34, billCode: "G", description: "* (SB) Shawn Beachy" },
        { time: "11:50:37 AM", type: "f", hours: 0.44, billCode: "M", description: "* Misc. Time" },
        { time: "11:55:31 AM", type: "p", hours: 0.37, billCode: "N", description: ".968606 *IP* (EMYLL 0) Help with syslog file handling and parsing." },
        { time: "12:39:03 PM", type: "f", hours: 2.25, billCode: "F", description: "* Food/Fellowship" },
        { time: "02:53:53 PM", type: "f", hours: 0.05, billCode: "M", description: "* Misc. Time" },
        { time: "02:54:04 PM", type: "p", hours: 0.33, billCode: "N", description: "* (MULLAM0) MULTI-LANGUAGE MEDIA INC" },
        { time: "03:16:48 PM", type: "f", hours: 0.26, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "03:19:32 PM", type: "p", hours: 0.00, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "03:19:40 PM", type: "p", hours: 0.20, billCode: "N", description: ".968609 *WC* (MULLAM0) Change printer configurations from dot matrix to laser. Set up label printers." },
        { time: "03:40:07 PM", type: "p", hours: 0.00, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "03:40:50 PM", type: "p", hours: 0.51, billCode: "N", description: ".968610 Discuss credit card options and set ABC for external processing only." },
        { time: "04:14:53 PM", type: "f", hours: 0.02, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "04:16:08 PM", type: "f", hours: 17.19, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 2.25 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.36 },
                { key: "M", description: "Misc. Time", hours: 0.49 },
                { key: "N", description: "Billable Time", hours: 1.41 },
                { key: "V", description: "Development Time", hours: 0.26 }
            ],
            total: 4.77
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 4.77 }
            ],
            total: 4.77
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-7-7",
    clockPunches: [
        { time: "09:27:27 AM", type: "f", hours: 1.94, billCode: "M", description: "* Misc. Time" },
        { time: "09:46:21 AM", type: "p", hours: 0.28, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "11:40:32 AM", type: "f", hours: 3.82, billCode: "C", description: "* Commission" },
        { time: "03:29:24 PM", type: "f", hours: 0.01, billCode: "M", description: "* Misc. Time" },
        { time: "03:29:49 PM", type: "f", hours: 0.12, billCode: "D", description: "* Done Working" },
        { time: "03:36:50 PM", type: "f", hours: 0.71, billCode: "F", description: "* Food/Fellowship" },
        { time: "04:11:10 PM", type: "p", hours: 0.02, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "04:20:32 PM", type: "f", hours: 0.67, billCode: "M", description: "* Misc. Time" },
        { time: "04:40:03 PM", type: "p", hours: 0.35, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "05:16:47 PM", type: "p", hours: 0.01, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "05:22:18 PM", type: "f", hours: 14.70, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "C", description: "Commission", hours: 3.82 },
                { key: "F", description: "Food/Fellowship", hours: 0.71 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.66 },
                { key: "M", description: "Misc. Time", hours: 2.62 }
            ],
            total: 7.81
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 7.81 }
            ],
            total: 7.81
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-7-8",
    clockPunches: [
        { time: "08:04:21 AM", type: "f", hours: 0.26, billCode: "M", description: "* Misc. Time" },
        { time: "08:19:58 AM", type: "f", hours: 2.62, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "08:55:10 AM", type: "p", hours: 1.00, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "10:00:11 AM", type: "p", hours: 0.00, billCode: "M", description: "* (MH) Melvin Ray Herr" },
        { time: "10:09:39 AM", type: "p", hours: 0.01, billCode: "M", description: "* (MH) Melvin Ray Herr" },
        { time: "11:23:50 AM", type: "p", hours: 0.05, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "12:00:27 PM", type: "p", hours: 0.87, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "12:53:12 PM", type: "f", hours: 0.22, billCode: "F", description: "* Food/Fellowship" },
        { time: "01:06:05 PM", type: "f", hours: 0.08, billCode: "M", description: "* Misc. Time" },
        { time: "01:10:52 PM", type: "f", hours: 0.14, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "01:18:29 PM", type: "p", hours: 0.01, billCode: "V", description: "* (.DV910000) Meetings/Conf Calls" },
        { time: "01:19:11 PM", type: "p", hours: 0.00, billCode: "V", description: "* (.DV910000) Meetings/Conf Calls" },
        { time: "01:19:24 PM", type: "p", hours: 0.00, billCode: "V", description: "* (.DV910000) Meetings/Conf Calls" },
        { time: "01:19:34 PM", type: "p", hours: 2.95, billCode: "V", description: "* (.DV910000) Meetings/Conf Calls" },
        { time: "04:16:45 PM", type: "p", hours: 0.00, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "04:17:21 PM", type: "f", hours: 0.26, billCode: "M", description: "* Misc. Time" },
        { time: "04:30:54 PM", type: "p", hours: 0.00, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "04:33:11 PM", type: "f", hours: 0.30, billCode: "P", description: ".968551 *IP* (EMYLL 0) Unified server control project web app user interface programming." },
        { time: "04:51:10 PM", type: "f", hours: 0.50, billCode: "M", description: "* Misc. Time" },
        { time: "05:21:23 PM", type: "f", hours: 14.99, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.22 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 1.00 },
                { key: "M", description: "Misc. Time", hours: 1.11 },
                { key: "P", description: "Custom Programming", hours: 0.30 },
                { key: "V", description: "Development Time", hours: 6.64 }
            ],
            total: 9.27
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 9.27 }
            ],
            total: 9.27
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-7-9",
    clockPunches: [
        { time: "08:20:53 AM", type: "f", hours: 0.28, billCode: "M", description: "* Misc. Time" },
        { time: "08:37:32 AM", type: "f", hours: 0.39, billCode: "D", description: "* Done Working" },
        { time: "09:00:48 AM", type: "f", hours: 0.41, billCode: "M", description: "* Misc. Time" },
        { time: "09:25:23 AM", type: "f", hours: 47.99, billCode: "D", description: "* Done Working" }


    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "M", description: "Misc. Time", hours: 0.69 }
            ],
            total: 0.69
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 0.69 }
            ],
            total: 0.69
        }
    }
}
];
var grandTotals = {
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "C", description: "Commission", hours: 3.82 },
                { key: "F", description: "Food/Fellowship", hours: 3.78 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 2.66 },
                { key: "M", description: "Misc. Time", hours: 6.59 },
                { key: "N", description: "Billable Time", hours: 2.43 },
                { key: "P", description: "Custom Programming", hours: 0.30 },
                { key: "V", description: "Development Time", hours: 10.26 }
            ],
            total: 29.84
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 29.84 }
            ],
            total: 29.84
        }
    }
}
