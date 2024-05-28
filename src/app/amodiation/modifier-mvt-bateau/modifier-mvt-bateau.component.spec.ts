import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMvtBateauComponent } from './modifier-mvt-bateau.component';

describe('ModifierMvtBateauComponent', () => {
  let component: ModifierMvtBateauComponent;
  let fixture: ComponentFixture<ModifierMvtBateauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierMvtBateauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierMvtBateauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
