import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MainState } from './reducers';

export const selectMainState = createFeatureSelector<MainState>('main');

export const selectSuggestions = createSelector(
  selectMainState,
  (main) => main.suggestions
);
