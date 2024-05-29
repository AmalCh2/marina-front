import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherTarifAmmarageComponent } from './afficher-tarif-ammarage.component';

describe('AfficherTarifAmmarageComponent', () => {
  let component: AfficherTarifAmmarageComponent;
  let fixture: ComponentFixture<AfficherTarifAmmarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherTarifAmmarageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherTarifAmmarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
