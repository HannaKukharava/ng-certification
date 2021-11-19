import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {forecastReducer, ForecastState} from "./forecast.reducer";
import {locationReducer, LocationsState} from "./locations.reducer";


export interface CoreModuleState {
  forecast: ForecastState,
  locations: LocationsState
}

export const reducers: ActionReducerMap<CoreModuleState> = {
  forecast: forecastReducer,
  locations: locationReducer
};

export const getForecastState = createFeatureSelector<ForecastState>('forecast');
export const getLocationsState = createFeatureSelector<LocationsState>('locations');

