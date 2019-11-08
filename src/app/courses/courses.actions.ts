import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";
import { Update } from "@ngrx/entity";


export const loadAllCourse = createAction(
    '[Course Resolver] Load all course'
);

export const allCourseLoaded = createAction(
    '[Couse Effect] All course loaded',
    props<{courses: Course[]}>()
);

export const updateCourse = createAction(
    '[EditCourseDialog] Update Course',
    props<{update: Update<Course>}>()
);
