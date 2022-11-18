import { Component, Input, OnInit } from '@angular/core';
import { IShoppingCart } from 'src/app/product/model/shopping-cart.model';

@Component({
  selector: '[shopping-cart-list]',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss']
})
export class ShoppingCartListComponent implements OnInit {

  @Input() listOfProducts: IShoppingCart[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
