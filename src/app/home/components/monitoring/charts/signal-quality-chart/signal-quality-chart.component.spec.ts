import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalQualityChartComponent } from './signal-quality-chart.component';

describe('SignalQualityChartComponent', () => {
  let component: SignalQualityChartComponent;
  let fixture: ComponentFixture<SignalQualityChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalQualityChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalQualityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
