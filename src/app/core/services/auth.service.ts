import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable, tap } from 'rxjs';
import { User } from '../model/user.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
  observe: 'response',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}

  checkIfAuthenticated(): boolean {
    const token: string | null = localStorage.getItem('token');
    console.log(!this.jwtHelper.isTokenExpired(token || undefined))
    return !this.jwtHelper.isTokenExpired(token || undefined);
  }

  login(user: any): any {
    localStorage
    return this.http
      .post<any>('http://localhost:8000/login', user)
  }

  register(user: any): any {
    const userStringified = JSON.stringify(user);
    console.log(userStringified);
    return this.http.post('http://localhost:8000/register', userStringified);
  }
}
