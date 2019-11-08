import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";


export const loadAllCourse = createAction(
    '[Course Resolver] Load all course'
);

export const allCourseLoaded = createAction(
    '[Couse Effect] All course loaded',
    props<{courses: Course[]}>()
);