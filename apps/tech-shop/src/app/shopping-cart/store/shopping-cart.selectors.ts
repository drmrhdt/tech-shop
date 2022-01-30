import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';
import { selectAll, ShoppingCartState } from './reducer';

export const selectShoppingCartState =
  createFeatureSelector<ShoppingCartState>('shoppingCart');

export const selectProductsFromShoppingCart = createSelector(
  selectShoppingCartState,
  selectAll
);

export const selectTotalInShoppingCart = createSelector(
  selectShoppingCartState,
  ({ totalItems }) => totalItems
);
