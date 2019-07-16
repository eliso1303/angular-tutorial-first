import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    constructor() { }
    items = [];

    addToCart(productId) {
        this.items.push(productId);
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
}