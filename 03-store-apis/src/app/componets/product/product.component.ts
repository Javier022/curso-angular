import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct, ICategory } from '../../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: IProduct = {
    id: '',
    title: '',
    images: [],
    price: 0,
    category: { id: 0, name: '' },
    description: ' ',
  };
  @Output() addProduct = new EventEmitter<IProduct>();

  addToCart() {
    this.addProduct.emit(this.product);
  }
}
