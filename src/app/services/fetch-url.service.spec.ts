import { TestBed } from '@angular/core/testing';

import { FetchUrlService } from './fetch-url.service';

describe('FetchUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchUrlService = TestBed.get(FetchUrlService);
    expect(service).toBeTruthy();
  });
});
