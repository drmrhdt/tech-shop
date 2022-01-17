import { createAction, props } from '@ngrx/store';

import { Suggestion } from '../../models/suggestion';

export const setSuggestions = createAction(
  '[Main Page] Set Suggestions',
  props<{ suggestions: Suggestion[] }>()
);
