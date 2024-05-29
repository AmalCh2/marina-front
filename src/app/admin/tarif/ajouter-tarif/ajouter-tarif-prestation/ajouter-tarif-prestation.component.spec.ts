import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTarifPrestationComponent } from './ajouter-tarif-prestation.component';

describe('AjouterTarifPrestationComponent', () => {
  let component: AjouterTarifPrestationComponent;
  let fixture: ComponentFixture<AjouterTarifPrestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTarifPrestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTarifPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
