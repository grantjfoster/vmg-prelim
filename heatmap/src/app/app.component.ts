import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app', 
  template: `<ejs-heatmap id='heatmap-container'></ejs-heatmap>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  // title = 'heatmap';
}
