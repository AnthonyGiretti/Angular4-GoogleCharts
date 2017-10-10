import { Component, Input, OnInit } from '@angular/core';

import { GoogleChartsService } from './../../Services/google-charts.service';
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

    constructor(private _chartService: GoogleChartsService) {}

    ngOnInit(): void {
        this._chartService.BuildPieChart(this.elementId, this.data, this.config); 
    }
}