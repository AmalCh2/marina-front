import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherTarifForfaitComponent } from './afficher-tarif-forfait.component';

describe('AfficherTarifForfaitComponent', () => {
  let component: AfficherTarifForfaitComponent;
  let fixture: ComponentFixture<AfficherTarifForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherTarifForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherTarifForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
