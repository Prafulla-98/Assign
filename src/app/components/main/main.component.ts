import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './models/User';
import { AuthService } from '../../auth.service';
import { SidenavServiceService } from 'src/app/sidenav-service.service';
import { CitiesService } from 'src/app/cities.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  users$: Observable<User[]>;
  users: User[];
  displayedColumns: string[];
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

  edit(value) {
    this.auth.setLoggedIn(true);
    this.router.navigateByUrl('/editUser', { state: { userData: value } });
  }

  editData(user: User) {
    this.edit(user);
  }

}
