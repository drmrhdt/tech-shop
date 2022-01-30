import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Category, Suggestion } from '../../models';
import { MainActions } from './store/action-types';
import {
  selectIsLoadingSuggestions,
  selectSuggestions,
} from './store/main.selectors';
import { Observable } from 'rxjs';
import {
  selectCategories,
  selectIsLoading,
} from '../shared/menu/menu.selectors';

@Component({
  selector: 'tech-shop-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  categories$: Observable<Category[]> = new Observable();
  suggestions$: Observable<Suggestion[]> = new Observable();
  isLoadingCategories$: Observable<boolean> = new Observable();
  isLoadingSuggestions$: Observable<boolean> = new Observable();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(MainActions.loadSuggestions());
    this.categories$ = this.store.select(selectCategories);
    this.suggestions$ = this.store.select(selectSuggestions);
    this.isLoadingCategories$ = this.store.select(selectIsLoading);
    this.isLoadingSuggestions$ = this.store.select(selectIsLoadingSuggestions);
  }
}
