import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBateauComponent } from './ajouter-bateau.component';

describe('AjouterBateauComponent', () => {
  let component: AjouterBateauComponent;
  let fixture: ComponentFixture<AjouterBateauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterBateauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterBateauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
