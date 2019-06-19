import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeatMapModule, HeatMapComponent, LegendService, TooltipService} from '@syncfusion/ej2-angular-heatmap';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HeatMapModule,
    AppRoutingModule,
    // GoogleChartsModule
  ],
  providers: [HeatMapComponent, LegendService, TooltipService],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }
