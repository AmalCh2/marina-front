import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTarifForfaitComponent } from './ajouter-tarif-forfait.component';

describe('AjouterTarifForfaitComponent', () => {
  let component: AjouterTarifForfaitComponent;
  let fixture: ComponentFixture<AjouterTarifForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTarifForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTarifForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
