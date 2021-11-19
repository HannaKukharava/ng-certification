import {Action, createReducer, on} from '@ngrx/store';
import {addLocationSuccess, removeLocation} from "../actions/location.actions";
import {RequestState, RequestStateDefault, RequestStateFinishedSuccess} from "../../models/request-state.model";
import {Weather} from "../../models/weather.model";

export interface LocationsState {
  weather: Weather[],
  load: RequestState
}

export const initialState: LocationsState = {
  weather: [],
  load: RequestStateDefault
};

export const _locationReducer = createReducer(
  initialState,
  on(addLocationSuccess, (state, { weather }) => reduceAddSuccess(state, weather)),
  on(removeLocation, (state, { zipcode }) => reduceRemoveSuccess(state, zipcode)),
);

export function locationReducer(state = initialState, action: Action) {
  return _locationReducer(state, action);
}

function reduceAddSuccess(state: LocationsState, weatherItem: Weather) {
  const weather = state.weather.find(item => item.zipcode === weatherItem.zipcode) ? [...state.weather] : [...state.weather, weatherItem]
  return {...state, load: RequestStateFinishedSuccess,  weather}
}

function reduceRemoveSuccess(state: LocationsState, zipcode: string) {
  const weather = state.weather?.filter(item => item.zipcode !== zipcode)
  return {...state, load: RequestStateFinishedSuccess,  weather}
}


export const getWeather = (state: LocationsState) => state.weather
