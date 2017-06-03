import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GitHubService {
	constructor(private http:Http){

	}
	private BASE:string = "https://api.github.com";


	getAllPublicRepositories() {
		var url = "/users/diiaz94/repos";
		return this.http.get(this.BASE+url).map((response: Response) => response.json());
	}
}

	
