import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';

import { AgmCoreModule, GoogleMapsAPIWrapper, KmlLayerManager } from '@agm/core';
import { MapDescriptionComponent } from './map-description/map-description.component';
import { MapNavigationComponent } from './map-navigation/map-navigation.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule, MatDialogRef} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FinancialsComponent } from './financials/financials.component';
import { MethodologyComponent } from './methodology/methodology.component';
import { SummaryComponent } from './summary/summary.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChartsModule } from 'ng2-charts';
import { DetailsOverlayComponent } from './details-overlay/details-overlay.component';
import { DataService } from './data.service';
import { MatSelectModule } from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';

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
    path: 'details-overlay',
    component: DetailsOverlayComponent
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
    FooterComponent,
    DetailsOverlayComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAF16wKOlIRqQOAxtvR7Gk2Oobvpb_BfDk'
    }),
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ChartsModule,
    MatSelectModule,
    MatTooltipModule
  ],
  providers: [GoogleMapsAPIWrapper, KmlLayerManager, DataService, {provide: MatDialogRef, useValue: {}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
