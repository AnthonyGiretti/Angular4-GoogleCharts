import { ComboChartConfig } from './../Models/ComboChartConfig';
import { GoogleChartsBaseService } from './google-charts.base.service';
import { Injectable } from '@angular/core';
import { PieChartConfig } from './../Models/PieChartConfig';
declare var google: any;

@Injectable()
export class GoogleChartsService extends GoogleChartsBaseService {

  constructor() { super(); }

  public BuildComboChart(elementId: String, data: any[], config: ComboChartConfig) : void {
    var callback = () => {
      var datatable = google.visualization.arrayToDataTable(data);

      var options = {
      title : config.title,
      vAxis: {title: config.vAxis},
      hAxis: {title: config.hAxis},
      seriesType: 'bars'
      };

      var chart = new google.visualization.ComboChart(document.getElementById(<string>elementId));
      chart.draw(datatable, options);
    };
    google.charts.setOnLoadCallback(callback);
  }

  
  public BuildPieChart(elementId: String, data: any[], config: PieChartConfig) : void {
    var callback = () => {
      var datatable = google.visualization.arrayToDataTable(data);

      var options = {
            title: config.title,
            pieHole: config.pieHole,
      };

      var chart = new google.visualization.PieChart(document.getElementById(<string>elementId));
      chart.draw(datatable, options);
    };
    google.charts.setOnLoadCallback(callback);
  }

}