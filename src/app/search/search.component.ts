import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Continents } from 'src/enums/continents';

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

  constructor() {}

  ngOnInit(): void {}

  startSearchByName(): void {
    this.searchByNameEvent.emit(this.nameFilter);
  }

  startSearchByRegion(region: string): void {
    this.continentFilter = region;
    this.searchByRegionEvent.emit(this.continentFilter);
  }
}
