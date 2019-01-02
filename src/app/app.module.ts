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
import { FinancialsComponent } from './financials/financials.component';
import { MethodologyComponent } from './methodology/methodology.component';
import { SummaryComponent } from './summary/summary.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    MapDescriptionComponent,
    MapNavigationComponent,
    FinancialsComponent,
    MethodologyComponent,
    SummaryComponent,
    HeaderComponent,
    FooterComponent
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
    NoopAnimationsModule,
    ChartsModule
  ],
  providers: [GoogleMapsAPIWrapper, KmlLayerManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
