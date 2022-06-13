import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
    declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
    imports: [
        CommonModule
    ]
})

export class ProductModule {}