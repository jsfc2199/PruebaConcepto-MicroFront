import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../../../employees-tab/src/app/interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  private urlJsonServer = 'http://localhost:3000/employees';

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.urlJsonServer}/${id}`);
  }
}
