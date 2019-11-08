import { Injectable } from "@angular/core";
import { AppState } from "../reducers";
import { Store } from "@ngrx/store";
import { ofType, createEffect, Actions } from "@ngrx/effects";
import { CoursesActions } from "./action-types";
import { mergeMap, map } from "rxjs/operators";
import { CoursesHttpService } from "./services/courses-http.service";
import { allCourseLoaded } from "./courses.actions";

@Injectable()
export class CoursesEffects {
  constructor(
    private actions: Actions,
    private coursesService: CoursesHttpService
  ) {}

  loadCourses$ = createEffect(() =>
    this.actions.pipe(
      ofType(CoursesActions.loadAllCourse),
      mergeMap(_ => this.coursesService.findAllCourses()),
      map(courses => allCourseLoaded({ courses }))
    )
  );

  saveCourse$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(CoursesActions.updateCourse),
        mergeMap(state =>
          this.coursesService.saveCourse(state.update.id, state.update.changes)
        )
      ),
    { dispatch: false }
  );
}
