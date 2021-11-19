import {createAction, props} from '@ngrx/store';
import {HttpError} from "../../models/http-error.model";
import {Weather} from "../../models/weather.model";

export enum WeatherActionTypes {
  Add = '[Weather] Add Location',
  AddSuccess = '[Weather] Add Location Success',
  AddFail = '[Weather] Add Location Fail',
  Remove = '[Weather] Remove Location'
}

export const addLocation = createAction(WeatherActionTypes.Add, props<{ zipcode: string }>());
export const addLocationSuccess = createAction(WeatherActionTypes.AddSuccess, props<{ weather: Weather }>());
export const addLocationFail = createAction(WeatherActionTypes.AddFail, props<{ error: HttpError }>());
export const removeLocation = createAction(WeatherActionTypes.Remove, props<{ zipcode: string }>());
