import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { GiphyService } from '../services/giphy.service';

const giphyServiceStub: Partial<GiphyService> = {
  searchValue: '',
  giphyData: [],
  getFullUrl: (gifId: string): string => {
    return `https://media.giphy.com/media/${gifId}/giphy.gif`;
  },
};

describe('SearchComponent', () => {
  let component: SearchComponent;
  let giphyService: GiphyService;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [{ provide: GiphyService, useValue: giphyServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    giphyService = TestBed.inject(GiphyService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
