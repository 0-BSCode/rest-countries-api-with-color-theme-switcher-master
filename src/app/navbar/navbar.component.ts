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
