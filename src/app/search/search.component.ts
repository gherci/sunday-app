import { Component } from '@angular/core';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  query = '';

  constructor(private giphyService: GiphyService) {}

  onSubmit() {
    this.giphyService.search(this.query);
  }
}
