import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { CanvasjsChartComponent } from './canvasjs-chart/canvasjs-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleChartComponent,
    CanvasjsChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
