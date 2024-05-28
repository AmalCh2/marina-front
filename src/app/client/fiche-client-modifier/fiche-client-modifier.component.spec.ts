import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheClientModifierComponent } from './fiche-client-modifier.component';

describe('FicheClientModifierComponent', () => {
  let component: FicheClientModifierComponent;
  let fixture: ComponentFixture<FicheClientModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheClientModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheClientModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
