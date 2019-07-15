import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [
    trigger('openClose', [
      state('show', style({
        left: 0
      })),
      state('hide', style({
        left: '-300px'
      })),
      transition('show <=> hide', [
        animate('0.2s')
      ])
    ])
  ]
})
export class LoaderComponent implements OnInit {

  isLoading = false;

  constructor() { }

  ngOnInit() {
  }

  showLoader() {
    this.isLoading = true;
  }

  hideLoader() {
    this.isLoading = false;
  }
}
