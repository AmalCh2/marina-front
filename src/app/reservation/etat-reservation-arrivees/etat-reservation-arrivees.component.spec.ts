import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatReservationArriveesComponent } from './etat-reservation-arrivees.component';

describe('EtatReservationArriveesComponent', () => {
  let component: EtatReservationArriveesComponent;
  let fixture: ComponentFixture<EtatReservationArriveesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatReservationArriveesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatReservationArriveesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
