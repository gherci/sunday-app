import { Component } from '@angular/core';
import { GiphyService } from '../../../services/giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  query = '';

  constructor(private giphyService: GiphyService) {}

  onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    console.log('event', event);
    this.giphyService.search(this.query);
  }
}
