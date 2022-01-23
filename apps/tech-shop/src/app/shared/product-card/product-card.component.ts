import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../../../models';
import { ShoppingCartActions } from '../../shopping-cart/action-types';

@Component({
  selector: 'tech-shop-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: any;
  @Input() isShowButton = true;
  @Input() isShowPrice = true;

  constructor(private store: Store) {}

  addToCart(product: Product): void {
    this.store.dispatch(ShoppingCartActions.addProductToCart({ product }));
  }
}
