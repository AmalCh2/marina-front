import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherSejourComponent } from './rechercher-sejour.component';

describe('RechercherSejourComponent', () => {
  let component: RechercherSejourComponent;
  let fixture: ComponentFixture<RechercherSejourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherSejourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherSejourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
