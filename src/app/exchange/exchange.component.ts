import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './../currency.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  currencies;
  currency1;
  currency2;
  currency1Value: number;
  currency2Value: number;
  currency3Value: number;
  Observer;
  checker1;
  checker2;
  currency3;
  form: FormGroup;
  arrayForm: FormGroup;
  currencySum = 0;
  oneCurrency;

  constructor(private currencyService: CurrencyService, private http: HttpClient, private formBuilder: FormBuilder) {
    this.currencies = currencyService.getCurrencies();
    this.Observer = new Observable(this.change);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      input: ''
    });
    this.arrayForm = this.formBuilder.group({
      input: this.formBuilder.array([this.inputCreation()])
    })
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

  onKeyUp2(value) {
    this.currency2Value = value;
  }

  firstInput() {
    this.checker1 = true;
    this.checker2 = false;
  }

  secondInput() {
    this.checker1 = false;
    this.checker2 = true;
  }

  change() {
    if (this.currency1 && this.currency2) {
      if (this.checker1) {
        const url = `https://api.exchangeratesapi.io/latest?base=${this.currency1}&symbols=${this.currency2}`;
        this.http.get(url).subscribe(value => {
          this.updateCurrency2Value(value);
        });
      } else if (this.checker2) {
        const url = `https://api.exchangeratesapi.io/latest?base=${this.currency2}&symbols=${this.currency1}`;
        this.http.get(url).subscribe(value => {
          this.updateCurrency1Value(value);
        });
      }
    }
  }

  updateCurrency1Value(value) {
    let currencyValue = +Object.values(value.rates);
    this.currency1Value = this.currency2Value * currencyValue;
  }

  updateCurrency2Value(value) {
    let currencyValue = +Object.values(value.rates);
    this.currency2Value = this.currency1Value * currencyValue;
  }

  keyUp3(value) {
    this.currency3Value = value;
  }

  onChange3(value) {
    this.currency3 = value;
  }

  get inputs() {
    return (this.arrayForm.get('input') as FormArray).controls;
  }

  inputCreation() {
    return this.formBuilder.control('')
  }

  addCurrency() {
    const control = this.arrayForm.get('input') as FormArray;
    control.push(this.inputCreation());
  }

  sumCurrencies() {
    if (this.currency3) {
      const url = ` https://api.exchangeratesapi.io/latest?base=${'USD'}&symbols=${this.currency3}`;
      this.http.get(url).subscribe(value => {
        this.updateCurrency3Value(value);
        console.log(value);
        this.currencySum += this.oneCurrency;
        console.log(this.currencySum);
      });
    }
  }

  updateCurrency3Value(value) {
    let currencyValue = +Object.values(value.rates);
    this.oneCurrency = this.currency3Value * currencyValue;
  }
}
