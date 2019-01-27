import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationInfoBannerComponent } from './station-info-banner.component';

describe('StationInfoBannerComponent', () => {
  let component: StationInfoBannerComponent;
  let fixture: ComponentFixture<StationInfoBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationInfoBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationInfoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
