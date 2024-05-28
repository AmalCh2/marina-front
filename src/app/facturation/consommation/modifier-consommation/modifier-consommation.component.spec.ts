import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierConsommationComponent } from './modifier-consommation.component';

describe('ModifierConsommationComponent', () => {
  let component: ModifierConsommationComponent;
  let fixture: ComponentFixture<ModifierConsommationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierConsommationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierConsommationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
