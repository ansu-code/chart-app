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
    { x: new Date(2020, 0, 3), y: 510000,label:'January 3,2020' }
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
  selectedValue=null
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

  onbtnGroupClick(value)
  {
    this.selectedValue=null;
    switch(value)
    {
      case "1":
      {
       
        this.data = [
          { x: new Date(2020, 0, 3), y: 510000,label:'January 3,2020' }
        ];
        
       break;

      }
      case "2":
        {
          
          this.data = [
           { x: new Date(2019, 10, 23), y: 660000,label:'November 1, 2019' },
            { x: new Date(2019, 11, 23), y: 660000,label:'December 23, 2019' },
            { x: new Date(2020, 0, 3), y: 510000,label:'January 3, 2020' }
          ];
         break;

        }
      case "3":
        {
          this.data = [
            { x: new Date(2019, 7, 17), y: 663000,label:'August 17,2019' },
            { x: new Date(2019, 8, 19), y: 639000,label:'September 19,2019' },
            { x: new Date(2019, 9, 21), y: 673000,label:'October 21,2019' },
            { x: new Date(2019, 10, 23), y: 660000,label:'November 23,2019' },
            { x: new Date(2019, 11, 23), y: 660000,label:'December 23,2019' },
            { x: new Date(2020, 0, 3), y: 510000,label:'January 3,2020' }
          ];
         break;
        }
      default:
        {

        }
      }
        this.chart.options.data[0].dataPoints=this.data;
        this.chart.render();
    }

  }
