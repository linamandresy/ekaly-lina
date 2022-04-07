import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoLogInComponent } from './resto-log-in.component';

describe('RestoLogInComponent', () => {
  let component: RestoLogInComponent;
  let fixture: ComponentFixture<RestoLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoLogInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
