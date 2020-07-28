import { Component, OnInit } from '@angular/core';
import { EmployeeFilterService } from 'src/app/services/employee-filter/employee-filter.service';

import { EmployeeFilterCriteria } from '@/app/models/employee-filter-criteria';

@Component({
  selector: 'mpl-employee-filter',
  templateUrl: './employee-filter.component.html',
  styleUrls: ['./employee-filter.component.scss']
})
export class EmployeeFilterComponent implements OnInit {
  employeeFilterCriteria: EmployeeFilterCriteria;
  isFilterCriteriaLoading: boolean = false;

  constructor(private employeeFilterService: EmployeeFilterService) { }

  ngOnInit(): void {
    this.isFilterCriteriaLoading = true;
    this.employeeFilterService.getEmployeeFilterCriteria().subscribe(data => {
      this.employeeFilterCriteria = { ...data }
      console.log(this.employeeFilterCriteria);
      this.isFilterCriteriaLoading = false;
    });
  }

}
