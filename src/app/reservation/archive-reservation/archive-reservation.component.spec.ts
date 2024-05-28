import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveReservationComponent } from './archive-reservation.component';

describe('ArchiveReservationComponent', () => {
  let component: ArchiveReservationComponent;
  let fixture: ComponentFixture<ArchiveReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
