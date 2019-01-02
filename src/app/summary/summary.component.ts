import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMapsAPIWrapper, KmlLayerManager } from '@agm/core/services'
import { MapsAPILoader, AgmMap } from '@agm/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  lat: number = 29.030626; 
  lng: number = 79.387705;
  zoomLevel = 16;
  zoomPosition: google.maps.ControlPosition;
  streetViewPosition: google.maps.ControlPosition;
  mapTypeControlPosition: google.maps.ControlPosition;

  showScope: boolean = true;

  @ViewChild(AgmMap) map: AgmMap;

  constructor(
    public mapsApiLoader: MapsAPILoader,
    private wrapper: GoogleMapsAPIWrapper,
    public kmlLayerManager: KmlLayerManager) {
      this.mapsApiLoader.load().then(() => {
        this.zoomPosition = google.maps.ControlPosition.BOTTOM_LEFT;
        this.streetViewPosition = google.maps.ControlPosition.BOTTOM_LEFT;
        this.mapTypeControlPosition = google.maps.ControlPosition.BOTTOM_LEFT;
      });
    }

    ngOnInit(){
      
    }
  
  // ngAfterContentInit() {
  //   let ctaLayer = new google.maps.KmlLayer({
  //     url: 'https://drive.google.com/file/d/1nGNb8se4jUOwnvN5pTYTck_iYPfWy_Ic/view?usp=sharing',
  //     map: AgmMap
  //   });
  //   this.kmlLayerManager.addKmlLayer(ctaLayer);
  // }

  toggleScope(): void {
    console.log('Scope Toggled');
    this.showScope = !this.showScope;
    console.log(this.showScope);
  }

}
