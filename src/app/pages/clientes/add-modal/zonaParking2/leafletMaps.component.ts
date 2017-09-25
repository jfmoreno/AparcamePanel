
import { Component, ElementRef } from '@angular/core';

import 'leaflet-map';

@Component({
  selector: 'zona-parking2',
  templateUrl: './zonaParking2.html',
  styleUrls: ['./zonaParking2.scss'],
})
export class ZonaParking2 {

  constructor(private _elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    const el = this._elementRef.nativeElement.querySelector('.leaflet-maps');

    L.Icon.Default.imagePath = '../../../../../assets/img/theme/vendor/leaflet';
    const map = L.map(el).setView([38.38167691521913, -0.5137456208467484], 17);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    }).addTo(map);

    let universidad = L.marker([38.38167691521913, -0.5137456208467484]).addTo(map)
      .bindPopup('Nombre de Tienda')
      .openPopup();   
  }
}
