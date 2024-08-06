import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonThingsService, Employee } from '@commonThings';
import { EmployeeService } from '../../services/employee.service';
import { switchMap, Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-edit-form',
  templateUrl: './employee-edit-form.component.html',
  styleUrl: './employee-edit-form.component.css',
})
export class EmployeeEditFormComponent {
  private fb = inject(FormBuilder);
  private commonService = inject(CommonThingsService);
  private router = inject(Router);
  private employeeService = inject(EmployeeService);
  private activatedRoute = inject(ActivatedRoute);


  public employee: Employee;
  public subscription = new Subscription()
  constructor() {
    this.employee = this.commonService.getItem('employee');
  }

  public editingForm = this.fb.group({
    employee_name: ['', Validators.required],
    employee_age: [
      0,
      [Validators.required, Validators.min(18), Validators.max(75)],
    ],
    employee_salary: [0, Validators.required],
  });

  ngOnInit(): void {
    const { employee_name, employee_age, employee_salary }: Employee =
      this.employee;

    this.editingForm.patchValue({
      employee_name,
      employee_age,
      employee_salary,
    });
  }

  updateEmployee() {
    if (!this.editingForm.valid) return;

    const employeeForm = this.editingForm.value;

    const employeeUpdated = {
      ...employeeForm,
      id: this.employee.id,
      profile_image: this.employee.profile_image,
      employee_anual_salary:
        this.editingForm.controls['employee_salary'].value! * 12,
    } as Employee;

    this.subscription = this.activatedRoute.params
      .pipe(
        switchMap(({ id }) =>
          this.employeeService.updateEmployee(id, employeeUpdated)
        )
      )
      .subscribe((employee) => {
        Swal.fire({
          icon: 'success',
          title: 'Updated',
          text: `Employee ${employee.employee_name} updated successfully!`,
        });
      });

    this.router.navigateByUrl('employees');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
