import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../post';
import { CoronaDay } from '../corona-day';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private apiService: ApiService) { 
    this.getPosts();
    this.apiService.getCoronaData().subscribe((data: CoronaDay[]) => {
      this.coronastats = data;
      let coronadata = [];
      let coronadate = [];
      data.forEach(function(item){
        coronadata.push(item.Cases);
        coronadate.push(item.Date);
      });
      this.newDataArr = coronadata
      this.newDateArr = coronadate;
      
    });
  }

  public posts: Post[];
  public coronastats: CoronaDay[];
  public cases: number[];
  public newDataArr = [];
  public newDateArr = [];


  public getPosts() {
    this.apiService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }
  
  ngOnInit() {
  }
}
