import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {WeatherService} from "../../services/weather.service";
import {loadForecast, loadForecastFail, loadForecastSuccess} from "../actions/forecast.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class ForecastEffects {
    constructor(private actions$: Actions, private service: WeatherService) {
    }

    loadForecast$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(loadForecast),
                switchMap(({zipcode}) => {
                        return this.service.getForecast(zipcode).pipe(
                            map((forecast) => loadForecastSuccess({ forecast })),
                            catchError(error => of(loadForecastFail({error: error.message})))
                        );
                    }
                )
            );
        }
    );
}
