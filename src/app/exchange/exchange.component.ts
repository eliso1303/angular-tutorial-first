import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './../currency.service';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  currencies;
  currency1;
  currency2;
  currency1Value:number;
  currency2Value:number;
  Observer;
  rates;
  constructor(private currencyService: CurrencyService,
    private http: HttpClient,
    private formBuilder: FormBuilder) {
    this.currencies = currencyService.getCurrencies();
    this.Observer = new Observable(this.change);
  }

  ngOnInit() {
  }

  onChange(value) {
    this.currency1 = value;
  }

  onKeyUp(value) {
    this.currency1Value = value;
  }

  onChange2(value) {
    this.currency2 = value;
  }

  change() {
    console.log(this.currency1 +' '+this.currency1Value+' '+this.currency2);
    if (this.currency1 && this.currency2) {
      const url = ` https://api.exchangeratesapi.io/latest?base=${this.currency1}&symbols=${this.currency2}`;

      this.http.get(url).subscribe(value => {
        this.updateCurrency2Value(value);
      });
    }
  }
  updateCurrency2Value(value) {
    this.currency2Value = 10;
  }
}