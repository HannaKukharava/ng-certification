import {NgModule} from '@angular/core';
import {WeatherHomePageComponent} from './pages/weather-home-page/weather-home-page.component';
import {ForecastPageComponent} from './pages/forecast-page/forecast-page.component';
import {WeatherRoutingModule} from "./weather-routing.module";
import {LocationFormComponent} from './components/location-form/location-form.component';
import {LocationWeatherInfoComponent} from './components/location-weather-info/location-weather-info.component';
import {SharedModule} from "../+shared/shared.module";
import { ForecastTableComponent } from './components/forecast-table/forecast-table.component';

@NgModule({
    declarations: [
        WeatherHomePageComponent,
        ForecastPageComponent,
        LocationFormComponent,
        LocationWeatherInfoComponent,
        ForecastTableComponent,
    ],
    imports: [
        SharedModule,
        WeatherRoutingModule
    ]
})
export class WeatherModule {
}
