import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { User } from '../model/user.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(private http: HttpClient) { }
  

  login(user: any): any {
    const userStringified = JSON.stringify(user)
    console.log(userStringified)
    return this.http.post('http://localhost:8000/login', userStringified , httpOptions)
  }
}
