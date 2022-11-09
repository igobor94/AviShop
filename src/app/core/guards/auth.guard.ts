import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService) {}
  canActivate(): boolean {
    let isLoggedIn: boolean = false;
    this.auth.isLoggedIn.subscribe(value => isLoggedIn = value)
    return isLoggedIn
  }
  
}
