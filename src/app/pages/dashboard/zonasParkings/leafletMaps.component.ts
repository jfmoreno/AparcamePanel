import { Component, ElementRef } from '@angular/core';

import 'leaflet-map';

@Component({
  selector: 'leaflet-maps',
  templateUrl: './leafletMaps.html',
  styleUrls: ['./leafletMaps.scss'],
})
export class ZonasParkings {

  constructor(private _elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    const el = this._elementRef.nativeElement.querySelector('.leaflet-maps');

    L.Icon.Default.imagePath = '../../../../assets/img/theme/vendor/leaflet';
    let map = L.map(el).setView([38.26298470036051, -0.5228805541992188], 10);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      //attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
/*
    var polygon = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047],
    ]).addTo(map);
*/

    var universidad = L.marker([38.385265900107925, -0.5140534043312073]).addTo(map)
      .bindPopup('Universidad de Alicante')
      .openPopup();
    var santaPola = L.marker([38.19619358349161, -0.5629514157772064]).addTo(map)
      .bindPopup('Parking Cementerio');
      
  }
}
