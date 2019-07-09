import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  checkedForm;
  constructor(private userForm: FormBuilder,
    private formBiulder: FormBuilder) {
    this.checkedForm = formBiulder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^[A-Za-z][A-Za-z0-9]*$/), Validators.minLength(7)]],
      confirmPassword: ['', [Validators.required, this.confirmPasswordCheck()]],
      nickName: ['', [Validators.required, Validators.pattern(/^[A-Za-z-][A-Za-z0-9-]*$/)]],
      phoneNumber: ['', [Validators.required,Validators.pattern(/\+380[0-9]{9}$/)]],
      website: ['', [Validators.required,Validators.pattern(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/)]],
    });
  }

  ngOnInit() {
  }

  confirmPasswordCheck() {
    return (formGroup) => {
      return formGroup.confirmPassword.value === formGroup.password.value ? null : { isNotSame: { invalid: true } };
    }
  }
}
