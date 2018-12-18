import { Component } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services'
import { MapsAPILoader, AgmMap } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoomPosition: google.maps.ControlPosition;
  streetViewPosition: google.maps.ControlPosition;

  constructor(
    public mapsApiLoader: MapsAPILoader,
    private wrapper: GoogleMapsAPIWrapper) {
      this.mapsApiLoader.load().then(() => {
        this.zoomPosition = google.maps.ControlPosition.BOTTOM_LEFT;
        this.streetViewPosition = google.maps.ControlPosition.BOTTOM_LEFT;
      });
    }

    
}
