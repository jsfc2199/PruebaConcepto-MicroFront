import { Component, inject } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';
import { CommonThingsService } from '@commonThings';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {

  employee?: Employee;
  employeeImg = this.employee?.profile_image ?? 'https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'

  private commonThings = inject(CommonThingsService)
  private employeeService = inject(EmployeeService)

  ngOnInit(): void {
    // this.commonThings.employeeIdInfo
    // .subscribe(resp => console.log(resp))
    this.employeeService.getEmployeeById(1)
    .subscribe(resp => {
      this.employee = resp
    })
  }


}
