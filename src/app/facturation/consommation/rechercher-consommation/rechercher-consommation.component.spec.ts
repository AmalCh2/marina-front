import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherConsommationComponent } from './rechercher-consommation.component';

describe('RechercherConsommationComponent', () => {
  let component: RechercherConsommationComponent;
  let fixture: ComponentFixture<RechercherConsommationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherConsommationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherConsommationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
