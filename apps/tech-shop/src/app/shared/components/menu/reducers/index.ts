import { createReducer, on } from '@ngrx/store';
import { Category } from '@models/index';
import { categoriesLoaded, loadCategories } from '../menu.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export const menuFeatureKey = 'menu';

export interface MenuState extends EntityState<Category> {
  categoriesLoaded: boolean;
  isLoading: boolean;
}

export const adapter = createEntityAdapter<Category>({
  selectId: (category: Category) => category._id,
});
export const initialMenuState = adapter.getInitialState({
  categoriesLoaded: false,
  isLoading: false,
});

export const menuReducer = createReducer(
  initialMenuState,
  on(loadCategories, (state): MenuState => ({ ...state, isLoading: true })),
  on(categoriesLoaded, (state: MenuState, { categories }) =>
    adapter.setAll(categories, {
      ...state,
      isLoading: false,
      categoriesLoaded: true,
    })
  )
);

export const { selectAll } = adapter.getSelectors();
