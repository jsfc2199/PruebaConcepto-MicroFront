import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'employees',
    //cargamos el modulo exportado desde el webpack del MF de employeesTab
    loadChildren: ()=> import('employeesTab/EmployeeModule').then((m) => m.EmployeeModule)
  },
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
