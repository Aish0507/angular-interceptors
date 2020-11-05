import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { convertPayload } from '../utils/payload-transform';

@Injectable()
export class PayloadTransformInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let requestBody = request.body;
    if (request.body) {
      requestBody = convertPayload(requestBody, 'snakeCase');
    }
    return this.handleRequest(request.clone({ body: requestBody }), next);
  }

  handleRequest(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map((response) => {
        if (response instanceof HttpResponse) {
          return response.clone({
            body: convertPayload(response.body, 'camelCase'),
          });
        }
        return response;
      })
    );
  }
}
