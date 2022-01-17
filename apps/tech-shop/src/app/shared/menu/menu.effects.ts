import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, EMPTY, map, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { MenuActions } from './action-types';

@Injectable()
export class MenuEffects {
  constructor(private actions$: Actions, private _http: HttpClient) {}

  loadCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MenuActions.loadCategories),
      switchMap(() => this.getCategories()),
      map((data: any) =>
        MenuActions.loadedCategories({ categories: data.data })
      ),
      catchError(() => EMPTY)
    );
  });

  getCategories() {
    return this._http.get(
      'https://course-angular.javascript.ru/api/categories'
    );
  }
}
