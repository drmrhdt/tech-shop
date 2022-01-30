import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState, selectAll } from './reducers';

export const selectHomeState = createFeatureSelector<HomeState>('home');

export const selectSuggestions = createSelector(selectHomeState, selectAll);

export const selectIsLoadingSuggestions = createSelector(
  selectHomeState,
  ({ isLoading }) => isLoading
);
