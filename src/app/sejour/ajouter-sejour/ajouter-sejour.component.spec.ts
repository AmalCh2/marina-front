import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSejourComponent } from './ajouter-sejour.component';

describe('AjouterSejourComponent', () => {
  let component: AjouterSejourComponent;
  let fixture: ComponentFixture<AjouterSejourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterSejourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterSejourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
