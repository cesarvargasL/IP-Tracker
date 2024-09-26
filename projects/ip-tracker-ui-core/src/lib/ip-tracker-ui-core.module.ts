import { NgModule } from '@angular/core';
import { IpTrackerUiCoreComponent } from './ip-tracker-ui-core.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    IpTrackerUiCoreComponent
  ],
  imports: [
    ComponentsModule
  ],
  exports: [
    IpTrackerUiCoreComponent,
    ComponentsModule
  ]
})
export class IpTrackerUiCoreModule { }
