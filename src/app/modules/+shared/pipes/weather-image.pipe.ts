import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherImage'
})
export class WeatherImagePipe implements PipeTransform {

  transform(value: string): unknown {
    let name = value.toLowerCase()
    return `https://www.angulartraining.com/images/weather/${name === 'clear' ? 'sun' : name}.png`
  }

}
