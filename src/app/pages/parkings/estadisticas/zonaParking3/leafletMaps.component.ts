import { Component, ElementRef } from '@angular/core';

import 'leaflet-map';

@Component({
  selector: 'zona-parking3',
  templateUrl: './zonaParking3.html',
  styleUrls: ['./zonaParking3.scss'],
})
export class ZonaParking3 {

  constructor(private _elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    const el = this._elementRef.nativeElement.querySelector('.leaflet-maps');

    L.Icon.Default.imagePath = '../../../../../assets/img/theme/vendor/leaflet';
    const map = L.map(el).setView([38.38167691521913, -0.5137456208467484], 18);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    }).addTo(map);

    var polygon = L.polygon([
      [38.382214, -0.514394],
      [38.382401, -0.513611],
      [38.381278, -0.513116],
      [38.381100, -0.513914],

    ]).addTo(map);


    var universidad = L.marker([38.38185353024073, -0.5137838423252106]).addTo(map)
      .bindPopup('Parking F. de Economia')
      .openPopup();   
  }
}
