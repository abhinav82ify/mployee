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

  it('should create mock db', () => {
    const db = service.createDb();

    expect(db.employees.length).toEqual(100);
    expect(db.locations.length).toEqual(8);
    expect(db.technologies.length).toEqual(3);
    expect(db.skills.length).toEqual(2);
  });
});
