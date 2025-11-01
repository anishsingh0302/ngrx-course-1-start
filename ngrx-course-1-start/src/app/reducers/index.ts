// src/app/reducers/index.ts
import { routerReducer } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface AppState {
  // add state slices here, like:
  // counter: CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  'router' : routerReducer
  // counter: counterReducer
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state: any, action: any): any => {
    console.log('state before', state);
    console.log('action', action);

    return reducer(state, action);
  }
}

export const metaReducers: MetaReducer<AppState>[] = [logger];
