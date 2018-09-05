import { TestBed, inject } from '@angular/core/testing';

import { SiginOutService } from './sigin-out.service';

describe('SiginOutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiginOutService]
    });
  });

  it('should be created', inject([SiginOutService], (service: SiginOutService) => {
    expect(service).toBeTruthy();
  }));
});
