import { TestBed, inject } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService]
    });
  });

  it('should be created', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
