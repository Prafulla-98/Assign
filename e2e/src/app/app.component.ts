import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavServiceService } from './modules/services/sidenav/sidenav-service.service';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from './modules/services/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prafulla-app';
  login: boolean = true;
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private sidenavService: SidenavServiceService, private router: Router,private loggedin: AuthService) {

  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

}
