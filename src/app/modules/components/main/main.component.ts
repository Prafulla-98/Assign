import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './models/User';
import { AuthService } from '../../../modules/services/auth/auth.service';
import { SidenavServiceService } from 'src/app/modules/services/sidenav/sidenav-service.service';
import { CitiesService } from 'src/app/modules/services/cities/cities.service';
import { PageEvent } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule } from '@angular/material/paginator';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})



export class MainComponent implements OnInit {

  users$: Observable<User[]>;
  users: User[];
  displayedColumns: string[];
  usersOnPage: User[];
  constructor(private http: HttpClient, private auth: AuthService, private router: Router, private sidenav: SidenavServiceService, private cities: CitiesService) { }

  ngOnInit(): void {
    this.sidenav.open();
    this.users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');

    this.users$.subscribe(
      users => {
        this.users = users;
        this.cities.cities = [];
        for (let user of users) {
          this.cities.cities.push(user.address.city);
        }
      }
    )

    this.displayedColumns = ['id', 'name', 'username', 'email',
    'street', 'suite', 'city', 'zipcode', 'lat', 'lng', 'phone',
    'website', 'companyName', 'catchPhrase', 'bs', 'edit'];
  }
  LogoutUser(){
    localStorage.clear();
    this.router.navigate([""]);

  }

  edit(value) {
    this.auth.setLoggedIn(true);
    this.router.navigateByUrl('/editUser', { state: { userData: value } });
  }

  editData(user: User) {
    this.edit(user);
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex + event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.users.length) {
      endIndex = this.users.length;
    }
    this.usersOnPage = this.users.slice(startIndex, endIndex);
  }
  
}
