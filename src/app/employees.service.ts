import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { map } from 'rxjs/operators';

export interface IEmployee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  host = `http://dummy.restapiexample.com/api/v1`;

  constructor(private http: HttpClient) { }

  getEmployees() {
    const url = `${this.host}/employees`
    return this.http
      .get(url)
      .pipe(map((employees: IEmployee[]) => {
        return employees.map(employee => {
          return {
            id: employee.id,
            name: employee.employee_name,
            salary: employee.employee_salary,
            age: employee.employee_age
          }
        })
      }))
  }

  RegisterEmployees(newEmployee: IEmployee) {
    const url = `${this.host}/create`
    return this.http.post<IEmployee>(url, newEmployee);
  }

  getEmployeeById(id) {
    const url = `${this.host}/employee/${id}`;
    return this.http.get(url)
      .pipe(map((employee: IEmployee) => {
            return {
              id: employee.id,
              name: employee.employee_name,
              salary: employee.employee_salary,
              age: employee.employee_age
            }
      }))
  }

  updateEmployee(id, employee) {
    const url = `${this.host}/update/${id}`;
    return this.http.put(url, employee);
  }

  deleteEmployee(id) {
    const url = `${this.host}/delete/${id}`;
    return this.http.delete(url);
  }
}