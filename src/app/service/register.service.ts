import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
//https://www.concretepage.com/angular/angular-httpclient-post

@Injectable({
	providedIn: 'root'
})

export class RegisterService {	

	headers_Authorization = {
		headers: new HttpHeaders({ 'Authorization': "Bearer "+localStorage.getItem('token') })
	};

	constructor(private httpClient: HttpClient, 
				private router: Router) { }	

	saveUserData(data) {		
     	return this.httpClient.post('http://localhost:8081/sign-up', data);
	};

	checkUserData(data) {
		return this.httpClient.post('http://localhost:8081/sign-in', data);
	};

	sendPostData(data) {
		console.log(localStorage.getItem('token'));
		return this.httpClient.post('http://localhost:8081/posts', data, this.headers_Authorization);
	};
	
}
