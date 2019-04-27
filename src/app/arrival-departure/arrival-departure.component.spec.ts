import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalDepartureComponent } from './arrival-departure.component';

describe('ArrivalDepartureComponent', () => {
  let component: ArrivalDepartureComponent;
  let fixture: ComponentFixture<ArrivalDepartureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrivalDepartureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivalDepartureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
