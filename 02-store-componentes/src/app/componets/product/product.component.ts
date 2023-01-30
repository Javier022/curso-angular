import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: IProduct = {
    id: '',
    title: '',
    image: '',
    price: 0,
    category: '',
    description: ' ',
  };
  @Output() addProduct = new EventEmitter<IProduct>();

  addToCart() {
    this.addProduct.emit(this.product);
  }
}
