import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/types/countries';
import { CountriesService } from '../services/countries/countries.service';
import { FormatterService } from '../services/formatter/formatter.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  @Input() countries?: Country[];
  constructor(
    private formatterService: FormatterService,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {}

  formatPopulation(population: number): string {
    return this.formatterService.formatPopulation(population);
  }
}
