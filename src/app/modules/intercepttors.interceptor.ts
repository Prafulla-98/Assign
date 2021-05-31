import { Injectable, PLATFORM_INITIALIZER } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';

@Injectable()
export class IntercepttorsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const hardcodedToken = '1d47s54j';
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${hardcodedToken}`
      }
    });
    return next.handle(request);

  }
}
