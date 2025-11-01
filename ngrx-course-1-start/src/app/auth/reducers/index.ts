import { isDevMode } from '@angular/core';
import {
  Action,
  ActionCreator,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
  ReducerTypes
} from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActions } from '../action-types';

export const authFeatureKey = 'auth';

export interface AuthState {
  user : User
}

export const initialAuthState: AuthState = {
  user: undefined
};

export const authReducer =  createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    return {
      user : action.user
    }
  }),

  on(AuthActions.logout, (state) => {
    return {
      user : undefined
    }
  })
)

// export const reducers: ActionReducerMap<AuthState> = {

// };

// export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
