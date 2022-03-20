import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  GIPHY_API_KEY,
  GIPHY_SEARCH_HOST_URL,
  PAGE_SIZE,
} from '../shared/constants';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  searchValue = '';
  giphyData: any;
  resultsChanged = new Subject<any>();

  constructor(private http: HttpClient) {}

  search(query: string) {
    this.searchValue = query;
    const GIPHY_FULL_URL = `${GIPHY_SEARCH_HOST_URL}?api_key=${GIPHY_API_KEY}&limit=9&offset=0&q=${query}`;
    this.http.get(GIPHY_FULL_URL).subscribe(
      resp => {
        this.giphyData = resp;
        this.resultsChanged.next(resp);
      },
      error => {
        console.log(error);
      }
    );
  }

  changePage(pageNumber: number) {
    const offset = (pageNumber - 1) * PAGE_SIZE;
    const GIPHY_FULL_URL = `${GIPHY_SEARCH_HOST_URL}?api_key=${GIPHY_API_KEY}&limit=9&offset=${offset}&q=${this.searchValue}`;
    this.http.get(GIPHY_FULL_URL).subscribe(
      resp => {
        this.giphyData = resp;
        this.resultsChanged.next(resp);
      },
      error => {
        console.log(error);
      }
    );
  }

  getData(): any {
    const offset = this.giphyData.pagination.offset;
    const pageNumber = offset === 0 ? 1 : (offset + PAGE_SIZE) / PAGE_SIZE;

    return {
      data: this.giphyData.data,
      collectionSize: this.giphyData.pagination.total_count,
      pageNumber,
    };
  }

  getFullUrl(gifId: string) {
    return `https://media.giphy.com/media/${gifId}/giphy.gif`;
  }
}
