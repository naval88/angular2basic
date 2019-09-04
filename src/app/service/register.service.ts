import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
//https://www.concretepage.com/angular/angular-httpclient-post


@Injectable({
	providedIn: 'root'
})
export class RegisterService {

	constructor(private httpClient:HttpClient,private router:Router) { }
 	url = "http://127.0.0.1:8081/sign-up";

	saveUserData(data) {		
     	return this.httpClient.post('http://localhost:8081/sign-up', data);
	};

	checkUserData(data) {
		return this.httpClient.post('http://localhost:8081/sign-in', data);
	};

	sendPostData(data) {
		return this.httpClient.post('http://localhost:8081/posts', data);
	};
	
}
