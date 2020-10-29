import { TestBed } from '@angular/core/testing';

import { LoadingStatusInterceptor } from './loading-status.interceptor';

describe('LoadingStatusInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoadingStatusInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoadingStatusInterceptor = TestBed.inject(LoadingStatusInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
