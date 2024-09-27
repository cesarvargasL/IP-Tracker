import { Component, OnChanges, SimpleChanges, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'ip-tracker-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {
  private map: L.Map | null = null;

  @Input() public lat: number | null = null;
  @Input() public lng: number | null = null;

  ngOnInit(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.lat && changes.lng && this.lat !== null && this.lng !== null) {
      this.updateMap(this.lat, this.lng);
    }
  }

  private updateMap(lat: number, lng: number): void {
    if (this.map) {
      this.map.setView([lat, lng], 13);
      L.marker([lat, lng])
        .addTo(this.map)
        .bindPopup('is located here!')
        .openPopup();
    }
  }
}
