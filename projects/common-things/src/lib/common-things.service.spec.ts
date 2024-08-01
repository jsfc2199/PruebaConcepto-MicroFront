import { TestBed } from '@angular/core/testing';

import { CommonThingsService } from './common-things.service';

describe('CommonThingsService', () => {
  let service: CommonThingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonThingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
