import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute } from '@angular/router';
import { state, style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  animations: [
    trigger('loader', [
      state('load', style({
        display: 'none'
      })),
      state('unload', style({
        display: 'block'
      })),
      // transition('load => unload', [
      //   animate('0.2s')
      // ])
    ])
  ]
})
export class EmployeesComponent implements OnInit {

  employees;
  partOfEmployees;
  allPagesNum = 0;
  current = 0;
  pages;
  isLoaded = false;

  constructor(private employeesService: EmployeesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.employeesService.getEmployees().subscribe(element => {
      this.employees = element;
      this.isLoaded = true;
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
