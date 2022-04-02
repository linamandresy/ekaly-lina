import { TestBed } from '@angular/core/testing';

import { RestoSignupService } from './resto-signup.service';

describe('RestoSignupService', () => {
  let service: RestoSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestoSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
