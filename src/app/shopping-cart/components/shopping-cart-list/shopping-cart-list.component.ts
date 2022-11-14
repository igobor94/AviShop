import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[shopping-cart-list]',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss']
})
export class ShoppingCartListComponent implements OnInit {

  @Input() listOfProducts: any = []

  constructor() { }

  ngOnInit(): void {
  }

}
