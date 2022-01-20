import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../../../models/product';
import { ProductActions } from '../action-types';

export const mainFeatureKey = 'products';

export type ProductsState = EntityState<Product>;

export const adapter = createEntityAdapter<Product>({
  selectId: (product: Product) => product._id,
});
export const initialProductsState = adapter.getInitialState();
export const productsReducer = createReducer(
  initialProductsState,
  on(
    ProductActions.allProductsAccordingToSubcategoryLoaded,
    (state, { products }) => adapter.setAll(products, state)
  )
);

export const { selectAll } = adapter.getSelectors();
