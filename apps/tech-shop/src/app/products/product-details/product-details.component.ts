import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ProductDetails } from '../../../models/productDetails';
import { ProductActions } from '../store/action-types';
import { Observable } from 'rxjs';
import {
  selectDetailedProduct,
  selectIsLoading,
} from '../store/products.selectors';
import { ShoppingCartActions } from '../../shopping-cart/store/action-types';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'tech-shop-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<ProductDetails> = new Observable();
  isLoading$: Observable<boolean> = new Observable();
  isShowAllCharacteristics = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadProductDetails());
    this.product$ = this.store.select(selectDetailedProduct);
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  addToCart() {
    this.product$.pipe(untilDestroyed(this)).subscribe((p) =>
      this.store.dispatch(
        ShoppingCartActions.addProductToCart({
          product: {
            feedbacksCount: p.feedbacksCount,
            images: p.images,
            name: p.name,
            price: p.price,
            rating: p.rating,
            status: p.status,
            subCategory: p.subCategory,
            _id: p._id,
          },
        })
      )
    );
  }
}
