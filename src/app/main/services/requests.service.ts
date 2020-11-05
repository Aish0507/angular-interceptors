import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestsService {
  constructor(private httpClient: HttpClient) {}

  getInformation(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
