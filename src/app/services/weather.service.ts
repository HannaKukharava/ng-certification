import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Forecast, Weather} from "../models/weather.model";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    constructor(private httpClient: HttpClient) {
    }

    getCurrentWeather(zipcode: string): Observable<Weather> {
        return this.httpClient.get(`${environment.baseUrl}/data/2.5/weather?zip=${zipcode}&appid=${environment.apiKey}&units=metric`)
            .pipe(
                map((response: any) => ({
                        zipcode,
                        locationName: response.name,
                        timestamp: response.dt,
                        conditions: response.weather[0].main,
                        temperature: response.main.temp,
                        minTemperature: response.main.temp_min,
                        maxTemperature: response.main.temp_max
                    })
                )
            );
    }

    getForecast(zipcode: string): Observable<Forecast> {
        return this.httpClient.get(`${environment.baseUrl}/data/2.5/forecast/daily?zip=${zipcode}&cnt=5&appid=${environment.apiKey}&units=metric`).pipe(
            map((response: any) => {
                    return {
                        zipcode,
                        locationName: response.city.name,
                        forecast: response.list.map((item: any) => ({
                                timestamp: item.dt,
                                conditions: item.weather[0].main,
                                minTemperature: item.temp.min,
                                maxTemperature: item.temp.max,
                            })
                        )
                    }
                }
            )
        );
    }
}
