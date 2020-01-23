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
    //this.highcharts = Highcharts;
    if(this.type=='area')
    {
      
      this.chartOptions.series[0].type="area";
     
      this.chartOptions.tooltip = {
         formatter: function () {
            console.log(this);
            return '<b>' + this.series.name + '</b><br/>' +
               this.key + ': ' + this.y;
         }
      };

    }
    else
    {
     
      this.chartOptions.series[0].type="pie";
      this.chartOptions.tooltip = {
         formatter: function () {
            
            return '<b>' + this.series.name + '</b><br/>' +
               this.key + ': ' + this.y;
         }
      };

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
       text: 'High Chart'
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
       categories: ['January'] 
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
      
    },
    plotOptions : {
       area: {
          fillOpacity: 0.5 
       },
       pie: {
         shadow: false,
         center: ['50%', '50%'],
         size:'100%',
         innerSize: '40%'            
      }
    },
    credits:{
       enabled: false
    },
    series: [{
         type: 'area',
         name: 'Balance',
         data: [
            ['January 3, 2020',   510000]
           
         ]
      }]
 };
  updateFlag=false;
  
  selectedValue=null
  constructor() { }

  ngOnInit() {
   
  }
  ddata = [
   ['January 3,2020']
  
];
  onbtnGroupClick(value)
  {
    this.selectedValue=null
    switch(value)
    {
      case "1":
      {
        this.chartOptions.series[0].data =  [
         ['January 3,2020',   510000]
        
      ];
       this.ddata = [
        ['January 3,2020']
       
     ];
     this.chartOptions.xAxis={
      categories: ['January'] 
   };
       break;

      }
      case "2":
        {
         this.chartOptions.series[0].data = [
            ['November 1, 2019',660000] ,
            ['December 23, 2019',660000],
            ['January 3, 2020',512000] 
         ];
         this.ddata = [
          ['November 1, 2019'] ,
          ['December 23, 2019'],
          ['January 3, 2020'] 
       ];
       this.chartOptions.xAxis={
         categories: ['November','December','January'] 
      };
         break;

        }
      case "3":
        {
         this.chartOptions.series[0].data = [
            ['August 17,2019', 663000],
            ['September 19,2019', 639000],
            ['October 21,2019', 673000],
            ['November 1, 2019',660000] ,
            ['December 23, 2019',660000],
            ['January 3, 2020',512000] 
         ];
          
  
         this.ddata = [
            
          ['August 17,2019'] ,
          ['September 19,2019'] ,
          ['October 21,2019'] ,
          ['November 23,2019'] ,
          ['December 23,2019'],
          ['January 3,2020'] 
       ];
       this.chartOptions.xAxis={
         categories: ['August','September','October','November','December','January'] 
      };
         break;
        }
      default:
        {

        }
    }
    this.updateFlag=true;

  }
}
