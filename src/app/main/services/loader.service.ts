import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoaderService {
  status$ = new BehaviorSubject(false);
  constructor() {}

  get status(): Observable<boolean> {
    return this.status$.asObservable();
  }

  toggleStatus(status: boolean): void {
    if (this.status$.value !== status) {
      this.status$.next(status);
    }
  }
}
