import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IpTrackerUiCoreModule} from "@ip-tracker/ui-core";
import { InformationComponent } from './components/information/information.component';
import { MapComponent } from './components/map/map.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IpTrackerUiCoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
