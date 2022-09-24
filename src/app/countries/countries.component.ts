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

  ngAfterViewInit(): void {
    const countryCards = document.querySelectorAll('.country');
    const observer = new IntersectionObserver(
      (entries) => {
        console.log('ENTRIES');
        console.log(entries);
        entries.forEach((entry) => {
          entry.target.classList.toggle('country--show', entry.isIntersecting);
          // if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.5,
        rootMargin: '100px',
      }
    );

    countryCards.forEach((card) => {
      observer.observe(card);
    });
  }

  formatPopulation(population: number): string {
    return this.formatterService.formatPopulation(population);
  }
}
