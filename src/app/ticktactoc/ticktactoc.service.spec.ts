import { TestBed } from '@angular/core/testing';

import { TicktactocService } from './ticktactoc.service';

describe('TicktactocService', () => {
  let service: TicktactocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicktactocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
