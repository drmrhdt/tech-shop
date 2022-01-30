import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { select } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  EMPTY,
  map,
  switchMap,
  forkJoin,
  withLatestFrom,
  of,
} from 'rxjs';

import { ProductActions } from './action-types';
import { selectRouteParams } from '../../reducers';
import { Product, ProductDetails } from '@models/index';

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
      switchMap(
        ({ filters: { brands, filterString, max, min, subcategory } }) => {
          this.store.dispatch(
            ProductActions.loadBrandsAccordingToSubcategory()
          );
          return forkJoin([
            this.getProductList(subcategory, max, min, brands, filterString),
            this.getBrands(subcategory),
          ]);
        }
      ),
      switchMap((data) =>
        of(
          ProductActions.allProductsAccordingToSubcategoryLoaded({
            products: data[0].data.items,
            prices: data[0].data.prices,
          }),
          ProductActions.allBrandsAccordingToSubcategoryLoaded({
            brands: data[1].data,
          })
        )
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
        ProductActions.productDetailsLoaded({
          product: data,
        })
      ),
      catchError(() => EMPTY)
    );
  });

  getProductList(
    subcategory: string,
    max?: number,
    min?: number,
    brands?: string[],
    text?: string
  ) {
    const pricesString = min && max ? `&prices=${min},${max}` : '';
    const brandsString = brands?.length ? `&brands=${brands.join(',')}` : '';
    const textString = text ? `&text=${text}` : '';

    return this._http.get<{
      data: { items: Product[]; prices: { min: number; max: number } };
      error: string;
    }>(
      `https://course-angular.javascript.ru/api/products/?subCat=${subcategory}${pricesString}${textString}${brandsString}`
    );
  }

  getProductDetails(productName: string) {
    return this._http.get<{ data: ProductDetails; error: string }>(
      `https://course-angular.javascript.ru/api/products/${productName}`
    );
  }

  getBrands(subcategory: string) {
    return this._http.get<{ data: string[]; error: string }>(
      `https://course-angular.javascript.ru/api/brands?subCat=${subcategory}&prices=0,2000`
    );
  }
}
