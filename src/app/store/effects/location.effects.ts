import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {HttpError} from "../../models/http-error.model";
import {WeatherService} from "../../services/weather.service";
import {Weather} from "../../models/weather.model";
import {addLocation, addLocationFail, addLocationSuccess} from "../actions/location.actions";

@Injectable()
export class LocationEffects {
    constructor(private actions$: Actions, private service: WeatherService) {
    }

    addLocation$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(addLocation),
                switchMap(({zipcode}) => {
                        return this.service.getCurrentWeather(zipcode).pipe(
                            map((weather: Weather) => addLocationSuccess({weather})),
                            catchError((error: HttpError) => of(addLocationFail({error})))
                        );
                    }
                )
            );
        }
    );
}
