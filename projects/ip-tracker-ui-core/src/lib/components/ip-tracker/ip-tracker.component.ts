import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IpService } from '../../service/index';
import { IpData } from '../../interfaces/index';

@Component({
  selector: 'lib-ip-tracker',
  templateUrl: './ip-tracker.component.html',
  styleUrls: ['./ip-tracker.component.scss']
})
export class IpTrackerComponent implements OnInit {
  @Output() ipDataChange = new EventEmitter<IpData>();

  constructor(private ipService: IpService) {}

  onSearchIp(ipAddress: string): void {
    this.ipService.fetchIpData(ipAddress).subscribe(
      (data: IpData) => {
        this.ipDataChange.emit(data);
        console.log('IP Data:', data);
      },
      (error) => {
        console.error('Error fetching IP data:', error);
      }
    );
  }

  ngOnInit(): void {}
}
