import { TestBed } from '@angular/core/testing';

import { QueryFunctionService } from './query-function.service';

describe('QueryFunctionService', () => {
  let service: QueryFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
