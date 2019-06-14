import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeatMapModule, HeatMapComponent, LegendService, TooltipService} from '@syncfusion/ej2-angular-heatmap';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeatMapModule,
    AgmCoreModule.forRoot({
      apiKey: 'My_Key'
    })
  ],
  providers: [HeatMapComponent, LegendService, TooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
