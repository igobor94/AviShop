import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "src/app/product/model/products.model";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    url: string = 'http://localhost:8000/data'
    constructor(private http: HttpClient) {

    }

    public getProducts(): Observable<IProduct[] | any> {
        return this.http.get<IProduct[]>(this.url)
    }

}