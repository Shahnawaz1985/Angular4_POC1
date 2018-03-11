/**
 * New typescript file
 */
import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from './search-result.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html'
})

export class SearchResultComponent implements OnInit {
  @Input() result: SearchResult;

  cosntructor() {}
  ngOnInit() {

  }

}
