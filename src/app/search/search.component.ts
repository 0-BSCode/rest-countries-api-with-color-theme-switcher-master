import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Continents } from 'src/enums/continents';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() searchByNameEvent = new EventEmitter<string>();
  @Output() searchByRegionEvent = new EventEmitter<string>();
  nameFilter?: string;
  continents: Continents[] = Object.values(Continents);
  continentFilter: string = 'Filter by Region';
  showRegion: boolean = false;

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}

  toggleFilter(): void {
    this.showRegion = !this.showRegion;
  }

  startSearchByName(): void {
    this.searchByNameEvent.emit(this.nameFilter);
  }

  startSearchByRegion(region: string): void {
    this.showRegion = false;
    this.continentFilter = region;
    this.searchByRegionEvent.emit(this.continentFilter);
  }
}
