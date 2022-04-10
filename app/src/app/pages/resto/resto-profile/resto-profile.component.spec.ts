import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoProfileComponent } from './resto-profile.component';

describe('RestoProfileComponent', () => {
  let component: RestoProfileComponent;
  let fixture: ComponentFixture<RestoProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
