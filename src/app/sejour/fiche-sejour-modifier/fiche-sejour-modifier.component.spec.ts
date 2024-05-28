import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheSejourModifierComponent } from './fiche-sejour-modifier.component';

describe('FicheSejourModifierComponent', () => {
  let component: FicheSejourModifierComponent;
  let fixture: ComponentFixture<FicheSejourModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheSejourModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheSejourModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
