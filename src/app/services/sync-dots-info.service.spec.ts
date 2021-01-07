import { TestBed } from '@angular/core/testing';

import { SyncDotsInfoService } from './sync-dots-info.service';

describe('SyncDotsInfoService', () => {
  let service: SyncDotsInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyncDotsInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
