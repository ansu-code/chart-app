import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-high-chart',
  templateUrl: './high-chart.component.html',
  styleUrls: ['./high-chart.component.css']
})
export class HighChartComponent implements OnInit {
  @Input('chartType')
  set name(type: string) {
    this.type=type;
    this.highcharts = Highcharts;
    if(this.type=='area')
    {
      this.chartOptions.series=[
        {
           name: 'John',
           data: [3, 4, 3, 5, 4, 10, 12]
        }, 
        {
           name: 'Jane',
           data: [1, 3, 4, 3, 3, 5, 4]
        }
     ];

    }
    else
    {
     
      

    }
  this.updateFlag=true;
    
  }
  get name(): string { return null; }
  highcharts = Highcharts;
  type='area';
  chartOptions = {   
    chart: {
       type: 'area'
    },
    title: {
       text: 'Average fruit consumption during one week'
    },
    subtitle : {
       style: {
          position: 'absolute',
          right: '0px',
          bottom: '10px'
       }
    },
    legend : {
       layout: 'vertical',
       align: 'left',
       verticalAlign: 'top',
       x: -150,
       y: 100,
       floating: true,
       borderWidth: 1,
       backgroundColor:'#FFFFFF'
    },
    xAxis:{
       categories: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'] 
    },
    yAxis : {
       title: {
          text: 'Number of units'
       },
       labels: {
          formatter: function () {
             return this.value;
          }
       },
       min:0
    },
    tooltip : {
       formatter: function () {
          return '<b>' + this.series.name + '</b><br/>' +
             this.x + ': ' + this.y;
       }
    },
    plotOptions : {
       area: {
          fillOpacity: 0.5 
       }
    },
    credits:{
       enabled: false
    },
    series: [
       {
          name: 'John',
          data: [3, 4, 3, 5, 4, 10, 12]
       }, 
       {
          name: 'Jane',
          data: [1, 3, 4, 3, 3, 5, 4]
       }
    ]
 };
  updateFlag=false;
  
  selectedValue=null
  constructor() { }

  ngOnInit() {
   
  }

}
