import { Injectable } from "@angular/core";
import { AppState } from "../reducers";
import { Store } from "@ngrx/store";
import { ofType, createEffect } from "@ngrx/effects";
import { CoursesActions } from "./action-types";
import { mergeMap, map } from "rxjs/operators";
import { CoursesHttpService } from "./services/courses-http.service";
import { allCourseLoaded } from "./courses.actions";

@Injectable()
export class CoursesEffects {

    constructor(
        private store: Store<AppState>,
        private coursesService: CoursesHttpService
    ) {}

    loadCourses$ = createEffect(() =>
        this.store.pipe(
          ofType(CoursesActions.loadAllCourse),
          mergeMap(_ => this.coursesService.findAllCourses()),
          map(courses => allCourseLoaded({courses}))
      )
    )
}