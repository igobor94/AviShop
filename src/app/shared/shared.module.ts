import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from './error/error.component';
import { NotificationComponent } from './notification/notification.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';

@NgModule({
  declarations: [
    ErrorComponent,
    NotificationComponent,
    PasswordStrengthComponent,
  ],
  imports: [CommonModule],
  exports: [NotificationComponent, ErrorComponent, PasswordStrengthComponent],
})
export class SharedModule {}
