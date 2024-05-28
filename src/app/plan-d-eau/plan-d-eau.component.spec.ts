import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDEauComponent } from './plan-d-eau.component';

describe('PlanDEauComponent', () => {
  let component: PlanDEauComponent;
  let fixture: ComponentFixture<PlanDEauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanDEauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
