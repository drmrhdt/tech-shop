import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { select } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, switchMap, withLatestFrom } from 'rxjs';

import { ProductActions } from './action-types';
import { selectRouteParams } from '../reducers';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private _http: HttpClient,
    private store: Store
  ) {}

  products$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadAllProductsAccordingToSubcategory),
      withLatestFrom(this.store.pipe(select(selectRouteParams))),
      switchMap((data: any) => this.getProductList(data[1].subcategory)),
      map(({ data: { items } }) =>
        ProductActions.allProductsAccordingToSubcategoryLoaded({
          products: items,
        })
      ),
      catchError(() => EMPTY)
    );
  });

  getProductList(subcategory: string) {
    return this._http.get<any>(
      `https://course-angular.javascript.ru/api/products/?subCat=${subcategory}`
    );
  }
}
