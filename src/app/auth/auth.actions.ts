import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";


export const login = createAction(
    '[Login Page] Login',
    // Generic is type parameter of this payload
    props<{user: User}>()
);

export const logout = createAction(
    '[Home Page] Logout'
);