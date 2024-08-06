import { Component, Input, inject } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';
import { CommonThingsService } from '@commonThings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {

  @Input() employees: Employee[] = []

  private commonThings = inject(CommonThingsService)
  private router = inject(Router)

  employeeDetails(id: number){
    // this.commonThings.sendEmployeeId(id)

    // sessionStorage.setItem('id', JSON.stringify(id))
    const data = id
    this.commonThings.setItem('id', data)

    //TODO: Ir al MF de employee by Id
    this.router.navigate(['/employeeId', id]);
  }
}
