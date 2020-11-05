import { TestBed } from '@angular/core/testing';

import { RequestTransformInterceptor } from './request-transform.interceptor';

describe('RequestTransformInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RequestTransformInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RequestTransformInterceptor = TestBed.inject(RequestTransformInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
