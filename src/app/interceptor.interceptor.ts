import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';
import { LocalStorageToken } from './localStorage.token';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(@Inject(LocalStorageToken) private dd: Storage) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let val = this.dd.getItem('token');
    let newVal = request.clone({
      setHeaders : {
        Authorization : `Beaker ${ val }`
      }
    })
    return next.handle(newVal);
  }
}
