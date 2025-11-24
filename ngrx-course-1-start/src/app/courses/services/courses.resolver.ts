import { ActivatedRouteSnapshot, MaybeAsync, RedirectCommand, Resolve, RouterStateSnapshot } from "@angular/router";
import { Course } from "../model/course";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CourseEntityService } from "./course-entity.service";
import { filter, first, map, tap } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class CourseResolver implements Resolve<boolean> {

    constructor(private courseEntityService: CourseEntityService) {}    

    resolve(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        // return this.courseEntityService.getAll()
        //    .pipe(map(courses => !!courses)
        // );

        return this.courseEntityService.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                        this.courseEntityService.getAll();
                    }
                }),
                filter(loaded => !!loaded),
                first()
            );
    }

}