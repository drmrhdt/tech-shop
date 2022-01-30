import { createAction, props } from '@ngrx/store';

import { Suggestion } from '@models/index';

export const loadSuggestions = createAction('[Home Page] Load Suggestions');

export const loadedSuggestions = createAction(
  '[Home Page] Suggestions Loaded',
  props<{ suggestions: Suggestion[] }>()
);
