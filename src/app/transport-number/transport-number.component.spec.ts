import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportNumberComponent } from './transport-number.component';

describe('TransportNumberComponent', () => {
  let component: TransportNumberComponent;
  let fixture: ComponentFixture<TransportNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
