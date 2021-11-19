import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeatherHomePageComponent} from "./pages/weather-home-page/weather-home-page.component";
import {ForecastPageComponent} from "./pages/forecast-page/forecast-page.component";


const routes: Routes = [
  {
    path: '',
    component: WeatherHomePageComponent,
    canActivate: []
  },
  {
    path: 'forecast/:zipcode',
    component: ForecastPageComponent,
    canActivate: [],
    data: {
      title: 'Forecast'
    }
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
