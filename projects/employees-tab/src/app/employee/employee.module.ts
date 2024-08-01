import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeesRoutingModule } from './employees-routing.module';



@NgModule({
  declarations: [
    EmployeeCardComponent,
    EmployeeTableComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeeModule { }
