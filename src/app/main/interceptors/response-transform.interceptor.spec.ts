import { TestBed } from '@angular/core/testing';

import { ResponseTransformInterceptor } from './response-transform.interceptor';

describe('ResponseTransformInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ResponseTransformInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ResponseTransformInterceptor = TestBed.inject(ResponseTransformInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
