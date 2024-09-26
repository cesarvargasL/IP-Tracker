import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IpTrackerUiCoreModule} from "@ip-tracker/ui-core";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IpTrackerUiCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
