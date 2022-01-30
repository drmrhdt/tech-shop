import { createAction, props } from '@ngrx/store';

import { Product } from '../../../models';
import { ProductInCart } from './reducer';

export const addProductToCart = createAction(
  '[Product List] Add Product To Shopping Cart',
  props<{ product: Product }>()
);

export const increaseProductCountInCart = createAction(
  '[Shopping Cart] Increase Product Count in Shopping Cart',
  props<{ product: Product }>()
);

export const removeProductFromCart = createAction(
  '[Shopping Cart] Remove Product From Shopping Cart',
  props<{ product: ProductInCart }>()
);

export const setProductsToCart = createAction(
  '[App Component] Set Products To Shopping Cart',
  props<{ products: ProductInCart[] }>()
);
