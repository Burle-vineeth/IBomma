import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent {
  movies: any = [];
  back:boolean = false;
  constructor(private ar: ActivatedRoute, private movieService: MovieServiceService,private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('http://localhost:3000/movies').subscribe( (param : any) => {
      let listIterating:any  = [];
      listIterating= param;
      this.movies = listIterating.filter( (p:any) => {
        return p.onSale;
      })
      // console.log(this.movies);
      
    })
  }
}
