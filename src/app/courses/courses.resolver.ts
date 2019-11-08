import { Injectable } from "@angular/core";
import { Course } from "./model/course";
import { Resolve } from "@angular/router";
import { AppState } from "../reducers";
import { Store } from "@ngrx/store";
import { tap, first, finalize } from "rxjs/operators";
import { loadAllCourse } from "./courses.actions";

@Injectable({
    providedIn: 'root'
})
export class CoursesResolver implements Resolve<any> {
    isLoading: boolean;

    constructor(
        private store: Store<AppState>) {
    }

    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): any | import("rxjs").Observable<any> | Promise<any> {
      return this.store.pipe(
          tap(() => {
              this.isLoading = true;
              this.store.dispatch(loadAllCourse());
          }),
          first(),
          finalize(() => this.isLoading = false)
      )
    }
    
}