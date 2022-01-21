import { createReducer, on } from '@ngrx/store';
import { Category } from '../../../../models';
import { loadedCategories } from '../menu.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export const menuFeatureKey = 'menu';

export type MenuState = EntityState<Category>;

export const adapter = createEntityAdapter<Category>({
  selectId: (category: Category) => category._id,
});
export const initialMenuState = adapter.getInitialState();

export const menuReducer = createReducer(
  initialMenuState,
  on(loadedCategories, (state: MenuState, { categories }) =>
    adapter.setAll(categories, state)
  )
);

export const { selectAll } = adapter.getSelectors();
