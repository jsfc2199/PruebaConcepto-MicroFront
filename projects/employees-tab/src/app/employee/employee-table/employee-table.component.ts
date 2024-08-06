import { Component, inject } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '@commonThings';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
})
export class EmployeeTableComponent {
  employees: Employee[] = [];
  loading: boolean = true;

  employeeService = inject(EmployeesService)

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.employeeService.getAllEmployees()
    .subscribe(employees => {
      this.employees = employees
      this.loading = false
    })
  }
}
