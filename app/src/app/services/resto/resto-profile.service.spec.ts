import { TestBed } from '@angular/core/testing';

import { RestoProfileService } from './resto-profile.service';

describe('RestoProfileService', () => {
  let service: RestoProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestoProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
