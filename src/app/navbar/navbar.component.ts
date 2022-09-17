import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  private isDarkMode: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggleMode(): void {
    this.isDarkMode = !this.isDarkMode;
    const dom = document.documentElement.style;
    if (this.isDarkMode) {
      dom.setProperty('--theme-elements', 'black');
    } else {
      dom.setProperty('--theme-elements', 'white');
    }
  }
}
