import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImgAdmin } from './imgadmin/imgadmin.component';
import { NgUploaderOptions } from 'ngx-uploader';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';



@Component({
  selector: 'perfilAdmin',
  templateUrl: './perfiladmin.html',
  styleUrls: ['./perfiladmin.scss'],
})
export class PerfilAdmin {

    //IMAGEN//
    public defaultPicture = 'assets/img/usuarios/nofoto.png';
    public profile: any = { picture: 'assets/img/usuarios/Yo.png' };
  //public profile: any = { picture: 'assets/img/parking1.png' };
    
    public uploaderOptions: NgUploaderOptions = {
      // url: 'http://website.com/upload'
      url: '',
    };
    public fileUploaderOptions: NgUploaderOptions = {
      // url: 'http://website.com/upload'
      url: '',
    };

    public form:FormGroup;
    public name:AbstractControl;
    public email:AbstractControl;
    public direction:AbstractControl;
    public location:AbstractControl;
    public cp:AbstractControl;
    public shop:AbstractControl;
    public passwordAC:AbstractControl;
    public password:AbstractControl;
    public repeatPassword:AbstractControl;
    public passwords:FormGroup;
  
    public submitted:boolean = false; 

    constructor(fb:FormBuilder) {
      
          this.form = fb.group({
            'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
            'direction': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'location': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            'cp': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'shop': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'passwordAC': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'passwords': fb.group({
              'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
              'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
            }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
          });
      
          this.name = this.form.controls['name'];
          this.email = this.form.controls['email'];
          this.direction = this.form.controls['direction'];
          this.location = this.form.controls['location'];
          this.cp = this.form.controls['cp'];
          this.shop = this.form.controls['shop'];
          this.passwordAC = this.form.controls['passwordAC'];
          this.passwords = <FormGroup> this.form.controls['passwords'];
          this.password = this.passwords.controls['password'];
          this.repeatPassword = this.passwords.controls['repeatPassword'];
        }

        public onSubmit(values:Object):void {
          this.submitted = true;
          if (this.form.valid) {
            // your code goes here
            // console.log(values);
          }
        }

  

}