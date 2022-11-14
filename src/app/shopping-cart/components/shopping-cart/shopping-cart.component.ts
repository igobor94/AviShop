import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { IProduct } from 'src/app/product/model/products.model';

@Component({
  selector: '[shopping-cart]',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  products: IProduct[] = []

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartService.getShoppingCart().subscribe(response => this.products = [...this.products, ...response.products])
  }

}
