import { ComboChartConfig } from './../Models/ComboChartConfig';
import { Component } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'Reusable charts sample';

  data: any[];
  config: ComboChartConfig;
  elementId: String;
  
  ngOnInit(): void {     
    this.data = [['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda'],
                     ['2004/05',  165,      938,         522,             998,           450],
                     ['2005/06',  135,      1120,        599,             1268,          288],
                     ['2006/07',  157,      1167,        587,             807,           397],
                     ['2007/08',  139,      1110,        615,             968,           215],
                     ['2008/09',  136,      691,         629,             1026,          366]];
    this.config = new ComboChartConfig('Monthly Coffee Production by Country', 'Cups', 'Month');
    this.elementId = "chart_div";
  }

}