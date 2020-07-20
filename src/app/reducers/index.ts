import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';

import {
  State as csvState,
  reducer as csvReducer
} from './csv.reducer';

export interface State {
  csv: csvState
}

export const reducers: ActionReducerMap<State> = {
  csv: csvReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
