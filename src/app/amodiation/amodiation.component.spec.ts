import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmodiationComponent } from './amodiation.component';

describe('AmodiationComponent', () => {
  let component: AmodiationComponent;
  let fixture: ComponentFixture<AmodiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmodiationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmodiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
