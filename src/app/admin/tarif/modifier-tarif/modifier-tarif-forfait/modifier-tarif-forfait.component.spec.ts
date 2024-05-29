import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTarifForfaitComponent } from './modifier-tarif-forfait.component';

describe('ModifierTarifForfaitComponent', () => {
  let component: ModifierTarifForfaitComponent;
  let fixture: ComponentFixture<ModifierTarifForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierTarifForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTarifForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
