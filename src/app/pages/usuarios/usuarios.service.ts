import { Injectable } from '@angular/core';


@Injectable()

export class UsuariosService {
 

  usuariosTable = [
    {
      id: 1,

      nombre: 'Francisco Franco Casas',
      email: 'franciscoFranco50@gmail.com',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      nivel: 1000,
    },
    {
      id: 2,

      nombre: 'Francisco Franco Casas',
      email: 'franciscoFranco50@gmail.com',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      nivel: 1000,
    },
    {
      id: 3,
      
      nombre: 'Francisco Franco Casas',
      email: 'franciscoFranco50@gmail.com',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      nivel: 1000,
    },
    {
      id: 4,
      nombre: 'Francisco Franco Casas',
      email: 'franciscoFranco50@gmail.com',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      nivel: 1000,
    },
    {
      id: 5,
      nombre: 'Francisco Franco Casas',
      email: 'franciscoFranco50@gmail.com',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      nivel: 1000,
    },
    {
      id: 6,
      nombre: 'Francisco Franco Casas',
      email: 'franciscoFranco50@gmail.com',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      nivel: 1000,
    },
    {
      id: 7,
      nombre: 'Francisco Franco Casas',
      email: 'franciscoFranco50@gmail.com',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      nivel: 1000,
    },
    {
      id: 8,
      nombre: 'Francisco Franco Casas',
      email: 'franciscoFranco50@gmail.com',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      nivel: 1000,
    },
    {
      id: 9,
      estado: 'A1',
      nombre: 'Francisco Franco Casas',
      email: 'franciscoFranco50@gmail.com',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      nivel: 1000,
    },
    {
      id: 10,
      nombre: 'Francisco Franco Casas',
      email: 'franciscoFranco50@gmail.com',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      nivel: 1000,
    },
    {
      id: 11,
      nombre: 'Francisco Franco Casas',
      email: 'franciscoFranco50@gmail.com',
      cp: '03009',
      localidad: 'San Vicente del Raspeig',
      nivel: 1000,
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

