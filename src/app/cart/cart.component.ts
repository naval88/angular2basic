import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	items;
	itemInCart;

	constructor(private cartService:CartService) { 
		this.items = this.cartService.getCart();
		console.log(this.items);
		//console.log(this.items[0].name)
	}

	ngOnInit() {
	}

	removeItem(item_id) {
		this.cartService.removeItemFromCart(item_id);	
		this.cartService.getCart();	
	}
}
