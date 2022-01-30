import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { ProductInCart } from './shopping-cart/store/reducer';
import { setProductsToCart } from './shopping-cart/store/shopping-cart.actions';

import { selectTotalInShoppingCart } from './shopping-cart/store/shopping-cart.selectors';

@Component({
  selector: 'tech-shop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  totalProducts$: Observable<number> = new Observable();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(
      setProductsToCart({
        products: JSON.parse(
          localStorage.getItem('cart') || '[]'
        ) as ProductInCart[],
      })
    );

    this.totalProducts$ = this.store.select(selectTotalInShoppingCart);
  }
}
