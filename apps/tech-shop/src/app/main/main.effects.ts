import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, EMPTY, map, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MainActions } from './action-types';

@Injectable()
export class MainEffects {
  constructor(private actions$: Actions, private _http: HttpClient) {}

  loadSuggestions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MainActions.loadSuggestions),
      switchMap(() => this.getRandomSuggestions()),
      map(({ data: { items } }) =>
        MainActions.loadedSuggestions({ suggestions: items })
      ),
      catchError(() => EMPTY)
    );
  });

  getRandomSuggestions() {
    return this._http.get<any>(
      'https://course-angular.javascript.ru/api/products/suggestion'
    );
  }
}
