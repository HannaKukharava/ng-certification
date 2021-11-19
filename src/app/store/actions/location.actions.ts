import {createAction, props} from '@ngrx/store';
import {HttpError} from "../../models/http-error.model";
import {Weather} from "../../models/weather.model";

export enum LocationActionTypes {
  Load = '[Location] Load Locations',
  LoadSuccess = '[Location] Load Locations',
  LoadFail = '[Location] Load Locations',

  Add = '[Location] Add Location',
  AddSuccess = '[Location] Add Location Success',
  AddFail = '[Location] Add Location Fail',

  Remove = '[Location] Remove Location'
}

export const loadLocations = createAction(LocationActionTypes.Load, props<{ zipcodes: string[] }>());
export const loadLocationsSuccess = createAction(LocationActionTypes.LoadSuccess, props<{ zipcodes: string[] }>());
export const loadLocationsFail = createAction(LocationActionTypes.LoadFail, props<{ error: HttpError }>())


export const addLocation = createAction(LocationActionTypes.Add, props<{ zipcode: string }>());
export const addLocationSuccess = createAction(LocationActionTypes.AddSuccess, props<{ weather: Weather }>());
export const addLocationFail = createAction(LocationActionTypes.AddFail, props<{ error: HttpError }>());

export const removeLocation = createAction(LocationActionTypes.Remove, props<{ zipcode: string }>());
