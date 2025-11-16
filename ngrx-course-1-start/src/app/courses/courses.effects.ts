import { createEffect, ofType, Actions } from "@ngrx/effects";
import { CourseActions } from "./action-types";
import { concatMap, map } from "rxjs/operators";
import { CoursesHttpService } from "./services/courses-http.service";
import { allCoursesLoaded } from "./course.actions";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CoursesEffects {
    constructor(
        private actions$: Actions,
        private coursesHttpService: CoursesHttpService
    ){}

    loadCourses$ = createEffect(
        () =>
        this.actions$.pipe(
            ofType(CourseActions.loadAllCourses),
            concatMap(action => 
                this.coursesHttpService.findAllCourses()
            ),
            map(courses => allCoursesLoaded({ courses }))
        )
    );

    saveCourse$ = createEffect(
        () =>
        this.actions$.pipe(
            ofType(CourseActions.courseUpdated),
            concatMap(action => 
                this.coursesHttpService.saveCourse(
                    action.update.id,
                    action.update.changes
                ))
            ),
            { dispatch: false }
        )

        /* dispatch: false tells NgRx Effects that this effect will NOT emit (dispatch) any action. Use it for fire-and-forget side effects (e.g., call HTTP to persist something already updated in the store optimistically).
Without dispatch: false, the effect must return an action object (or Observable<Action>) — otherwise Angular will error. */
}
