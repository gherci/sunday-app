import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyListComponent } from './giphy-list.component';
import { GiphyService } from '../services/giphy.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Subject } from 'rxjs';

const giphyServiceStub: Partial<GiphyService> = {
  searchValue: '',
  giphyData: [],
  resultsChanged$: new Subject<any>(),
};

describe('GiphyListComponent', () => {
  let component: GiphyListComponent;
  let giphyService: GiphyService;
  let fixture: ComponentFixture<GiphyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiphyListComponent],
      providers: [{ provide: GiphyService, useValue: giphyServiceStub }],
      imports: [NgxPaginationModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyListComponent);
    component = fixture.componentInstance;
    giphyService = TestBed.inject(GiphyService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
