import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IShoppingCart } from "../model/api.model";

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
    url: string = 'http://localhost:8000/shopping-cart'

    constructor(private http: HttpClient) {

    }
    public getShoppingCart() {
        return this.http.get<IShoppingCart>(this.url)
    }
}