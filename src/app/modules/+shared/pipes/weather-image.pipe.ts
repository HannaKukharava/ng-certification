import { Pipe, PipeTransform } from '@angular/core';
import {WeatherConditions} from "../../../global/enums/weather-conditions";

@Pipe({
  name: 'weatherImage'
})
export class WeatherImagePipe implements PipeTransform {

  transform(value: WeatherConditions): string {
    if(Object.values(WeatherConditions).includes(value)){
      let name = value.toLowerCase()
      return `https://www.angulartraining.com/images/weather/${name === 'clear' ? 'sun' : name}.png`
    }
    return `https://www.angulartraining.com/images/weather/sun.png`
  }
}
