import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersNavComponent } from './headers-nav.component';

describe('HeadersNavComponent', () => {
  let component: HeadersNavComponent;
  let fixture: ComponentFixture<HeadersNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadersNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
