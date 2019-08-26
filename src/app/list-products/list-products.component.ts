import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
	selector: 'app-list-products',
	templateUrl: './list-products.component.html',
	styleUrls: ['./list-products.component.css']
})

export class ListProductsComponent implements OnInit {

	products = products;

	constructor() { }

	ngOnInit() {		
	}
	share() {
			window.alert("Product has been shared");
		}

	onNotify() {
		window.alert('You will be notified when the product goes on sale');
	}
}
