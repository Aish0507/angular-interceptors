import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { RequestsService } from './services/requests.service';

@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [CommonModule],
  providers: [RequestsService],
})
export class MainModule {}
