function newDate(d) {
    return new Date(d);
};

function pushIfNew(obj, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].key === obj.key) { // modify whatever property you need
      return;
    }
  }
  array.push(obj);
};

function createPieChart(page, data) {
    var name = "#pieChart" + page;
    nv.addGraph(function() {
        var chart1 = nv.models.pieChart()
            .x(function(d) { return d.key + "  (" + d.description + ")" })
            .y(function(d) { return d.hours })
            .donut(true)
            .padAngle(.08)
            .cornerRadius(5)
            .id("donut1" + page); // allow custom CSS for this one svg
        chart1.title(data.billCodeTotals.byBillCode.total + " Hrs.");
        chart1.pie.labelsOutside(false).donut(true)
            .labelType(function (d, i) { return d.data.key });
        d3.select(name)
            .datum(data.billCodeTotals.byBillCode.details)
            .transition().duration(1200)
            .call(chart1);
        //nv.utils.windowResize(chart1.update);
        return chart1;
    });
};

function createBarChart(page, data) {
    var name = "#barChart" + page;
    var chart;
    nv.addGraph(function() {
        chart = nv.models.stackedAreaChart()
            .useInteractiveGuideline(true)
            .x(function(d) { return d[0] })
            .y(function(d) { return d[1] })
            .controlLabels({stacked: "Stacked"})
            .duration(500);
        chart.xAxis.tickFormat(function(d) { return d3.time.format('%a (%d)')(new Date(d)) });
        chart.xScale(d3.time.scale());
        chart.yAxis.tickFormat(d3.format(',.2f'));
        chart.legend.vers('furious');
        d3.select(name)
            .datum(data)
            .transition().duration(1000)
            .call(chart)
            .each('start', function() {
                setTimeout(function() {
                    d3.selectAll(name + ' *').each(function() {
                        if(this.__transition__)
                            this.__transition__.duration = 1;
                    })
                }, 0)
            });
        return chart;
    });
};

function createDay(page, data) {
var d = document.createElement("div");
    d.className = "day";
    d.innerHTML = "<div class='day-header'>"
        + "<div id='title" + page + "'></div>"
    + "</div>"
    + "<div class='day-body'>"
        + "<div class='pane'>"
            + "<div id='chartPaneHeader" + page + "' class='pane-header'>"
                + "<div id='chartPaneTitle1" + page + "' class='pane-title1'></div>"
                + "<div id='chartPaneTitle2" + page + "' class='pane-title2'></div>"
            + "</div>"
            + "<svg id='pieChart" + page + "'></svg>"
            + "<div class='time-detail summary' >"
                + "<table id='billCodeSummary" + page + "'></table>"
            + "</div>"
            + "<div class='time-detail summary' >"
                + "<table id='billCodesByGroup" + page + "'></table>"
            + "</div>"
        + "</div>"
        + "<div class='pane'>"
            + "<div id='timeDetailsStatus" + page + "' >"
            + "</div>"
            + "<div class='time-detail time-log' >"
                + "<table id='timeDetails" + page + "' >"
                + "</table>"
            + "</div>"
        + "</div>"
    + "</div>";


    var b = document.getElementById("body");
    b.appendChild(d);

    createPieChart(page, data);

    document.getElementById("chartPaneTitle1" + page).innerHTML = data.employee + "'s Time Card for:";
    document.getElementById("chartPaneTitle2" + page).innerHTML = d3.time.format('%A %b %-e, %Y')(new Date(data.day));

    var timeDetails = document.getElementById("timeDetails" + page);
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = timeDetails.insertRow(0);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    // Add some text to the new cells:
    cell1.innerHTML = "Time";
    cell2.innerHTML = "Type";
    cell3.innerHTML = "Hrs";
    cell4.innerHTML = "B/Code";
    cell5.innerHTML = "Description";

    for (i = 0; i < data.clockPunches.length; i++) {
        row = timeDetails.insertRow(i + 1);

        cell1 = row.insertCell(0);
        cell1.style = "width: 60px;"
        cell2 = row.insertCell(1);
        cell2.style = "text-align: center; width: 40px;"
        cell3 = row.insertCell(2);
        cell3.style = "text-align: right; width: 20px;"
        cell4 = row.insertCell(3);
        cell4.style = "text-align: center; width: 20px;"
        cell5 = row.insertCell(4);

        // Add some text to the new cells:
        cell1.innerHTML = data.clockPunches[i].time;
        cell2.innerHTML = data.clockPunches[i].type;
        cell3.innerHTML = data.clockPunches[i].hours;
        cell4.innerHTML = data.clockPunches[i].billCode;
        cell5.innerHTML = data.clockPunches[i].description;
    }
    var status = document.getElementById("timeDetailsStatus" + page);
    if (data.missingEndOfDayPunch && data.missingEndOfDayPunch === true) {
        status.innerHTML = "Missing End of Day Punch";
        status.className = "status-warning"
    }
    else{
        status.innerHTML = "Found End of Day Punch";
        status.className = "status-good"
    }
};

function populateBillCodeTotals(tableName, header, data, totalDescr) {
    var t = document.getElementById(tableName);
    // Create an empty <tr> element and add it to the 1st position of the table:
    var r = t.insertRow(0);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = r.insertCell(0);
    var cell2 = r.insertCell(1);
    var cell3 = r.insertCell(2);

    // Add some text to the new cells:
    cell1.innerHTML = header[0];
    cell2.innerHTML = header[1];
    cell3.innerHTML = header[2];

    for (i = 0; i < data.details.length; i++) {
        r = t.insertRow(i + 1);

        cell1 = r.insertCell(0);
        cell1.style = "text-align: center;"
        cell2 = r.insertCell(1);
        cell3 = r.insertCell(2);
        cell3.style = "text-align: right;"

        // Add some text to the new cells:
        cell1.innerHTML = data.details[i].key;
        cell2.innerHTML = data.details[i].description;
        cell3.innerHTML = data.details[i].hours;
    }

    r = t.insertRow(data.details.length + 1);
    cell1 = r.insertCell(0);
    cell2 = r.insertCell(1);
    cell3 = r.insertCell(2);
    cell3.style = "text-align: right;"

    // Add some text to the new cells:
    cell2.innerHTML = totalDescr;
    cell3.innerHTML = data.total;
}

function createGrandTotalPage(page, data, days) {
    var d = document.createElement("div");
    d.className = "day";
    d.innerHTML = "<div class='day-header'>"
        + "<div id='title" + page + "'></div>"
    + "</div>"
    + "<div class='day-body'>"
        + "<div class='pane'>"
            + "<div id='chartPaneHeader" + page + "' class='pane-header'>"
                + "<div id='chartPaneTitle1" + page + "' class='pane-title1'></div>"
                + "<div id='chartPaneTitle2" + page + "' class='pane-title2'></div>"
            + "</div>"
            + "<div class='time-detail summary' >"
                + "<table id='billCodeSummary" + page + "'></table>"
            + "</div>"
            + "<div class='time-detail summary' >"
                + "<table id='billCodesByGroup" + page + "'></table>"
            + "</div>"
        + "</div>"
        + "<div class='pane'>"
            + "<svg id='pieChart" + page + "'></svg>"
        + "</div>"
    + "</div>"
    + "<div class='day-footer'>"
        + "<div class='pane-header'>"
            + "Time by Bill Code Per Day"
        + "</div>"
        + "<svg id='barChart" + page + "'></svg>"
    + "</div>";

    var b = document.getElementById("body");
    b.appendChild(d);

    document.getElementById("chartPaneTitle1" + page).innerHTML = days[0].employee + "'s Time Summary for:";
    document.getElementById("chartPaneTitle2" + page).innerHTML = days[0].day + " to " + days[days.length - 1 ].day;

    createPieChart(page, data);

    var billCodes = [];

    days.forEach(function(day) {
        day.billCodeTotals.byBillCode.details.forEach(function(bc) {
            pushIfNew({ key: bc.key, description: bc.description, values: []}, billCodes);
        }, this);
    }, this);

    billCodes.forEach(function(b) {
        days.forEach(function(day) {
            var dat = day.billCodeTotals.byBillCode.details.filter(function(r){ return r.key === b.key; });
            b.values.push([ newDate(day.day), dat.length > 0 ? dat[0].hours : 0 ]);
        }, this);
    }, this);

    createBarChart(page, billCodes);
    // var barData = [];
    //     {
    //         "key" : "Misc." ,
    //         "values" : [ [ newDate("2016-2-22"), 3], [ newDate("2016-2-23") , 4], [ newDate("2016-2-24") , 2], [ newDate("2016-2-25") , 3], [ newDate("2016-2-26") , .5] ]
    //     },
    //     {
    //         "key" : "Food/Fellowship" ,
    //         "values" : [ [ newDate("2016-2-22"), 1], [ newDate("2016-2-23") , .5], [ newDate("2016-2-24") , 2], [ newDate("2016-2-25") , 1.25], [ newDate("2016-2-26") , .75] ]
    //     },
    //     {
    //         "key" : "Programming" ,
    //         "values" : [ [ newDate("2016-2-22"), 3], [ newDate("2016-2-23") , 4], [ newDate("2016-2-24") , 2], [ newDate("2016-2-25") , 3], [ newDate("2016-2-26") , .5] ]
    //     },
    //     {
    //         "key" : "Development" ,
    //         "values" : [ [ newDate("2016-2-22"), 2], [ newDate("2016-2-23") , 0], [ newDate("2016-2-24") , 2], [ newDate("2016-2-25") , 1], [ newDate("2016-2-26") , 5.5] ]
    //     }
    // ];

};

for (var index = 0; index < days.length; index++) {
    var page = index;
    createDay(page, days[index]);

    populateBillCodeTotals(
        "billCodeSummary" + page,
        [ "Bill Code", "Description", "Hours"],
        days[page].billCodeTotals.byBillCode,
        "Total of all Bill Codes"
    );

    populateBillCodeTotals(
        "billCodesByGroup" + page,
        [ "Group", "Description", "Hours"],
        days[page].billCodeTotals.byGroup,
        "Total of all Groups"
    );
};

createGrandTotalPage(days.length, grandTotals, days)

populateBillCodeTotals(
    "billCodeSummary" + days.length,
    [ "Bill Code", "Description", "Hours"],
    grandTotals.billCodeTotals.byBillCode,
    "Total of all Bill Codes"
);

populateBillCodeTotals(
    "billCodesByGroup" + days.length,
    [ "Group", "Description", "Hours"],
    grandTotals.billCodeTotals.byGroup,
    "Total of all Groups"
);
