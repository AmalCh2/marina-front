import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherDroitsDAccesComponent } from './afficher-droits-d-acces.component';

describe('AfficherDroitsDAccesComponent', () => {
  let component: AfficherDroitsDAccesComponent;
  let fixture: ComponentFixture<AfficherDroitsDAccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherDroitsDAccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherDroitsDAccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
