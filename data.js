var days = [
{
    employee: "Melvin Ray Herr",
    day: "2016-5-23",
    clockPunches: [
        { time: "07:29:33 AM", type: "f", hours: 0.17, billCode: "M", description: "* Misc. Time" },
        { time: "07:39:40 AM", type: "f", hours: 11.51, billCode: "D", description: "* Done Working" },
        { time: "07:10:28 PM", type: "f", hours: 0.09, billCode: "M", description: "* Misc. Time" },
        { time: "07:15:47 PM", type: "f", hours: 13.89, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "M", description: "Misc. Time", hours: 0.26 }
            ],
            total: 0.26
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 0.26 }
            ],
            total: 0.26
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-5-24",
    clockPunches: [
        { time: "09:08:50 AM", type: "f", hours: 0.19, billCode: "M", description: "* Misc. Time" },
        { time: "09:12:22 AM", type: "p", hours: 0.28, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "09:31:12 AM", type: "p", hours: 1.24, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "10:45:42 AM", type: "p", hours: 0.01, billCode: "G", description: "* (SB) Shawn Beachy" },
        { time: "10:51:24 AM", type: "f", hours: 0.67, billCode: "C", description: ".968441 *IP* (EASMEP0) Upgrade to Version 15" },
        { time: "11:31:28 AM", type: "f", hours: 0.74, billCode: "M", description: "* Misc. Time" },
        { time: "12:15:59 PM", type: "f", hours: 1.83, billCode: "C", description: ".968441 *IP* (EASMEP0) Upgrade to Version 15" },
        { time: "02:06:00 PM", type: "f", hours: 0.74, billCode: "N", description: ".968480 Configure Dymo label printer and tweak address printing. Help with 4-18 configuration." },
        { time: "02:50:11 PM", type: "f", hours: 0.81, billCode: "C", description: ".968441 *IP* (EASMEP0) Upgrade to Version 15" },
        { time: "03:38:29 PM", type: "f", hours: 0.60, billCode: "M", description: "* Misc. Time" },
        { time: "04:14:21 PM", type: "f", hours: 1.52, billCode: "P", description: ".968481 *IP* (PRODAS0) Programming in June." },
        { time: "05:45:47 PM", type: "f", hours: 0.18, billCode: "M", description: "* Misc. Time" },
        { time: "05:56:42 PM", type: "f", hours: 19.57, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "C", description: "Commission", hours: 3.31 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.29 },
                { key: "M", description: "Misc. Time", hours: 1.71 },
                { key: "N", description: "Billable Time", hours: 0.74 },
                { key: "P", description: "Custom Programming", hours: 1.52 },
                { key: "V", description: "Development Time", hours: 1.24 }
            ],
            total: 8.81
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 8.81 }
            ],
            total: 8.81
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-5-25",
    clockPunches: [
        { time: "01:30:46 PM", type: "f", hours: 0.35, billCode: "M", description: "* Misc. Time" },
        { time: "01:52:00 PM", type: "f", hours: 4.33, billCode: "P", description: ".968481 *IP* (PRODAS0) Programming in June." },
        { time: "06:12:00 PM", type: "f", hours: 0.54, billCode: "M", description: "* Misc. Time" },
        { time: "06:44:16 PM", type: "f", hours: 0.92, billCode: "P", description: ".968481 *IP* (PRODAS0) Programming in June." },
        { time: "07:39:10 PM", type: "f", hours: 1.93, billCode: "V", description: "* (.DV342008) MW Genius Interface" },
        { time: "09:18:51 PM", type: "p", hours: 0.00, billCode: "M", description: "* Misc. Time" },
        { time: "09:35:16 PM", type: "f", hours: 0.08, billCode: "M", description: "* Misc. Time" },
        { time: "09:39:51 PM", type: "f", hours: 1.13, billCode: "V", description: "* (.DV000001) Program Merge" },
        { time: "10:47:22 PM", type: "f", hours: 0.13, billCode: "D", description: "* Done Working" },
        { time: "10:55:00 PM", type: "f", hours: 0.08, billCode: "M", description: "* Misc. Time" },
        { time: "11:00:01 PM", type: "f", hours: 0.47, billCode: "U", description: "* (ABCTIT0) ABC Time Tracking and Reports" },
        { time: "11:28:18 PM", type: "f", hours: 2.36, billCode: "V", description: "* (.DV000001) Program Merge" }
    ],
    missingEndOfDayPunch: true,
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "M", description: "Misc. Time", hours: 1.05 },
                { key: "P", description: "Custom Programming", hours: 5.25 },
                { key: "U", description: "Inhouse Development", hours: 0.47 },
                { key: "V", description: "Development Time", hours: 5.42 }
            ],
            total: 12.19
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 12.19 }
            ],
            total: 12.19
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-5-26",
    clockPunches: [
        { time: "01:49:46 AM", type: "f", hours: 0.48, billCode: "U", description: ".967140 *IP* (ABC) Upgrade to Version 15" },
        { time: "02:18:26 AM", type: "f", hours: 0.18, billCode: "M", description: "* Misc. Time" },
        { time: "02:29:08 AM", type: "f", hours: 7.11, billCode: "D", description: "* Done Working" },
        { time: "09:35:35 AM", type: "f", hours: 2.63, billCode: "M", description: "* Misc. Time" },
        { time: "09:43:30 AM", type: "p", hours: 0.43, billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "12:38:56 PM", type: "f", hours: 0.47, billCode: "F", description: "* Food/Fellowship" },
        { time: "01:07:18 PM", type: "f", hours: 0.24, billCode: "M", description: "* Misc. Time" },
        { time: "01:08:12 PM", type: "p", hours: 0.40, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "01:45:24 PM", type: "f", hours: 0.96, billCode: "V", description: "* (.DV000001) Program Merge" },
        { time: "01:51:45 PM", type: "p", hours: 0.08, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "02:12:52 PM", type: "p", hours: 0.13, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "02:55:46 PM", type: "f", hours: 0.06, billCode: "M", description: "* Misc. Time" },
        { time: "02:59:07 PM", type: "f", hours: 0.58, billCode: "V", description: "* (.DV000001) Program Merge" },
        { time: "03:34:00 PM", type: "f", hours: 0.60, billCode: "M", description: "* Misc. Time" },
        { time: "04:10:00 PM", type: "f", hours: 17.00, billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.47 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 1.04 },
                { key: "M", description: "Misc. Time", hours: 3.71 },
                { key: "U", description: "Inhouse Development", hours: 0.48 },
                { key: "V", description: "Development Time", hours: 1.54 }
            ],
            total: 7.24
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 7.24 }
            ],
            total: 7.24
        }
    }
}
,
{
    employee: "Melvin Ray Herr",
    day: "2016-5-27",
    clockPunches: [
        { time: "09:09:44 AM", type: "f", hours: 0.58, billCode: "M", description: "* Misc. Time" },
        { time: "09:28:27 AM", type: "p", hours: 0.02, billCode: "G", description: "* Give/Get Co-Worker Help" },
        { time: "09:40:47 AM", type: "p", hours: 0.34, billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "10:06:08 AM", type: "f", hours: 0.59, billCode: "U", description: "* (ABCTIT0) ABC Time Tracking and Reports" },
        { time: "10:41:04 AM", type: "p", hours: 0.49, billCode: "P", description: ".967457 *IP* (EMYLL 0) Centralized server control system." },
        { time: "11:11:05 AM", type: "f", hours: 0.19, billCode: "M", description: "* Misc. Time" },
        { time: "11:22:09 AM", type: "f", hours: 0.87, billCode: "U", description: "* (ABCTIT0) ABC Time Tracking and Reports" },
        { time: "12:14:32 PM", type: "f", hours: 0.21, billCode: "V", description: "* (.DV030000) Report Generator Fixes/Printing" },
        { time: "12:27:20 PM", type: "f", hours: 0.27, billCode: "F", description: "* Food/Fellowship" },
        { time: "12:43:21 PM", type: "f", hours: 1.32, billCode: "V", description: "* (.DV030000) Report Generator Fixes/Printing" },
        { time: "02:02:45 PM", type: "f", hours: 3.70, billCode: "V", description: "* (.DV725000) Client 5 Fixes" },
        { time: "04:54:34 PM", type: "p", hours: 0.01, billCode: "M", description: "* (AW) Anthony Witmer" },
        { time: "05:45:08 PM", type: "f", hours: 0.10, billCode: "M", description: "* Misc. Time" },
        { time: "05:51:09 PM", type: "f", hours: 60.43, billCode: "D", description: "* Done Working" }


    ],
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "F", description: "Food/Fellowship", hours: 0.27 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 0.36 },
                { key: "M", description: "Misc. Time", hours: 0.88 },
                { key: "P", description: "Custom Programming", hours: 0.49 },
                { key: "U", description: "Inhouse Development", hours: 1.46 },
                { key: "V", description: "Development Time", hours: 5.23 }
            ],
            total: 8.69
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 8.69 }
            ],
            total: 8.69
        }
    }
}
];
var grandTotals = {
    billCodeTotals: {
        byBillCode: {
            details: [
                { key: "C", description: "Commission", hours: 3.31 },
                { key: "F", description: "Food/Fellowship", hours: 0.74 },
                { key: "G", description: "Give/Get Co-Worker Help", hours: 1.69 },
                { key: "M", description: "Misc. Time", hours: 7.61 },
                { key: "N", description: "Billable Time", hours: 0.74 },
                { key: "P", description: "Custom Programming", hours: 7.26 },
                { key: "U", description: "Inhouse Development", hours: 2.41 },
                { key: "V", description: "Development Time", hours: 13.43 }
            ],
            total: 37.19
        },
        byGroup: {
            details: [
                { key: "ABC", description: "Bill Code Group Total", hours: 37.19 }
            ],
            total: 37.19
        }
    }
}

