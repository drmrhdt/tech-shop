import { createAction, props } from '@ngrx/store';
import { Product, ProductDetails } from '../../models';

export const loadAllProductsAccordingToSubcategory = createAction(
  '[Products List] Load All Products According To Subcategory'
);
export const allProductsAccordingToSubcategoryLoaded = createAction(
  '[Load Products Effect] All Products According To Subcategory Loaded',
  props<{ products: Product[] }>()
);

export const openProductDetails = createAction(
  '[Product List] Open Product Details'
);

export const loadProductDetails = createAction(
  '[Porduct Details] Load Product Details'
);

export const loadedProductDetails = createAction(
  '[Porduct Details] Loaded Product Details',
  props<{ product: ProductDetails }>()
);
