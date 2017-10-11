import { Component, Input, OnInit } from '@angular/core';

import { GooglePieChartService } from './../../Services/google-pie-chart.service';
import { PieChartConfig } from './../../Models/PieChartConfig';

declare var google: any;


@Component({
  selector: 'donut-chart',
  templateUrl: './donutchart.component.html'
})
export class DonutChartComponent implements OnInit {

    @Input() data: any[];
    @Input() config: PieChartConfig;
    @Input() elementId: String;

    constructor(private _pieChartService: GooglePieChartService) {}

    ngOnInit(): void {
        this._pieChartService.BuildPieChart(this.elementId, this.data, this.config); 
    }
}