import { Component, Input, OnInit } from '@angular/core';
import { IShoppingCart } from 'src/app/product/model/shopping-cart.model';

@Component({
  selector: '[shopping-cart-item]',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {
  
  @Input() cart: IShoppingCart = {};
  isSelected: boolean = true;

  constructor() { }

  ngOnInit(): void {  
    console.log(this.cart = {...this.cart, isSelected: true})
    {this.cart, this.isSelected}
  }

}
