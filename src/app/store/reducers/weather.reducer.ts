import {Action, createReducer, on} from '@ngrx/store';
import {addLocationSuccess, removeLocation} from "../actions/weather.actions";
import {Weather} from "../../models/weather.model";

export interface WeatherState {
  weather: Weather[]
}

export const initialState: WeatherState = {
  weather: []
};

export const _weatherReducer = createReducer(
  initialState,
  on(addLocationSuccess, (state, { weather }) => reduceAddSuccess(state, weather)),
  on(removeLocation, (state, { zipcode }) => reduceRemoveSuccess(state, zipcode)),
);

export function weatherReducer(state = initialState, action: Action) {
  return _weatherReducer(state, action);
}

function reduceAddSuccess(state: WeatherState, weatherItem: Weather) {
  const weather = state.weather?.find(item => item.zipcode === weatherItem.zipcode) ? [...state.weather] : [...state.weather, weatherItem]
  return {...state, weather}
}

function reduceRemoveSuccess(state: WeatherState, zipcode: string) {
  const weather = state.weather?.filter(item => item.zipcode !== zipcode)
  return {...state,  weather}
}

export const getWeather = (state: WeatherState) => state.weather
