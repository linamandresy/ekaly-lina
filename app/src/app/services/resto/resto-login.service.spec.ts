import { TestBed } from '@angular/core/testing';

import { RestoLoginService } from './resto-login.service';

describe('RestoLoginService', () => {
  let service: RestoLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestoLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
