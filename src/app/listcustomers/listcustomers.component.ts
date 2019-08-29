import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service'
@Component({
  selector: 'app-listcustomers',
  templateUrl: './listcustomers.component.html',
  styleUrls: ['./listcustomers.component.css']
})
export class ListcustomersComponent implements OnInit {
  let customers;
  constructor(private customerService : CustomerService) { }

  ngOnInit() {
  	  customers = this.customerService.getCustomers();
  	  console.log("test");
  }
}
