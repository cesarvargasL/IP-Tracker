import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IpData } from '../interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  private apiUrl = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_luMvBhjtCUsyTmJzGqUyM4S1kQ80D&ipAddress=';

  constructor(private http: HttpClient) {}

  fetchIpData(ipAddress: string): Observable<IpData> {
    return this.http.get<IpData>(`${this.apiUrl}${ipAddress}`).pipe(
      catchError((error) => {
        console.error('Failed to fetch IP data:', error);
        throw error;
      })
    );
  }
}
