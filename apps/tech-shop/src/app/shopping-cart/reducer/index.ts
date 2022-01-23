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
  totalItems: number;
}

export const adapter = createEntityAdapter({
  selectId: (product: ProductInCart) => product._id,
});

export const initialShoppingCartState = adapter.getInitialState({
  isLoading: false,
  totalItems: 0,
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
        {
          ...state,
          isLoading: false,
          totalItems: countTotalProducts(currentProducts) + 1,
        }
      );
    }
    return adapter.setAll([updatedProduct, ...selectAll(state)], {
      ...state,
      isLoading: false,
      totalItems: countTotalProducts(currentProducts) + 1,
    });
  })
);

export const { selectAll } = adapter.getSelectors();

function countTotalProducts(products: ProductInCart[]) {
  const sum = products.reduce(
    (partial_sum: number, { count }) => partial_sum + count,
    0
  );
  return sum;
}
