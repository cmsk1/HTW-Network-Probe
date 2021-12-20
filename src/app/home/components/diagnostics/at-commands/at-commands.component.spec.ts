import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtCommandsComponent } from './at-commands.component';

describe('AtCommandsComponent', () => {
  let component: AtCommandsComponent;
  let fixture: ComponentFixture<AtCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtCommandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
