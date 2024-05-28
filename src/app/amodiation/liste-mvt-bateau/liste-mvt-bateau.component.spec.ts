import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMvtBateauComponent } from './liste-mvt-bateau.component';

describe('ListeMvtBateauComponent', () => {
  let component: ListeMvtBateauComponent;
  let fixture: ComponentFixture<ListeMvtBateauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMvtBateauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMvtBateauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
