import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

	constructor(public auth: AuthService, public router: Router) { }

	canActivate(): boolean {
		console.log("here we are ");
		if (!this.auth.isAuthenticated()) {
		  this.router.navigate(['sign-in']);
		  return false;
		}
		return true;
	}
}