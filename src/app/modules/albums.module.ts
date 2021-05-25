import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsComponent } from '../components/albums/albums/albums.component';
import { AlbumComponent } from '../components/albums/photo/album.component';
import { AlbumResolver } from '../components/albums/resolver/album.resolver';
import { AlbumService } from '../components/albums/service/album.service';
import { MatButtonModule } from '@angular/material/button';
import { AuthGuard } from '../auth.guard';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTreeModule} from '@angular/material/tree';
@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTreeModule,
    RouterModule.forRoot([
      {
        path: 'albums',
        component: AlbumsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'albums/:id',
        component: AlbumComponent,
        canActivate: [AuthGuard],
        resolve: {
          photos: AlbumResolver,
        }
      }
    ])
  ],
  providers: [AlbumResolver, AlbumService, AuthGuard],
})
export class AlbumsModule { }
