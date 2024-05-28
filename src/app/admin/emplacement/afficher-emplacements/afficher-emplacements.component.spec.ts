import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherEmplacementsComponent } from './afficher-emplacements.component';

describe('AfficherEmplacementsComponent', () => {
  let component: AfficherEmplacementsComponent;
  let fixture: ComponentFixture<AfficherEmplacementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherEmplacementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherEmplacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
