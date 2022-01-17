import { createReducer, on } from '@ngrx/store';
import { Category } from '../../../../models';
import { loadedCategories } from '../menu.actions';

export const menuFeatureKey = 'menu';

export interface MenuState {
  categories: Category[];
}

export const initialAuthState: MenuState = {
  categories: [],
};

export const menuReducer = createReducer(
  initialAuthState,
  on(
    loadedCategories,
    (state: MenuState, { categories }): { categories: Category[] } => ({
      categories,
    })
  )
);
