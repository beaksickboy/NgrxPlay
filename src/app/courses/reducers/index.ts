import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Course, compareCourses } from "../model/course";
import { createReducer, on } from "@ngrx/store";
import { CoursesActions } from "../action-types";

export interface CoursesState extends EntityState<Course> {}

export const coursesAdapter = createEntityAdapter<Course>({
  sortComparer: compareCourses
});

export const coursesReducers = createReducer(
  coursesAdapter.getInitialState(),
  on(CoursesActions.allCourseLoaded, (state, action) =>
    coursesAdapter.addAll(action.courses, state)
  ),

  on(CoursesActions.updateCourse, (state, action) =>
    coursesAdapter.updateOne(action.update, state)
  )
);

export const { selectAll } = coursesAdapter.getSelectors();
