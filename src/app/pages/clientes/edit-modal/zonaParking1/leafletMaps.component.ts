
import { Component, ElementRef } from '@angular/core';

import 'leaflet-map';

@Component({
  selector: 'zona-parking1',
  templateUrl: './zonaParking1.html',
  styleUrls: ['./zonaParking1.scss'],
})
export class ZonaParking1 {

  constructor(private _elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    const el = this._elementRef.nativeElement.querySelector('.leaflet-maps');

    L.Icon.Default.imagePath = '../../../../../assets/img/theme/vendor/leaflet';
    const map = L.map(el).setView([38.386271, -0.5095117], 17);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    }).addTo(map);



    let universidad = L.marker([38.386271, -0.5095117]).addTo(map)
      .bindPopup('MadPilots Snack Bar')
      .openPopup();   
  }
}
