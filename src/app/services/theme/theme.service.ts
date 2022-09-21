import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private getter = window.getComputedStyle(document.documentElement);
  private setter = document.documentElement.style;

  constructor() {}

  darkTheme(): void {
    // DARK MODE COLORS
    const elementsDark = this.getter.getPropertyValue('--color-dark-dark-blue');
    const backgroundDark = this.getter.getPropertyValue(
      '--color-dark-v-dark-blue'
    );
    const inputDark = this.getter.getPropertyValue('--color-white');
    const textDark = this.getter.getPropertyValue('--color-white');

    this.setter.setProperty('--theme-elements', elementsDark);
    this.setter.setProperty('--theme-background', backgroundDark);
    this.setter.setProperty('--theme-input', inputDark);
    this.setter.setProperty('--theme-text', textDark);
  }

  lightTheme(): void {
    // LIGHT MODE COLORS
    const elementsLight = this.getter.getPropertyValue('--color-white');
    const backgroundLight = this.getter.getPropertyValue(
      '--color-light-light-gray'
    );
    const inputLight = this.getter.getPropertyValue('--color-light-dark-gray');
    const textLight = this.getter.getPropertyValue('--color-light-v-dark-blue');

    this.setter.setProperty('--theme-elements', elementsLight);
    this.setter.setProperty('--theme-background', backgroundLight);
    this.setter.setProperty('--theme-input', inputLight);
    this.setter.setProperty('--theme-text', textLight);
  }
}
