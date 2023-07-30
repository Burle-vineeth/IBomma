import { EventEmitter, Inject, Injectable } from '@angular/core';
import { LocalStorageToken } from './localStorage.token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(@Inject(LocalStorageToken) private localstorage: Storage) { }

  public admin!: boolean;

  isValid: boolean = false;

  isAdmin(admin : any) {
    if(admin.username == "vineeth" && admin.password == "vineeth") {
      admin = true;
    } else {
      admin = false;
    }
    this.localstorage.setItem('admin',admin);
    // console.log("logged In");
  }

  firstArguMent = new EventEmitter();
  secondArgument = new EventEmitter();

  profile(para: any) {
    // console.log(para,'service');
    this.firstArguMent.emit(para);
  }
  logOut() {
    this.secondArgument.emit('null');
  }
}
