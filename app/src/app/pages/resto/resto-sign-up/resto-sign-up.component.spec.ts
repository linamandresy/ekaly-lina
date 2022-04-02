import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoSignUpComponent } from './resto-sign-up.component';

describe('RestoSignUpComponent', () => {
  let component: RestoSignUpComponent;
  let fixture: ComponentFixture<RestoSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
