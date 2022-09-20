import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries/countries.service';
import { FormatterService } from '../services/formatter/formatter.service';
import { Country } from 'src/types/countries';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css'],
})
export class CountryPageComponent implements OnInit {
  country?: Country;
  borderCountries?: Country[];

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService,
    public formatterService: FormatterService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const name: string = this.route.snapshot.paramMap.get('name') as string;
    this.fetchCountry(name);
  }

  goBack(): void {
    this.location.back();
  }

  async fetchCountry(name: string): Promise<void> {
    const countriesSource$ = this.countriesService.getCountriesByName(name);
    const countries = await lastValueFrom(countriesSource$);

    this.country = countries[0];

    const borderCountriesSource$ = this.countriesService.getCountriesByCodes(
      this.country.borders || []
    );

    const borderCountries = await lastValueFrom(borderCountriesSource$);

    this.borderCountries = borderCountries;
  }
}
