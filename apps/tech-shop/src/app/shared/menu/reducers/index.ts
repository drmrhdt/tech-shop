import { createReducer, on } from '@ngrx/store';
import { Category } from '../../../../models';
import { setCategories } from '../menu.actions';

export const menuFeatureKey = 'menu';

export interface MenuState {
  categories: Category[];
}

export const initialAuthState: MenuState = {
  categories: [],
};

export const menuReducer = createReducer(
  initialAuthState,
  on(setCategories, (state: MenuState, { categories }) => ({
    categories,
  }))
);
