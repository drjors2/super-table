import { TestBed } from '@angular/core/testing';

import { GenericStoreService } from './generic-store.service';

describe('GenericStoreService', () => {
  let service: GenericStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
