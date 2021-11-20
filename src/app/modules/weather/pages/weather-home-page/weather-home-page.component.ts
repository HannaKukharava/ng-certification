import {Component, OnInit} from '@angular/core';
import {Weather} from "../../../../models/weather.model";
import {CoreModuleState} from "../../../../store/reducers";
import {Store} from "@ngrx/store";
import {getWeatherSelector} from "../../../../store/selectors/locations.selector";
import {Observable} from "rxjs";
import {addLocation, removeLocation} from "../../../../store/actions/weather.actions";

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home-page.component.html',
  styleUrls: ['./weather-home-page.component.css']
})
export class WeatherHomePageComponent implements OnInit {
  weather$: Observable<Weather[]>

  constructor(private store: Store<CoreModuleState>) {
    this.weather$ = this.store.select(getWeatherSelector)
  }

  ngOnInit(): void {
  }

  onAddLocation(zipcode: string){
    this.store.dispatch(addLocation({ zipcode }))
  }

  onRemoveLocation(zipcode: string){
    this.store.dispatch(removeLocation({ zipcode }))
  }

}
