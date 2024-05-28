import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEmplacementComponent } from './ajouter-emplacement.component';

describe('AjouterEmplacementComponent', () => {
  let component: AjouterEmplacementComponent;
  let fixture: ComponentFixture<AjouterEmplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterEmplacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEmplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
