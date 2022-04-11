import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCommandesComponent } from './new-commandes.component';

describe('NewCommandesComponent', () => {
  let component: NewCommandesComponent;
  let fixture: ComponentFixture<NewCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCommandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
