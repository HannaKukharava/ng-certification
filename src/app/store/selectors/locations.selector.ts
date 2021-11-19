import {createSelector} from '@ngrx/store';
import {getLocationsState} from "../reducers";
import {getWeather} from "../reducers/locations.reducer";

export const getWeatherSelector = createSelector(getLocationsState, getWeather);
