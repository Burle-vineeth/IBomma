import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {
  actors : any;
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.http.get('http://localhost:3000/actors').subscribe( (param) => {
      this.actors = param;
    })
  }
}
