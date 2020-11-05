import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CacheService } from '../services/cache.service';
import { tap } from 'rxjs/operators';
import { CachedResponse } from '../interfaces/cached-response.interface';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cacheService: CacheService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.cacheableRequest(request.method)) {
      const cachedResponse = this.cacheService.get(request.url);
      return cachedResponse
        ? of(cachedResponse)
        : this.submitAndCacheRequest(request, next);
    }

    return next.handle(request);
  }

  cacheableRequest(method: string): boolean {
    // TODO: Add whitelist (if you want to cache only certain get requests).
    return method === 'GET';
  }

  submitAndCacheRequest(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((event) => {
        const cachedResponse: CachedResponse = {
          response: event,
          date: new Date(),
        };
        this.cacheService.set(request.url, cachedResponse);
      })
    );
  }
}
