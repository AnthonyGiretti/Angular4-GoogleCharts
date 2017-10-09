import { ComboChartConfig } from './../Models/ComboChartConfig';
import { Injectable } from '@angular/core';
declare var google: any;

@Injectable()
export class GoogleChartsService {

  constructor() { 
    google.charts.load('current', {'packages':['corechart']});
  }

  public BuildComboChart(elementId: String, data: any[], config: ComboChartConfig) : void {
    console.log(config);
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
}