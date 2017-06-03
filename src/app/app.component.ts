import { Component, OnInit } from '@angular/core';
import { GitHubService} from './github.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private gitHubService:GitHubService){

  }
  repositories = [];
  ngOnInit(){
  	this.gitHubService.getAllPublicRepositories().subscribe(responseRepositories => this.repositories = responseRepositories);
  }
}
