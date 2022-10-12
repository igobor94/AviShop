import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  @Input() message: string = ''
  @Input() type: string = ''

  ngOnInit(): void {
  }

  notifySuccess(message: string) {
    this.notificationService.success(message)
  }
  notifyWarning(message: string) {
    this.notificationService.warning(message)
  }
  notifyError(message: string) {
    this.notificationService.error(message)
  }

}
