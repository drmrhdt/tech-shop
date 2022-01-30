import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MenuState, selectAll } from './reducers';

export const selectMenuState = createFeatureSelector<MenuState>('menu');

export const selectCategories = createSelector(selectMenuState, selectAll);

export const selectCategoriesLoaded = createSelector(
  selectMenuState,
  ({ categoriesLoaded }) => categoriesLoaded
);

export const selectIsLoading = createSelector(
  selectMenuState,
  ({ isLoading }) => isLoading
);
