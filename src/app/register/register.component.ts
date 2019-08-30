import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../service/register.service';
import { Router } from "@angular/router";


@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	registerForm : FormGroup;
	submitted = false;
	email_already_exist : string;
	constructor(private fb: FormBuilder, 
				private router : Router,
				private regService: RegisterService) { }

	ngOnInit() {
		this.registerForm = this.fb.group({
			name: ['', Validators.required ],
			email: ['', [Validators.required,Validators.email] ],
			password: ['', [Validators.required, Validators.minLength(6)]],
		});
	}

	// convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }


	onSubmit(data) {
     	this.submitted = true;

     	 // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

      	this.regService.saveUserData(data).subscribe((response : any)=> {
      		console.log(response);			
			if(response.type == 'success') {
				this.router.navigate(['/customers']);
			}
			this.email_already_exist = "email already exsist";
			console.log(this.email_already_exist);
			}, error => {
				this.email_already_exist = "There is some technical issue";
			});
    }

}
