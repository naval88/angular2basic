import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { env } from './../env';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

	post_data:string;
	server_url:string;
	data;
	limit;

	constructor(private blogservice:BlogService) {
		this.server_url = env.API_URL+"/upload/";
	}

	ngOnInit() {
			this.limit = 1;
			this.blogservice.fetchAllPosts(this.limit).subscribe((response:any) => {
			this.post_data = response.data;
			this.limit++;
		});
	}

	loadMore() {
		this.blogservice.fetchAllPosts(this.limit).subscribe((response:any) => {
			this.post_data = response.data;
			this.limit++;
		});
	}	

	onRate(event) {
		console.log(event);
	}

}