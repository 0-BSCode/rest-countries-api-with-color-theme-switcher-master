import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}

  toggleMode(): void {
    this.themeService.toggleMode();

    if (this.themeService.darkMode) {
      this.themeService.darkTheme();
    } else {
      this.themeService.lightTheme();
    }
  }
}

/* STUFF TO DO
1. Desktop design
2. Adjust size for mobile sizes
3. Don't load all cards at once (render a few at a time)
4. Slightly better loading animation
*/
