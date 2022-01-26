import { createAction, props } from '@ngrx/store';

import { Suggestion } from '../../models/suggestion';

export const loadSuggestions = createAction('[Main Page] Load Suggestions');

export const loadedSuggestions = createAction(
  '[Main Page] Suggestions Loaded',
  props<{ suggestions: Suggestion[] }>()
);
