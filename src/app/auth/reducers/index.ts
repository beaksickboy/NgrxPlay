import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { User } from '../model/user.model';
import { AuthAction } from '../action-types';

export interface AuthState {
  user: User
}

const initialState: AuthState = {
  user: undefined
}

// export const reducers: ActionReducerMap<AuthState> = {

// };

export const authReducer = createReducer(initialState,
  on(AuthAction.login, (state, action) => {
    return {
      user: action.user
    }
  }),
  on(AuthAction.logout, (state, action) => ({}))
);


export const metaReducers: MetaReducer<AuthState>[] = !environment.production ? [] : [];


