import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTarifAmmarageComponent } from './ajouter-tarif-ammarage.component';

describe('AjouterTarifAmmarageComponent', () => {
  let component: AjouterTarifAmmarageComponent;
  let fixture: ComponentFixture<AjouterTarifAmmarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTarifAmmarageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTarifAmmarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
