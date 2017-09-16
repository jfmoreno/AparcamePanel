import { ImgParking2 } from './imgParking2/imgParking2.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalDataSource } from 'ng2-smart-table';
import { NgUploaderOptions } from 'ngx-uploader';



@Component({
  selector: 'add-service-modal',
  styleUrls: [('./add-modal.component.scss')],
  templateUrl: './add-modal.component.html',
})

export class AddModal implements OnInit {

  /*modalHeader: string;
  modalContent: string = `Lorem ipsum dolor sit amet,
   consectetuer adipiscing elit, sed diam nonummy
   nibh euismod tincidunt ut laoreet dolore magna aliquam
   erat volutpat. Ut wisi enim ad minim veniam, quis
   nostrud exerci tation ullamcorper suscipit lobortis
   nisl ut aliquip ex ea commodo consequat.`;
*/

//LISTADO COORDENADAS
  //latitudes: string[] = ['-0.514394', '-0.513611', '-0.513116', '-0.513914'];
  //longitudes: string[] =  ['38.382214', '38.382401', '38.381278', '38.381100'];
 
  longitudes: string[] = [];
  latitudes: string[] = [];
  

  save(longitud: string, latitud: string): void {
      this.longitudes.push(longitud);  
      this.latitudes.push(latitud);
    }



  //IMAGEN//
  public defaultPicture = 'assets/img/theme/nofoto.png';
  public profile: any = { picture: 'assets/img/parking1.png' };
  
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

