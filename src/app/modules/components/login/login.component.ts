import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../modules/services/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SidenavServiceService } from 'src/app/modules/services/sidenav/sidenav-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb:FormBuilder, private Auth: AuthService, private router: Router, private sidenav: SidenavServiceService) { }

  ngOnInit(): void {
    this.sidenav.close();
    this.loginForm = this.fb.group({
      username: '',
      password: '',
    });
  }

  loginUser() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    if(this.Auth.validateUser(username, password)) {
      //success! move on to next page
      this.router.navigate(['main']);
    } else {
      window.alert('Invalid Login. Please try again');
    }
  }

}
