import {Component} from '@angular/core';
import {UserInterface} from "./user.interface";
import {ItemInterface} from "./item.interface";
import {db} from "./db";
import {CartService} from "./cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user: UserInterface | null = null;

  item: ItemInterface[] = db;
  cart: ItemInterface[];

  constructor(private cartService: CartService) {
    this.cart = this.cartService.cart;
  }

  login() {

  }

  logout() {

  }
}
