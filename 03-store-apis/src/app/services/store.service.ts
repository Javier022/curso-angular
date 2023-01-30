import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IProduct } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  shoopingCart: IProduct[] = [];
  total = 0;
  cart = new BehaviorSubject<IProduct[]>([]);

  cart$ = this.cart.asObservable();

  constructor() {}

  addProduct(product: IProduct) {
    this.shoopingCart = [...this.shoopingCart, product];
    this.cart.next(this.shoopingCart);
  }

  getTotal(): number {
    return this.shoopingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
