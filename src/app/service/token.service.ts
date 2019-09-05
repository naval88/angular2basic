import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class TokenService {

	token:string;
	result;
	userinfo;
	userinfos;

	constructor() {
		this.token = localStorage.getItem('token');
	}

	getToken() {
		return this.token;
	}

	getUserData(param) {
		this.userinfo = this.token.split('.')[1];
		this.userinfos =  JSON.parse(window.atob(this.userinfo));
		this.result = this.userinfos.data[0].name;
		if(param == 'id') {
			this.result = this.userinfos.data[0].id;
		}			
		return this.result
	}

}
