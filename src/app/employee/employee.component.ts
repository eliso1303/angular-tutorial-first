import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees$;
  employee = {
    id: '',
    name: '',
    salary: null,
    age: null
  };
  employeeForm;
  updetedEmployee;

  constructor(private employeesService: EmployeesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {

    this.employeeForm = formBuilder.group({
      name: [this.employee.name, [Validators.required]],
      salary: [this.employee.salary, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      age: [this.employee.age, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    });
    this.activatedRoute.paramMap.subscribe(value => {
      const employeeId = +value.get('id');
      this.employeesService.getEmployeeById(employeeId).subscribe(employee => {
        this.employee = employee;
        if (!this.employee) {
          router.navigate(['error']);
        }
      });

    });
  }

  ngOnInit() {
    this.employees$ = this.employeesService.getEmployees();
  }

  updateEmployee() {
    this.updetedEmployee = {
      name: this.employeeForm.get('name').value,
      salary: this.employeeForm.get('salary').value,
      age: this.employeeForm.get('age').value
    }
    this.employeesService.updateEmployee(this.employee.id, this.updetedEmployee)
      .subscribe((newEmployee: any) => {
        this.employee.age = newEmployee.age;
        this.employee.name = newEmployee.name;
        this.employee.salary = newEmployee.salary;
        this.router.navigate(['/employees']);
      });
  }
}
