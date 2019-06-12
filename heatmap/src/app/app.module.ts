import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeatMapModule} from '@syncfusion/ej2-angular-heatmap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeatMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
