import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { CanvasjsChartComponent } from './canvasjs-chart/canvasjs-chart.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgForm, FormsModule} from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { HighChartComponent } from './high-chart/high-chart.component';
import { ChartjsChartComponent } from './chartjs-chart/chartjs-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    GoogleChartComponent,
    CanvasjsChartComponent,
    HighChartComponent,
    ChartjsChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule,
    NgbModule,
    FormsModule,
    HighchartsChartModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
