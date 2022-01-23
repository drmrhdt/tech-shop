import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { selectTotalInShoppingCart } from './shopping-cart/shopping-cart.selectors';

@Component({
  selector: 'tech-shop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  totalProducts$: Observable<number> = new Observable();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.totalProducts$ = this.store.select(selectTotalInShoppingCart);
  }
}
