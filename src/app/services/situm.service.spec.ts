import { TestBed } from '@angular/core/testing';

import { SitumService } from './situm.service';

describe('SitumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SitumService = TestBed.get(SitumService);
    expect(service).toBeTruthy();
  });
});
