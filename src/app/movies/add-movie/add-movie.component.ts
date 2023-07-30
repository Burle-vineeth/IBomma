import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {
  addMovie !: FormGroup;
  constructor(private fb : FormBuilder,private http:HttpClient) {}
  ngOnInit() {
    this.addMovie = this.fb.group({
      title:new FormControl(null,[Validators.required]),
      year: [''],
      stars:[''],
      rating:[''],
      director:[''],
      imdblink:[''],
      cost : ['',[Validators.required,this.customValidator]],
      onSale:[,[Validators.required]],
      imageUrl:['',[Validators.required]],
    })
  }
  success = false;
  failed = false;
  submitFormClick : boolean = false;
  submitMovie() {
    // console.log(this.addMovie.controls['cost'].errors);
    if(this.addMovie.controls['onSale'].value == 0) {
      this.addMovie.controls['onSale'].setValue(false);
    } else {
      this.addMovie.controls['onSale'].setValue(true);
    }
    if(this.addMovie.valid) {
      this.http.post('http://localhost:3000/movies',this.addMovie.value).subscribe( (param) => {
        this.success = true;
      });
      this.submitFormClick = false;
      this.addMovie.reset();
      setTimeout( ()=> {
        this.success = false;
      },3000)
      console.log("added");
    } else {
      this.submitFormClick = true;
      console.log("failed");
      this.failed = true;
      setTimeout( ()=> {
        this.failed = false;
      },3000)
    }
    
  }
  cancel() {
    this.addMovie.reset();
    this.submitFormClick = false;
  }
  customValidator(control:any) {
    if(control.value > 5) {
      return null;
    }
    return {'error':true};
  }
  // delete() {
  //   this.http.delete('http://localhost:3000/movies/16').subscribe( () => {
  //     console.log("deleted");
  //   })
  // }
}