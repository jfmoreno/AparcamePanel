import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from './user-post';

import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalDataSource } from 'ng2-smart-table';
import { NgUploaderOptions } from 'ngx-uploader';


@Component({
  selector: 'add-service-modal',
  styleUrls: [('./user-modal.component.scss')],
  templateUrl: './user-modal.component.html',
})

export class UserModal implements OnInit {


  usuario: Post = new Post(
    1, 
    '17/05/2017',
    2000,
    'Jose Fco Moreno Fernández',
    'josefcomoreno85@gmail.com',
    'Princesa Mercedes N12 4ºC',
    '03006',
    'Alicante',
  );
  get post() {
    return JSON.stringify(this.usuario);
  }
  onSubmit() {
    console.log(this.usuario);
  }


  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {}

  closeModal() {
    this.activeModal.close();
  }


  
}

