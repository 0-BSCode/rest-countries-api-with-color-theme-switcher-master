import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private baseUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}

  getAllCountries(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/all`);
  }

  getCountriesByName(name: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/name/${name}`);
  }

  getCountriesByRegion(region: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/region/${region}`);
  }
}
