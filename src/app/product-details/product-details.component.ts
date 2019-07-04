import { CartService } from "./../cart.service";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from "./../products";

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {
    product;

    constructor(private route: ActivatedRoute, private cartService: CartService) { }
    ngOnInit() { 
        this.route.paramMap.subscribe(params => {
            this.product = products[+params.get('productId')];
        })
    }

    addToCart(product){
        window.alert('your product has been added');
        this.cartService.addToCart(product);
    }
}