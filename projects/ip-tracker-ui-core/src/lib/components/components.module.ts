import { NgModule } from '@angular/core';
import { IpTrackerComponent } from './ip-tracker/ip-tracker.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    IpTrackerComponent,
    SearchBarComponent
  ],
  exports: [
    IpTrackerComponent,
    SearchBarComponent
  ]
})
export class ComponentsModule { }
