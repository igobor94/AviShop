import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductRoutingModule } from './index';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductItemComponent,
  ],
  imports: [CommonModule, NgxPaginationModule, ProductRoutingModule],
  exports: [ProductComponent, ProductListComponent, ProductDetailsComponent],
})
export class ProductModule {}
