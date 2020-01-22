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
    ['January', 510000,'January 3,2020: 510000']
 ];
 ddata = [
  ['January 3,2020']
];
  columnNames = ['Month', 'Balance'];
  options = {    
      pieHole:0.4
   };
  width = 550;
  height = 400;
  selectedValue=null
  constructor() { }

  ngOnInit() {
  }

  onbtnGroupClick(value)
  {
    switch(value)
    {
      case "1":
      {
        this.data = [
          ['January', 510000,'January 3,2020: 510000']
         
       ];
       this.ddata = [
        ['January 3,2020']
       
     ];
       break;

      }
      case "2":
        {
          this.data = [
            ['November', 660000,'November 1, 2019: 660000'] ,
            ['December', 660000,'December 23, 2019: 660000'],
            ['January',510000,'January 3, 2020: 510000'] 
         ];
         this.ddata = [
          ['November 1, 2019'] ,
          ['December 23, 2019'],
          ['January 3, 2020'] 
       ];
         break;

        }
      case "3":
        {
          this.data = [
            
            ['August', 663000,'August 17,2019: 663000'] ,
            ['September', 639000,'September 19,2019: 639000'] ,
            ['October', 673000,'October 21,2019: 673000'] ,
            ['November', 660000,'November 23,2019: 660000'] ,
            ['December', 660000,'December 23,2019: 660000'],
            ['January', 510000,'January 3,2020: 512000'] 
         ];
         this.ddata = [
            
          ['August 17,2019'] ,
          ['September 19,2019'] ,
          ['October 21,2019'] ,
          ['November 23,2019'] ,
          ['December 23,2019'],
          ['January 3,2020'] 
       ];
         break;
        }
      default:
        {

        }
    }

  }

}
