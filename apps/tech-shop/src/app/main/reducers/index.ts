import { createReducer, on } from '@ngrx/store';
import { MainActions } from '../action-types';
import { Suggestion } from '../../../models/suggestion';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export const mainFeatureKey = 'main';

export type MainState = EntityState<Suggestion>;

export const adapter = createEntityAdapter<Suggestion>({
  selectId: (suggestion: Suggestion) => suggestion._id,
});
export const initialSuggestionState = adapter.getInitialState();

export const mainReducer = createReducer(
  initialSuggestionState,
  on(MainActions.loadedSuggestions, (state: MainState, { suggestions }) =>
    adapter.setAll(suggestions, state)
  )
);

export const { selectAll } = adapter.getSelectors();
