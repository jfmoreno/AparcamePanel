import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { forbiddenTitleValidator } from './login.validator';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {
  

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(fb: FormBuilder, public router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(20)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }


  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
       this.router.navigate(['./../dashboard/dashboard.module#DashboardModule']);
    }

  }


}
