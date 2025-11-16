import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CourseState } from "./reducers/courses-reducers";
import * as fromCourses from "./reducers/courses-reducers";

export const selectCoursesState = createFeatureSelector<CourseState>('courses');
/* createFeatureSelector<CourseState>('courses') returns a memoized selector function that, when run, returns state['courses'] typed as CourseState.
The string 'courses' must match the key you registered the reducer with (StoreModule.forFeature('courses', ...) or the key in your reducers map). */

export const selectAllCourses = createSelector(
    selectCoursesState,
    fromCourses.selectAll
)

export const selectBeginnerCourses = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.category == 'BEGINNER')
)

export const selectAdvancedCourses = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.category == 'ADVANCED')
)

export const selectPromoTotal = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.promo).length
)

export const areCoursesLoaded = createSelector(
    selectCoursesState,
    coursesState => coursesState.allCoursesLoaded
)