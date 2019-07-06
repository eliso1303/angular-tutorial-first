import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CartService {
  static getShippingCosts(): any {
    throw new Error("Method not implemented.");
  }
    constructor(private http: HttpClient) { }
    items = [];

    addToCart(product) {
        this.items.push(product);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }

    clearItem(product) {
        this.items.splice(this.items.indexOf(product), 1);
    }

    getShippingCosts() {
        return this.http.get('/assets/shipping.json');
    }
}