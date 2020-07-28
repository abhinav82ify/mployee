import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

import { EmployeeFilterCriteria } from '@/app/models/employee-filter-criteria';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFilterService {

  constructor(private _http: HttpClient) { }

  private locationsUrl = '/api/locations';
  private technologyUrl = '/api/technologies';
  private skillsUrl = '/api/skills';

  getEmployeeFilterCriteria(): Observable<EmployeeFilterCriteria> {
    return forkJoin({
      locations: this._http.get<any>(this.locationsUrl),
      technologies: this._http.get<any>(this.technologyUrl),
      skills: this._http.get<any>(this.skillsUrl)
    });
  }
}
