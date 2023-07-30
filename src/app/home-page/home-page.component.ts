import { FormatWidth } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { __param } from 'tslib';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports : [NgbCarouselModule,NgIf,MatIconModule,CommonModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  // images = [944,1011,984].map( (n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private http: HttpClient) {}
  images : any;
  chinna:any = false;
  ngOnInit() {
    this.http.get('http://localhost:3000/movies').subscribe( (param) => {
      this.images = param;
      this.images = this.images.reverse();
    });
  }

}
