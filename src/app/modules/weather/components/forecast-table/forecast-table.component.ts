import {Component, Input, OnInit} from '@angular/core';
import {Forecast, Weather} from "../../../../models/weather.model";

@Component({
  selector: 'app-forecast-table',
  templateUrl: './forecast-table.component.html',
  styleUrls: ['./forecast-table.component.css']
})
export class ForecastTableComponent implements OnInit {
  @Input() forecast: Forecast

  constructor() { }

  ngOnInit(): void {
  }

}
