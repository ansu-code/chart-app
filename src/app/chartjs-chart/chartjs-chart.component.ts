import { Component, OnInit,Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as palet from 'palette.js'

@Component({
  selector: 'app-chartjs-chart',
  templateUrl: './chartjs-chart.component.html',
  styleUrls: ['./chartjs-chart.component.css']
})
export class ChartjsChartComponent implements OnInit {
  public type='line';
  @Input('chartType')
  set name(type: string) {
    this.type = type;
    this.lineChartType = this.type;
  }
  get name(): string { return this.type; }
  selectedValue=null
  lineChartData: ChartDataSets[] = [
    { data: [510000], label: 'Balance' },
  ];

  lineChartLabels: Label[] = ['January'];

  lineChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'ChartJS Chart'
  }
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: ['rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 14, 86, 1)',
      'rgba(118, 206, 86, 1)',
      'rgba(100, 56, 86, 1)',
      'rgba(56, 100, 86, 1)']
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = this.type;
  
  ddata=['January 3,2020'];

  constructor() { }

  ngOnInit() {
  }

  onbtnGroupClick(value)
  {
    this.selectedValue=null;
    switch(value)
    {
      case "1":
      {
        this.lineChartData[0].data=[510000];
        this.lineChartLabels=['January'];
        this.ddata = 
          ['January 3,2020'];
        //this.data = [
          //{ x: new Date(2020, 0, 3), y: 510000,label:'January 3,2020' }
        //];
        
       break;

      }
      case "2":
        {
          this.lineChartData[0].data=[660000,660000,510000];
        this.lineChartLabels=['November','December','January'];
          //this.data = [
           //{ x: new Date(2019, 10, 23), y: 660000,label:'November 1, 2019' },
            //{ x: new Date(2019, 11, 23), y: 660000,label:'December 23, 2019' },
            //{ x: new Date(2020, 0, 3), y: 510000,label:'January 3, 2020' }
          //];
          this.ddata = 
            ['November 1, 2019'] ,
            ['December 23, 2019'],
            ['January 3, 2020'];
         break;

        }
      case "3":
        {
          this.lineChartData[0].data=[663000,639000,673000,660000,660000,510000];
          this.lineChartLabels=['August','September','October','November','December','January'];
         // this.data = [
            //{ x: new Date(2019, 7, 17), y: 663000,label:'August 17,2019' },
            //{ x: new Date(2019, 8, 19), y: 639000,label:'September 19,2019' },
            //{ x: new Date(2019, 9, 21), y: 673000,label:'October 21,2019' },
            //{ x: new Date(2019, 10, 23), y: 660000,label:'November 23,2019' },
            //{ x: new Date(2019, 11, 23), y: 660000,label:'December 23,2019' },
            //{ x: new Date(2020, 0, 3), y: 510000,label:'January 3,2020' }
          //];
          this.ddata = 
            
            ['August 17,2019'] ,
            ['September 19,2019'] ,
            ['October 21,2019'] ,
            ['November 23,2019'] ,
            ['December 23,2019'],
            ['January 3,2020'];
         break;
        }
      default:
        {

        }
      }
        
    }

}
