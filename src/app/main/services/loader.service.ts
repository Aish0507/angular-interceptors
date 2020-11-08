import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoaderService {
  private statusSubject$ = new BehaviorSubject(false);

  get status$(): Observable<boolean> {
    return this.statusSubject$.asObservable();
  }

  toggleStatus(status: boolean): void {
    if (this.statusSubject$.value !== status) {
      this.statusSubject$.next(status);
    }
  }
status}
