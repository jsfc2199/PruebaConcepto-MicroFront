import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeEditFormComponent } from './employee-edit-form/employee-edit-form.component';

const routes: Routes = [
  {
    path: 'editEmployee',
    component: EmployeeEditFormComponent
  },
  {
    path: '',
    redirectTo: 'editEmployee',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditEmployeeRoutingModule { }
