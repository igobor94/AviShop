import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor( public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      const expectedRole = route.data['expectedRole'];

      const token: any = localStorage.getItem('token');

      const tokenPayload: any = decode(token);

      if (!this.auth.checkIfAuthenticated() || tokenPayload.role !== expectedRole ) {
        this.router.navigate(['login']);
        return false
      }
      return true;
  }
  
}
