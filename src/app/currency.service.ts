import { Injectable } from '@angular/core';
import { data } from './rates';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  result;
  Observer;

  constructor() {
    this.result = this.tansformObjectToArray(data.rates);

    this.Observer = new Observable(this.subscribe());
  }

  tansformObjectToArray(object) {
    const result = [];
    const keys = Object.keys(object);

    for (const key of keys) {
      const value = object[key];
      const item = {
        currency: key,
        value
      };

      result.push(item);
    }

    return result;
  }

  subscribe() {
    return (subscriber) => {
      let i = 0;
      console.log('It\' our method');

      for (const item of this.result) {
        setTimeout(() => {
          subscriber.next(item);
        }, i * 500);

        i++;
      }

      setTimeout(() => {
        subscriber.complete();
      }, i * 500);
    }
  }
}
