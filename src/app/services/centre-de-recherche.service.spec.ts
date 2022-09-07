import { TestBed } from '@angular/core/testing';

import { CentreDeRechercheService } from './centre-de-recherche.service';

describe('CentreDeRechercheService', () => {
  let service: CentreDeRechercheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentreDeRechercheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
