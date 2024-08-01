import { Component, Input, inject } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';
import { CommonThingsService } from '@commonThings';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {

  @Input() employees: Employee[] = []

  private commonThings = inject(CommonThingsService)

  employeeDetails(id: number){
    this.commonThings.sendEmployeeId(id)

    //TODO: Ir al MF de employee by Id
  }
}
