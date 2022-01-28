import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../../../models';
import { ProductActions } from '../action-types';

export const mainFeatureKey = 'products';

export interface ProductsState extends EntityState<Product> {
  selectedProduct: any;
  isLoading: boolean;
  prices: { min: number; max: number };
  brands?: string[];
}

export const adapter = createEntityAdapter<Product>({
  selectId: (product: Product) => product._id,
});
export const initialProductsState = adapter.getInitialState({
  selectedProduct: {},
  isLoading: false,
  prices: { min: 0, max: 0 },
  // brands: [],
});
export const productsReducer = createReducer(
  initialProductsState,
  on(
    ProductActions.loadAllProductsAccordingToSubcategory,
    (state): ProductsState => ({
      ...state,
      isLoading: true,
      prices: { min: 0, max: 0 },
    })
  ),
  on(
    ProductActions.allProductsAccordingToSubcategoryLoaded,
    (state, { products, prices, brands }) =>
      adapter.setAll(products, { ...state, isLoading: false, prices, brands })
  ),
  on(
    ProductActions.loadProductDetails,
    (state): ProductsState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    ProductActions.productDetailsLoaded,
    (state, { product }): ProductsState => ({
      ...state,
      selectedProduct: product,
      isLoading: false,
    })
  )
);

export const { selectAll } = adapter.getSelectors();
