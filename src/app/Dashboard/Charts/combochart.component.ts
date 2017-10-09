import { Component, OnInit } from '@angular/core';

import { ComboChartConfig } from './../../Models/ComboChartConfig';
import { GoogleChartsService } from './../../Services/google-charts.service';

declare var google: any;


@Component({
  selector: 'combo-chart',
  templateUrl: './combochart.component.html'
})
export class ComboChartComponent implements OnInit {

    private _data = [['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda'],
                     ['2004/05',  165,      938,         522,             998,           450],
                     ['2005/06',  135,      1120,        599,             1268,          288],
                     ['2006/07',  157,      1167,        587,             807,           397],
                     ['2007/08',  139,      1110,        615,             968,           215],
                     ['2008/09',  136,      691,         629,             1026,          366]];

    private _config = new ComboChartConfig('Monthly Coffee Production by Country', 'Cups', 'Month');


    constructor(private _chartService: GoogleChartsService) {}

    ngOnInit(): void {
        
        this._chartService.BuildComboChart("chart_div", this._data, this._config); 
    }
}