import { Component, OnInit, Input } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min';

@Component({
  selector: 'app-canvasjs-chart',
  templateUrl: './canvasjs-chart.component.html',
  styleUrls: ['./canvasjs-chart.component.css']
})
export class CanvasjsChartComponent implements OnInit {
  public type;
  public chart;
  public data = [
    { x: new Date(2010, 0, 3), y: 510,label:'January' },
		{ x: new Date(2010, 1, 5), y: 560,label:'February' },
		{ x: new Date(2010, 2, 7), y: 540,label:'March' },
		{ x: new Date(2010, 3, 9), y: 558,label:'April' },
		{ x: new Date(2010, 4, 11), y: 0,label:'May' },
		{ x: new Date(2010, 5, 13), y: 693,label:'June' },
		{ x: new Date(2010, 6, 15), y: 657,label:'July' },
		{ x: new Date(2010, 7, 17), y: 663,label:'August' },
		{ x: new Date(2010, 8, 19), y: 639,label:'September' },
		{ x: new Date(2010, 9, 21), y: 673,label:'October' },
    { x: new Date(2010, 10, 23), y: 660,label:'November' },
    { x: new Date(2010, 11, 23), y: 660,label:'December' }
  ];
  @Input('chartType')
  set name(type: string) {
    this.type = type;
    if(this.chart!=null)
    {
      this.chart.options.data[0].type = this.type;
      this.chart.render();
    }
    console.log(this.type);
  }
  get name(): string { return this.type; }

  constructor() { }

  ngOnInit() {
    this.chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "CanvasJS Chart"
      },
      data: [{
        type: this.type,
        dataPoints: this.data
      }]
    });
      
    this.chart.render();
  }

}
