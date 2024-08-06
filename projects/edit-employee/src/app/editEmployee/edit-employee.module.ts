import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditEmployeeRoutingModule } from './edit-employee-routing.module';
import { EmployeeEditFormComponent } from './employee-edit-form/employee-edit-form.component';

import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    EmployeeEditFormComponent
  ],
  imports: [
    CommonModule,
    EditEmployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditEmployeeModule { }
