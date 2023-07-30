import { HttpClient } from '@angular/common/http';
import { Component, Inject, isDevMode } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageToken } from '../localStorage.token';
import { LoginService } from '../login.service';
import { MovieServiceService } from '../movie-service.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies: any = [];
  back:boolean = false;
  isadminValid: boolean = false;
  constructor(private ar: ActivatedRoute, private movieService: MovieServiceService,private http: HttpClient,private loginservice: LoginService,@Inject(LocalStorageToken) private localstorage: Storage) {}

  ngOnInit() {
    // this.ar.queryParamMap.subscribe((qparams) => {
    //   let onSale = qparams.get('onSale');
    //   if (onSale) {
    //     this.movies = this.movieService.getMovies().filter((p: any) => {
    //       return p.onSale;
    //     });
    //   } else {
    //     this.movies = this.movieService.getMovies();
    //   }
    // })
    // console.log(this.localstorage.getItem('admin'),"vineeth");
    // this.isadminValid = this.loginservice.admin;
    // console.log(this.isadminValid);
    // this.isadminValid = this.localstorage.getItem('admin');
    if(this.localstorage.getItem('admin') == 'false' || this.localstorage.getItem('admin') == null) {
      this.isadminValid = false;
      // console.log('admin invalid');
    } else {
      this.isadminValid = true;
      // console.log('admin valid',this.localstorage.getItem('admin'));
      
    }
    this.http.get('http://localhost:3000/movies').subscribe( (param) => {
      let listIterating:any  = [];
      listIterating= param;
      this.ar.queryParamMap.subscribe( (qparam) => {
        let onSale = qparam.get('onSale');
        if(onSale) {
          this.back = true;
          this.movies = listIterating.filter( (p:any) => {
            return p.onSale;
          })
        } else {
          this.back = false;
          this.movies = listIterating;
        }
      })
    })

  }
}
