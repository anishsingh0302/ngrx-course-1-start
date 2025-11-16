import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";
import { compareCourses, Course } from "../model/course";
import { allCoursesLoaded } from "../course.actions";
// Use shared Course model from ../model/course

export interface CourseState extends EntityState<Course>{
    allCoursesLoaded: boolean;
}

export const adapter = createEntityAdapter<Course>({
    sortComparer: compareCourses
});
export const initialCourseState = adapter.getInitialState(
    { allCoursesLoaded: false }
);

export const courseReducer = createReducer(
    initialCourseState,
    on(CourseActions.allCoursesLoaded,
        (state, action) => adapter.setAll(action.courses, {...state, allCoursesLoaded : true} )
    ),
    on(CourseActions.courseUpdated,
        (state, action) => adapter.updateOne(action.update, state)
    )
);

export const { selectAll } = adapter.getSelectors();
