import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() startSearchEvent = new EventEmitter<string>();
  search?: string;
  constructor() {}

  ngOnInit(): void {}

  startSearch(): void {
    this.startSearchEvent.emit(this.search);
  }
}
