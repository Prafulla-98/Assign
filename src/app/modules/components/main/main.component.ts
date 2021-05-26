import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './models/User';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../../../modules/services/auth/auth.service';
import { SidenavServiceService } from 'src/app/modules/services/sidenav/sidenav-service.service';
import { CitiesService } from 'src/app/modules/services/cities/cities.service';
import { PageEvent } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output, AfterViewInit} from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements  OnInit, AfterViewInit  {

  users$: Observable<User[]>;
  users: User[];
  displayedColumns: string[];
  ELEMENT_DATA : User[];
  dataSource;
  totalLength: number;
  page: number = 1;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private http: HttpClient, private auth: AuthService, private router: Router, private sidenav: SidenavServiceService, private cities: CitiesService) { }

  ngOnInit(): void {
    this.sidenav.open();
    this.users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
    this.dataSource = new MatTableDataSource<User>(this.users);
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
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
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
 
  
}
