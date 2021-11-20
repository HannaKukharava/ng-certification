import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {forecastReducer, ForecastState} from "./forecast.reducer";
import {weatherReducer, WeatherState} from "./weather.reducer";


export interface CoreModuleState {
  forecast: ForecastState,
  weather: WeatherState
}

export const reducers: ActionReducerMap<CoreModuleState> = {
  forecast: forecastReducer,
  weather: weatherReducer
};

export const getForecastState = createFeatureSelector<ForecastState>('forecast');
export const getLocationsState = createFeatureSelector<WeatherState>('weather');

