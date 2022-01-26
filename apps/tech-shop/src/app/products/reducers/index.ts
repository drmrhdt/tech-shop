import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../../../models';
import { ProductActions } from '../action-types';

export const mainFeatureKey = 'products';

export interface ProductsState extends EntityState<Product> {
  selectedProduct: any;
  isLoading: boolean;
}

export const adapter = createEntityAdapter<Product>({
  selectId: (product: Product) => product._id,
});
export const initialProductsState = adapter.getInitialState({
  selectedProduct: {},
  isLoading: false,
});
export const productsReducer = createReducer(
  initialProductsState,
  on(
    ProductActions.allProductsAccordingToSubcategoryLoaded,
    (state, { products }) => adapter.setAll(products, state)
  ),
  on(
    ProductActions.loadProductDetails,
    (state): ProductsState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    ProductActions.loadedProductDetails,
    (state, { product }): ProductsState => ({
      ...state,
      selectedProduct: product,
      isLoading: false,
    })
  )
);

export const { selectAll } = adapter.getSelectors();
