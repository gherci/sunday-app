import { Component, Input } from '@angular/core';

import { GiphyService } from '../../services/giphy.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() giphy: any = {};

  constructor(private giphyService: GiphyService) {}

  createFullUrl(id: string): string {
    return this.giphyService.getFullUrl(id);
  }
}
