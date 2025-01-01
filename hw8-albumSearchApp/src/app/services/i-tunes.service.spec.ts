import { TestBed } from '@angular/core/testing';

import { ITunesService } from './i-tunes.service';

describe('ITunesService', () => {
  let service: ITunesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ITunesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
