import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveSejourComponent } from './archive-sejour.component';

describe('ArchiveSejourComponent', () => {
  let component: ArchiveSejourComponent;
  let fixture: ComponentFixture<ArchiveSejourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveSejourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveSejourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
