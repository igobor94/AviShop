import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  constructor(private http: HttpClient) {}
  
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
