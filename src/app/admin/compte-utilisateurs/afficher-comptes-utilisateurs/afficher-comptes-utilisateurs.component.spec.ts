import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherComptesUtilisateursComponent } from './afficher-comptes-utilisateurs.component';

describe('AfficherComptesUtilisateursComponent', () => {
  let component: AfficherComptesUtilisateursComponent;
  let fixture: ComponentFixture<AfficherComptesUtilisateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherComptesUtilisateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherComptesUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
