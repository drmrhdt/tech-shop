import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Category, Suggestion } from '@models/index';
import { HomeActions } from './store/action-types';
import {
  selectIsLoadingSuggestions,
  selectSuggestions,
} from './store/home.selectors';
import { Observable } from 'rxjs';
import {
  selectCategories,
  selectIsLoading,
} from '@shared/components/menu/menu.selectors';

@Component({
  selector: 'tech-shop-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories$: Observable<Category[]> = new Observable();
  suggestions$: Observable<Suggestion[]> = new Observable();
  isLoadingCategories$: Observable<boolean> = new Observable();
  isLoadingSuggestions$: Observable<boolean> = new Observable();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(HomeActions.loadSuggestions());
    this.categories$ = this.store.select(selectCategories);
    this.suggestions$ = this.store.select(selectSuggestions);
    this.isLoadingCategories$ = this.store.select(selectIsLoading);
    this.isLoadingSuggestions$ = this.store.select(selectIsLoadingSuggestions);
  }
}
