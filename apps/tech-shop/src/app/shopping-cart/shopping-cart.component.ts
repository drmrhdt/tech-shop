import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { ShoppingCartActions } from './action-types';
import { ProductInCart } from './reducer';
import { selectProductsFromShoppingCart } from './shopping-cart.selectors';

@Component({
  selector: 'tech-shop-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  products$: Observable<ProductInCart[]> = new Observable();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.products$ = this.store.select(selectProductsFromShoppingCart);
  }

  addToCart(product: ProductInCart) {
    this.store.dispatch(
      ShoppingCartActions.increaseProductCountInCart({ product })
    );
  }

  removeFromCart(product: ProductInCart) {
    this.store.dispatch(ShoppingCartActions.removeProductFromCart({ product }));
  }
}
