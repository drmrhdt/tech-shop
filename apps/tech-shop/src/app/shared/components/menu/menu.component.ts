import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, first, tap, Observable } from 'rxjs';

import { Category } from '@models/index';
import { MenuActions } from './action-types';
import {
  selectCategories,
  selectCategoriesLoaded,
  selectIsLoading,
} from './menu.selectors';

@Component({
  selector: 'tech-shop-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  categories$: Observable<Category[]> = new Observable();
  isLoading$: Observable<boolean> = new Observable();

  openMap: { [name: string]: boolean } = {
    sub0: false,
    sub1: false,
    sub2: false,
    sub3: false,
    sub4: false,
    sub5: false,
    sub6: false,
  };

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.categories$ = this.store.select(selectCategories);
    this.store
      .select(selectCategoriesLoaded)
      .pipe(
        tap((categoriesLoaded) => {
          if (!categoriesLoaded) {
            this.store.dispatch(MenuActions.loadCategories());
          }
        }),
        // without filter categoriesLoaded flag with emit a value that would terminate the observable BEFORE data fetching took place
        filter((categoriesLoaded) => categoriesLoaded), // make sure that we FETCHED data
        first() // first operator will terminate the observable only when categoriesLoaded === true
      )
      .subscribe();
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }
}
