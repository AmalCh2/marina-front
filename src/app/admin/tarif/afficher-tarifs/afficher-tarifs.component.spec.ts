import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherTarifsComponent } from './afficher-tarifs.component';

describe('AfficherTarifsComponent', () => {
  let component: AfficherTarifsComponent;
  let fixture: ComponentFixture<AfficherTarifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherTarifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherTarifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
