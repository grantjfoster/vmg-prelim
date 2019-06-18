import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeatMapModule, HeatMapComponent, LegendService, TooltipService} from '@syncfusion/ej2-angular-heatmap';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeatMapModule,
    // GoogleChartsModule
  ],
  providers: [HeatMapComponent, LegendService, TooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
