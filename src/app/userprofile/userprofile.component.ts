import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocalStorageToken } from '../localStorage.token';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {

  constructor(private matdialog: MatDialog,@Inject(LocalStorageToken) private localstorage: Storage,private loginservice: LoginService) {}
  userName = this.localstorage.getItem('userName');

  logout() {
    this.localstorage.clear();
    this.loginservice.logOut();
    this.matdialog.closeAll();
  }
}
