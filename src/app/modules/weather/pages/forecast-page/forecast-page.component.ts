import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Forecast, Weather} from "../../../../models/weather.model";
import {CoreModuleState} from "../../../../store/reducers";
import {Store} from "@ngrx/store";
import {getForecastSelector} from "../../../../store/selectors/forecast.selector";

@Component({
  selector: 'app-forecast-page',
  templateUrl: './forecast-page.component.html',
  styleUrls: ['./forecast-page.component.css']
})
export class ForecastPageComponent implements OnInit {
  forecast$: Observable<Forecast>

  constructor(private store: Store<CoreModuleState>) {
    this.forecast$ = this.store.select(getForecastSelector)
  }

  ngOnInit(): void {
  }

}
