import { TestBed } from '@angular/core/testing';

import { RestoAuthGuardService } from './resto-auth-guard.service';

describe('RestoAuthGuardService', () => {
  let service: RestoAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestoAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
