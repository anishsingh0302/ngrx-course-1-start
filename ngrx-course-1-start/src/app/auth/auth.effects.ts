import { Action, createAction } from "@ngrx/store";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { AuthActions } from "./action-types";
import { tap } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class AuthEffects {

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.login),
            tap(action => {
                localStorage.setItem('user', JSON.stringify(action.user))
            }
        )), { dispatch: false }
    );

    logOut$ = createEffect(() =>
          this.actions$.pipe(
            ofType(AuthActions.logout),
            tap(() => {
                localStorage.removeItem('user');
            }
        )), { dispatch: false } 
    );
    

    constructor(private actions$: Actions) {

    /* const login$ = this.actions$.pipe(
            ofType(AuthActions.login),
            tap(action => {
                localStorage.setItem('user', JSON.stringify(action.user));
            })
        );
        login$.subscribe();
        */
        /*
        this.actions$.subscribe(actions => {
            if(actions.type === '[Login Page] User Login') {

                localStorage.setItem('user', JSON.stringify(actions["user"]));
            }
        });
     }  
    */

    }
}


