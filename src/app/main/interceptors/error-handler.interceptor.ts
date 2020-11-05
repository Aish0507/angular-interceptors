import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private toastrService: ToastrService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.displayError(error);
        return throwError(error);
      })
    );
  }

  displayError(error: HttpErrorResponse): void {
    const { status } = error;
    // TODO: Check different statuses to filter which of them should be displayed.
    if (status !== 401) {
      this.toastrService.error(error.message, 'An error occurred');
    }
  }
}
