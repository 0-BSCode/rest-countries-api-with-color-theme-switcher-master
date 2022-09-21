import { Injectable } from '@angular/core';
import { Currency, CurrencyInformation, Language } from 'src/types/countries';

@Injectable({
  providedIn: 'root',
})
export class FormatterService {
  constructor() {}

  formatPopulation(population: number): string {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  formatTopLevelDomains(tlds: string[]): string {
    return tlds.join(', ');
  }

  formatCurrencies(currencies: Currency): string {
    const currencyInfos: CurrencyInformation[] = Object.values(currencies);
    let res: string[] = [];
    currencyInfos.forEach((currencyInfo) => {
      res.push(currencyInfo.name);
    });

    return res.join(', ');
  }

  formatLanguages(languages: Language): string {
    const countryLanguages: string[] = Object.values(languages);
    return countryLanguages.join(', ');
  }
}
