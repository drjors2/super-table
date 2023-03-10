import { TestBed } from '@angular/core/testing';

import { PeriodicElemStoreService } from './periodic-elem-store.service';

describe('PeriodicElemStoreService', () => {
  let service: PeriodicElemStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodicElemStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
