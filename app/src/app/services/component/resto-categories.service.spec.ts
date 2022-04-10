import { TestBed } from '@angular/core/testing';

import { RestoCategoriesService } from './resto-categories.service';

describe('RestoCategoriesService', () => {
  let service: RestoCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestoCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
