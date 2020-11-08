import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let clonedRequest = request;
    const token = localStorage.getItem('token');
    if (token) {
      clonedRequest = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }
    return next.handle(clonedRequest);
  }
}
