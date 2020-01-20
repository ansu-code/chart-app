import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.css']
})
export class GoogleChartComponent implements OnInit {
  title = 'Google Chart';
  @Input('chartType') public type;
  myRoles = [
    { role: 'tooltip', type: 'string', index: 2 }
  ];
  data = [
     ['January', 45.0,],
     ['February', 0.0],
     ['March', 12.8],
     ['April', 8.5],
     ['May', 0.0],
     ['June', 0.7] ,
     ['July', 0.7] ,
     ['August', 0.7] ,
     ['September', 0.7] ,
     ['October', 0.7] ,
     ['November', 0.7] ,
     ['December', 0.7] 
  ];
  columnNames = ['Month', 'Balance'];
  options = {    
      pieHole:0.4
   };
  width = 550;
  height = 400;
  constructor() { }

  ngOnInit() {
  }

}
