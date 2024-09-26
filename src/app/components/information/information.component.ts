import { Component, Input} from '@angular/core';
import { IpData } from "@ip-tracker/ui-core";

@Component({
  selector: 'ip-tracker-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  @Input() public data: IpData | null;
  constructor() {
    this.data = null;
  }
}
