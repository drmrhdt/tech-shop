import { createReducer, on } from '@ngrx/store';
import { MainActions } from '../action-types';
import { Suggestion } from '@models/index';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export const mainFeatureKey = 'main';

export interface MainState extends EntityState<Suggestion> {
  isLoading: boolean;
}

export const adapter = createEntityAdapter<Suggestion>({
  selectId: (suggestion: Suggestion) => suggestion._id,
});
export const initialSuggestionState = adapter.getInitialState({
  isLoading: false,
});

export const mainReducer = createReducer(
  initialSuggestionState,
  on(
    MainActions.loadSuggestions,
    (state): MainState => ({ ...state, isLoading: true })
  ),
  on(MainActions.loadedSuggestions, (state: MainState, { suggestions }) =>
    adapter.setAll(suggestions, { ...state, isLoading: false })
  )
);

export const { selectAll } = adapter.getSelectors();
