import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {path: 'employee', component: EmployeeDetailsComponent},
  {path: '', redirectTo: 'employee', pathMatch: 'full'},

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
