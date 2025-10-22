// src/app/reducers/index.ts
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface AppState {
  // add state slices here, like:
  // counter: CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  // counter: counterReducer
};

export const metaReducers: MetaReducer<AppState>[] = [];
