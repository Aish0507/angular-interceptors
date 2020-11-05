import { Injectable } from '@angular/core';
import { CachedResponse } from '../interfaces/cached-response.interface';

@Injectable()
export class CacheService {
  cache = new Map();
  requestExpiry = 10000;

  get(requestUrl: string): any {
    const result = this.cache.get(requestUrl) as CachedResponse;
    if (result) {
      const { response, date: setDate } = result;

      return Date.now() - setDate.getTime() > this.requestExpiry
        ? this.delete(requestUrl)
        : response;
    }
  }

  set(requestUrl: string, cachedResponse: CachedResponse): void {
    this.cache.set(requestUrl, cachedResponse);
  }

  delete(requestUrl: string): null {
    this.cache.delete(requestUrl);
    return null;
  }
}
