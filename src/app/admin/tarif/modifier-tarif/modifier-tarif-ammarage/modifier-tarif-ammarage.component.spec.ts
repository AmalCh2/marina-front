import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTarifAmmarageComponent } from './modifier-tarif-ammarage.component';

describe('ModifierTarifAmmarageComponent', () => {
  let component: ModifierTarifAmmarageComponent;
  let fixture: ComponentFixture<ModifierTarifAmmarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierTarifAmmarageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTarifAmmarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
