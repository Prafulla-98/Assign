import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SidenavServiceService } from 'src/app/sidenav-service.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;
  posts: Post[];

  constructor(private http: HttpClient, private router: Router, private sidenav: SidenavServiceService) { }

  ngOnInit(): void {
    this.sidenav.open();
    this.posts$ = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    this.posts$.subscribe(p => {
      this.posts = p as Post[];
    });
  }

  getLink(value: string): void {
    const id = parseInt(value) - 1;
    this.router.navigate(['posts/'+value], {state: {data: this.posts[id]}});
  }

}
