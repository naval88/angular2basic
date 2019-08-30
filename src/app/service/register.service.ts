import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
//https://www.concretepage.com/angular/angular-httpclient-post


@Injectable({
	providedIn: 'root'
})
export class RegisterService {

	constructor(private httpClient:HttpClient) { }
 	url = "http://127.0.0.1:8081/sign-up";

	saveUserData(data) {		
     	return this.httpClient.post('http://localhost:8081/sign-up', data);
	} 

}
