import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  private posts: Post[];


  constructor(private apiService: ApiService) { }

  public getPosts(){
    this.apiService.getPosts().subscribe((data: Post[]) => {
      this.posts =  data;
  });
}

  ngOnInit() {
    this.getPosts();
  }

}
