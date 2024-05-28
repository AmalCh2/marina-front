import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDroitsDAccesComponent } from './modifier-droits-d-acces.component';

describe('ModifierDroitsDAccesComponent', () => {
  let component: ModifierDroitsDAccesComponent;
  let fixture: ComponentFixture<ModifierDroitsDAccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierDroitsDAccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierDroitsDAccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
