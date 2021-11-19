import {Action, createReducer, on} from '@ngrx/store';
import {Forecast} from "../../models/weather.model";
import {loadForecastSuccess} from "../actions/forecast.actions";


export interface ForecastState {
  forecast: Forecast
}

export const initialState: ForecastState = {
  forecast: undefined
};

export const _forecastReducer = createReducer(
  initialState,
  on(loadForecastSuccess, (state, { forecast }) => reduceLoadSuccess(state, forecast))
);

export function forecastReducer(state = initialState, action: Action) {
  return _forecastReducer(state, action);
}

function reduceLoadSuccess(state: any, forecast: Forecast) {
  return {...state, forecast}
}


export const getForecast = (state: ForecastState) => state.forecast
