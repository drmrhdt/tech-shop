import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MenuState } from './reducers';

export const selectMenuState = createFeatureSelector<MenuState>('menu');

export const selectCategories = createSelector(
  selectMenuState,
  (menu) => menu.categories
);
