import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Weather} from "../../../../models/weather.model";

@Component({
  selector: 'app-location-weather-info',
  templateUrl: './location-weather-info.component.html',
  styleUrls: ['./location-weather-info.component.css']
})
export class LocationWeatherInfoComponent implements OnInit {
  @Input() weather: Weather[]
  @Output() removeLocation: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

}
