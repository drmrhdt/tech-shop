import { createReducer, on } from '@ngrx/store';
import { Product } from '../../../models/product';
import { ProductActions } from '../action-types';

export const mainFeatureKey = 'products';

export interface ProductsState {
  products: Product[];
}

export const initialProductsState: ProductsState = {
  products: [],
};

export const productsReducer = createReducer(
  initialProductsState,
  on(
    ProductActions.allProductsAccordingToSubcategoryLoaded,
    (state: ProductsState, { products }): { products: Product[] } => ({
      products,
    })
  )
);
