import { Injectable } from '@angular/core';
import {ItemInterface} from "./item.interface";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: ItemInterface[] = [];

  constructor() { }

  addItemToCart(item: ItemInterface) {
    this.cart.push(item);
  }

  removeFromCart(item: ItemInterface) {
    this.cart = this.cart.filter(cartItem => cartItem._id !== item._id);
  }
}
