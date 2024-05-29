import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEmplacementComponent } from './modifier-emplacement.component';

describe('ModifierEmplacementComponent', () => {
  let component: ModifierEmplacementComponent;
  let fixture: ComponentFixture<ModifierEmplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierEmplacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierEmplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
