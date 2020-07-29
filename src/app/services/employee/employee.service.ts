import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee } from '../../models/employee';
import { HttpClient } from '@angular/common/http';
import { EmployeeFilterCriteria } from 'src/app/models/employee-filter-criteria';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly employeesUrl = `/api/employees`;

  constructor(private _http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this._http.get<Employee[]>(`${this.employeesUrl}`);
  }

  filterEmployees(
    employees: Employee[],
    criteria: EmployeeFilterCriteria
  ): Employee[] {
    let criteriaObj = new EmployeeFilterCriteria(criteria);

    if (!criteriaObj.isPopulated()) {
      return employees;
    }

    return employees.filter((emp) => {
      //filter using baseLocation and currentLocation
      let matchesCriteria =
        criteriaObj.locations.length === 0 ||
        criteriaObj.locations.includes(emp.baseLocation) ||
        criteriaObj.locations.includes(emp.currentLocation);

      if (!matchesCriteria) {
        return matchesCriteria;
      }

      //filter using skills
      matchesCriteria =
        criteriaObj.skills.length === 0 ||
        criteriaObj.skills.every((skill) => emp.skills.includes(skill));

      if (!matchesCriteria) {
        return matchesCriteria;
      }

      //filter using technologies
      matchesCriteria =
        criteriaObj.technologies.length === 0 ||
        criteriaObj.technologies.every((tech) =>
          emp.technologies.includes(tech)
        );

      if (!matchesCriteria) {
        return matchesCriteria;
      }

      //filter using yearsOfExperience
      matchesCriteria =
        criteriaObj.minExperience <= emp.yearsOfExperience &&
        emp.yearsOfExperience <= criteriaObj.maxExperience;

      return matchesCriteria;
    });
  }
}
