import { Component, Inject } from '@angular/core';
import { LocalStorageToken } from './localStorage.token';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[LoginService],
})
export class AppComponent {
  title = 'project1';
  token: any;
  constructor(
    private loginservice: LoginService,
    @Inject(LocalStorageToken) private dd: Storage
  ) {}

  ngOnInit() {
    console.log(this.dd.getItem('token'));
    this.token = this.dd.getItem('token');
  }
}
