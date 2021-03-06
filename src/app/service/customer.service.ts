import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})
export class CustomerService {
	base_url = "http://127.0.0.1:8081";
	data = []	;
	constructor(private  httpClient:HttpClient) { }

	getUserData() {
		return this.httpClient.get(this.base_url + '/users');
	}
}
