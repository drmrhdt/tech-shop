import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Product } from '../../../models';
import { ShoppingCartActions } from '../action-types';

export const shoppingCartFeatureKey = 'shoppingCart';

export interface ProductInCart extends Product {
  count: number;
}

export interface ShoppingCartState extends EntityState<ProductInCart> {
  isLoading: boolean;
}

export const adapter = createEntityAdapter({
  selectId: (product: ProductInCart) => product._id,
});

export const initialShoppingCartState = adapter.getInitialState({
  isLoading: false,
});
export const shoppingCartReducer = createReducer(
  initialShoppingCartState,
  on(ShoppingCartActions.addProductToCart, (state, { product }) => {
    const currentProducts = selectAll(state);
    let updatedProduct: ProductInCart = { ...product, count: 1 };
    const curProduct = currentProducts.find((p) => p._id === product._id);
    if (curProduct) {
      updatedProduct = { ...product, count: curProduct.count + 1 };

      return adapter.updateOne(
        { id: updatedProduct._id, changes: updatedProduct },
        { ...state, isLoading: false }
      );
    }
    return adapter.setAll([updatedProduct, ...selectAll(state)], {
      ...state,
      isLoading: false,
    });
  })
);

export const { selectAll } = adapter.getSelectors();
