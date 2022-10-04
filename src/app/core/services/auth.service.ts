import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, Subscription, tap } from 'rxjs';
import { User } from '../model/user.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
  observe: 'response',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  private _isLoggedIn = new BehaviorSubject<boolean>(false);

  login(user: User): Subscription {
    return this.http
      .post<any>('http://localhost:8000/login', user).subscribe((res: any) => {
        localStorage.setItem('Bearer', res.accessToken)
        this._isLoggedIn.next(true);
      })
  }

  register(user: User){
    const userStringified = JSON.stringify(user);
    console.log(userStringified);
    return this.http.post('http://localhost:8000/register', userStringified);
  }

  logout(): void {
    let removedToken = localStorage.removeItem('Bearer')
    console.log(removedToken)
    if(removedToken === undefined) {
      this._isLoggedIn.next(false)
      this.router.navigate(['/auth/login'])
    }
  }

  get isLoggedIn() {
    return this._isLoggedIn.asObservable();
  }

  matchPasswords(param1: string, param2: string): boolean {
    if(param1 === param2) {
      return true
    }
    return false
  }
}
