import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidenavServiceService } from 'src/app/modules/services/sidenav/sidenav-service.service';
import { Photo } from '../model/Photo';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  
  photos: Photo[];

  constructor(private activatedRoute: ActivatedRoute, private sidenav: SidenavServiceService) { }

  ngOnInit(): void {
    this.sidenav.open();
    this.activatedRoute.data.subscribe((data: { photos: Photo[] }) => {
      this.photos = data.photos;
    });
  }

}
