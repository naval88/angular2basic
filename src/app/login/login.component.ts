import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';;
import { RegisterService } from '../service/register.service';
import { Router } from "@angular/router";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm : FormGroup;
	submitted = false;
	email_password_not_match : string;
	constructor(private fb: FormBuilder, 
				private router : Router,
				private regService: RegisterService) { }

	ngOnInit() {
		this.loginForm = this.fb.group({
			email: ['', [Validators.required,Validators.email] ],
			password: ['', [Validators.required, Validators.minLength(6)]],
		});

	}

	// convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit(data) {
     	this.submitted = true;

     	 // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.regService.checkUserData(data).subscribe((response : any)=> {
      		console.log(response);			
			if(response.type == 'success') {
				localStorage.setItem('token', response._token);
				this.router.navigate(['/customers']);
			} else {
			this.email_password_not_match = "email and password not match";
			console.log(this.email_password_not_match);
			}
			}, error => {
				this.email_password_not_match = "There is some technical issue";
			});
    }

}
