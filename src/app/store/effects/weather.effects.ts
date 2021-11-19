import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {WeatherService} from "../../services/weather.service";
import {Weather} from "../../models/weather.model";
import {addLocation, addLocationFail, addLocationSuccess} from "../actions/weather.actions";

@Injectable()
export class WeatherEffects {
    constructor(private actions$: Actions, private service: WeatherService) {
    }

    addLocation$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(addLocation),
                switchMap(({zipcode}) => {
                        return this.service.getCurrentWeather(zipcode).pipe(
                            map((weather: Weather) => addLocationSuccess({weather})),
                            catchError(error => of(addLocationFail({error: error.message})))
                        );
                    }
                )
            );
        }
    );
}
