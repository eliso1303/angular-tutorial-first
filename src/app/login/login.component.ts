import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
  userEmail;
  userPass;
  users;

  constructor(private usersService: UsersService, private formBiulder: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.formBiulder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  checkUser() {

    this.userEmail = this.loginForm.value.email;
    this.userPass = this.loginForm.value.password;
    this.users = this.usersService.getUsers();
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === this.userEmail && this.users[i].password === this.userPass) {
        // console.log(this.users[i].email);
        this.loginService.allowAccess(i);
        break;
      } else {
        this.loginService.disallowAccess();
      }
    }
  }
}
