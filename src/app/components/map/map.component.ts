import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'ip-tracker-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {
  private map: L.Map | null = null;

  @Input() lat: number | null = null;
  @Input() lng: number | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.lat && changes.lng) {
      this.updateMap(this.lat!, this.lng!);
    }
  }

  private updateMap(lat: number, lng: number): void {
    if (this.map) {
      this.map.setView([lat, lng], 13);
      L.marker([lat, lng]).addTo(this.map).bindPopup('¡Está aquí!').openPopup();
    }
  }

  ngOnInit(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }
}
