import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpTrackerUiCoreComponent } from './ip-tracker-ui-core.component';

describe('IpTrackerUiCoreComponent', () => {
  let component: IpTrackerUiCoreComponent;
  let fixture: ComponentFixture<IpTrackerUiCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpTrackerUiCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpTrackerUiCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
