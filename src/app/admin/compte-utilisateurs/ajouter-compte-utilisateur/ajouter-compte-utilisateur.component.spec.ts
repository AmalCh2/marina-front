import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCompteUtilisateurComponent } from './ajouter-compte-utilisateur.component';

describe('AjouterCompteUtilisateurComponent', () => {
  let component: AjouterCompteUtilisateurComponent;
  let fixture: ComponentFixture<AjouterCompteUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterCompteUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCompteUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
