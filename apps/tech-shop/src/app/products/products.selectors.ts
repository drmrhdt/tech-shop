import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState, selectAll } from './reducers';

export const selectProductsState =
  createFeatureSelector<ProductsState>('products');

export const selectProducts = createSelector(selectProductsState, selectAll);

export const selectDetailedProduct = createSelector(
  selectProductsState,
  ({ selectedProduct }) => selectedProduct
);

export const selectBrands = createSelector(
  selectProductsState,
  ({ brands }) => brands
);

export const selectIsLoading = createSelector(
  selectProductsState,
  ({ isLoading }) => isLoading
);

export const selectIsLoadingBrands = createSelector(
  selectProductsState,
  ({ isLoadingBrands }) => isLoadingBrands
);

export const selectMinPrice = createSelector(
  selectProductsState,
  ({ prices }) => prices.min
);

export const selectMaxPrice = createSelector(
  selectProductsState,
  ({ prices }) => prices.max
);
