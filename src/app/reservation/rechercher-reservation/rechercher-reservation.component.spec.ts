import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherReservationComponent } from './rechercher-reservation.component';

describe('RechercherReservationComponent', () => {
  let component: RechercherReservationComponent;
  let fixture: ComponentFixture<RechercherReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
