import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PAGE_SIZE } from '../shared/constants';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-giphy-list',
  templateUrl: './giphy-list.component.html',
  styleUrls: ['./giphy-list.component.scss'],
})
export class GiphyListComponent implements OnInit, OnDestroy {
  giphyData: any[] = [];
  collectionSize!: number;
  pageSize!: number;
  page!: number;
  subscription$!: Subscription;

  constructor(private giphyService: GiphyService) {}

  ngOnInit(): void {
    this.pageSize = PAGE_SIZE;
    this.page = 1;
    this.subscription$ = this.giphyService.resultsChanged$.subscribe(() => {
      const res = this.giphyService.getData();
      this.giphyData = res.data;
      this.collectionSize = res.collectionSize;
      this.page = res.pageNumber;
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  onPageChange(pageNumber: number) {
    this.giphyService.changePage(pageNumber);
    window.scrollTo(0, 0);
  }
}
