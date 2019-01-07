import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMapsAPIWrapper, KmlLayerManager } from '@agm/core/services'
import { MapsAPILoader, AgmMap } from '@agm/core';
import { markers } from '../markers';
import { solutionMarkers } from '../solutionMarkers';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  lat: number = 29.030626; 
  lng: number = 79.387705;
  zoomLevel = 14;
  zoomPosition: google.maps.ControlPosition;
  streetViewPosition: google.maps.ControlPosition;
  mapTypeControlPosition: google.maps.ControlPosition;
  markersData = markers;
  solutionMarkers = solutionMarkers;

  showScope: boolean = true;
  showIssues: boolean = true;
  showSolutions: boolean = true;
  url: string = "assets/chattarpurVillage.kml";

  @ViewChild(AgmMap) map: AgmMap;
  emitMarkerEvent: Subject<any> = new Subject();

  polygons: Array<any> = [
    {url: 'https://drive.google.com/uc?authuser=0&id=1qET6Sbif_xVD7eR0kaBQFaiKoKpo8iZo&export=download'},
    {url: 'https://drive.google.com/uc?authuser=0&id=1zSiHgeaeON1DAtIapCfjb9pLs9YY4Oe9&export=download'},
    {url: 'https://drive.google.com/uc?authuser=0&id=1jU-GhPtN50RS4c6-tzTqr6IocyR7pGP5&export=download'},
    {url: 'https://drive.google.com/uc?authuser=0&id=1-gfCtT0sAukn8T9EamTXs13e3Z1u3nd&export=download'},
    {url: 'https://drive.google.com/uc?authuser=0&id=1A7wKSvMtxbJ-K_pUeXrZ3gHciaX94_Sm&export=download'},
    {url: 'https://drive.google.com/uc?authuser=0&id=12SynwHQrtlKjY71Mt77xpyKwpJRdh_TB&export=download'}
  ]

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
      console.log(markers);
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

  toggleSolutions(): void {
    console.log('Solutions Toggled');
    this.showSolutions = !this.showSolutions;
    console.log(this.showSolutions);
  }

  toggleIssues(): void {
    console.log('Issues Toggled');
    this.showIssues = !this.showIssues;
    console.log(this.showIssues);
  }

  markerClicked(markerDetails: any): void {
    this.emitMarkerEvent.next(markerDetails);
  }

}
