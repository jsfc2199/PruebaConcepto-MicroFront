import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '@commonThings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  private urlJsonServer = 'http://localhost:3000/employees';

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.patch<Employee>(`${this.urlJsonServer}/${id}`, employee);
  }
}
