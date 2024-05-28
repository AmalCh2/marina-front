import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheSejourComponent } from './fiche-sejour.component';

describe('FicheSejourComponent', () => {
  let component: FicheSejourComponent;
  let fixture: ComponentFixture<FicheSejourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheSejourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheSejourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
