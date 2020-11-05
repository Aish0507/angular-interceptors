import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {LoadingStatusInterceptor} from './main/interceptors/loading-status.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MainModule, HttpClientModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoadingStatusInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
