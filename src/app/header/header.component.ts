import { Component, Input, Inject } from '@angular/core';
import { LocalStorageToken } from '../localStorage.token';
import { LoginService } from '../login.service';
import { MatDialog } from '@angular/material/dialog';
import { UserprofileComponent } from '../userprofile/userprofile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private loginservice: LoginService,@Inject(LocalStorageToken) private localstorage: Storage,private matdialog: MatDialog) {}
  userProfile : any = {};
  userLogged: boolean = false;
  profile = "Profile"
  ngOnInit() {
    // this.localstorage.clear();
    this.loginservice.firstArguMent.subscribe( (param) => {
      // console.log(param,'header');
      // console.log(param.username,'header');
      this.localstorage.setItem('userName',param.username);
      this.localstorage.setItem('userPassword',param.password);
      this.localstorage.setItem('token',param.password);
      this.check(param);
    })
    this.userProfile.username = this.localstorage.getItem('userName');
    this.userProfile.password = this.localstorage.getItem('userPassword');
    this.check(this.userProfile);
    this.loginservice.secondArgument.subscribe ( (param) => {
      // console.log(param);
      this.userLogged = false;
    })
  }
  check(param: any) {
    if(param.username && param.password) {
      this.userLogged = true;
    } else {
      this.userLogged = false;
    }
    this.profile = param.username;
  }

  userProfileModal() {
    this.matdialog.open(UserprofileComponent);
  }
}
