import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2basic';
  token:string;
  userinfo;
  userinfos;
  username;

  constructor(private router:Router) { 
  	this.token = localStorage.getItem('token');
  	if(this.token) {
		console.log("yes we are login in");
		this.userinfo = this.token.split('.')[1];
		this.userinfos =  JSON.parse(window.atob(this.userinfo));
		console.log(this.userinfos);
		this.username = this.userinfos.data[0].name;
		console.log(this.username);
		console.log("yes done");
  	} else {
  		console.log("yes we are login out");
  	}


  }

  logOut() {
		localStorage.removeItem('token');	
		this.router.navigate(['/sign-in']);
	}

	

}
