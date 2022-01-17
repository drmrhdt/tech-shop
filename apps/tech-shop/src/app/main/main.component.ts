import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Category, Suggestion } from '../../models';
import { MainActions } from './action-types';
import { selectSuggestions } from './main.selectors';
import { Observable } from 'rxjs';
import { selectCategories } from '../shared/menu/menu.selectors';

@Component({
  selector: 'tech-shop-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  categories$: Observable<Category[]> = new Observable();
  suggestions$: Observable<Suggestion[]> = new Observable();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(MainActions.loadSuggestions());
    this.categories$ = this.store.select(selectCategories);
    this.suggestions$ = this.store.select(selectSuggestions);
  }
}
