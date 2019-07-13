import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees;
  partOfEmployees;
  allPagesNum = 0;
  current = 0;
  pages;

  constructor(private employeesService: EmployeesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.employeesService.getEmployees().subscribe(element => {
      this.employees = element;
      this.partOfEmployees = this.employees.slice(this.current * 10, 10);
      this.allPagesNum = Math.ceil(this.employees.length / 10);
      this.pages = Array(this.allPagesNum).fill(0).map((x, i) => i);

      this.route.queryParams.subscribe(value => {
        if (value.page) {
          this.current = value.page;
        } else {
          this.current = this.current;
        }
        this.partOfEmployees = this.employees.slice(this.current * 10, this.current * 10 + 10);
      });
    });
  }
}
