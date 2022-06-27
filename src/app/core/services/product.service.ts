import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProduct } from 'src/app/product/model/products.model';
import { IData } from '../model/api.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url: string = 'http://localhost:3000/data';
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<IData> {
    return this.http.get<IData>(this.url)
  }
}
