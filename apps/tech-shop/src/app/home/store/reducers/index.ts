import { createReducer, on } from '@ngrx/store';
import { HomeActions } from '../action-types';
import { Suggestion } from '@models/index';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export const homeFeatureKey = 'home';

export interface HomeState extends EntityState<Suggestion> {
  isLoading: boolean;
}

export const adapter = createEntityAdapter<Suggestion>({
  selectId: (suggestion: Suggestion) => suggestion._id,
});
export const initialSuggestionState = adapter.getInitialState({
  isLoading: false,
});

export const homeReducer = createReducer(
  initialSuggestionState,
  on(
    HomeActions.loadSuggestions,
    (state): HomeState => ({ ...state, isLoading: true })
  ),
  on(HomeActions.loadedSuggestions, (state: HomeState, { suggestions }) =>
    adapter.setAll(suggestions, { ...state, isLoading: false })
  )
);

export const { selectAll } = adapter.getSelectors();
