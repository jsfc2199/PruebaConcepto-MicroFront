import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //cargamos el modulo exportado desde el webpack del MF de employeesTab
    loadChildren: ()=> import('employeesTab/EmployeesTabModule').then((m) => m.EmployeesTabModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
