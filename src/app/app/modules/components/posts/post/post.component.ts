import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavServiceService } from 'src/app/modules/services/sidenav/sidenav-service.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(private router: Router, private sidenav: SidenavServiceService) { 
    this.post = this.router.getCurrentNavigation().extras.state.data;
  }

  ngOnInit(): void {
    this.sidenav.open()
    console.log(this.post);
  }

}
