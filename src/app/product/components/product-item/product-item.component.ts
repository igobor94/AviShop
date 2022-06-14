import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../model/products.model';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct = {id: 0, title: ''}

  ngOnInit(): void {
    console.log(this.product)
  }


}
