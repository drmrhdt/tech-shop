import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MenuState, selectAll } from './reducers';

export const selectMenuState = createFeatureSelector<MenuState>('menu');

export const selectCategories = createSelector(selectMenuState, selectAll);
