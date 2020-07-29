import { TestBed } from '@angular/core/testing';

import { EmployeeFilterService } from './employee-filter.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EmployeeFilterService', () => {
  let service: EmployeeFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EmployeeFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
