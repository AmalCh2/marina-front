import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherTarifPrestationComponent } from './afficher-tarif-prestation.component';

describe('AfficherTarifPrestationComponent', () => {
  let component: AfficherTarifPrestationComponent;
  let fixture: ComponentFixture<AfficherTarifPrestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherTarifPrestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherTarifPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
