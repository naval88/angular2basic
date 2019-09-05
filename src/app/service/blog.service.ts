import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class BlogService {
		endpoint;
		base_url = "http://127.0.0.1:8081";
		data = []	;

		constructor(private  httpClient:HttpClient) { }

		fetchAllPosts(data?) {
			this.endpoint = "posts";
			if(data) {

				this.endpoint = "posts/"+data;
			}
			return this.httpClient.get(this.base_url + '/' + this.endpoint);
		}

}
