import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoHeaderComponent } from './resto-header.component';

describe('RestoHeaderComponent', () => {
  let component: RestoHeaderComponent;
  let fixture: ComponentFixture<RestoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
