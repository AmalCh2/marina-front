import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheBateauModifierComponent } from './fiche-bateau-modifier.component';

describe('FicheBateauModifierComponent', () => {
  let component: FicheBateauModifierComponent;
  let fixture: ComponentFixture<FicheBateauModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheBateauModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheBateauModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
