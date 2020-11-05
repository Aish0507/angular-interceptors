import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestsService {
  constructor(private httpClient: HttpClient) {}

  getInformation(): Observable<unknown> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  postRequest(): Observable<unknown> {
    return this.httpClient.post('https://google.com.sv', {});
  }
}
