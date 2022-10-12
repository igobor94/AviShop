import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from './error/error.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    ErrorComponent,
    NotificationComponent,
  ],
  imports: [CommonModule],
  exports: [NotificationComponent, ErrorComponent],
})
export class SharedModule {}
