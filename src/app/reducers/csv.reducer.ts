import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from '../actions/csv';

export interface State {
  test: {
    path: String,
    data: Array<Array<String>>,
  };
}

export const initialState: State = {
  test: {
    path: '',
    data: []
  }
}

const csvReducer = createReducer(
  initialState,
  on(Actions.loadCSV, (state, { path, name }) => ({ ...state, [name]: {
    ...state[name],
    path
  }}))
);

export function reducer(state: State | undefined, action: Action) {
  return csvReducer(state, action);
}
