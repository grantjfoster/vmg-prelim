import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'working-heatmap';
  lat: number = 37.782;
  lng: number = -122.447;

  public sport: string = "";
  public month: number = 0;
  public coords: any = [];
  public points = [];
  private map: google.maps.Map = null;
  private heatmap: google.maps.visualization.HeatmapLayer = null;



  constructor(
    private httpClient: HttpClient
  ) {}
  
  search() {
    this.points = [];
    this.coords = [];
    // this.map = null;
    // this.heatmap = null;
    console.log("searching...");
    this.httpClient
      .get("http://localhost:5000/api/search/" + this.sport + "/" + this.month)
      .subscribe(
        (response: any) => {
          this.coords = response; 
          for (var i = 0; i < this.coords.locations.length; i++) {
            const lat = this.coords.locations[i].lat;
            const lng = this.coords.locations[i].lng;
            const wgt = this.coords.locations[i].weight;
            let latlng = new google.maps.LatLng({lat: lat, lng: lng});
            var point = {
              location: latlng, 
              weight: wgt
            }
            this.points.push(point);
          }
          this.heatmap = new google.maps.visualization.HeatmapLayer({
            map: this.map,
            data: this.points
          });
        }
      ) 
  }
  // GET http://localhost:3000/api/search?sport=hiking&month=6

  /*
    {
      "sport": "hiking",
      "month": 6,
      "locations": [
        {
          "lat": 12,
          "lng": 1,
          "weight": 1
        }
      ]
    }
  */

  onMapLoad(mapInstance: google.maps.Map) {
    this.map = mapInstance;

    // Do the first get
    // Subsequently use the search button on click to execute search
    // this.search();

    // const coords = [
    //   {location: new google.maps.LatLng(37.782, -122.447), weight: 0.5},
    //   new google.maps.LatLng(37.782, -122.445),
    //   {location: new google.maps.LatLng(37.782, -122.443), weight: 2},
    //   {location: new google.maps.LatLng(37.782, -122.441), weight: 3},
    //   {location: new google.maps.LatLng(37.782, -122.439), weight: 2},
    //   new google.maps.LatLng(37.782, -122.437),
    //   {location: new google.maps.LatLng(37.782, -122.435), weight: 0.5},
    
    //   {location: new google.maps.LatLng(37.785, -122.447), weight: 3},
    //   {location: new google.maps.LatLng(37.785, -122.445), weight: 2},
    //   new google.maps.LatLng(37.785, -122.443),
    //   {location: new google.maps.LatLng(37.785, -122.441), weight: 0.5},
    //   new google.maps.LatLng(37.785, -122.439),
    //   {location: new google.maps.LatLng(37.785, -122.437), weight: 2},
    //   {location: new google.maps.LatLng(37.785, -122.435), weight: 3}
    // ]

    // for (var i = 0; i < this.coords.locations.length(); i++) {
    //   const lat = this.coords.locations[i].lat;
    //   const lng = this.coords.locations[i].lng;
    //   const wgt = this.coords.locations[i].weight;
    //   this.points.push({location: new google.maps.LatLng(lat, lng), weight: wgt});
    // }
    // console.log("here");
    this.heatmap = new google.maps.visualization.HeatmapLayer({
      map: this.map,
      data: this.points
    });
  }
}
