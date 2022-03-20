import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemComponent } from './list-item.component';
import { GiphyService } from '../../services/giphy.service';

const giphyServiceStub: Partial<GiphyService> = {
  searchValue: '',
  giphyData: [],
  getFullUrl: (gifId: string): string => {
    return `https://media.giphy.com/media/${gifId}/giphy.gif`;
  },
};

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let giphyService: GiphyService;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListItemComponent],
      providers: [{ provide: GiphyService, useValue: giphyServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    giphyService = TestBed.inject(GiphyService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
