import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class WishListService {
    static GetWishList(): any {
        throw new Error("Method not implemented.");
    }
    constructor(private http: HttpClient) { }
    wishlist = [];

    addToWishList(product) {
        this.wishlist.push(product);
    }

    getWishList() {
        return this.wishlist;
    }

    clearWishList() {
        this.wishlist = [];
        return this.wishlist;
    }
}