import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userId;

  private access = false;

  constructor() { }

  isEnabled() {
    return this.access;
  }

  disallowAccess() {
    this.access = false;
  }

  allowAccess(i) {
    this.access = true;
    this.userId = i;
  }

  logoutUser() {
    this.access = false;
  }

  getUserId() {
    return this.userId;
  }
}
