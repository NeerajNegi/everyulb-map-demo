import { Component, ViewChild } from '@angular/core';
import { GoogleMapsAPIWrapper, KmlLayerManager } from '@agm/core/services'
import { MapsAPILoader, AgmMap } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 29.030626; 
  lng: number = 79.387705;
  zoomLevel = 16;
  zoomPosition: google.maps.ControlPosition;
  streetViewPosition: google.maps.ControlPosition;

  @ViewChild(AgmMap) map: AgmMap;

  constructor(
    public mapsApiLoader: MapsAPILoader,
    private wrapper: GoogleMapsAPIWrapper,
    public kmlLayerManager: KmlLayerManager) {
      this.mapsApiLoader.load().then(() => {
        this.zoomPosition = google.maps.ControlPosition.BOTTOM_LEFT;
        this.streetViewPosition = google.maps.ControlPosition.BOTTOM_LEFT;
      });
    }
  
  // ngAfterContentInit() {
  //   let ctaLayer = new google.maps.KmlLayer({
  //     url: 'https://drive.google.com/file/d/1nGNb8se4jUOwnvN5pTYTck_iYPfWy_Ic/view?usp=sharing',
  //     map: AgmMap
  //   });
  //   this.kmlLayerManager.addKmlLayer(ctaLayer);
  // }
    
}
