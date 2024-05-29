import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCompteUtilisateurComponent } from './modifier-compte-utilisateur.component';

describe('ModifierCompteUtilisateurComponent', () => {
  let component: ModifierCompteUtilisateurComponent;
  let fixture: ComponentFixture<ModifierCompteUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierCompteUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierCompteUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
