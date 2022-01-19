import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Product } from '../../../models';
import { selectProducts } from '../products.selectors';
import { ProductActions } from '../action-types';

@Component({
  selector: 'tech-shop-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> = new Observable();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadAllProductsAccordingToSubcategory());
    this.products$ = this.store.select(selectProducts);
  }
}
