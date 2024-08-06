import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '@commonThings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) {}

  private urlJsonServer = 'http://localhost:3000/employees';

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.urlJsonServer);
  }
}
