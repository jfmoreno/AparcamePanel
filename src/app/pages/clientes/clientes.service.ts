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
export class ClientesService {
 
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
      imagen: 'assets/img/clientes/madpilots.png',
      nombre: 'MadPilots Snack Bar',
      email: 'madpilots@gmail.com',
      telefono: '966287425',
      cp: '03008',
      localidad: 'San Vicente del Raspeig',
    },
    {
        id: 2,
        imagen: 'assets/img/clientes/ecologicaldrive.png',
        nombre: 'Ecological Drive',
        email: 'ecologicaldrive@gmail.com',
        telefono: '966288345',
        cp: '03008',
        localidad: 'San Vicente del Raspeig',
      },
      {
        id: 3,
        imagen: 'assets/img/clientes/aula12.png',
        nombre: 'Aula12',
        email: 'aula12@gmail.com',
        telefono: '966278945',
        cp: '03008',
        localidad: 'San Vicente del Raspeig',
      },

];

ofertasTable = [
    {
    id:1,
    imagen: 'assets/img/ofertas/pizzas.png',
    oferta: 'Pizza Gratis 2x1',
    puntos: 200,
    fecha: '15/03/2017 11:00',
    },
    {
    id:2,
    imagen: 'assets/img/ofertas/pizzas.png',
    oferta: 'Pizza Gratis 2x1',
    puntos: 200,
    fecha: '15/03/2017 11:00',
    },
    {
    id:3,
    imagen: 'assets/img/ofertas/cervezas.png',
    oferta: 'Cerveza Gratis 2x1',
    puntos: 50,
    fecha: '12/03/2017 19:00',
    },
    {
    id:4,
    imagen: 'assets/img/ofertas/cervezas.png',
    oferta: 'Cerveza Gratis 2x1',
    puntos: 50,
    fecha: '12/03/2017 19:00',
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

