import { Component, inject } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css'
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
