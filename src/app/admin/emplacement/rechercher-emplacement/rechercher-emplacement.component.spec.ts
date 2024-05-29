import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherEmplacementComponent } from './rechercher-emplacement.component';

describe('RechercherEmplacementComponent', () => {
  let component: RechercherEmplacementComponent;
  let fixture: ComponentFixture<RechercherEmplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherEmplacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherEmplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
