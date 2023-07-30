import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { MovieServiceService } from './movie-service.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('MovieServiceService', () => {
  let service: MovieServiceService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MovieServiceService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getMovies unit test case', fakeAsync(() => {
    service.getMovies();
    tick();
    expect(service.movies).toBeTruthy();
  }));
});
