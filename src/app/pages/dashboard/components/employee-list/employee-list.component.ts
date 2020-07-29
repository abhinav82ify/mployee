import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { EmployeeFilterCriteria } from 'src/app/models/employee-filter-criteria';
import { Employee } from 'src/app/models/employee';
import { EmployeeFilterService } from 'src/app/services/employee-filter/employee-filter.service';
import { UnsubscribeOnDestroyAdapter } from 'src/app/helpers/unsubscribe-on-destroy-adapter';

import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';

@Component({
  selector: 'mpl-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent extends UnsubscribeOnDestroyAdapter
  implements OnInit {
  private employeeFilterCriteria: EmployeeFilterCriteria = new EmployeeFilterCriteria();
  allEmployees: Employee[] = [];
  filteredEmployees: Employee[] = [];

  displayedColumns: string[] = [
    'select',
    'name',
    'designation',
    'technologies',
    'skills',
    'availability',
    'location',
    'relocation',
    'action',
  ];
  selection = new SelectionModel<Employee>(true, []);

  constructor(
    private employeeService: EmployeeService,
    private employeeFilterService: EmployeeFilterService,
    public dialog: MatDialog
  ) {
    super();
  }

  private subscribeToEmployeeFilterCriteria() {
    this.subsink.push(
      this.employeeFilterService.employeeFilterCriteria$.subscribe(
        (criteria) => {
          this.employeeFilterCriteria = { ...criteria };
          this.filterEmployees();
        }
      )
    );
  }

  private populateEmployees() {
    this.subsink.push(
      this.employeeService.getAllEmployees().subscribe((employees) => {
        this.allEmployees = [...employees];
        this.filterEmployees();
      })
    );
  }

  private filterEmployees() {
    if (this.allEmployees.length > 0) {
      this.filteredEmployees = this.employeeService.filterEmployees(
        this.allEmployees,
        this.employeeFilterCriteria
      );
    }
  }

  ngOnInit(): void {
    this.subscribeToEmployeeFilterCriteria();
    this.populateEmployees();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  showEmployeeDetails(employeeData) {
    const dialogRef = this.dialog.open(EmployeeDetailsComponent, {
      width: '60vw',
      height: 'auto',
      data: { employeeData },
    });

    this.subsink.push(dialogRef.afterClosed().subscribe());
  }

  get dataSource() {
    return new MatTableDataSource<Employee>(this.filteredEmployees);
  }
}
