import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoListeCommandeComponent } from './resto-liste-commande.component';

describe('RestoListeCommandeComponent', () => {
  let component: RestoListeCommandeComponent;
  let fixture: ComponentFixture<RestoListeCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoListeCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoListeCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
