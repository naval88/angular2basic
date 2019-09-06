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
      this.userinfo = this.token.split('.')[1];
      this.userinfos =  JSON.parse(window.atob(this.userinfo));
      this.username = this.userinfos.data[0].name;
    } else {
      console.log("yes we are login out");
    }
  }

  userLoggedIn() {
    this.token = localStorage.getItem('token');
    if(this.token) {
        this.userinfo = this.token.split('.')[1];
        this.userinfos =  JSON.parse(window.atob(this.userinfo));
        this.username = this.userinfos.data[0].name;
       return true;     
    }
    return false;
  }

  logOut() {
		localStorage.removeItem('token');	
        localStorage.clear();
		this.router.navigate(['/sign-in']);
	}
}
