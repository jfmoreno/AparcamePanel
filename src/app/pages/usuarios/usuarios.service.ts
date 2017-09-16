import { Injectable } from '@angular/core';


@Injectable()

export class UsuariosService {
 

  usuariosTable = [
    {
      id: 1,
      imagen: 'assets/img/usuarios/Alexander.png',
      nombre: 'Jose Fco Moreno Fernández',
      email: 'josefranciscomoreno85@gmail.com',
      cp: '03006',
      localidad: 'Alicante',
      nivel: 2000,
    },
    {
      id: 2,
      imagen: 'assets/img/usuarios/Nasta.png',
      nombre: 'Francisco Franco Casas',
      email: 'franciscoFranco50@gmail.com',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      nivel: 1000,
    },
    {
      id: 3,
      imagen: 'assets/img/usuarios/Andrey.png',
      nombre: 'Francisco Franco Casas',
      email: 'franciscoFranco50@gmail.com',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      nivel: 1000,
    },
    {
      id: 4,
      imagen: 'assets/img/usuarios/Kostya.png',
      nombre: 'Francisco Franco Casas',
      email: 'franciscoFranco50@gmail.com',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      nivel: 1000,
    },
    {
      id: 5,
      imagen: 'assets/img/usuarios/Nick.png',
      nombre: 'Francisco Franco Casas',
      email: 'franciscoFranco50@gmail.com',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      nivel: 1000,
    },
    {
      id: 6,
      imagen: 'assets/img/usuarios/Vlad.png',
      nombre: 'Francisco Franco Casas',
      email: 'franciscoFranco50@gmail.com',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      nivel: 1000,
    },
    {
      id: 7,
      imagen: 'assets/img/usuarios/Lucas.png',
      nombre: 'Francisco Franco Casas',
      email: 'franciscoFranco50@gmail.com',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      nivel: 1000,
    },
    {
      id: 8,
      imagen: 'assets/img/usuarios/Lucia.png',
      nombre: 'Francisco Franco Casas',
      email: 'franciscoFranco50@gmail.com',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      nivel: 1000,
    },
    {
      id: 9,
      imagen: 'assets/img/usuarios/Julia.png',
      nombre: 'Francisco Franco Casas',
      email: 'franciscoFranco50@gmail.com',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      nivel: 1000,
    },
    {
      id: 10,
      imagen: 'assets/img/usuarios/Claudia.png',
      nombre: 'Claudia Franco Casas',
      email: 'claudia@gmail.com',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      nivel: 1000,
    },
    {
      id: 11,
      imagen: 'assets/img/usuarios/Cholo.png',
      nombre: 'Cholo Simeone Juan',
      email: 'choloargentino@gmail.com',
      cp: '03009',
      localidad: 'Altea',
      nivel: 500,
    },
    {
      id: 12,
      imagen: 'assets/img/usuarios/Pedro.png',
      nombre: 'Pedro Lopez Lucas',
      email: 'pedropedrito0@gmail.com',
      cp: '03009',
      localidad: 'Alicante',
      nivel: 1000,
    },
];
  

aparcTableData = [
  {
    id: 1,
    parking: 'Parking F. Economica',
    date: '25/07/2017 11:00',
    latitud: '38.382214',
    longitud: '-0.514394',
    puntos: '25'
  },
  {
    id: 2,
    parking: 'Museo UA',
    date:'25/07/2017 11:00',
    latitud: '38.382401',
    longitud: '-0.513611',
    puntos: '25'
  },
  {
    id: 3,
    parking: 'Politecnica 4',
    date: '25/07/2017 11:00',
    latitud: '38.381278',
    longitud: '-0.513116',
    puntos: '25'
  },
  {
    id: 4,
    parking: 'Aulario 2',
    date: '25/07/2017 11:00',
    latitud: '38.381100',
    longitud: '-0.513914',
    puntos: '28'
  },
  {
    id: 5,
    parking: 'Politecnica 1',
    date: '25/07/2017 11:00',
    latitud: '38.381676915',
    longitud: '-0.51374562',
    puntos: '25'
  },
  {
    id: 6,
    parking: 'Parking 6',
    date: '25/07/2017 11:00',
    latitud: '38.38185353',
    longitud: '-0.5137838',
    puntos: '25'
  },
  {
    id: 7,
    parking: 'Parking 7',
    date: '25/07/2017 11:00',
    latitud: '38.382214',
    longitud: '-0.514394',
    puntos: '25'
  },
  {
    id: 8,
    parking: 'Parking 8',
    date: '25/07/2017 11:00',
    latitud: '38.382214',
    longitud: '-0.514394',
    puntos: '25'
  },
  {
    id: 9,
    parking: 'Aulario 1',
    date: '25/07/2017 11:00',
    latitud: '38.382214',
    longitud: '-0.514394',
    puntos: '25'
  },
  {
    id: 10,
    parking: 'Autobuses',
    date: '25/07/2017 11:00',
    latitud: '38.382214',
    longitud: '-0.514394',
    puntos: '25'
  },
  {
    id: 11,
    parking: 'Cementerio Santa Pola',
    date: '25/07/2017 11:00',
    latitud: '38.382214',
    longitud: '-0.514394',
    puntos: '25'
  },
];


historialTable = [
  {
    imagen: 'assets/img/ofertas/pizzas.png',
    oferta: 'Pizza Gratis 2x1',
    lugar: 'II Timone Express',
    direccion: 'Pasea del Mar',
    localidad: 'Altea',
    puntos: 200,
    fecha: '15/03/2017 11:00',
  },
  {
    imagen: 'assets/img/ofertas/taller.png',
    oferta: 'Cambio de Aceite 50%',
    lugar: 'Eco Taller',
    direccion: 'Carretera San Vicente',
    localidad: 'San Vicente',
    puntos: 500,
    fecha: '25/03/2017 12:00',
  },
  {
    imagen: 'assets/img/ofertas/cervezas.png',
    oferta: 'Cerveza Gratis 2x1',
    lugar: 'Mac Pilots',
    direccion: 'Carretera San Vicente',
    localidad: 'San Vicente',
    puntos: 50,
    fecha: '12/03/2017 19:00',
  },
  {
    imagen: 'assets/img/usuarios/Alexander.png',
    oferta: 'Pizza Gratis 2x1',
    lugar: 'II Timone Express',
    direccion: 'Pasea del Mar',
    localidad: 'Altea',
    puntos: 200,
    fecha: '15/03/2017 11:00',
  },
  {
    imagen: 'assets/img/usuarios/Alexander.png',
    oferta: 'Pizza Gratis 2x1',
    lugar: 'II Timone Express',
    direccion: 'Pasea del Mar',
    localidad: 'Altea',
    puntos: 200,
    fecha: '15/03/2017 11:00',
  },
];



























  getData(): Promise < any > {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.usuariosTable);
      }, 2000);
    });
  }
}

