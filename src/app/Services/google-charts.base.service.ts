declare var google: any;

export class GoogleChartsBaseService {
  constructor() { 
    google.charts.load('current', {'packages':['corechart']});
  }
}