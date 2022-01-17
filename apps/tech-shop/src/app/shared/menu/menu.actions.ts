import { createAction, props } from '@ngrx/store';

import { Category } from '../../../models';

export const setCategories = createAction(
  '[Menu Component] Set Categories',
  props<{ categories: Category[] }>()
);
