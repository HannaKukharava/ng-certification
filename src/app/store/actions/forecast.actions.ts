import {createAction, props} from '@ngrx/store';
import {HttpError} from "../../models/http-error.model";
import {Forecast, Weather} from "../../models/weather.model";

export enum ForecastActionTypes {
  Load = '[Forecast] Load Forecast',
  LoadSuccess = '[Forecast] Load Forecast Success',
  LoadFail = '[Forecast] Load Forecast Fail',
}

export const loadForecast = createAction(ForecastActionTypes.Load, props<{ zipcode: string }>());
export const loadForecastSuccess = createAction(ForecastActionTypes.LoadSuccess, props<{ forecast: Forecast }>());
export const loadForecastFail = createAction(ForecastActionTypes.LoadFail, props<{ error: HttpError }>());
