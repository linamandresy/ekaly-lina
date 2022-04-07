import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoAccueilComponent } from './resto-accueil.component';

describe('RestoAccueilComponent', () => {
  let component: RestoAccueilComponent;
  let fixture: ComponentFixture<RestoAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
