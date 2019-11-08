import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./reducers";
import * as fromCourses from "./reducers/index";

export const selectCourses = createFeatureSelector<CoursesState>("courses");

export const selectAllCourse = createSelector(
  selectCourses,
  fromCourses.selectAll
);

export const selectBeginnerCourses = createSelector(
  selectAllCourse,
  courses => courses.filter(course => course.category === "BEGINNER")
);

export const selectAdvancedCourses = createSelector(
  selectAllCourse,
  courses => courses.filter(course => course.category === "ADVANCED")
);
