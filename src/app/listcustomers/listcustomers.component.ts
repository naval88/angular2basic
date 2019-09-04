import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { RegisterService } from '../service/register.service';

@Component({
	selector: 'app-listcustomers',
	templateUrl: './listcustomers.component.html',
	styleUrls: ['./listcustomers.component.css']
})
export class ListcustomersComponent implements OnInit {
	users;
	constructor(private customerService : CustomerService,
				private regService : RegisterService) { }

	ngOnInit() {
		console.log("test");
		this.customerService.getUserData().subscribe((response: any) => {	
				this.users =  response.data;		
		});
	}
}
