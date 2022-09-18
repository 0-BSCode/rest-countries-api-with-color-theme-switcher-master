import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormatterService {
  constructor() {}

  formatPopulation(population: number): string {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
