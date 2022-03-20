import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GIPHY_API_KEY, GIPHY_SEARCH_HOST_URL } from '../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  searchValue = '';
  giphyData: any;

  constructor(private http: HttpClient) {}

  search(query: string) {
    this.searchValue = query;
    const GIPHY_FULL_URL = `${GIPHY_SEARCH_HOST_URL}?api_key=${GIPHY_API_KEY}&limit=9&offset=0&q=${query}`;
    this.http.get(GIPHY_FULL_URL).subscribe(
      resp => {
        this.giphyData = resp;
        console.log(resp);
      },
      error => {
        console.log(error);
      }
    );
    console.log('searched for giphy with term', query);
  }
}
