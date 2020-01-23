import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chart-app';
  g_type='AreaChart';
  c_type='area';
  h_type='area';
  cj_type='line';
  onChartBtnClick(type)
  {
    this.g_type=type;//=="AreaChart"?"AreaChart":"PieChart";
    this.c_type=type=="AreaChart"?"area":"doughnut";
    this.h_type=type=="AreaChart"?"area":"pie";
    this.cj_type=type=="AreaChart"?"line":"doughnut";
  }
}
