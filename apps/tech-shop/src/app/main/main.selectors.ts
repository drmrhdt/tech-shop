import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MainState, selectAll } from './reducers';

export const selectMainState = createFeatureSelector<MainState>('main');

export const selectSuggestions = createSelector(selectMainState, selectAll);

export const selectIsLoadingSuggestions = createSelector(
  selectMainState,
  ({ isLoading }) => isLoading
);
