import { TestBed } from '@angular/core/testing';

import { AllVodService } from './api.service';

describe('AllVodService', () => {
  let service: AllVodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllVodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
