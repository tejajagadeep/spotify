import { Injectable } from '@angular/core';
import { AuthenticationService } from '../data/authentication.service';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService  implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let basicAuthHeaderString = localStorage.getItem('authenticatedUser');
    let token = localStorage.getItem('token')

    if (basicAuthHeaderString && token) {
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      })
    }
    return next.handle(request);
  }

}
