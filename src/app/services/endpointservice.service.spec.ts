import { TestBed } from '@angular/core/testing';

import { EndpointserviceService } from './endpointservice.service';

describe('EndpointserviceService', () => {
  let service: EndpointserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndpointserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
