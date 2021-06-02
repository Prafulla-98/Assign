import { TestBed } from '@angular/core/testing';

import { IntercepttorsInterceptor } from './intercepttors.interceptor';

describe('IntercepttorsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      IntercepttorsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: IntercepttorsInterceptor = TestBed.inject(IntercepttorsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
