import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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

const appRoutes: Routes = [
  {
    path: 'financials',
    component: FinancialsComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  },
  {
    path: 'methodology',
    component: MethodologyComponent
  },
  {
    path: '' , 
    redirectTo: 'summary', 
    pathMatch: 'full'
  },
  {
    path: '**', 
    redirectTo: 'summary'
  }
];

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
    RouterModule.forRoot(appRoutes),
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
