import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '@models/index';
import { ProductActions } from '../action-types';
import { ProductDetails } from '../../../models/productDetails';

export const homeFeatureKey = 'products';

export interface ProductsState extends EntityState<Product> {
  selectedProduct: ProductDetails;
  isLoading: boolean;
  isLoadingBrands: boolean;
  prices: { min: number; max: number };
  brands?: string[];
  filters?: {
    filterString: string;
    brands: string[];
    min: number;
    max: number;
    subcategory: string;
  };
}

export const adapter = createEntityAdapter<Product>({
  selectId: (product: Product) => product._id,
});
export const initialProductsState = adapter.getInitialState({
  selectedProduct: {} as ProductDetails,
  isLoading: false,
  isLoadingBrands: false,
  prices: { min: 0, max: 0 },
});
export const productsReducer = createReducer(
  initialProductsState,
  on(
    ProductActions.loadAllProductsAccordingToSubcategory,
    (state, { filters }): ProductsState => ({
      ...state,
      isLoading: true,
      prices: { min: 0, max: 0 },
      filters,
    })
  ),
  on(
    ProductActions.allProductsAccordingToSubcategoryLoaded,
    (state, { products, prices }) =>
      adapter.setAll(products, { ...state, isLoading: false, prices })
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
  ),
  on(
    ProductActions.loadBrandsAccordingToSubcategory,
    (state): ProductsState => ({
      ...state,
      isLoadingBrands: true,
    })
  ),
  on(
    ProductActions.allBrandsAccordingToSubcategoryLoaded,
    (state, { brands }): ProductsState => ({
      ...state,
      brands,
      isLoadingBrands: false,
    })
  )
);

export const { selectAll } = adapter.getSelectors();
