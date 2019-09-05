import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';;
import { RegisterService }  from '../service/register.service';
import { Router } from "@angular/router";
import { TokenService } from '../service/token.service';

@Component({
	selector: 'app-addpost',
	templateUrl: './addpost.component.html',
	styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

	postForm : FormGroup;
	submitted = false;
	public files_detail;
	img_url: any;
	public message: string;
	private technical_error:string;
	user_data;

	constructor(private fb: FormBuilder, 
				private regService:RegisterService,
				private router:Router,
				private tokenService:TokenService) { }

	ngOnInit() {
		this.postForm = this.fb.group({
			title: ['', [Validators.required] ],
			description: ['', [Validators.required] ],
			image: ['', [Validators.required] ],
		});
	};

	onSubmit(data) {     
     	data.image = this.img_url;
     	data.files = this.files_detail;
     	data.author_id = this.tokenService.getUserData('id');
		this.regService.sendPostData(data).subscribe((response : any)=> {
			if(response.type == "success") {
				this.router.navigate(['/']);
			} else {
				this.technical_error = "There is some technical error";
			}
		}, error => {
			this.technical_error = "There is some technical error";			
		});
    };

    getFileDetails (files) {
		if (files.length === 0)
			return;

		var mimeType = files[0].type;
		if (mimeType.match(/image\/*/) == null) {
			this.message = "Only images are supported.";
			return;
		}

		var reader = new FileReader();
		this.files_detail = files;
		reader.readAsDataURL(files[0]); 
		reader.onload = (_event) => { 
			this.img_url = reader.result; 
		}
	}

}
