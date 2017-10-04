import { Component, OnInit } from '@angular/core';

declare var google: any;


@Component({
  selector: 'donut-chart',
  templateUrl: './donutchart.component.html'
})
export class DonutChartComponent implements OnInit {

    ngOnInit(): void {

        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
            ]);

            var options = {
            title: 'My Daily Activities',
            pieHole: 0.4,
            };

            var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
            chart.draw(data, options);
        }
    }
}