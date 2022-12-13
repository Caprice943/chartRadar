import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartRadarComponent } from './chart-radar/chart-radar.component';
import { NgChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    ChartRadarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
