import { TestBed } from '@angular/core/testing';

import { PayloadTransformInterceptor } from './payload-transform.interceptor';

describe('PayloadTransformInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PayloadTransformInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PayloadTransformInterceptor = TestBed.inject(PayloadTransformInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
