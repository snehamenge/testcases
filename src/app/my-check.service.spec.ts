import { TestBed } from '@angular/core/testing';

import { MyCheckService } from './my-check.service';

describe('MyCheckService', () => {
  let service: MyCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
