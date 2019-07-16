import { CartService } from './cart.service';

describe('Cart Service tests', () => {
    let service: CartService

    beforeEach(() => {
        service = new CartService();
    })

    it('item should be array', () => {
        expect(service.items).toEqual([]);
        expect(service.items.length).toBe(0);
    })

    it('Method addToCart should add item in items array', () => {
        service.addToCart(5);
        expect(service.items[0]).toBe(5); 
    })

    it('Method getItems should return items array', () => {
        expect(service.getItems()).toBe(service.items);
    })

    it('Method clearCart should clear all items from cart', () => {
        expect(service.items.length).toBe(0);
        expect(service.clearCart()).toBe(service.items);
    })

    it('Method clearItem should delete concrete item from items array', () => {
        service.clearItem(5);
        expect(service.items[5]).toBe(undefined);
    })
});