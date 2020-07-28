import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@/app/shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeFilterComponent } from './components/employee-filter/employee-filter.component';

const routes: Routes = [{ path: '', component: DashboardComponent}];
@NgModule({
  declarations: [DashboardComponent, EmployeeFilterComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class DashboardModule {}