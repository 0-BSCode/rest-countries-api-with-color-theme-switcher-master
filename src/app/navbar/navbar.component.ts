import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  private isDarkMode: boolean = false;
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  toggleMode(): void {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      this.themeService.darkTheme();
    } else {
      this.themeService.lightTheme();
    }
  }
}
