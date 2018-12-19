import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AgmCoreModule, GoogleMapsAPIWrapper, KmlLayerManager } from '@agm/core';
import { MapDescriptionComponent } from './map-description/map-description.component';
import { MapNavigationComponent } from './map-navigation/map-navigation.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MapDescriptionComponent,
    MapNavigationComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAF16wKOlIRqQOAxtvR7Gk2Oobvpb_BfDk'
    }),
    MatCardModule,
    MatButtonModule
    ,MatTabsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [GoogleMapsAPIWrapper, KmlLayerManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
