import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, BehaviorSubject } from 'rxjs';

import { EmployeeFilterCriteria } from 'src/app/models/employee-filter-criteria';

@Injectable({
  providedIn: 'root',
})
export class EmployeeFilterService {
  constructor(private _http: HttpClient) {}

  private readonly locationsUrl = '/api/locations';
  private readonly technologyUrl = '/api/technologies';
  private readonly skillsUrl = '/api/skills';

  private readonly employeeFilterCriteria = new BehaviorSubject<
    EmployeeFilterCriteria
  >(new EmployeeFilterCriteria());
  employeeFilterCriteria$ = this.employeeFilterCriteria.asObservable();

  getEmployeeFilterCriteria(): Observable<EmployeeFilterCriteria> {
    return forkJoin({
      locations: this._http.get<any>(this.locationsUrl),
      technologies: this._http.get<any>(this.technologyUrl),
      skills: this._http.get<any>(this.skillsUrl),
    });
  }

  updateEmployeeFilterCriteria(criteria: EmployeeFilterCriteria) {
    this.employeeFilterCriteria.next(criteria);
  }
}
