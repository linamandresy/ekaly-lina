import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllPlatComponent } from './list-all-plat.component';

describe('ListAllPlatComponent', () => {
  let component: ListAllPlatComponent;
  let fixture: ComponentFixture<ListAllPlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllPlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
