import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherFacturesComponent } from './rechercher-factures.component';

describe('RechercherFacturesComponent', () => {
  let component: RechercherFacturesComponent;
  let fixture: ComponentFixture<RechercherFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherFacturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
