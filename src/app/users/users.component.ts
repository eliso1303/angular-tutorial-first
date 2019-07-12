import { Component, OnInit } from '@angular/core';
import { UsersService } from "./../user.service";
import { LoginService } from '../login.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users;
  userId;
  constructor(private usersServise: UsersService, private loginService: LoginService) {
    this.users = this.usersServise.getUsers();
    this.userId = this.loginService.getUserId();
  }

  ngOnInit() {
  }

  deleteUser(userIndex) {
    if (this.userId === userIndex) {
      this.usersServise.deleteUser(userIndex);
    } else {
      return false;
    }
  }
}