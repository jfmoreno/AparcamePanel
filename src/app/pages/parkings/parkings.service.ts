import { Injectable } from '@angular/core';
/*
import { Headers, Response, Http, RequestOptions } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Observable'; //esta en el directorio node modules
import { Router } from '@angular/router';
import 'rxjs/Rx'; //para el map, catch, thow...etc
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
*/

 /*
export class Parkings {

    Constructor (
      Id_parking: string,
      Codigo_parking: string,
      Nombre_parking: string,
      Cp_parking: string,
      Localidad_parking: string,
      Plazas_parking: string,
      Normales_parking: string,
      Normales_disp_parking: string,
      Adaptadas_parking: string,
      Adaptadas_disp_parking: string,
      Electricas_disp_parking: string,
      Foto_parking: string,
      Lat_parking: string,
      Lon_parking: string,
      Lat1_parking: string,
      Lon1_parking: string,
    ) {}
}
  */
@Injectable()
export class ParkingsService {
 
/*    
    headers = new Headers({ 'content-type': 'application/json' });
    options = new RequestOptions({ headers: this.headers, withCredentials: true });


    constructor(private http: Http, private router: Router, public authHttp: AuthHttp) {}

    
    getParkings(pag: number, parking: string, filtro){
         console.log(pag);  
         pag += -1; //restamos 1 siempre
         pag.toString(); //pasamos a string el number
         console.log(pag);
        if (filtro)
            var consulta = this.construirconsulta2(filtro, pag);
        else
           var consulta = environment.dominio + '/parking?pagina=' + pag + '&nombre='+ parking
        return this.authHttp.get(consulta)
        .delay(environment.timeout)
        .map((res: Response) => {
            console.log(res);
            if (res.status === 200) {;
                console.log("status 200");
                
                return  [{ status: res.status, data: res.json().parking }]
            }
            else if (res.status === 204) {
                console.log("status 204");
                return  [{ status: res.status, json: "Parking no encontrado en la base de datos" }]
            }
        }).catch((error: any) => {
            console.log(error);
            return Observable.throw(new Error(error.status));
        });
    }
 
    public idParking:string;
    	
    getParking(filtro,idParking){
        console.log(idParking);
        this.idParking=idParking;
        var consulta=this.construirconsulta(filtro);
        return this.authHttp.get(consulta)
        .delay(environment.timeout)
        .map((res: Response) => {
            if (res.status === 200) {;
                console.log("status 200");
                //return res.json().parking
                return  [{ status: res.status, data: res.json().usuario }]
            }
            else if (res.status === 204) {
                console.log("status 204");
                return  [{ status: res.status, json: "Parking no encontrado en la base de datos" }]
            }
        }).catch((error: any) => {
            console.log(error);
            return Observable.throw(new Error(error.status));
        });
    }
    
    construirconsulta(filtro){
        console.log(filtro)
        let consulta=environment.dominio + "/parking;
        if (filtro["nombre"]!='')  consulta+="&nombre="+filtro["nombre"];
        if (filtro["sexo"]!='')  consulta+="&sexo="+filtro["sexo"];
        if (filtro["cp"]!='')  consulta+="&cp="+filtro["cp"];
        if (filtro["fecha_min"]!='')  consulta+="&fechanac_min="+filtro["fecha_min"];
        if (filtro["fecha_max"]!='')  consulta+="&fechanac_max="+filtro["fecha_max"];
        

        console.log(consulta);
        return consulta;
    }

    construirconsulta2(filtro, pag){
        console.log(filtro,pag)
        let consulta= environment.dominio + "/usuario?pagina=" + pag;
        if (filtro["nombre"]!='')  consulta+="&nombre="+filtro["nombre"];
        if (filtro["sexo"]!='')  consulta+="&sexo="+filtro["sexo"];
        if (filtro["cp"]!='')  consulta+="&cp="+filtro["cp"];
        if (filtro["fecha_min"]!='')  consulta+="&fechanac_min="+filtro["fecha_min"];
        if (filtro["fecha_max"]!='')  consulta+="&fechanac_max="+filtro["fecha_max"];

        console.log(consulta);
        return consulta;
    }

} 
*/

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

