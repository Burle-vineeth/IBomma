import { FormatWidth } from '@angular/common';
import { Component, Inject, TestabilityRegistry } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  
  styleUrls: ['./signup.component.css'],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  // user :any;

  
	// images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() {}

  // testForm = new FormGroup( {
  //   mobileNums : new FormArray(
  //     [
  //       new FormControl(null,[Validators.required]),
  //       new FormControl(null,[Validators.required]),
  //     ]
  //   )
  // })

  ngOnInit() {

  }

  // userName = new FormGroup({
  //   name : new FormControl(null,Validators.required,this.asyncCheck),
  // }) 
  // asyncCheck(c:any):Promise<any> {
  //   let vineeth = ['user1','user2','user3'];
  //   let sukanya = new Promise( (resolve,reject) => {
  //     setTimeout( function() {
  //       let name = c.value;
  //       if(vineeth.indexOf(name) >= 0) {
  //       return resolve({'duplicate':true}) ;
  //       } else {
  //         return resolve(null);
  //       }
  //     },3000)
  //   })
  //   return sukanya;
  // }

  // addNumber() {
  //   let mobileNums = this.testForm.controls['mobileNums'] as FormArray;
  //   mobileNums.push(new FormControl(null,[Validators.required]));
  // } 
  // removeNumber(i:any) {
  //   let mobileNums = this.testForm.controls['mobileNums'] as FormArray;
  //   mobileNums.removeAt(i);
  // }

  show = true;

}
