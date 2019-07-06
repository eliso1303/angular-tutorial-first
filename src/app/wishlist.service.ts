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

    addToWishList(wish, inWishList) {
        if(!this.wishlist.includes(wish)){
            this.wishlist.push(wish);
            inWishList = true;
        }
        return inWishList;
    }

    getWishList() {
        return this.wishlist;
    }

    clearWishList() {
        this.wishlist = [];
        return this.wishlist;
    }

    clearWish(productId) {
        this.wishlist.splice(productId, 1);
    }
}