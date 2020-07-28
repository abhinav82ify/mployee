import { Component, OnInit } from '@angular/core';
import { EmployeeFilterService } from 'src/app/services/employee-filter/employee-filter.service';

import { EmployeeFilterCriteria } from '../../../../models/employee-filter-criteria';

@Component({
  selector: 'mpl-employee-filter',
  templateUrl: './employee-filter.component.html',
  styleUrls: ['./employee-filter.component.scss'],
})
export class EmployeeFilterComponent implements OnInit {
  employeeFilterCriteria: EmployeeFilterCriteria;
  isFilterCriteriaLoading: boolean = false;

  selectedEmployeeFilterCriteria: EmployeeFilterCriteria = new EmployeeFilterCriteria();

  constructor(private employeeFilterService: EmployeeFilterService) {}

  ngOnInit(): void {
    this.isFilterCriteriaLoading = true;
    this.employeeFilterService.getEmployeeFilterCriteria().subscribe((data) => {
      this.employeeFilterCriteria = { ...data };
      console.log(this.employeeFilterCriteria);
      this.isFilterCriteriaLoading = false;
    });
  }

  onTechnologyChange($event) {
    this.selectedEmployeeFilterCriteria.technologies = [...$event];
  }

  onSkillsChange($event) {
    this.selectedEmployeeFilterCriteria.skills = [...$event];
  }

  onLocationChange($event) {
    this.selectedEmployeeFilterCriteria.locations = [...$event];
  }

  onExperienceChange($event) {
    this.selectedEmployeeFilterCriteria.minExperience = $event.from;
    this.selectedEmployeeFilterCriteria.maxExperience = $event.to;
  }

  filterEmployees() {}
}
