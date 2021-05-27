import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SidenavServiceService } from 'src/app/modules/services/sidenav/sidenav-service.service';
import { Album } from '../model/Album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums$: Observable<Album[]>;
  albums: Album[];
  albumsOnPage: Album[];
  totalLength: number;
  page: number = 1;
  constructor(private http: HttpClient, private router: Router, private sidenav: SidenavServiceService) { }

  ngOnInit(): void {
    this.sidenav.open();
    this.albums$ = this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums/');
    this.albums$.subscribe(a => {
      this.albums = a as Album[];
      this.albumsOnPage = this.albums.slice(0, 5);
    });
  }

  getLink(value: string): void {
    const id = parseInt(value) - 1;
    this.router.navigate(['albums/'+value]);
  }
  LogoutUser(){
    localStorage.clear();
    this.router.navigate([""]);

  }
  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex + event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.albums.length) {
      endIndex = this.albums.length;
    }
    this.albumsOnPage = this.albums.slice(startIndex, endIndex);
  }

}
