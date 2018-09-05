import { TestBed, inject } from '@angular/core/testing';

import { MyitemsService } from './myitems.service';

describe('MyitemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyitemsService]
    });
  });

  it('should be created', inject([MyitemsService], (service: MyitemsService) => {
    expect(service).toBeTruthy();
  }));
});
