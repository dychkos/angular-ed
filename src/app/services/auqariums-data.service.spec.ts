import { TestBed } from '@angular/core/testing';

import { AquariumsDataService } from './aquariums-data.service';

describe('AuqariumsDataService', () => {
  let service: AquariumsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AquariumsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
