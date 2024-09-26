import { TestBed } from '@angular/core/testing';

import { IpTrackerUiCoreService } from './ip-tracker-ui-core.service';

describe('IpTrackerUiCoreService', () => {
  let service: IpTrackerUiCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpTrackerUiCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
