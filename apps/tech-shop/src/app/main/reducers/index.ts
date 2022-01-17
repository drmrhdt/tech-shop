import { createReducer, on } from '@ngrx/store';
import { MainActions } from '../action-types';
import { Suggestion } from '../../../models/suggestion';

export const mainFeatureKey = 'main';

export interface MainState {
  suggestions: Suggestion[];
}

export const initialAuthState: MainState = {
  suggestions: [],
};

export const mainReducer = createReducer(
  initialAuthState,
  on(MainActions.setSuggestions, (state: MainState, { suggestions }) => ({
    suggestions,
  }))
);
