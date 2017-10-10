import { Injectable } from '@angular/core';


import { Headers, Response, Http, RequestOptions } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Observable'; //esta en el directorio node modules
import { Router } from '@angular/router';
import 'rxjs/Rx'; //para el map, catch, thow...etc
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';



 
export class Parkings {

    Constructor (

    ) {}
}
  
@Injectable()
export class ParkingsService {
 

    headers = new Headers({ 'content-type': 'application/json' });
    options = new RequestOptions({ headers: this.headers, withCredentials: true });


    constructor(private http: Http, private router: Router, public authHttp: AuthHttp) {}


    getTienda(idTienda){
      let url=environment.dominio + '/parking';
      console.log(url);
      return this.http.get(url)
      .delay(environment.timeout)
      .map((res: Response) => {
        console.log(res);
          if (res.status === 200) {;
              console.log("status 200");
              return  [{ status: res.status, data: res.json() }]
          }
          else if (res.status === 204) {
              console.log("status 204");
              return  [{ status: res.status, json: "TIenda no encontrado en la base de datos" }]
          }
      }).catch((error: any) => {
          console.log(error);
          return Observable.throw(new Error(error.status));
      });
  }

  parkingTable = [
    {
      id: 1,
      codP: 'A1',
      nombre: 'Parking F. Economica',
      cp: '03008',
      localidad: 'San Vicente del Raspeig',
      plazas: 188,
      adaptadas: 10,
      electricas: 2,
    },
    {
      id: 2,
      codP: 'A2',
      nombre: 'Parking Museo UA',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      plazas: 8,
      adaptadas: 10,
      electricas: 2,
    },
    {
      id: 3,
      codP: 'A3',
      nombre: 'Parking Politecnica 4',
      cp: '03008',
      localidad: 'San Vicente del Raspeig',
      plazas: 1880,
      adaptadas: 100,
      electricas: 20,
    },
    {
      id: 4,
      codP: 'A4',
      nombre: 'Parking Aulario 2',
      cp: '03008',
      localidad: 'San Vicente del Raspeig',
      plazas: 1880,
      adaptadas: 100,
      electricas: 20,
    },
    {
      id: 5,
      codP: 'A5',
      nombre: 'Parking Politecnica 1',
      cp: '03008',
      localidad: 'San Vicente del Raspeig',
      plazas: 188,
      adaptadas: 10,
      electricas: 2,
    },
    {
      id: 6,
      codP: 'A6',
      nombre: 'Parking 6',
      cp: '03008',
      localidad: 'San Vicente del Raspeig',
      plazas: 1880,
      adaptadas: 100,
      electricas: 20,
    },
    {
      id: 7,
      codP: 'A250',
      nombre: 'Parking 7',
      cp: '03008',
      localidad: 'San Vicente del Raspeig',
      plazas: 3880,
      adaptadas: 100,
      electricas: 20,
    },
    {
      id: 8,
      codP: 'A8',
      nombre: 'Parking 8',
      cp: '03008',
      localidad: 'San Vicente del Raspeig',
      plazas: 4880,
      adaptadas: 100,
      electricas: 20,
    },
    {
      id: 9,
      codP: 'A9',
      nombre: 'Parking Aulario 1',
      cp: '03008',
      localidad: 'San Vicente del Raspeig',
      plazas: 2480,
      adaptadas: 100,
      electricas: 20,
    },
    {
      id: 10,
      codP: 'A10',
      nombre: 'Parking Autobuses',
      cp: '03008',
      localidad: 'San Vicente del Raspeig',
      plazas: 880,
      adaptadas: 100,
      electricas: 20,
    },
    {
      id: 11,
      codP: 'S1',
      nombre: 'Parking Cementerio Santa Pola',
      cp: '03028',
      localidad: 'Santa Pola',
      plazas: 1880,
      adaptadas: 100,
      electricas: 20,
    },
];
  

  getData(): Promise < any > {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.parkingTable);
      }, 2000);
    });
  }
}

