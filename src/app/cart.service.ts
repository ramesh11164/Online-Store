import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable(
  {providedIn:'root'}
)
export class CartComponent {
  items;

  constructor(
    private cartService: CartService
    
  ) {
    this.items = this.cartService.getItems();
  }
}


export class CartService {
  items = [];

  addToCart(product) {
    this.items.push(product);
  }
 
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}