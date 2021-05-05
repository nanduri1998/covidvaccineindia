import { TestBed } from '@angular/core/testing';

import { GetStatesService } from './get-states.service';

describe('GetStatesService', () => {
  let service: GetStatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
