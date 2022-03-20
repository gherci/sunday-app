import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { GiphyService } from './giphy.service';

const giphyDataMock = {
  pagination: {
    total_count: 60,
    offset: 0,
  },
  data: ['test'],
};

describe('GiphyService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: GiphyService;
  const expectedGiphy: any[] = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
  ];

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new GiphyService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check the getData method', () => {
    const getDataMock = {
      data: ['test'],
      collectionSize: giphyDataMock.pagination.total_count,
      pageNumber: 1,
    };
    service.giphyData = giphyDataMock;
    const getDataResult = service.getData();

    expect(getDataResult).toEqual(getDataMock);
  });

  it('should test getFullUrl() method', () => {
    const url = 'https://media.giphy.com/media/testId/giphy.gif';
    const result = service.getFullUrl('testId');

    expect(result).toBe(url);
  });

  it('should text the search() method', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(expectedGiphy));

    service.search('cat');
    done();

    expect(service.giphyData).toEqual(expectedGiphy);
  });

  it('should text the search() method', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(expectedGiphy));

    service.changePage(1);
    done();

    expect(service.giphyData).toEqual(expectedGiphy);
  });
});
