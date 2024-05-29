import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTarifPrestationComponent } from './modifier-tarif-prestation.component';

describe('ModifierTarifPrestationComponent', () => {
  let component: ModifierTarifPrestationComponent;
  let fixture: ComponentFixture<ModifierTarifPrestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierTarifPrestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTarifPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
