import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GiphyService } from './services/giphy.service';
import { Subject } from 'rxjs';

const giphyServiceStub: Partial<GiphyService> = {
  searchValue: '',
  giphyData: [],
  resultsChanged$: new Subject<any>(),
};

describe('AppComponent', () => {
  let giphyService: GiphyService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, BrowserModule, RouterTestingModule],
      declarations: [HeaderComponent, SearchComponent, AppComponent],
      providers: [{ provide: GiphyService, useValue: giphyServiceStub }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sunday-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sunday-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    giphyService = TestBed.inject(GiphyService);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('.container .navbar-brand')?.textContent
    ).toContain("Hi there, Let's search on Giphy");
  });
});
