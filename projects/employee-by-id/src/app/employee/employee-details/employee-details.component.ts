import { Component, inject } from '@angular/core';
import { CommonThingsService, Employee } from '@commonThings';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
})
export class EmployeeDetailsComponent {

  employee?: Employee;
  employeeImg = this.employee?.profile_image ?? 'https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'

  commonThingsSubs = new Subscription()

  private commonThings = inject(CommonThingsService)

  private employeeService = inject(EmployeeService)
  private router = inject(Router)


  ngOnInit(): void {

    const employeeId = this.commonThings.getItem('id')

    this.employeeService.getEmployeeById(employeeId)
    .subscribe(employee => {
        this.employee = employee
       })
  }

  volverACards(){
    this.router.navigate(['/employees']);
  }

  ngOnDestroy(): void {
    this.commonThingsSubs.unsubscribe()
  }

}
