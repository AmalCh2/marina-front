import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMvtBateauComponent } from './ajouter-mvt-bateau.component';

describe('AjouterMvtBateauComponent', () => {
  let component: AjouterMvtBateauComponent;
  let fixture: ComponentFixture<AjouterMvtBateauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterMvtBateauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterMvtBateauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
