import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonThingsService {

  constructor() { }

  private employeeId = new BehaviorSubject<number>(0)

  public employeeIdInfo = this.employeeId.asObservable()

  //Enviamos la info del id clickeado por el micro front de employee Tab
  sendEmployeeId(id: number){
    this.employeeId.next(id);
  }
}
