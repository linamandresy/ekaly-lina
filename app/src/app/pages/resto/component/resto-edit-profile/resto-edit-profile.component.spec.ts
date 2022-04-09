import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoEditProfileComponent } from './resto-edit-profile.component';

describe('RestoEditProfileComponent', () => {
  let component: RestoEditProfileComponent;
  let fixture: ComponentFixture<RestoEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
