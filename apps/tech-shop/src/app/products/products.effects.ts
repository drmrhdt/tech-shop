import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { select } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, switchMap, withLatestFrom } from 'rxjs';

import { ProductActions } from './action-types';
import { selectRouteParams } from '../reducers';
import { Product, ProductDetails } from '../../models';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private _http: HttpClient,
    private store: Store
  ) {}

  products$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadAllProductsAccordingToSubcategory),
      withLatestFrom(this.store.pipe(select(selectRouteParams))),
      switchMap((data: any) => this.getProductList(data[1].subcategory)),
      map(({ data: { items } }) =>
        ProductActions.allProductsAccordingToSubcategoryLoaded({
          products: items,
        })
      ),
      catchError(() => EMPTY)
    )
  );

  productDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProductDetails),
      withLatestFrom(this.store.pipe(select(selectRouteParams))),
      switchMap((data: any) => this.getProductDetails(data[1].productName)),
      map(({ data }) =>
        ProductActions.loadedProductDetails({
          product: data,
        })
      ),
      catchError(() => EMPTY)
    );
  });

  getProductList(subcategory: string) {
    return this._http.get<{
      data: { items: Product[]; prices: { min: number; max: number } };
      error: string;
    }>(
      `https://course-angular.javascript.ru/api/products/?subCat=${subcategory}`
    );
  }

  getProductDetails(productName: string) {
    return this._http.get<{ data: ProductDetails; error: string }>(
      `https://course-angular.javascript.ru/api/products/${productName}`
    );
  }
}
