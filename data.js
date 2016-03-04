var newDate = function(d) {
    return  new Date(d).getTime();
}

var data = [
    {
        "key" : "Misc." ,
        "values" : [ [ newDate("2016-2-22"), 3], [ newDate("2016-2-23") , 4], [ newDate("2016-2-24") , 2], [ newDate("2016-2-25") , 3], [ newDate("2016-2-26") , .5] ]
    },
    {
        "key" : "Food/Fellowship" ,
        "values" : [ [ newDate("2016-2-22"), 1], [ newDate("2016-2-23") , .5], [ newDate("2016-2-24") , 2], [ newDate("2016-2-25") , 1.25], [ newDate("2016-2-26") , .75] ]
    },
    {
        "key" : "Programming" ,
        "values" : [ [ newDate("2016-2-22"), 3], [ newDate("2016-2-23") , 4], [ newDate("2016-2-24") , 2], [ newDate("2016-2-25") , 3], [ newDate("2016-2-26") , .5] ]
    },
    {
        "key" : "Development" ,
        "values" : [ [ newDate("2016-2-22"), 2], [ newDate("2016-2-23") , 0], [ newDate("2016-2-24") , 2], [ newDate("2016-2-25") , 1], [ newDate("2016-2-26") , 5.5] ]
    }
];

var timeData = {
    employee: "Melvin Ray Herr",
    day: "2016-03-01",
    clockPunches: [
        { time: "09:31:15 AM", type: "f", hours: "  .61", billCode: "M", description: "* Misc. Time" },
        { time: "10:00:18 AM", type: "p", hours: "  .01", billCode: "G", description: "* (KR) Karen Rissler" },
        { time: "10:03:42 AM", type: "p", hours: "  .52", billCode: "N", description: ".968147 *IP* (EMYLL 0) Troubleshoot" },
        { time: "10:39:06 AM", type: "f", hours: "  .14", billCode: "P", description: ".968245 *WC* (ZEIEQ 0)" },
        { time: "10:47:29 AM", type: "f", hours: "  .10", billCode: "D", description: "* Done Working" },
        { time: "10:53:20 AM", type: "f", hours: "  .39", billCode: "M", description: "* Misc. Time" },
        { time: "11:16:52 AM", type: "f", hours: "  .22", billCode: "P", description: ".968245 *WC* (ZEIEQ 0)" },
        { time: "11:30:00 AM", type: "f", hours: "  .52", billCode: "M", description: "* Misc. Time" },
        { time: "12:01:03 PM", type: "f", hours: "  .27", billCode: "P", description: ".968237 *IP* (ZIMMU 0) Link ABC to Outlook" },
        { time: "12:17:04 PM", type: "f", hours: " 1.08", billCode: "F", description: "* Food/Fellowship" },
        { time: "01:20:10 PM", type: "p", hours: "     ", billCode: "M", description: "* Misc. Time" },
        { time: "01:22:11 PM", type: "f", hours: "  .20", billCode: "P", description: ".968245 *WC* (ZEIEQ 0)" },
        { time: "01:34:23 PM", type: "f", hours: "  .68", billCode: "M", description: "* Misc. Time" },
        { time: "02:15:17 PM", type: "f", hours: "  .31", billCode: "P", description: ".968237 *IP* (ZIMMU 0) Link ABC to Outlook" },
        { time: "02:33:38 PM", type: "p", hours: "  .05", billCode: "G", description: "* (AW) Anthony Witmer" },
        { time: "02:37:06 PM", type: "f", hours: "  .61", billCode: "G", description: "* Give/Get Co-Worker Help" },
        { time: "02:37:34 PM", type: "p", hours: "  .84", billCode: "P", description: ".968226 *IP* (ZIMMU 0) update to 15.05" },
        { time: "04:04:00 PM", type: "f", hours: " 1.43", billCode: "P", description: ".968237 *IP* (ZIMMU 0) Link ABC to Outlook" },
        { time: "05:29:54 PM", type: "f", hours: "  .02", billCode: "M", description: "* Misc. Time" },
        { time: "05:30:57 PM", type: "f", hours: " 1.03", billCode: "D", description: "* Done Working" },
        { time: "06:32:56 PM", type: "f", hours: "  .08", billCode: "M", description: "* Misc. Time" },
        { time: "06:37:41 PM", type: "f", hours: "9.54 ", billCode: "D", description: "* Done Working" }
    ],
    billCodeTotals: {
        byBillCode: {
            total: "7.98",
            details: [
                { key: "F", description: "Food/Fellowship", hours: "1.08" },
                { key: "G", description: "Give/Get Co-Worker Help", hours: ".67" },
                { key: "M", description: "Misc. Time", hours: "2.30" },
                { key: "N", description: "Billable Time", hours: ".52" },
                { key: "P", description: "Custom Programming", hours: "3.41" }
            ]
        },
        byGroup: {
            total: "7.98",
            details: [
                { key: "ABC", description: "Advanced Business Computers", hours: "7.98" }
            ]
        }
    }
};
