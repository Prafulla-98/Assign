import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsComponent } from '../modules/components/albums/albums/albums.component';
import { AlbumComponent } from '../modules/components/albums/photo/album.component';
import { AlbumResolver } from '../modules/components/albums/resolver/album.resolver';
import { AlbumService } from '../modules/services/album/album.service';
import { MatButtonModule } from '@angular/material/button';
import { AuthGuard } from '../auth.guard';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatPaginatorModule,
    NgbModule,
    MatExpansionModule,
    MatIconModule,
    MatCardModule,
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
