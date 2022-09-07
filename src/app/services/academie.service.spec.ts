import { TestBed } from '@angular/core/testing';

import { AcademieService } from './academie.service';

describe('AcademieService', () => {
  let service: AcademieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
