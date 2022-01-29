import { createAction, props } from '@ngrx/store';
import { Product, ProductDetails } from '../../models';

export const loadAllProductsAccordingToSubcategory = createAction(
  '[Products List] Load All Products According To Subcategory',
  props<{
    filters: {
      filterString: string;
      brands: string[];
      min: number;
      max: number;
      subcategory: string;
    };
  }>()
);
export const allProductsAccordingToSubcategoryLoaded = createAction(
  '[Load Products Effect] All Products According To Subcategory Loaded',
  props<{
    products: Product[];
    prices: { min: number; max: number };
    brands: string[];
  }>()
);

export const openProductDetails = createAction(
  '[Product List] Open Product Details'
);

export const loadProductDetails = createAction(
  '[Product Details] Load Product Details'
);

export const productDetailsLoaded = createAction(
  '[Product Details] Loaded Product Details',
  props<{ product: ProductDetails }>()
);
