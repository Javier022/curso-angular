import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  total = 0;
  today = new Date();
  date = new Date(2022, 1, 25);

  constructor(
    private storeSerive: StoreService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      return (this.products = data);
    });
  }

  productAdded(product: IProduct) {
    this.storeSerive.addProduct(product);
    this.total = this.storeSerive.getTotal();
  }
}
