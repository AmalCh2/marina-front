import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnulerSejourComponent } from './annuler-sejour.component';

describe('AnnulerSejourComponent', () => {
  let component: AnnulerSejourComponent;
  let fixture: ComponentFixture<AnnulerSejourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnulerSejourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnulerSejourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
