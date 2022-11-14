import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[shopping-cart-item]',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {
  
  @Input() cart: any = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.cart)
  }

}
