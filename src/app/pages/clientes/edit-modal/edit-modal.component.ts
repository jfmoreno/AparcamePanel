import { ImgParking } from './imgParking/imgParking.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from './edit-post';

import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalDataSource } from 'ng2-smart-table';
import { NgUploaderOptions } from 'ngx-uploader';



@Component({
  selector: 'add-service-modal',
  styleUrls: [('./edit-modal.component.scss')],
  templateUrl: './edit-modal.component.html',
})

export class EditModal implements OnInit {

 
  longitudes: string[] = [];
  latitudes: string[] = [];
  

  save(longitud: string, latitud: string): void {
      this.longitudes.push(longitud);  
      this.latitudes.push(latitud);
    }

  centrales: Post = new Post(
    1, 
    'MadPilots Snack Bar',
    'madpilots@gmail.com',
    '966287425',
    'Carretera de San Vicente del Raspeig N12',
    '03008',
    'San Vicente del Raspeig',
    'Imangen',
    '38.386271',
    '-0.5095117',
  );
  get post() {
    return JSON.stringify(this.centrales);
  }
  onSubmit() {
    console.log(this.centrales);
  }


  //IMAGEN//
  public defaultPicture = 'assets/img/clientes/nofoto.png';
  public profile: any = { picture: 'assets/img/clientes/madpilots.png' };
  
  public uploaderOptions: NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };
  public fileUploaderOptions: NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };


  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {}

  closeModal() {
    this.activeModal.close();
  }
}

