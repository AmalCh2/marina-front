import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTarifComponent } from './ajouter-tarif.component';

describe('AjouterTarifComponent', () => {
  let component: AjouterTarifComponent;
  let fixture: ComponentFixture<AjouterTarifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTarifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
