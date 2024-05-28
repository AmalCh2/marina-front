import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheBateauChoisitComponent } from './fiche-bateau-choisit.component';

describe('FicheBateauChoisitComponent', () => {
  let component: FicheBateauChoisitComponent;
  let fixture: ComponentFixture<FicheBateauChoisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheBateauChoisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheBateauChoisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
