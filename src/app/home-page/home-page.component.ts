import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries/countries.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  countries?: any;
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService
      .getAllCountries()
      .subscribe((response) => (this.countries = response));
  }

  searchCountryByLocation(searchString: string): void {
    this.countries = undefined;
    this.countriesService
      .getCountriesByName(searchString)
      .subscribe((response) => (this.countries = response));
  }
}
