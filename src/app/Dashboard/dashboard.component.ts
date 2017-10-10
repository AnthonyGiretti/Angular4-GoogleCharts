import { ComboChartConfig } from './../Models/ComboChartConfig';
import { Component } from '@angular/core';
import { PieChartConfig } from './../Models/PieChartConfig';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'Reusable charts sample';

  data1: any[];
  config1: ComboChartConfig;
  elementId1: String;

  data2: any[];
  config2: PieChartConfig;
  elementId2: String;
  
  ngOnInit(): void {     

    //Combochart Data & Config
    this.data1 = [['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda'],
                     ['2004/05',  165,      938,         522,             998,           450],
                     ['2005/06',  135,      1120,        599,             1268,          288],
                     ['2006/07',  157,      1167,        587,             807,           397],
                     ['2007/08',  139,      1110,        615,             968,           215],
                     ['2008/09',  136,      691,         629,             1026,          366]];
    this.config1 = new ComboChartConfig('Monthly Coffee Production by Country', 'Cups', 'Month');
    this.elementId1 = 'myComboChart';

    //Piechart Data & Config
    this.data2 = [['Task', 'Hours per Day'],
                  ['Work',     11],
                  ['Eat',      2],
                  ['Commute',  2],
                  ['Watch TV', 2],
                  ['Sleep',    7]]

    this.config2 = new PieChartConfig('My Daily Activities', 0.4);
    this.elementId2 = 'myPieChart';
  }

}