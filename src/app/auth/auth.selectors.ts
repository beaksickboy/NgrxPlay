import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "../reducers";
import { AuthState } from "./reducers";
import { User } from "./model/user.model";


export const authKey: string = 'auth';


export const selectAuth = createFeatureSelector<AuthState>(authKey);


export const isLoggedIn = createSelector(
    selectAuth,
    state => !!state.user
)

export const isLoggedOut = createSelector(
    selectAuth,
    state => !state.user
)