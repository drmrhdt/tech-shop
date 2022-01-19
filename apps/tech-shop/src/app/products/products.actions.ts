import { createAction, props } from '@ngrx/store';
import { Product } from '../../models';

export const loadAllProductsAccordingToSubcategory = createAction(
  '[Products List] Load All Products According To Subcategory'
);
export const allProductsAccordingToSubcategoryLoaded = createAction(
  '[Load Products Effect] All Products According To Subcategory Loaded',
  props<{ products: Product[] }>()
);
