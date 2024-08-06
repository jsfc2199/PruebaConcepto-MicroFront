import { Component, Input, inject } from '@angular/core';
import { CommonThingsService, Employee } from '@commonThings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
})
export class EmployeeCardComponent {

  @Input() employees: Employee[] = []

  private commonThings = inject(CommonThingsService)
  private router = inject(Router)

  employeeDetails(id: number){
    const data = id
    this.commonThings.setItem('id', data)
    this.router.navigate(['/employeeId', id]);
  }
}
