import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { env } from './../env';

@Component({
  selector: 'app-popularpost',
  templateUrl: './popularpost.component.html',
  styleUrls: ['./popularpost.component.css']
})
export class PopularpostComponent implements OnInit {

	
	popular_post_data;

	constructor(private blogservice:BlogService) { }

	ngOnInit() {
		this.blogservice.fetchPopularPosts().subscribe((response:any) => {
			this.popular_post_data = response.data;
		});		
	}

}
