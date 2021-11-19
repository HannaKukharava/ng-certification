import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';
import {catchError, filter, mapTo, switchMap, take} from 'rxjs/operators';
import {getForecastSelector} from "../../../store/selectors/forecast.selector";
import {loadForecast} from "../../../store/actions/forecast.actions";
import {CoreModuleState} from "../../../store/reducers";

@Injectable({
  providedIn: 'root'
})
export class LocationForecastLoadedGuard implements CanActivate {
  constructor(private store: Store<CoreModuleState>) {}
  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const routeHasZipcodeParam = !!route.params?.zipcode;
    if (routeHasZipcodeParam) {
      const zipcode = route.params.zipcode;
      this.store.dispatch(loadForecast({ zipcode }));
      return this.checkStore(zipcode).pipe(
          switchMap(() => {
            return of(true);
          }),
          catchError(error => {
            console.error('Checking store error', error);
            return of(false);
          })
      );
    } else {
      console.error('ZIPCODE parameter is missing');
      return of(false);
    }
  }

  checkStore(zipcode: string) {
    return this.store.select(getForecastSelector).pipe(
        filter(forecast => forecast?.zipcode === zipcode),
        mapTo(true),
        take(1)
    );
  }
}
