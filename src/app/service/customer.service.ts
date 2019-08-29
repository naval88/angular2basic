import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private  httpClient:HttpClient) { }

  getCustomers() {
  	return this.httpClient.get('http://127.0.0.1:8081/');
  }
}
