import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditEmployeeRoutingModule } from './edit-employee-routing.module';
import { EmployeeEditFormComponent } from './employee-edit-form/employee-edit-form.component';


@NgModule({
  declarations: [
    EmployeeEditFormComponent
  ],
  imports: [
    CommonModule,
    EditEmployeeRoutingModule
  ]
})
export class EditEmployeeModule { }
