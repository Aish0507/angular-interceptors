import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { LoaderService } from './services/loader.service';
import { RequestsService } from './services/requests.service';

@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [CommonModule],
  providers: [LoaderService, RequestsService],
})
export class MainModule {}
