import { Injectable } from '@angular/core';

@Injectable()
export class AdminTablesService {

  smartTableData = [
    {
      id: 1,
      nombre: 'Jose Fco Moreno Fernández',
      email: 'joseF@aparcame.com',
      puesto: 'COO',
      localidad: 'Alicante',
    },
    {
      id: 2,
      nombre: 'Sergio Perez Seré',
      email: 'sergioP@aparcame.com',
      puesto: 'CEO',
      localidad: 'Altea',
    },
    {
      id: 3,
      nombre: 'Emilio Maestre Hortal',
      email: 'emilioM@aparcame.com',
      puesto: 'Developer',
      localidad: 'San Vicente del Raspeig',
    },
    {
      id: 4,
      nombre: 'Pablo Lopez Riquelme',
      email: 'pabloL@aparcame.com',
      puesto: 'Developer',
      localidad: 'Aspe',
    },
    {
      id: 5,
      nombre: 'Julian Martinez Martinez',
      email: 'julianM@aparcame.com',
      puesto: 'Diseñador',
      localidad: 'Alicante',
    },
    {
      id: 6,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
      
    /*
    {
      id: 7,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
    {
      id: 8,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
    {
      id: 9,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
    {
      id: 10,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
    {
      id: 11,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
    {
      id: 12,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
    {
      id: 13,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
    {
      id: 14,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
    {
      id: 15,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
    {
      'id': 16,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
    {
      'id': 17,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
    {
      'id': 18,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
    {
      'id': 19,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
    {
      'id': 20,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
    {
      'id': 21,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
    {
      'id': 22,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
    {
      'id': 23,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
    {
      'id': 24,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
    {
      'id': 25,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
    {
      'id': 26,
      nombre: 'Antonio Defez Ibañez',
      email: 'antonioD@aparcame.com',
      puesto: 'Developer',
      localidad: 'Alicante',
    },
   */
  ];

  

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.smartTableData);
      }, 2000);
    });
  }
}
