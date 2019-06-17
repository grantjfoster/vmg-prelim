import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app', 
  template: 
    `<ejs-heatmap id='container' style="display:block;" [dataSource]='dataSource'>
    </ejs-heatmap>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  // title: string = "My first Project";
  // lat: number = 51.678418;
  // lng: number = 7.809007;

  // var config = {
  //   container: document.getElementById('heatmapContainer'),
  //   radius: 10,
  //   maxOpacity: .5,
  //   minOpacity: 0,
  //   blur: .75,
  //   gradient: {
  //     // enter n keys between 0 and 1 here
  //     // for gradient color customization
  //     '.5': 'blue',
  //     '.8': 'red',
  //     '.95': 'white'
  //   }
  // };

  dataSource: Object[] = [
    [73, 39, 26, 39, 94, 0],
    [93, 58, 53, 38, 26, 68],
    [99, 28, 22, 4, 66, 90],
    [14, 26, 97, 69, 69, 3],
    [7, 46, 47, 47, 88, 6],
    [41, 55, 73, 23, 3, 79],
    [56, 69, 21, 86, 3, 33],
    [45, 7, 53, 81, 95, 79],
    [60, 77, 74, 68, 88, 51],
    [25, 25, 10, 12, 78, 14],
    [25, 56, 55, 58, 12, 82],
    [74, 33, 88, 23, 86, 59]
  ];

  // var heatmapInstance = h337.create(config);
}
