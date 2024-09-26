import { Component } from '@angular/core';
import { IpData } from '@ip-tracker/ui-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ip-tracker-angular';

  public ipData: IpData = {
    ip: '192.168.1.1',
    location: {
      country: 'US',
      city: 'Mountain View',
      timezone: 'UTC -08:00',
      lat: 37.3861,
      lng: -122.0839
    },
    isp: 'Google LLC'
  };

  onIpDataChange(data: IpData): void {
    this.ipData = data;
  }
}

