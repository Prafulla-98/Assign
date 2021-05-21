import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GeocolorDirective } from './geocolor.directive';
import { UserComponent } from './components/user/user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { PostsModule } from './modules/posts.module';
import { AlbumsModule } from './modules/albums.module';
import { NewUserComponent } from './components/new-user/new-user.component';
import { SidenavServiceService } from './sidenav-service.service';
import { CitiesService } from './cities.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    GeocolorDirective,
    UserComponent,
    EditUserComponent,
    NavbarComponent,
    NewUserComponent,
    UserDialogComponent,
  ],
  entryComponents: [UserDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatDialogModule,
    PostsModule,
    AlbumsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'main',
        component: MainComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'editUser',
        component: EditUserComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'newUser',
        component: NewUserComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'posts',
        loadChildren: () => import('./modules/posts.module').then(m => m.PostsModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'albums',
        loadChildren: () => import('./modules/albums.module').then(m => m.AlbumsModule),
        canActivate: [AuthGuard],
      },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [AuthGuard, AuthService, SidenavServiceService, CitiesService],
  bootstrap: [AppComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AppModule { }
