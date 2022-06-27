import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    ErrorComponent,
  ],
  imports: [CommonModule],
  exports: [],
})
export class SharedModule {}
