import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
    items;
    constructor(private cartService: CartService) {
        this.items = this.cartService.getItems();
    }
    ngOnInit() { }

    clearItem(productId) {
        // this.items.productId = {};
        delete this.items.productId;
        // window.alert(this.items.productId);
    }
    clearCart() {
        this.items = [];
    }
}