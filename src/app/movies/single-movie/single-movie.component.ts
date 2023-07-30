import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent {

  id !:number;
  movie : any = '';

  constructor(private http: HttpClient,private router: ActivatedRoute) {}
  
  ngOnInit() {
    this.router.paramMap.subscribe( (param) => {
      this.id = Number(param.get('id'));
      // console.log(this.id);
      this.http.get('http://localhost:3000/movies/'+this.id).subscribe( (param) => {
        this.movie = param;
      })
    })
  }

}
