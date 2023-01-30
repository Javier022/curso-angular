import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activeMenu = false;
  cantProducts = 0;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.cart$.subscribe((products) => {
      this.cantProducts = products.length;
    });
  }

  toogleMenu() {
    this.activeMenu = !this.activeMenu;
  }
}
