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
  on(
    ShoppingCartActions.addProductToCart,
    ShoppingCartActions.increaseProductCountInCart,
    (state, { product }) => addProductToTheCart(product, state)
  ),
  on(ShoppingCartActions.setProductsToCart, (state, { products }) =>
    adapter.setAll(products, {
      ...state,
      totalItems: countTotalProducts(products),
    })
  ),
  on(ShoppingCartActions.removeProductFromCart, (state, { product }) =>
    removeProductFromCart(product, state)
  )
);

export const { selectAll } = adapter.getSelectors();

function addProductToTheCart(
  product: ProductInCart | Product,
  state: ShoppingCartState
) {
  const currentProducts = selectAll(state);
  let updatedProduct: ProductInCart = { ...product, count: 1 };
  const curProduct = currentProducts.find((p) => p._id === product._id);

  updateProductsAfterAddingInLocalStorage(updatedProduct);

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
}

function countTotalProducts(products: ProductInCart[]) {
  const sum = products.reduce(
    (partial_sum: number, { count }) => partial_sum + count,
    0
  );
  return sum;
}

function removeProductFromCart(product: ProductInCart, state: any) {
  const currentProducts = selectAll(state);
  const curProduct = currentProducts.find((p) => p._id === product._id);

  if (!curProduct) {
    return;
  }

  updateProductsAfterSubstractingInLocalStorage(curProduct);

  const updatedProduct = { ...curProduct, count: curProduct.count - 1 };

  if (updatedProduct.count === 0 && currentProducts.length === 1) {
    return adapter.removeAll(state);
  }

  if (updatedProduct.count > 0) {
    return adapter.updateOne(
      { id: updatedProduct._id, changes: updatedProduct },
      {
        ...state,
        totalItems: countTotalProducts(currentProducts) - 1,
      }
    );
  } else {
    return adapter.removeOne(updatedProduct._id, {
      ...state,
      totalItems: countTotalProducts(currentProducts) - 1,
    });
  }
}

function updateProductsAfterSubstractingInLocalStorage(
  updatedProduct: ProductInCart
) {
  const cartText = 'cart';
  const productsFromLocalStorage = JSON.parse(
    localStorage.getItem(cartText) || '[]'
  );
  if (productsFromLocalStorage?.length) {
    const productIndex = productsFromLocalStorage.findIndex(
      (p: ProductInCart) => p._id === updatedProduct._id
    );

    if (productIndex > -1) {
      const prod = productsFromLocalStorage.splice(productIndex, 1)[0];
      prod.count--;

      if (prod.count !== 0) {
        localStorage.setItem(
          cartText,
          JSON.stringify([prod, ...productsFromLocalStorage])
        );
      } else {
        localStorage.setItem(
          cartText,
          JSON.stringify([...productsFromLocalStorage])
        );
      }
    } else {
      localStorage.setItem(
        cartText,
        JSON.stringify([...productsFromLocalStorage, updatedProduct])
      );
    }
  } else {
    localStorage.setItem(cartText, JSON.stringify([updatedProduct]));
  }
}

function updateProductsAfterAddingInLocalStorage(
  updatedProduct: ProductInCart
) {
  const cartText = 'cart';
  const productsFromLocalStorage = JSON.parse(
    localStorage.getItem(cartText) || '[]'
  );
  if (productsFromLocalStorage?.length) {
    const productIndex = productsFromLocalStorage.findIndex(
      (p: ProductInCart) => p._id === updatedProduct._id
    );

    if (productIndex > -1) {
      const prod = productsFromLocalStorage.splice(productIndex, 1)[0];
      prod.count++;
      localStorage.setItem(
        cartText,
        JSON.stringify([prod, ...productsFromLocalStorage])
      );
    } else {
      localStorage.setItem(
        cartText,
        JSON.stringify([...productsFromLocalStorage, updatedProduct])
      );
    }
  } else {
    localStorage.setItem(cartText, JSON.stringify([updatedProduct]));
  }
}
