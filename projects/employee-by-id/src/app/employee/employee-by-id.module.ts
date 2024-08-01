import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeRoutingModule } from './employee-by-id.routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';



@NgModule({
  declarations: [
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
})
export class EmployeeByIdModule { }
