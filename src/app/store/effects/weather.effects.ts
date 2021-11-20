import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {WeatherService} from "../../services/weather.service";
import {Weather} from "../../models/weather.model";
import {addLocation, addLocationFail, addLocationSuccess, removeLocation} from "../actions/weather.actions";
import {ActionCreator} from "@ngrx/store";
import {messageError, messageSuccess} from "../actions/message.actions";
import {errorsMessageEffect, successMessageEffect} from "../../global/message-generators";

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

    addLocationSuccess$ = createEffect(() =>
        successMessageEffect(
            this.actions$,
            addLocationSuccess,
            'Location was added.'
        )
    );

    addLocationFail$ = createEffect(() =>
        errorsMessageEffect(
            this.actions$,
            addLocationFail,
            'Location was not added due to error.'
        )
    );
    removeLocationSuccess$ = createEffect(() =>
        successMessageEffect(
            this.actions$,
            removeLocation,
            'Location was removed.'
        )
    );

}
