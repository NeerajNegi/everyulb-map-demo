import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { MapDescriptionComponent } from './map-description/map-description.component';
import { MapNavigationComponent } from './map-navigation/map-navigation.component';


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
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
