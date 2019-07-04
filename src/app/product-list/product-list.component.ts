import { Component } from '@angular/core';

import { products } from '../products';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})

export class ProductlistComponent {
    products = products;

    constructor() { }

    share() {
        window.alert('The product has been shared');
    }

    onNotity() {
        window.alert('You will be notified!');
    }
}