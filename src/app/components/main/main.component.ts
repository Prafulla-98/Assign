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

  constructor(private http: HttpClient, private auth: AuthService, private router: Router, private sidenav: SidenavServiceService, private cities: CitiesService) { }

  ngOnInit(): void {
    this.sidenav.open();
    this.users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');

    this.users$.subscribe(
      users => {
        this.cities.cities = [];
        for (let user of users) {
          this.cities.cities.push(user.address.city);
        }
      }
    )
  }

  edit(value) {
    this.auth.setLoggedIn(true);
    this.router.navigateByUrl('/editUser', { state: { userData: value } });
  }

}
