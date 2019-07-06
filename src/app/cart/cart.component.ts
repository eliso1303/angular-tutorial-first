import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
    items;
    checkedForm;
    constructor(private cartService: CartService,
        private formBuilder: FormBuilder) {
        this.items = this.cartService.getItems();

        this.checkedForm = formBuilder.group({
            name: ['', [Validators.minLength(4), this.forbiddenName()]],
            address: formBuilder.group({
                street: '',
                city: '',
                state: '',
                zipCode: ''
            })
        });
    }
    ngOnInit() { }

    clearItem(productId) {
        this.cartService.clearItem(productId);
    }
    clearCart() {
        this.items = [];
    }

    onSubmit(value) {
        console.log(value);
        this.checkedForm.reset();
    }

    resetForm() {
        this.checkedForm.patchValue({
            name: 'Elizabeth',
        });
    }

    forbiddenName() {
        return (formControl) => {
            return formControl.value === 'Roman' ? { forbidden: { invalid: true } } : null;
        }
    }

    get name() {
        return this.checkedForm.get('name') as FormControl;
    }
}