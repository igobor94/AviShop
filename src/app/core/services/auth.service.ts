import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { User } from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  login(user: any): any {
    console.log(user)
    return this.http.post('http://localhost:8000/login', user).subscribe(data => console.log(data))
  }
}
