import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  private posts: Post[];

  public getPosts() {
    this.apiService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }

  ngOnInit() {
    this.getPosts();
  }

}
