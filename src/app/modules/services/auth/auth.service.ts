import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  constructor() { }

  setLoggedIn(value: boolean) {
    this.loggedIn = value;
  }

  get isLoggedIn() {
    return this.loggedIn;
  }

  validateUser(username: String, password: String) {
    this.setLoggedIn(username === password);
    return username === password;
  }
}
