import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableNetworksTableComponent } from './available-networks-table.component';

describe('AvailableNetworksTableComponent', () => {
  let component: AvailableNetworksTableComponent;
  let fixture: ComponentFixture<AvailableNetworksTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableNetworksTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableNetworksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
