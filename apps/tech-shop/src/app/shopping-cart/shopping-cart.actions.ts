import { createAction, props } from '@ngrx/store';
import { Product } from '../../models';

export const addProductToCart = createAction(
  '[Product List] Add product To Shopping Cart',
  props<{ product: Product }>()
);
