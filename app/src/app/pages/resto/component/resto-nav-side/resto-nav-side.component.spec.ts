import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoNavSideComponent } from './resto-nav-side.component';

describe('RestoNavSideComponent', () => {
  let component: RestoNavSideComponent;
  let fixture: ComponentFixture<RestoNavSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoNavSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoNavSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
