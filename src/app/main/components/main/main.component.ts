import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { RequestsService } from '../../services/requests.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  status = 'Not loading';
  response: any;
  subscription$ = new Subscription();

  constructor(
    private loaderService: LoaderService,
    private requestsService: RequestsService
  ) {}

  ngOnInit(): void {
    this.subscription$ = this.loaderService.status.subscribe((status) =>
      status ? (this.status = 'Loading') : (this.status = 'Not loading')
    );
  }

  obtainUsersInformation(): void {
    this.requestsService.getInformation().subscribe((response) => {
      this.response = response;
    });
  }

  failRequest(): void {
    this.response = null;
    this.requestsService.postRequest().subscribe(() => {});
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
