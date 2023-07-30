import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route: Router, private loginservice: LoginService, private signUp: MatDialog) { }

  user: any = {
    username: '',
    password: '',
  };

  valid: boolean = false;
  showEye: boolean = false;
  type = "password";

  ngOnInit() {

  }

  submitLogin(loginform: any) {
    console.log("submit");
    if (loginform.invalid) {
      this.valid = true;
    } else {
      console.log("first");
      this.loginservice.profile(this.user);
      console.log("second");
      this.loginservice.isValid = true;
      this.loginservice.isAdmin(this.user);
      this.route.navigateByUrl('movies');
      console.log("three");
    }
  }

  openEye() {
    this.showEye = !this.showEye;
    if (this.type == 'text') {
      this.type = 'password';
    } else {
      this.type = 'text';
    }
  }

}
