import { TestBed } from '@angular/core/testing';

import { UEService } from './ue.service';

describe('UEService', () => {
  let service: UEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
