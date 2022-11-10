import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartListComponent } from './components/shopping-cart-list/shopping-cart-list.component';
import { ShoppingCartItemComponent } from './components/shopping-cart-item/shopping-cart-item.component';



@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShoppingCartListComponent,
    ShoppingCartItemComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
