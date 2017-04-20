import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'header-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  searchStatus = false;
  searchValue:string = '';

  closeSearch() {
    this.searchStatus = false; // Close the search block
    this.searchValue = null; // Empty the search field
  }

  constructor() { }

  ngOnInit() {
  }
}