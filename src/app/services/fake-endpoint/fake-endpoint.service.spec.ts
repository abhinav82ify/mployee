import { TestBed } from '@angular/core/testing';

import { FakeEndpointService } from './fake-endpoint.service';

describe('FakeEndpointService', () => {
  let service: FakeEndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeEndpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
