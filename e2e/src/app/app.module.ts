import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './modules/components/login/login.component';
import { MainComponent } from './modules/components/main/main.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './modules/services/auth/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GeocolorDirective } from './modules/directives/geocolor/geocolor.directive';
import { UserComponent } from './modules/components/user/user.component';
import { EditUserComponent } from './modules/components/edit-user/edit-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { PostsModule } from './modules/posts.module';
import { AlbumsModule } from './modules/albums.module';
import { NewUserComponent } from './modules/components/new-user/new-user.component';
import { SidenavServiceService } from './modules/services/sidenav/sidenav-service.service';
import { CitiesService } from './modules/services/cities/cities.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { UserDialogComponent } from './modules/components/user-dialog/user-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoModule } from './modules/todo.module';
import { IntercepttorsInterceptor } from './modules/intercepttors.interceptor';
import { ChartComponent } from './modules/components/chart/chart.component';
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
    ChartComponent,
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
    MatPaginatorModule,
    MatTabsModule,
    PostsModule,
    AlbumsModule,
    MatIconModule,
    NgbModule,
    TodoModule,
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
  providers: [AuthGuard, AuthService, SidenavServiceService, CitiesService,
    { provide: HTTP_INTERCEPTORS, 
      useClass: IntercepttorsInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
})
export class AppModule { }