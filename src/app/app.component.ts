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
  onChartBtnClick(type)
  {
    this.g_type=type=="AreaChart"?"AreaChart":"PieChart";
    this.c_type=type=="AreaChart"?"area":"doughnut";
  }
}
