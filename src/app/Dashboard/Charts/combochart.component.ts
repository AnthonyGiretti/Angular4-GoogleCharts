import { Component, Input, OnInit } from '@angular/core';

import { ComboChartConfig } from './../../Models/ComboChartConfig';
import { GoogleChartsService } from './../../Services/google-charts.service';

declare var google: any;


@Component({
  selector: 'combo-chart',
  templateUrl: './combochart.component.html'
})
export class ComboChartComponent implements OnInit {

    @Input() data: any[];
    @Input() config: ComboChartConfig;
    @Input() elementId: String;
    
    constructor(private _chartService: GoogleChartsService) {}

    ngOnInit(): void {
        
        this._chartService.BuildComboChart(this.elementId, this.data, this.config); 
    }
}