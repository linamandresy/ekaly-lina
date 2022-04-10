import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoListePlatComponent } from './resto-liste-plat.component';

describe('RestoListePlatComponent', () => {
  let component: RestoListePlatComponent;
  let fixture: ComponentFixture<RestoListePlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoListePlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoListePlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
