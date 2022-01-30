import { createAction, props } from '@ngrx/store';

import { Category } from '@models/index';

export const loadCategories = createAction('[Menu Component] Load Categories');

export const categoriesLoaded = createAction(
  '[API] Categories Loaded',
  props<{ categories: Category[] }>()
);
