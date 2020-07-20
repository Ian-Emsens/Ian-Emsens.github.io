import { createAction, props } from '@ngrx/store';

export const loadCSV = createAction(
  '[CSV] Load CSV file',
  props<{ path: String, name: 'test' }>()
);
