import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoNouveauPlatComponent } from './resto-nouveau-plat.component';

describe('RestoNouveauPlatComponent', () => {
  let component: RestoNouveauPlatComponent;
  let fixture: ComponentFixture<RestoNouveauPlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoNouveauPlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoNouveauPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
