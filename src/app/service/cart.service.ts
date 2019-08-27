import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CartService {
	items = [];
	constructor() { }

	addCart(product) {
		this.items.push(product);
	}

	clearCart() {
		this.items = []
		return this.items;
	}

	getCart() {
		return this.items;
	}

	removeItemFromCart(item_id)
	{		
		return this.items.splice(item_id,1)
	}
}
