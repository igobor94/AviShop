import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { INotification, NotificationType } from '../model/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  private notifications$: Subject<INotification> = new BehaviorSubject<INotification>(null!);

  success (message: string, duration?: number) {
    this.notify(message, NotificationType.Success, duration)
  }
  warning (message: string, duration?: number) {
    this.notify(message, NotificationType.Warning, duration)
  }
  error (message: string, duration?: number) {
    this.notify(message, NotificationType.Error, duration)
  }

  private notify(message: string, type: NotificationType, duration?: number) {
    duration = !duration ? 3000 : duration;
    this.notifications$.next({
      message: message,
      type: type,
      duration: duration
    } as INotification);
  }

  get notification() {
    return this.notifications$.asObservable()
  }


 
}
