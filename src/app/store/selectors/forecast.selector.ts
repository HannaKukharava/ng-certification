import {createSelector} from '@ngrx/store';
import {getForecast} from "../reducers/forecast.reducer";
import {getForecastState} from "../reducers";

export const getForecastSelector = createSelector(getForecastState, getForecast);
