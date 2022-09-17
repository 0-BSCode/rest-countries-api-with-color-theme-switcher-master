import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries/countries.service';
import { Country } from 'src/types/countries';
import { Continents } from 'src/enums/continents';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  countries: Country[] = [];
  region: string = Continents.ALL;
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService
      .getAllCountries()
      .subscribe((response) => (this.countries = response));
  }

  searchCountryByName(name: string): void {
    this.countries = [];
    if (name.length) {
      this.countriesService.getCountriesByName(name).subscribe((response) => {
        this.countries = response;
      });
    } else {
      this.countriesService
        .getAllCountries()
        .subscribe((response) => (this.countries = response));
    }
  }

  setRegion(region: string): void {
    this.region = region;
  }

  filterCountryByRegion(): Country[] {
    let newCountries: Country[] = [];

    if (this.region === Continents.ALL) {
      newCountries = this.countries;
    } else {
      for (const country of this.countries) {
        if (country.region === this.region) newCountries.push(country);
      }
    }

    return newCountries;
  }
}
