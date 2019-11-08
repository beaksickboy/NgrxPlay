import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { AuthAction } from "./action-types";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private router: Router) {

    }

    login$ = createEffect(() => this.actions$.pipe(
        ofType(AuthAction.login),
        tap(action => {
            localStorage.setItem('user', JSON.stringify(action.user));
            this.router.navigateByUrl('/courses');
        })
    ), { dispatch: false });

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(AuthAction.logout),
        tap(_ => {
            localStorage.removeItem('user');
            this.router.navigateByUrl('/login')
        })
    ), { dispatch: false });
}