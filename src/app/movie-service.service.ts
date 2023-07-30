import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { }
  movies :any = [];
  getMovies() {
     this.http.get('http://localhost:3000/movies').subscribe((param) => {
      this.movies = param;
    });
    return this.movies;
  }

}
