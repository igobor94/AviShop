import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(`AddHeaderInterceptor - ${req.url}`)
    
    let jsonReq: HttpRequest<any> = req.clone({
      setHeaders: { 'Content-Type': 'application/json'  }
    });

    return next.handle(jsonReq)
  }

}
